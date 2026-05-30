import { Container } from "@/components/ui/container";
import { InfoList } from "@/components/ui/info-list";
import type { Product } from "@/content/products";
import type { Locale } from "@/lib/locales";

type ProductInfoListsProps = {
  locale: Locale;
  product: Product;
};

export function ProductInfoLists({ locale, product }: ProductInfoListsProps) {
  return (
    <section className="py-16">
      <Container className="grid gap-10 lg:grid-cols-3">
        <InfoList title={locale === "fr" ? "Applications" : locale === "en" ? "Applications" : "الاستخدامات"} items={product.applications[locale]} />
        <InfoList title={locale === "fr" ? "Variantes" : locale === "en" ? "Variants" : "الأنواع"} items={product.variants[locale]} />
        <InfoList title={locale === "fr" ? "Points techniques" : locale === "en" ? "Technical points" : "نقاط تقنية"} items={product.technical[locale]} />
      </Container>
    </section>
  );
}
