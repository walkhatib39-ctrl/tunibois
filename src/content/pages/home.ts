import type { Locale } from "@/lib/locales";
import type { RouteKey } from "@/lib/routes";

type LocalizedText = Record<Locale, string>;

export type HomeOfferGroupId = "components-panels" | "eco-wood" | "outdoor-architecture" | "pallets-packaging" | "wood-energy";

export const homeCopy = {
  hero: {
    fr: {
      title: "Transformation industrielle du bois pour acheteurs B2B et marchés export",
      text: "Tunibois accompagne les importateurs, distributeurs et industriels qui recherchent des produits bois transformés, spécifiés, contrôlés et préparés pour l'export depuis la Tunisie.",
      quote: "Demander un devis export",
      catalogue: "Recevoir le catalogue",
    },
    en: {
      title: "Industrial wood transformation for B2B buyers and export markets",
      text: "Tunibois supports importers, distributors and manufacturers looking for transformed wood products specified, controlled and prepared for export from Tunisia.",
      quote: "Request an export quote",
      catalogue: "Request the catalogue",
    },
    ar: {
      title: "تحويل صناعي للخشب للمشترين المهنيين وأسواق التصدير",
      text: "تدعم Tunibois المستوردين والموزعين والصناعيين الباحثين عن منتجات خشبية محولة ومحددة ومراقبة ومجهزة للتصدير من تونس.",
      quote: "طلب عرض تصدير",
      catalogue: "طلب الكتالوج",
    },
  },
  shared: {
    fr: {
      products: "Solutions bois pour achats industriels et export",
      factory: "Capacités de transformation et préparation export",
      exportMarkets: "Exporter avec une base claire, pas avec une simple liste de pays",
      formTitle: "Envoyer une demande qualifiée",
      formText: "Indiquez le produit, les dimensions, la quantité, le pays de destination, le conditionnement souhaité et toute contrainte technique. Cela permet de vous répondre avec une base exploitable.",
    },
    en: {
      products: "Wood solutions for industrial and export purchasing",
      factory: "Transformation and export preparation capabilities",
      exportMarkets: "Export with a clear basis, not a simple country list",
      formTitle: "Send a qualified request",
      formText: "Share product, dimensions, quantity, destination country, expected packing and any technical constraints. This helps us reply with a workable basis.",
    },
    ar: {
      products: "حلول خشبية للمشتريات الصناعية والتصدير",
      factory: "قدرات التحويل والتحضير للتصدير",
      exportMarkets: "تصدير على أساس واضح وليس مجرد قائمة بلدان",
      formTitle: "إرسال طلب واضح",
      formText: "اذكر المنتج والأبعاد والكمية وبلد الوجهة والتغليف المطلوب وأي متطلبات تقنية حتى يكون الرد قابلا للاستخدام.",
    },
  },
};

export const trustRail = [
  { fr: "Cahier des charges B2B", en: "B2B specifications", ar: "دفتر شروط مهني" },
  { fr: "Transformation bois", en: "Wood transformation", ar: "تحويل الخشب" },
  { fr: "Produits sur mesure", en: "Custom products", ar: "منتجات حسب الطلب" },
  { fr: "Contrôle et conditionnement", en: "Control and packing", ar: "مراقبة وتغليف" },
  { fr: "Préparation export", en: "Export preparation", ar: "تحضير للتصدير" },
] satisfies Array<LocalizedText>;

export const buyerPositioning = {
  title: {
    fr: "Pensé pour les acheteurs qui doivent sécuriser un fournisseur industriel",
    en: "Built for buyers who need to secure an industrial supplier",
    ar: "موجه للمشترين الذين يحتاجون إلى تأمين مورد صناعي",
  },
  intro: {
    fr: "Un acheteur B2B ne cherche pas seulement une photo de produit. Il veut comprendre si le fournisseur sait lire une demande, adapter la matière, respecter des dimensions, préparer un conditionnement et répondre sur les contraintes export.",
    en: "A B2B buyer is not only looking for a product photo. They need to know whether the supplier can read a request, adapt material, respect dimensions, prepare packing and answer export constraints.",
    ar: "المشتري المهني لا يبحث عن صورة منتج فقط. يحتاج إلى معرفة قدرة المورد على فهم الطلب وتكييف المادة واحترام الأبعاد وتحضير التغليف ومتطلبات التصدير.",
  },
  body: {
    fr: "L'accueil doit donc positionner Tunibois comme un partenaire de transformation: dialogue technique, fabrication selon besoin, contrôle, documentation et accompagnement commercial. Chaque section rapproche le visiteur d'une demande de devis exploitable.",
    en: "The homepage therefore positions Tunibois as a transformation partner: technical dialogue, need-based manufacturing, control, documentation and commercial support. Each section moves the visitor toward a usable quote request.",
    ar: "لذلك تقدم الصفحة الرئيسية Tunibois كشريك تحويل: حوار تقني وتصنيع حسب الحاجة ومراقبة ووثائق ومرافقة تجارية. كل قسم يقرب الزائر من طلب عرض قابل للمعالجة.",
  },
};

