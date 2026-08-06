"use client";

import { FileText, MessageCircle, Minus, Plus } from "lucide-react";
import { useMemo, useState } from "react";

import { GlassCard } from "@/components/shared/glass-card";
import { Button } from "@/components/ui/button";
import { trackConversionEvent } from "@/lib/analytics/events";
import {
  calculatorLimits,
  pricingSection,
  quantityPresets,
} from "@/lib/config/pricing";
import { calculateOrder } from "@/lib/services/order-calculator.service";
import { productPricing } from "@/lib/services/product.service";
import { formatCurrency } from "@/lib/utils/format";
import { buildWhatsAppOrderUrl } from "@/lib/utils/whatsapp";
import { cn } from "@/lib/utils";

interface BulkCalculatorProps {
  vatRate: number;
  deliveryFee: number;
  freeDeliveryThreshold: number;
}

function SummaryRow({
  label,
  value,
  valueClassName,
}: {
  label: string;
  value: string;
  valueClassName?: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/8 py-3.5 last:border-b-0">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span
        className={cn(
          "text-sm font-medium text-white",
          valueClassName,
        )}
      >
        {value}
      </span>
    </div>
  );
}

export function BulkCalculator({
  vatRate,
  deliveryFee,
  freeDeliveryThreshold,
}: BulkCalculatorProps) {
  const [quantity, setQuantity] = useState(freeDeliveryThreshold);

  const calculation = useMemo(
    () =>
      calculateOrder({
        quantity,
        unitPrice: productPricing.unitPrice,
        bulkUnitPrice: productPricing.bulkUnitPrice,
        bulkThreshold: productPricing.bulkThreshold,
        vatRate,
        deliveryFee,
        freeDeliveryThreshold,
      }),
    [quantity, vatRate, deliveryFee, freeDeliveryThreshold],
  );

  const whatsappOrderUrl = buildWhatsAppOrderUrl({
    quantity: calculation.quantity,
  });
  const whatsappQuoteUrl = buildWhatsAppOrderUrl({
    quantity: calculation.quantity,
    quote: true,
  });

  const effectiveCostPerBottle = calculation.total / calculation.quantity;
  const deliverySavings = calculation.deliveryIsFree ? deliveryFee : 0;

  const setClampedQuantity = (value: number) => {
    setQuantity(
      Math.min(
        calculatorLimits.max,
        Math.max(calculatorLimits.min, Math.floor(value)),
      ),
    );
  };

  return (
    <div className="mt-12 grid gap-6 lg:grid-cols-2">
      <GlassCard className="p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            {pricingSection.quantityLabel}
          </p>
          <p
            className={cn(
              "text-xs font-semibold",
              calculation.deliveryIsFree
                ? "text-brand-success"
                : "text-muted-foreground",
            )}
          >
            {calculation.deliveryIsFree
              ? pricingSection.freeDeliveryUnlocked
              : pricingSection.freeDeliveryHint}
          </p>
        </div>

        <div className="mt-8 flex items-center justify-center gap-5">
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="Decrease quantity"
            disabled={quantity <= calculatorLimits.min}
            onClick={() => setClampedQuantity(quantity - 1)}
            className="size-12 rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <Minus aria-hidden className="size-5" />
          </Button>

          <div className="flex items-baseline gap-2 text-center">
            <p
              className="font-heading text-6xl font-bold tracking-tight text-white sm:text-7xl"
              aria-live="polite"
              aria-atomic="true"
            >
              {calculation.quantity}
            </p>
            <span className="text-lg text-muted-foreground">
              {pricingSection.bottlesLabel}
            </span>
          </div>

          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="Increase quantity"
            disabled={quantity >= calculatorLimits.max}
            onClick={() => setClampedQuantity(quantity + 1)}
            className="size-12 rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <Plus aria-hidden className="size-5" />
          </Button>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {quantityPresets.map((preset) => (
            <Button
              key={preset}
              type="button"
              variant="outline"
              onClick={() => setClampedQuantity(preset)}
              className={cn(
                "min-w-14 rounded-xl border-white/15 bg-white/5 font-heading text-base font-bold text-white hover:bg-white/10",
                calculation.quantity === preset &&
                  "border-brand-accent bg-brand-accent/15 text-brand-accent hover:bg-brand-accent/20",
              )}
            >
              {preset}
            </Button>
          ))}
        </div>

        <div className="mt-8">
          <input
            type="range"
            min={calculatorLimits.min}
            max={calculatorLimits.max}
            value={calculation.quantity}
            onChange={(event) =>
              setClampedQuantity(Number(event.target.value))
            }
            aria-label="Select bottle quantity"
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-brand-accent [&::-moz-range-thumb]:size-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-brand-accent [&::-webkit-slider-thumb]:size-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brand-accent"
          />
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          {pricingSection.effectiveCostLabel}:{" "}
          <span className="font-medium text-brand-success">
            {formatCurrency(effectiveCostPerBottle)}
          </span>
          {deliverySavings > 0 ? (
            <>
              {" "}
              — {pricingSection.deliverySavingsPrefix}{" "}
              <span className="font-medium text-brand-success">
                {formatCurrency(deliverySavings)}
              </span>{" "}
              {pricingSection.deliverySavingsSuffix}
            </>
          ) : null}
        </p>
      </GlassCard>

      <GlassCard className="flex flex-col bg-[rgb(255_255_255/0.04)] p-6 sm:p-8">
        {calculation.deliveryIsFree ? (
          <span className="mb-6 inline-flex w-fit rounded-full border border-brand-success/30 bg-brand-success/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-success">
            {pricingSection.specialOfferLabel}
          </span>
        ) : (
          <span className="mb-6 inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Live total
          </span>
        )}

        <div className="flex-1 rounded-xl border border-white/10 bg-[rgb(255_255_255/0.03)] px-5 py-1">
          <SummaryRow
            label={`${calculation.quantity} x ${pricingSection.lineItemLabel}`}
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
            valueClassName={
              calculation.deliveryIsFree ? "text-brand-success" : undefined
            }
          />
        </div>

        <div className="mt-6 flex items-end justify-between gap-4 border-t border-white/8 pt-6">
          <span className="font-heading text-lg font-bold text-white">
            Total
          </span>
          <span className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {formatCurrency(calculation.total)}
          </span>
        </div>

        <div className="mt-8 flex flex-col gap-3">
          <Button
            nativeButton={false}
            render={
              <a
                href={whatsappOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Order now via WhatsApp"
                onClick={() => {
                  trackConversionEvent("whatsapp_click", {
                    source: "bulk_calculator_order",
                    quantity: calculation.quantity,
                  });
                }}
              />
            }
            className="h-12 w-full rounded-xl bg-brand-accent text-base font-semibold text-white hover:bg-brand-accent/90"
          >
            <MessageCircle aria-hidden className="size-5" />
            {pricingSection.orderNowLabel}
          </Button>

          <Button
            nativeButton={false}
            render={
              <a
                href={whatsappQuoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Request a quote via WhatsApp"
                onClick={() => {
                  trackConversionEvent("whatsapp_click", {
                    source: "bulk_calculator_quote",
                    quantity: calculation.quantity,
                  });
                }}
              />
            }
            variant="outline"
            className="h-12 w-full rounded-xl border-white/15 bg-transparent text-base font-semibold text-white hover:bg-white/5"
          >
            <FileText aria-hidden className="size-5" />
            {pricingSection.requestQuoteLabel}
          </Button>
        </div>
      </GlassCard>
    </div>
  );
}
