import type { Locale } from "@/lib/locales";

export type WoodSpecies = {
  id: string;
  title: Record<Locale, string>;
  summary: Record<Locale, string>;
  uses: Record<Locale, string[]>;
};

export const woodSpecies: WoodSpecies[] = [
  {
    id: "olive",
    title: { fr: "Bois d'olivier", en: "Olive wood", ar: "خشب الزيتون" },
    summary: {
      fr: "Essence premium à veinage marqué, adaptée aux produits décoratifs, plateaux, planches et pièces à forte valeur perçue.",
      en: "Premium species with distinctive grain for decorative products, boards, serving trays and high perceived value pieces.",
      ar: "خشب فاخر بعروق مميزة مناسب للمنتجات الزخرفية والألواح والقطع ذات القيمة العالية.",
    },
    uses: {
      fr: ["Collection olivier", "Articles premium", "Décoration", "Planchettes et plateaux"],
      en: ["Olive collection", "Premium items", "Decoration", "Boards and serving trays"],
      ar: ["مجموعة الزيتون", "منتجات فاخرة", "ديكور", "ألواح وصواني"],
    },
  },
  {
    id: "beech",
    title: { fr: "Bois de hêtre", en: "Beech wood", ar: "خشب الزان" },
    summary: {
      fr: "Essence régulière et polyvalente pour composants, pièces tournées, mobilier, ustensiles et produits bois techniques.",
      en: "Consistent and versatile species for components, turned parts, furniture, utensils and technical wood products.",
      ar: "خشب منتظم ومتعدد الاستخدامات للمكونات والقطع المخروطة والأثاث والمنتجات التقنية.",
    },
    uses: {
      fr: ["Composants mobilier", "Couverts", "Bâtonnets", "Pièces techniques"],
      en: ["Furniture components", "Cutlery", "Sticks", "Technical parts"],
      ar: ["مكونات الأثاث", "أدوات مائدة", "عيدان", "قطع تقنية"],
    },
  },
  {
    id: "eucalyptus",
    title: { fr: "Eucalyptus blanc", en: "White eucalyptus", ar: "الأوكالبتوس الأبيض" },
    summary: {
      fr: "Ressource adaptée aux usages industriels, palettes, emballages, panneaux et solutions à optimiser selon cahier des charges.",
      en: "Resource suited to industrial uses, pallets, packaging, panels and optimized specification-based solutions.",
      ar: "مورد مناسب للاستخدامات الصناعية والمنصات والتغليف والألواح حسب المواصفات.",
    },
    uses: {
      fr: ["Palettes", "Emballages", "Panneaux", "Solutions industrielles"],
      en: ["Pallets", "Packaging", "Panels", "Industrial solutions"],
      ar: ["منصات", "تغليف", "ألواح", "حلول صناعية"],
    },
  },
  {
    id: "aleppo-pine",
    title: { fr: "Pin d'Alep", en: "Aleppo pine", ar: "صنوبر حلبي" },
    summary: {
      fr: "Essence locale utile pour emballage, éléments industriels, bois énergie et produits à coût maîtrisé.",
      en: "Local species for packaging, industrial elements, wood energy and cost-controlled products.",
      ar: "خشب محلي مناسب للتغليف والعناصر الصناعية وطاقة الخشب والمنتجات الاقتصادية.",
    },
    uses: {
      fr: ["Palettes", "Caisses", "Bois énergie", "Pièces industrielles"],
      en: ["Pallets", "Crates", "Wood energy", "Industrial parts"],
      ar: ["منصات", "صناديق", "طاقة خشبية", "قطع صناعية"],
    },
  },
];
