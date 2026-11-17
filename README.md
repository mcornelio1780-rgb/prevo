# Prevo · Guía de lanzamiento (costo $0)

## ⚡ Lanzar HOY, sin Supabase y sin links de Polar

La web funciona completa desde el primer día, aunque todavía no tengas Supabase ni los Checkout Links:

| Qué | Hoy (sin configurar nada) | Cuando configures |
|---|---|---|
| Landing en ES/EN/PT/FR | ✅ Funciona | — |
| MVP / app de pronóstico | ✅ Funciona completo (CSV, Excel, ejemplos, PDF, CSV) | — |
| Formulario de contacto | ✅ Te llega a **manyosa@limly.io** (FormSubmit, gratis) | Además se guarda en Supabase |
| "Pedir reporte" desde el MVP | ✅ Te llega por correo | Además se guarda en Supabase |
| Botones de compra | Llevan al formulario con el plan elegido y le dicen al cliente que le envías el link de pago hoy | Abren la página de pago de Polar |
| Botón "Iniciar sesión" | No se muestra (nadie ve nada roto) | Aparece solo |
| Avisos de "modo de prueba" | **No hay ninguno** | — |

**Única acción obligatoria hoy:** la primera vez que alguien llene el formulario (hazlo tú mismo como prueba), FormSubmit envía a manyosa@limly.io un correo **"Activate Form"**. Ábrelo y haz clic. Revisa spam. Desde ahí todos los formularios llegan a tu bandeja.

### El orden que rompe el "círculo vicioso"

1. **Sube el zip a GitHub → conecta a Vercel** (secciones 6 y 7). Ya tienes tu dirección, por ejemplo `https://prevo-web.vercel.app`.
2. **Polar → Checkout Links**: ahora sí tienes la dirección para el Success URL. El Return URL es **opcional** (si lo dejas vacío, solo no aparece el botón "volver"), y ambos se pueden editar después.
3. **Supabase** (cuando puedas): corre `schema.sql` y copia URL + clave.
4. **Actualizar la web:** NO necesitas un zip nuevo. En GitHub abre `config.js` → ícono del lápiz ✏️ → pega los links y claves → **Commit changes**. Vercel publica solo en menos de un minuto.

---

## ¿Dónde pego `schema.sql`? (la parte de seguridad)

Es el código que crea las tablas y las protege. Se pega **dentro de Supabase**, no en GitHub ni en Vercel:

1. Entra a https://supabase.com/dashboard y abre tu proyecto.
2. Menú izquierdo → **SQL Editor** (ícono `>_`).
3. Botón **+ New query**.
4. Abre `supabase/schema.sql` con cualquier editor de texto (TextEdit en Mac), **selecciona todo**, copia y pega en el editor de Supabase.
5. Botón verde **Run** (o Cmd + Enter). Debe decir *"Success. No rows returned"*.
6. Verifica en **Table Editor**: aparecen `prevo_leads`, `prevo_checkout_starts`, `prevo_checkout_returns`, `prevo_forecasts`.

Se puede correr dos veces sin romper nada.

---

## Alternativas gratis a Supabase

| Opción | Gratis | Login correo + Google | Guarda formularios | Esfuerzo con este código |
|---|---|---|---|---|
| **Supabase** en un proyecto que ya tengas (recomendado) | ✅ | ✅ | ✅ | Ninguno: ya está hecho (tablas con prefijo `prevo_`) |
| **Sin base de datos** (lo que ya funciona hoy) | ✅ | ❌ | ✅ por correo (FormSubmit) | Ninguno |
| **Firebase** (Google, plan Spark) | ✅ | ✅ (incluye correo de verificación gratis) | ✅ Firestore | Tengo que adaptar el código (unas horas) |
| **Appwrite Cloud** (plan Free) | ✅ | ✅ | ✅ | Adaptar código |
| **Neon** | ✅ (100 proyectos) | ❌ solo base de datos | Necesita servidor | No recomendado para esta web |

Recomendación: lanza hoy sin base de datos, y conecta Supabase usando uno de tus 2 proyectos actuales (las tablas `prevo_` no chocan con nada).

---

Prevo es una marca de **Limly LLC** (Delaware, EE. UU.). El paso a paso detallado de Polar también está en el documento "Polar paso a paso".

