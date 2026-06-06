import { WoodsApplicationsSection } from "@/components/sections/woods/woods-applications-section";
import { WoodsComparisonSection } from "@/components/sections/woods/woods-comparison-section";
import { WoodsCtaSection } from "@/components/sections/woods/woods-cta-section";
import { WoodsFaqSection } from "@/components/sections/woods/woods-faq-section";
import { WoodsHero } from "@/components/sections/woods/woods-hero";
import { WoodsQualificationSection } from "@/components/sections/woods/woods-qualification-section";
import { WoodsSpeciesSection } from "@/components/sections/woods/woods-species-section";
import { WoodsTechnicalCriteriaSection } from "@/components/sections/woods/woods-technical-criteria-section";
import { PageShell } from "@/components/site/page-shell";
import { woodsFaq } from "@/content/pages/woods";
import { faqPageJsonLd, JsonLdScript } from "@/lib/jsonld";
import type { Locale } from "@/lib/locales";

type WoodsIndexPageProps = {
  locale: Locale;
};

export function WoodsIndexPage({ locale }: WoodsIndexPageProps) {
  return (
    <PageShell locale={locale} routeKey="woods">
      <JsonLdScript data={faqPageJsonLd(woodsFaq, locale)} />
      <WoodsHero locale={locale} />
      <WoodsSpeciesSection locale={locale} />
      <WoodsComparisonSection locale={locale} />
      <WoodsTechnicalCriteriaSection locale={locale} />
      <WoodsApplicationsSection locale={locale} />
      <WoodsQualificationSection locale={locale} />
      <WoodsFaqSection locale={locale} />
      <WoodsCtaSection locale={locale} />
    </PageShell>
  );
}
