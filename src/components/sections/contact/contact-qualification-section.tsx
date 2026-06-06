import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faClipboardCheck, faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { contactChecklist, contactQualification } from "@/content/pages/contact";
import { site } from "@/content/site";
import type { Locale } from "@/lib/locales";

type ContactQualificationSectionProps = {
  locale: Locale;
};

const detailsTitle = {
  fr: "Coordonnées commerciales",
  en: "Commercial details",
  ar: "بيانات التواصل التجاري",
};

const detailsIntro = {
  fr: "Les demandes de devis, d'échantillons et de partenariat sont centralisées pour assurer un suivi clair.",
  en: "Quote, sample and partnership enquiries are centralized for clear follow-up.",
  ar: "يتم تجميع طلبات عروض الأسعار والعينات والشراكات لضمان متابعة واضحة.",
};

export function ContactQualificationSection({ locale }: ContactQualificationSectionProps) {
  return (
    <section className="bg-background py-16">
      <Container className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <div className="rounded-lg border border-line bg-surface p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-brand-strong">{detailsTitle[locale]}</h2>
          <p className="mt-3 leading-7 text-muted">{detailsIntro[locale]}</p>
          <div className="mt-6 grid gap-4 text-sm font-semibold text-brand">
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 rounded-md border border-line bg-white px-4 py-3 hover:border-accent">
              <FontAwesomeIcon icon={faEnvelope} className="size-4 text-accent" aria-hidden />
              {site.email}
            </a>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 rounded-md border border-line bg-white px-4 py-3 hover:border-accent">
              <FontAwesomeIcon icon={faPhone} className="size-4 text-accent" aria-hidden />
              {site.phone}
            </a>
            <p className="flex items-center gap-3 rounded-md border border-line bg-white px-4 py-3">
              <FontAwesomeIcon icon={faLocationDot} className="size-4 text-accent" aria-hidden />
              {site.address}
            </p>
          </div>
        </div>

        <div>
          <SectionHeading title={contactQualification.title[locale]} intro={contactQualification.text[locale]} />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {contactChecklist.map((item) => (
              <div key={item.fr} className="flex gap-3 rounded-lg border border-line bg-surface p-4">
                <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand text-accent-soft">
                  <FontAwesomeIcon icon={faCheck} className="size-3" aria-hidden />
                </span>
                <p className="text-sm leading-6 text-muted">{item[locale]}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 flex gap-4 rounded-lg border border-accent/30 bg-accent-soft/24 p-5">
            <FontAwesomeIcon icon={faClipboardCheck} className="mt-1 size-5 shrink-0 text-accent" aria-hidden />
            <div>
              <h3 className="text-base font-semibold text-brand-strong">{contactQualification.response[locale]}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{contactQualification.responseText[locale]}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
