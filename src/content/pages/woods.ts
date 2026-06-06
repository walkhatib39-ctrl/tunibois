import type { Locale } from "@/lib/locales";

type LocalizedText = Record<Locale, string>;

export const woodsHero = {
  title: {
    fr: "Essences de bois pour production industrielle et export",
    en: "Wood species for industrial production and export",
    ar: "أنواع خشب للإنتاج الصناعي والتصدير",
  },
  text: {
    fr: "Le choix matière est cadré dès l'amont: produit final, dimensions, humidité, finition, conditionnement et destination export. Tunibois oriente chaque essence vers l'usage industriel le plus pertinent afin de préparer un devis clair et une production maîtrisée.",
    en: "Material selection is defined from the first exchange: final product, dimensions, moisture, finish, packing and export destination. Tunibois directs each species toward the most relevant industrial use so the quotation is clear and production is controlled.",
    ar: "يحدد اختيار المادة منذ أول تبادل: المنتج النهائي والأبعاد والرطوبة والتشطيب والتغليف ووجهة التصدير. توجه Tunibois كل نوع خشب نحو الاستخدام الصناعي الأنسب لإعداد عرض سعر واضح وإنتاج مضبوط.",
  },
  primary: {
    fr: "Qualifier une essence",
    en: "Qualify a species",
    ar: "تأهيل نوع الخشب",
  },
  secondary: {
    fr: "Comparer les essences",
    en: "Compare species",
    ar: "مقارنة الأنواع",
  },
  imageCaption: {
    fr: "Matière, dimensions et usage sont validés avant engagement industriel.",
    en: "Material, dimensions and use are validated before industrial commitment.",
    ar: "تؤكد المادة والأبعاد والاستخدام قبل الالتزام الصناعي.",
  },
} satisfies {
  imageCaption: LocalizedText;
  primary: LocalizedText;
  secondary: LocalizedText;
  text: LocalizedText;
  title: LocalizedText;
};

export const woodsHeroHighlights = [
  {
    title: {
      fr: "Essence adaptée",
      en: "Suitable species",
      ar: "نوع مناسب",
    },
    text: {
      fr: "Choix matière selon produit, usage et disponibilité.",
      en: "Material choice by product, use and availability.",
      ar: "اختيار المادة حسب المنتج والاستخدام والتوفر.",
    },
  },
  {
    title: {
      fr: "Séchage à cadrer",
      en: "Drying to define",
      ar: "تجفيف يجب تحديده",
    },
    text: {
      fr: "Humidité et stabilité à confirmer selon destination.",
      en: "Moisture and stability to confirm by destination.",
      ar: "الرطوبة والثبات تؤكد حسب الوجهة.",
    },
  },
  {
    title: {
      fr: "Usage B2B",
      en: "B2B use",
      ar: "استخدام B2B",
    },
    text: {
      fr: "Applications produits, volumes et conditionnement étudiés.",
      en: "Product applications, volumes and packing reviewed.",
      ar: "تدرس التطبيقات والكميات والتغليف.",
    },
  },
] satisfies Array<{ text: LocalizedText; title: LocalizedText }>;

export type WoodId = "olive" | "beech" | "eucalyptus" | "aleppo-pine";

export type WoodSpeciesDetail = {
  id: WoodId;
  imageKey: string;
  imageAlt: LocalizedText;
  title: LocalizedText;
  scientificName: string;
  shortPosition: LocalizedText;
  summary: LocalizedText;
  buyerFit: LocalizedText;
  technicalProfile: Record<Locale, Array<{ label: string; value: string }>>;
  applications: Record<Locale, string[]>;
  qualification: Record<Locale, string[]>;
};

