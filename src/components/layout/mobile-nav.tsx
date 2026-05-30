import Link from "next/link";
import { Container } from "@/components/ui/container";

type NavigationItem = {
  href: string;
  label: string;
};

type MobileNavProps = {
  ctaHref: string;
  ctaLabel: string;
  items: NavigationItem[];
};

export function MobileNav({ ctaHref, ctaLabel, items }: MobileNavProps) {
  return (
    <div className="border-t border-line lg:hidden">
      <Container>
        <nav className="flex items-center gap-2 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" aria-label="Navigation mobile">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="shrink-0 rounded-md border border-line bg-surface px-3 py-2 text-sm font-semibold text-brand">
              {item.label}
            </Link>
          ))}
          <Link href={ctaHref} className="shrink-0 rounded-md border border-brand px-4 py-2 text-sm font-semibold text-brand">
            {ctaLabel}
          </Link>
        </nav>
      </Container>
    </div>
  );
}
