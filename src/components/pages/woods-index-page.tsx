import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/sections/shared/page-hero";
import { Container } from "@/components/ui/container";
import { woodSpecies } from "@/content/woods";
import type { Locale } from "@/lib/locales";

type WoodsIndexPageProps = {
  locale: Locale;
};

export function WoodsIndexPage({ locale }: WoodsIndexPageProps) {
  const hero = {
    title: {
      fr: "Essences de bois et applications industrielles",
      en: "Wood species and industrial applications",
      ar: "أنواع الخشب والتطبيقات الصناعية",
    },
    text: {
      fr: "Les essences sont présentées comme bases de discussion technique. Les disponibilités, sections et finitions seront validées selon le projet.",
      en: "Species are presented as a technical discussion basis. Availability, sections and finishes are confirmed by project.",
      ar: "تعرض الأنواع كأساس للنقاش التقني، وتؤكد التوفرات والمقاطع والتشطيبات حسب المشروع.",
    },
  };

  return (
    <PageShell locale={locale} routeKey="woods">
      <PageHero locale={locale} routeKey="woods" title={hero.title} text={hero.text} />
      <section className="py-16">
        <Container className="grid gap-6 md:grid-cols-2">
          {woodSpecies.map((wood) => (
            <article key={wood.id} className="rounded-lg border border-line bg-surface p-6">
              <h2 className="text-2xl font-semibold text-brand-strong">{wood.title[locale]}</h2>
              <p className="mt-3 leading-7 text-muted">{wood.summary[locale]}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {wood.uses[locale].map((use) => (
                  <span key={use} className="rounded-md bg-surface-strong px-3 py-2 text-sm font-semibold text-brand">
                    {use}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </Container>
      </section>
    </PageShell>
  );
}
