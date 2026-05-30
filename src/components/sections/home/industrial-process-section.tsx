import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { industrialProcess, industrialProcessIntro } from "@/content/pages/home";
import type { Locale } from "@/lib/locales";

type IndustrialProcessSectionProps = {
  locale: Locale;
};

export function IndustrialProcessSection({ locale }: IndustrialProcessSectionProps) {
  const title =
    locale === "fr"
      ? "De la demande technique à la préparation export"
      : locale === "en"
        ? "From technical request to export preparation"
        : "من الطلب التقني إلى التحضير للتصدير";

  return (
    <section className="bg-brand py-20 text-white">
      <Container>
        <SectionHeading eyebrow="Process" title={title} intro={industrialProcessIntro[locale]} className="text-white [&_h2]:text-white [&_p]:text-white/72" />
        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-white/14 bg-white/14 md:grid-cols-2 lg:grid-cols-4">
          {industrialProcess.map((step, index) => (
            <article key={step.title.fr} className="bg-brand p-6">
              <div className="text-sm font-semibold text-accent-soft">0{index + 1}</div>
              <h3 className="mt-5 text-xl font-semibold">{step.title[locale]}</h3>
              <p className="mt-4 text-sm leading-7 text-white/70">{step.text[locale]}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
