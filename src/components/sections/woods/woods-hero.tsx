import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { assets } from "@/content/assets";
import { woodsHero, woodsHeroHighlights } from "@/content/pages/woods";
import type { Locale } from "@/lib/locales";
import { route } from "@/lib/routes";

type WoodsHeroProps = {
  locale: Locale;
};

export function WoodsHero({ locale }: WoodsHeroProps) {
  return (
    <section className="overflow-hidden bg-brand text-white">
      <Container className="grid gap-10 py-12 sm:py-14 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">{woodsHero.title[locale]}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/76">{woodsHero.text[locale]}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={`${route("contact", locale)}#quote`}>{woodsHero.primary[locale]}</Button>
            <Button href="#comparaison-essences" variant="outline" className="border-white/35 text-white hover:bg-white/10">
              {woodsHero.secondary[locale]}
              <FontAwesomeIcon icon={faArrowRight} className="size-3" aria-hidden />
            </Button>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-white/14 bg-white/14 sm:grid-cols-3">
            {woodsHeroHighlights.map((item) => (
              <article key={item.title.fr} className="bg-brand p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-accent-soft">
                  <FontAwesomeIcon icon={faCheckCircle} className="size-4" aria-hidden />
                  {item.title[locale]}
                </div>
                <p className="mt-3 text-sm leading-6 text-white/68">{item.text[locale]}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative min-h-[320px] overflow-hidden rounded-lg border border-white/14 bg-white/8 shadow-sm sm:min-h-[430px]">
          <Image
            src={assets.woodBoards.src}
            alt={assets.woodBoards.alt}
            fill
            priority
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand/94 via-brand/12 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5">
            <p className="max-w-lg text-sm font-semibold leading-6 text-white/88">{woodsHero.imageCaption[locale]}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
