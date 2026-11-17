/* ============================================================
   PREVO · CONFIGURACIÓN ÚNICA
   Es el ÚNICO archivo que tienes que editar antes de publicar.
   Todo lo que está aquí es público (va al navegador): nunca pongas
   aquí claves secretas (service_role de Supabase, tokens de Polar).
   ============================================================ */
window.PREVO_CONFIG = {
  // 1) Dirección final de la web (sin barra al final). Ej: "https://prevo.vercel.app"
  siteUrl: "",           // opcional: se detecta sola en Vercel

  // 2) Supabase → Project Settings → API (o "API Keys")
  supabaseUrl: "",       // ej: "https://abcdefghijk.supabase.co"
  supabaseAnonKey: "",   // la clave "anon" / "publishable" (es pública, está bien que vaya aquí)

  // Prefijo de las tablas en Supabase. Permite usar un proyecto de Supabase que ya tengas sin chocar con otras tablas.
  tablePrefix: "prevo_",

  // 3) Polar → Products → Checkout Links → copia el link de cada uno (empieza con https://buy.polar.sh/)
  polar: {
    founders: "",   // Pronóstico Fundadores · $99 (pago único)
    standard: "",   // Pronóstico 48h · $149 (pago único)
    monthly: "",    // Plan Mensual · $199/mes (suscripción)
    industrial: ""  // Anticipo proyecto industrial · $500 (opcional; si queda vacío, el botón abre el formulario)
  },

  // Precios que se muestran en la web (deben coincidir con Polar)
  prices: { founders: 99, standard: 149, monthly: 199, industrial: 500 },

  // 4) Contacto y datos legales (aparecen en el pie y en las páginas legales)
  contactEmail: "manyosa@limly.io",
  legalName: "Limly LLC",                       // Prevo es una marca de Limly LLC
  legalAddress: "8 The Green, Suite B, Dover, DE 19901, EE. UU.",
  brandOwnerNote: true,                           // muestra "Prevo es una marca de Limly LLC"
  legalUpdated: "2026-11-13",

  // 5) Cada formulario de contacto te llega por correo (FormSubmit, gratis). Funciona aunque Supabase no esté configurado.
  notifyEndpoint: "https://formsubmit.co/ajax/manyosa@limly.io"   // gratis, sin cuenta: la 1.ª vez llega un correo para "Activate Form"
};
