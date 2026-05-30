import { notFound } from "next/navigation";
import { getProductByRouteKey } from "@/content/products";
import type { Locale } from "@/lib/locales";
import { routeKeyForPath, routePaths, type RouteKey } from "@/lib/routes";

export function resolveRoute(locale: Locale, slug?: string[]): RouteKey {
  const suffix = slug && slug.length > 0 ? `${slug.join("/")}/` : "";
  const pathname = locale === "fr" ? `/${suffix}` : `/${locale}/${suffix}`;
  const routeKey = routeKeyForPath(pathname);

  if (!routeKey) {
    notFound();
  }

  return routeKey;
}

export function routeKind(routeKey: RouteKey) {
  return getProductByRouteKey(routeKey) ? "product" : "page";
}

export function staticParamsFor(locale: Locale) {
  return (Object.keys(routePaths) as RouteKey[])
    .map((key) => routePaths[key][locale])
    .filter((path) => path !== "/" && path !== `/${locale}/`)
    .map((path) => {
      const withoutLocale = locale === "fr" ? path : path.replace(new RegExp(`^/${locale}/?`), "/");
      const slug = withoutLocale.replace(/^\/|\/$/g, "").split("/").filter(Boolean);
      return { slug };
    });
}
