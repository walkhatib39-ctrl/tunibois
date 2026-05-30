import type { Locale } from "@/lib/locales";

export const homeCopy = {
  hero: {
    fr: {
      title: "Solutions industrielles de transformation du bois pour les marchés internationaux",
      text: "Tunibois accompagne les acheteurs B2B, importateurs et industriels avec des produits bois transformés, documentés et préparés pour l'export.",
      quote: "Demander un devis export",
      catalogue: "Recevoir le catalogue",
    },
    en: {
      title: "Industrial wood transformation solutions for international markets",
      text: "Tunibois supports B2B buyers, importers and manufacturers with transformed wood products documented and prepared for export.",
      quote: "Request a quote",
      catalogue: "Request the catalogue",
    },
    ar: {
      title: "حلول صناعية لتحويل الخشب للأسواق الدولية",
      text: "تدعم Tunibois المشترين المهنيين والمستوردين والصناعيين بمنتجات خشبية محولة وموثقة ومجهزة للتصدير.",
      quote: "طلب عرض سعر",
      catalogue: "طلب الكتالوج",
    },
  },
  shared: {
    fr: {
      products: "Produits prioritaires",
      families: "Familles de produits",
      factory: "Capacités industrielles",
      exportMarkets: "Marchés cibles",
      formTitle: "Parlez-nous de votre besoin",
      formText: "Produit, quantité, destination, cahier des charges: notre équipe vous répond avec une base de discussion claire.",
    },
    en: {
      products: "Priority products",
      families: "Product families",
      factory: "Industrial capabilities",
      exportMarkets: "Target markets",
      formTitle: "Tell us what you need",
      formText: "Product, quantity, destination and specification: our team replies with a clear basis for discussion.",
    },
    ar: {
      products: "المنتجات ذات الأولوية",
      families: "عائلات المنتجات",
      factory: "القدرات الصناعية",
      exportMarkets: "الأسواق المستهدفة",
      formTitle: "أخبرنا باحتياجك",
      formText: "المنتج والكمية والوجهة والمواصفات: يرد فريقنا بأساس واضح للنقاش.",
    },
  },
};

export const trustRail = [
  { fr: "Composants bois", en: "Wood components", ar: "مكونات خشبية" },
  { fr: "Palettes export", en: "Export pallets", ar: "منصات تصدير" },
  { fr: "Eco wood products", en: "Eco wood products", ar: "منتجات خشبية صديقة للبيئة" },
  { fr: "Conditionnement B2B", en: "B2B packing", ar: "تغليف مهني" },
  { fr: "Documentation export", en: "Export documentation", ar: "وثائق تصدير" },
] satisfies Array<Record<Locale, string>>;

export const buyerPositioning = {
  title: {
    fr: "Un partenaire industriel, pas un simple fournisseur de bois",
    en: "An industrial partner, not a basic timber supplier",
    ar: "شريك صناعي وليس مجرد مورد خشب",
  },
  intro: {
    fr: "Le rôle du site est de parler à des acheteurs exigeants: importateurs, distributeurs, fabricants, responsables achats et industriels qui veulent comprendre la capacité, la méthode et la fiabilité avant d'envoyer une demande.",
    en: "The site is built for demanding buyers: importers, distributors, manufacturers, purchasing teams and industrial clients who need to understand capability, process and reliability before sending a request.",
    ar: "صمم الموقع للمشترين المهنيين: المستوردين والموزعين والمصنعين وفرق الشراء الذين يريدون فهم القدرة والطريقة والموثوقية قبل إرسال الطلب.",
  },
  body: {
    fr: "Tunibois positionne la transformation du bois comme une offre B2B structurée: sélection matière, adaptation produit, contrôle, conditionnement et préparation export. Chaque demande doit pouvoir devenir une base de discussion commerciale claire.",
    en: "Tunibois positions wood transformation as a structured B2B offer: material selection, product adaptation, control, packing and export preparation. Each request should become a clear commercial discussion basis.",
    ar: "تقدم Tunibois تحويل الخشب كعرض مهني منظم: اختيار المادة، تكييف المنتج، المراقبة، التغليف والتحضير للتصدير. كل طلب يجب أن يتحول إلى أساس تجاري واضح للنقاش.",
  },
};

export const buyerSegments = [
  {
    title: { fr: "Industriels et fabricants", en: "Manufacturers", ar: "الصناعيون والمصنعون" },
    text: {
      fr: "Composants, pièces répétitives, panneaux et produits bois intégrables dans une chaîne de production.",
      en: "Components, repeat parts, panels and wood products ready to integrate into production lines.",
      ar: "مكونات وقطع متكررة وألواح ومنتجات خشبية قابلة للدمج في خطوط الإنتاج.",
    },
  },
  {
    title: { fr: "Importateurs et distributeurs", en: "Importers and distributors", ar: "المستوردون والموزعون" },
    text: {
      fr: "Gammes structurées, conditionnement clair, documentation export et volumes à organiser par marché.",
      en: "Structured ranges, clear packing, export documentation and volumes organized by market.",
      ar: "تشكيلات منظمة وتغليف واضح ووثائق تصدير وكميات تضبط حسب السوق.",
    },
  },
  {
    title: { fr: "Acheteurs projets", en: "Project buyers", ar: "مشترو المشاريع" },
    text: {
      fr: "Solutions sur mesure pour palettes, terrasses, éléments architecturaux, mobilier et produits spécifiques.",
      en: "Custom solutions for pallets, decking, architectural elements, furniture and specific products.",
      ar: "حلول حسب الطلب للمنصات والتراسات والعناصر المعمارية والأثاث والمنتجات الخاصة.",
    },
  },
];

