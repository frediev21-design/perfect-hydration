"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check, Droplets, FlaskConical, X } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { GlassCard } from "@/components/shared/glass-card";
import {
  comparisonFeatures,
  comparisonSection,
} from "@/lib/config/comparison";
import { cn } from "@/lib/utils";
import type { ComparisonFeature } from "@/types/content";

function HexPattern() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 size-full opacity-[0.18]"
      aria-hidden
    >
      <defs>
        <pattern
          id="comparison-hex"
          width="28"
          height="48"
          patternUnits="userSpaceOnUse"
          patternTransform="scale(1.2)"
        >
          <path
            d="M14 2 L26 9 L26 23 L14 30 L2 23 L2 9 Z"
            fill="none"
            stroke="rgb(0 174 239 / 0.45)"
            strokeWidth="0.75"
          />
          <path
            d="M14 30 L26 37 L26 46 L14 46 L2 46 L2 37 Z"
            fill="none"
            stroke="rgb(0 174 239 / 0.25)"
            strokeWidth="0.75"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#comparison-hex)" />
    </svg>
  );
}

function ComparisonRow({
  feature,
  variant,
  index,
}: {
  feature: ComparisonFeature;
  variant: "negative" | "positive";
  index: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const isPositive = variant === "positive";
  const value = isPositive ? feature.perfectHydration : feature.tapWater;

  return (
    <motion.li
      initial={shouldReduceMotion ? false : { opacity: 0, x: isPositive ? 12 : -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className="flex items-center justify-between gap-4 border-b border-white/8 py-4 last:border-b-0"
    >
      <span className="text-sm font-medium text-white/90 sm:text-base">
        {feature.label}
      </span>
      <span
        className={cn(
          "inline-flex items-center gap-2 text-sm font-medium sm:text-base",
          isPositive ? "text-brand-accent" : "text-muted-foreground",
        )}
      >
        {isPositive ? (
          <Check aria-hidden className="size-4 shrink-0 text-brand-success" />
        ) : (
          <X aria-hidden className="size-4 shrink-0 text-destructive/80" />
        )}
        {value}
      </span>
    </motion.li>
  );
}

function ComparisonCard({
  title,
  icon: Icon,
  variant,
}: {
  title: string;
  icon: LucideIcon;
  variant: "negative" | "positive";
}) {
  const shouldReduceMotion = useReducedMotion();
  const isPositive = variant === "positive";

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <GlassCard
        className={cn(
          "relative h-full overflow-hidden p-6 sm:p-8",
          isPositive &&
            "border-brand-accent/35 shadow-[0_0_48px_rgba(0,174,239,0.18),0_8px_32px_rgba(0,0,0,0.35)]",
        )}
      >
        {isPositive ? <HexPattern /> : null}

        <div className="relative flex items-center gap-3">
          <span
            className={cn(
              "flex size-10 items-center justify-center rounded-xl border",
              isPositive
                ? "border-brand-accent/30 bg-brand-accent/15 text-brand-accent"
                : "border-white/10 bg-white/5 text-muted-foreground",
            )}
          >
            <Icon aria-hidden className="size-5" />
          </span>
          <h3 className="font-heading text-xl font-extrabold text-white sm:text-2xl">
            {title}
          </h3>
        </div>

        <ul className="relative mt-6">
          {comparisonFeatures.map((feature, index) => (
            <ComparisonRow
              key={`${variant}-${feature.id}`}
              feature={feature}
              variant={variant}
              index={index}
            />
          ))}
        </ul>
      </GlassCard>
    </motion.article>
  );
}

export function ComparisonCards() {
  return (
    <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
      <ComparisonCard
        title={comparisonSection.tapWaterLabel}
        icon={Droplets}
        variant="negative"
      />
      <ComparisonCard
        title={comparisonSection.perfectHydrationLabel}
        icon={FlaskConical}
        variant="positive"
      />
    </div>
  );
}
