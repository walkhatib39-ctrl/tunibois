export const locales = ["fr", "en", "ar"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";

export const localeLabels: Record<Locale, string> = {
  fr: "Français",
  en: "English",
  ar: "العربية",
};

export const localeDirections: Record<Locale, "ltr" | "rtl"> = {
  fr: "ltr",
  en: "ltr",
  ar: "rtl",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localized<T>(values: Record<Locale, T>, locale: Locale): T {
  return values[locale] ?? values[defaultLocale];
}
