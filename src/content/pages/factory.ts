import type { Locale } from "@/lib/locales";

type LocalizedText = Record<Locale, string>;

export const factoryHero = {
  title: {
    fr: "Notre usine transforme le bois pour des exigences B2B",
    en: "Our factory transforms wood for B2B requirements",
    ar: "مصنعنا يحول الخشب لمتطلبات B2B",
  },
  text: {
    fr: "Tunibois organise la production autour de demandes concrètes : essence, dimensions, usage, tolérances, humidité, conditionnement et destination. L'objectif est de livrer des produits bois exploitables par des industriels, distributeurs et importateurs.",
    en: "Tunibois organizes production around concrete requirements: species, dimensions, use, tolerances, moisture, packing and destination. The objective is to deliver wood products that manufacturers, distributors and importers can use reliably.",
    ar: "تنظم Tunibois الإنتاج حول متطلبات واضحة: نوع الخشب، الأبعاد، الاستخدام، التفاوتات، الرطوبة، التغليف والوجهة. الهدف هو توريد منتجات خشبية قابلة للاستخدام للصناعيين والموزعين والمستوردين.",
  },
  primary: {
    fr: "Présenter un cahier des charges",
    en: "Send a specification",
    ar: "إرسال دفتر شروط",
  },
  secondary: {
    fr: "Voir le process",
    en: "View the process",
    ar: "عرض المسار الصناعي",
  },
} satisfies {
  primary: LocalizedText;
  secondary: LocalizedText;
  text: LocalizedText;
  title: LocalizedText;
};

export const factoryPromise = {
  title: {
    fr: "Ce que l'usine doit garantir à un acheteur industriel",
    en: "What the factory must secure for an industrial buyer",
    ar: "ما يجب أن يضمنه المصنع للمشتري الصناعي",
  },
  text: {
    fr: "Un acheteur B2B ne cherche pas seulement un produit bois. Il cherche une réponse stable : faisabilité, répétabilité, conformité au besoin, emballage adapté et suivi export.",
    en: "A B2B buyer is not only looking for a wood product. They need a stable answer: feasibility, repeatability, fit to specification, suitable packing and export follow-up.",
    ar: "المشتري المهني لا يبحث فقط عن منتج خشبي. بل يحتاج إلى جواب ثابت: جدوى، تكرارية، مطابقة للحاجة، تغليف مناسب ومتابعة تصدير.",
  },
} satisfies {
  text: LocalizedText;
  title: LocalizedText;
};

export const factoryAssurances = [
  {
    title: {
      fr: "Lecture du besoin",
      en: "Requirement review",
      ar: "دراسة الحاجة",
    },
    text: {
      fr: "Analyse du produit, de l'usage, des dimensions, du volume, de la destination et des contraintes de conditionnement.",
      en: "Review of product, use, dimensions, volume, destination and packing constraints.",
      ar: "تحليل المنتج والاستخدام والأبعاد والحجم والوجهة ومتطلبات التغليف.",
    },
  },
  {
    title: {
      fr: "Répétabilité produit",
      en: "Product repeatability",
      ar: "تكرارية المنتج",
    },
    text: {
      fr: "Production pensée pour obtenir des sections, séries, assemblages ou lots cohérents selon le cahier des charges.",
      en: "Production organized to obtain consistent sections, batches, assemblies or lots according to specification.",
      ar: "إنتاج منظم للحصول على مقاطع أو سلاسل أو تجميعات أو دفعات متجانسة حسب دفتر الشروط.",
    },
  },
  {
    title: {
      fr: "Contrôle avant expédition",
      en: "Pre-shipment control",
      ar: "مراقبة قبل الشحن",
    },
    text: {
      fr: "Vérification des points utiles : dimensions, aspect, humidité attendue, quantité, emballage et marquage si nécessaire.",
      en: "Checks on useful points: dimensions, appearance, expected moisture, quantity, packing and marking when required.",
      ar: "التحقق من النقاط المهمة: الأبعاد، المظهر، الرطوبة المتوقعة، الكمية، التغليف والوسم عند الحاجة.",
    },
  },
  {
    title: {
      fr: "Préparation export",
      en: "Export preparation",
      ar: "التحضير للتصدير",
    },
    text: {
      fr: "Conditionnement, documents, coordination logistique et préparation des informations nécessaires au transport.",
      en: "Packing, documents, logistics coordination and preparation of the information required for transport.",
      ar: "التغليف والوثائق والتنسيق اللوجستي وتحضير المعلومات اللازمة للنقل.",
    },
  },
] satisfies Array<{ text: LocalizedText; title: LocalizedText }>;