export const productHighlightsIntro = {
  fr: "Une première base produits pensée pour l'export: palettes, wood energy, produits eco wood et composants à développer par familles.",
  en: "A first export-oriented product base: pallets, wood energy, eco wood products and component families to expand.",
  ar: "قاعدة أولية موجهة للتصدير: منصات وطاقة خشبية ومنتجات خشبية صديقة للبيئة ومكونات سيتم توسيعها حسب العائلات.",
};

export const industrialProcess = [
  {
    title: { fr: "Qualification du besoin", en: "Requirement qualification", ar: "تحديد الحاجة" },
    text: {
      fr: "Produit recherché, usage, pays de destination, volume, tolérances et contraintes de conditionnement.",
      en: "Requested product, use case, destination country, volume, tolerances and packing constraints.",
      ar: "المنتج والاستخدام وبلد الوجهة والكمية والتفاوتات ومتطلبات التغليف.",
    },
  },
  {
    title: { fr: "Sélection matière", en: "Material selection", ar: "اختيار المادة" },
    text: {
      fr: "Essence, section, humidité, tri et disponibilité matière selon le niveau de finition attendu.",
      en: "Species, section, moisture, sorting and material availability according to expected finish level.",
      ar: "نوع الخشب والمقطع والرطوبة والفرز والتوفر حسب مستوى التشطيب المطلوب.",
    },
  },
  {
    title: { fr: "Transformation", en: "Transformation", ar: "التحويل" },
    text: {
      fr: "Sciage, usinage, assemblage, panneaux, composants ou produits finis selon cahier des charges.",
      en: "Sawing, machining, assembly, panels, components or finished products according to specification.",
      ar: "نشر وتشغيل وتجميع وألواح ومكونات أو منتجات نهائية حسب المواصفات.",
    },
  },
  {
    title: { fr: "Contrôle et préparation export", en: "Control and export preparation", ar: "المراقبة والتحضير للتصدير" },
    text: {
      fr: "Contrôle visuel, dimensions, conditionnement, empilage, cerclage et documents nécessaires.",
      en: "Visual control, dimensions, packing, stacking, strapping and required documents.",
      ar: "مراقبة بصرية وأبعاد وتغليف وتكديس وربط والوثائق المطلوبة.",
    },
  },
];

export const industrialProcessIntro = {
  fr: "Le contenu doit aider l'acheteur à formuler une demande précise et à comprendre comment Tunibois transforme un besoin en offre exploitable.",
  en: "The content helps buyers formulate a precise request and understand how Tunibois turns a need into a workable offer.",
  ar: "يساعد المحتوى المشتري على صياغة طلب دقيق وفهم كيف تحول Tunibois الحاجة إلى عرض قابل للتنفيذ.",
};

export const exportReadinessIntro = {
  fr: "L'objectif n'est pas seulement de montrer des produits. Le site doit rassurer sur le processus export, les documents, le conditionnement et la capacité à dialoguer avec des acheteurs internationaux.",
  en: "The goal is not only to show products. The site must reassure buyers about export process, documents, packing and the ability to work with international purchasing teams.",
  ar: "الهدف ليس عرض المنتجات فقط. يجب أن يطمئن الموقع المشتري حول عملية التصدير والوثائق والتغليف والقدرة على التعامل مع فرق شراء دولية.",
};

export const homeFaqIntro = {
  fr: "Ces contenus renforcent le SEO tout en répondant aux vraies objections commerciales: capacité, personnalisation, documents et catalogue.",
  en: "These contents support SEO while answering real commercial objections: capability, customization, documents and catalogue.",
  ar: "يدعم هذا المحتوى تحسين الظهور في محركات البحث ويجيب على اعتراضات تجارية حقيقية: القدرة والتخصيص والوثائق والكتالوج.",
};

export const homeFaq = [
  {
    q: {
      fr: "Tunibois travaille-t-elle avec des acheteurs internationaux ?",
      en: "Does Tunibois work with international buyers?",
      ar: "هل تعمل Tunibois مع مشترين دوليين؟",
    },
    a: {
      fr: "Oui. Le site est structuré pour les demandes B2B, les importateurs, les distributeurs et les industriels qui recherchent un partenaire bois en Tunisie.",
      en: "Yes. The site is structured for B2B requests, importers, distributors and manufacturers looking for a wood partner in Tunisia.",
      ar: "نعم. الموقع موجه للطلبات المهنية والمستوردين والموزعين والصناعيين الباحثين عن شريك خشب في تونس.",
    },
  },
  {
    q: {
      fr: "Peut-on demander une fabrication sur mesure ?",
      en: "Can I request custom manufacturing?",
      ar: "هل يمكن طلب تصنيع حسب الطلب؟",
    },
    a: {
      fr: "Oui. La demande doit préciser le produit, les dimensions, l'essence souhaitée, la quantité, le pays de destination et les contraintes techniques.",
      en: "Yes. The request should include product, dimensions, preferred species, quantity, destination country and technical constraints.",
      ar: "نعم. يجب أن يتضمن الطلب المنتج والأبعاد ونوع الخشب والكمية وبلد الوجهة والمتطلبات التقنية.",
    },
  },
  {
    q: {
      fr: "Les fiches techniques et catalogues sont-ils disponibles ?",
      en: "Are technical sheets and catalogues available?",
      ar: "هل تتوفر البطاقات التقنية والكتالوجات؟",
    },
    a: {
      fr: "Les catalogues et fiches techniques sont envoyés sur demande afin de fournir une base adaptée au produit, au marché et au volume visés.",
      en: "Catalogues and technical sheets are sent on request to provide a basis adapted to the product, market and target volume.",
      ar: "ترسل الكتالوجات والبطاقات التقنية عند الطلب لتقديم أساس مناسب للمنتج والسوق والكمية المستهدفة.",
    },
  },
];
