import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faFileInvoice, faRulerCombined, faTruck } from "@fortawesome/free-solid-svg-icons";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { factoryAssurances, factoryPromise } from "@/content/pages/factory";
import type { Locale } from "@/lib/locales";

type FactoryPromiseSectionProps = {
  locale: Locale;
};

const icons = [faFileInvoice, faRulerCombined, faCheckCircle, faTruck];

export function FactoryPromiseSection({ locale }: FactoryPromiseSectionProps) {
  return (
    <section className="bg-background py-16 sm:py-20">
      <Container>
        <SectionHeading title={factoryPromise.title[locale]} intro={factoryPromise.text[locale]} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {factoryAssurances.map((item, index) => (
            <article key={item.title.fr} className="rounded-lg border border-line bg-surface p-5 shadow-sm">
              <div className="flex size-11 items-center justify-center rounded-md bg-brand text-accent-soft">
                <FontAwesomeIcon icon={icons[index]} className="size-5" aria-hidden />
              </div>
              <h2 className="mt-5 text-xl font-semibold leading-tight text-brand-strong">{item.title[locale]}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{item.text[locale]}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
