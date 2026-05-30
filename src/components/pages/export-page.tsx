import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ProductSpecTable } from "@/components/product/product-spec-table";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/sections/shared/page-hero";
import { targetMarkets } from "@/content/markets";
import { homeCopy } from "@/content/pages/home";
import type { Locale } from "@/lib/locales";
import { route } from "@/lib/routes";

type ExportPageProps = {
  locale: Locale;
};

export function ExportPage({ locale }: ExportPageProps) {
  const hero = {
    title: {
      fr: "Export bois depuis la Tunisie vers les marchés internationaux",
      en: "Wood export from Tunisia to international markets",
      ar: "تصدير الخشب من تونس إلى الأسواق الدولية",
    },
    text: {
      fr: "Conditionnement, documentation, préparation logistique et accompagnement commercial pour acheteurs B2B.",
      en: "Packing, documentation, logistics preparation and commercial support for B2B buyers.",
      ar: "تغليف ووثائق وتحضير لوجستي ومرافقة تجارية للمشترين المهنيين.",
    },
  };

  return (
    <PageShell locale={locale} routeKey="export">
      <PageHero locale={locale} routeKey="export" title={hero.title} text={hero.text} />
      <section className="py-16">
        <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <ProductSpecTable
            rows={[
              { label: "Documents", value: "Certificat d'origine, facture export, packing list, documents phytosanitaires selon destination." },
              { label: "Incoterms", value: "A confirmer selon client, destination et mode de transport." },
              { label: "Transport", value: "Maritime, routier ou multimodal selon pays cible." },
              { label: "Marchés", value: targetMarkets.join(", ") },
            ]}
          />
          <div className="rounded-lg border border-line bg-surface p-6">
            <h2 className="text-2xl font-semibold text-brand-strong">{locale === "fr" ? "Devis export" : locale === "en" ? "Export RFQ" : "طلب عرض للتصدير"}</h2>
            <p className="mt-3 leading-7 text-muted">{homeCopy.shared[locale].formText}</p>
            <div className="mt-6">
              <Button href={route("contact", locale)}>{homeCopy.hero[locale].quote}</Button>
            </div>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
