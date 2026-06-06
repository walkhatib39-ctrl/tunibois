import { CommercialRequestForm } from "@/components/forms/commercial-request-form";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { contactForms } from "@/content/pages/contact";
import type { Locale } from "@/lib/locales";
import { route } from "@/lib/routes";

type ContactFormsSectionProps = {
  locale: Locale;
};

const sectionTitle = {
  fr: "Un seul formulaire pour qualifier la demande",
  en: "One form to qualify the enquiry",
  ar: "نموذج واحد لتأهيل الطلب",
};

const sectionText = {
  fr: "Choisissez Devis ou Échantillon, puis ajoutez les informations utiles pour préparer une réponse exploitable.",
  en: "Choose Quote or Sample, then add the useful information needed to prepare a workable reply.",
  ar: "اختر عرض سعر أو عينة، ثم أضف المعلومات المفيدة لتحضير رد قابل للدراسة.",
};

export function ContactFormsSection({ locale }: ContactFormsSectionProps) {
  const sourcePath = route("contact", locale);

  return (
    <section className="bg-surface py-16">
      <Container>
        <SectionHeading title={sectionTitle[locale]} intro={sectionText[locale]} />

        <article id="quote" className="mt-10 max-w-5xl scroll-mt-28">
          <span id="sample" className="block scroll-mt-28" aria-hidden />
          <div className="mb-5 flex flex-col gap-4 border-l-2 border-accent pl-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-accent">01</p>
              <h2 className="mt-2 text-2xl font-semibold leading-tight text-brand-strong">{contactForms.commercialRequest.title[locale]}</h2>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">{contactForms.commercialRequest.text[locale]}</p>
            </div>
          </div>
          <CommercialRequestForm locale={locale} sourcePath={sourcePath} />
        </article>
      </Container>
    </section>
  );
}
