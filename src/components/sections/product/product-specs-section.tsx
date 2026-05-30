import { ProductSpecTable } from "@/components/product/product-spec-table";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { productSpecRows } from "@/content/product-specs";
import type { Product } from "@/content/products";
import type { Locale } from "@/lib/locales";

type ProductSpecsSectionProps = {
  locale: Locale;
  product: Product;
};

export function ProductSpecsSection({ locale, product }: ProductSpecsSectionProps) {
  return (
    <section className="pb-16">
      <Container className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <SectionHeading
          eyebrow={locale === "fr" ? "Fiche technique" : locale === "en" ? "Technical sheet" : "البطاقة التقنية"}
          title={locale === "fr" ? "Base de spécification B2B" : locale === "en" ? "B2B specification basis" : "أساس المواصفات المهنية"}
          intro={
            locale === "fr"
              ? "Les valeurs finales sont confirmées après validation du cahier des charges, du volume et de la destination."
              : locale === "en"
                ? "Final values are confirmed after validation of the specification, volume and destination."
                : "تؤكد القيم النهائية بعد التحقق من المواصفات والكمية والوجهة."
          }
        />
        <ProductSpecTable rows={productSpecRows(product, locale)} />
      </Container>
    </section>
  );
}
