import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faEnvelopeOpenText, faFileInvoice, faFlask } from "@fortawesome/free-solid-svg-icons";
import { Container } from "@/components/ui/container";
import { contactPaths } from "@/content/pages/contact";
import type { Locale } from "@/lib/locales";

type ContactRoutingSectionProps = {
  locale: Locale;
};

const icons = [faFileInvoice, faFlask, faEnvelopeOpenText];

export function ContactRoutingSection({ locale }: ContactRoutingSectionProps) {
  return (
    <section className="border-b border-line bg-background py-10">
      <Container>
        <div className="grid gap-4 md:grid-cols-3">
          {contactPaths.map((path, index) => (
            <a key={path.anchor} href={`#${path.anchor}`} className="group rounded-lg border border-line bg-surface p-5 transition hover:-translate-y-0.5 hover:border-accent hover:shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div className="flex size-11 items-center justify-center rounded-md bg-brand text-accent-soft">
                  <FontAwesomeIcon icon={icons[index]} className="size-5" aria-hidden />
                </div>
                <FontAwesomeIcon icon={faArrowRight} className="mt-3 size-3 text-accent transition group-hover:translate-x-1" aria-hidden />
              </div>
              <h2 className="mt-5 text-2xl font-semibold text-brand-strong">{path.title[locale]}</h2>
              <p className="mt-3 leading-7 text-muted">{path.text[locale]}</p>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
