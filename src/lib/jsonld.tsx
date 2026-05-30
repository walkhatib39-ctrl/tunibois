import { site } from "@/content/site";
import type { Product } from "@/content/products";
import type { Locale } from "@/lib/locales";
import { route } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: absoluteUrl("/"),
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      addressCountry: "TN",
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: absoluteUrl("/"),
    potentialAction: {
      "@type": "SearchAction",
      target: `${absoluteUrl("/guides/")}?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function productJsonLd(product: Product, locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name[locale],
    description: product.summary[locale],
    image: product.gallery.map((image) => absoluteUrl(image)),
    brand: {
      "@type": "Brand",
      name: site.name,
    },
    category: product.eyebrow[locale],
    url: absoluteUrl(route(product.routeKey, locale)),
  };
}

export function JsonLdScript({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