export const buyerSegments = [
  {
    title: { fr: "Importateurs", en: "Importers", ar: "المستوردون" },
    text: {
      fr: "Ils veulent des produits exportables, une documentation claire, un conditionnement maîtrisé et un interlocuteur capable de qualifier une demande avant expédition.",
      en: "They need export-ready products, clear documentation, controlled packing and a contact able to qualify a request before shipment.",
      ar: "يحتاجون إلى منتجات جاهزة للتصدير ووثائق واضحة وتغليف مضبوط ومخاطب قادر على تأهيل الطلب قبل الشحن.",
    },
  },
  {
    title: { fr: "Distributeurs", en: "Distributors", ar: "الموزعون" },
    text: {
      fr: "Ils recherchent des gammes cohérentes, des variantes, un emballage adapté au circuit de vente et des volumes à organiser selon marché.",
      en: "They look for coherent ranges, variants, packing adapted to the sales channel and volumes organized by market.",
      ar: "يبحثون عن تشكيلات واضحة ومتغيرات وتغليف مناسب لقناة البيع وكميات تنظم حسب السوق.",
    },
  },
  {
    title: { fr: "Industriels", en: "Manufacturers", ar: "الصناعيون" },
    text: {
      fr: "Ils doivent intégrer des composants, panneaux, pièces ou emballages dans une chaîne de production avec dimensions, tolérances et délais cohérents.",
      en: "They need to integrate components, panels, parts or packaging into production flows with coherent dimensions, tolerances and lead times.",
      ar: "يحتاجون إلى إدماج مكونات أو ألواح أو قطع أو تغليف في تدفقات إنتاج بأبعاد وتفاوتات وآجال واضحة.",
    },
  },
];

