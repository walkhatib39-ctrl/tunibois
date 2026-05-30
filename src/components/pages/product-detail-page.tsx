import { ProductGallerySection } from "@/components/sections/product/product-gallery-section";
import { ProductHero } from "@/components/sections/product/product-hero";
import { ProductInfoLists } from "@/components/sections/product/product-info-lists";
import { ProductLeadFormsSection } from "@/components/sections/product/product-lead-forms-section";
import { ProductSpecsSection } from "@/components/sections/product/product-specs-section";
import { PageShell } from "@/components/site/page-shell";
import { getProductByRouteKey } from "@/content/products";
import { JsonLdScript, productJsonLd } from "@/lib/jsonld";
import type { Locale } from "@/lib/locales";
import type { RouteKey } from "@/lib/routes";

type ProductDetailPageProps = {
  locale: Locale;
  routeKey: RouteKey;
};

export function ProductDetailPage({ locale, routeKey }: ProductDetailPageProps) {
  const product = getProductByRouteKey(routeKey);

  if (!product) {
    return null;
  }

  return (
    <PageShell locale={locale} routeKey={routeKey}>
      <JsonLdScript data={productJsonLd(product, locale)} />
      <ProductHero locale={locale} product={product} />
      <ProductInfoLists locale={locale} product={product} />
      <ProductSpecsSection locale={locale} product={product} />
      <ProductGallerySection locale={locale} product={product} />
      <ProductLeadFormsSection locale={locale} product={product} />
    </PageShell>
  );
}
