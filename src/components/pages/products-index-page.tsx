import { ProductFamilyRail } from "@/components/sections/products/product-family-rail";
import { ProductFamilySection } from "@/components/sections/products/product-family-section";
import { ProductsHero } from "@/components/sections/products/products-hero";
import { CtaBand } from "@/components/site/cta-band";
import { PageShell } from "@/components/site/page-shell";
import { homeCopy } from "@/content/pages/home";
import { productFamilies } from "@/content/product-families";
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
      fr: "Catégories, produits, variantes et fiches disponibles pour préparer une demande claire avant devis.",
      en: "Categories, products, variants and available sheets to prepare a clear request before quotation.",
      ar: "الفئات والمنتجات والمتغيرات والبطاقات المتاحة لتحضير طلب واضح قبل التسعير.",
    },
  };

  return (
    <PageShell locale={locale} routeKey="products">
      <ProductsHero locale={locale} title={hero.title} text={hero.text} />
      <ProductFamilyRail locale={locale} />
      <div>
        {productFamilies.map((family, index) => {
          const familyProducts = products.filter((product) => family.routeKeys.includes(product.routeKey));

          return <ProductFamilySection key={family.id} family={family} index={index} locale={locale} products={familyProducts} />;
        })}
      </div>
      <CtaBand
        title={locale === "fr" ? "Demande de devis" : locale === "en" ? "RFQ" : "طلب عرض"}
        text={shared.formText}
        href={route("contact", locale)}
        action={homeCopy.hero[locale].quote}
      />
    </PageShell>
  );
}