export const woodSpeciesDetails: WoodSpeciesDetail[] = [
  {
    id: "olive",
    imageKey: "woodBoards",
    imageAlt: {
      fr: "Bois à fort veinage pour produits premium",
      en: "Strong-grain wood for premium products",
      ar: "خشب بعروق قوية للمنتجات الفاخرة",
    },
    title: {
      fr: "Bois d'olivier",
      en: "Olive wood",
      ar: "خشب الزيتون",
    },
    scientificName: "Olea europaea",
    shortPosition: {
      fr: "Essence premium pour objets à forte valeur perçue.",
      en: "Premium species for high perceived value products.",
      ar: "خشب فاخر لمنتجات ذات قيمة عالية.",
    },
    summary: {
      fr: "Le bois d'olivier se distingue par son veinage contrasté, sa densité et son rendu visuel. Il convient surtout aux produits premium, aux articles de présentation, à la décoration et aux séries où l'aspect naturel fait partie de la valeur commerciale.",
      en: "Olive wood is known for its contrasting grain, density and visual character. It is mainly suited to premium products, presentation items, decoration and ranges where natural appearance is part of the commercial value.",
      ar: "يتميز خشب الزيتون بعروقه المتباينة وكثافته وقيمته البصرية. يناسب خصوصا المنتجات الفاخرة ومواد التقديم والديكور والسلاسل التي يكون فيها المظهر الطبيعي جزءا من القيمة التجارية.",
    },
    buyerFit: {
      fr: "À privilégier quand l'acheteur cherche une matière distinctive pour boutique, cadeau d'affaires, arts de table ou collection premium.",
      en: "Best when the buyer needs a distinctive material for retail, corporate gifts, tableware or premium collections.",
      ar: "يفضل عندما يبحث المشتري عن مادة مميزة للمتاجر والهدايا المهنية وأدوات التقديم والمجموعات الفاخرة.",
    },
    technicalProfile: {
      fr: [
        { label: "Positionnement", value: "Premium, visuel, décoratif" },
        { label: "Atouts", value: "Veinage marqué, forte densité, excellent rendu poli" },
        { label: "Points à cadrer", value: "Séchage, stabilité, dimensions disponibles, tri visuel" },
      ],
      en: [
        { label: "Positioning", value: "Premium, visual, decorative" },
        { label: "Strengths", value: "Distinctive grain, high density, polished appearance" },
        { label: "Points to define", value: "Drying, stability, available dimensions, visual sorting" },
      ],
      ar: [
        { label: "التموقع", value: "فاخر، بصري، زخرفي" },
        { label: "نقاط القوة", value: "عروق مميزة، كثافة عالية، مظهر مصقول" },
        { label: "نقاط يجب ضبطها", value: "التجفيف، الثبات، الأبعاد المتاحة، الفرز البصري" },
      ],
    },
    applications: {
      fr: ["Planches à découper", "Plateaux de présentation", "Articles premium", "Décoration", "Petites séries à valeur ajoutée"],
      en: ["Cutting boards", "Presentation trays", "Premium items", "Decoration", "Small value-added series"],
      ar: ["ألواح تقطيع", "صحون تقديم", "منتجات فاخرة", "ديكور", "سلاسل صغيرة ذات قيمة مضافة"],
    },
    qualification: {
      fr: ["Dimensions attendues", "Niveau de tri visuel", "Usage alimentaire ou décoratif", "Finition souhaitée", "Volume par série"],
      en: ["Expected dimensions", "Visual sorting level", "Food or decorative use", "Required finish", "Volume per series"],
      ar: ["الأبعاد المطلوبة", "مستوى الفرز البصري", "استخدام غذائي أو زخرفي", "التشطيب المطلوب", "الكمية لكل سلسلة"],
    },
  },
  {
    id: "beech",
    imageKey: "factoryTechnology",
    imageAlt: {
      fr: "Usinage de composants bois réguliers",
      en: "Machining consistent wood components",
      ar: "تشغيل مكونات خشبية منتظمة",
    },
    title: {
      fr: "Bois de hêtre",
      en: "Beech wood",
      ar: "خشب الزان",
    },
    scientificName: "Fagus sylvatica",
    shortPosition: {
      fr: "Essence régulière pour composants, usinage et produits techniques.",
      en: "Consistent species for components, machining and technical products.",
      ar: "خشب منتظم للمكونات والتشغيل والمنتجات التقنية.",
    },
    summary: {
      fr: "Le hêtre est apprécié pour sa texture fine, sa régularité et sa capacité à recevoir un usinage précis. Il est pertinent pour les composants mobilier, pièces tournées, ustensiles, éléments répétitifs et produits bois nécessitant une matière homogène.",
      en: "Beech is valued for its fine texture, consistency and ability to take precise machining. It is relevant for furniture components, turned parts, utensils, repeatable elements and wood products requiring homogeneous material.",
      ar: "يقدر خشب الزان لقوامه الناعم وانتظامه وقابليته للتشغيل الدقيق. يناسب مكونات الأثاث والقطع المخروطة والأدوات والعناصر المتكررة والمنتجات التي تحتاج مادة متجانسة.",
    },
    buyerFit: {
      fr: "À privilégier pour des pièces répétables, des composants usinés et des produits où la régularité prime sur le veinage décoratif.",
      en: "Best for repeatable parts, machined components and products where consistency matters more than decorative grain.",
      ar: "يفضل للقطع المتكررة والمكونات المشغلة والمنتجات التي تكون فيها المنتظمة أهم من العروق الزخرفية.",
    },
    technicalProfile: {
      fr: [
        { label: "Positionnement", value: "Composants, mobilier, pièces techniques" },
        { label: "Atouts", value: "Texture fine, usinage, tournage, collage" },
        { label: "Points à cadrer", value: "Humidité, stabilité dimensionnelle, usage intérieur" },
      ],
      en: [
        { label: "Positioning", value: "Components, furniture, technical parts" },
        { label: "Strengths", value: "Fine texture, machining, turning, gluing" },
        { label: "Points to define", value: "Moisture, dimensional stability, interior use" },
      ],
      ar: [
        { label: "التموقع", value: "مكونات، أثاث، قطع تقنية" },
        { label: "نقاط القوة", value: "قوام ناعم، تشغيل، خراطة، لصق" },
        { label: "نقاط يجب ضبطها", value: "الرطوبة، الثبات البعدي، الاستخدام الداخلي" },
      ],
    },
    applications: {
      fr: ["Pieds de table", "Traverses", "Montants", "Couverts bois", "Bâtonnets", "Pièces tournées"],
      en: ["Table legs", "Rails", "Uprights", "Wooden cutlery", "Sticks", "Turned parts"],
      ar: ["أرجل طاولات", "عوارض", "قوائم", "أدوات مائدة خشبية", "عيدان", "قطع مخروطة"],
    },
    qualification: {
      fr: ["Tolérances", "Humidité cible", "Série et répétabilité", "Usinage ou tournage", "Contact alimentaire éventuel"],
      en: ["Tolerances", "Target moisture", "Series and repeatability", "Machining or turning", "Possible food contact"],
      ar: ["التفاوتات", "الرطوبة المستهدفة", "السلسلة والتكرارية", "تشغيل أو خراطة", "إمكانية ملامسة الغذاء"],
    },
  },
  {
    id: "eucalyptus",
    imageKey: "woodenPallets",
    imageAlt: {
      fr: "Palettes et solutions bois industrielles",
      en: "Pallets and industrial wood solutions",
      ar: "منصات وحلول خشبية صناعية",
    },
    title: {
      fr: "Eucalyptus blanc",
      en: "White eucalyptus",
      ar: "الأوكالبتوس الأبيض",
    },
    scientificName: "Eucalyptus spp.",
    shortPosition: {
      fr: "Ressource industrielle à qualifier selon lot, séchage et destination.",
      en: "Industrial resource to qualify by batch, drying and destination.",
      ar: "مورد صناعي يؤهل حسب الدفعة والتجفيف والوجهة.",
    },
    summary: {
      fr: "L'eucalyptus peut répondre à des usages industriels lorsque la matière est bien qualifiée. Il est pertinent pour palettes, emballages, éléments de structure secondaire, panneaux ou pièces à optimiser selon cahier des charges, avec une attention particulière au séchage et à la stabilité.",
      en: "Eucalyptus can meet industrial uses when the material is properly qualified. It is relevant for pallets, packaging, secondary structural elements, panels or parts optimized to specification, with particular attention to drying and stability.",
      ar: "يمكن للأوكالبتوس أن يخدم الاستخدامات الصناعية عندما يتم تأهيل المادة جيدا. يناسب المنصات والتغليف والعناصر الثانوية والألواح أو القطع المحسنة حسب دفتر الشروط، مع اهتمام خاص بالتجفيف والثبات.",
    },
    buyerFit: {
      fr: "À étudier pour des flux industriels où le coût, la disponibilité, la robustesse du conditionnement et la destination sont déterminants.",
      en: "To review for industrial flows where cost, availability, packing robustness and destination are decisive.",
      ar: "يدرس للتدفقات الصناعية حيث تكون الكلفة والتوفر ومتانة التغليف والوجهة عوامل حاسمة.",
    },
    technicalProfile: {
      fr: [
        { label: "Positionnement", value: "Palettes, emballage, solutions industrielles" },
        { label: "Atouts", value: "Ressource utile pour volumes et usages techniques" },
        { label: "Points à cadrer", value: "Séchage, déformation, fentes, tri matière" },
      ],
      en: [
        { label: "Positioning", value: "Pallets, packaging, industrial solutions" },
        { label: "Strengths", value: "Useful resource for volumes and technical uses" },
        { label: "Points to define", value: "Drying, distortion, checking, material sorting" },
      ],
      ar: [
        { label: "التموقع", value: "منصات، تغليف، حلول صناعية" },
        { label: "نقاط القوة", value: "مورد مفيد للكميات والاستخدامات التقنية" },
        { label: "نقاط يجب ضبطها", value: "التجفيف، التشوه، التشقق، فرز المادة" },
      ],
    },
    applications: {
      fr: ["Palettes industrielles", "Caisses", "Emballages", "Panneaux", "Pièces selon plan"],
      en: ["Industrial pallets", "Crates", "Packaging", "Panels", "Made-to-drawing parts"],
      ar: ["منصات صناعية", "صناديق", "تغليف", "ألواح", "قطع حسب الرسم"],
    },
    qualification: {
      fr: ["Destination", "Mode de transport", "Séchage attendu", "Charge et usage", "Tolérances acceptables"],
      en: ["Destination", "Transport mode", "Expected drying", "Load and use", "Acceptable tolerances"],
      ar: ["الوجهة", "طريقة النقل", "التجفيف المطلوب", "الحمولة والاستخدام", "التفاوتات المقبولة"],
    },
  },
  {
    id: "aleppo-pine",
    imageKey: "industrialCrates",
    imageAlt: {
      fr: "Caisses et emballages bois pour usages industriels",
      en: "Wooden crates and packaging for industrial uses",
      ar: "صناديق وتغليف خشبي للاستخدام الصناعي",
    },
    title: {
      fr: "Pin d'Alep",
      en: "Aleppo pine",
      ar: "صنوبر حلبي",
    },
    scientificName: "Pinus halepensis",
    shortPosition: {
      fr: "Essence méditerranéenne pour emballage, palettes et valorisation matière.",
      en: "Mediterranean species for packaging, pallets and material recovery.",
      ar: "خشب متوسطي للتغليف والمنصات وتثمين المادة.",
    },
    summary: {
      fr: "Le pin d'Alep est une essence méditerranéenne à étudier pour emballages, palettes, caisses, éléments industriels et valorisation bois énergie. La qualification dépend du lot, de la section, de l'humidité, des noeuds, de l'usage et du niveau de finition attendu.",
      en: "Aleppo pine is a Mediterranean species to review for packaging, pallets, crates, industrial elements and wood energy recovery. Qualification depends on batch, section, moisture, knots, use case and expected finish level.",
      ar: "الصنوبر الحلبي خشب متوسطي يدرس للتغليف والمنصات والصناديق والعناصر الصناعية وتثمين الطاقة الخشبية. يعتمد التأهيل على الدفعة والمقطع والرطوبة والعقد والاستخدام ومستوى التشطيب.",
    },
    buyerFit: {
      fr: "À privilégier pour des besoins industriels où la disponibilité, le coût maîtrisé et le conditionnement priment sur l'aspect premium.",
      en: "Best for industrial needs where availability, cost control and packing matter more than premium appearance.",
      ar: "يفضل للاحتياجات الصناعية حيث يكون التوفر والتحكم في الكلفة والتغليف أهم من المظهر الفاخر.",
    },
    technicalProfile: {
      fr: [
        { label: "Positionnement", value: "Emballage, palettes, caisses, bois énergie" },
        { label: "Atouts", value: "Ressource locale, usages industriels, optimisation coût" },
        { label: "Points à cadrer", value: "Noeuds, sections, séchage, contraintes de charge" },
      ],
      en: [
        { label: "Positioning", value: "Packaging, pallets, crates, wood energy" },
        { label: "Strengths", value: "Local resource, industrial uses, cost optimization" },
        { label: "Points to define", value: "Knots, sections, drying, load constraints" },
      ],
      ar: [
        { label: "التموقع", value: "تغليف، منصات، صناديق، طاقة خشبية" },
        { label: "نقاط القوة", value: "مورد محلي، استخدامات صناعية، تحسين الكلفة" },
        { label: "نقاط يجب ضبطها", value: "العقد، المقاطع، التجفيف، متطلبات الحمولة" },
      ],
    },
    applications: {
      fr: ["Palettes", "Caisses industrielles", "Emballages", "Éléments de calage", "Pellets et briquettes"],
      en: ["Pallets", "Industrial crates", "Packaging", "Dunnage elements", "Pellets and briquettes"],
      ar: ["منصات", "صناديق صناعية", "تغليف", "عناصر تثبيت", "حبيبات وقوالب خشبية"],
    },
    qualification: {
      fr: ["Charge attendue", "Section et longueur", "Noeuds admissibles", "Humidité", "Usage emballage ou énergie"],
      en: ["Expected load", "Section and length", "Accepted knots", "Moisture", "Packaging or energy use"],
      ar: ["الحمولة المتوقعة", "المقطع والطول", "العقد المقبولة", "الرطوبة", "استخدام تغليف أو طاقة"],
    },
  },
] satisfies WoodSpeciesDetail[];

