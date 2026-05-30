import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxesStacked, faFileLines, faIndustry } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import type { Locale } from "@/lib/locales";
import { route } from "@/lib/routes";

type ProductsHeroProps = {
  locale: Locale;
  text: Record<Locale, string>;
  title: Record<Locale, string>;
};

const heroImages = [
  {
    src: "/assets/tunibois/wooden-pallets-main.png",
    alt: {
      fr: "Palettes bois pour flux industriels",
      en: "Wooden pallets for industrial flows",
      ar: "منصات خشبية للتدفقات الصناعية",
    },
    className: "row-span-2",
  },
  {
    src: "/assets/tunibois/wooden-cutlery.jpg",
    alt: {
      fr: "Couverts bois pour distribution professionnelle",
      en: "Wooden cutlery for professional distribution",
      ar: "أدوات مائدة خشبية للتوزيع المهني",
    },
    className: "",
  },
  {
    src: "/assets/piskorski/pellets-bags.jpg",
    alt: {
      fr: "Pellets conditionnés sur palette",
      en: "Palletized wood pellets",
      ar: "حبيبات خشب على منصات",
    },
    className: "",
  },
];

const proofItems = [
  {
    icon: faIndustry,
    label: {
      fr: "Fabrication sur demande",
      en: "Manufacturing on request",
      ar: "تصنيع حسب الطلب",
    },
  },
  {
    icon: faBoxesStacked,
    label: {
      fr: "Conditionnement export",
      en: "Export packing",
      ar: "تغليف للتصدير",
    },
  },
  {
    icon: faFileLines,
    label: {
      fr: "Documents dès le devis",
      en: "Documents from quotation",
      ar: "وثائق من مرحلة العرض",
    },
  },
];

export function ProductsHero({ locale, text, title }: ProductsHeroProps) {
  return (
    <section className="overflow-hidden bg-brand text-white">
      <Container className="grid gap-8 py-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-12">
        <div>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">{title[locale]}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76">{text[locale]}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={route("contact", locale)}>{locale === "fr" ? "Demander un devis" : locale === "en" ? "Request a quote" : "طلب عرض سعر"}</Button>
            <Button href="#product-families" variant="outline" className="border-white/35 text-white hover:bg-white/10">
              {locale === "fr" ? "Voir les familles" : locale === "en" ? "View families" : "عرض العائلات"}
            </Button>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {proofItems.map((item) => (
              <div key={item.label.fr} className="flex items-start gap-3 border-t border-white/16 pt-4">
                <FontAwesomeIcon icon={item.icon} className="mt-1 size-4 text-accent-soft" aria-hidden />
                <span className="text-sm font-semibold leading-6 text-white/82">{item.label[locale]}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="order-first grid min-h-[180px] grid-cols-[1.05fr_0.95fr] grid-rows-2 gap-3 lg:order-none lg:min-h-[300px] lg:gap-4">
          {heroImages.map((image) => (
            <div key={image.src} className={`relative overflow-hidden rounded-lg border border-white/12 bg-white/8 ${image.className}`}>
              <Image src={image.src} alt={image.alt[locale]} fill priority={image.src.includes("wooden-pallets")} sizes="(min-width: 1024px) 34vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-strong/42 to-transparent" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
