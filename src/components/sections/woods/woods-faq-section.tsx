import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { woodsFaq, woodsFaqIntro } from "@/content/pages/woods";
import type { Locale } from "@/lib/locales";

type WoodsFaqSectionProps = {
  locale: Locale;
};

const title = {
  fr: "Questions fréquentes sur le choix des essences",
  en: "Frequent questions about choosing species",
  ar: "أسئلة متكررة حول اختيار أنواع الخشب",
};

export function WoodsFaqSection({ locale }: WoodsFaqSectionProps) {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <Container>
        <SectionHeading title={title[locale]} intro={woodsFaqIntro[locale]} />

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {woodsFaq.map((item) => (
            <details key={item.q.fr} className="group rounded-lg border border-line bg-background p-5 shadow-sm">
              <summary className="cursor-pointer list-none text-lg font-semibold leading-tight text-brand-strong marker:hidden">
                <span className="flex items-start justify-between gap-5">
                  {item.q[locale]}
                  <span className="mt-0.5 text-xl leading-none text-accent transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-4 text-sm leading-7 text-muted">{item.a[locale]}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
