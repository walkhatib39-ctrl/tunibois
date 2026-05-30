import Link from "next/link";
import { localeLabels, locales, type Locale } from "@/lib/locales";
import { route, type RouteKey } from "@/lib/routes";
import { cn } from "@/lib/cn";

type LanguageSwitcherProps = {
  activeLocale: Locale;
  routeKey: RouteKey;
};

export function LanguageSwitcher({ activeLocale, routeKey }: LanguageSwitcherProps) {
  return (
    <div className="flex items-center rounded-md border border-line bg-surface p-1 text-xs font-semibold">
      {locales.map((locale) => (
        <Link
          key={locale}
          href={route(routeKey, locale)}
          className={cn(
            "rounded px-2.5 py-1.5 transition",
            locale === activeLocale ? "bg-brand text-white" : "text-muted hover:bg-surface-strong hover:text-brand",
          )}
        >
          {localeLabels[locale]}
        </Link>
      ))}
    </div>
  );
}
