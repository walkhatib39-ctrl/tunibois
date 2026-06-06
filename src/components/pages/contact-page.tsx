import { ContactFormsSection } from "@/components/sections/contact/contact-forms-section";
import { ContactHero } from "@/components/sections/contact/contact-hero";
import { ContactQualificationSection } from "@/components/sections/contact/contact-qualification-section";
import { PageShell } from "@/components/site/page-shell";
import type { Locale } from "@/lib/locales";

type ContactPageProps = {
  locale: Locale;
};

export function ContactPage({ locale }: ContactPageProps) {
  return (
    <PageShell locale={locale} routeKey="contact">
      <ContactHero locale={locale} />
      <ContactQualificationSection locale={locale} />
      <ContactFormsSection locale={locale} />
    </PageShell>
  );
}