export const woodsComparison = {
  title: {
    fr: "Comparer les essences avant de figer le cahier des charges",
    en: "Compare species before freezing the specification",
    ar: "مقارنة الأنواع قبل تثبيت دفتر الشروط",
  },
  text: {
    fr: "La meilleure essence dépend rarement d'un seul critère. Tunibois croise l'usage, le niveau de transformation, la stabilité attendue, le budget, le conditionnement et la destination.",
    en: "The best species rarely depends on one criterion. Tunibois cross-checks use, transformation level, expected stability, budget, packing and destination.",
    ar: "نادرا ما يعتمد اختيار أفضل نوع على معيار واحد. تقارن Tunibois الاستخدام ومستوى التحويل والثبات المتوقع والميزانية والتغليف والوجهة.",
  },
  columns: {
    species: { fr: "Essence", en: "Species", ar: "نوع الخشب" },
    bestFor: { fr: "À privilégier pour", en: "Best for", ar: "يفضل لـ" },
    attention: { fr: "Point de vigilance", en: "Watch point", ar: "نقطة انتباه" },
    industrialUse: { fr: "Usage industriel", en: "Industrial use", ar: "استخدام صناعي" },
  },
} satisfies {
  columns: Record<string, LocalizedText>;
  text: LocalizedText;
  title: LocalizedText;
};

