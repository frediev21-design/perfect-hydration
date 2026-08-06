"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Building2, Check, MessageCircle } from "lucide-react";

import { GlassCard } from "@/components/shared/glass-card";
import { Button } from "@/components/ui/button";
import { trackConversionEvent } from "@/lib/analytics/events";
import type { PricingTier } from "@/lib/config/pricing-tiers";
import {
  buildWhatsAppBusinessUrl,
  buildWhatsAppOrderUrl,
} from "@/lib/utils/whatsapp";
import { cn } from "@/lib/utils";

function getTierHref(tier: PricingTier): string {
  if (tier.business) {
    return buildWhatsAppBusinessUrl();
  }

  return buildWhatsAppOrderUrl({
    quantity: tier.orderQuantity,
    quote: tier.quote,
  });
}

function getTierIcon(tier: PricingTier) {
  if (tier.icon === "building") {
    return Building2;
  }

  return null;
}

interface PricingTierCardProps {
  tier: PricingTier;
  index: number;
}

export function PricingTierCard({ tier, index }: PricingTierCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const Icon = getTierIcon(tier);
  const href = getTierHref(tier);

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="h-full"
    >
      <GlassCard
        className={cn(
          "relative flex h-full flex-col p-6 sm:p-7",
          tier.highlighted &&
            "border-brand-accent/35 shadow-[0_0_48px_rgba(0,174,239,0.16)]",
        )}
      >
        {tier.badge ? (
          <span className="absolute right-5 top-5 rounded-full border border-brand-accent/30 bg-brand-accent/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-accent">
            {tier.badge.toUpperCase()}
          </span>
        ) : null}

        <div className="flex items-center gap-2">
          {Icon ? (
            <Icon
              aria-hidden
              className={cn(
                "size-4",
                tier.highlighted ? "text-brand-accent" : "text-brand-accent/80",
              )}
            />
          ) : (
            <span
              aria-hidden
              className={cn(
                "text-sm leading-none",
                tier.highlighted ? "text-brand-accent" : "text-brand-accent/80",
              )}
            >
              •
            </span>
          )}
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-accent">
            {tier.label}
          </p>
        </div>

        <div className="mt-6">
          <p className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {tier.price}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">{tier.priceSuffix}</p>
        </div>

        <ul className="mt-6 flex-1 space-y-3">
          {tier.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2.5 text-sm text-muted-foreground"
            >
              <Check
                aria-hidden
                className="mt-0.5 size-4 shrink-0 text-brand-success"
              />
              {feature}
            </li>
          ))}
        </ul>

        <Button
          nativeButton={false}
          render={
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${tier.ctaLabel} via WhatsApp`}
              onClick={() => {
                trackConversionEvent("whatsapp_click", {
                  source: `pricing_tier_${tier.id}`,
                  quantity: tier.orderQuantity,
                });
              }}
            />
          }
          variant={tier.ctaVariant === "outline" ? "outline" : "default"}
          className={cn(
            "mt-8 h-11 w-full rounded-xl font-semibold",
            tier.ctaVariant === "primary" &&
              "bg-brand-accent text-white hover:bg-brand-accent/90",
            tier.ctaVariant === "outline" &&
              "border-white/15 bg-transparent text-white hover:bg-white/5",
            tier.ctaVariant === "default" &&
              "bg-brand-accent text-white hover:bg-brand-accent/90",
          )}
        >
          <MessageCircle aria-hidden className="size-4" />
          {tier.ctaLabel}
        </Button>
      </GlassCard>
    </motion.article>
  );
}