Sitio estático (HTML + JavaScript) listo para GitHub + Vercel. Las cuentas de usuario y los formularios se guardan en Supabase (plan gratis). Los cobros los hace Polar.

```
prevo-web/
├── index.html          Landing ES/EN/PT/FR
├── app.html            MVP de pronóstico (funciona sin cuenta; con cuenta guarda pronósticos)
├── login.html          Entrar, crear cuenta, Google, recuperar contraseña
├── gracias.html        Página a la que Polar devuelve al cliente después de pagar
├── legal.html          Términos, Privacidad, IA y regulación, Cookies (4 idiomas)
├── 404.html
├── config.js           ← EL ÚNICO ARCHIVO QUE EDITAS
├── assets/             prevo.js (núcleo compartido), base.css, legal-content.js, icon-512.png
├── logos/              logos 1:1 en PNG y SVG
├── plantilla-prevo.csv plantilla que descargan los clientes
├── supabase/schema.sql tablas y seguridad de la base de datos
├── vercel.json         configuración de Vercel
├── robots.txt, sitemap.xml
```

Orden recomendado (unas 2 horas en total): **1 Polar → 2 Supabase → 3 Google → 4 Correo (SMTP) → 5 config.js → 6 GitHub → 7 Vercel → 8 Pruebas.**

---

## 1. Polar: crear los productos y los links de pago (30 min)

### 1.1 Cuenta y organización
1. Entra a https://polar.sh y crea tu cuenta (puedes usar GitHub o correo).
2. Crea la organización: nombre **Prevo**, slug **prevo**, y completa el perfil (sitio web, descripción: "Pronósticos de demanda para negocios con inventario", correo de soporte).
3. En **Settings → Payouts / Finance** conecta la cuenta para recibir pagos (Stripe Connect) con los datos de **Limly LLC** (EIN y cuenta bancaria de la LLC). Sin esto Polar no te puede pagar. Completa también la verificación de identidad que pida.
4. Lee la política de uso aceptable de Polar. Prevo se vende como **producto digital**: un reporte PDF + CSV y acceso a software. Describe los productos así.

> Para probar sin cobrar de verdad: usa https://sandbox.polar.sh (cuenta separada) con la tarjeta de prueba 4242 4242 4242 4242, fecha futura y cualquier CVC. Cuando todo funcione, repite los pasos en la cuenta real.

### 1.2 Crear los 4 productos
En **Products → New Product**, crea uno por uno:

| # | Nombre | Tipo de precio | Precio | Descripción sugerida |
|---|---|---|---|---|
| 1 | Prevo · Pronóstico Fundadores | One-time (pago único), Fixed | 99 USD | Pronóstico de 12 períodos de una serie (ventas, unidades, clientes, toneladas), prueba contra tu método actual, reporte PDF + CSV, entrega en 48 h y llamada de 15 min. Precio de fundadores. |
| 2 | Prevo · Pronóstico 48h | One-time, Fixed | 149 USD | Igual que el anterior, precio regular. |
| 3 | Prevo · Plan Mensual | Recurring (suscripción), Monthly | 199 USD / mes | Hasta 5 series, actualización semanal, alertas cuando cambia la tendencia, panel con historial de aciertos, soporte por correo. |
| 4 | Prevo · Anticipo Proyecto Industrial | One-time, Fixed | 500 USD | Anticipo para proyectos de agro, minería o energía: varias series, variables externas, acuerdo de confidencialidad. (Opcional: si no lo creas, el botón abre el formulario de contacto.) |

En cada producto:
- **Media:** sube `logos/prevo-isotipo-1x1-ultramar-1080.png` como imagen.
- **Benefits:** no hace falta ninguno. El reporte lo entregas tú por correo.
- **Custom fields (opcional):** agrega un campo de texto "Empresa" (slug `empresa`).
- Guarda.

### 1.3 Crear un Checkout Link por producto
En **Products → Checkout Links → New Link**, crea 4 links (uno por producto):

