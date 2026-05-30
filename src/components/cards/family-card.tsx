import Image from "next/image";
import type { ProductFamily } from "@/content/families";
import type { Locale } from "@/lib/locales";

type FamilyCardProps = {
  family: ProductFamily;
  locale: Locale;
};

export function FamilyCard({ family, locale }: FamilyCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-line bg-surface">
      <div className="relative aspect-[16/10] bg-surface-strong">
        <Image src={family.image} alt={family.title[locale]} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-brand-strong">{family.title[locale]}</h3>
        <p className="mt-2 text-sm leading-6 text-muted">{family.summary[locale]}</p>
      </div>
    </article>
  );
}