export const woodsComparisonRows = [
  {
    speciesId: "olive",
    bestFor: {
      fr: "Produits premium, décoration, arts de table",
      en: "Premium products, decoration, tableware",
      ar: "منتجات فاخرة، ديكور، أدوات تقديم",
    },
    attention: {
      fr: "Disponibilité, tri visuel, stabilité après séchage",
      en: "Availability, visual sorting, stability after drying",
      ar: "التوفر، الفرز البصري، الثبات بعد التجفيف",
    },
    industrialUse: {
      fr: "Petites et moyennes séries à valeur ajoutée",
      en: "Small and medium value-added series",
      ar: "سلاسل صغيرة ومتوسطة ذات قيمة مضافة",
    },
  },
  {
    speciesId: "beech",
    bestFor: {
      fr: "Composants réguliers, usinage, tournage",
      en: "Consistent components, machining, turning",
      ar: "مكونات منتظمة، تشغيل، خراطة",
    },
    attention: {
      fr: "Humidité, stabilité, usage plutôt intérieur",
      en: "Moisture, stability, mostly interior use",
      ar: "الرطوبة، الثبات، استخدام داخلي غالبا",
    },
    industrialUse: {
      fr: "Mobilier, pièces techniques, ustensiles",
      en: "Furniture, technical parts, utensils",
      ar: "أثاث، قطع تقنية، أدوات",
    },
  },
  {
    speciesId: "eucalyptus",
    bestFor: {
      fr: "Palettes, emballages, solutions industrielles",
      en: "Pallets, packaging, industrial solutions",
      ar: "منصات، تغليف، حلول صناعية",
    },
    attention: {
      fr: "Séchage, déformations, fentes et tri matière",
      en: "Drying, distortion, checking and material sorting",
      ar: "التجفيف، التشوه، التشقق وفرز المادة",
    },
    industrialUse: {
      fr: "Flux B2B avec cahier des charges technique",
      en: "B2B flows with technical specification",
      ar: "تدفقات B2B بدفتر شروط تقني",
    },
  },
  {
    speciesId: "aleppo-pine",
    bestFor: {
      fr: "Emballage, calage, palettes, énergie",
      en: "Packaging, dunnage, pallets, energy",
      ar: "تغليف، تثبيت، منصات، طاقة",
    },
    attention: {
      fr: "Noeuds, charges, sections et niveau de finition",
      en: "Knots, loads, sections and finish level",
      ar: "العقد، الأحمال، المقاطع ومستوى التشطيب",
    },
    industrialUse: {
      fr: "Produits à coût maîtrisé et valorisation matière",
      en: "Cost-controlled products and material recovery",
      ar: "منتجات بتكلفة مضبوطة وتثمين المادة",
    },
  },
] satisfies Array<{
  attention: LocalizedText;
  bestFor: LocalizedText;
  industrialUse: LocalizedText;
  speciesId: WoodId;
}>;

