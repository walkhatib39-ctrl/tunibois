import type { Locale } from "@/lib/locales";

type LocalizedText = Record<Locale, string>;

export const exportHero = {
  title: {
    fr: "Export bois depuis la Tunisie pour acheteurs industriels",
    en: "Wood export from Tunisia for industrial buyers",
    ar: "تصدير الخشب من تونس للمشترين الصناعيين",
  },
  text: {
    fr: "Tunibois accompagne les importateurs, distributeurs et industriels sur des demandes bois B2B: produit, dimensions, volume, conditionnement, documents et préparation logistique avant expédition.",
    en: "Tunibois supports importers, distributors and manufacturers on B2B wood enquiries: product, dimensions, volume, packing, documents and logistics preparation before shipment.",
    ar: "ترافق Tunibois المستوردين والموزعين والصناعيين في طلبات الخشب B2B: المنتج، الأبعاد، الكمية، التغليف، الوثائق والتحضير اللوجستي قبل الشحن.",
  },
  primary: {
    fr: "Demander une offre export",
    en: "Request an export offer",
    ar: "طلب عرض تصدير",
  },
  secondary: {
    fr: "Voir le process export",
    en: "View export process",
    ar: "عرض مسار التصدير",
  },
  imageCaption: {
    fr: "Palettes, emballages, composants, produits eco wood et bois énergie préparés selon destination.",
    en: "Pallets, packaging, components, eco wood products and wood energy prepared according to destination.",
    ar: "منصات وتغليف ومكونات ومنتجات eco wood وطاقة خشبية مهيأة حسب الوجهة.",
  },
} satisfies {
  imageCaption: LocalizedText;
  primary: LocalizedText;
  secondary: LocalizedText;
  text: LocalizedText;
  title: LocalizedText;
};

export const exportHeroHighlights = [
  {
    title: {
      fr: "Réponse exploitable",
      en: "Usable reply",
      ar: "رد قابل للاستخدام",
    },
    text: {
      fr: "Produit, quantité, destination et contraintes sont clarifiés avant proposition.",
      en: "Product, quantity, destination and constraints are clarified before proposal.",
      ar: "يتم توضيح المنتج والكمية والوجهة والمتطلبات قبل العرض.",
    },
  },
  {
    title: {
      fr: "Conditionnement export",
      en: "Export packing",
      ar: "تغليف للتصدير",
    },
    text: {
      fr: "Lots, palettes, cerclage, marquage et protection étudiés selon produit.",
      en: "Batches, pallets, strapping, marking and protection are reviewed by product.",
      ar: "تدرس الدفعات والمنصات والربط والوسم والحماية حسب المنتج.",
    },
  },
  {
    title: {
      fr: "Documents à prévoir",
      en: "Documents to plan",
      ar: "وثائق يجب تحضيرها",
    },
    text: {
      fr: "Facture, packing list, origine et pièces spécifiques selon destination.",
      en: "Invoice, packing list, origin and specific documents according to destination.",
      ar: "فاتورة وقائمة تعبئة ومنشأ ووثائق خاصة حسب الوجهة.",
    },
  },
] satisfies Array<{ text: LocalizedText; title: LocalizedText }>;

export const exportBuyerAssurance = {
  title: {
    fr: "Ce qu'un acheteur international doit comprendre rapidement",
    en: "What an international buyer needs to understand quickly",
    ar: "ما يحتاج المشتري الدولي إلى فهمه بسرعة",
  },
  text: {
    fr: "Une demande export ne se limite pas au prix. L'acheteur doit savoir si le produit est faisable, comment il sera emballé, quels documents seront discutés et quelles informations manquent pour avancer.",
    en: "An export enquiry is not only about price. The buyer must know whether the product is feasible, how it will be packed, which documents will be discussed and what information is missing to move forward.",
    ar: "طلب التصدير لا يتعلق بالسعر فقط. يجب أن يعرف المشتري هل المنتج قابل للتنفيذ، كيف سيتم تغليفه، ما الوثائق التي ستناقش، وما المعلومات الناقصة للتقدم.",
  },
} satisfies {
  text: LocalizedText;
  title: LocalizedText;
};

