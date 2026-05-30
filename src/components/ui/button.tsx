import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-accent text-brand-strong hover:bg-accent-soft focus-visible:outline-accent",
  secondary: "bg-brand text-white hover:bg-brand-strong focus-visible:outline-brand",
  ghost: "bg-transparent text-brand hover:bg-surface-strong focus-visible:outline-brand",
  outline: "border border-brand/30 bg-transparent text-brand hover:border-brand hover:bg-surface focus-visible:outline-brand",
};

const baseClass =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50";

type LinkButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

type NativeButtonProps = {
  href?: never;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function isLinkButton(props: LinkButtonProps | NativeButtonProps): props is LinkButtonProps {
  return typeof (props as LinkButtonProps).href === "string";
}

export function Button(props: LinkButtonProps | NativeButtonProps) {
  const { variant = "primary", className, children } = props;
  const classes = cn(baseClass, variants[variant], className);

  if (isLinkButton(props)) {
    const linkProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !["href", "variant", "className", "children"].includes(key)),
    ) as AnchorHTMLAttributes<HTMLAnchorElement>;

    return (
      <Link href={props.href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = Object.fromEntries(
    Object.entries(props).filter(([key]) => !["variant", "className", "children"].includes(key)),
  ) as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