export const woodsApplications = {
  title: {
    fr: "Relier chaque essence à une application B2B réelle",
    en: "Connect each species to a real B2B application",
    ar: "ربط كل نوع خشب بتطبيق B2B حقيقي",
  },
  text: {
    fr: "Le choix de la matière part du produit final. Un importateur ne demande pas seulement du bois: il demande une planche, une palette, un composant, un emballage ou un produit fini qui doit fonctionner dans son marché.",
    en: "Material choice starts from the final product. An importer is not only asking for wood: they need a board, pallet, component, packaging or finished item that works in their market.",
    ar: "يبدأ اختيار المادة من المنتج النهائي. المستورد لا يطلب خشبا فقط، بل لوحا أو منصة أو مكونا أو تغليفا أو منتجا نهائيا يعمل في سوقه.",
  },
} satisfies {
  text: LocalizedText;
  title: LocalizedText;
};

export const woodsApplicationGroups = [
  {
    title: {
      fr: "Produits premium et collection olivier",
      en: "Premium products and olive collection",
      ar: "منتجات فاخرة ومجموعة الزيتون",
    },
    text: {
      fr: "Bois d'olivier pour articles visibles, cadeaux, plateaux, planches et décoration.",
      en: "Olive wood for visible items, gifts, trays, boards and decoration.",
      ar: "خشب الزيتون للمنتجات المرئية والهدايا والصحون والألواح والديكور.",
    },
    species: ["olive"],
  },
  {
    title: {
      fr: "Composants et pièces répétables",
      en: "Components and repeatable parts",
      ar: "مكونات وقطع متكررة",
    },
    text: {
      fr: "Hêtre pour composants mobilier, pièces tournées, ustensiles et éléments usinés.",
      en: "Beech for furniture components, turned parts, utensils and machined elements.",
      ar: "الزان لمكونات الأثاث والقطع المخروطة والأدوات والعناصر المشغلة.",
    },
    species: ["beech"],
  },
  {
    title: {
      fr: "Palettes, emballages et flux industriels",
      en: "Pallets, packaging and industrial flows",
      ar: "منصات وتغليف وتدفقات صناعية",
    },
    text: {
      fr: "Eucalyptus blanc et pin d'Alep à qualifier selon charge, section, transport et destination.",
      en: "White eucalyptus and Aleppo pine to qualify by load, section, transport and destination.",
      ar: "الأوكالبتوس الأبيض والصنوبر الحلبي يؤهلان حسب الحمولة والمقطع والنقل والوجهة.",
    },
    species: ["eucalyptus", "aleppo-pine"],
  },
  {
    title: {
      fr: "Bois énergie et valorisation des chutes",
      en: "Wood energy and material recovery",
      ar: "طاقة خشبية وتثمين المخلفات",
    },
    text: {
      fr: "Matière disponible, chutes et formats adaptés aux pellets ou briquettes selon volumes.",
      en: "Available material, offcuts and formats adapted to pellets or briquettes by volume.",
      ar: "مادة متاحة ومخلفات وصيغ مناسبة للحبيبات أو القوالب حسب الكميات.",
    },
    species: ["aleppo-pine", "eucalyptus"],
  },
] satisfies Array<{ species: WoodId[]; text: LocalizedText; title: LocalizedText }>;

