"use client";

import { Minus, Plus, Truck } from "lucide-react";
import { useMemo, useState } from "react";

import { GlassCard } from "@/components/shared/glass-card";
import { Button } from "@/components/ui/button";
import { WhatsAppOrderButton } from "@/features/orders/components/whatsapp-order-button";
import { pricingSection } from "@/lib/config/pricing";
import { calculateOrder } from "@/lib/services/order-calculator.service";
import { formatCurrency } from "@/lib/utils/format";
import { buildWhatsAppOrderUrl } from "@/lib/utils/whatsapp";
import { cn } from "@/lib/utils";

interface BulkCalculatorProps {
  unitPrice: number;
  vatRate: number;
  deliveryFee: number;
  freeDeliveryThreshold: number;
}

const MIN_QUANTITY = 1;
const MAX_QUANTITY = 50;

function SummaryRow({
  label,
  value,
  emphasis = false,
}: {
  label: string;
  value: string;
  emphasis?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-4 border-b border-white/8 py-3 last:border-b-0",
        emphasis && "pt-4",
      )}
    >
      <span
        className={cn(
          "text-sm",
          emphasis ? "font-semibold text-white" : "text-muted-foreground",
        )}
      >
        {label}
      </span>
      <span
        className={cn(
          "text-sm font-medium",
          emphasis ? "font-heading text-xl text-white" : "text-white/90",
        )}
      >
        {value}
      </span>
    </div>
  );
}

export function BulkCalculator({
  unitPrice,
  vatRate,
  deliveryFee,
  freeDeliveryThreshold,
}: BulkCalculatorProps) {
  const [quantity, setQuantity] = useState(1);

  const calculation = useMemo(
    () =>
      calculateOrder({
        quantity,
        unitPrice,
        vatRate,
        deliveryFee,
        freeDeliveryThreshold,
      }),
    [quantity, unitPrice, vatRate, deliveryFee, freeDeliveryThreshold],
  );

  const whatsappUrl = buildWhatsAppOrderUrl({ quantity: calculation.quantity });

  const decreaseQuantity = () => {
    setQuantity((current) => Math.max(MIN_QUANTITY, current - 1));
  };

  const increaseQuantity = () => {
    setQuantity((current) => Math.min(MAX_QUANTITY, current + 1));
  };

  return (
    <GlassCard className="mt-12 p-6 sm:p-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="font-heading text-2xl font-extrabold text-white">
            {pricingSection.calculatorTitle}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            {pricingSection.calculatorDescription}
          </p>
        </div>

        {calculation.deliveryIsFree ? (
          <p className="inline-flex items-center gap-2 rounded-full border border-brand-success/30 bg-brand-success/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-success">
            <Truck aria-hidden className="size-4" />
            {pricingSection.freeDeliveryLabel}
          </p>
        ) : (
          <p className="text-xs text-muted-foreground">
            {pricingSection.freeDeliveryHint}
          </p>
        )}
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label="Decrease quantity"
          disabled={quantity <= MIN_QUANTITY}
          onClick={decreaseQuantity}
          className="size-11 rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10"
        >
          <Minus aria-hidden className="size-4" />
        </Button>

        <div className="min-w-24 text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Quantity
          </p>
          <p
            className="mt-1 font-heading text-4xl font-extrabold text-white"
            aria-live="polite"
            aria-atomic="true"
          >
            {calculation.quantity}
          </p>
        </div>

        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label="Increase quantity"
          disabled={quantity >= MAX_QUANTITY}
          onClick={increaseQuantity}
          className="size-11 rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10"
        >
          <Plus aria-hidden className="size-4" />
        </Button>
      </div>

      <div className="mt-8 rounded-xl border border-white/10 bg-[rgb(255_255_255/0.03)] px-5 py-2">
        <SummaryRow
          label="Subtotal"
          value={formatCurrency(calculation.subtotal)}
        />
        <SummaryRow
          label={`VAT (${Math.round(vatRate * 100)}%)`}
          value={formatCurrency(calculation.vat)}
        />
        <SummaryRow
          label="Delivery"
          value={
            calculation.deliveryIsFree
              ? pricingSection.freeDeliveryLabel
              : formatCurrency(calculation.delivery)
          }
        />
        <SummaryRow
          label="Total"
          value={formatCurrency(calculation.total)}
          emphasis
        />
      </div>

      <div className="mt-8 flex justify-center">
        <WhatsAppOrderButton href={whatsappUrl} />
      </div>
    </GlassCard>
  );
}
