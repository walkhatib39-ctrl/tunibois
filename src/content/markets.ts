import type { Locale } from "@/lib/locales";

export const targetMarkets = ["France", "Belgique", "Allemagne", "Italie", "Espagne", "Pays-Bas", "Suisse", "Royaume-Uni", "UAE", "Maroc", "Algérie", "Sénégal"];

export const exportRegions = [
  {
    title: { fr: "Europe", en: "Europe", ar: "أوروبا" },
    countries: ["France", "Belgique", "Allemagne", "Italie", "Espagne", "Pays-Bas", "Suisse", "Royaume-Uni"],
  },
  {
    title: { fr: "Moyen-Orient", en: "Middle East", ar: "الشرق الأوسط" },
    countries: ["Émirats Arabes Unis", "Arabie Saoudite", "Qatar", "Koweït"],
  },
  {
    title: { fr: "Afrique", en: "Africa", ar: "أفريقيا" },
    countries: ["Maroc", "Algérie", "Sénégal", "Côte d'Ivoire"],
  },
] satisfies Array<{ title: Record<Locale, string>; countries: string[] }>;

export const exportDocuments = [
  { fr: "Facture export", en: "Export invoice", ar: "فاتورة تصدير" },
  { fr: "Packing list", en: "Packing list", ar: "قائمة التعبئة" },
  { fr: "Certificat d'origine", en: "Certificate of origin", ar: "شهادة المنشأ" },
  { fr: "Documents phytosanitaires selon destination", en: "Phytosanitary documents by destination", ar: "وثائق صحية نباتية حسب الوجهة" },
  { fr: "EUR.1 selon éligibilité", en: "EUR.1 when eligible", ar: "EUR.1 عند الأهلية" },
] satisfies Array<Record<Locale, string>>;
