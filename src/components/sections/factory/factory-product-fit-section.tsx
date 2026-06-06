import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { assets } from "@/content/assets";
import { factoryProductFamilies, factoryProductFit } from "@/content/pages/factory";
import type { Locale } from "@/lib/locales";

type FactoryProductFitSectionProps = {
  locale: Locale;
};

export function FactoryProductFitSection({ locale }: FactoryProductFitSectionProps) {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <Container>
        <SectionHeading title={factoryProductFit.title[locale]} intro={factoryProductFit.text[locale]} />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {factoryProductFamilies.map((family) => {
            const image = assets[family.image as keyof typeof assets];

            return (
              <article key={family.title.fr} className="overflow-hidden rounded-lg border border-line bg-background shadow-sm">
                <div className="relative aspect-[16/10] bg-surface-strong">
                  <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <h2 className="text-xl font-semibold leading-tight text-brand-strong">{family.title[locale]}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted">{family.text[locale]}</p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
