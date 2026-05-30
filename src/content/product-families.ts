import type { Locale } from "@/lib/locales";
import { route, type RouteKey } from "@/lib/routes";

type LocalizedText = Record<Locale, string>;

export type ProductFamilyId =
  | "wood-panels"
  | "furniture-components"
  | "stairs"
  | "architectural-products"
  | "decking-outdoor"
  | "pallets-packaging"
  | "olive-wood"
  | "eco-wood"
  | "wood-energy";

export type ProductFamily = {
  id: ProductFamilyId;
  image: string;
  imageAlt: LocalizedText;
  title: LocalizedText;
  text: LocalizedText;
  products: Record<Locale, string[]>;
  routeKeys: RouteKey[];
};

export const productFamilies: ProductFamily[] = [
  {
    id: "wood-panels",
    image: "/assets/hardydeck/wood-boards-teck.jpg",
    imageAlt: {
      fr: "Panneaux, plateaux et plans de travail en bois",
      en: "Wood panels, boards and worktops",
      ar: "ألواح وصفائح وأسطح عمل خشبية",
    },
    title: { fr: "Panneaux bois", en: "Wood panels", ar: "ألواح خشبية" },
    text: {
      fr: "Panneaux et plateaux destinés aux fabricants, agenceurs, distributeurs et industriels recherchant des formats réguliers et un cahier des charges clair.",
      en: "Panels and boards for manufacturers, fit-out companies, distributors and industrial buyers requiring consistent formats and clear specifications.",
      ar: "ألواح وصفائح للمصنعين وشركات التجهيز والموزعين والمشترين الصناعيين الذين يحتاجون إلى مقاسات منتظمة ومواصفات واضحة.",
    },
    products: {
      fr: ["Panneaux massifs", "Panneaux collés", "Finger Joint Panels", "Edge Glued Panels", "Lamellé-Collé", "Plateaux", "Plans de travail"],
      en: ["Solid wood panels", "Glued panels", "Finger Joint Panels", "Edge Glued Panels", "Glulam", "Boards", "Worktops"],
      ar: ["ألواح خشب صلب", "ألواح ملصقة", "ألواح Finger Joint", "ألواح Edge Glued", "خشب لاميني", "صفائح", "أسطح عمل"],
    },
    routeKeys: [],
  },
  {
    id: "furniture-components",
    image: "/assets/tunibois/factory-technology.jpg",
    imageAlt: {
      fr: "Usinage de composants bois pour mobilier",
      en: "Machining wood components for furniture",
      ar: "تشغيل مكونات خشبية للأثاث",
    },
    title: { fr: "Composants mobilier", en: "Furniture components", ar: "مكونات الأثاث" },
    text: {
      fr: "Composants bois pour fabricants de mobilier, ateliers d'assemblage, sous-traitants et industriels recherchant répétabilité, dimensions et finitions maîtrisées.",
      en: "Wood components for furniture manufacturers, assembly workshops, subcontractors and industrial buyers requiring repeatability, dimensions and controlled finishes.",
      ar: "مكونات خشبية لمصنعي الأثاث وورش التجميع والمناولين والصناعيين الذين يحتاجون إلى تكرارية وأبعاد وتشطيبات مضبوطة.",
    },
    products: {
      fr: ["Pieds de table", "Pieds de lit", "Pieds de canapé", "Traverses", "Montants", "Cadres", "Colonnes décoratives"],
      en: ["Table legs", "Bed legs", "Sofa legs", "Rails", "Uprights", "Frames", "Decorative columns"],
      ar: ["أرجل طاولات", "أرجل أسرة", "أرجل أرائك", "عوارض", "قوائم", "إطارات", "أعمدة زخرفية"],
    },
    routeKeys: [],
  },
  {
    id: "stairs",
    image: "/assets/tunibois/factory-transformation.jpg",
    imageAlt: {
      fr: "Fabrication de composants bois pour escaliers",
      en: "Manufacturing wood stair components",
      ar: "تصنيع مكونات خشبية للسلالم",
    },
    title: { fr: "Escaliers", en: "Stairs", ar: "السلالم" },
    text: {
      fr: "Éléments bois pour fabricants d'escaliers, distributeurs spécialisés et projets nécessitant des pièces régulières, usinées ou tournées.",
      en: "Wood elements for stair manufacturers, specialized distributors and projects requiring consistent machined or turned parts.",
      ar: "عناصر خشبية لمصنعي السلالم والموزعين المتخصصين والمشاريع التي تحتاج إلى قطع منتظمة أو مشغلة أو مخروطة.",
    },
    products: {
      fr: ["Balustres", "Mains courantes", "Marches", "Poteaux"],
      en: ["Balusters", "Handrails", "Steps", "Posts"],
      ar: ["درابزينات", "مقابض سلالم", "درجات", "أعمدة"],
    },
    routeKeys: [],
  },
  {
    id: "architectural-products",
    image: "/assets/hardydeck/hardwood-joists.jpg",
    imageAlt: {
      fr: "Éléments bois architecturaux et décoratifs",
      en: "Architectural and decorative wood elements",
      ar: "عناصر خشبية معمارية وزخرفية",
    },
    title: { fr: "Produits architecturaux", en: "Architectural products", ar: "منتجات معمارية" },
    text: {
      fr: "Éléments bois pour projets d'aménagement, décoration, habillage mural, plafond et solutions architecturales sur demande.",
      en: "Wood elements for fit-out, decoration, wall covering, ceiling covering and architectural solutions on request.",
      ar: "عناصر خشبية لمشاريع التجهيز والديكور وتكسية الجدران والأسقف والحلول المعمارية حسب الطلب.",
    },
    products: {
      fr: ["Claustras", "Panneaux acoustiques", "Revêtements muraux", "Habillages plafonds", "Éléments décoratifs"],
      en: ["Screens", "Acoustic panels", "Wall coverings", "Ceiling coverings", "Decorative elements"],
      ar: ["فواصل خشبية", "ألواح صوتية", "تكسية جدران", "تلبيسات أسقف", "عناصر زخرفية"],
    },
    routeKeys: [],
  },
  {
    id: "decking-outdoor",
    image: "/assets/hardydeck/outdoor-wood-tiles.jpg",
    imageAlt: {
      fr: "Lames, dalles et éléments bois pour extérieur",
      en: "Outdoor wood boards, tiles and elements",
      ar: "ألواح ودالات وعناصر خشبية خارجية",
    },
    title: { fr: "Terrasses & extérieur", en: "Decking and outdoor", ar: "التراسات والخارج" },
    text: {
      fr: "Produits bois pour terrasses, bardages, pergolas, clôtures et projets extérieurs à étudier selon exposition, essence et conditionnement.",
      en: "Wood products for decking, cladding, pergolas, fences and outdoor projects reviewed by exposure, species and packing.",
      ar: "منتجات خشبية للتراسات والكسوة والبرجولات والأسوار والمشاريع الخارجية حسب التعرض ونوع الخشب والتغليف.",
    },
    products: {
      fr: ["Lames de terrasse", "Dalles de terrasse", "Bardages", "Pergolas", "Clôtures"],
      en: ["Decking boards", "Decking tiles", "Cladding", "Pergolas", "Fences"],
      ar: ["ألواح تراس", "دالات تراس", "كسوة", "برجولات", "أسوار"],
    },
    routeKeys: [],
  },
  {
    id: "pallets-packaging",
    image: "/assets/tunibois/wooden-pallets-main.png",
    imageAlt: {
      fr: "Palettes et emballages bois pour flux industriels",
      en: "Wooden pallets and packaging for industrial flows",
      ar: "منصات وتغليف خشبي للتدفقات الصناعية",
    },
    title: { fr: "Palettes & emballages", en: "Pallets and packaging", ar: "منصات وتغليف" },
    text: {
      fr: "Solutions bois pour stockage, manutention, transport routier ou maritime, export et besoins industriels réguliers.",
      en: "Wood solutions for storage, handling, road or sea transport, export and recurring industrial needs.",
      ar: "حلول خشبية للتخزين والمناولة والنقل البري أو البحري والتصدير والاحتياجات الصناعية المنتظمة.",
    },
    products: {
      fr: ["Euro palettes", "Palettes export", "Palettes industrielles", "Réparation palettes", "Caisses industrielles"],
      en: ["Euro pallets", "Export pallets", "Industrial pallets", "Pallet repair", "Industrial crates"],
      ar: ["منصات أوروبية", "منصات تصدير", "منصات صناعية", "إصلاح المنصات", "صناديق صناعية"],
    },
    routeKeys: ["pallets"],
  },
  {
    id: "olive-wood",
    image: "/assets/hardydeck/wood-boards-teck.jpg",
    imageAlt: {
      fr: "Bois premium pour collection olivier",
      en: "Premium wood for olive wood collection",
      ar: "خشب فاخر لمجموعة الزيتون",
    },
    title: { fr: "Collection olivier", en: "Olive wood collection", ar: "مجموعة خشب الزيتون" },
    text: {
      fr: "Produits premium en bois d'olivier pour distributeurs, boutiques, cadeaux d'affaires, décoration et articles de présentation.",
      en: "Premium olive wood products for distributors, stores, corporate gifts, decoration and presentation items.",
      ar: "منتجات فاخرة من خشب الزيتون للموزعين والمتاجر والهدايا المهنية والديكور ومنتجات التقديم.",
    },
    products: {
      fr: ["Planches à découper", "Plateaux de présentation", "Produits premium", "Décoration"],
      en: ["Cutting boards", "Presentation boards", "Premium products", "Decoration"],
      ar: ["ألواح تقطيع", "صحون تقديم", "منتجات فاخرة", "ديكور"],
    },
    routeKeys: [],
  },
  {
    id: "eco-wood",
    image: "/assets/tunibois/wooden-cutlery.jpg",
    imageAlt: {
      fr: "Produits eco wood pour distribution professionnelle",
      en: "Eco wood products for professional distribution",
      ar: "منتجات eco wood للتوزيع المهني",
    },
    title: { fr: "Eco wood products", en: "Eco wood products", ar: "منتجات Eco Wood" },
    text: {
      fr: "Produits bois légers pour CHR, distribution, marques privées, grossistes et circuits professionnels.",
      en: "Lightweight wood products for foodservice, distribution, private labels, wholesalers and professional channels.",
      ar: "منتجات خشبية خفيفة للمطاعم والتوزيع والعلامات الخاصة وتجار الجملة والقنوات المهنية.",
    },
    products: {
      fr: ["Agitateurs café", "Bâtonnets glace", "Cure-dents", "Brochettes", "Couverts bois"],
      en: ["Coffee stirrers", "Ice cream sticks", "Toothpicks", "Skewers", "Wooden cutlery"],
      ar: ["محركات قهوة", "عيدان مثلجات", "أعواد أسنان", "أسياخ", "أدوات مائدة خشبية"],
    },
    routeKeys: ["stirrers", "iceCreamSticks", "toothpicks", "woodenCutlery"],
  },
  {
    id: "wood-energy",
    image: "/assets/piskorski/pellets-bags.jpg",
    imageAlt: {
      fr: "Pellets et briquettes bois énergie",
      en: "Wood pellets and briquettes",
      ar: "حبيبات وقوالب طاقة خشبية",
    },
    title: { fr: "Wood energy", en: "Wood energy", ar: "طاقة الخشب" },
    text: {
      fr: "Formats bois énergie pour revendeurs, distributeurs et clients professionnels selon disponibilité matière, conditionnement et volumes.",
      en: "Wood energy formats for resellers, distributors and professional customers according to material availability, packing and volumes.",
      ar: "صيغ طاقة خشبية للموزعين والعملاء المهنيين حسب توفر المادة والتغليف والكميات.",
    },
    products: {
      fr: ["Pellets", "Briquettes"],
      en: ["Pellets", "Briquettes"],
      ar: ["حبيبات", "قوالب خشبية"],
    },
    routeKeys: ["pellets"],
  },
];

export function productFamilyHref(id: ProductFamilyId, locale: Locale) {
  return `${route("products", locale)}#${id}`;
}