export const exportAssurances = [
  {
    title: {
      fr: "Faisabilité avant engagement",
      en: "Feasibility before commitment",
      ar: "جدوى قبل الالتزام",
    },
    text: {
      fr: "Tunibois vérifie le produit, l'essence, les dimensions, le volume, l'usage et la destination avant de cadrer l'offre.",
      en: "Tunibois reviews product, species, dimensions, volume, use case and destination before framing the offer.",
      ar: "تراجع Tunibois المنتج ونوع الخشب والأبعاد والكمية والاستخدام والوجهة قبل تأطير العرض.",
    },
  },
  {
    title: {
      fr: "Conditionnement compatible transport",
      en: "Transport-ready packing",
      ar: "تغليف مناسب للنقل",
    },
    text: {
      fr: "Empilage, palettes, protection, lots et marquage sont étudiés selon transport routier, maritime ou multimodal.",
      en: "Stacking, pallets, protection, batches and marking are reviewed for road, sea or multimodal transport.",
      ar: "تدرس طريقة التكديس والمنصات والحماية والدفعات والوسم حسب النقل البري أو البحري أو المتعدد.",
    },
  },
  {
    title: {
      fr: "Documents commerciaux identifiés",
      en: "Commercial documents identified",
      ar: "وثائق تجارية محددة",
    },
    text: {
      fr: "Les documents à prévoir sont confirmés selon produit, pays, exigences importateur et éligibilité.",
      en: "Required documents are confirmed according to product, country, importer requirements and eligibility.",
      ar: "تؤكد الوثائق المطلوبة حسب المنتج والبلد ومتطلبات المستورد والأهلية.",
    },
  },
  {
    title: {
      fr: "Échange clair avant production",
      en: "Clear exchange before production",
      ar: "تبادل واضح قبل الإنتاج",
    },
    text: {
      fr: "Les points sensibles sont traités avant lancement: humidité, tolérances, finition, emballage, délai et MOQ.",
      en: "Sensitive points are addressed before launch: moisture, tolerances, finish, packing, lead time and MOQ.",
      ar: "تعالج النقاط الحساسة قبل الانطلاق: الرطوبة، التفاوتات، التشطيب، التغليف، الآجال والحد الأدنى.",
    },
  },
] satisfies Array<{ text: LocalizedText; title: LocalizedText }>;

export const exportProcessIntro = {
  fr: "Le process export doit réduire les incertitudes avant chargement: demande technique, validation produit, conditionnement, documents, transport et suivi commercial.",
  en: "The export process must reduce uncertainty before loading: technical enquiry, product validation, packing, documents, transport and commercial follow-up.",
  ar: "يهدف مسار التصدير إلى تقليل الغموض قبل الشحن: الطلب التقني، تأكيد المنتج، التغليف، الوثائق، النقل والمتابعة التجارية.",
} satisfies LocalizedText;

