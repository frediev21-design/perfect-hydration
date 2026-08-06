"use client";

import { CheckCircle2, LoaderCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { GlassCard } from "@/components/shared/glass-card";
import { Container } from "@/components/shared/container";
import { OrderNumberBadge } from "@/features/checkout/components/order-number-badge";
import { WhatsAppOrderButton } from "@/features/orders/components/whatsapp-order-button";
import { trackConversionEvent } from "@/lib/analytics/events";
import { checkoutSuccessCopy } from "@/lib/config/checkout";
import { formatCurrency } from "@/lib/utils/format";
import { buildWhatsAppOrderUrl } from "@/lib/utils/whatsapp";
import type { PublicOrderSummary } from "@/lib/services/order-query.service";

interface CheckoutSuccessClientProps {
  provider?: string;
  token?: string;
  orderId?: string;
}

export function CheckoutSuccessClient({
  provider,
  token,
  orderId,
}: CheckoutSuccessClientProps) {
  const [order, setOrder] = useState<PublicOrderSummary | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadOrder(referenceId: string) {
      const response = await fetch(`/api/orders/${encodeURIComponent(referenceId)}`);

      if (!response.ok) {
        return null;
      }

      const payload = (await response.json()) as { order: PublicOrderSummary };
      return payload.order;
    }

    async function resolveSuccessState() {
      try {
        if (provider === "paypal" && token) {
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

          setOrder(payload.order as PublicOrderSummary);
          trackConversionEvent("purchase", {
            source: "paypal",
            quantity: (payload.order as PublicOrderSummary).quantity,
          });
          return;
        }

        const referenceId =
          orderId ?? sessionStorage.getItem("ph_checkout_order") ?? undefined;

        if (!referenceId) {
          return;
        }

        const loadedOrder = await loadOrder(referenceId);

        if (loadedOrder) {
          setOrder(loadedOrder);

          if (loadedOrder.status === "paid") {
            trackConversionEvent("purchase", {
              source: provider ?? "payfast",
              quantity: loadedOrder.quantity,
            });
          }
        }
      } catch {
        setError("Unable to load your order details.");
      } finally {
        setLoading(false);
      }
    }

    void resolveSuccessState();
  }, [provider, token, orderId]);

  const whatsappUrl = buildWhatsAppOrderUrl({
    orderNumber: order?.id,
    quantity: order?.quantity,
  });

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

              {order ? (
                <div className="mt-8 space-y-4 text-left">
                  <OrderNumberBadge
                    orderNumber={order.id}
                    hint={checkoutSuccessCopy.trackHint}
                  />
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-muted-foreground">Product</span>
                      <span className="font-medium text-white">
                        {order.productName} x {order.quantity}
                      </span>
                    </div>
                    <div className="mt-3 flex items-center justify-between gap-4">
                      <span className="text-muted-foreground">Total paid</span>
                      <span className="font-semibold text-white">
                        {formatCurrency(order.total)}
                      </span>
                    </div>
                    <div className="mt-3 flex items-center justify-between gap-4">
                      <span className="text-muted-foreground">Status</span>
                      <span className="font-semibold capitalize text-brand-accent">
                        {order.status}
                      </span>
                    </div>
                  </div>
                </div>
              ) : orderId ? (
                <OrderNumberBadge
                  orderNumber={orderId}
                  hint={checkoutSuccessCopy.trackHint}
                  className="mt-8 text-left"
                />
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
