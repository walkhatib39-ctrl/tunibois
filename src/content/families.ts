import type { Locale } from "@/lib/locales";

export type ProductFamily = {
  id: string;
  image: string;
  title: Record<Locale, string>;
  summary: Record<Locale, string>;
};

export const productFamilies: ProductFamily[] = [
  {
    id: "panels",
    image: "/assets/hardydeck/wood-boards-teck.jpg",
    title: { fr: "Panneaux bois", en: "Wood panels", ar: "ألواح خشبية" },
    summary: {
      fr: "Panneaux massifs, collés, finger joint, plateaux et plans de travail selon cahier des charges.",
      en: "Solid, glued, finger-joint panels, slabs and worktops manufactured to specification.",
      ar: "ألواح خشبية صلبة ومجمعة وألواح عمل حسب المواصفات المطلوبة.",
    },
  },
  {
    id: "furniture-components",
    image: "/assets/hardydeck/hardwood-joists.jpg",
    title: { fr: "Composants mobilier", en: "Furniture components", ar: "مكونات الأثاث" },
    summary: {
      fr: "Pieds, traverses, montants, cadres et pièces répétitives pour fabricants de mobilier.",
      en: "Legs, rails, frames and repeatable parts for furniture manufacturers.",
      ar: "أرجل وقطع وهياكل متكررة لمصنعي الأثاث.",
    },
  },
  {
    id: "packaging",
    image: "/assets/tunibois/wooden-pallets-main.png",
    title: { fr: "Palettes et emballages", en: "Pallets and packaging", ar: "المنصات والتغليف" },
    summary: {
      fr: "Palettes industrielles, palettes export, caisses bois et solutions d'emballage sur mesure.",
      en: "Industrial pallets, export pallets, wooden crates and custom packaging solutions.",
      ar: "منصات صناعية ومنصات تصدير وصناديق خشبية وحلول تغليف مخصصة.",
    },
  },
  {
    id: "eco-wood",
    image: "/assets/tunibois/wooden-coffee-stirrers.jpg",
    title: { fr: "Eco wood products", en: "Eco wood products", ar: "منتجات خشبية صديقة للبيئة" },
    summary: {
      fr: "Agitateurs, bâtonnets, cure-dents, brochettes et couverts bois pour volumes B2B.",
      en: "Stirrers, sticks, toothpicks, skewers and wooden cutlery for B2B volumes.",
      ar: "محركات وملاعق وعيدان وأسياخ وأدوات مائدة خشبية للكميات المهنية.",
    },
  },
  {
    id: "outdoor",
    image: "/assets/hardydeck/outdoor-wood-tiles.jpg",
    title: { fr: "Terrasses et extérieur", en: "Decking and outdoor", ar: "التراسات والخارج" },
    summary: {
      fr: "Lames, dalles, bardages, clôtures et éléments extérieurs selon essence et usage.",
      en: "Decking boards, tiles, cladding, fencing and outdoor elements by species and use case.",
      ar: "ألواح ودالات وتكسية وأسوار وعناصر خارجية حسب نوع الخشب والاستخدام.",
    },
  },
  {
    id: "wood-energy",
    image: "/assets/piskorski/pellets-bags.jpg",
    title: { fr: "Wood energy", en: "Wood energy", ar: "طاقة الخشب" },
    summary: {
      fr: "Pellets, briquettes et valorisation des chutes pour circuits professionnels.",
      en: "Pellets, briquettes and by-product valorization for professional channels.",
      ar: "حبيبات وقوالب خشبية واستغلال مخلفات الخشب للقنوات المهنية.",
    },
  },
];
