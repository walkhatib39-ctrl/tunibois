type InfoListProps = {
  items: string[];
  title: string;
};

export function InfoList({ items, title }: InfoListProps) {
  return (
    <article className="rounded-lg border border-line bg-surface p-6">
      <h2 className="text-xl font-semibold text-brand-strong">{title}</h2>
      <ul className="mt-5 grid gap-3 text-sm leading-6 text-muted">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