export const exportProcess = [
  {
    title: {
      fr: "Qualification de la demande",
      en: "Enquiry qualification",
      ar: "تأهيل الطلب",
    },
    text: {
      fr: "Produit, usage, quantité, pays de destination, dimensions, conditionnement et contraintes sont collectés.",
      en: "Product, use case, quantity, destination country, dimensions, packing and constraints are collected.",
      ar: "يتم جمع المنتج والاستخدام والكمية وبلد الوجهة والأبعاد والتغليف والمتطلبات.",
    },
  },
  {
    title: {
      fr: "Validation produit et matière",
      en: "Product and material review",
      ar: "مراجعة المنتج والمادة",
    },
    text: {
      fr: "La faisabilité est étudiée selon essence, disponibilité, humidité, tolérances, usage final et volume.",
      en: "Feasibility is reviewed according to species, availability, moisture, tolerances, final use and volume.",
      ar: "تدرس الجدوى حسب نوع الخشب والتوفر والرطوبة والتفاوتات والاستخدام النهائي والكمية.",
    },
  },
  {
    title: {
      fr: "Offre commerciale structurée",
      en: "Structured commercial offer",
      ar: "عرض تجاري منظم",
    },
    text: {
      fr: "L'offre précise la base technique, les quantités, les hypothèses de conditionnement, les délais et les points à confirmer.",
      en: "The offer states the technical basis, quantities, packing assumptions, lead times and points to confirm.",
      ar: "يوضح العرض الأساس التقني والكميات وافتراضات التغليف والآجال والنقاط المطلوب تأكيدها.",
    },
  },
  {
    title: {
      fr: "Production et contrôle",
      en: "Production and control",
      ar: "إنتاج ومراقبة",
    },
    text: {
      fr: "Les lots sont préparés selon cahier des charges, avec contrôle des dimensions, aspect, quantité et emballage.",
      en: "Batches are prepared according to specification, with control of dimensions, appearance, quantity and packing.",
      ar: "تحضر الدفعات حسب دفتر الشروط مع مراقبة الأبعاد والمظهر والكمية والتغليف.",
    },
  },
  {
    title: {
      fr: "Conditionnement et marquage",
      en: "Packing and marking",
      ar: "تغليف ووسم",
    },
    text: {
      fr: "Palettisation, cerclage, protection, étiquetage ou marquage sont adaptés au produit et au mode de transport.",
      en: "Palletizing, strapping, protection, labeling or marking are adapted to the product and transport mode.",
      ar: "تكيّف البلتة والربط والحماية والملصقات أو الوسم مع المنتج وطريقة النقل.",
    },
  },
  {
    title: {
      fr: "Documents et départ",
      en: "Documents and dispatch",
      ar: "وثائق وانطلاق",
    },
    text: {
      fr: "Les documents commerciaux et logistiques sont préparés avec les informations utiles au chargement et au suivi.",
      en: "Commercial and logistics documents are prepared with the information needed for loading and follow-up.",
      ar: "تحضر الوثائق التجارية واللوجستية بالمعلومات اللازمة للتحميل والمتابعة.",
    },
  },
] satisfies Array<{ text: LocalizedText; title: LocalizedText }>;

export const exportDocumentation = {
  title: {
    fr: "Documents export et informations à cadrer dès le devis",
    en: "Export documents and information to frame from quotation",
    ar: "وثائق التصدير والمعلومات التي يجب تأطيرها منذ عرض السعر",
  },
  text: {
    fr: "La documentation dépend du produit, de la destination, du transport et des exigences de l'importateur. Tunibois identifie les pièces à discuter pour éviter une commande bloquée par un détail administratif ou logistique.",
    en: "Documentation depends on product, destination, transport and importer requirements. Tunibois identifies the documents to discuss so an order is not blocked by an administrative or logistics detail.",
    ar: "تعتمد الوثائق على المنتج والوجهة والنقل ومتطلبات المستورد. تحدد Tunibois الوثائق التي يجب مناقشتها حتى لا يتعطل الطلب بسبب تفصيل إداري أو لوجستي.",
  },
  buyerTitle: {
    fr: "Informations utiles de l'acheteur",
    en: "Useful buyer information",
    ar: "معلومات مفيدة من المشتري",
  },
  documentsTitle: {
    fr: "Documents possibles",
    en: "Possible documents",
    ar: "وثائق ممكنة",
  },
} satisfies {
  buyerTitle: LocalizedText;
  documentsTitle: LocalizedText;
  text: LocalizedText;
  title: LocalizedText;
};

