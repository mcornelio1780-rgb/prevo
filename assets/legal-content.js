/* Textos legales de Prevo en 4 idiomas. {name} {addr} {mail} {date} se completan desde config.js.
   Orientación general: revisar con un abogado antes de lanzar a gran escala. */
window.LEGAL = {
es: {
 title: 'Legal', updated: 'Última actualización', nav: { terminos: 'Términos y condiciones', privacidad: 'Política de privacidad', ia: 'IA y regulación', cookies: 'Cookies' },
 note: 'Si tienes dudas sobre estos documentos, escríbenos a {mail}.',
 terminos: [
  ['Quiénes somos', 'Prevo es una marca y servicio de {name}, sociedad de responsabilidad limitada constituida en Delaware, EE. UU., con domicilio en {addr}. Contacto: {mail}.'],
  ['El servicio', 'Prevo ofrece (a) una herramienta gratuita que calcula pronósticos en tu navegador y (b) servicios pagados: reportes de pronóstico revisados por nuestro equipo, planes mensuales y proyectos a medida.'],
  ['Cuentas', 'Debes tener 18 años o más y dar información veraz. Eres responsable de tus credenciales. Puedes registrarte con correo y contraseña o con Google, y eliminar tu cuenta cuando quieras escribiendo a {mail}.'],
  ['Precios y pagos', 'Los precios están en dólares estadounidenses. Los pagos los procesa Polar como comerciante registrado (merchant of record), que calcula los impuestos aplicables y emite el comprobante. Prevo no ve ni guarda los datos de tu tarjeta.'],
  ['Suscripciones', 'El plan mensual se renueva automáticamente cada mes hasta que lo canceles desde el portal de cliente de Polar o escribiéndonos. La cancelación surte efecto al final del período pagado.'],
  ['Garantía y reembolsos', 'Si en la prueba contra el pasado el reporte no mejora tu método actual, te lo decimos y te devolvemos el pago del reporte si lo solicitas dentro de los 14 días posteriores a la entrega. Los reembolsos se procesan a través de Polar. Esto no limita los derechos que te dé la ley de tu país.'],
  ['Naturaleza de los pronósticos', 'Los pronósticos son estimaciones probabilísticas basadas en tus datos históricos. No garantizan resultados futuros y no constituyen asesoría financiera, legal ni de inversión. Las decisiones que tomes con ellos son tuyas.'],
  ['Tus datos y nuestros derechos', 'Tus datos siguen siendo tuyos, y los reportes que te entregamos son para tu uso. El software, la marca y los materiales de Prevo son de {name}.'],
  ['Uso aceptable', 'No subas datos que no tengas derecho a usar, ni datos personales sensibles de terceros sin base legal. No intentes vulnerar, copiar o sobrecargar el servicio.'],
  ['Responsabilidad', 'En la medida que la ley lo permita, la responsabilidad total de Prevo se limita al importe que nos pagaste en los 12 meses anteriores al reclamo.'],
  ['Cambios y ley aplicable', 'Podemos actualizar estos términos y te avisaremos de cambios importantes. Se rigen por las leyes del estado de Delaware, EE. UU., sin perjuicio de los derechos de consumidor de tu país de residencia.']
 ],
 privacidad: [
  ['Responsable del tratamiento', '{name}, {addr}. Contacto para privacidad: {mail}.'],
  ['Qué datos tratamos', 'Cuenta: correo y, si usas Google, nombre y foto de perfil. Formularios: correo, empresa, país, plan y mensaje. Compras: Polar procesa el pago; recibimos la confirmación, no tu tarjeta. Pronósticos guardados: solo si eliges guardarlos. Prueba gratis: los archivos que subes se procesan en tu navegador y no se envían a nuestros servidores.'],
  ['Para qué y con qué base', 'Prestar el servicio y gestionar tu cuenta (contrato); responder tus consultas (tu solicitud); enviarte información comercial relacionada (interés legítimo, puedes darte de baja en cualquier momento); cumplir obligaciones legales y fiscales.'],
  ['Con quién los compartimos', 'Proveedores que actúan por cuenta nuestra: Supabase (base de datos y autenticación), Vercel (alojamiento web), Polar (pagos), Google (inicio de sesión opcional) y nuestro proveedor de correo transaccional. No vendemos tus datos.'],
  ['Transferencias internacionales', 'Nuestros proveedores pueden almacenar datos fuera de tu país (por ejemplo, en EE. UU. o la UE). Usamos proveedores con garantías contractuales adecuadas, como cláusulas contractuales tipo.'],
  ['Cuánto tiempo', 'Datos de cuenta: mientras tu cuenta esté activa. Consultas y prospectos: hasta 24 meses desde el último contacto. Datos de facturación: el plazo que exija la ley.'],
  ['Tus derechos', 'Puedes pedir acceso, rectificación, supresión, oposición, limitación y portabilidad de tus datos, y retirar tu consentimiento, escribiendo a {mail}. Respondemos en un máximo de 30 días. También puedes reclamar ante tu autoridad de protección de datos (en Perú, la Autoridad Nacional de Protección de Datos Personales; en la UE, tu autoridad nacional, como la AEPD o la CNIL; en Brasil, la ANPD).'],
  ['Seguridad', 'Cifrado en tránsito, control de acceso por usuario en la base de datos y acceso administrativo restringido.'],
  ['Entrenamiento de modelos', 'No usamos tus datos para entrenar modelos sin tu consentimiento separado y expreso, que puedes retirar cuando quieras.'],
  ['Menores', 'El servicio está dirigido a empresas y mayores de 18 años.'],
  ['Marco legal', 'Aplicamos la Ley 29733 de Perú y su reglamento, el RGPD (UE), la LGPD (Brasil), la CCPA/CPRA (California), la PIPEDA y la Ley 25 (Canadá y Quebec), según corresponda a tu ubicación.']
 ],
 ia: [
  ['Qué inteligencia artificial usamos', 'Modelos estadísticos de series de tiempo (suavizado exponencial, Holt-Winters, métodos estacionales) y, en el servicio pagado, modelos abiertos de pronóstico de series de tiempo (por ejemplo, TimesFM o Chronos). No usamos modelos generativos de lenguaje para producir los números del pronóstico.'],
  ['Para qué sí y para qué no', 'Pronosticamos variables de negocio: ventas, unidades, clientes, producción o consumo. No evaluamos ni tomamos decisiones sobre personas (crédito, empleo, salud, educación ni acceso a servicios). Por eso clasificamos nuestro sistema como de riesgo bajo o mínimo.'],
  ['Transparencia', 'Te informamos que los pronósticos se generan con modelos automatizados. Cada resultado muestra el método usado, su error medido contra tu propio pasado y una banda de incertidumbre del 80%.'],
  ['Supervisión humana', 'Los reportes pagados los revisa una persona antes de entregarse. Tú decides siempre cómo usar el pronóstico.'],
  ['Limitaciones conocidas', 'Los modelos no anticipan bien eventos que nunca ocurrieron en tu historial (crisis, cierres, cambios regulatorios), y su precisión depende de la calidad y longitud de tus datos.'],
  ['Datos y entrenamiento', 'No entrenamos modelos con tus datos sin tu consentimiento separado y expreso. Puedes retirarlo en cualquier momento.'],
  ['Unión Europea', 'Seguimos el Reglamento (UE) 2024/1689 de Inteligencia Artificial: nuestro sistema no es de alto riesgo y aplicamos las obligaciones de transparencia y alfabetización en IA que corresponden.'],
  ['Perú', 'Seguimos la Ley 31814, que promueve el uso de la inteligencia artificial, y su Reglamento aprobado por el Decreto Supremo 115-2025-PCM, vigente desde el 22 de enero de 2026: uso ético, transparente, seguro y con supervisión humana, junto con la Ley 29733 de protección de datos personales.'],
  ['Brasil, Estados Unidos, Canadá y otros países', 'Cumplimos la LGPD en Brasil y seguimos la evolución de su proyecto de ley de IA; en EE. UU., las leyes estatales de privacidad e IA aplicables y las pautas de la FTC sobre afirmaciones de IA; en Canadá, la PIPEDA y la Ley 25 de Quebec. Nos guiamos por los Principios de IA de la OCDE.'],
  ['Consultas y reclamos sobre IA', 'Escríbenos a {mail} con el asunto "IA". Respondemos en un máximo de 30 días.']
 ],
 cookies: [
  ['Qué usamos', 'Solo almacenamiento técnico necesario: tu sesión de inicio de sesión y tu idioma preferido. No usamos cookies publicitarias ni rastreadores de terceros.'],
  ['Terceros', 'Las tipografías se cargan desde Google Fonts, que puede recibir tu dirección IP. La página de pago de Polar usa sus propias cookies, regidas por su política.'],
  ['Cómo controlarlo', 'Puedes borrar el almacenamiento desde tu navegador; se cerrará tu sesión.']
 ]
},
en: {
 title: 'Legal', updated: 'Last updated', nav: { terminos: 'Terms and conditions', privacidad: 'Privacy policy', ia: 'AI & regulation', cookies: 'Cookies' },
 note: 'Questions about these documents? Email {mail}.',
 terminos: [
  ['Who we are', 'Prevo is a brand and service of {name}, a limited liability company organized in Delaware, USA, located at {addr}. Contact: {mail}.'],
  ['The service', 'Prevo offers (a) a free tool that computes forecasts in your browser and (b) paid services: forecast reports reviewed by our team, monthly plans and custom projects.'],
  ['Accounts', 'You must be 18 or older and provide accurate information. You are responsible for your credentials. You can sign up with email and password or with Google, and delete your account anytime by emailing {mail}.'],
  ['Prices and payments', 'Prices are in US dollars. Payments are processed by Polar as merchant of record, which calculates applicable taxes and issues your receipt. Prevo never sees or stores your card details.'],
  ['Subscriptions', 'The monthly plan renews automatically each month until you cancel from the Polar customer portal or by contacting us. Cancellation takes effect at the end of the paid period.'],
  ['Guarantee and refunds', 'If the backtest shows the report does not beat your current method, we tell you and refund the report if you ask within 14 days of delivery. Refunds are processed through Polar. This does not limit your statutory rights.'],
  ['Nature of forecasts', 'Forecasts are probabilistic estimates based on your historical data. They do not guarantee future results and are not financial, legal or investment advice. Decisions you make with them are yours.'],
  ['Your data and our rights', 'Your data remains yours, and the reports we deliver are for your use. Prevo’s software, brand and materials belong to {name}.'],
  ['Acceptable use', 'Do not upload data you have no right to use, or sensitive personal data of third parties without a legal basis. Do not attempt to breach, copy or overload the service.'],
  ['Liability', 'To the extent permitted by law, Prevo’s total liability is limited to the amount you paid us in the 12 months before the claim.'],
  ['Changes and governing law', 'We may update these terms and will notify you of material changes. They are governed by the laws of the State of Delaware, USA, without prejudice to consumer rights in your country of residence.']
 ],
 privacidad: [
  ['Data controller', '{name}, {addr}. Privacy contact: {mail}.'],
  ['Data we process', 'Account: email and, if you use Google, name and profile picture. Forms: email, company, country, plan and message. Purchases: Polar processes the payment; we receive confirmation, not your card. Saved forecasts: only if you choose to save them. Free trial: files you upload are processed in your browser and are not sent to our servers.'],
  ['Purposes and legal basis', 'Providing the service and managing your account (contract); answering your inquiries (your request); sending related business information (legitimate interest; unsubscribe anytime); complying with legal and tax obligations.'],
  ['Who we share it with', 'Processors acting on our behalf: Supabase (database and authentication), Vercel (web hosting), Polar (payments), Google (optional sign-in) and our transactional email provider. We do not sell your data.'],
  ['International transfers', 'Our providers may store data outside your country (for example in the US or EU). We use providers with appropriate contractual safeguards, such as standard contractual clauses.'],
  ['Retention', 'Account data: while your account is active. Inquiries and prospects: up to 24 months after last contact. Billing data: as long as the law requires.'],
  ['Your rights', 'You can request access, rectification, erasure, objection, restriction and portability, and withdraw consent, by emailing {mail}. We reply within 30 days. You may also complain to your data protection authority.'],
  ['Security', 'Encryption in transit, per-user access control in the database and restricted administrative access.'],
  ['Model training', 'We do not use your data to train models without your separate, explicit consent, which you can withdraw anytime.'],
  ['Minors', 'The service is aimed at businesses and people aged 18 or over.'],
  ['Legal framework', 'We apply Peru’s Law 29733 and its regulation, the GDPR (EU), the LGPD (Brazil), the CCPA/CPRA (California), PIPEDA and Law 25 (Canada and Quebec), as applicable to your location.']
 ],
 ia: [
  ['What AI we use', 'Statistical time-series models (exponential smoothing, Holt-Winters, seasonal methods) and, in the paid service, open time-series forecasting models (for example TimesFM or Chronos). We do not use generative language models to produce forecast figures.'],
  ['What it is and isn’t for', 'We forecast business variables: sales, units, customers, production or consumption. We do not assess or make decisions about people (credit, employment, health, education or access to services). We therefore classify our system as low or minimal risk.'],
  ['Transparency', 'We tell you that forecasts are generated by automated models. Each result shows the method used, its error measured against your own past, and an 80% uncertainty band.'],
  ['Human oversight', 'Paid reports are reviewed by a person before delivery. You always decide how to use the forecast.'],
  ['Known limitations', 'Models do not anticipate well events that never occurred in your history (crises, closures, regulatory changes), and accuracy depends on the quality and length of your data.'],
  ['Data and training', 'We do not train models on your data without your separate, explicit consent. You can withdraw it at any time.'],
  ['European Union', 'We follow Regulation (EU) 2024/1689 on Artificial Intelligence: our system is not high-risk and we apply the relevant transparency and AI literacy obligations.'],
  ['Peru', 'We follow Law 31814 promoting the use of artificial intelligence and its Regulation approved by Supreme Decree 115-2025-PCM, in force since 22 January 2026: ethical, transparent, safe use with human oversight, together with Law 29733 on personal data protection.'],
  ['Brazil, United States, Canada and other countries', 'We comply with Brazil’s LGPD and follow its AI bill; in the US, applicable state privacy and AI laws and FTC guidance on AI claims; in Canada, PIPEDA and Quebec’s Law 25. We are guided by the OECD AI Principles.'],
  ['AI questions and complaints', 'Email {mail} with the subject "AI". We reply within 30 days.']
 ],
 cookies: [
  ['What we use', 'Only strictly necessary storage: your login session and preferred language. No advertising cookies or third-party trackers.'],
  ['Third parties', 'Fonts load from Google Fonts, which may receive your IP address. Polar’s checkout page uses its own cookies under its own policy.'],
  ['How to control it', 'You can clear storage in your browser; this will log you out.']
 ]
},
pt: {
 title: 'Legal', updated: 'Última atualização', nav: { terminos: 'Termos e condições', privacidad: 'Política de privacidade', ia: 'IA e regulação', cookies: 'Cookies' },
 note: 'Dúvidas sobre estes documentos? Escreva para {mail}.',
 terminos: [
  ['Quem somos', 'A Prevo é uma marca e serviço da {name}, sociedade de responsabilidade limitada constituída em Delaware, EUA, com endereço em {addr}. Contato: {mail}.'],
  ['O serviço', 'A Prevo oferece (a) uma ferramenta gratuita que calcula previsões no seu navegador e (b) serviços pagos: relatórios de previsão revisados pela nossa equipe, planos mensais e projetos sob medida.'],
  ['Contas', 'Você deve ter 18 anos ou mais e fornecer informações verdadeiras. Você é responsável pelas suas credenciais. Pode se cadastrar com e-mail e senha ou com Google, e excluir sua conta quando quiser escrevendo para {mail}.'],
  ['Preços e pagamentos', 'Os preços estão em dólares americanos. Os pagamentos são processados pela Polar como comerciante registrado (merchant of record), que calcula os impostos aplicáveis e emite o comprovante. A Prevo não vê nem guarda os dados do seu cartão.'],
  ['Assinaturas', 'O plano mensal renova automaticamente a cada mês até você cancelar no portal do cliente da Polar ou falando conosco. O cancelamento vale ao fim do período pago.'],
  ['Garantia e reembolsos', 'Se no teste com o passado o relatório não melhorar seu método atual, avisamos e devolvemos o valor do relatório se você pedir em até 14 dias após a entrega. Os reembolsos são processados pela Polar. Isso não limita seus direitos legais.'],
  ['Natureza das previsões', 'As previsões são estimativas probabilísticas baseadas no seu histórico. Não garantem resultados futuros e não são aconselhamento financeiro, jurídico ou de investimento. As decisões que você tomar com elas são suas.'],
  ['Seus dados e nossos direitos', 'Seus dados continuam sendo seus, e os relatórios entregues são para seu uso. O software, a marca e os materiais da Prevo pertencem à {name}.'],
  ['Uso aceitável', 'Não envie dados que você não tenha direito de usar, nem dados pessoais sensíveis de terceiros sem base legal. Não tente violar, copiar ou sobrecarregar o serviço.'],
  ['Responsabilidade', 'Na medida permitida por lei, a responsabilidade total da Prevo limita-se ao valor que você nos pagou nos 12 meses anteriores à reclamação.'],
  ['Alterações e lei aplicável', 'Podemos atualizar estes termos e avisaremos sobre mudanças importantes. Regem-se pelas leis do estado de Delaware, EUA, sem prejuízo dos direitos do consumidor no seu país de residência.']
 ],
 privacidad: [
  ['Controlador', '{name}, {addr}. Contato de privacidade: {mail}.'],
  ['Quais dados tratamos', 'Conta: e-mail e, se usar Google, nome e foto. Formulários: e-mail, empresa, país, plano e mensagem. Compras: a Polar processa o pagamento; recebemos a confirmação, não seu cartão. Previsões salvas: só se você escolher salvar. Teste grátis: os arquivos que você envia são processados no seu navegador e não vão para nossos servidores.'],
  ['Finalidades e base legal', 'Prestar o serviço e gerir sua conta (contrato); responder suas dúvidas (sua solicitação); enviar informações comerciais relacionadas (legítimo interesse; descadastre-se quando quiser); cumprir obrigações legais e fiscais.'],
  ['Com quem compartilhamos', 'Operadores que atuam em nosso nome: Supabase (banco de dados e autenticação), Vercel (hospedagem), Polar (pagamentos), Google (login opcional) e nosso provedor de e-mail transacional. Não vendemos seus dados.'],
  ['Transferências internacionais', 'Nossos fornecedores podem armazenar dados fora do seu país (por exemplo, nos EUA ou na UE). Usamos fornecedores com garantias contratuais adequadas, como cláusulas-padrão.'],
  ['Por quanto tempo', 'Dados da conta: enquanto a conta estiver ativa. Consultas e prospects: até 24 meses após o último contato. Dados de faturamento: pelo prazo legal.'],
  ['Seus direitos', 'Você pode pedir acesso, correção, eliminação, oposição, limitação e portabilidade, e revogar o consentimento, escrevendo para {mail}. Respondemos em até 30 dias. Você também pode reclamar à ANPD ou à autoridade do seu país.'],
  ['Segurança', 'Criptografia em trânsito, controle de acesso por usuário no banco de dados e acesso administrativo restrito.'],
  ['Treinamento de modelos', 'Não usamos seus dados para treinar modelos sem seu consentimento separado e expresso, que você pode revogar quando quiser.'],
  ['Menores', 'O serviço é destinado a empresas e maiores de 18 anos.'],
  ['Marco legal', 'Aplicamos a LGPD (Brasil), a Lei 29733 (Peru), o RGPD (UE), a CCPA/CPRA (Califórnia), a PIPEDA e a Lei 25 (Canadá e Quebec), conforme sua localização.']
 ],
 ia: [
  ['Qual inteligência artificial usamos', 'Modelos estatísticos de séries temporais (suavização exponencial, Holt-Winters, métodos sazonais) e, no serviço pago, modelos abertos de previsão de séries temporais (por exemplo, TimesFM ou Chronos). Não usamos modelos generativos de linguagem para produzir os números da previsão.'],
  ['Para que serve e para que não', 'Prevemos variáveis de negócio: vendas, unidades, clientes, produção ou consumo. Não avaliamos nem tomamos decisões sobre pessoas (crédito, emprego, saúde, educação ou acesso a serviços). Por isso classificamos nosso sistema como de risco baixo ou mínimo.'],
  ['Transparência', 'Informamos que as previsões são geradas por modelos automatizados. Cada resultado mostra o método usado, seu erro medido contra o seu próprio passado e uma faixa de incerteza de 80%.'],
  ['Supervisão humana', 'Os relatórios pagos são revisados por uma pessoa antes da entrega. Você sempre decide como usar a previsão.'],
  ['Limitações conhecidas', 'Os modelos não antecipam bem eventos que nunca ocorreram no seu histórico (crises, fechamentos, mudanças regulatórias), e a precisão depende da qualidade e do tamanho dos seus dados.'],
  ['Dados e treinamento', 'Não treinamos modelos com seus dados sem seu consentimento separado e expresso. Você pode revogá-lo a qualquer momento.'],
  ['União Europeia', 'Seguimos o Regulamento (UE) 2024/1689 sobre Inteligência Artificial: nosso sistema não é de alto risco e aplicamos as obrigações de transparência e literacia em IA cabíveis.'],
  ['Brasil', 'Cumprimos a LGPD e acompanhamos o projeto de lei de IA (PL 2338/2023) e as orientações da ANPD.'],
  ['Peru, Estados Unidos, Canadá e outros países', 'No Peru, seguimos a Lei 31814 e seu Regulamento (Decreto Supremo 115-2025-PCM, vigente desde 22 de janeiro de 2026); nos EUA, as leis estaduais de privacidade e IA aplicáveis e as orientações da FTC; no Canadá, a PIPEDA e a Lei 25 de Quebec. Seguimos os Princípios de IA da OCDE.'],
  ['Dúvidas e reclamações sobre IA', 'Escreva para {mail} com o assunto "IA". Respondemos em até 30 dias.']
 ],
 cookies: [
  ['O que usamos', 'Apenas armazenamento técnico necessário: sua sessão de login e seu idioma preferido. Não usamos cookies de publicidade nem rastreadores de terceiros.'],
  ['Terceiros', 'As fontes carregam do Google Fonts, que pode receber seu endereço IP. A página de pagamento da Polar usa seus próprios cookies, sob a política dela.'],
  ['Como controlar', 'Você pode limpar o armazenamento no navegador; isso encerra sua sessão.']
 ]
},
fr: {
 title: 'Mentions légales', updated: 'Dernière mise à jour', nav: { terminos: 'Conditions générales', privacidad: 'Politique de confidentialité', ia: 'IA et réglementation', cookies: 'Cookies' },
 note: 'Une question sur ces documents ? Écrivez à {mail}.',
 terminos: [
  ['Qui sommes-nous', 'Prevo est une marque et un service de {name}, société à responsabilité limitée constituée au Delaware (États-Unis), située {addr}. Contact : {mail}.'],
  ['Le service', 'Prevo propose (a) un outil gratuit qui calcule des prévisions dans votre navigateur et (b) des services payants : rapports de prévision revus par notre équipe, offres mensuelles et projets sur mesure.'],
  ['Comptes', 'Vous devez avoir 18 ans ou plus et fournir des informations exactes. Vous êtes responsable de vos identifiants. Inscription par e-mail et mot de passe ou avec Google ; suppression du compte à tout moment en écrivant à {mail}.'],
  ['Prix et paiements', 'Les prix sont en dollars américains. Les paiements sont traités par Polar en tant que marchand officiel (merchant of record), qui calcule les taxes applicables et émet le reçu. Prevo ne voit ni ne conserve les données de votre carte.'],
  ['Abonnements', 'L’offre mensuelle se renouvelle automatiquement chaque mois jusqu’à résiliation depuis le portail client Polar ou en nous contactant. La résiliation prend effet à la fin de la période payée.'],
  ['Garantie et remboursements', 'Si le test sur l’historique montre que le rapport ne bat pas votre méthode actuelle, nous vous le disons et remboursons le rapport si vous le demandez dans les 14 jours suivant la livraison. Les remboursements passent par Polar. Cela ne limite pas vos droits légaux.'],
  ['Nature des prévisions', 'Les prévisions sont des estimations probabilistes fondées sur vos données historiques. Elles ne garantissent pas les résultats futurs et ne constituent pas un conseil financier, juridique ou d’investissement. Les décisions prises restent les vôtres.'],
  ['Vos données et nos droits', 'Vos données restent les vôtres, et les rapports livrés sont destinés à votre usage. Le logiciel, la marque et les contenus de Prevo appartiennent à {name}.'],
  ['Usage acceptable', 'N’importez pas de données que vous n’avez pas le droit d’utiliser, ni de données personnelles sensibles de tiers sans base légale. N’essayez pas de compromettre, copier ou surcharger le service.'],
  ['Responsabilité', 'Dans la mesure permise par la loi, la responsabilité totale de Prevo est limitée au montant payé au cours des 12 mois précédant la réclamation.'],
  ['Modifications et droit applicable', 'Nous pouvons mettre à jour ces conditions et vous informerons des changements importants. Elles sont régies par le droit de l’État du Delaware (États-Unis), sans préjudice des droits des consommateurs de votre pays de résidence.']
 ],
 privacidad: [
  ['Responsable du traitement', '{name}, {addr}. Contact confidentialité : {mail}.'],
  ['Données traitées', 'Compte : e-mail et, si vous utilisez Google, nom et photo. Formulaires : e-mail, entreprise, pays, offre et message. Achats : Polar traite le paiement ; nous recevons la confirmation, pas votre carte. Prévisions enregistrées : uniquement si vous le choisissez. Essai gratuit : les fichiers importés sont traités dans votre navigateur et ne sont pas envoyés à nos serveurs.'],
  ['Finalités et bases légales', 'Fournir le service et gérer votre compte (contrat) ; répondre à vos demandes (votre demande) ; vous envoyer des informations commerciales liées (intérêt légitime ; désinscription à tout moment) ; respecter nos obligations légales et fiscales.'],
  ['Destinataires', 'Sous-traitants agissant pour notre compte : Supabase (base de données et authentification), Vercel (hébergement), Polar (paiements), Google (connexion facultative) et notre prestataire d’e-mails transactionnels. Nous ne vendons pas vos données.'],
  ['Transferts internationaux', 'Nos prestataires peuvent stocker des données hors de votre pays (par exemple aux États-Unis ou dans l’UE). Nous utilisons des prestataires offrant des garanties contractuelles appropriées, comme les clauses contractuelles types.'],
  ['Durée de conservation', 'Données de compte : tant que le compte est actif. Demandes et prospects : jusqu’à 24 mois après le dernier contact. Données de facturation : durée légale.'],
  ['Vos droits', 'Vous pouvez demander l’accès, la rectification, l’effacement, l’opposition, la limitation et la portabilité, et retirer votre consentement, en écrivant à {mail}. Réponse sous 30 jours. Vous pouvez aussi saisir la CNIL ou l’autorité de votre pays.'],
  ['Sécurité', 'Chiffrement en transit, contrôle d’accès par utilisateur dans la base de données et accès administratif restreint.'],
  ['Entraînement des modèles', 'Nous n’utilisons pas vos données pour entraîner des modèles sans votre consentement distinct et explicite, révocable à tout moment.'],
  ['Mineurs', 'Le service s’adresse aux entreprises et aux personnes de 18 ans et plus.'],
  ['Cadre légal', 'Nous appliquons le RGPD (UE), la loi 25 (Québec) et la LPRPDE (Canada), la loi 29733 (Pérou), la LGPD (Brésil) et le CCPA/CPRA (Californie), selon votre localisation.']
 ],
 ia: [
  ['Quelle intelligence artificielle', 'Des modèles statistiques de séries temporelles (lissage exponentiel, Holt-Winters, méthodes saisonnières) et, pour le service payant, des modèles ouverts de prévision de séries temporelles (par exemple TimesFM ou Chronos). Nous n’utilisons pas de modèles génératifs de langage pour produire les chiffres.'],
  ['Usages prévus et exclus', 'Nous prévoyons des variables d’activité : ventes, unités, clients, production ou consommation. Nous n’évaluons pas les personnes et ne prenons pas de décisions les concernant (crédit, emploi, santé, éducation, accès aux services). Notre système est donc classé à risque faible ou minimal.'],
  ['Transparence', 'Nous vous informons que les prévisions sont générées par des modèles automatisés. Chaque résultat indique la méthode, son erreur mesurée sur votre propre historique et une fourchette d’incertitude à 80 %.'],
  ['Supervision humaine', 'Les rapports payants sont revus par une personne avant livraison. Vous décidez toujours de l’usage de la prévision.'],
  ['Limites connues', 'Les modèles anticipent mal les événements absents de votre historique (crises, fermetures, changements réglementaires), et la précision dépend de la qualité et de la longueur de vos données.'],
  ['Données et entraînement', 'Nous n’entraînons pas de modèles sur vos données sans votre consentement distinct et explicite, révocable à tout moment.'],
  ['Union européenne', 'Nous suivons le règlement (UE) 2024/1689 sur l’intelligence artificielle : notre système n’est pas à haut risque et nous appliquons les obligations de transparence et de maîtrise de l’IA pertinentes.'],
  ['Canada et Québec', 'Nous respectons la LPRPDE et la loi 25 du Québec, y compris l’information sur les décisions automatisées.'],
  ['Pérou, Brésil, États-Unis et autres pays', 'Au Pérou, la loi 31814 et son règlement (décret suprême 115-2025-PCM, en vigueur depuis le 22 janvier 2026) ; au Brésil, la LGPD ; aux États-Unis, les lois des États applicables et les lignes directrices de la FTC. Nous suivons les Principes de l’OCDE sur l’IA.'],
  ['Questions et réclamations sur l’IA', 'Écrivez à {mail} avec l’objet « IA ». Réponse sous 30 jours.']
 ],
 cookies: [
  ['Ce que nous utilisons', 'Uniquement le stockage technique nécessaire : votre session de connexion et votre langue. Aucun cookie publicitaire ni traceur tiers.'],
  ['Tiers', 'Les polices sont chargées depuis Google Fonts, qui peut recevoir votre adresse IP. La page de paiement Polar utilise ses propres cookies, selon sa politique.'],
  ['Comment le contrôler', 'Vous pouvez effacer le stockage dans votre navigateur ; cela vous déconnectera.']
 ]
}};
