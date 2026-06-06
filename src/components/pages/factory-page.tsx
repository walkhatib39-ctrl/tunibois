import { FactoryCapabilitiesSection } from "@/components/sections/factory/factory-capabilities-section";
import { FactoryHero } from "@/components/sections/factory/factory-hero";
import { FactoryProcessSection } from "@/components/sections/factory/factory-process-section";
import { FactoryProductFitSection } from "@/components/sections/factory/factory-product-fit-section";
import { FactoryPromiseSection } from "@/components/sections/factory/factory-promise-section";
import { FactoryQualityExportSection } from "@/components/sections/factory/factory-quality-export-section";
import { CtaBand } from "@/components/site/cta-band";
import { PageShell } from "@/components/site/page-shell";
import type { Locale } from "@/lib/locales";
import { route } from "@/lib/routes";

type FactoryPageProps = {
  locale: Locale;
};

export function FactoryPage({ locale }: FactoryPageProps) {
  const cta = {
    title: {
      fr: "Présenter votre besoin à Tunibois",
      en: "Send your requirement to Tunibois",
      ar: "أرسل احتياجك إلى Tunibois",
    },
    text: {
      fr: "Produit, dimensions, quantité, destination, conditionnement : envoyez les éléments utiles pour cadrer une réponse industrielle.",
      en: "Product, dimensions, quantity, destination, packing: send the useful information to frame an industrial answer.",
      ar: "المنتج، الأبعاد، الكمية، الوجهة، التغليف: أرسل المعلومات المفيدة لتأطير رد صناعي.",
    },
    action: {
      fr: "Demander un devis",
      en: "Request a quote",
      ar: "طلب عرض سعر",
    },
  };

  return (
    <PageShell locale={locale} routeKey="factory">
      <FactoryHero locale={locale} />
      <FactoryPromiseSection locale={locale} />
      <FactoryProcessSection locale={locale} />
      <FactoryCapabilitiesSection locale={locale} />
      <FactoryProductFitSection locale={locale} />
      <FactoryQualityExportSection locale={locale} />
      <CtaBand title={cta.title[locale]} text={cta.text[locale]} href={route("contact", locale)} action={cta.action[locale]} />
    </PageShell>
  );
}