| Link | Producto | Success URL | Return URL |
|---|---|---|---|
| founders | Pronóstico Fundadores | `https://TU-SITIO.vercel.app/gracias.html?checkout_id={CHECKOUT_ID}&plan=founders` | `https://TU-SITIO.vercel.app/#pricing` |
| standard | Pronóstico 48h | `https://TU-SITIO.vercel.app/gracias.html?checkout_id={CHECKOUT_ID}&plan=standard` | igual |
| monthly | Plan Mensual | `https://TU-SITIO.vercel.app/gracias.html?checkout_id={CHECKOUT_ID}&plan=monthly` | igual |
| industrial | Anticipo Industrial | `https://TU-SITIO.vercel.app/gracias.html?checkout_id={CHECKOUT_ID}&plan=industrial` | igual |

- Escribe `{CHECKOUT_ID}` tal cual: Polar lo reemplaza solo.
- Si todavía no tienes la dirección de Vercel, crea los links ahora y edita el Success URL después del paso 7.
- **Metadata (opcional):** `plan = founders` (o el que corresponda).
- Copia la URL de cada link (empieza con `https://buy.polar.sh/`). **No copies** la URL de la página de pago que se abre al visitarlo: esa caduca.

**Pásame esto en el chat:**
```
founders:   https://buy.polar.sh/...
standard:   https://buy.polar.sh/...
monthly:    https://buy.polar.sh/...
industrial: https://buy.polar.sh/...   (o "no")
```

La web agrega sola a cada link el correo del cliente (`customer_email`), el idioma de la página de pago (`locale`: es, en, pt-BR, fr), una referencia (`reference_id`) y la campaña (`utm_*`).

### 1.4 Cupón de fundadores (opcional)
**Products → Discounts → New**: código `FUNDADOR`, 100% del precio del Pronóstico 48h menos $50, máximo 5 usos. Úsalo si prefieres tener un solo producto de $149.

---

## 2. Supabase: base de datos y cuentas (20 min)

### 2.0 Si ya usaste tus 2 proyectos gratis
El plan gratis permite **2 proyectos activos por persona**, sumando todas las organizaciones donde eres dueño o administrador. Los proyectos **pausados no cuentan**. Opciones, de la más rápida a la más trabajosa:

| Opción | Costo | Tiempo | Cuándo elegirla |
|---|---|---|---|
| **A. Usar uno de tus proyectos actuales** (recomendada) | $0 | 5 min | Siempre que uno de los dos tenga espacio. Las tablas de Prevo llevan el prefijo `prevo_`, así que no chocan con las que ya existan |
| **B. Pausar un proyecto que no uses** y crear `prevo` | $0 | 10 min | Si uno de los dos es una prueba vieja. Se puede restaurar después (mientras tengas un cupo libre) |
| **C. Que otro socio de Limly LLC cree la organización** y te invite como *Developer* | $0 | 15 min | Si hay otro miembro de la LLC. El límite cuenta solo para dueños y administradores, así que no te resta cupo |
| **D. Supabase Pro** | $25/mes por organización | 5 min | Después de las primeras ventas: proyectos ilimitados y sin pausas por inactividad |

**Supabase no está conectado a GitHub en este proyecto**: GitHub solo se conecta a Vercel. La web le habla a Supabase con la URL y la clave de `config.js`, sin importar qué cuenta creó el proyecto.

**Si eliges la opción A, ten en cuenta:**
- Los usuarios (Authentication → Users) se comparten con la otra app del mismo proyecto. Para un MVP no es problema; separa más adelante si crece.
- En Authentication → URL Configuration **no cambies** el Site URL si la otra app lo usa; solo **agrega** las Redirect URLs de Prevo (la web siempre indica a dónde volver).
- Las plantillas de correo (activación y recuperación) son las del proyecto: redáctalas de forma neutral o con el nombre de Limly.
- El límite de 500 MB de base de datos se comparte: los formularios de Prevo ocupan muy poco.

### 2.1 Crear o elegir el proyecto
1. Opción A: abre el proyecto que vas a usar. Opciones B/C: **New project** → nombre `prevo`, región **East US** (o la más cercana a tus clientes), contraseña fuerte (guárdala).
2. **SQL Editor → New query** → pega todo el contenido de `supabase/schema.sql` → **Run**. Crea 4 tablas (todas con prefijo `prevo_`):

