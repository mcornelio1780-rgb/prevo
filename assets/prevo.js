/* Prevo · núcleo compartido: idioma, sesión, formularios, pagos y logo */
(function () {
  const C = window.PREVO_CONFIG || {};
  const LANGS = ['es', 'en', 'pt', 'fr'];
  const store = {
    get(k) { try { return window.localStorage ? localStorage.getItem(k) : null } catch (_) { return null } },
    set(k, v) { try { window.localStorage && localStorage.setItem(k, v) } catch (_) {} }
  };
  // ---------- idioma ----------
  function getLang() {
    let l = null;
    try { l = new URLSearchParams(location.search).get('lang') } catch (_) {}
    l = l || store.get('prevo_lang') || (navigator.language || 'es').slice(0, 2);
    return LANGS.includes(l) ? l : 'es';
  }
  function setLang(l) {
    if (!LANGS.includes(l)) return;
    store.set('prevo_lang', l);
    try { const u = new URL(location.href); u.searchParams.set('lang', l); history.replaceState(null, '', u) } catch (_) {}
  }
  function link(path, extra) {
    const p = new URLSearchParams(extra || {});
    p.set('lang', getLang());
    return path + '?' + p.toString();
  }
  // ---------- supabase ----------
  const configured = !!(C.supabaseUrl && C.supabaseAnonKey && window.supabase && window.supabase.createClient);
  let sb = null;
  if (configured) {
    try { sb = window.supabase.createClient(C.supabaseUrl, C.supabaseAnonKey, { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true, flowType: 'pkce' } }) } catch (e) { console.warn('Supabase', e) }
  }
  async function getUser() {
    if (!sb) return null;
    try { const { data } = await sb.auth.getSession(); return (data && data.session && data.session.user) || null } catch (_) { return null }
  }
  function onAuth(cb) { if (sb) try { sb.auth.onAuthStateChange((ev, s) => cb(ev, s && s.user)) } catch (_) {} }
  async function signOut() { if (sb) try { await sb.auth.signOut() } catch (_) {} }
  function uuid() {
    if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => { const r = Math.random() * 16 | 0; return (c == 'x' ? r : (r & 3 | 8)).toString(16) });
  }
  const emailOk = e => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(e || '').trim());
  // Guarda un registro en una tabla. Devuelve {ok, where}
  const table = name => (C.tablePrefix == null ? 'prevo_' : C.tablePrefix) + name;
  async function insert(name, row) {
    const tbl = table(name);
    let ok = false, where = 'none';
    if (sb) {
      try { const { error } = await sb.from(tbl).insert(row); if (!error) { ok = true; where = 'supabase' } else console.warn(tbl, error) } catch (e) { console.warn(tbl, e) }
    }
    if (!ok) { // respaldo local para no perder nada
      try { const k = 'prevo_pending_' + name; const a = JSON.parse(store.get(k) || '[]'); a.push(row); store.set(k, JSON.stringify(a)); where = 'local' } catch (_) {}
    }
    if (C.notifyEndpoint && name === 'leads') { // aviso por correo solo para formularios, no para clics
      try {
        const flat = {};
        Object.keys(row).forEach(k => { const v = row[k]; if (v != null && v !== '') flat[k] = typeof v === 'object' ? JSON.stringify(v) : v });
        flat._subject = 'Prevo · nuevo contacto: ' + (row.company || row.email || '');
        flat._template = 'table'; flat._captcha = 'false';
        const r = await fetch(C.notifyEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(flat) });
        if (r.ok && !ok) { ok = true; where = 'notify' }
      } catch (_) {}
    }
    return { ok, where };
  }
  async function saveLead(lead) {
    if (lead._hp) return { ok: true, where: 'spam' }; // honeypot
    delete lead._hp;
    const u = await getUser();
    const row = Object.assign({ id: uuid(), lang: getLang(), page: location.pathname.split('/').pop() || 'index.html', user_id: u ? u.id : null, created_at: new Date().toISOString() }, lead);
    return insert('leads', row);
  }
  // ---------- pagos (Polar) ----------
  const POLAR_LOCALE = { es: 'es', en: 'en', pt: 'pt-BR', fr: 'fr' };
  function checkoutUrl(plan, opts) {
    opts = opts || {};
    const base = (C.polar || {})[plan];
    if (!base || !/^https:\/\//.test(base)) return null;
    const u = new URL(base);
    if (opts.email && emailOk(opts.email)) u.searchParams.set('customer_email', opts.email.trim());
    if (opts.name) u.searchParams.set('customer_name', opts.name);
    if (opts.ref) u.searchParams.set('reference_id', opts.ref);
    u.searchParams.set('locale', POLAR_LOCALE[getLang()] || 'es');
    u.searchParams.set('utm_source', 'prevo-web');
    u.searchParams.set('utm_medium', opts.medium || location.pathname.split('/').pop() || 'index');
    u.searchParams.set('utm_campaign', plan);
    return u.toString();
  }
  async function checkout(plan, opts) {
    opts = opts || {};
    const u = await getUser();
    if (!opts.email && u) opts.email = u.email;
    const ref = opts.ref || uuid();
    opts.ref = ref;
    const url = checkoutUrl(plan, opts);
    await insert('checkout_starts', { id: ref, plan, email: opts.email || null, user_id: u ? u.id : null, lang: getLang(), source: opts.medium || location.pathname.split('/').pop() || 'index', meta: opts.meta || {}, created_at: new Date().toISOString() });
    if (!url) return { ok: false, reason: 'not_configured' };
    window.location.href = url;
    return { ok: true };
  }
  // ---------- logo ----------
  const THEMES = {
    positive: { text: '#0E1630', ring: '#2E3CF0', dot: '#FFB020', cone: '#CBD2FF', dash: '#2E3CF0' },
    negative: { text: '#F3F4F7', ring: '#FFB020', dot: '#FFB020', cone: 'rgba(203,210,255,.28)', dash: '#CBD2FF' },
    ultra: { text: '#FFFFFF', ring: '#FFFFFF', dot: '#FFB020', cone: 'rgba(255,255,255,.22)', dash: '#FFFFFF' }
  };
  function logo(theme, h) {
    const t = THEMES[theme || 'positive']; h = h || 30;
    return `<svg role="img" aria-label="Prevo" viewBox="0 0 300 90" height="${h}" xmlns="http://www.w3.org/2000/svg"><path d="M196 47 L292 19 Q298 47 292 75 Z" fill="${t.cone}"/><line x1="196" y1="47" x2="290" y2="40" stroke="${t.dash}" stroke-width="3" stroke-dasharray="5 6" stroke-linecap="round"/><text x="2" y="66" font-family="'Bricolage Grotesque',sans-serif" font-weight="700" font-size="74" letter-spacing="-3" fill="${t.text}" textLength="148" lengthAdjust="spacingAndGlyphs">prev</text><circle cx="176" cy="47" r="17" fill="none" stroke="${t.ring}" stroke-width="9"/><circle cx="176" cy="47" r="6.5" fill="${t.dot}"/></svg>`;
  }
  function isDark() {
    const d = document.documentElement.dataset.theme;
    if (d) return d === 'dark';
    try { return matchMedia('(prefers-color-scheme: dark)').matches } catch (_) { return false }
  }
  // ---------- nav de sesión (mismo comportamiento en todas las páginas) ----------
  const NAV_T = {
    es: { login: 'Iniciar sesión', account: 'Mi cuenta', logout: 'Salir' },
    en: { login: 'Log in', account: 'My account', logout: 'Log out' },
    pt: { login: 'Entrar', account: 'Minha conta', logout: 'Sair' },
    fr: { login: 'Se connecter', account: 'Mon compte', logout: 'Se déconnecter' }
  };
  async function renderAuth(el, opts) {
    if (!el) return;
    if (!sb) { el.innerHTML = ''; return } // sin Supabase no se muestra el login
    opts = opts || {};
    const t = NAV_T[getLang()];
    const u = await getUser();
    if (u) {
      el.innerHTML = `<a class="btn s sm" href="${link('app.html')}" title="${(u.email || '').replace(/"/g, '')}">${t.account}</a>` + (opts.logout ? ` <button type="button" class="btn s sm" data-logout>${t.logout}</button>` : '');
      const b = el.querySelector('[data-logout]');
      if (b) b.onclick = async () => { await signOut(); location.href = link('index.html') };
    } else {
      el.innerHTML = `<a class="btn s sm" href="${link('login.html', { next: opts.next || location.pathname.split('/').pop() || 'index.html' })}">${t.login}</a>`;
    }
  }
  window.Prevo = { C, LANGS, table, store, getLang, setLang, link, sb, configured: !!sb, getUser, onAuth, signOut, uuid, emailOk, insert, saveLead, checkoutUrl, checkout, logo, isDark, renderAuth };
})();
