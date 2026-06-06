import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { exportProcess, exportProcessIntro } from "@/content/pages/export";
import type { Locale } from "@/lib/locales";

type ExportProcessSectionProps = {
  locale: Locale;
};

const title = {
  fr: "Un process export lisible avant chargement",
  en: "A clear export process before loading",
  ar: "مسار تصدير واضح قبل التحميل",
};

export function ExportProcessSection({ locale }: ExportProcessSectionProps) {
  return (
    <section id="process-export" className="scroll-mt-36 bg-brand py-16 text-white sm:py-20">
      <Container>
        <SectionHeading title={title[locale]} intro={exportProcessIntro[locale]} className="text-white [&_h2]:text-white [&_p]:text-white/72" />

        <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-white/14 bg-white/14 md:grid-cols-2 lg:grid-cols-3">
          {exportProcess.map((step, index) => (
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