| Tabla | Qué guarda | Quién escribe | Quién lee |
|---|---|---|---|
| `prevo_leads` | Formulario de contacto de la landing (correo, empresa, país, plan, mensaje/pregunta) y pedidos de reporte desde el MVP | Cualquier visitante | Solo tú, en el panel |
| `prevo_checkout_starts` | Cada clic en "comprar" antes de ir a Polar (plan, correo, idioma, página) | Cualquier visitante | Solo tú |
| `prevo_checkout_returns` | Cada cliente que vuelve de Polar después de pagar | Cualquier visitante | Solo tú |
| `prevo_forecasts` | Pronósticos guardados por cada usuario con cuenta | El usuario | Solo ese usuario (y tú) |

3. **Project Settings → API** (o **API Keys**): copia la **Project URL** y la clave **anon / publishable**. La clave `service_role` / `secret` **nunca** va en la web.
4. **Authentication → URL Configuration**:
   - Site URL: `https://TU-SITIO.vercel.app`
   - Redirect URLs: agrega `https://TU-SITIO.vercel.app/**` y `http://localhost:8000/**` (para probar en tu Mac).
5. **Authentication → Providers → Email**: activado, con **Confirm email** encendido (el usuario recibe un correo para activar su cuenta).

**Pásame en el chat:** la Project URL y la clave anon/publishable.

### ¿Dónde veo los formularios y los clientes?
- **Table Editor → prevo_leads**: cada formulario, con fecha, correo, empresa, país, plan y mensaje. Botón **Export → CSV** para descargarlos.
- **Table Editor → prevo_checkout_starts / prevo_checkout_returns**: el embudo de compra. La vista `prevo_v_embudo` cruza ambos.
- **Authentication → Users**: todos los usuarios registrados (correo o Google) y si activaron su cuenta.
- **Polar → Sales / Customers**: los pagos confirmados (la fuente oficial de ventas).
- Si quieres un aviso por correo de cada formulario, crea un formulario gratis en https://formspree.io (50 envíos/mes) y pega su URL en `notifyEndpoint` (ya viene configurado con FormSubmit hacia manyosa@limly.io).
- Si Supabase falla por cualquier motivo, el formulario no se pierde: se guarda en el navegador del visitante y le abre su correo con el mensaje listo para enviarte.

> El plan gratis de Supabase pausa proyectos sin actividad por 7 días. Con tráfico diario no pasa; si se pausa, se reactiva desde el panel.

---

## 3. Login con Google (15 min, gratis)

1. https://console.cloud.google.com → crea el proyecto **Prevo**.
2. **APIs & Services → OAuth consent screen**: tipo **External**, nombre de la app "Prevo", correo de soporte, logo (opcional), dominio autorizado `supabase.co` (y tu dominio propio si lo tienes), enlaces a `https://TU-SITIO.vercel.app/legal.html#privacidad` y `#terminos`. Alcances: solo `email`, `profile`, `openid`.
3. **Publish app** (pasar de "Testing" a "In production"). Con esos alcances básicos no necesita revisión de Google. Si lo dejas en Testing, solo pueden entrar los correos que agregues como testers.
4. **Credentials → Create credentials → OAuth client ID** → tipo **Web application**:
   - Authorized JavaScript origins: `https://TU-SITIO.vercel.app` y `http://localhost:8000`
   - Authorized redirect URIs: `https://TU-PROYECTO.supabase.co/auth/v1/callback` (cópialo desde Supabase → Authentication → Providers → Google)
5. Copia **Client ID** y **Client secret** → Supabase → **Authentication → Providers → Google** → actívalo y pégalos → Save.

Con Google, el usuario entra directo; no necesita activar nada por correo.

---

## 4. Correo de activación: SMTP gratis (15 min)

El correo que trae Supabase por defecto solo envía **2 correos por hora** y no está pensado para usuarios reales. Conecta un proveedor gratuito:

**Opción recomendada sin dominio propio: Brevo (plan gratis, unos 300 correos al día)**
1. Crea cuenta en https://www.brevo.com.
2. **Senders, Domains & Dedicated IPs → Senders**: agrega y verifica el correo remitente (ej. el correo de la empresa).
3. **SMTP & API → SMTP**: genera una SMTP key.
4. Supabase → **Authentication → Emails → SMTP Settings** → Enable custom SMTP:
   - Host `smtp-relay.brevo.com` · Port `587` · Username: tu login SMTP de Brevo · Password: la SMTP key
   - Sender email: el remitente verificado · Sender name: `Prevo`
