import { LeadForm } from "@/components/forms/lead-form";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { contactForms } from "@/content/pages/contact";
import type { Locale } from "@/lib/locales";
import { route } from "@/lib/routes";

type ContactFormsSectionProps = {
  locale: Locale;
};

const sectionTitle = {
  fr: "Envoyer la bonne demande au bon interlocuteur",
  en: "Send the right enquiry to the right contact",
  ar: "أرسل الطلب المناسب إلى الجهة المناسبة",
};

const sectionText = {
  fr: "Choisissez le formulaire qui correspond à votre besoin. Chaque demande est enregistrée et transmise pour suivi commercial.",
  en: "Choose the form that matches your need. Each enquiry is saved and forwarded for commercial follow-up.",
  ar: "اختر النموذج المناسب لاحتياجك. يتم حفظ كل طلب وإرساله للمتابعة التجارية.",
};

export function ContactFormsSection({ locale }: ContactFormsSectionProps) {
  const sourcePath = route("contact", locale);

  return (
    <section className="bg-surface py-16">
      <Container>
        <SectionHeading title={sectionTitle[locale]} intro={sectionText[locale]} />

        <div className="mt-10 grid gap-10">
          <FormBlock id="quote" index="01" locale={locale} mode="quote" sourcePath={sourcePath} />

          <div className="grid gap-10 lg:grid-cols-2">
            <FormBlock id="sample" index="02" locale={locale} mode="sample" sourcePath={sourcePath} />
            <FormBlock id="commercial-contact" index="03" locale={locale} mode="contact" sourcePath={sourcePath} />
          </div>
        </div>
      </Container>
    </section>
  );
}

function FormBlock({
  id,
  index,
  locale,
  mode,
  sourcePath,
}: {
  id: string;
  index: string;
  locale: Locale;
  mode: "quote" | "sample" | "contact";
  sourcePath: string;
}) {
  const copy = contactForms[mode];

  return (
    <article id={id} className="scroll-mt-28">
      <div className="mb-5 flex flex-col gap-4 border-l-2 border-accent pl-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-accent">{index}</p>
          <h2 className="mt-2 text-2xl font-semibold leading-tight text-brand-strong">{copy.title[locale]}</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">{copy.text[locale]}</p>
        </div>
      </div>
      <LeadForm mode={mode} locale={locale} sourcePath={sourcePath} />
    </article>
  );
}
