import type { Locale } from "@/lib/locales";
import type { RouteKey } from "@/lib/routes";

type LocalizedText = Record<Locale, string>;

export type HomeOfferGroupId = "components-panels" | "eco-wood" | "outdoor-architecture" | "pallets-packaging" | "wood-energy";

export const homeCopy = {
  hero: {
    fr: {
      title: "Produits bois transformés en Tunisie pour l'industrie et l'export",
      text: "Palettes, emballages, panneaux, composants, produits eco wood et bois énergie préparés selon vos dimensions, volumes, conditionnements et destinations.",
      quote: "Demander une offre export",
      catalogue: "Recevoir le catalogue",
    },
    en: {
      title: "Wood products transformed in Tunisia for industry and export",
      text: "Pallets, packaging, panels, components, eco wood products and wood energy prepared to your dimensions, volumes, packing requirements and destinations.",
      quote: "Request an export offer",
      catalogue: "Request the catalogue",
    },
    ar: {
      title: "منتجات خشبية محولة في تونس للصناعة والتصدير",
      text: "منصات وتغليف وألواح ومكونات ومنتجات eco wood وطاقة خشبية حسب الأبعاد والكميات والتغليف والوجهات المطلوبة.",
      quote: "طلب عرض تصدير",
      catalogue: "طلب الكتالوج",
    },
  },
  shared: {
    fr: {
      products: "Gammes bois pour importateurs, distributeurs et industriels",
      factory: "Transformation, contrôle et préparation export",
      exportMarkets: "Documents, conditionnement et délais export",
      formTitle: "Recevoir une réponse commerciale claire",
      formText: "Envoyez le produit, les dimensions, la quantité, le pays de destination, le conditionnement attendu et vos contraintes techniques. Tunibois confirme la faisabilité, les informations manquantes, le délai estimatif et la prochaine étape commerciale.",
    },
    en: {
      products: "Wood ranges for importers, distributors and manufacturers",
      factory: "Transformation, control and export preparation",
      exportMarkets: "Export orders ready for documentation",
      formTitle: "Receive a clear commercial answer",
      formText: "Send product, dimensions, quantity, destination country, expected packing and technical constraints. Tunibois confirms feasibility, missing information, estimated lead time and the next commercial step.",
    },
    ar: {
      products: "تشكيلات خشبية للمستوردين والموزعين والصناعيين",
      factory: "تحويل ومراقبة وتحضير للتصدير",
      exportMarkets: "طلبات تصدير جاهزة للتوثيق",
      formTitle: "الحصول على رد تجاري قابل للاستخدام",
      formText: "أرسل المنتج والأبعاد والكمية وبلد الوجهة والتغليف المطلوب والمتطلبات التقنية. تؤكد Tunibois الجدوى والمعلومات الناقصة والآجال التقديرية والخطوة التجارية التالية.",
    },
  },
};

export const trustRail = [
  { fr: "Palettes et emballages", en: "Pallets and packaging", ar: "منصات وتغليف" },
  { fr: "Panneaux et composants", en: "Panels and components", ar: "ألواح ومكونات" },
  { fr: "Produits eco wood", en: "Eco wood products", ar: "منتجات eco wood" },
  { fr: "Contrôle et conditionnement", en: "Control and packing", ar: "مراقبة وتغليف" },
  { fr: "Documents export", en: "Export documents", ar: "وثائق تصدير" },
] satisfies Array<LocalizedText>;

export const buyerPositioning = {
  title: {
    fr: "Des réponses sérieuses pour des achats bois exigeants",
    en: "Serious answers for demanding wood purchasing",
    ar: "إجابات جدية لمشتريات خشب دقيقة",
  },
  intro: {
    fr: "Tunibois vérifie les points qui comptent avant production: essence, dimensions, tolérances, finition, quantité, emballage, transport et documents export.",
    en: "Tunibois reviews the points that matter before production: species, dimensions, tolerances, finish, quantity, packing, transport and export documents.",
    ar: "تراجع Tunibois النقاط المهمة قبل الإنتاج: نوع الخشب والأبعاد والتفاوتات والتشطيب والكمية والتغليف والنقل ووثائق التصدير.",
  },
  body: {
    fr: "À partir de votre cahier des charges, l'équipe confirme ce qui est faisable, ce qui doit être précisé et ce qui impacte le prix, le délai ou le conditionnement.",
    en: "From your specifications, the team confirms what is feasible, what needs clarification and what affects price, lead time or packing.",
    ar: "انطلاقا من دفتر الشروط، يؤكد الفريق ما هو قابل للتنفيذ وما يحتاج إلى توضيح وما يؤثر على السعر أو الآجال أو التغليف.",
  },
};