export const factoryProcessIntro = {
  fr: "Le process Tunibois sert à cadrer une demande, transformer la matière, contrôler le produit et préparer l'expédition. Chaque étape réduit un risque pour l'acheteur : mauvaise essence, dimensions imprécises, humidité inadaptée, emballage insuffisant ou documentation incomplète.",
  en: "The Tunibois process is designed to frame the enquiry, transform the material, control the product and prepare shipment. Each step reduces a buyer risk: wrong species, imprecise dimensions, unsuitable moisture, insufficient packing or incomplete documentation.",
  ar: "يهدف مسار Tunibois إلى تأطير الطلب، تحويل المادة، مراقبة المنتج وتحضير الشحن. كل مرحلة تقلل خطرا على المشتري: نوع خشب غير مناسب، أبعاد غير دقيقة، رطوبة غير ملائمة، تغليف غير كاف أو وثائق ناقصة.",
} satisfies LocalizedText;

export const factoryProcess = [
  {
    title: {
      fr: "Qualification technique",
      en: "Technical qualification",
      ar: "تأهيل تقني",
    },
    text: {
      fr: "Produit, essence, usage, dimensions, quantité, tolérances et destination sont clarifiés avant étude commerciale.",
      en: "Product, species, use, dimensions, quantity, tolerances and destination are clarified before commercial review.",
      ar: "يتم توضيح المنتج ونوع الخشب والاستخدام والأبعاد والكمية والتفاوتات والوجهة قبل الدراسة التجارية.",
    },
  },
  {
    title: {
      fr: "Approvisionnement matière",
      en: "Material sourcing",
      ar: "توفير المادة",
    },
    text: {
      fr: "Sélection de matière selon disponibilité, usage final, stabilité attendue et contraintes de production.",
      en: "Material selection according to availability, final use, expected stability and production constraints.",
      ar: "اختيار المادة حسب التوفر والاستخدام النهائي والثبات المطلوب ومتطلبات الإنتاج.",
    },
  },
  {
    title: {
      fr: "Sciage et préparation",
      en: "Sawing and preparation",
      ar: "النشر والتحضير",
    },
    text: {
      fr: "Mise au format, préparation des sections, tri matière et organisation des lots selon la commande.",
      en: "Sizing, section preparation, material sorting and batch organization according to the order.",
      ar: "تجهيز المقاسات وتحضير المقاطع وفرز المادة وتنظيم الدفعات حسب الطلب.",
    },
  },
  {
    title: {
      fr: "Séchage et stabilité",
      en: "Drying and stability",
      ar: "التجفيف والثبات",
    },
    text: {
      fr: "Maîtrise de l'humidité visée selon le produit, l'usage, la destination et les contraintes de conditionnement.",
      en: "Target moisture management according to product, use, destination and packing constraints.",
      ar: "ضبط الرطوبة المستهدفة حسب المنتج والاستخدام والوجهة ومتطلبات التغليف.",
    },
  },
  {
    title: {
      fr: "Usinage et assemblage",
      en: "Machining and assembly",
      ar: "التشغيل والتجميع",
    },
    text: {
      fr: "Découpe, usinage, collage ou assemblage selon produit : palettes, composants, panneaux, pièces ou formats sur mesure.",
      en: "Cutting, machining, gluing or assembly depending on the product: pallets, components, panels, parts or custom formats.",
      ar: "قص وتشغيل ولصق أو تجميع حسب المنتج: منصات، مكونات، ألواح، قطع أو مقاسات خاصة.",
    },
  },
  {
    title: {
      fr: "Contrôle et conditionnement",
      en: "Control and packing",
      ar: "المراقبة والتغليف",
    },
    text: {
      fr: "Contrôle des lots, préparation du conditionnement, étiquetage ou marquage selon destination et cahier des charges.",
      en: "Batch control, packing preparation, labeling or marking according to destination and specification.",
      ar: "مراقبة الدفعات وتحضير التغليف والوسم حسب الوجهة ودفتر الشروط.",
    },
  },
] satisfies Array<{ text: LocalizedText; title: LocalizedText }>;

