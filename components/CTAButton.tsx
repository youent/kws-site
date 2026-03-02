import Link from "next/link";
import { ReactNode } from "react";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
  ariaLabel?: string;
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
  ariaLabel,
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white";

  const styles =
    variant === "primary"
      ? "bg-slate-900 text-white hover:bg-slate-700 focus-visible:ring-slate-700"
      : "border border-slate-300 bg-white text-slate-900 hover:bg-slate-100 focus-visible:ring-slate-500";

  const classes = `${base} ${styles} ${className}`.trim();

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}