export const buyerSegments = [
  {
    title: { fr: "Importateurs", en: "Importers", ar: "المستوردون" },
    text: {
      fr: "Produits prêts à expédier, documents commerciaux, conditionnement stable et échanges clairs avant chargement.",
      en: "Products ready to ship, commercial documents, stable packing and clear exchanges before loading.",
      ar: "منتجات جاهزة للشحن ووثائق تجارية وتغليف ثابت وتبادل واضح قبل التحميل.",
    },
  },
  {
    title: { fr: "Distributeurs", en: "Distributors", ar: "الموزعون" },
    text: {
      fr: "Gammes lisibles, variantes, conditionnements adaptés aux circuits de vente et volumes organisés par marché.",
      en: "Clear ranges, variants, packing adapted to sales channels and volumes organized by market.",
      ar: "تشكيلات واضحة ومتغيرات وتغليف مناسب لقنوات البيع وكميات منظمة حسب السوق.",
    },
  },
  {
    title: { fr: "Industriels", en: "Manufacturers", ar: "الصناعيون" },
    text: {
      fr: "Composants, panneaux, pièces ou emballages intégrables à une chaîne de production avec dimensions, tolérances et délais cohérents.",
      en: "Components, panels, parts or packaging that fit production flows with coherent dimensions, tolerances and lead times.",
      ar: "مكونات أو ألواح أو قطع أو تغليف قابل للإدماج في الإنتاج بأبعاد وتفاوتات وآجال واضحة.",
    },
  },
];

export const homeOfferGroups = [
  {
    id: "pallets-packaging",
    routeKey: "pallets",
    title: { fr: "Palettes et emballages industriels", en: "Industrial pallets and packaging", ar: "منصات وتغليف صناعي" },
    text: {
      fr: "Formats adaptés au stockage, à la manutention, au transport routier ou maritime et aux contraintes de charge.",
      en: "Formats adapted to storage, handling, road or sea transport and load constraints.",
      ar: "مقاسات مناسبة للتخزين والمناولة والنقل البري أو البحري ومتطلبات الحمولة.",
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
      fr: "Produits légers, répétables et conditionnables pour distributeurs, marques privées, CHR et circuits professionnels.",
      en: "Lightweight, repeatable and packable products for distributors, private labels, foodservice and professional channels.",
      ar: "منتجات خفيفة وقابلة للتكرار والتغليف للموزعين والعلامات الخاصة والمطاعم والقنوات المهنية.",
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
      fr: "Formats bois énergie à confirmer selon disponibilité matière, humidité, pouvoir calorifique, sacs, palettes et volumes.",
      en: "Wood energy formats confirmed by material availability, moisture, calorific value, bags, pallets and volumes.",
      ar: "صيغ طاقة خشبية تؤكد حسب توفر المادة والرطوبة والقيمة الحرارية والأكياس والمنصات والكميات.",
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
      fr: "Dimensions, épaisseurs, sections, usinage, collage et répétabilité étudiés pour fabricants et industriels.",
      en: "Dimensions, thicknesses, sections, machining, gluing and repeatability reviewed for manufacturers and industrial buyers.",
      ar: "أبعاد وسماكات ومقاطع وتشغيل ولصق وتكرار تتم دراستها للمصنعين والمشترين الصناعيين.",
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
      fr: "Lames, bardages, claustras et habillages étudiés selon essence, exposition, usage, finition et conditionnement.",
      en: "Boards, cladding, screens and coverings reviewed by species, exposure, use, finish and packing.",
      ar: "ألواح وكسوة وفواصل وتلبيسات تدرس حسب نوع الخشب والتعرض والاستخدام والتشطيب والتغليف.",
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
    title: { fr: "Brief technique", en: "Technical brief", ar: "ملف تقني" },
    text: {
      fr: "Produit, usage, destination, dimensions, quantité, niveau de finition, contraintes de charge ou de ligne de conditionnement.",
      en: "Product, use case, destination, dimensions, quantity, finish level, load constraints or packing line constraints.",
      ar: "المنتج والاستخدام والوجهة والأبعاد والكمية ومستوى التشطيب ومتطلبات الحمولة أو خط التغليف.",
    },
  },
  {
    title: { fr: "Validation matière", en: "Material validation", ar: "تأكيد المادة" },
    text: {
      fr: "Choix de l'essence, disponibilité, humidité, sections, tolérances et adaptation au cahier des charges client.",
      en: "Species choice, availability, moisture, sections, tolerances and adaptation to customer specifications.",
      ar: "اختيار نوع الخشب والتوفر والرطوبة والمقاطع والتفاوتات والتكييف مع دفتر شروط العميل.",
    },
  },
  {
    title: { fr: "Production contrôlée", en: "Controlled production", ar: "إنتاج مراقب" },
    text: {
      fr: "Sciage, préparation, usinage, assemblage ou conditionnement avec points de contrôle adaptés au produit demandé.",
      en: "Sawing, preparation, machining, assembly or packing with control points adapted to the requested product.",
      ar: "نشر وتحضير وتشغيل وتجميع أو تغليف مع نقاط مراقبة مناسبة للمنتج المطلوب.",
    },
  },
  {
    title: { fr: "Offre et préparation export", en: "Offer and export preparation", ar: "عرض وتحضير تصدير" },
    text: {
      fr: "Devis, base technique, conditionnement, documents disponibles, délais à confirmer et prochaines étapes commerciales.",
      en: "Quote, technical basis, packing, available documents, lead times to confirm and next commercial steps.",
      ar: "عرض سعر وأساس تقني وتغليف ووثائق متاحة وآجال للتأكيد وخطوات تجارية تالية.",
    },
  },
];

export const industrialProcessIntro = {
  fr: "Avant de chiffrer, Tunibois vérifie la matière, les formats, les tolérances, le conditionnement, les documents nécessaires et les points qui peuvent bloquer une expédition.",
  en: "Before pricing, Tunibois reviews material, formats, tolerances, packing, required documents and points that could block a shipment.",
  ar: "قبل التسعير تراجع Tunibois المادة والمقاسات والتفاوتات والتغليف والوثائق المطلوبة والنقاط التي قد تعطل الشحن.",
};

export const capabilitiesIntro = {
  fr: "Disponibilité matière, régularité, contrôle, conditionnement et préparation export sont vérifiés avec la même exigence que le produit demandé.",
  en: "Material availability, consistency, control, packing and export preparation are reviewed with the same discipline as the requested product.",
  ar: "يتم التحقق من توفر المادة والانتظام والمراقبة والتغليف والتحضير للتصدير بنفس دقة المنتج المطلوب.",
};

export const exportReadinessIntro = {
  fr: "Pour l'international, Tunibois prépare les informations commerciales indispensables: documents, marquage, lots, emballage, délais confirmés et coordination transport.",
  en: "For international orders, Tunibois prepares the commercial information that matters: documents, marking, batches, packing, confirmed lead times and transport coordination.",
  ar: "للطلبات الدولية تحضر Tunibois المعلومات التجارية الأساسية: الوثائق والوسم والدُفعات والتغليف والآجال المؤكدة والتنسيق مع النقل.",
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
    title: { fr: "Marchés adressés", en: "Commercial regions", ar: "المناطق التجارية" },
    text: {
      fr: "Europe, Afrique et Moyen-Orient: chaque demande est étudiée selon produit, réglementation, volume et faisabilité.",
      en: "Europe, Africa and Middle East requests are reviewed by product, regulation, volume and feasibility.",
      ar: "مقاربة أوروبا وأفريقيا والشرق الأوسط حسب المنتج والتنظيم والكمية والجدوى.",
    },
  },
];

