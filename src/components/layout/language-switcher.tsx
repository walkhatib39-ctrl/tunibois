import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { localeFlagIcons, localeLabels, locales, type Locale } from "@/lib/locales";
import { route, type RouteKey } from "@/lib/routes";

type LanguageSwitcherProps = {
  activeLocale: Locale;
  routeKey: RouteKey;
};

export function LanguageSwitcher({ activeLocale, routeKey }: LanguageSwitcherProps) {
  return (
    <div className="flex items-center gap-1 text-xs font-semibold" aria-label="Choix de langue">
      {locales.map((locale) => (
        <Link
          key={locale}
          href={route(routeKey, locale)}
          title={localeLabels[locale]}
          className={cn("rounded-sm px-2 py-1.5 transition", locale === activeLocale ? "bg-brand text-white" : "text-muted hover:bg-surface hover:text-brand")}
        >
          <span className="inline-flex items-center gap-1.5">
            <Image src={localeFlagIcons[locale]} alt="" width={18} height={12} className="rounded-[2px] border border-black/10" />
            <span className="hidden sm:inline">{localeLabels[locale]}</span>
          </span>
        </Link>
      ))}
    </div>
  );
}