export const exportBuyerInputs = [
  { fr: "Produit recherché, usage final et contraintes techniques", en: "Requested product, final use and technical constraints", ar: "المنتج المطلوب والاستخدام النهائي والمتطلبات التقنية" },
  { fr: "Dimensions, épaisseurs, tolérances et humidité attendue", en: "Dimensions, thicknesses, tolerances and expected moisture", ar: "الأبعاد والسماكات والتفاوتات والرطوبة المطلوبة" },
  { fr: "Quantité, fréquence, MOQ visé et destination", en: "Quantity, frequency, target MOQ and destination", ar: "الكمية والتكرار والحد الأدنى المستهدف والوجهة" },
  { fr: "Conditionnement souhaité, marquage et exigences importateur", en: "Expected packing, marking and importer requirements", ar: "التغليف المطلوب والوسم ومتطلبات المستورد" },
] satisfies Array<LocalizedText>;

export const exportLogistics = {
  title: {
    fr: "Conditionnement et transport pensés avant chargement",
    en: "Packing and transport planned before loading",
    ar: "تغليف ونقل يدرسان قبل التحميل",
  },
  text: {
    fr: "Un bon produit mal conditionné devient un risque commercial. Tunibois traite le conditionnement comme une partie de la commande: protection, empilage, lots, palettes, étiquetage et préparation au mode de transport.",
    en: "A good product with poor packing becomes a commercial risk. Tunibois treats packing as part of the order: protection, stacking, batches, pallets, labeling and preparation for the transport mode.",
    ar: "المنتج الجيد بتغليف ضعيف يتحول إلى خطر تجاري. تعتبر Tunibois التغليف جزءا من الطلب: حماية، تكديس، دفعات، منصات، ملصقات وتحضير لطريقة النقل.",
  },
  note: {
    fr: "Les Incoterms, le transport maritime ou routier et les délais sont confirmés selon destination, volume et responsabilité convenue avec le client.",
    en: "Incoterms, sea or road transport and lead times are confirmed according to destination, volume and responsibility agreed with the client.",
    ar: "تؤكد شروط Incoterms والنقل البحري أو البري والآجال حسب الوجهة والكمية والمسؤولية المتفق عليها مع العميل.",
  },
  imageCaption: {
    fr: "Conditionnement, palettes et préparation de lots pour flux industriels.",
    en: "Packing, pallets and batch preparation for industrial flows.",
    ar: "تغليف ومنصات وتحضير دفعات للتدفقات الصناعية.",
  },
} satisfies {
  imageCaption: LocalizedText;
  note: LocalizedText;
  text: LocalizedText;
  title: LocalizedText;
};

export const exportLogisticsPoints = [
  { fr: "Empilage et stabilité des lots", en: "Stacking and batch stability", ar: "تكديس وثبات الدفعات" },
  { fr: "Palettisation, cerclage et protection", en: "Palletizing, strapping and protection", ar: "بلتة وربط وحماية" },
  { fr: "Étiquetage ou marquage selon destination", en: "Labeling or marking according to destination", ar: "ملصقات أو وسم حسب الوجهة" },
  { fr: "Préparation routière, maritime ou multimodale", en: "Road, sea or multimodal preparation", ar: "تحضير بري أو بحري أو متعدد" },
] satisfies Array<LocalizedText>;

export const exportMarkets = {
  title: {
    fr: "Marchés internationaux étudiés par zones",
    en: "International markets reviewed by region",
    ar: "أسواق دولية تدرس حسب المناطق",
  },
  text: {
    fr: "Tunibois ne présente pas une liste de pays comme une promesse automatique. Chaque destination est étudiée selon produit, réglementation, documents, transport, volume et faisabilité commerciale.",
    en: "Tunibois does not present a list of countries as an automatic promise. Each destination is reviewed by product, regulation, documents, transport, volume and commercial feasibility.",
    ar: "لا تقدم Tunibois قائمة البلدان كوعود تلقائية. تدرس كل وجهة حسب المنتج والتنظيم والوثائق والنقل والكمية والجدوى التجارية.",
  },
  regionNote: {
    fr: "Pays à étudier selon demande",
    en: "Countries to review by enquiry",
    ar: "بلدان تدرس حسب الطلب",
  },
} satisfies {
  regionNote: LocalizedText;
  text: LocalizedText;
  title: LocalizedText;
};