export const homeFaqIntro = {
  fr: "Avant une première commande, Tunibois peut confirmer la faisabilité, les échantillons possibles, les MOQ, les délais et les documents export à prévoir.",
  en: "Before a first order, Tunibois can confirm feasibility, possible samples, MOQ, lead times and export documents to plan.",
  ar: "قبل أول طلب يمكن لـ Tunibois تأكيد الجدوى والعينات الممكنة والحد الأدنى والآجال ووثائق التصدير المطلوبة.",
};

export const homeFaq = [
  {
    q: {
      fr: "Quels produits Tunibois peut-elle étudier pour l'export ?",
      en: "Which products can Tunibois study for export?",
      ar: "ما المنتجات التي يمكن أن تدرسها Tunibois للتصدير؟",
    },
    a: {
      fr: "Tunibois étudie les palettes, emballages bois, produits eco wood, bois énergie, panneaux, composants et éléments bois sur mesure. La faisabilité dépend du cahier des charges, de la matière et du volume.",
      en: "Tunibois reviews pallets, wooden packaging, eco wood products, wood energy, panels, components and custom wood elements. Feasibility depends on specification, material and volume.",
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
      fr: "Oui, selon le produit, le niveau de préparation nécessaire et le pays de destination. L'échantillon sert à valider la matière, la finition, les dimensions et le conditionnement avant un volume plus important.",
      en: "Yes, depending on the product, preparation level required and destination country. The sample validates material, finish, dimensions and packing before larger volume.",
      ar: "نعم حسب المنتج ومستوى التحضير المطلوب وبلد الوجهة. تساعد العينة على تأكيد المادة والتشطيب والأبعاد والتغليف قبل كمية أكبر.",
    },
  },
  {
    q: {
      fr: "Comment sont définis les MOQ et les délais ?",
      en: "How are MOQ and lead times defined?",
      ar: "كيف يتم تحديد الحد الأدنى والآجال؟",
    },
    a: {
      fr: "Tunibois confirme le MOQ et le délai après analyse du produit, du format, du conditionnement, de la disponibilité matière et du niveau de personnalisation demandé.",
      en: "Tunibois confirms MOQ and lead time after reviewing product, format, packing, material availability and requested customization level.",
      ar: "تؤكد Tunibois الحد الأدنى والآجال بعد دراسة المنتج والمقاس والتغليف وتوفر المادة ومستوى التخصيص المطلوب.",
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
