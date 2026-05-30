import type { Locale } from "@/lib/locales";
import { route, type RouteKey } from "@/lib/routes";

type LocalizedText = Record<Locale, string>;

export type ProductFamilyId = "components-panels" | "eco-wood" | "outdoor-architecture" | "pallets-packaging" | "wood-energy";

export type ProductFamily = {
  id: ProductFamilyId;
  image: string;
  imageAlt: LocalizedText;
  title: LocalizedText;
  text: LocalizedText;
  proof: LocalizedText;
  examples: Record<Locale, string[]>;
  routeKeys: RouteKey[];
};

export const productFamilies: ProductFamily[] = [
  {
    id: "pallets-packaging",
    image: "/assets/tunibois/wooden-pallets-main.png",
    imageAlt: {
      fr: "Palettes et emballages bois pour flux industriels",
      en: "Wooden pallets and packaging for industrial flows",
      ar: "منصات وتغليف خشبي للتدفقات الصناعية",
    },
    title: { fr: "Palettes et emballages industriels", en: "Industrial pallets and packaging", ar: "منصات وتغليف صناعي" },
    text: {
      fr: "Formats adaptés au stockage, à la manutention, au transport routier ou maritime et aux contraintes de charge.",
      en: "Formats adapted to storage, handling, road or sea transport and load constraints.",
      ar: "مقاسات مناسبة للتخزين والمناولة والنقل البري أو البحري ومتطلبات الحمولة.",
    },
    proof: {
      fr: "À étudier selon charge, dimensions, essence, humidité, marquage, empilage et destination.",
      en: "Reviewed by load, dimensions, species, moisture, marking, stacking and destination.",
      ar: "تدرس حسب الحمولة والأبعاد ونوع الخشب والرطوبة والوسم والتكديس والوجهة.",
    },
    examples: {
      fr: ["Palettes export", "Euro palettes", "Palettes industrielles", "Caisses et emballages bois"],
      en: ["Export pallets", "Euro pallets", "Industrial pallets", "Wooden crates and packaging"],
      ar: ["منصات تصدير", "منصات أوروبية", "منصات صناعية", "صناديق وتغليف خشبي"],
    },
    routeKeys: ["pallets"],
  },
  {
    id: "eco-wood",
    image: "/assets/tunibois/wooden-cutlery.jpg",
    imageAlt: {
      fr: "Produits eco wood pour distribution professionnelle",
      en: "Eco wood products for professional distribution",
      ar: "منتجات eco wood للتوزيع المهني",
    },
    title: { fr: "Produits eco wood pour distribution", en: "Eco wood products for distribution", ar: "منتجات خشبية صديقة للتوزيع" },
    text: {
      fr: "Produits légers, répétables et conditionnables pour distributeurs, marques privées, CHR et circuits professionnels.",
      en: "Lightweight, repeatable and packable products for distributors, private labels, foodservice and professional channels.",
      ar: "منتجات خفيفة وقابلة للتكرار والتغليف للموزعين والعلامات الخاصة والمطاعم والقنوات المهنية.",
    },
    proof: {
      fr: "À préciser selon format, finition, contact alimentaire, emballage, marque distributeur et volume.",
      en: "Specified by format, finish, food contact, packing, private label and volume.",
      ar: "تحدد حسب المقاس والتشطيب وملامسة الغذاء والتغليف والعلامة الخاصة والكمية.",
    },
    examples: {
      fr: ["Agitateurs café", "Bâtonnets glace", "Couverts bois", "Cure-dents"],
      en: ["Coffee stirrers", "Ice cream sticks", "Wooden cutlery", "Toothpicks"],
      ar: ["محركات قهوة", "عيدان مثلجات", "أدوات مائدة خشبية", "أعواد أسنان"],
    },
    routeKeys: ["stirrers", "iceCreamSticks", "woodenCutlery", "toothpicks"],
  },
  {
    id: "wood-energy",
    image: "/assets/piskorski/pellets-bags.jpg",
    imageAlt: {
      fr: "Pellets et bois énergie conditionnés sur palette",
      en: "Palletized pellets and wood energy products",
      ar: "حبيبات وطاقة خشبية على منصات",
    },
    title: { fr: "Bois énergie et valorisation matière", en: "Wood energy and material valorization", ar: "طاقة خشبية وتثمين المادة" },
    text: {
      fr: "Formats bois énergie à confirmer selon disponibilité matière, humidité, pouvoir calorifique, sacs, palettes et volumes.",
      en: "Wood energy formats confirmed by material availability, moisture, calorific value, bags, pallets and volumes.",
      ar: "صيغ طاقة خشبية تؤكد حسب توفر المادة والرطوبة والقيمة الحرارية والأكياس والمنصات والكميات.",
    },
    proof: {
      fr: "À étudier selon lot, humidité, conditionnement, palette, volume et circuit de distribution.",
      en: "Reviewed by batch, moisture, packing, palletization, volume and distribution channel.",
      ar: "تدرس حسب الدفعة والرطوبة والتغليف والمنصة والكمية وقناة التوزيع.",
    },
    examples: {
      fr: ["Pellets", "Briquettes", "Conditionnement palette", "Volumes selon disponibilité"],
      en: ["Pellets", "Briquettes", "Palletized packing", "Volumes by availability"],
      ar: ["حبيبات", "قوالب خشبية", "تغليف على منصات", "كميات حسب التوفر"],
    },
    routeKeys: ["pellets"],
  },
  {
    id: "components-panels",
    image: "/assets/hardydeck/wood-boards-teck.jpg",
    imageAlt: {
      fr: "Planches et composants bois rabotés",
      en: "Planed boards and wood components",
      ar: "ألواح ومكونات خشبية ممسوحة",
    },
    title: { fr: "Panneaux, composants et pièces sur plan", en: "Panels, components and made-to-plan parts", ar: "ألواح ومكونات وقطع حسب الرسم" },
    text: {
      fr: "Dimensions, épaisseurs, sections, usinage, collage et répétabilité étudiés pour fabricants et industriels.",
      en: "Dimensions, thicknesses, sections, machining, gluing and repeatability reviewed for manufacturers and industrial buyers.",
      ar: "أبعاد وسماكات ومقاطع وتشغيل ولصق وتكرار تتم دراستها للمصنعين والمشترين الصناعيين.",
    },
    proof: {
      fr: "À préciser avec plans, épaisseurs, tolérances, essence, taux d'humidité et niveau de finition.",
      en: "Specified with drawings, thicknesses, tolerances, species, moisture rate and finish level.",
      ar: "تحدد بالرسومات والسماكات والتفاوتات ونوع الخشب ونسبة الرطوبة ومستوى التشطيب.",
    },
    examples: {
      fr: ["Panneaux collés", "Finger joint panels", "Pieds et traverses", "Pièces tournées ou usinées"],
      en: ["Edge glued panels", "Finger joint panels", "Legs and rails", "Turned or machined parts"],
      ar: ["ألواح ملصقة", "ألواح finger joint", "أرجل وعوارض", "قطع مخروطة أو مشغلة"],
    },
    routeKeys: [],
  },
  {
    id: "outdoor-architecture",
    image: "/assets/hardydeck/outdoor-wood-tiles.jpg",
    imageAlt: {
      fr: "Dalles, lames et éléments bois pour extérieur",
      en: "Outdoor wood tiles, boards and elements",
      ar: "دالات وألواح وعناصر خشبية خارجية",
    },
    title: { fr: "Extérieur et éléments architecturaux", en: "Outdoor and architectural wood elements", ar: "عناصر خارجية ومعمارية خشبية" },
    text: {
      fr: "Lames, bardages, claustras et habillages étudiés selon essence, exposition, usage, finition et conditionnement.",
      en: "Boards, cladding, screens and coverings reviewed by species, exposure, use, finish and packing.",
      ar: "ألواح وكسوة وفواصل وتلبيسات تدرس حسب نوع الخشب والتعرض والاستخدام والتشطيب والتغليف.",
    },
    proof: {
      fr: "À valider selon exposition, stabilité, essence, finition, entraxes, emballage et usage final.",
      en: "Validated by exposure, stability, species, finish, spacing, packing and final use.",
      ar: "تؤكد حسب التعرض والثبات ونوع الخشب والتشطيب والمسافات والتغليف والاستخدام النهائي.",
    },
    examples: {
      fr: ["Lames de terrasse", "Bardage", "Claustras", "Revêtements et décoration"],
      en: ["Decking boards", "Cladding", "Screens", "Coverings and decoration"],
      ar: ["ألواح تراس", "كسوة", "فواصل", "تلبيسات وديكور"],
    },
    routeKeys: [],
  },
];

export function productFamilyHref(id: ProductFamilyId, locale: Locale) {
  return `${route("products", locale)}#${id}`;
}