export const woodsQualification = {
  title: {
    fr: "Les informations nécessaires pour choisir la bonne essence",
    en: "Information needed to choose the right species",
    ar: "المعلومات اللازمة لاختيار نوع الخشب المناسب",
  },
  text: {
    fr: "Tunibois peut orienter le choix matière si la demande contient les points qui influencent réellement la production, le prix, le délai, la stabilité et l'export.",
    en: "Tunibois can guide material choice when the enquiry includes the points that truly affect production, price, lead time, stability and export.",
    ar: "يمكن لـ Tunibois توجيه اختيار المادة عندما يتضمن الطلب النقاط التي تؤثر فعليا على الإنتاج والسعر والآجال والثبات والتصدير.",
  },
  note: {
    fr: "Les caractéristiques affichées servent de repères pour préparer l'échange technique. La validation se fait toujours selon lot, dimensions, séchage, volume et usage final.",
    en: "The displayed characteristics serve as reference points for preparing the technical exchange. Validation is always done by batch, dimensions, drying, volume and final use.",
    ar: "تستخدم الخصائص المعروضة كمرجع لتحضير النقاش التقني. يتم التأكيد دائما حسب الدفعة والأبعاد والتجفيف والكمية والاستخدام النهائي.",
  },
} satisfies {
  note: LocalizedText;
  text: LocalizedText;
  title: LocalizedText;
};

