import { ExportBuyerAssuranceSection } from "@/components/sections/export/export-buyer-assurance-section";
import { ExportCtaSection } from "@/components/sections/export/export-cta-section";
import { ExportDocumentationSection } from "@/components/sections/export/export-documentation-section";
import { ExportFaqSection } from "@/components/sections/export/export-faq-section";
import { ExportHero } from "@/components/sections/export/export-hero";
import { ExportLogisticsSection } from "@/components/sections/export/export-logistics-section";
import { ExportMarketsSection } from "@/components/sections/export/export-markets-section";
import { ExportProcessSection } from "@/components/sections/export/export-process-section";
import { PageShell } from "@/components/site/page-shell";
import { exportFaq } from "@/content/pages/export";
import { faqPageJsonLd, JsonLdScript } from "@/lib/jsonld";
import type { Locale } from "@/lib/locales";

type ExportPageProps = {
  locale: Locale;
};

export function ExportPage({ locale }: ExportPageProps) {
  return (
    <PageShell locale={locale} routeKey="export">
      <JsonLdScript data={faqPageJsonLd(exportFaq, locale)} />
      <ExportHero locale={locale} />
      <ExportBuyerAssuranceSection locale={locale} />
      <ExportProcessSection locale={locale} />
      <ExportDocumentationSection locale={locale} />
      <ExportLogisticsSection locale={locale} />
      <ExportMarketsSection locale={locale} />
      <ExportFaqSection locale={locale} />
      <ExportCtaSection locale={locale} />
    </PageShell>
  );
}
