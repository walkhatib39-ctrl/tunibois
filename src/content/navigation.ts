import { type Locale } from "@/lib/locales";
import { route, type RouteKey } from "@/lib/routes";

type NavItem = {
  key: RouteKey;
  label: Record<Locale, string>;
};

export const primaryNavigation: NavItem[] = [
  { key: "products", label: { fr: "Produits", en: "Products", ar: "المنتجات" } },
  { key: "woods", label: { fr: "Essences", en: "Woods", ar: "أنواع الخشب" } },
  { key: "factory", label: { fr: "Notre usine", en: "Factory", ar: "المصنع" } },
  { key: "export", label: { fr: "Export", en: "Export", ar: "التصدير" } },
  { key: "guides", label: { fr: "Guides", en: "Guides", ar: "الأدلة" } },
  { key: "contact", label: { fr: "Contact", en: "Contact", ar: "اتصل بنا" } },
];

export function navigationFor(locale: Locale) {
  return primaryNavigation.map((item) => ({
    href: route(item.key, locale),
    label: item.label[locale],
  }));
}
