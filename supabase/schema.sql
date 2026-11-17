-- =====================================================================
-- PREVO · Base de datos (Supabase → SQL Editor → New query → pegar todo → Run)
-- Se puede correr más de una vez sin romper nada.
-- Todas las tablas llevan el prefijo prevo_ para poder usar un proyecto de Supabase
-- que ya tengas (por ejemplo el de otro producto de Limly LLC) sin chocar con sus tablas.
-- =====================================================================

-- 1) LEADS: formulario de contacto de la landing y pedidos de reporte del MVP
create table if not exists public.prevo_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  email text not null check (char_length(email) between 5 and 200),
  name text check (char_length(name) <= 120),
  company text check (char_length(company) <= 160),
  country text check (char_length(country) <= 80),
  message text check (char_length(message) <= 4000),
  plan text check (char_length(plan) <= 40),
  source text check (char_length(source) <= 60),
  lang text check (char_length(lang) <= 5),
  page text check (char_length(page) <= 60),
  user_id uuid references auth.users(id) on delete set null,
  meta jsonb not null default '{}'::jsonb,
  status text not null default 'nuevo'
);

-- 2) CHECKOUT_STARTS: cada clic en "comprar" (antes de ir a Polar). reference_id = id
create table if not exists public.prevo_checkout_starts (
  id uuid primary key,
  created_at timestamptz not null default now(),
  plan text not null check (char_length(plan) <= 40),
  email text check (char_length(email) <= 200),
  user_id uuid references auth.users(id) on delete set null,
  lang text, source text,
  meta jsonb not null default '{}'::jsonb
);

-- 3) CHECKOUT_RETURNS: cuando Polar devuelve al cliente a /gracias.html tras pagar
create table if not exists public.prevo_checkout_returns (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  checkout_id text check (char_length(checkout_id) <= 120),
  plan text, email text, user_id uuid references auth.users(id) on delete set null, lang text
);

-- 4) FORECASTS: pronósticos guardados por cada usuario con cuenta
create table if not exists public.prevo_forecasts (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  name text check (char_length(name) <= 160),
  freq text, horizon int, best_method text, improvement numeric, mape numeric,
  data jsonb not null default '{}'::jsonb
);

-- ---------- Seguridad (Row Level Security) ----------
alter table public.prevo_leads enable row level security;
alter table public.prevo_checkout_starts enable row level security;
alter table public.prevo_checkout_returns enable row level security;
alter table public.prevo_forecasts enable row level security;

-- Cualquiera puede ENVIAR un formulario, pero nadie puede LEERLOS desde la web.
-- Tú los ves en Supabase → Table Editor (con tu cuenta de administrador).
drop policy if exists "prevo_leads_insert" on public.prevo_leads;
create policy "prevo_leads_insert" on public.prevo_leads for insert to anon, authenticated
  with check (user_id is null or user_id = auth.uid());

drop policy if exists "prevo_starts_insert" on public.prevo_checkout_starts;
create policy "prevo_starts_insert" on public.prevo_checkout_starts for insert to anon, authenticated
  with check (user_id is null or user_id = auth.uid());

drop policy if exists "prevo_returns_insert" on public.prevo_checkout_returns;
create policy "prevo_returns_insert" on public.prevo_checkout_returns for insert to anon, authenticated
  with check (user_id is null or user_id = auth.uid());

-- Cada usuario ve, crea y borra solo SUS pronósticos
drop policy if exists "prevo_forecasts_select_own" on public.prevo_forecasts;
create policy "prevo_forecasts_select_own" on public.prevo_forecasts for select to authenticated using (user_id = auth.uid());
drop policy if exists "prevo_forecasts_insert_own" on public.prevo_forecasts;
create policy "prevo_forecasts_insert_own" on public.prevo_forecasts for insert to authenticated with check (user_id = auth.uid());
drop policy if exists "prevo_forecasts_delete_own" on public.prevo_forecasts;
create policy "prevo_forecasts_delete_own" on public.prevo_forecasts for delete to authenticated using (user_id = auth.uid());

-- Índices útiles
create index if not exists prevo_leads_created_idx on public.prevo_leads (created_at desc);
create index if not exists prevo_forecasts_user_idx on public.prevo_forecasts (user_id, created_at desc);

-- Vista para revisar ventas: clic en comprar + regreso de Polar (solo admin)
create or replace view public.prevo_v_embudo as
select s.created_at, s.plan, s.email, s.lang, s.source, r.checkout_id, (r.id is not null) as volvio_de_polar
from public.prevo_checkout_starts s
left join public.prevo_checkout_returns r on r.email = s.email and r.plan = s.plan and r.created_at >= s.created_at
order by s.created_at desc;
revoke all on public.prevo_v_embudo from anon, authenticated;
