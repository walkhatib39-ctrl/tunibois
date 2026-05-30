import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import type { Product } from "@/content/products";
import type { Locale } from "@/lib/locales";

type ProductHeroProps = {
  locale: Locale;
  product: Product;
};

export function ProductHero({ locale, product }: ProductHeroProps) {
  return (
    <section className="bg-surface py-16">
      <Container className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">{product.eyebrow[locale]}</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-brand-strong sm:text-5xl">{product.headline[locale]}</h1>
          <p className="mt-5 text-lg leading-8 text-muted">{product.summary[locale]}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#rfq">{locale === "fr" ? "Demander un devis" : locale === "en" ? "Request a quote" : "طلب عرض سعر"}</Button>
            <Button href="#sample" variant="outline">
              {locale === "fr" ? "Demander un échantillon" : locale === "en" ? "Request a sample" : "طلب عينة"}
            </Button>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-line bg-surface-strong">
          <Image src={product.image} alt={product.name[locale]} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
      </Container>
    </section>
  );
}
