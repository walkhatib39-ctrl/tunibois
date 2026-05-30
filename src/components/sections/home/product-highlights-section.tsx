import { ProductCard } from "@/components/cards/product-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { products } from "@/content/products";
import { homeCopy, productHighlightsIntro } from "@/content/pages/home";
import type { Locale } from "@/lib/locales";

type ProductHighlightsSectionProps = {
  locale: Locale;
};

export function ProductHighlightsSection({ locale }: ProductHighlightsSectionProps) {
  const shared = homeCopy.shared[locale];

  return (
    <section className="py-20">
      <Container>
        <SectionHeading eyebrow="B2B catalogue" title={shared.products} intro={productHighlightsIntro[locale]} />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} locale={locale} />
          ))}
        </div>
      </Container>
    </section>
  );
}
