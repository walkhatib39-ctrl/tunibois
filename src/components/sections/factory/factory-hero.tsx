import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { assets } from "@/content/assets";
import { factoryHero } from "@/content/pages/factory";
import type { Locale } from "@/lib/locales";
import { route } from "@/lib/routes";

type FactoryHeroProps = {
  locale: Locale;
};

export function FactoryHero({ locale }: FactoryHeroProps) {
  return (
    <section className="overflow-hidden bg-brand text-white">
      <Container className="grid gap-10 py-12 sm:py-14 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">{factoryHero.title[locale]}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/76">{factoryHero.text[locale]}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={route("contact", locale)}>{factoryHero.primary[locale]}</Button>
            <Button href="#factory-process" variant="outline" className="border-white/35 text-white hover:bg-white/10">
              {factoryHero.secondary[locale]}
              <FontAwesomeIcon icon={faArrowRight} className="size-3" aria-hidden />
            </Button>
          </div>
        </div>

        <div className="relative min-h-[300px] overflow-hidden rounded-lg border border-white/14 bg-white/8 shadow-sm sm:min-h-[380px]">
          <Image
            src={assets.factoryTechnology.src}
            alt={assets.factoryTechnology.alt}
            fill
            priority
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand/92 to-transparent p-5">
            <p className="max-w-md text-sm font-semibold leading-6 text-white/86">
              {locale === "fr"
                ? "Ligne de transformation bois, préparation matière et organisation de production."
                : locale === "en"
                  ? "Wood transformation line, material preparation and production organization."
                  : "خط تحويل الخشب وتحضير المادة وتنظيم الإنتاج."}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