export const woodsQualificationItems = [
  { fr: "Produit recherché et usage final", en: "Requested product and final use", ar: "المنتج المطلوب والاستخدام النهائي" },
  { fr: "Essence souhaitée ou alternative acceptable", en: "Preferred species or acceptable alternative", ar: "نوع الخشب المطلوب أو بديل مقبول" },
  { fr: "Dimensions, épaisseurs, sections et tolérances", en: "Dimensions, thicknesses, sections and tolerances", ar: "الأبعاد والسماكات والمقاطع والتفاوتات" },
  { fr: "Humidité cible, environnement et destination", en: "Target moisture, environment and destination", ar: "الرطوبة المستهدفة والبيئة والوجهة" },
  { fr: "Volume, MOQ, fréquence et délai attendu", en: "Volume, MOQ, frequency and expected lead time", ar: "الكمية والحد الأدنى والتكرار والآجال المطلوبة" },
  { fr: "Conditionnement, marquage et documents export", en: "Packing, marking and export documents", ar: "التغليف والوسم ووثائق التصدير" },
] satisfies Array<LocalizedText>;

export const woodsFaqIntro = {
  fr: "Ces questions aident l'acheteur à transformer une demande matière vague en demande industrielle exploitable.",
  en: "These questions help the buyer turn a vague material enquiry into a usable industrial request.",
  ar: "تساعد هذه الأسئلة المشتري على تحويل طلب مادة عام إلى طلب صناعي قابل للدراسة.",
} satisfies LocalizedText;

