import { Mail, Phone } from "lucide-react";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { Container } from "@/components/ui/container";
import { site } from "@/content/site";
import type { Locale } from "@/lib/locales";
import type { RouteKey } from "@/lib/routes";

type TopBarProps = {
  locale: Locale;
  routeKey: RouteKey;
};

export function TopBar({ locale, routeKey }: TopBarProps) {
  return (
    <div className="border-b border-line bg-surface">
      <Container className="flex min-h-10 items-center justify-between gap-4 text-xs text-muted">
        <a className="inline-flex items-center gap-2 hover:text-brand" href={`mailto:${site.email}`}>
          <Mail className="size-4" aria-hidden />
          {site.email}
        </a>
        <div className="flex items-center gap-4">
          <LanguageSwitcher activeLocale={locale} routeKey={routeKey} />
          <a className="hidden items-center gap-2 hover:text-brand sm:inline-flex" href={`tel:${site.phone.replace(/\s/g, "")}`}>
            <Phone className="size-4" aria-hidden />
            {site.phone}
          </a>
        </div>
      </Container>
    </div>
  );
}
