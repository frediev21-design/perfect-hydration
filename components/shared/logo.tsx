import Link from "next/link";

import { siteConfig } from "@/lib/config/site";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export function Logo({ className, showTagline = true }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-3", className)}
      aria-label={`${siteConfig.name} — Home`}
    >
      <span
        aria-hidden
        className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-brand-accent/20 bg-brand-accent/10 font-heading text-sm font-extrabold tracking-tight text-brand-accent transition-colors group-hover:border-brand-accent/40 group-hover:bg-brand-accent/15"
      >
        PH+
      </span>

      <span className="min-w-0">
        <span className="block font-heading text-sm font-extrabold uppercase tracking-[0.18em] text-white">
          Perfect Hydration
        </span>
        {showTagline ? (
          <span className="block truncate text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            {siteConfig.tagline}
          </span>
        ) : null}
      </span>
    </Link>
  );
}
