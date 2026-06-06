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
    fr: "Accéder au formulaire",
    en: "Go to the form",
    ar: "الانتقال إلى النموذج",
  },
} satisfies {
  primary: LocalizedText;
  text: LocalizedText;
  title: LocalizedText;
};

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
  commercialRequest: {
    title: {
      fr: "Demande de devis ou d'échantillon",
      en: "Quote or sample request",
      ar: "طلب عرض سعر أو عينة",
    },
    text: {
      fr: "Choisissez le type de demande, puis indiquez le produit, les quantités, la destination et les contraintes utiles à l'étude.",
      en: "Choose the enquiry type, then indicate the product, quantities, destination and useful constraints for review.",
      ar: "اختر نوع الطلب ثم اذكر المنتج والكميات والوجهة والمتطلبات المفيدة للدراسة.",
    },
  },
} satisfies Record<string, { text: LocalizedText; title: LocalizedText }>;

export const commercialRequestForm = {
  labels: {
    requestType: {
      fr: "Type de demande",
      en: "Enquiry type",
      ar: "نوع الطلب",
    },
    name: {
      fr: "Nom",
      en: "Name",
      ar: "الاسم",
    },
    company: {
      fr: "Société",
      en: "Company",
      ar: "الشركة",
    },
    country: {
      fr: "Pays de destination",
      en: "Destination country",
      ar: "بلد الوجهة",
    },
    phone: {
      fr: "Téléphone",
      en: "Phone",
      ar: "الهاتف",
    },
    email: {
      fr: "Email",
      en: "Email",
      ar: "البريد الإلكتروني",
    },
    product: {
      fr: "Produit recherché",
      en: "Requested product",
      ar: "المنتج المطلوب",
    },
    quantity: {
      fr: "Quantité ou volume",
      en: "Quantity or volume",
      ar: "الكمية أو الحجم",
    },
    deliveryAddress: {
      fr: "Adresse de livraison échantillon",
      en: "Sample delivery address",
      ar: "عنوان تسليم العينة",
    },
    message: {
      fr: "Dimensions, contraintes, finition, conditionnement ou message",
      en: "Dimensions, constraints, finish, packing or message",
      ar: "الأبعاد والمتطلبات والتشطيب والتغليف أو الرسالة",
    },
    submit: {
      fr: "Envoyer la demande",
      en: "Send enquiry",
      ar: "إرسال الطلب",
    },
    sending: {
      fr: "Envoi...",
      en: "Sending...",
      ar: "جار الإرسال...",
    },
    success: {
      fr: "Votre demande a bien été envoyée.",
      en: "Your enquiry has been sent.",
      ar: "تم إرسال طلبك بنجاح.",
    },
    error: {
      fr: "Impossible d'envoyer la demande. Merci de réessayer.",
      en: "The enquiry could not be sent. Please try again.",
      ar: "تعذر إرسال الطلب. الرجاء المحاولة مرة أخرى.",
    },
  },
  requestTypes: {
    quote: {
      fr: "Devis",
      en: "Quote",
      ar: "عرض سعر",
    },
    sample: {
      fr: "Échantillon",
      en: "Sample",
      ar: "عينة",
    },
  },
} satisfies {
  labels: Record<string, LocalizedText>;
  requestTypes: Record<"quote" | "sample", LocalizedText>;
};
