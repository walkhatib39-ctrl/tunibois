import { defaultLocale, locales, type Locale } from "@/lib/locales";

export type RouteKey =
  | "home"
  | "factory"
  | "export"
  | "contact"
  | "products"
  | "woods"
  | "guides"
  | "pallets"
  | "pellets"
  | "stirrers"
  | "iceCreamSticks"
  | "woodenCutlery"
  | "toothpicks";

export const routePaths: Record<RouteKey, Record<Locale, string>> = {
  home: { fr: "/", en: "/en/", ar: "/ar/" },
  factory: { fr: "/notre-usine/", en: "/en/about-us/", ar: "/ar/about-us/" },
  export: { fr: "/export/", en: "/en/export/", ar: "/ar/export/" },
  contact: { fr: "/contact/", en: "/en/contact/", ar: "/ar/contact/" },
  products: { fr: "/produits/", en: "/en/products/", ar: "/ar/products/" },
  woods: { fr: "/essences/", en: "/en/woods/", ar: "/ar/woods/" },
  guides: { fr: "/guides/", en: "/en/guides/", ar: "/ar/guides/" },
  pallets: {
    fr: "/palettes-en-bois/",
    en: "/en/products/wooden-pallets/",
    ar: "/ar/products/wooden-pallets/",
  },
  pellets: {
    fr: "/pellets-en-bois/",
    en: "/en/products/wood-pellets/",
    ar: "/ar/products/wood-pellets/",
  },
  stirrers: {
    fr: "/agitateur-de-cafe/",
    en: "/en/products/wooden-coffee-stirrers/",
    ar: "/ar/products/wooden-coffee-stirrers/",
  },
  iceCreamSticks: {
    fr: "/batonnets-pour-glaces/",
    en: "/en/products/ice-cream-sticks/",
    ar: "/ar/products/ice-cream-sticks/",
  },
  woodenCutlery: {
    fr: "/couverts-en-bois/",
    en: "/en/products/wooden-cutlery/",
    ar: "/ar/products/wooden-cutlery/",
  },
  toothpicks: {
    fr: "/cure-dent/",
    en: "/en/products/toothpicks/",
    ar: "/ar/products/toothpicks/",
  },
};

export function route(key: RouteKey, locale: Locale = defaultLocale) {
  return routePaths[key][locale];
}

export function routeKeyForPath(pathname: string): RouteKey | undefined {
  const normalized = pathname.endsWith("/") ? pathname : `${pathname}/`;

  return (Object.keys(routePaths) as RouteKey[]).find((key) =>
    locales.some((locale) => routePaths[key][locale] === normalized),
  );
}

export function routeAlternates(key: RouteKey) {
  return {
    canonical: routePaths[key][defaultLocale],
    languages: {
      fr: routePaths[key].fr,
      en: routePaths[key].en,
      ar: routePaths[key].ar,
    },
  };
}

export function allLocalizedRoutes() {
  return (Object.keys(routePaths) as RouteKey[]).flatMap((key) =>
    locales.map((locale) => ({
      key,
      locale,
      path: routePaths[key][locale],
    })),
  );
}