export const homeOfferGroups = [
  {
    id: "pallets-packaging",
    routeKey: "pallets",
    title: { fr: "Palettes et emballages industriels", en: "Industrial pallets and packaging", ar: "منصات وتغليف صناعي" },
    text: {
      fr: "Pour les flux logistiques, l'export, le stockage et les besoins industriels où la charge, le format et le conditionnement comptent.",
      en: "For logistics flows, export, storage and industrial needs where load, format and packing matter.",
      ar: "للتدفقات اللوجستية والتصدير والتخزين والاحتياجات الصناعية حيث تهم الحمولة والمقاس والتغليف.",
    },
    examples: {
      fr: ["Palettes export", "Euro palettes", "Palettes industrielles", "Caisses et emballages bois"],
      en: ["Export pallets", "Euro pallets", "Industrial pallets", "Wooden crates and packaging"],
      ar: ["منصات تصدير", "منصات أوروبية", "منصات صناعية", "صناديق وتغليف خشبي"],
    },
  },
  {
    id: "eco-wood",
    routeKey: "stirrers",
    title: { fr: "Produits eco wood pour distribution", en: "Eco wood products for distribution", ar: "منتجات خشبية صديقة للتوزيع" },
    text: {
      fr: "Pour distributeurs, CHR, marques privées et acheteurs qui veulent des produits simples mais réguliers en finition et conditionnement.",
      en: "For distributors, foodservice, private labels and buyers needing simple products with consistent finish and packing.",
      ar: "للموزعين والمطاعم والعلامات الخاصة والمشترين الذين يريدون منتجات بسيطة لكنها منتظمة في التشطيب والتغليف.",
    },
    examples: {
      fr: ["Agitateurs café", "Bâtonnets glace", "Couverts bois", "Cure-dents"],
      en: ["Coffee stirrers", "Ice cream sticks", "Wooden cutlery", "Toothpicks"],
      ar: ["محركات قهوة", "عيدان مثلجات", "أدوات مائدة خشبية", "أعواد أسنان"],
    },
  },
  {
    id: "wood-energy",
    routeKey: "pellets",
    title: { fr: "Bois énergie et valorisation matière", en: "Wood energy and material valorization", ar: "طاقة خشبية وتثمين المادة" },
    text: {
      fr: "Pour revendeurs énergie, circuits professionnels et clients cherchant des formats bois énergie à qualifier selon disponibilité et conditionnement.",
      en: "For energy resellers, professional channels and customers looking for wood energy formats to qualify by availability and packing.",
      ar: "لموزعي الطاقة والقنوات المهنية والعملاء الباحثين عن صيغ طاقة خشبية حسب التوفر والتغليف.",
    },
    examples: {
      fr: ["Pellets", "Briquettes", "Conditionnement palette", "Volumes selon disponibilité"],
      en: ["Pellets", "Briquettes", "Palletized packing", "Volumes by availability"],
      ar: ["حبيبات", "قوالب خشبية", "تغليف على منصات", "كميات حسب التوفر"],
    },
  },
  {
    id: "components-panels",
    routeKey: "products",
    title: { fr: "Panneaux, composants et pièces sur plan", en: "Panels, components and made-to-plan parts", ar: "ألواح ومكونات وقطع حسب الرسم" },
    text: {
      fr: "Pour fabricants de mobilier, agenceurs et industriels qui veulent discuter dimensions, épaisseurs, sections, usinage et répétabilité.",
      en: "For furniture manufacturers, fit-out companies and industrial buyers discussing dimensions, thicknesses, sections, machining and repeatability.",
      ar: "لمصنعي الأثاث وشركات التجهيز والمشترين الصناعيين الذين يناقشون الأبعاد والسماكات والمقاطع والتشغيل والتكرار.",
    },
    examples: {
      fr: ["Panneaux collés", "Finger joint panels", "Pieds et traverses", "Pièces tournées ou usinées"],
      en: ["Edge glued panels", "Finger joint panels", "Legs and rails", "Turned or machined parts"],
      ar: ["ألواح ملصقة", "ألواح finger joint", "أرجل وعوارض", "قطع مخروطة أو مشغلة"],
    },
  },
  {
    id: "outdoor-architecture",
    routeKey: "products",
    title: { fr: "Extérieur et éléments architecturaux", en: "Outdoor and architectural wood elements", ar: "عناصر خارجية ومعمارية خشبية" },
    text: {
      fr: "Pour projets de terrasses, bardages, claustras, habillages et éléments décoratifs à étudier selon essence, usage et exposition.",
      en: "For decking, cladding, screens, wall/ceiling coverings and decorative elements to study by species, use and exposure.",
      ar: "لمشاريع التراسات والكسوة والفواصل والديكور التي تدرس حسب نوع الخشب والاستخدام والتعرض.",
    },
    examples: {
      fr: ["Lames de terrasse", "Bardage", "Claustras", "Revêtements et décoration"],
      en: ["Decking boards", "Cladding", "Screens", "Coverings and decoration"],
      ar: ["ألواح تراس", "كسوة", "فواصل", "تلبيسات وديكور"],
    },
  },
] satisfies Array<{
  examples: Record<Locale, string[]>;
  id: HomeOfferGroupId;
  routeKey: RouteKey;
  text: LocalizedText;
  title: LocalizedText;
}>;

