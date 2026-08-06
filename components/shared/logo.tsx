import Image from "next/image";
import Link from "next/link";

import { assetPaths } from "@/lib/config/hero";
import { siteConfig } from "@/lib/config/site";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export function Logo({ className, showTagline = true }: LogoProps) {
  const src = showTagline ? assetPaths.brand.logo : assetPaths.brand.logoCompact;

  return (
    <Link
      href="/"
      className={cn("group inline-flex shrink-0 items-center", className)}
      aria-label={`${siteConfig.name} — Home`}
    >
      <Image
        src={src}
        alt={assetPaths.brand.logoAlt}
        width={showTagline ? 275 : 275}
        height={showTagline ? 258 : 215}
        priority
        className={cn(
          "h-auto w-auto max-w-none object-contain transition-opacity group-hover:opacity-90",
          showTagline ? "h-[4.5rem] sm:h-[5rem]" : "h-9 sm:h-10",
        )}
      />
    </Link>
  );
}
