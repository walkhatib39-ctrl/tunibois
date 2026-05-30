import { ProductCard } from "@/components/cards/product-card";
import { CtaBand } from "@/components/site/cta-band";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/sections/shared/page-hero";
import { Container } from "@/components/ui/container";
import { homeCopy } from "@/content/pages/home";
import { products } from "@/content/products";
import type { Locale } from "@/lib/locales";
import { route } from "@/lib/routes";

type ProductsIndexPageProps = {
  locale: Locale;
};

export function ProductsIndexPage({ locale }: ProductsIndexPageProps) {
  const shared = homeCopy.shared[locale];
  const hero = {
    title: {
      fr: "Produits bois pour industriels, distributeurs et importateurs",
      en: "Wood products for manufacturers, distributors and importers",
      ar: "منتجات خشبية للصناعيين والموزعين والمستوردين",
    },
    text: {
      fr: "Un catalogue de départ structuré par familles, avec des variantes à affiner selon vos marchés et vos cahiers des charges.",
      en: "A starter catalogue structured by product families, with variants to refine according to markets and specifications.",
      ar: "كتالوج أولي منظم حسب العائلات مع متغيرات يمكن ضبطها حسب الأسواق والمواصفات.",
    },
  };

  return (
    <PageShell locale={locale} routeKey="products">
      <PageHero locale={locale} routeKey="products" title={hero.title} text={hero.text} />
      <section className="py-16">
        <Container className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} locale={locale} />
          ))}
        </Container>
      </section>
      <CtaBand
        title={locale === "fr" ? "Demande de devis" : locale === "en" ? "RFQ" : "طلب عرض"}
        text={shared.formText}
        href={route("contact", locale)}
        action={homeCopy.hero[locale].quote}
      />
    </PageShell>
  );
}