5. Supabase → **Authentication → Rate Limits**: sube "emails sent per hour" a 100.
6. **Authentication → Emails → Templates**: personaliza "Confirm signup" y "Reset password" (con SMTP propio ya se pueden editar).

Cuando tengas dominio propio (ej. prevo.ai), verifica el dominio en Brevo (o en Resend) para que los correos no caigan en spam.

**Si hoy no alcanzas a configurar SMTP:** en Authentication → Providers → Email apaga temporalmente "Confirm email". Los usuarios entrarán sin activar por correo y Google sigue funcionando. Vuelve a encenderlo apenas el SMTP esté listo.

---

## 5. Pegar todo en `config.js`

```js
siteUrl: "https://TU-SITIO.vercel.app",
supabaseUrl: "https://TU-PROYECTO.supabase.co",
supabaseAnonKey: "eyJ... o sb_publishable_...",
polar: { founders: "https://buy.polar.sh/...", standard: "...", monthly: "...", industrial: "" },
legalName: "Limly LLC",            // ya está puesto
legalAddress: "8 The Green, Suite B, Dover, DE 19901, EE. UU.",   // ya está puesto
contactEmail: "el correo donde quieres recibir clientes",
```

Si me pasas los datos en el chat, te devuelvo `config.js` listo.

---

## 6. GitHub (10 min)

1. Crea cuenta en https://github.com (si no tienes).
2. **New repository** → nombre `prevo-web` → Public o Private → Create.
3. **Add file → Upload files** → arrastra **el contenido** de la carpeta `prevo-web` (los archivos, no la carpeta) → **Commit changes**.

Desde la terminal de la Mac (alternativa):
```bash
cd ~/Downloads/prevo-web
git init && git add . && git commit -m "Prevo v1"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/prevo-web.git
git push -u origin main
```

---

## 7. Vercel (5 min)

1. https://vercel.com → **Sign up with GitHub** (plan Hobby, gratis).
2. **Add New → Project** → importa `prevo-web`.
3. Framework Preset: **Other**. Build command: vacío. Output directory: vacío (raíz). → **Deploy**.
4. Tu web queda en `https://prevo-web.vercel.app` (puedes cambiar el nombre en Settings → Domains, por ejemplo `prevo.vercel.app` si está libre).
5. Actualiza con esa dirección: `siteUrl` en config.js, Site URL y Redirect URLs en Supabase, orígenes en Google, Success/Return URL en los 4 links de Polar.
6. Cada vez que subas cambios a GitHub, Vercel publica solo en menos de un minuto.

> El plan Hobby de Vercel es para uso no comercial según sus términos. Para empezar a validar funciona; cuando factures de forma regular, pasa a Vercel Pro o publica gratis en Cloudflare Pages o Netlify (mismo procedimiento: conectar el repositorio de GitHub).

---

## 8. Pruebas antes de anunciar (15 min)

- [ ] Landing: cambiar entre ES, EN, PT y FR; abrir Términos, Privacidad, IA y Cookies.
- [ ] Formulario de contacto → aparece en Supabase → Table Editor → `prevo_leads`.
- [ ] Crear cuenta con correo → llega el correo de activación → el enlace activa y lleva a la app.
- [ ] Entrar con Google.
- [ ] "¿Olvidaste tu contraseña?" → llega el correo → permite crear una nueva.
- [ ] App: ejemplo distribuidor → Calcular → Guardar pronóstico → aparece en "Mis pronósticos".
- [ ] App: subir un Excel real de un cliente.
- [ ] Botón de compra → abre Polar con el correo y el idioma correctos → pagar en sandbox → vuelve a `gracias.html` → aparece en `prevo_checkout_returns`.
- [ ] Probar en el celular.

### Probar en tu Mac antes de subir
```bash
cd ~/Downloads/prevo-web
python3 -m http.server 8000
```
Abre http://localhost:8000. Así funcionan el login y los formularios (abriendo los archivos con doble clic, el login de Google no funciona).

---

## Seguridad y datos

- Todo lo que está en `config.js` es público por diseño: la clave anon/publishable de Supabase está protegida por las reglas de seguridad (RLS) de `schema.sql`. Nadie puede leer los formularios desde la web; solo insertarlos.
- No pongas en el código la clave `service_role`, ni tokens de Polar, ni contraseñas.
- Los archivos que los clientes suben en la prueba gratis no salen de su navegador.
