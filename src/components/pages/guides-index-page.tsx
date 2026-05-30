import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/sections/shared/page-hero";
import { Container } from "@/components/ui/container";
import type { Locale } from "@/lib/locales";

type GuidesIndexPageProps = {
  locale: Locale;
};

export function GuidesIndexPage({ locale }: GuidesIndexPageProps) {
  const hero = {
    title: {
      fr: "Guides techniques bois et export",
      en: "Wood and export technical guides",
      ar: "أدلة تقنية حول الخشب والتصدير",
    },
    text: {
      fr: "La base éditoriale SEO est prête. Les guides seront ajoutés par lots, avec priorité aux sujets commerciaux et techniques utiles aux acheteurs.",
      en: "The SEO editorial base is ready. Guides will be added in batches, prioritizing commercial and technical topics useful to buyers.",
      ar: "القاعدة التحريرية جاهزة، وستضاف الأدلة على دفعات مع أولوية للمواضيع التجارية والتقنية المفيدة للمشترين.",
    },
  };

  const plannedGuides =
    locale === "fr"
      ? "Premiers guides prévus: choisir une palette export, préparer un cahier des charges bois, comprendre les MOQ et le conditionnement export."
      : locale === "en"
        ? "Planned first guides: choosing an export pallet, preparing a wood specification, understanding MOQ and export packing."
        : "الأدلة الأولى المخطط لها: اختيار منصة تصدير، إعداد مواصفات خشبية، فهم الحد الأدنى والتغليف للتصدير.";

  return (
    <PageShell locale={locale} routeKey="guides">
      <PageHero locale={locale} routeKey="guides" title={hero.title} text={hero.text} />
      <section className="py-16">
        <Container>
          <div className="rounded-lg border border-dashed border-line bg-surface p-8 text-muted">{plannedGuides}</div>
        </Container>
      </section>
    </PageShell>
  );
}
