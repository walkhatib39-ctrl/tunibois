import { LeadForm } from "@/components/forms/lead-form";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeCopy } from "@/content/pages/home";
import type { Locale } from "@/lib/locales";
import { route } from "@/lib/routes";

type HomeQuoteSectionProps = {
  locale: Locale;
};

export function HomeQuoteSection({ locale }: HomeQuoteSectionProps) {
  const shared = homeCopy.shared[locale];
  const eyebrow = locale === "fr" ? "Devis export" : locale === "en" ? "RFQ" : "طلب عرض";

  return (
    <section className="py-20">
      <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <SectionHeading eyebrow={eyebrow} title={shared.formTitle} intro={shared.formText} />
        <LeadForm mode="quote" locale={locale} sourcePath={route("home", locale)} />
      </Container>
    </section>
  );
}
