import Link from "next/link";

type NavigationItem = {
  href: string;
  label: string;
};

type MainNavProps = {
  items: NavigationItem[];
};

export function MainNav({ items }: MainNavProps) {
  return (
    <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
      {items.map((item) => (
        <Link key={item.href} href={item.href} className="rounded-md px-3 py-2 text-sm font-semibold text-brand hover:bg-surface">
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
