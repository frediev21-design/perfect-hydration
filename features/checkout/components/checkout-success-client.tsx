"use client";

import { CheckCircle2, LoaderCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { GlassCard } from "@/components/shared/glass-card";
import { Container } from "@/components/shared/container";
import { WhatsAppOrderButton } from "@/features/orders/components/whatsapp-order-button";
import { trackConversionEvent } from "@/lib/analytics/events";
import { checkoutSuccessCopy } from "@/lib/config/checkout";
import { buildWhatsAppOrderUrl } from "@/lib/utils/whatsapp";

interface CheckoutSuccessClientProps {
  provider?: string;
  token?: string;
}

export function CheckoutSuccessClient({
  provider,
  token,
}: CheckoutSuccessClientProps) {
  const [orderReference, setOrderReference] = useState<string | null>(null);
  const [loading, setLoading] = useState(provider === "paypal" && Boolean(token));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (provider !== "paypal" || !token) {
      return;
    }

    async function capturePayment() {
      try {
        const response = await fetch("/api/checkout/paypal/capture", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ paypalOrderId: token }),
        });

        const payload = await response.json();

        if (!response.ok) {
          setError(payload.error ?? "Unable to confirm PayPal payment.");
          return;
        }

        setOrderReference(payload.order.id as string);
        trackConversionEvent("purchase", {
          source: "paypal",
          quantity: payload.order.calculation.quantity as number,
        });
      } catch {
        setError("Unable to confirm PayPal payment.");
      } finally {
        setLoading(false);
      }
    }

    void capturePayment();
  }, [provider, token]);

  const whatsappUrl = buildWhatsAppOrderUrl();

  return (
    <main id="main-content" className="min-h-screen flex-1 py-16 sm:py-20" tabIndex={-1}>
      <Container>
        <GlassCard className="mx-auto max-w-2xl px-6 py-12 text-center sm:px-10">
          {loading ? (
            <div className="flex flex-col items-center gap-4">
              <LoaderCircle aria-hidden className="size-10 animate-spin text-brand-accent" />
              <p className="text-muted-foreground">Confirming your payment…</p>
            </div>
          ) : (
            <>
              <CheckCircle2
                aria-hidden
                className="mx-auto size-12 text-brand-success"
              />
              <h1 className="mt-6 font-heading text-4xl font-bold text-white">
                {checkoutSuccessCopy.title}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                {error ?? checkoutSuccessCopy.description}
              </p>

              {orderReference ? (
                <p className="mt-6 text-sm text-white/80">
                  {checkoutSuccessCopy.referenceLabel}:{" "}
                  <span className="font-semibold text-brand-accent">
                    {orderReference}
                  </span>
                </p>
              ) : null}

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <WhatsAppOrderButton href={whatsappUrl} eventSource="checkout_success">
                  {checkoutSuccessCopy.whatsappHint}
                </WhatsAppOrderButton>
                <Link
                  href="/"
                  className="text-sm font-semibold text-brand-accent hover:text-white"
                >
                  Back to home
                </Link>
              </div>
            </>
          )}
        </GlassCard>
      </Container>
    </main>
  );
}
