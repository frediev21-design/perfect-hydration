"use client";

import type { ReactNode } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { GlassCard } from "@/components/shared/glass-card";
import { Button } from "@/components/ui/button";
import { OrderNumberBadge } from "@/features/checkout/components/order-number-badge";
import { PayFastRedirectForm } from "@/features/checkout/components/payfast-redirect-form";
import { PaymentMethodSelector } from "@/features/checkout/components/payment-method-selector";
import { trackConversionEvent } from "@/lib/analytics/events";
import { checkoutSection } from "@/lib/config/checkout";
import { calculatorLimits } from "@/lib/config/pricing";
import {
  checkoutFormSchema,
  type CheckoutFormValues,
} from "@/lib/validations/checkout";
import { buildWhatsAppOrderUrl } from "@/lib/utils/whatsapp";
import type {
  PayFastFormPayload,
  PaymentProvider,
} from "@/types/checkout";

interface CheckoutFormProps {
  initialQuantity: number;
  onQuantityChange: (quantity: number) => void;
}

interface PaymentAvailability {
  payfast: boolean;
  paypal: boolean;
}

export function CheckoutForm({
  initialQuantity,
  onQuantityChange,
}: CheckoutFormProps) {
  const [availability, setAvailability] = useState<PaymentAvailability>({
    payfast: false,
    paypal: false,
  });
  const [payfastRedirect, setPayfastRedirect] =
    useState<PayFastFormPayload | null>(null);
  const [pendingOrderNumber, setPendingOrderNumber] = useState<string | null>(
    null,
  );
  const [submitError, setSubmitError] = useState<string | null>(null);

  const defaultProvider: PaymentProvider = "payfast";

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      deliveryAddress: "",
      quantity: initialQuantity,
      provider: defaultProvider,
    },
  });

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = form;

  const quantity = watch("quantity");
  const provider = watch("provider");
  const whatsappUrl = buildWhatsAppOrderUrl({ quantity });

  useEffect(() => {
    onQuantityChange(quantity);
  }, [quantity, onQuantityChange]);

  useEffect(() => {
    async function loadAvailability() {
      try {
        const response = await fetch("/api/checkout");
        if (!response.ok) {
          return;
        }

        const data = (await response.json()) as PaymentAvailability;
        setAvailability(data);

        if (!data.payfast && data.paypal) {
          setValue("provider", "paypal");
        }
      } catch {
        setAvailability({ payfast: false, paypal: false });
      }
    }

    void loadAvailability();
  }, [setValue]);

  const onSubmit = handleSubmit(async (values) => {
    setSubmitError(null);

    try {
      trackConversionEvent("begin_checkout", {
        source: "checkout_form",
        quantity: values.quantity,
      });

      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const payload = await response.json();

      if (!response.ok) {
        setSubmitError(payload.error ?? "Unable to start checkout.");
        return;
      }

      if (payload.provider === "payfast") {
        setPendingOrderNumber(payload.order.id as string);
        setPayfastRedirect(payload.payment as PayFastFormPayload);
        return;
      }

      sessionStorage.setItem("ph_checkout_order", payload.order.id as string);
      window.location.href = payload.payment.approvalUrl as string;
    } catch {
      setSubmitError("Unable to start checkout. Please try again.");
    }
  });

  return (
    <>
      {payfastRedirect && pendingOrderNumber ? (
        <>
          <OrderNumberBadge orderNumber={pendingOrderNumber} className="mb-4" />
          <p className="mb-4 text-sm text-muted-foreground">
            {checkoutSection.redirectingWithOrder}
          </p>
          <PayFastRedirectForm
            actionUrl={payfastRedirect.actionUrl}
            fields={payfastRedirect.fields}
          />
        </>
      ) : null}

      {!payfastRedirect ? (
      <GlassCard className="p-6 sm:p-8">
        <form className="space-y-6" onSubmit={onSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="First name" error={errors.firstName?.message}>
              <input
                {...register("firstName")}
                className={inputClassName}
                autoComplete="given-name"
              />
            </Field>
            <Field label="Last name" error={errors.lastName?.message}>
              <input
                {...register("lastName")}
                className={inputClassName}
                autoComplete="family-name"
              />
            </Field>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Email" error={errors.email?.message}>
              <input
                {...register("email")}
                type="email"
                className={inputClassName}
                autoComplete="email"
              />
            </Field>
            <Field label="Phone" error={errors.phone?.message}>
              <input
                {...register("phone")}
                type="tel"
                className={inputClassName}
                autoComplete="tel"
              />
            </Field>
          </div>

          <Field label="Delivery address (Gauteng)" error={errors.deliveryAddress?.message}>
            <textarea
              {...register("deliveryAddress")}
              rows={4}
              className={inputClassName}
              autoComplete="street-address"
            />
          </Field>

          <Field label="Quantity" error={errors.quantity?.message}>
            <input
              {...register("quantity", { valueAsNumber: true })}
              type="number"
              min={calculatorLimits.min}
              max={calculatorLimits.max}
              className={inputClassName}
            />
          </Field>

          <PaymentMethodSelector
            value={provider}
            onChange={(value) => setValue("provider", value)}
            payfastEnabled={availability.payfast}
            paypalEnabled={availability.paypal}
          />

          {submitError ? (
            <p className="rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
              {submitError}
            </p>
          ) : null}

          <Button
            type="submit"
            disabled={
              isSubmitting ||
              payfastRedirect !== null ||
              (!availability.payfast && !availability.paypal)
            }
            className="h-12 w-full rounded-xl bg-brand-accent text-base font-semibold text-white hover:bg-brand-accent/90"
          >
            {isSubmitting || payfastRedirect ? (
              <>
                <LoaderCircle aria-hidden className="size-4 animate-spin" />
                {checkoutSection.processingLabel}
              </>
            ) : (
              checkoutSection.payNowLabel
            )}
          </Button>

          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-muted-foreground">
            <p>{checkoutSection.gautengNote}</p>
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 font-semibold text-brand-accent hover:text-white"
            >
              <MessageCircle aria-hidden className="size-4" />
              {checkoutSection.whatsappFallback}
            </Link>
          </div>
        </form>
      </GlassCard>
      ) : null}
    </>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-medium text-white">{label}</span>
      {children}
      {error ? <span className="text-xs text-destructive">{error}</span> : null}
    </label>
  );
}

const inputClassName =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-muted-foreground focus:border-brand-accent/40 focus:ring-2 focus:ring-brand-accent/20";
