import { Container } from "@/components/ui/container";
import { trustRail } from "@/content/pages/home";
import type { Locale } from "@/lib/locales";

type TrustRailProps = {
  locale: Locale;
};

export function TrustRail({ locale }: TrustRailProps) {
  return (
    <section className="border-b border-line bg-surface">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 py-5 text-sm font-semibold text-brand">
          {trustRail.map((item, index) => (
            <span key={item.fr} className="inline-flex items-center gap-6">
              <span>{item[locale]}</span>
              {index < trustRail.length - 1 ? <span className="hidden h-4 w-px bg-line sm:inline-block" aria-hidden /> : null}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
