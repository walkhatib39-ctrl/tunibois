import { Container } from "@/components/ui/container";
import { productFamilies, productFamilyHref } from "@/content/product-families";
import type { Locale } from "@/lib/locales";

type ProductFamilyRailProps = {
  locale: Locale;
};

export function ProductFamilyRail({ locale }: ProductFamilyRailProps) {
  return (
    <section id="product-families" className="border-b border-line bg-background">
      <Container className="py-5">
        <div className="flex gap-3 overflow-x-auto pb-2">
          {productFamilies.map((family, index) => (
            <a
              key={family.id}
              href={productFamilyHref(family.id, locale)}
              className="min-w-[210px] rounded-md border border-line bg-surface px-4 py-3 text-sm font-semibold text-brand transition hover:border-accent hover:text-accent lg:min-w-0 lg:flex-1"
            >
              <span className="mr-2 text-xs text-accent">0{index + 1}</span>
              {family.title[locale]}
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
