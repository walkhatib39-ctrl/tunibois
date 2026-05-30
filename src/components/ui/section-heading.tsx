import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  children?: ReactNode;
  className?: string;
};

export function SectionHeading({ eyebrow, title, intro, children, className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">{eyebrow}</p> : null}
      <h2 className="mt-3 text-3xl font-semibold leading-tight text-brand-strong sm:text-4xl">{title}</h2>
      {intro ? <p className="mt-4 text-base leading-7 text-muted sm:text-lg">{intro}</p> : null}
      {children}
    </div>
  );
}
