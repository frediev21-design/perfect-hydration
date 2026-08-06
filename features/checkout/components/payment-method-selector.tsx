"use client";

import { CreditCard, Wallet } from "lucide-react";

import { checkoutSection } from "@/lib/config/checkout";
import { cn } from "@/lib/utils";
import type { PaymentProvider } from "@/types/checkout";

interface PaymentMethodSelectorProps {
  value: PaymentProvider;
  onChange: (value: PaymentProvider) => void;
  payfastEnabled: boolean;
  paypalEnabled: boolean;
}

export function PaymentMethodSelector({
  value,
  onChange,
  payfastEnabled,
  paypalEnabled,
}: PaymentMethodSelectorProps) {
  if (!payfastEnabled && !paypalEnabled) {
    return (
      <p className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-muted-foreground">
        {checkoutSection.noPaymentMethods}
      </p>
    );
  }

  const options = [
    {
      id: "payfast" as const,
      enabled: payfastEnabled,
      icon: CreditCard,
      label: checkoutSection.payfastLabel,
      description: checkoutSection.payfastDescription,
    },
    {
      id: "paypal" as const,
      enabled: paypalEnabled,
      icon: Wallet,
      label: checkoutSection.paypalLabel,
      description: checkoutSection.paypalDescription,
    },
  ].filter((option) => option.enabled);

  return (
    <div className="space-y-3">
      <p className="text-sm font-semibold text-white">
        {checkoutSection.paymentMethodsTitle}
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {options.map((option) => {
          const Icon = option.icon;
          const selected = value === option.id;

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onChange(option.id)}
              className={cn(
                "rounded-2xl border px-4 py-4 text-left transition-colors",
                selected
                  ? "border-brand-accent/40 bg-brand-accent/10"
                  : "border-white/10 bg-white/5 hover:border-white/20",
              )}
            >
              <div className="flex items-center gap-3">
                <Icon
                  aria-hidden
                  className={cn(
                    "size-5",
                    selected ? "text-brand-accent" : "text-muted-foreground",
                  )}
                />
                <div>
                  <p className="font-semibold text-white">{option.label}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {option.description}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
