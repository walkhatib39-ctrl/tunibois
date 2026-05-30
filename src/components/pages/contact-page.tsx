import { LeadForm } from "@/components/forms/lead-form";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/sections/shared/page-hero";
import { Container } from "@/components/ui/container";
import { site } from "@/content/site";
import type { Locale } from "@/lib/locales";
import { route } from "@/lib/routes";

type ContactPageProps = {
  locale: Locale;
};

export function ContactPage({ locale }: ContactPageProps) {
  const hero = {
    title: {
      fr: "Demande de devis, échantillon ou contact export",
      en: "Quote, sample request or export contact",
      ar: "طلب عرض سعر أو عينة أو تواصل للتصدير",
    },
    text: {
      fr: "Envoyez votre besoin avec produit, quantité, pays de destination et contraintes techniques.",
      en: "Send your requirement with product, quantity, destination country and technical constraints.",
      ar: "أرسل احتياجك مع المنتج والكمية وبلد الوجهة والمتطلبات التقنية.",
    },
  };

  return (
    <PageShell locale={locale} routeKey="contact">
      <PageHero locale={locale} routeKey="contact" title={hero.title} text={hero.text} />
      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-lg border border-line bg-surface p-6">
            <h2 className="text-2xl font-semibold text-brand-strong">{site.name}</h2>
            <p className="mt-3 text-muted">{site.email}</p>
            <p className="mt-2 text-muted">{site.phone}</p>
          </div>
          <LeadForm mode="quote" locale={locale} sourcePath={route("contact", locale)} />
        </Container>
      </section>
    </PageShell>
  );
}
