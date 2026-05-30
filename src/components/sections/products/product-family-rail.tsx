import Image from "next/image";
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
              className="group grid min-w-[250px] grid-cols-[64px_1fr] items-center gap-3 rounded-lg border border-line bg-surface p-3 transition hover:-translate-y-0.5 hover:border-accent hover:shadow-sm lg:min-w-0 lg:flex-1"
            >
              <div className="relative size-16 overflow-hidden rounded-md bg-surface-strong">
                <Image src={family.image} alt="" fill sizes="64px" className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div>
                <span className="text-xs font-semibold text-accent">0{index + 1}</span>
                <p className="mt-1 text-sm font-semibold leading-5 text-brand-strong">{family.title[locale]}</p>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
