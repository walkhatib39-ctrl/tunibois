import Image from "next/image";
import Link from "next/link";
import { assets } from "@/content/assets";
import { navigationFor } from "@/content/navigation";
import { site } from "@/content/site";
import type { Locale } from "@/lib/locales";
import { route } from "@/lib/routes";
import { Container } from "@/components/ui/container";

type FooterProps = {
  locale: Locale;
};

const footerCopy: Record<Locale, { intro: string; cta: string }> = {
  fr: {
    intro: "Solutions bois industrielles, composants, emballages et produits eco wood pour marchés B2B.",
    cta: "Demander un devis",
  },
  en: {
    intro: "Industrial wood solutions, components, packaging and eco wood products for B2B markets.",
    cta: "Request a quote",
  },
  ar: {
    intro: "حلول خشبية صناعية ومكونات وتغليف ومنتجات خشبية صديقة للبيئة للأسواق المهنية.",
    cta: "طلب عرض سعر",
  },
};

export function Footer({ locale }: FooterProps) {
  return (
    <footer className="border-t border-line bg-brand text-white">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Image src={assets.logo.src} alt={assets.logo.alt} width={180} height={68} className="h-14 w-auto brightness-0 invert" />
          <p className="mt-5 max-w-sm text-sm leading-6 text-white/72">{footerCopy[locale].intro}</p>
          <Link href={route("contact", locale)} className="mt-6 inline-flex text-sm font-semibold text-accent-soft underline">
            {footerCopy[locale].cta}
          </Link>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-accent-soft">Navigation</h2>
          <div className="mt-4 grid gap-3 text-sm">
            {navigationFor(locale).map((item) => (
              <Link key={item.href} href={item.href} className="text-white/76 hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-accent-soft">Contact</h2>
          <div className="mt-4 grid gap-3 text-sm text-white/76">
            <a href={`mailto:${site.email}`} className="hover:text-white">
              {site.email}
            </a>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-white">
              {site.phone}
            </a>
            <span>{site.address}</span>
          </div>
        </div>
      </Container>
      <Container className="border-t border-white/12 py-5 text-xs text-white/58">
        © {new Date().getFullYear()} Tunibois. Industrial wood transformation and export.
      </Container>
    </footer>
  );
}
