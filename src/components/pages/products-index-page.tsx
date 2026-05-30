import Image from "next/image";
import { ProductCard } from "@/components/cards/product-card";
import { CtaBand } from "@/components/site/cta-band";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/sections/shared/page-hero";
import { Container } from "@/components/ui/container";
import { homeCopy } from "@/content/pages/home";
import { productFamilies, productFamilyHref } from "@/content/product-families";
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
      fr: "Familles produits, variantes, contraintes techniques et fiches disponibles pour préparer une demande claire avant devis.",
      en: "Product families, variants, technical constraints and available sheets to prepare a clear request before quotation.",
      ar: "عائلات المنتجات والمتغيرات والمتطلبات التقنية والبطاقات المتاحة لتحضير طلب واضح قبل التسعير.",
    },
  };

  return (
    <PageShell locale={locale} routeKey="products">
      <PageHero locale={locale} routeKey="products" title={hero.title} text={hero.text} />
      <section className="border-b border-line bg-surface py-10">
        <Container>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-5">
            {productFamilies.map((family) => (
              <a
                key={family.id}
                href={productFamilyHref(family.id, locale)}
                className="rounded-md border border-line bg-background p-4 text-sm font-semibold text-brand transition hover:border-accent hover:text-accent"
              >
                {family.title[locale]}
              </a>
            ))}
          </div>
        </Container>
      </section>
      <div className="divide-y divide-line">
        {productFamilies.map((family) => {
          const familyProducts = products.filter((product) => family.routeKeys.includes(product.routeKey));

          return (
            <section key={family.id} id={family.id} className="scroll-mt-28 py-16">
              <Container>
                <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
                  <div className="lg:sticky lg:top-28">
                    <div className="overflow-hidden rounded-lg border border-line bg-surface">
                      <div className="relative aspect-[4/3]">
                        <Image src={family.image} alt={family.imageAlt[locale]} fill sizes="(min-width: 1024px) 38vw, 100vw" className="object-cover" />
                      </div>
                      <div className="p-6">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                          {locale === "fr" ? "Famille produit" : locale === "en" ? "Product family" : "عائلة منتجات"}
                        </p>
                        <h2 className="mt-3 text-3xl font-semibold leading-tight text-brand-strong">{family.title[locale]}</h2>
                        <p className="mt-4 leading-7 text-muted">{family.text[locale]}</p>
                        <p className="mt-4 text-sm leading-6 text-brand">{family.proof[locale]}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {family.examples[locale].map((example) => (
                        <div key={example} className="rounded-md border border-line bg-background p-4 text-sm font-semibold text-brand">
                          {example}
                        </div>
                      ))}
                    </div>
                    {familyProducts.length > 0 ? (
                      <div className="mt-8 grid gap-6 md:grid-cols-2">
                        {familyProducts.map((product) => (
                          <ProductCard key={product.id} product={product} locale={locale} />
                        ))}
                      </div>
                    ) : (
                      <div className="mt-8 rounded-lg border border-line bg-background p-6">
                        <h3 className="text-xl font-semibold text-brand-strong">
                          {locale === "fr" ? "Étude sur cahier des charges" : locale === "en" ? "Specification-based review" : "دراسة حسب دفتر الشروط"}
                        </h3>
                        <p className="mt-3 leading-7 text-muted">
                          {locale === "fr"
                            ? "Envoyez vos plans, dimensions, essences, quantités et contraintes de finition pour vérifier la faisabilité et préparer une réponse commerciale."
                            : locale === "en"
                              ? "Send drawings, dimensions, species, quantities and finish constraints to review feasibility and prepare a commercial answer."
                              : "أرسل الرسومات والأبعاد وأنواع الخشب والكميات ومتطلبات التشطيب لدراسة الجدوى وتحضير رد تجاري."}
                        </p>
                        <a href={route("contact", locale)} className="mt-5 inline-flex text-sm font-semibold text-accent hover:text-brand">
                          {homeCopy.hero[locale].quote}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </Container>
            </section>
          );
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
