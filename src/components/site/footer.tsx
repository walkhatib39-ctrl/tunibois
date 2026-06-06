import Link from "next/link";
import type { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faClock, faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { site } from "@/content/site";
import type { Locale } from "@/lib/locales";
import { route, type RouteKey } from "@/lib/routes";
import { Container } from "@/components/ui/container";

type FooterProps = {
  locale: Locale;
};

const footerCopy: Record<
  Locale,
  {
    brandIntro: string;
    contact: string;
    contactLabels: {
      address: string;
      email: string;
      phone: string;
    };
    cta: string;
    hours: string;
    products: string;
    quickLinks: string;
    reach: string;
  }
> = {
  fr: {
    brandIntro:
      "Tunibois transforme le bois pour des usages industriels, logistiques et commerciaux. Notre rôle est de fournir des produits fiables, conditionnés et préparés pour les marchés B2B.",
    contact: "Contact",
    contactLabels: {
      address: "Adresse",
      email: "Email",
      phone: "Téléphone",
    },
    cta: "Devis gratuit",
    hours: "Joignable du lundi au vendredi de 8h à 18h.",
    products: "Nos produits",
    quickLinks: "Liens utiles",
    reach: "Prenez contact",
  },
  en: {
    brandIntro:
      "Tunibois transforms wood for industrial, logistics and commercial uses. Our role is to supply reliable wood products, packed and prepared for B2B markets.",
    contact: "Contact",
    contactLabels: {
      address: "Address",
      email: "Email",
      phone: "Phone",
    },
    cta: "Request a quote",
    hours: "Available Monday to Friday from 8am to 6pm.",
    products: "Products",
    quickLinks: "Useful links",
    reach: "Get in touch",
  },
  ar: {
    brandIntro: "تحول Tunibois الخشب للاستخدامات الصناعية واللوجستية والتجارية، مع منتجات موثوقة ومهيأة لأسواق الأعمال.",
    contact: "اتصال",
    contactLabels: {
      address: "العنوان",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
    },
    cta: "طلب عرض سعر",
    hours: "متاح من الاثنين إلى الجمعة من 8 صباحا إلى 6 مساء.",
    products: "منتجاتنا",
    quickLinks: "روابط مفيدة",
    reach: "تواصل معنا",
  },
};

const footerProductLinks: Array<{ key: RouteKey; label: Record<Locale, string> }> = [
  { key: "stirrers", label: { fr: "Agitateur de café", en: "Coffee stirrers", ar: "محركات قهوة خشبية" } },
  { key: "toothpicks", label: { fr: "Cure-dents", en: "Toothpicks", ar: "أعواد أسنان" } },
  { key: "pellets", label: { fr: "Pellets de bois", en: "Wood pellets", ar: "حبيبات الخشب" } },
  { key: "pallets", label: { fr: "Palettes en bois", en: "Wooden pallets", ar: "منصات خشبية" } },
  { key: "iceCreamSticks", label: { fr: "Bâtonnets de glaces", en: "Ice cream sticks", ar: "أعواد المثلجات" } },
  { key: "woodenCutlery", label: { fr: "Couverts en bois", en: "Wooden cutlery", ar: "أدوات مائدة خشبية" } },
];

const footerQuickLinks: Array<{ key: RouteKey; label: Record<Locale, string> }> = [
  { key: "products", label: { fr: "Produits", en: "Products", ar: "المنتجات" } },
  { key: "export", label: { fr: "Export", en: "Export", ar: "التصدير" } },
  { key: "contact", label: { fr: "Contact", en: "Contact", ar: "اتصل بنا" } },
];

export function Footer({ locale }: FooterProps) {
  const copy = footerCopy[locale];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#14231d] text-white">
      <Container className="grid gap-10 py-14 sm:py-16 lg:grid-cols-[1.25fr_1fr_1.05fr_1.2fr]">
        <section>
          <Link href={route("home", locale)} className="inline-flex text-xl font-black tracking-tight text-white">
            TUNI<span className="text-accent-soft">BOIS</span>
          </Link>
          <p className="mt-6 max-w-sm text-sm italic leading-7 text-white/70">{copy.brandIntro}</p>
        </section>

        <FooterColumn title={copy.products}>
          <ul className="grid gap-3">
            {footerProductLinks.map((item) => (
              <li key={item.key}>
                <Link
                  href={route(item.key, locale)}
                  className="group flex items-center gap-3 text-sm font-semibold uppercase text-white/90 transition hover:text-accent-soft"
                >
                  <FontAwesomeIcon icon={faCaretRight} className="size-3 text-accent-soft transition group-hover:translate-x-0.5" aria-hidden />
                  {item.label[locale]}
                </Link>
              </li>
            ))}
          </ul>
        </FooterColumn>

        <FooterColumn title={copy.contact}>
          <div className="grid gap-4 text-sm font-semibold leading-6 text-white/90">
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="group flex items-start gap-3 hover:text-accent-soft">
              <FontAwesomeIcon icon={faPhone} className="mt-1 size-4 shrink-0 text-accent-soft" aria-hidden />
              <span>
                {copy.contactLabels.phone}: {site.phone}
              </span>
            </a>
            <a href={`mailto:${site.email}`} className="group flex items-start gap-3 hover:text-accent-soft">
              <FontAwesomeIcon icon={faEnvelope} className="mt-1 size-4 shrink-0 text-accent-soft" aria-hidden />
              <span>
                {copy.contactLabels.email}: {site.email}
              </span>
            </a>
            <span className="flex items-start gap-3">
              <FontAwesomeIcon icon={faLocationDot} className="mt-1 size-4 shrink-0 text-accent-soft" aria-hidden />
              <span>
                {copy.contactLabels.address}: {site.address}
              </span>
            </span>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://www.linkedin.com/company/tunibois/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-9 items-center justify-center rounded-full bg-accent-soft text-sm font-black text-brand-strong transition hover:-translate-y-0.5 hover:bg-white"
              aria-label="Tunibois LinkedIn"
            >
              in
            </a>
          </div>
        </FooterColumn>

        <FooterColumn title={copy.reach}>
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-4 text-3xl font-black text-white/44 transition hover:text-accent-soft"
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent-soft text-brand-strong">
              <FontAwesomeIcon icon={faPhone} className="size-5" aria-hidden />
            </span>
            {site.phone}
          </a>
          <p className="mt-5 flex gap-3 text-sm font-semibold leading-6 text-white/86">
            <FontAwesomeIcon icon={faClock} className="mt-1 size-4 shrink-0 text-accent-soft" aria-hidden />
            {copy.hours}
          </p>
          <Link
            href={route("contact", locale)}
            className="mt-7 inline-flex min-h-11 items-center justify-center rounded-full bg-[#6b941d] px-8 text-sm font-black uppercase text-white transition hover:bg-accent hover:text-brand-strong"
          >
            {copy.cta}
          </Link>
        </FooterColumn>
      </Container>

      <Container>
        <div className="border-t border-[#6b941d]/80 py-6 text-sm text-white/88">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p>© {currentYear} Tunibois</p>
            <nav className="flex flex-wrap items-center gap-x-5 gap-y-2" aria-label={copy.quickLinks}>
              {footerQuickLinks.map((item) => (
                <Link key={item.key} href={route(item.key, locale)} className="hover:text-accent-soft">
                  {item.label[locale]}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({ children, title }: { children: ReactNode; title: string }) {
  return (
    <section>
      <h2 className="text-xl font-black leading-tight text-white">{title}</h2>
      <div className="mt-3 flex h-px w-36 bg-white/54" aria-hidden>
        <span className="h-px w-12 bg-[#6b941d]" />
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}