export const exportRegionTexts = {
  Europe: {
    fr: "Proximité commerciale, exigences documentaires, régularité produit et conditionnement adapté aux circuits industriels et distributeurs.",
    en: "Commercial proximity, document requirements, product consistency and packing suited to industrial and distributor channels.",
    ar: "قرب تجاري ومتطلبات وثائق وانتظام المنتج وتغليف مناسب للقنوات الصناعية والتوزيع.",
  },
  "Moyen-Orient": {
    fr: "Demandes à étudier selon produit, volumes, conditionnement, documents import et exigences de présentation.",
    en: "Enquiries reviewed according to product, volumes, packing, import documents and presentation requirements.",
    ar: "طلبات تدرس حسب المنتج والكميات والتغليف ووثائق الاستيراد ومتطلبات العرض.",
  },
  Afrique: {
    fr: "Flux régionaux à qualifier selon usage, budget, transport, robustesse du conditionnement et continuité d'approvisionnement.",
    en: "Regional flows qualified according to use, budget, transport, packing robustness and supply continuity.",
    ar: "تدفقات إقليمية تؤهل حسب الاستخدام والميزانية والنقل ومتانة التغليف واستمرارية التوريد.",
  },
} satisfies Record<string, LocalizedText>;

export const exportFaqIntro = {
  fr: "Ces questions répondent aux vrais blocages d'une première demande export: faisabilité, informations manquantes, documents, échantillons, délais et responsabilités logistiques.",
  en: "These questions answer the real blockers in a first export enquiry: feasibility, missing information, documents, samples, lead times and logistics responsibilities.",
  ar: "تجيب هذه الأسئلة على العوائق الحقيقية في أول طلب تصدير: الجدوى، المعلومات الناقصة، الوثائق، العينات، الآجال والمسؤوليات اللوجستية.",
} satisfies LocalizedText;

