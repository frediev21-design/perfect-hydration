"use client";

import { useMemo } from "react";

import { GlassCard } from "@/components/shared/glass-card";
import { checkoutSection } from "@/lib/config/checkout";
import { calculateOrder } from "@/lib/services/order-calculator.service";
import { productPricing } from "@/lib/services/product.service";
import { formatCurrency } from "@/lib/utils/format";
import { siteConfig } from "@/lib/config/site";

interface CheckoutSummaryProps {
  quantity: number;
}

export function CheckoutSummary({ quantity }: CheckoutSummaryProps) {
  const { vatRate, deliveryFee, freeDeliveryThreshold } = siteConfig.commerce;

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

  return (
    <GlassCard className="p-6 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-accent">
        {checkoutSection.summaryTitle}
      </p>

      <div className="mt-6 space-y-3 border-b border-white/8 pb-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-semibold text-white">{checkoutSection.productLabel}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {calculation.quantity} x {formatCurrency(calculation.unitPrice)}
            </p>
          </div>
          <p className="font-semibold text-white">
            {formatCurrency(calculation.subtotal)}
          </p>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">
            VAT ({Math.round(vatRate * 100)}%)
          </span>
          <span className="text-white">{formatCurrency(calculation.vat)}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Delivery</span>
          <span className={calculation.deliveryIsFree ? "text-brand-success" : "text-white"}>
            {calculation.deliveryIsFree
              ? "FREE"
              : formatCurrency(calculation.delivery)}
          </span>
        </div>
      </div>

      <div className="mt-6 flex items-end justify-between">
        <span className="font-heading text-lg font-bold text-white">Total</span>
        <span className="font-heading text-3xl font-bold text-white">
          {formatCurrency(calculation.total)}
        </span>
      </div>
    </GlassCard>
  );
}
