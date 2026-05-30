import type { Locale } from "@/lib/locales";
import type { RouteKey } from "@/lib/routes";

export type Product = {
  id: string;
  routeKey: RouteKey;
  familyId: string;
  image: string;
  gallery: string[];
  name: Record<Locale, string>;
  eyebrow: Record<Locale, string>;
  headline: Record<Locale, string>;
  summary: Record<Locale, string>;
  applications: Record<Locale, string[]>;
  variants: Record<Locale, string[]>;
  technical: Record<Locale, string[]>;
  packaging: Record<Locale, string>;
  seo: Record<Locale, { title: string; description: string }>;
};

export const products: Product[] = [
  {
    id: "wooden-pallets",
    routeKey: "pallets",
    familyId: "packaging",
    image: "/assets/tunibois/wooden-pallets-main.png",
    gallery: [
      "/assets/tunibois/wooden-pallets-main.png",
      "/assets/tunibois/euro-pallet.jpg",
      "/assets/tunibois/cp-pallet.jpg",
      "/assets/tunibois/industrial-crates-palox.jpg",
    ],
    name: { fr: "Palettes en bois", en: "Wooden pallets", ar: "منصات خشبية" },
    eyebrow: { fr: "Palettes et emballages", en: "Pallets and packaging", ar: "منصات وتغليف" },
    headline: {
      fr: "Palettes industrielles, palettes export et emballages bois sur mesure",
      en: "Industrial pallets, export pallets and custom wooden packaging",
      ar: "منصات صناعية ومنصات تصدير وتغليف خشبي حسب الطلب",
    },
    summary: {
      fr: "Tunibois accompagne les industriels, importateurs et distributeurs avec des solutions de palettes adaptées aux flux logistiques, au transport et aux contraintes export.",
      en: "Tunibois supports manufacturers, importers and distributors with pallet solutions designed for logistics flows, transport and export constraints.",
      ar: "تدعم Tunibois الصناعيين والمستوردين والموزعين بمنصات مناسبة للتدفقات اللوجستية والنقل ومتطلبات التصدير.",
    },
    applications: {
      fr: ["Export maritime et routier", "Stockage industriel", "Agro-industrie", "Distribution et manutention"],
      en: ["Sea and road export", "Industrial storage", "Agro-industry", "Distribution and handling"],
      ar: ["التصدير البحري والبري", "التخزين الصناعي", "الصناعات الغذائية", "التوزيع والمناولة"],
    },
    variants: {
      fr: ["Palettes Europe / format standard", "Palettes CP", "Palettes perdues", "Palettes lourdes", "Caisses bois et palox", "Palettes sur mesure"],
      en: ["Europe / standard-format pallets", "CP pallets", "One-way pallets", "Heavy-duty pallets", "Wooden crates and palox", "Custom pallets"],
      ar: ["منصات أوروبية أو قياسية", "منصات CP", "منصات للاستعمال الواحد", "منصات ثقيلة", "صناديق خشبية وبالوكس", "منصات حسب الطلب"],
    },
    technical: {
      fr: ["Dimensions selon cahier des charges", "Essences et sections adaptées à la charge", "Humidité et traitement selon destination", "Marquage, empilage et conditionnement export sur demande"],
      en: ["Dimensions according to specification", "Species and sections adapted to load requirements", "Moisture and treatment according to destination", "Marking, stacking and export packing on request"],
      ar: ["الأبعاد حسب دفتر الشروط", "نوع الخشب والمقاطع حسب الحمولة", "الرطوبة والمعالجة حسب وجهة الشحن", "وسم وتكديس وتغليف للتصدير عند الطلب"],
    },
    packaging: {
      fr: "Empilage, cerclage et préparation logistique selon volume, destination et mode de transport.",
      en: "Stacking, strapping and logistics preparation according to volume, destination and transport mode.",
      ar: "تكديس وربط وتحضير لوجستي حسب الحجم والوجهة وطريقة النقل.",
    },
    seo: {
      fr: {
        title: "Palettes en bois Tunisie | Palettes export et industrielles | Tunibois",
        description: "Fabrication et fourniture de palettes en bois, palettes export, palettes industrielles, caisses et emballages bois pour professionnels.",
      },
      en: {
        title: "Wooden pallets from Tunisia | Export and industrial pallets | Tunibois",
        description: "Wooden pallets, export pallets, industrial pallets, crates and custom wood packaging for B2B buyers and importers.",
      },
      ar: {
        title: "منصات خشبية من تونس | منصات صناعية وتصدير | Tunibois",
        description: "منصات خشبية ومنصات تصدير وصناديق وتغليف خشبي مخصص للمشترين الصناعيين والمستوردين.",
      },
    },
  },
  {
    id: "wood-pellets",
    routeKey: "pellets",
    familyId: "wood-energy",
    image: "/assets/tunibois/wood-pellets.jpg",
    gallery: ["/assets/tunibois/wood-pellets.jpg", "/assets/piskorski/pellets-bags.jpg", "/assets/piskorski/wood-briquettes-palette.jpg"],
    name: { fr: "Pellets en bois", en: "Wood pellets", ar: "حبيبات الخشب" },
    eyebrow: { fr: "Wood energy", en: "Wood energy", ar: "طاقة الخشب" },
    headline: {
      fr: "Pellets, briquettes et valorisation bois pour circuits professionnels",
      en: "Pellets, briquettes and wood by-product valorization for professional channels",
      ar: "حبيبات وقوالب خشبية واستغلال مخلفات الخشب للمهنيين",
    },
    summary: {
      fr: "Une offre wood energy pensée pour valoriser la matière, structurer des volumes réguliers et servir les distributeurs, revendeurs et clients professionnels.",
      en: "A wood energy offer designed to valorize material, structure recurring volumes and serve distributors, resellers and professional customers.",
      ar: "عرض لطاقة الخشب يهدف إلى تثمين المادة وتنظيم الكميات الدورية وخدمة الموزعين والمهنيين.",
    },
    applications: {
      fr: ["Distribution professionnelle", "Chauffage collectif", "Revendeurs énergie", "Valorisation de coproduits bois"],
      en: ["Professional distribution", "Collective heating", "Energy resellers", "Wood by-product valorization"],
      ar: ["التوزيع المهني", "التدفئة الجماعية", "موزعو الطاقة", "تثمين مخلفات الخشب"],
    },
    variants: {
      fr: ["Pellets en sacs", "Pellets en palette", "Briquettes", "Formats et conditionnement sur demande"],
      en: ["Bagged pellets", "Palletized pellets", "Briquettes", "Formats and packing on request"],
      ar: ["حبيبات في أكياس", "حبيبات على منصات", "قوالب خشبية", "أشكال وتغليف حسب الطلب"],
    },
    technical: {
      fr: ["Qualité et humidité à confirmer selon lot", "Conditionnement professionnel", "Documents et traçabilité selon destination", "Volumes selon disponibilité matière"],
      en: ["Quality and moisture to be confirmed by batch", "Professional packing", "Documents and traceability according to destination", "Volumes according to material availability"],
      ar: ["الجودة والرطوبة تؤكد حسب الدفعة", "تغليف مهني", "وثائق وتتبع حسب الوجهة", "الكميات حسب توفر المادة"],
    },
    packaging: {
      fr: "Sacs, palettes ou conditionnement adapté aux circuits de distribution.",
      en: "Bags, pallets or packing adapted to distribution channels.",
      ar: "أكياس أو منصات أو تغليف مناسب لقنوات التوزيع.",
    },
    seo: {
      fr: {
        title: "Pellets en bois Tunisie | Fourniture professionnelle | Tunibois",
        description: "Pellets, briquettes et solutions wood energy pour distributeurs, revendeurs et clients professionnels.",
      },
      en: {
        title: "Wood pellets from Tunisia | Professional supply | Tunibois",
        description: "Wood pellets, briquettes and wood energy solutions for distributors, resellers and professional buyers.",
      },
      ar: {
        title: "حبيبات خشب من تونس | توريد مهني | Tunibois",
        description: "حبيبات وقوالب خشبية وحلول طاقة خشبية للموزعين والمهنيين.",
      },
    },
  },
  {
    id: "wooden-coffee-stirrers",
    routeKey: "stirrers",
    familyId: "eco-wood",
    image: "/assets/tunibois/wooden-coffee-stirrers.jpg",
    gallery: ["/assets/tunibois/wooden-coffee-stirrers.jpg", "/assets/tunibois/wooden-cutlery.jpg"],
    name: { fr: "Agitateurs de café en bois", en: "Wooden coffee stirrers", ar: "محركات قهوة خشبية" },
    eyebrow: { fr: "Eco wood products", en: "Eco wood products", ar: "منتجات خشبية صديقة للبيئة" },
    headline: {
      fr: "Agitateurs de café en bois pour distributeurs, CHR et marques privées",
      en: "Wooden coffee stirrers for distributors, foodservice and private labels",
      ar: "محركات قهوة خشبية للموزعين والمطاعم والعلامات الخاصة",
    },
    summary: {
      fr: "Un produit simple en apparence, mais exigeant en régularité, finition, conditionnement et capacité de livraison B2B.",
      en: "A simple-looking product that requires consistency, finish, packing quality and B2B delivery capability.",
      ar: "منتج يبدو بسيطا لكنه يتطلب انتظاما في الجودة والتشطيب والتغليف وقدرة توريد مهنية.",
    },
    applications: {
      fr: ["Cafés et hôtels", "Distributeurs CHR", "Vending", "Marques privées"],
      en: ["Cafes and hotels", "Foodservice distributors", "Vending", "Private labels"],
      ar: ["المقاهي والفنادق", "موزعو المطاعم", "آلات البيع", "علامات خاصة"],
    },
    variants: {
      fr: ["Formats courts et longs", "Bouts arrondis", "Conditionnement vrac", "Conditionnement marque client"],
      en: ["Short and long formats", "Rounded ends", "Bulk packing", "Customer-branded packing"],
      ar: ["مقاسات قصيرة وطويلة", "أطراف مستديرة", "تعبئة بالجملة", "تغليف بعلامة العميل"],
    },
    technical: {
      fr: ["Dimensions selon besoin client", "Finition lisse", "Tolérances adaptées aux lignes de conditionnement", "MOQ selon format et emballage"],
      en: ["Dimensions according to customer needs", "Smooth finish", "Tolerances adapted to packing lines", "MOQ according to format and packaging"],
      ar: ["أبعاد حسب حاجة العميل", "تشطيب ناعم", "تفاوتات مناسبة لخطوط التغليف", "حد أدنى حسب المقاس والتغليف"],
    },
    packaging: {
      fr: "Vrac, sachets, boîtes ou conditionnement personnalisé selon circuit de distribution.",
      en: "Bulk, sachets, boxes or custom packing according to distribution channel.",
      ar: "بالجملة أو في أكياس أو علب أو تغليف مخصص حسب قناة التوزيع.",
    },
    seo: {
      fr: {
        title: "Agitateurs de café en bois | Fournisseur B2B Tunisie | Tunibois",
        description: "Agitateurs de café en bois pour professionnels, distributeurs CHR, vending et marques privées.",
      },
      en: {
        title: "Wooden coffee stirrers | B2B supplier from Tunisia | Tunibois",
        description: "Wooden coffee stirrers for foodservice distributors, vending operators and private-label buyers.",
      },
      ar: {
        title: "محركات قهوة خشبية | مورد B2B من تونس | Tunibois",
        description: "محركات قهوة خشبية للموزعين والمطاعم وآلات البيع والعلامات الخاصة.",
      },
    },
  },
  {
    id: "ice-cream-sticks",
    routeKey: "iceCreamSticks",
    familyId: "eco-wood",
    image: "/assets/tunibois/ice-cream-sticks.jpg",
    gallery: ["/assets/tunibois/ice-cream-sticks.jpg", "/assets/tunibois/wooden-coffee-stirrers.jpg"],
    name: { fr: "Bâtonnets pour glaces", en: "Ice cream sticks", ar: "عيدان المثلجات" },
    eyebrow: { fr: "Eco wood products", en: "Eco wood products", ar: "منتجات خشبية صديقة للبيئة" },
    headline: {
      fr: "Bâtonnets en bois pour glaces, desserts et usages alimentaires professionnels",
      en: "Wooden sticks for ice cream, desserts and professional food uses",
      ar: "عيدان خشبية للمثلجات والحلويات والاستخدامات الغذائية المهنية",
    },
    summary: {
      fr: "Des bâtonnets destinés aux industriels alimentaires, distributeurs et fabricants cherchant des volumes réguliers et un conditionnement fiable.",
      en: "Sticks for food manufacturers, distributors and brands requiring recurring volumes and reliable packing.",
      ar: "عيدان للمصنعين الغذائيين والموزعين والعلامات التي تحتاج إلى كميات منتظمة وتغليف موثوق.",
    },
    applications: {
      fr: ["Glaces et desserts", "Industrie alimentaire", "Marques privées", "Distribution B2B"],
      en: ["Ice cream and desserts", "Food industry", "Private labels", "B2B distribution"],
      ar: ["المثلجات والحلويات", "الصناعة الغذائية", "علامات خاصة", "توزيع مهني"],
    },
    variants: {
      fr: ["Bâtonnets standards", "Formats larges", "Formats courts", "Conditionnement selon ligne client"],
      en: ["Standard sticks", "Wide formats", "Short formats", "Packing according to customer line"],
      ar: ["عيدان قياسية", "مقاسات عريضة", "مقاسات قصيرة", "تغليف حسب خط العميل"],
    },
    technical: {
      fr: ["Finition lisse", "Formats adaptés aux usages alimentaires", "Humidité et tri selon cahier des charges", "Tolérances à confirmer par format"],
      en: ["Smooth finish", "Formats adapted to food uses", "Moisture and sorting according to specification", "Tolerances to be confirmed by format"],
      ar: ["تشطيب ناعم", "مقاسات مناسبة للاستخدام الغذائي", "رطوبة وفرز حسب المواصفات", "التفاوتات تؤكد حسب المقاس"],
    },
    packaging: {
      fr: "Conditionnement en vrac ou par lots selon volumes et contraintes logistiques.",
      en: "Bulk or batch packing according to volume and logistics constraints.",
      ar: "تعبئة بالجملة أو على دفعات حسب الكميات والمتطلبات اللوجستية.",
    },
    seo: {
      fr: {
        title: "Bâtonnets en bois pour glaces | Fabrication B2B | Tunibois",
        description: "Bâtonnets en bois pour glaces, desserts et usages alimentaires professionnels. Formats et conditionnement sur demande.",
      },
      en: {
        title: "Wooden ice cream sticks | B2B manufacturing | Tunibois",
        description: "Wooden sticks for ice cream, desserts and professional food uses. Formats and packing on request.",
      },
      ar: {
        title: "عيدان خشبية للمثلجات | تصنيع مهني | Tunibois",
        description: "عيدان خشبية للمثلجات والحلويات والاستخدامات الغذائية المهنية، بمقاسات وتغليف حسب الطلب.",
      },
    },
  },
  {
    id: "wooden-cutlery",
    routeKey: "woodenCutlery",
    familyId: "eco-wood",
    image: "/assets/tunibois/wooden-cutlery.jpg",
    gallery: ["/assets/tunibois/wooden-cutlery.jpg", "/assets/tunibois/wooden-coffee-stirrers.jpg", "/assets/tunibois/toothpicks.jpg"],
    name: { fr: "Couverts en bois", en: "Wooden cutlery", ar: "أدوات مائدة خشبية" },
    eyebrow: { fr: "Eco wood products", en: "Eco wood products", ar: "منتجات خشبية صديقة للبيئة" },
    headline: {
      fr: "Couverts en bois pour restauration, événementiel et distribution professionnelle",
      en: "Wooden cutlery for foodservice, events and professional distribution",
      ar: "أدوات مائدة خشبية للمطاعم والفعاليات والتوزيع المهني",
    },
    summary: {
      fr: "Une gamme pensée pour les acheteurs B2B qui recherchent des alternatives bois, un approvisionnement clair et une présentation professionnelle.",
      en: "A range for B2B buyers seeking wood-based alternatives, clear sourcing and professional presentation.",
      ar: "مجموعة موجهة للمشترين المهنيين الباحثين عن بدائل خشبية وتوريد واضح وعرض محترف.",
    },
    applications: {
      fr: ["CHR", "Traiteurs", "Evénementiel", "Distribution grossiste"],
      en: ["Foodservice", "Catering", "Events", "Wholesale distribution"],
      ar: ["المطاعم والفنادق", "خدمات التموين", "الفعاليات", "توزيع بالجملة"],
    },
    variants: {
      fr: ["Fourchettes", "Couteaux", "Cuillères", "Kits", "Conditionnement personnalisé"],
      en: ["Forks", "Knives", "Spoons", "Kits", "Custom packing"],
      ar: ["شوك", "سكاكين", "ملاعق", "أطقم", "تغليف مخصص"],
    },
    technical: {
      fr: ["Formats selon gamme", "Finition lisse", "Conditionnement hygiénique selon demande", "MOQ selon combinaison produit/packaging"],
      en: ["Formats according to range", "Smooth finish", "Hygienic packing on request", "MOQ according to product/packing mix"],
      ar: ["مقاسات حسب المجموعة", "تشطيب ناعم", "تغليف صحي حسب الطلب", "حد أدنى حسب المنتج والتغليف"],
    },
    packaging: {
      fr: "Vrac, kits, sachets ou packaging marque distributeur selon besoin commercial.",
      en: "Bulk, kits, sachets or distributor-branded packaging according to commercial needs.",
      ar: "بالجملة أو أطقم أو أكياس أو تغليف بعلامة الموزع حسب الحاجة التجارية.",
    },
    seo: {
      fr: {
        title: "Couverts en bois Tunisie | Fournisseur professionnel | Tunibois",
        description: "Couverts en bois pour CHR, traiteurs, événementiel et distribution professionnelle. Kits et packaging sur demande.",
      },
      en: {
        title: "Wooden cutlery from Tunisia | Professional supplier | Tunibois",
        description: "Wooden cutlery for foodservice, catering, events and wholesale distribution. Kits and packing on request.",
      },
      ar: {
        title: "أدوات مائدة خشبية من تونس | مورد مهني | Tunibois",
        description: "أدوات مائدة خشبية للمطاعم والفعاليات والتوزيع المهني مع تغليف حسب الطلب.",
      },
    },
  },
  {
    id: "toothpicks",
    routeKey: "toothpicks",
    familyId: "eco-wood",
    image: "/assets/tunibois/toothpicks.jpg",
    gallery: ["/assets/tunibois/toothpicks.jpg", "/assets/tunibois/wooden-cutlery.jpg"],
    name: { fr: "Cure-dents", en: "Toothpicks", ar: "عيدان تنظيف الأسنان" },
    eyebrow: { fr: "Eco wood products", en: "Eco wood products", ar: "منتجات خشبية صديقة للبيئة" },
    headline: {
      fr: "Cure-dents en bois pour distribution, CHR et conditionnement marque client",
      en: "Wooden toothpicks for distribution, foodservice and private-label packing",
      ar: "عيدان تنظيف أسنان خشبية للتوزيع والمطاعم والتغليف بعلامة العميل",
    },
    summary: {
      fr: "Une offre B2B orientée volumes, régularité de finition et adaptation au conditionnement demandé par le client.",
      en: "A B2B offer focused on volume, consistent finish and adaptation to customer-requested packing.",
      ar: "عرض مهني يركز على الكميات وانتظام التشطيب والتكيف مع التغليف المطلوب من العميل.",
    },
    applications: {
      fr: ["Restaurants et hôtels", "Grossistes", "Kits couverts", "Marques privées"],
      en: ["Restaurants and hotels", "Wholesalers", "Cutlery kits", "Private labels"],
      ar: ["مطاعم وفنادق", "تجار جملة", "أطقم أدوات مائدة", "علامات خاصة"],
    },
    variants: {
      fr: ["Cure-dents standards", "Pointes simples ou doubles selon demande", "Vrac", "Sachets et boîtes"],
      en: ["Standard toothpicks", "Single or double tips on request", "Bulk", "Sachets and boxes"],
      ar: ["عيدان قياسية", "رأس واحد أو مزدوج حسب الطلب", "بالجملة", "أكياس وعلب"],
    },
    technical: {
      fr: ["Dimensions selon gamme", "Surface lisse", "Tri et conditionnement selon cahier des charges", "MOQ selon packaging"],
      en: ["Dimensions according to range", "Smooth surface", "Sorting and packing according to specification", "MOQ according to packing"],
      ar: ["الأبعاد حسب المجموعة", "سطح ناعم", "فرز وتغليف حسب المواصفات", "حد أدنى حسب التغليف"],
    },
    packaging: {
      fr: "Conditionnement vrac, boîtes ou sachets individualisés selon circuit commercial.",
      en: "Bulk, boxes or individual sachets according to commercial channel.",
      ar: "تغليف بالجملة أو في علب أو أكياس فردية حسب قناة البيع.",
    },
    seo: {
      fr: {
        title: "Cure-dents en bois | Fournisseur B2B Tunisie | Tunibois",
        description: "Cure-dents en bois pour restaurants, grossistes, kits couverts et marques privées. Conditionnement sur demande.",
      },
      en: {
        title: "Wooden toothpicks | B2B supplier from Tunisia | Tunibois",
        description: "Wooden toothpicks for restaurants, wholesalers, cutlery kits and private-label packing.",
      },
      ar: {
        title: "عيدان تنظيف أسنان خشبية | مورد B2B من تونس | Tunibois",
        description: "عيدان تنظيف أسنان خشبية للمطاعم وتجار الجملة والأطقم والعلامات الخاصة.",
      },
    },
  },
];

export function getProductByRouteKey(routeKey: RouteKey) {
  return products.find((product) => product.routeKey === routeKey);
}

export function getProductsByFamily(familyId: string) {
  return products.filter((product) => product.familyId === familyId);
}
