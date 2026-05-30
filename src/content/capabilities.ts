import type { Locale } from "@/lib/locales";

export type CapabilityId = "sourcing" | "custom" | "quality" | "packing" | "logistics" | "international";

export type CapabilityItem = {
  id: CapabilityId;
  label: Record<Locale, string>;
};

export const capabilities: CapabilityItem[] = [
  { id: "sourcing", label: { fr: "Approvisionnement et sciage", en: "Sourcing and sawing", ar: "توريد ونشر" } },
  { id: "custom", label: { fr: "Fabrication sur mesure", en: "Custom manufacturing", ar: "تصنيع حسب الطلب" } },
  { id: "quality", label: { fr: "Contrôle qualité", en: "Quality control", ar: "مراقبة الجودة" } },
  { id: "packing", label: { fr: "Conditionnement export", en: "Export packing", ar: "تغليف للتصدير" } },
  { id: "logistics", label: { fr: "Flux logistiques", en: "Logistics flows", ar: "تدفقات لوجستية" } },
  { id: "international", label: { fr: "Accompagnement international", en: "International support", ar: "مرافقة دولية" } },
];