export const woodsFaq = [
  {
    q: {
      fr: "Quelle essence choisir pour une demande export ?",
      en: "Which species should I choose for an export enquiry?",
      ar: "أي نوع خشب أختار لطلب تصدير؟",
    },
    a: {
      fr: "Le choix dépend du produit, du volume, du pays de destination, de l'humidité attendue, du conditionnement et du niveau de finition. Tunibois peut proposer une essence ou une alternative après lecture du besoin.",
      en: "The choice depends on product, volume, destination country, expected moisture, packing and finish level. Tunibois can propose a species or alternative after reviewing the need.",
      ar: "يعتمد الاختيار على المنتج والكمية وبلد الوجهة والرطوبة المطلوبة والتغليف ومستوى التشطيب. يمكن لـ Tunibois اقتراح نوع أو بديل بعد دراسة الحاجة.",
    },
  },
  {
    q: {
      fr: "Le bois d'olivier est-il adapté aux grandes séries industrielles ?",
      en: "Is olive wood suitable for large industrial series?",
      ar: "هل خشب الزيتون مناسب للسلاسل الصناعية الكبيرة؟",
    },
    a: {
      fr: "Le bois d'olivier est surtout pertinent pour des produits premium et des séries où l'aspect visuel justifie une sélection matière plus exigeante. Les volumes doivent être confirmés selon disponibilité.",
      en: "Olive wood is mainly relevant for premium products and ranges where visual appearance justifies stricter material selection. Volumes must be confirmed according to availability.",
      ar: "يناسب خشب الزيتون خصوصا المنتجات الفاخرة والسلاسل التي يبرر فيها المظهر البصري اختيارا أدق للمادة. يجب تأكيد الكميات حسب التوفر.",
    },
  },
  {
    q: {
      fr: "Le hêtre convient-il aux composants mobilier ?",
      en: "Is beech suitable for furniture components?",
      ar: "هل الزان مناسب لمكونات الأثاث؟",
    },
    a: {
      fr: "Oui, le hêtre est une base sérieuse pour des composants réguliers, pièces tournées, traverses, montants et éléments usinés, sous réserve de bien cadrer humidité, tolérances et usage final.",
      en: "Yes, beech is a serious basis for consistent components, turned parts, rails, uprights and machined elements, provided moisture, tolerances and final use are clearly defined.",
      ar: "نعم، الزان أساس جيد للمكونات المنتظمة والقطع المخروطة والعوارض والقوائم والعناصر المشغلة، بشرط ضبط الرطوبة والتفاوتات والاستخدام النهائي.",
    },
  },
  {
    q: {
      fr: "Pourquoi l'eucalyptus doit-il être qualifié avant production ?",
      en: "Why must eucalyptus be qualified before production?",
      ar: "لماذا يجب تأهيل الأوكالبتوس قبل الإنتاج؟",
    },
    a: {
      fr: "Parce que ses propriétés peuvent varier selon l'espèce, le lot, le séchage et les contraintes de transformation. La validation porte sur stabilité, fentes, sections, usage et destination.",
      en: "Because its properties can vary by species, batch, drying and transformation constraints. Validation covers stability, checking, sections, use and destination.",
      ar: "لأن خصائصه قد تختلف حسب النوع والدفعة والتجفيف ومتطلبات التحويل. يشمل التأكيد الثبات والتشقق والمقاطع والاستخدام والوجهة.",
    },
  },
  {
    q: {
      fr: "Le pin d'Alep est-il plutôt destiné aux produits premium ou industriels ?",
      en: "Is Aleppo pine more suited to premium or industrial products?",
      ar: "هل الصنوبر الحلبي أنسب للمنتجات الفاخرة أم الصناعية؟",
    },
    a: {
      fr: "Il est surtout pertinent pour des usages industriels, emballages, palettes, caisses, calage et valorisation bois énergie, lorsque le cahier des charges accepte ses caractéristiques naturelles.",
      en: "It is mainly relevant for industrial uses, packaging, pallets, crates, dunnage and wood energy recovery when the specification accepts its natural characteristics.",
      ar: "يناسب خصوصا الاستخدامات الصناعية والتغليف والمنصات والصناديق والتثبيت وتثمين الطاقة الخشبية عندما يقبل دفتر الشروط خصائصه الطبيعية.",
    },
  },
  {
    q: {
      fr: "Peut-on demander une fiche technique par essence ?",
      en: "Can I request a technical sheet by species?",
      ar: "هل يمكن طلب بطاقة تقنية لكل نوع؟",
    },
    a: {
      fr: "Oui. La fiche utile dépendra du produit demandé: dimensions, humidité cible, tolérances, conditionnement, application, destination et documents attendus.",
      en: "Yes. The useful sheet depends on the requested product: dimensions, target moisture, tolerances, packing, application, destination and expected documents.",
      ar: "نعم. تعتمد البطاقة المفيدة على المنتج المطلوب: الأبعاد، الرطوبة المستهدفة، التفاوتات، التغليف، التطبيق، الوجهة والوثائق المطلوبة.",
    },
  },
] satisfies Array<{ a: LocalizedText; q: LocalizedText }>;

export const woodsCta = {
  title: {
    fr: "Faire valider une essence pour votre produit",
    en: "Validate a species for your product",
    ar: "تأكيد نوع الخشب لمنتجك",
  },
  text: {
    fr: "Envoyez le produit recherché, les dimensions, l'usage, la quantité et le pays de destination. Tunibois vous aide à cadrer l'essence, la disponibilité, le conditionnement et les points techniques à confirmer.",
    en: "Send the requested product, dimensions, use, quantity and destination country. Tunibois helps frame the species, availability, packing and technical points to confirm.",
    ar: "أرسل المنتج المطلوب والأبعاد والاستخدام والكمية وبلد الوجهة. تساعدك Tunibois على تأطير نوع الخشب والتوفر والتغليف والنقاط التقنية التي يجب تأكيدها.",
  },
  primary: {
    fr: "Envoyer une demande",
    en: "Send an enquiry",
    ar: "إرسال طلب",
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