export const factoryCapabilitiesIntro = {
  fr: "Les capacités ne sont pas présentées comme une liste de machines, mais comme des réponses aux problèmes d'un importateur ou d'un industriel : obtenir le bon produit, au bon format, avec un niveau de préparation compatible avec son marché.",
  en: "Capabilities are not presented as a list of machines, but as answers to the problems of an importer or manufacturer: obtaining the right product, in the right format, with a preparation level compatible with their market.",
  ar: "لا تعرض القدرات كقائمة آلات، بل كإجابات على مشاكل المستورد أو الصناعي: الحصول على المنتج الصحيح، بالمقاس الصحيح، وبمستوى تحضير مناسب لسوقه.",
} satisfies LocalizedText;

export const factoryCapabilities = [
  {
    id: "sourcing",
    title: {
      fr: "Approvisionnement et tri matière",
      en: "Sourcing and material sorting",
      ar: "التوريد وفرز المادة",
    },
    text: {
      fr: "Choix de l'essence, disponibilité, usage final et cohérence matière avant lancement.",
      en: "Species choice, availability, final use and material consistency before launch.",
      ar: "اختيار نوع الخشب والتوفر والاستخدام النهائي وتجانس المادة قبل الانطلاق.",
    },
  },
  {
    id: "custom",
    title: {
      fr: "Formats et fabrication sur demande",
      en: "Formats and made-to-order production",
      ar: "مقاسات وتصنيع حسب الطلب",
    },
    text: {
      fr: "Dimensions, sections, épaisseurs, assemblages ou conditionnement étudiés selon le besoin client.",
      en: "Dimensions, sections, thicknesses, assemblies or packing reviewed according to customer need.",
      ar: "الأبعاد والمقاطع والسماكات والتجميعات أو التغليف تدرس حسب حاجة العميل.",
    },
  },
  {
    id: "quality",
    title: {
      fr: "Contrôle qualité exploitable",
      en: "Usable quality control",
      ar: "مراقبة جودة قابلة للاستعمال",
    },
    text: {
      fr: "Contrôle orienté usage : aspect, quantité, stabilité, dimensions et conformité au cahier des charges.",
      en: "Use-oriented control: appearance, quantity, stability, dimensions and specification fit.",
      ar: "مراقبة موجهة للاستخدام: المظهر، الكمية، الثبات، الأبعاد ومطابقة دفتر الشروط.",
    },
  },
  {
    id: "packing",
    title: {
      fr: "Conditionnement industriel",
      en: "Industrial packing",
      ar: "تغليف صناعي",
    },
    text: {
      fr: "Empilage, protection, palettisation, marquage et préparation selon transport routier ou maritime.",
      en: "Stacking, protection, palletization, marking and preparation for road or sea transport.",
      ar: "التكديس والحماية والتوضيب على المنصات والوسم والتحضير للنقل البري أو البحري.",
    },
  },
  {
    id: "logistics",
    title: {
      fr: "Préparation logistique",
      en: "Logistics preparation",
      ar: "تحضير لوجستي",
    },
    text: {
      fr: "Coordination des informations nécessaires au chargement, à l'expédition et au suivi commercial.",
      en: "Coordination of the information required for loading, shipment and commercial follow-up.",
      ar: "تنسيق المعلومات اللازمة للتحميل والشحن والمتابعة التجارية.",
    },
  },
  {
    id: "international",
    title: {
      fr: "Dialogue export",
      en: "Export dialogue",
      ar: "تواصل التصدير",
    },
    text: {
      fr: "Échanges avec importateurs, distributeurs et industriels pour cadrer documents, incoterms et contraintes pays.",
      en: "Dialogue with importers, distributors and manufacturers to frame documents, incoterms and country constraints.",
      ar: "تواصل مع المستوردين والموزعين والصناعيين لتأطير الوثائق والإنكوترمز ومتطلبات البلد.",
    },
  },
] satisfies Array<{ id: "sourcing" | "custom" | "quality" | "packing" | "logistics" | "international"; text: LocalizedText; title: LocalizedText }>;

