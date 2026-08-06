import Link from "next/link";

import { Container } from "@/components/shared/container";
import { GlassCard } from "@/components/shared/glass-card";
import { WhatsAppOrderButton } from "@/features/orders/components/whatsapp-order-button";
import { checkoutCancelCopy } from "@/lib/config/checkout";
import { buildWhatsAppOrderUrl } from "@/lib/utils/whatsapp";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata = createMetadata({
  title: "Payment Cancelled",
  description: "Your checkout was cancelled.",
  path: "/checkout/cancel",
});

export default function CheckoutCancelPage() {
  const whatsappUrl = buildWhatsAppOrderUrl();

  return (
    <main id="main-content" className="min-h-screen flex-1 py-16 sm:py-20" tabIndex={-1}>
      <Container>
        <GlassCard className="mx-auto max-w-2xl px-6 py-12 text-center sm:px-10">
          <h1 className="font-heading text-4xl font-bold text-white">
            {checkoutCancelCopy.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {checkoutCancelCopy.description}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/checkout"
              className="inline-flex h-11 items-center rounded-full border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white hover:bg-white/10"
            >
              {checkoutCancelCopy.retryLabel}
            </Link>
            <WhatsAppOrderButton href={whatsappUrl} eventSource="checkout_cancel">
              {checkoutCancelCopy.whatsappLabel}
            </WhatsAppOrderButton>
          </div>
        </GlassCard>
      </Container>
    </main>
  );
}
