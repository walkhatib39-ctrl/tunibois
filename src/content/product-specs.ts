import type { Product } from "@/content/products";
import type { Locale } from "@/lib/locales";

const technicalFallback = {
  fr: {
    wood: "Essence validée selon usage, disponibilité matière et contraintes du cahier des charges.",
    dimensions: "Dimensions selon plan, format standard ou besoin client.",
    thickness: "Épaisseur ou section confirmée selon usage, charge et contraintes mécaniques.",
    moisture: "Humidité cible confirmée selon lot, destination et application.",
    tolerances: "Tolérances définies par plan, échantillon ou ligne de conditionnement.",
    moq: "MOQ à confirmer selon produit, format, emballage et destination.",
    leadTime: "Délai confirmé après validation technique, volume et disponibilité matière.",
    pdf: "Fiche technique PDF disponible sur demande pendant la phase de validation catalogue.",
  },
  en: {
    wood: "Species confirmed according to use, material availability and specification constraints.",
    dimensions: "Dimensions according to drawing, standard format or customer requirement.",
    thickness: "Thickness or section confirmed according to use, load and mechanical constraints.",
    moisture: "Target moisture confirmed according to batch, destination and application.",
    tolerances: "Tolerances defined by drawing, sample or packing line.",
    moq: "MOQ to be confirmed according to product, format, packing and destination.",
    leadTime: "Lead time confirmed after technical validation, volume and material availability.",
    pdf: "Technical PDF available on request during catalogue validation.",
  },
  ar: {
    wood: "نوع الخشب يؤكد حسب الاستخدام وتوفر المادة ومتطلبات دفتر الشروط.",
    dimensions: "الأبعاد حسب الرسم أو المقاس القياسي أو حاجة العميل.",
    thickness: "السماكة أو المقطع تؤكد حسب الاستخدام والحمولة والمتطلبات الميكانيكية.",
    moisture: "الرطوبة المستهدفة تؤكد حسب الدفعة والوجهة والاستخدام.",
    tolerances: "التفاوتات تحدد حسب الرسم أو العينة أو خط التغليف.",
    moq: "الحد الأدنى للطلب يؤكد حسب المنتج والمقاس والتغليف والوجهة.",
    leadTime: "مدة الإنتاج تؤكد بعد التحقق التقني والكمية وتوفر المادة.",
    pdf: "البطاقة التقنية PDF متاحة عند الطلب خلال مرحلة تثبيت الكتالوج.",
  },
};

const technicalLabels = {
  fr: {
    wood: "Essence utilisée",
    dimensions: "Dimensions",
    thickness: "Épaisseur / section",
    moisture: "Humidité",
    tolerances: "Tolérances",
    moq: "MOQ",
    leadTime: "Délai de production",
    packaging: "Conditionnement",
    pdf: "Fiche technique PDF",
  },
  en: {
    wood: "Wood species",
    dimensions: "Dimensions",
    thickness: "Thickness / section",
    moisture: "Moisture",
    tolerances: "Tolerances",
    moq: "MOQ",
    leadTime: "Production lead time",
    packaging: "Packing",
    pdf: "Technical PDF",
  },
  ar: {
    wood: "نوع الخشب",
    dimensions: "الأبعاد",
    thickness: "السماكة / المقطع",
    moisture: "الرطوبة",
    tolerances: "التفاوتات",
    moq: "الحد الأدنى للطلب",
    leadTime: "مدة الإنتاج",
    packaging: "التغليف",
    pdf: "البطاقة التقنية PDF",
  },
};

export function productSpecRows(product: Product, locale: Locale) {
  const technical = product.technical[locale];
  const fallback = technicalFallback[locale];
  const labels = technicalLabels[locale];
  const findTechnical = (patterns: string[], fallbackValue: string) =>
    technical.find((item) => patterns.some((pattern) => item.toLocaleLowerCase().includes(pattern.toLocaleLowerCase()))) ?? fallbackValue;

  return [
    { label: labels.wood, value: findTechnical(["essence", "species", "نوع"], fallback.wood) },
    { label: labels.dimensions, value: findTechnical(["dimension", "format", "الأبعاد", "مقاس"], fallback.dimensions) },
    { label: labels.thickness, value: fallback.thickness },
    { label: labels.moisture, value: findTechnical(["humid", "moisture", "الرطوبة"], fallback.moisture) },
    { label: labels.tolerances, value: findTechnical(["tolérance", "tolerance", "تفاوت"], fallback.tolerances) },
    { label: labels.moq, value: findTechnical(["moq", "حد أدنى"], fallback.moq) },
    { label: labels.leadTime, value: fallback.leadTime },
    { label: labels.packaging, value: product.packaging[locale] },
    { label: labels.pdf, value: fallback.pdf },
  ];
}
