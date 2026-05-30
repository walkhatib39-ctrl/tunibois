import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import type { Locale } from "@/lib/locales";
import { route } from "@/lib/routes";

type ProductsHeroProps = {
  locale: Locale;
  text: Record<Locale, string>;
  title: Record<Locale, string>;
};

export function ProductsHero({ locale, text, title }: ProductsHeroProps) {
  return (
    <section className="overflow-hidden bg-brand text-white">
      <Container className="py-14 sm:py-16">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">{title[locale]}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/76">{text[locale]}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={route("contact", locale)}>{locale === "fr" ? "Demander un devis" : locale === "en" ? "Request a quote" : "طلب عرض سعر"}</Button>
            <Button href="#product-families" variant="outline" className="border-white/35 text-white hover:bg-white/10">
              {locale === "fr" ? "Voir les catégories" : locale === "en" ? "View categories" : "عرض الفئات"}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
