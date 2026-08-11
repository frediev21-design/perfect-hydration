"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { WhatsAppOrderButton } from "@/features/orders/components/whatsapp-order-button";
import { useStickyCtaVisibility } from "@/hooks/use-sticky-cta-visibility";
import { stickyCtaConfig } from "@/lib/config/sticky-cta";

interface StickyMobileCtaProps {
  whatsappUrl: string;
}

export function StickyMobileCta({ whatsappUrl }: StickyMobileCtaProps) {
  const visible = useStickyCtaVisibility();
  const shouldReduceMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          role="region"
          aria-label="Quick order"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-background/92 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-xl lg:hidden"
        >
          <div className="mx-auto flex max-w-lg items-center gap-3">
            <p className="min-w-0 shrink-0 font-heading text-sm font-bold text-white">
              {stickyCtaConfig.priceHint}
            </p>
            <WhatsAppOrderButton
              href={whatsappUrl}
              size="sm"
              className="shrink-0 px-5"
              eventSource="sticky_mobile_cta"
            >
              {stickyCtaConfig.label}
            </WhatsAppOrderButton>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
