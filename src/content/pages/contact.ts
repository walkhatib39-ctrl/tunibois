import type { Locale } from "@/lib/locales";

type LocalizedText = Record<Locale, string>;

export const contactHero = {
  title: {
    fr: "Demande bois industrielle : devis, échantillons et export",
    en: "Industrial wood enquiries: quotes, samples and export",
    ar: "طلبات الخشب الصناعية: عروض أسعار وعينات وتصدير",
  },
  text: {
    fr: "Envoyez votre besoin avec produit, dimensions, quantités, pays de destination et contraintes techniques. Tunibois qualifie la demande pour répondre avec une base exploitable : faisabilité, délai, conditionnement et prochaines étapes.",
    en: "Send your requirement with product, dimensions, quantities, destination country and technical constraints. Tunibois qualifies the enquiry and replies with a workable basis: feasibility, lead time, packing and next steps.",
    ar: "أرسل احتياجك مع المنتج والأبعاد والكميات وبلد الوجهة والمتطلبات التقنية. تقوم Tunibois بتأهيل الطلب والرد بأساس عملي: الجدوى والمدة والتغليف والخطوات التالية.",
  },
  primary: {
    fr: "Demander un devis",
    en: "Request a quote",
    ar: "طلب عرض سعر",
  },
  secondary: {
    fr: "Demander un échantillon",
    en: "Request a sample",
    ar: "طلب عينة",
  },
} satisfies {
  primary: LocalizedText;
  secondary: LocalizedText;
  text: LocalizedText;
  title: LocalizedText;
};

export const contactPaths = [
  {
    anchor: "quote",
    title: {
      fr: "Demande de devis",
      en: "Quote request",
      ar: "طلب عرض سعر",
    },
    text: {
      fr: "Pour chiffrer un produit, valider un volume, préparer un conditionnement ou cadrer un délai de production.",
      en: "To price a product, validate volume, prepare packing or frame a production lead time.",
      ar: "لتسعير منتج أو تأكيد حجم أو تحضير تغليف أو تحديد مدة إنتاج.",
    },
  },
  {
    anchor: "sample",
    title: {
      fr: "Demande d'échantillon",
      en: "Sample request",
      ar: "طلب عينة",
    },
    text: {
      fr: "Pour vérifier une essence, une finition, une section, une tolérance ou une présentation avant commande.",
      en: "To check a wood species, finish, section, tolerance or presentation before ordering.",
      ar: "للتحقق من نوع الخشب أو التشطيب أو المقطع أو التفاوتات أو العرض قبل الطلب.",
    },
  },
  {
    anchor: "commercial-contact",
    title: {
      fr: "Contact commercial",
      en: "Commercial contact",
      ar: "تواصل تجاري",
    },
    text: {
      fr: "Pour parler export, distribution, partenariat industriel ou cahier des charges spécifique.",
      en: "For export, distribution, industrial partnership or specific specification discussions.",
      ar: "لنقاش التصدير أو التوزيع أو الشراكة الصناعية أو دفتر شروط خاص.",
    },
  },
] satisfies Array<{
  anchor: string;
  text: LocalizedText;
  title: LocalizedText;
}>;

export const contactChecklist = [
  {
    fr: "Produit ou famille de produits recherchés",
    en: "Requested product or product family",
    ar: "المنتج أو عائلة المنتجات المطلوبة",
  },
  {
    fr: "Dimensions, épaisseurs, tolérances ou plan technique",
    en: "Dimensions, thicknesses, tolerances or technical drawing",
    ar: "الأبعاد والسماكات والتفاوتات أو الرسم التقني",
  },
  {
    fr: "Quantité, MOQ souhaité et fréquence possible",
    en: "Quantity, expected MOQ and possible frequency",
    ar: "الكمية والحد الأدنى المتوقع والتكرار الممكن",
  },
  {
    fr: "Pays de destination et mode de transport envisagé",
    en: "Destination country and expected transport mode",
    ar: "بلد الوجهة وطريقة النقل المتوقعة",
  },
  {
    fr: "Conditionnement, étiquetage ou documents export attendus",
    en: "Expected packing, labeling or export documents",
    ar: "التغليف أو الوسم أو وثائق التصدير المطلوبة",
  },
] satisfies LocalizedText[];

export const contactQualification = {
  title: {
    fr: "Les informations qui accélèrent une réponse sérieuse",
    en: "Information that speeds up a serious response",
    ar: "المعلومات التي تسرع ردا جديا",
  },
  text: {
    fr: "Une demande complète permet d'éviter les échanges inutiles et de préparer une réponse adaptée au contexte industriel, logistique et commercial.",
    en: "A complete enquiry avoids unnecessary back-and-forth and helps prepare a response adapted to the industrial, logistics and commercial context.",
    ar: "يساعد الطلب الكامل على تجنب المراسلات غير الضرورية وتحضير رد مناسب للسياق الصناعي واللوجستي والتجاري.",
  },
  response: {
    fr: "Réponse commerciale",
    en: "Commercial reply",
    ar: "رد تجاري",
  },
  responseText: {
    fr: "Les demandes exploitables sont orientées vers devis, échantillon, précision technique ou échange export selon leur niveau de maturité.",
    en: "Workable enquiries are routed to quotation, sample, technical clarification or export discussion depending on their maturity.",
    ar: "يتم توجيه الطلبات القابلة للدراسة إلى عرض سعر أو عينة أو توضيح تقني أو نقاش تصدير حسب مستوى جاهزيتها.",
  },
} satisfies {
  response: LocalizedText;
  responseText: LocalizedText;
  text: LocalizedText;
  title: LocalizedText;
};

export const contactForms = {
  quote: {
    title: {
      fr: "Demande de devis export",
      en: "Export quote request",
      ar: "طلب عرض تصدير",
    },
    text: {
      fr: "Indiquez le produit, la quantité, les dimensions, la destination et les contraintes attendues. Plus la demande est précise, plus la réponse peut être utile.",
      en: "Indicate the product, quantity, dimensions, destination and expected constraints. The more precise the enquiry, the more useful the reply can be.",
      ar: "اذكر المنتج والكمية والأبعاد والوجهة والمتطلبات المتوقعة. كلما كان الطلب أدق كان الرد أكثر فائدة.",
    },
  },
  sample: {
    title: {
      fr: "Demande d'échantillon",
      en: "Sample request",
      ar: "طلب عينة",
    },
    text: {
      fr: "Précisez l'échantillon attendu, le contexte de validation et l'adresse de livraison pour étudier l'envoi possible.",
      en: "Specify the expected sample, validation context and delivery address so the possible shipment can be reviewed.",
      ar: "حدد العينة المطلوبة وسياق التحقق وعنوان التسليم لدراسة إمكانية الإرسال.",
    },
  },
  contact: {
    title: {
      fr: "Contact commercial",
      en: "Commercial contact",
      ar: "تواصل تجاري",
    },
    text: {
      fr: "Utilisez ce formulaire pour une prise de contact export, distribution, partenariat ou demande industrielle qui ne rentre pas dans un devis immédiat.",
      en: "Use this form for export, distribution, partnership or industrial discussions that do not yet fit an immediate quotation.",
      ar: "استخدم هذا النموذج للتصدير أو التوزيع أو الشراكة أو النقاشات الصناعية التي لا تدخل بعد في عرض سعر مباشر.",
    },
  },
} satisfies Record<string, { text: LocalizedText; title: LocalizedText }>;