export const industrialProcess = [
  {
    title: { fr: "Demande qualifiée", en: "Qualified request", ar: "طلب مؤهل" },
    text: {
      fr: "Produit, usage, destination, dimensions, quantité, niveau de finition, contraintes de charge ou de ligne de conditionnement.",
      en: "Product, use case, destination, dimensions, quantity, finish level, load constraints or packing line constraints.",
      ar: "المنتج والاستخدام والوجهة والأبعاد والكمية ومستوى التشطيب ومتطلبات الحمولة أو خط التغليف.",
    },
  },
  {
    title: { fr: "Étude matière et faisabilité", en: "Material and feasibility review", ar: "دراسة المادة والجدوى" },
    text: {
      fr: "Choix de l'essence, disponibilité, humidité, sections, tolérances et adaptation au cahier des charges client.",
      en: "Species choice, availability, moisture, sections, tolerances and adaptation to customer specifications.",
      ar: "اختيار نوع الخشب والتوفر والرطوبة والمقاطع والتفاوتات والتكييف مع دفتر شروط العميل.",
    },
  },
  {
    title: { fr: "Transformation et contrôle", en: "Transformation and control", ar: "التحويل والمراقبة" },
    text: {
      fr: "Sciage, préparation, usinage, assemblage ou conditionnement avec points de contrôle adaptés au produit demandé.",
      en: "Sawing, preparation, machining, assembly or packing with control points adapted to the requested product.",
      ar: "نشر وتحضير وتشغيل وتجميع أو تغليف مع نقاط مراقبة مناسبة للمنتج المطلوب.",
    },
  },
  {
    title: { fr: "Préparation commerciale export", en: "Commercial export preparation", ar: "تحضير تجاري للتصدير" },
    text: {
      fr: "Devis, base technique, conditionnement, documents disponibles, délais à confirmer et prochaines étapes commerciales.",
      en: "Quote, technical basis, packing, available documents, lead times to confirm and next commercial steps.",
      ar: "عرض سعر وأساس تقني وتغليف ووثائق متاحة وآجال للتأكيد وخطوات تجارية تالية.",
    },
  },
];

export const industrialProcessIntro = {
  fr: "Cette méthode répond à l'objection la plus importante: est-ce que le fournisseur sait transformer une demande floue en base industrielle et commerciale exploitable ?",
  en: "This method answers the key objection: can the supplier turn an unclear request into a usable industrial and commercial basis?",
  ar: "تجيب هذه الطريقة على أهم اعتراض: هل يستطيع المورد تحويل طلب غير واضح إلى أساس صناعي وتجاري قابل للاستخدام؟",
};

export const capabilitiesIntro = {
  fr: "L'objectif n'est pas d'afficher une usine abstraite. Il faut montrer les capacités qui comptent dans une décision d'achat: matière, transformation, contrôle, conditionnement et export.",
  en: "The goal is not to display an abstract factory. The page highlights the capabilities that matter in a purchasing decision: material, transformation, control, packing and export.",
  ar: "الهدف ليس عرض مصنع بشكل عام، بل إبراز القدرات المهمة في قرار الشراء: المادة والتحويل والمراقبة والتغليف والتصدير.",
};

export const exportReadinessIntro = {
  fr: "Un acheteur international veut savoir comment sa commande sera préparée, documentée et suivie. La géographie vient ensuite; la crédibilité commence par le process.",
  en: "An international buyer wants to know how the order will be prepared, documented and followed. Geography comes next; credibility starts with process.",
  ar: "يريد المشتري الدولي معرفة كيف سيتم تحضير الطلب وتوثيقه ومتابعته. تأتي الجغرافيا بعد ذلك؛ المصداقية تبدأ من العملية.",
};

export const exportPillars = [
  {
    title: { fr: "Documentation", en: "Documentation", ar: "الوثائق" },
    text: {
      fr: "Facture export, packing list, certificat d'origine et documents spécifiques à confirmer selon destination et produit.",
      en: "Export invoice, packing list, certificate of origin and specific documents to confirm by destination and product.",
      ar: "فاتورة تصدير وقائمة تعبئة وشهادة منشأ ووثائق خاصة تؤكد حسب الوجهة والمنتج.",
    },
  },
  {
    title: { fr: "Conditionnement", en: "Packing", ar: "التغليف" },
    text: {
      fr: "Empilage, cerclage, lots, palettes, étiquetage et préparation logistique selon volume, transport et circuit client.",
      en: "Stacking, strapping, batches, pallets, labeling and logistics preparation according to volume, transport and customer channel.",
      ar: "تكديس وربط ودُفعات ومنصات ووسم وتحضير لوجستي حسب الكمية والنقل وقناة العميل.",
    },
  },
  {
    title: { fr: "Zones commerciales", en: "Commercial regions", ar: "المناطق التجارية" },
    text: {
      fr: "Approche Europe, Afrique et Moyen-Orient avec une qualification par produit, réglementation, volume et faisabilité.",
      en: "Europe, Africa and Middle East approach qualified by product, regulation, volume and feasibility.",
      ar: "مقاربة أوروبا وأفريقيا والشرق الأوسط حسب المنتج والتنظيم والكمية والجدوى.",
    },
  },
];