export const factoryProductFit = {
  title: {
    fr: "Une base industrielle au service de plusieurs familles produits",
    en: "An industrial base serving several product families",
    ar: "قاعدة صناعية لخدمة عدة عائلات منتجات",
  },
  text: {
    fr: "La valeur de l'usine est sa capacité à étudier différents formats bois pour des clients professionnels : emballage, composants, panneaux, eco wood products, bois énergie ou éléments sur mesure.",
    en: "The factory value lies in its ability to review different wood formats for professional customers: packing, components, panels, eco wood products, wood energy or custom elements.",
    ar: "تكمن قيمة المصنع في قدرته على دراسة صيغ خشبية مختلفة للعملاء المهنيين: التغليف، المكونات، الألواح، المنتجات الخشبية البيئية، طاقة الخشب أو العناصر الخاصة.",
  },
} satisfies {
  text: LocalizedText;
  title: LocalizedText;
};

export const factoryProductFamilies = [
  {
    image: "woodenPallets",
    title: {
      fr: "Palettes et emballages",
      en: "Pallets and packing",
      ar: "المنصات والتغليف",
    },
    text: {
      fr: "Formats export, palettes industrielles, caisses et solutions adaptées aux contraintes de manutention.",
      en: "Export formats, industrial pallets, crates and solutions adapted to handling constraints.",
      ar: "صيغ تصدير ومنصات صناعية وصناديق وحلول مناسبة لمتطلبات المناولة.",
    },
  },
  {
    image: "woodBoards",
    title: {
      fr: "Composants et panneaux",
      en: "Components and panels",
      ar: "المكونات والألواح",
    },
    text: {
      fr: "Sections, pièces, panneaux, plans de travail ou composants à étudier selon dimensions et usage.",
      en: "Sections, parts, panels, worktops or components reviewed according to dimensions and use.",
      ar: "مقاطع وقطع وألواح وأسطح عمل أو مكونات تدرس حسب الأبعاد والاستخدام.",
    },
  },
  {
    image: "stirrers",
    title: {
      fr: "Eco wood products",
      en: "Eco wood products",
      ar: "منتجات خشبية بيئية",
    },
    text: {
      fr: "Petits produits répétables pour distribution, CHR, marques privées et circuits professionnels.",
      en: "Repeatable small products for distribution, hospitality, private labels and professional channels.",
      ar: "منتجات صغيرة قابلة للتكرار للتوزيع وقطاع الضيافة والعلامات الخاصة والقنوات المهنية.",
    },
  },
] satisfies Array<{ image: string; text: LocalizedText; title: LocalizedText }>;

export const factoryQualityExport = {
  title: {
    fr: "Contrôle, documentation et préparation export",
    en: "Control, documentation and export preparation",
    ar: "المراقبة والوثائق والتحضير للتصدير",
  },
  text: {
    fr: "Tunibois doit donner à l'acheteur les éléments nécessaires pour acheter, réceptionner et revendre ou intégrer le produit : informations produit, conditionnement, documents et suivi commercial.",
    en: "Tunibois must give the buyer what they need to purchase, receive and resell or integrate the product: product information, packing, documents and commercial follow-up.",
    ar: "يجب أن توفر Tunibois للمشتري ما يحتاجه للشراء والاستلام وإعادة البيع أو الإدماج: معلومات المنتج والتغليف والوثائق والمتابعة التجارية.",
  },
} satisfies {
  text: LocalizedText;
  title: LocalizedText;
};

export const factoryQualityPoints = [
  { fr: "Dimensions, sections, épaisseurs et tolérances attendues", en: "Expected dimensions, sections, thicknesses and tolerances", ar: "الأبعاد والمقاطع والسماكات والتفاوتات المتوقعة" },
  { fr: "Humidité cible selon produit, marché et conditionnement", en: "Target moisture according to product, market and packing", ar: "الرطوبة المستهدفة حسب المنتج والسوق والتغليف" },
  { fr: "Contrôle visuel, quantité, empilage et état avant départ", en: "Visual control, quantity, stacking and condition before dispatch", ar: "المراقبة البصرية والكمية والتكديس والحالة قبل المغادرة" },
  { fr: "Informations utiles pour documents export et réception client", en: "Useful information for export documents and customer reception", ar: "معلومات مفيدة لوثائق التصدير واستلام العميل" },
] satisfies LocalizedText[];
