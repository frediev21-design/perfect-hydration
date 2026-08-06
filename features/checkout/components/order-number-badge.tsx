import { Hash } from "lucide-react";

import { checkoutSection } from "@/lib/config/checkout";
import { cn } from "@/lib/utils";

interface OrderNumberBadgeProps {
  orderNumber: string;
  className?: string;
  hint?: string;
}

export function OrderNumberBadge({
  orderNumber,
  className,
  hint = checkoutSection.orderNumberHint,
}: OrderNumberBadgeProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-brand-accent/25 bg-brand-accent/10 px-4 py-4",
        className,
      )}
    >
      <div className="flex items-start gap-3">
        <Hash aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-accent" />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-accent">
            {checkoutSection.orderNumberLabel}
          </p>
          <p className="mt-2 font-mono text-lg font-semibold tracking-wide text-white">
            {orderNumber}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">{hint}</p>
        </div>
      </div>
    </div>
  );
}