export const exportFaq = [
  {
    q: {
      fr: "Quels produits Tunibois peut-elle étudier pour l'export ?",
      en: "Which products can Tunibois review for export?",
      ar: "ما المنتجات التي يمكن أن تدرسها Tunibois للتصدير؟",
    },
    a: {
      fr: "Tunibois peut étudier des palettes, emballages bois, panneaux, composants, pièces sur plan, produits eco wood, bois énergie et produits en olivier selon cahier des charges, matière disponible, volume et destination.",
      en: "Tunibois can review pallets, wooden packaging, panels, components, made-to-drawing parts, eco wood products, wood energy and olive wood products according to specification, available material, volume and destination.",
      ar: "يمكن لـ Tunibois دراسة المنصات والتغليف الخشبي والألواح والمكونات والقطع حسب الرسم ومنتجات eco wood والطاقة الخشبية ومنتجات خشب الزيتون حسب دفتر الشروط والمادة المتاحة والكمية والوجهة.",
    },
  },
  {
    q: {
      fr: "Quelles informations envoyer pour obtenir une réponse sérieuse ?",
      en: "What information should I send to receive a serious reply?",
      ar: "ما المعلومات التي يجب إرسالها للحصول على رد جدي؟",
    },
    a: {
      fr: "Le minimum utile est le produit recherché, les dimensions, l'épaisseur, la quantité, le pays de destination, l'usage, le conditionnement souhaité, les tolérances et les contraintes de délai.",
      en: "The useful minimum is requested product, dimensions, thickness, quantity, destination country, use case, expected packing, tolerances and lead-time constraints.",
      ar: "الحد الأدنى المفيد هو المنتج المطلوب، الأبعاد، السماكة، الكمية، بلد الوجهة، الاستخدام، التغليف المطلوب، التفاوتات ومتطلبات الآجال.",
    },
  },
  {
    q: {
      fr: "Quels documents export peuvent accompagner une commande ?",
      en: "Which export documents can support an order?",
      ar: "ما وثائق التصدير التي يمكن أن ترافق الطلب؟",
    },
    a: {
      fr: "Selon produit et destination, la discussion peut porter sur facture export, packing list, certificat d'origine, document phytosanitaire, EUR.1 si éligible et autres pièces demandées par l'importateur.",
      en: "Depending on product and destination, the discussion can include export invoice, packing list, certificate of origin, phytosanitary document, EUR.1 when eligible and other documents requested by the importer.",
      ar: "حسب المنتج والوجهة يمكن مناقشة فاتورة التصدير وقائمة التعبئة وشهادة المنشأ والوثيقة الصحية النباتية و EUR.1 عند الأهلية ووثائق أخرى يطلبها المستورد.",
    },
  },
  {
    q: {
      fr: "Tunibois travaille-t-elle avec des Incoterms ?",
      en: "Does Tunibois work with Incoterms?",
      ar: "هل تعمل Tunibois بشروط Incoterms؟",
    },
    a: {
      fr: "Les Incoterms sont confirmés au cas par cas selon destination, transport, responsabilité logistique et accord commercial. Ils doivent être discutés avant validation de la commande.",
      en: "Incoterms are confirmed case by case according to destination, transport, logistics responsibility and commercial agreement. They must be discussed before order validation.",
      ar: "تؤكد شروط Incoterms حسب كل حالة وفق الوجهة والنقل والمسؤولية اللوجستية والاتفاق التجاري، ويجب مناقشتها قبل تأكيد الطلب.",
    },
  },
  {
    q: {
      fr: "Peut-on demander un échantillon avant une commande export ?",
      en: "Can I request a sample before an export order?",
      ar: "هل يمكن طلب عينة قبل طلب التصدير؟",
    },
    a: {
      fr: "Oui, lorsque l'échantillon est pertinent et réalisable. La demande doit préciser le produit, l'essence, les dimensions, l'usage, le pays et l'objectif de validation.",
      en: "Yes, when the sample is relevant and feasible. The request should state product, species, dimensions, use case, country and validation objective.",
      ar: "نعم، عندما تكون العينة مناسبة وقابلة للتنفيذ. يجب أن يحدد الطلب المنتج ونوع الخشب والأبعاد والاستخدام والبلد وهدف التأكيد.",
    },
  },
  {
    q: {
      fr: "Les MOQ et délais sont-ils fixes ?",
      en: "Are MOQ and lead times fixed?",
      ar: "هل الحد الأدنى والآجال ثابتة؟",
    },
    a: {
      fr: "Non. MOQ et délais dépendent du produit, de la matière, de la saison, des dimensions, du niveau de transformation, du conditionnement et du volume demandé.",
      en: "No. MOQ and lead times depend on product, material, season, dimensions, transformation level, packing and requested volume.",
      ar: "لا. يعتمد الحد الأدنى والآجال على المنتج والمادة والموسم والأبعاد ومستوى التحويل والتغليف والكمية المطلوبة.",
    },
  },
] satisfies Array<{ a: LocalizedText; q: LocalizedText }>;

export const exportCta = {
  title: {
    fr: "Préparer une demande export exploitable",
    en: "Prepare a usable export enquiry",
    ar: "تحضير طلب تصدير قابل للدراسة",
  },
  text: {
    fr: "Envoyez le produit, les dimensions, la quantité, le pays de destination et le conditionnement attendu. Tunibois vous répond avec les points à confirmer pour avancer proprement.",
    en: "Send product, dimensions, quantity, destination country and expected packing. Tunibois replies with the points to confirm so the enquiry can move forward clearly.",
    ar: "أرسل المنتج والأبعاد والكمية وبلد الوجهة والتغليف المتوقع. ترد Tunibois بالنقاط المطلوب تأكيدها للتقدم بوضوح.",
  },
  primary: {
    fr: "Envoyer une demande export",
    en: "Send an export enquiry",
    ar: "إرسال طلب تصدير",
  },
  secondary: {
    fr: "Voir les produits",
    en: "View products",
    ar: "عرض المنتجات",
  },
} satisfies {
  primary: LocalizedText;
  secondary: LocalizedText;
  text: LocalizedText;
  title: LocalizedText;
};
