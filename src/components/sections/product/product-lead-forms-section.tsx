import { LeadForm } from "@/components/forms/lead-form";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Product } from "@/content/products";
import type { Locale } from "@/lib/locales";
import { route } from "@/lib/routes";

type ProductLeadFormsSectionProps = {
  locale: Locale;
  product: Product;
};

export function ProductLeadFormsSection({ locale, product }: ProductLeadFormsSectionProps) {
  return (
    <>
      <section id="rfq" className="py-16">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading
              eyebrow={locale === "fr" ? "Devis" : locale === "en" ? "RFQ" : "طلب عرض"}
              title={locale === "fr" ? "Spécifications et devis" : locale === "en" ? "Specifications and quote" : "المواصفات وعرض السعر"}
              intro={product.packaging[locale]}
            />
          </div>
          <LeadForm mode="quote" locale={locale} product={product.name[locale]} sourcePath={route(product.routeKey, locale)} />
        </Container>
      </section>
      <section id="sample" className="pb-16">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading
              eyebrow="Sample"
              title={locale === "fr" ? "Demande d'échantillon" : locale === "en" ? "Sample request" : "طلب عينة"}
              intro={
                locale === "fr"
                  ? "Indiquez le produit, le pays et l'usage prévu pour préparer une réponse adaptée."
                  : locale === "en"
                    ? "Share the product, country and intended use so we can prepare a relevant reply."
                    : "اذكر المنتج والبلد والاستخدام المتوقع لنحضر ردا مناسبا."
              }
            />
          </div>
          <LeadForm mode="sample" locale={locale} product={product.name[locale]} sourcePath={route(product.routeKey, locale)} />
        </Container>
      </section>
    </>
  );
}
