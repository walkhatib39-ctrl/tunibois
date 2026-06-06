import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { woodsCta } from "@/content/pages/woods";
import type { Locale } from "@/lib/locales";
import { route } from "@/lib/routes";

type WoodsCtaSectionProps = {
  locale: Locale;
};

export function WoodsCtaSection({ locale }: WoodsCtaSectionProps) {
  return (
    <section className="bg-brand py-16 text-white sm:py-20">
      <Container>
        <div className="max-w-4xl">
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">{woodsCta.title[locale]}</h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-white/74 sm:text-lg">{woodsCta.text[locale]}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={`${route("contact", locale)}#quote`}>
              {woodsCta.primary[locale]}
              <FontAwesomeIcon icon={faArrowRight} className="size-3" aria-hidden />
            </Button>
            <Button href={route("products", locale)} variant="outline" className="border-white/35 text-white hover:bg-white/10">
              {woodsCta.secondary[locale]}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
