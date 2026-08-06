import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

import { Container } from "@/components/shared/container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  ariaLabel?: string;
}

export function Section({
  children,
  className,
  containerClassName,
  id,
  ariaLabel,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn("relative py-20 sm:py-24 lg:py-32", className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
