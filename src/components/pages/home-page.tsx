import { BuyerSegmentsSection } from "@/components/sections/home/buyer-segments-section";
import { CapabilitiesSection } from "@/components/sections/home/capabilities-section";
import { ExportReadinessSection } from "@/components/sections/home/export-readiness-section";
import { FamiliesSection } from "@/components/sections/home/families-section";
import { HomeFaqSection } from "@/components/sections/home/home-faq-section";
import { HomeHero } from "@/components/sections/home/home-hero";
import { HomeQuoteSection } from "@/components/sections/home/home-quote-section";
import { IndustrialProcessSection } from "@/components/sections/home/industrial-process-section";
import { ProductHighlightsSection } from "@/components/sections/home/product-highlights-section";
import { TrustRail } from "@/components/sections/home/trust-rail";
import { PageShell } from "@/components/site/page-shell";
import type { Locale } from "@/lib/locales";

type HomePageProps = {
  locale: Locale;
};

export function HomePage({ locale }: HomePageProps) {
  return (
    <PageShell locale={locale} routeKey="home">
      <HomeHero locale={locale} />
      <TrustRail locale={locale} />
      <BuyerSegmentsSection locale={locale} />
      <ProductHighlightsSection locale={locale} />
      <IndustrialProcessSection locale={locale} />
      <FamiliesSection locale={locale} />
      <CapabilitiesSection locale={locale} />
      <ExportReadinessSection locale={locale} />
      <HomeFaqSection locale={locale} />
      <HomeQuoteSection locale={locale} />
    </PageShell>
  );
}
