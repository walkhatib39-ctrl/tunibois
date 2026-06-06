import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen, faCheckCircle, faGlobe, faIndustry, faRulerCombined, faTruck } from "@fortawesome/free-solid-svg-icons";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { factoryCapabilities, factoryCapabilitiesIntro } from "@/content/pages/factory";
import type { Locale } from "@/lib/locales";

type FactoryCapabilitiesSectionProps = {
  locale: Locale;
};

const title = {
  fr: "Capacités industrielles utiles pour vos achats bois",
  en: "Industrial capabilities useful for your wood purchasing",
  ar: "قدرات صناعية مفيدة لشراء المنتجات الخشبية",
};

const icons = {
  custom: faRulerCombined,
  international: faGlobe,
  logistics: faTruck,
  packing: faBoxOpen,
  quality: faCheckCircle,
  sourcing: faIndustry,
};

export function FactoryCapabilitiesSection({ locale }: FactoryCapabilitiesSectionProps) {
  return (
    <section className="bg-background py-16 sm:py-20">
      <Container>
        <SectionHeading title={title[locale]} intro={factoryCapabilitiesIntro[locale]} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {factoryCapabilities.map((capability) => (
            <article key={capability.id} className="rounded-lg border border-line bg-surface p-6 shadow-sm">
              <FontAwesomeIcon icon={icons[capability.id]} className="size-6 text-accent" aria-hidden />
              <h2 className="mt-5 text-xl font-semibold leading-tight text-brand-strong">{capability.title[locale]}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{capability.text[locale]}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
