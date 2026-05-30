import type { Metadata } from "next";
import { site } from "@/content/site";
import { routeAlternates, type RouteKey } from "@/lib/routes";

type SeoInput = {
  title: string;
  description: string;
  routeKey: RouteKey;
  image?: string;
};

export function absoluteUrl(path: string) {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? `https://${site.domain}`;
  return new URL(path, base).toString();
}

export function pageMetadata({ title, description, routeKey, image }: SeoInput): Metadata {
  const alternates = routeAlternates(routeKey);
  const canonical = absoluteUrl(alternates.canonical);
  const ogImage = image ? absoluteUrl(image) : absoluteUrl("/assets/tunibois/hero-industrial-wood.jpg");

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: Object.fromEntries(
        Object.entries(alternates.languages).map(([locale, path]) => [locale, absoluteUrl(path)]),
      ),
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: site.name,
      images: [{ url: ogImage }],
      locale: "fr_TN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