export const homeFaqIntro = {
  fr: "Les questions ci-dessous répondent aux vraies hésitations d'un importateur, d'un distributeur ou d'un industriel avant de transmettre un cahier des charges.",
  en: "The questions below answer the real hesitations of an importer, distributor or manufacturer before sharing a specification.",
  ar: "تجيب الأسئلة التالية على ترددات المستورد أو الموزع أو الصناعي قبل إرسال دفتر الشروط.",
};

export const homeFaq = [
  {
    q: {
      fr: "Quels produits Tunibois peut-elle étudier pour l'export ?",
      en: "Which products can Tunibois study for export?",
      ar: "ما المنتجات التي يمكن أن تدرسها Tunibois للتصدير؟",
    },
    a: {
      fr: "Tunibois peut qualifier des demandes autour des palettes, emballages bois, produits eco wood, bois énergie, panneaux, composants et éléments bois sur mesure. La faisabilité dépend du cahier des charges, de la matière et du volume.",
      en: "Tunibois can qualify requests around pallets, wooden packaging, eco wood products, wood energy, panels, components and custom wood elements. Feasibility depends on specification, material and volume.",
      ar: "يمكن لـ Tunibois دراسة طلبات المنصات والتغليف الخشبي والمنتجات الخشبية الصديقة والطاقة الخشبية والألواح والمكونات والعناصر حسب الطلب. تعتمد الجدوى على المواصفات والمادة والكمية.",
    },
  },
  {
    q: {
      fr: "Puis-je envoyer un cahier des charges ou un plan technique ?",
      en: "Can I send a specification or technical drawing?",
      ar: "هل يمكن إرسال دفتر شروط أو رسم تقني؟",
    },
    a: {
      fr: "Oui. C'est même préférable pour une demande industrielle. Dimensions, tolérances, essence souhaitée, humidité, finition, conditionnement et destination permettent de construire une réponse plus sérieuse.",
      en: "Yes. It is preferable for industrial requests. Dimensions, tolerances, preferred species, moisture, finish, packing and destination help build a more serious answer.",
      ar: "نعم، وهذا أفضل للطلبات الصناعية. تساعد الأبعاد والتفاوتات ونوع الخشب والرطوبة والتشطيب والتغليف والوجهة على إعداد رد أكثر جدية.",
    },
  },
  {
    q: {
      fr: "Les échantillons sont-ils possibles avant une commande ?",
      en: "Are samples possible before an order?",
      ar: "هل العينات ممكنة قبل الطلب؟",
    },
    a: {
      fr: "Une demande d'échantillon peut être étudiée selon le produit, le niveau de préparation nécessaire et le pays de destination. L'objectif est de valider matière, finition et conditionnement avant un volume plus important.",
      en: "A sample request can be reviewed depending on the product, preparation level required and destination country. The goal is to validate material, finish and packing before larger volume.",
      ar: "يمكن دراسة طلب العينة حسب المنتج ومستوى التحضير المطلوب وبلد الوجهة. الهدف هو تأكيد المادة والتشطيب والتغليف قبل كمية أكبر.",
    },
  },
  {
    q: {
      fr: "Comment sont définis les MOQ et les délais ?",
      en: "How are MOQ and lead times defined?",
      ar: "كيف يتم تحديد الحد الأدنى والآجال؟",
    },
    a: {
      fr: "Ils ne doivent pas être annoncés de façon générique. MOQ et délais dépendent du produit, du format, du conditionnement, de la disponibilité matière et du niveau de personnalisation demandé.",
      en: "They should not be announced generically. MOQ and lead times depend on product, format, packing, material availability and customization level.",
      ar: "لا يجب إعلانها بشكل عام. تعتمد الحدود الدنيا والآجال على المنتج والمقاس والتغليف وتوفر المادة ومستوى التخصيص المطلوب.",
    },
  },
  {
    q: {
      fr: "Quels documents export peuvent accompagner une commande ?",
      en: "Which export documents can support an order?",
      ar: "ما الوثائق التي يمكن أن ترافق الطلب؟",
    },
    a: {
      fr: "Selon produit et destination, la discussion peut porter sur facture export, packing list, certificat d'origine, documents phytosanitaires ou autres pièces demandées par l'importateur.",
      en: "Depending on product and destination, the discussion can include export invoice, packing list, certificate of origin, phytosanitary documents or other documents requested by the importer.",
      ar: "حسب المنتج والوجهة يمكن مناقشة فاتورة التصدير وقائمة التعبئة وشهادة المنشأ والوثائق الصحية النباتية أو وثائق أخرى يطلبها المستورد.",
    },
  },
];
