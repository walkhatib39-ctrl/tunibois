import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { factoryProcess, factoryProcessIntro } from "@/content/pages/factory";
import type { Locale } from "@/lib/locales";

type FactoryProcessSectionProps = {
  locale: Locale;
};

const title = {
  fr: "Un process lisible de la demande au départ marchandise",
  en: "A clear process from enquiry to goods dispatch",
  ar: "مسار واضح من الطلب إلى خروج البضاعة",
};

export function FactoryProcessSection({ locale }: FactoryProcessSectionProps) {
  return (
    <section id="factory-process" className="scroll-mt-28 bg-brand py-16 text-white sm:py-20">
      <Container>
        <SectionHeading title={title[locale]} intro={factoryProcessIntro[locale]} className="text-white [&_h2]:text-white [&_p]:text-white/72" />
        <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-white/14 bg-white/14 md:grid-cols-2 lg:grid-cols-3">
          {factoryProcess.map((step, index) => (
            <article key={step.title.fr} className="bg-brand p-6">
              <div className="text-sm font-semibold text-accent-soft">0{index + 1}</div>
              <h2 className="mt-5 text-xl font-semibold leading-tight">{step.title[locale]}</h2>
              <p className="mt-4 text-sm leading-7 text-white/70">{step.text[locale]}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
