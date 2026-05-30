import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeFaq, homeFaqIntro } from "@/content/pages/home";
import type { Locale } from "@/lib/locales";

type HomeFaqSectionProps = {
  locale: Locale;
};

export function HomeFaqSection({ locale }: HomeFaqSectionProps) {
  const title =
    locale === "fr" ? "Questions des acheteurs industriels et export" : locale === "en" ? "Industrial and export buyer questions" : "أسئلة المشترين الصناعيين والمصدرين";

  return (
    <section className="py-20">
      <Container className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <SectionHeading eyebrow="FAQ" title={title} intro={homeFaqIntro[locale]} />
        <div className="divide-y divide-line border-y border-line">
          {homeFaq.map((item) => (
            <article key={item.q.fr} className="py-6">
              <h3 className="text-xl font-semibold text-brand-strong">{item.q[locale]}</h3>
              <p className="mt-3 leading-7 text-muted">{item.a[locale]}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
