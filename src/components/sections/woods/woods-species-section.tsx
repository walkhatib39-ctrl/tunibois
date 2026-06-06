import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { assets } from "@/content/assets";
import { woodSpeciesDetails } from "@/content/pages/woods";
import type { Locale } from "@/lib/locales";

type WoodsSpeciesSectionProps = {
  locale: Locale;
};

const title = {
  fr: "Quatre essences à qualifier selon le produit final",
  en: "Four species to qualify by final product",
  ar: "أربعة أنواع تؤهل حسب المنتج النهائي",
};

const intro = {
  fr: "Un importateur ne choisit pas une essence pour son nom, mais pour sa capacité à tenir un usage, un rendu, un volume et un conditionnement. Tunibois relie chaque matière aux familles produits où elle crée le plus de valeur.",
  en: "An importer does not choose a species for its name, but for its ability to support a use, appearance, volume and packing method. Tunibois connects each material to the product families where it creates the most value.",
  ar: "لا يختار المستورد نوع الخشب بسبب اسمه، بل بسبب قدرته على خدمة الاستخدام والمظهر والكمية وطريقة التغليف. تربط Tunibois كل مادة بعائلات المنتجات التي تحقق فيها أعلى قيمة.",
};

const detailsLabel = {
  fr: "Voir les critères",
  en: "View criteria",
  ar: "عرض المعايير",
};

export function WoodsSpeciesSection({ locale }: WoodsSpeciesSectionProps) {
  return (
    <section className="bg-background py-16 sm:py-20">
      <Container>
        <SectionHeading title={title[locale]} intro={intro[locale]} />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {woodSpeciesDetails.map((wood) => {
            const image = assets[wood.imageKey as keyof typeof assets];

            return (
              <article key={wood.id} id={wood.id} className="scroll-mt-36 overflow-hidden rounded-lg border border-line bg-surface shadow-sm">
                <div className="relative aspect-[16/8.6] bg-surface-strong">
                  <Image src={image.src} alt={wood.imageAlt[locale]} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand/72 via-brand/8 to-transparent" />
                  <div className="absolute bottom-4 left-4 rounded-md bg-brand px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent-soft">
                    {wood.scientificName}
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold leading-tight text-brand-strong">{wood.title[locale]}</h2>
                  <p className="mt-2 text-sm font-semibold text-accent">{wood.shortPosition[locale]}</p>
                  <p className="mt-4 text-sm leading-7 text-muted">{wood.summary[locale]}</p>

                  <div className="mt-5 grid gap-2">
                    {wood.applications[locale].slice(0, 4).map((application) => (
                      <div key={application} className="flex items-center gap-3 text-sm font-semibold text-brand">
                        <FontAwesomeIcon icon={faCheckCircle} className="size-4 text-accent" aria-hidden />
                        {application}
                      </div>
                    ))}
                  </div>

                  <Link href={`#criteria-${wood.id}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-brand">
                    {detailsLabel[locale]}
                    <FontAwesomeIcon icon={faArrowRight} className="size-3" aria-hidden />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
