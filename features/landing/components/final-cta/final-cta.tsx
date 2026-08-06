"use client";

import { motion, useReducedMotion } from "framer-motion";

import { GlassCard } from "@/components/shared/glass-card";
import { CallButton } from "@/features/orders/components/call-button";
import { WhatsAppOrderButton } from "@/features/orders/components/whatsapp-order-button";
import { finalCtaSection } from "@/lib/config/final-cta";
import { siteConfig } from "@/lib/config/site";

interface FinalCtaProps {
  whatsappUrl: string;
}

export function FinalCta({ whatsappUrl }: FinalCtaProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="order"
      aria-label="Order deionized water"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,174,239,0.12),transparent_65%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent"
        aria-hidden
      />

      <motion.div
        className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <GlassCard className="relative overflow-hidden px-6 py-12 text-center sm:px-12 sm:py-16">
          <div
            className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-brand-accent/10 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-16 size-56 rounded-full bg-brand-electric/10 blur-3xl"
            aria-hidden
          />

          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-accent">
            {finalCtaSection.eyebrow}
          </p>
          <h2 className="mt-4 font-heading text-4xl tracking-tight text-white sm:text-5xl lg:text-6xl">
            {finalCtaSection.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {finalCtaSection.description}
          </p>

          <p className="mt-6 text-sm font-medium uppercase tracking-widest text-white/80">
            {finalCtaSection.priceHint}
            <span className="mx-2 text-white/30">·</span>
            {siteConfig.commerce.freeDeliveryThreshold}+ bottles = free delivery
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <WhatsAppOrderButton href={whatsappUrl}>
              {finalCtaSection.whatsappLabel}
            </WhatsAppOrderButton>
            <CallButton>{finalCtaSection.callLabel}</CallButton>
          </div>
        </GlassCard>
      </motion.div>
    </section>
  );
}
