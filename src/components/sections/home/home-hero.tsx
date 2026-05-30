import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { assets } from "@/content/assets";
import { homeCopy } from "@/content/pages/home";
import type { Locale } from "@/lib/locales";
import { route } from "@/lib/routes";

type HomeHeroProps = {
  locale: Locale;
};

export function HomeHero({ locale }: HomeHeroProps) {
  const hero = homeCopy.hero[locale];

  return (
    <section className="relative overflow-hidden bg-brand text-white">
      <div className="absolute inset-0">
        <Image src={assets.heroIndustrialWood.src} alt={assets.heroIndustrialWood.alt} fill priority sizes="100vw" className="object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-strong via-brand-strong/90 to-brand/40" />
      </div>
      <Container className="relative grid min-h-[620px] items-center py-20">
        <div className="max-w-4xl">
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] sm:text-6xl">{hero.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">{hero.text}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={route("contact", locale)}>{hero.quote}</Button>
            <Button href={route("products", locale)} variant="outline" className="border-white/35 text-white hover:bg-white/10">
              {hero.catalogue}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
