"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check, X } from "lucide-react";

import { GlassCard } from "@/components/shared/glass-card";
import {
  comparisonFeatures,
  comparisonSection,
} from "@/lib/config/comparison";
import { cn } from "@/lib/utils";
import type { ComparisonFeature } from "@/types/content";

function StatusCell({
  value,
  positive,
  index,
}: {
  value: string | boolean;
  positive: boolean;
  index: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const isBoolean = typeof value === "boolean";

  return (
    <motion.td
      initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04, duration: 0.35 }}
      className={cn(
        "px-4 py-4 text-center sm:px-6",
        positive ? "bg-brand-accent/5" : "bg-[rgb(255_255_255/0.02)]",
      )}
    >
      {isBoolean ? (
        value ? (
          <span className="inline-flex size-9 items-center justify-center rounded-full bg-brand-success/15 text-brand-success">
            <Check aria-hidden className="size-5" />
            <span className="sr-only">Yes</span>
          </span>
        ) : (
          <span className="inline-flex size-9 items-center justify-center rounded-full bg-destructive/15 text-destructive">
            <X aria-hidden className="size-5" />
            <span className="sr-only">No</span>
          </span>
        )
      ) : (
        <span className="text-sm font-medium text-muted-foreground">
          {value}
        </span>
      )}
    </motion.td>
  );
}

function ComparisonRow({
  feature,
  index,
}: {
  feature: ComparisonFeature;
  index: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.tr
      initial={shouldReduceMotion ? false : { opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.05, duration: 0.45 }}
      className="border-b border-white/8 last:border-b-0"
    >
      <th
        scope="row"
        className="px-4 py-4 text-left text-sm font-medium text-white sm:px-6 sm:text-base"
      >
        {feature.label}
      </th>
      <StatusCell value={feature.tapWater} positive={false} index={index} />
      <StatusCell
        value={feature.perfectHydration}
        positive={true}
        index={index}
      />
    </motion.tr>
  );
}

export function ComparisonTable() {
  return (
    <GlassCard className="mt-14 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse">
          <caption className="sr-only">{comparisonSection.title}</caption>
          <thead>
            <tr className="border-b border-white/10 bg-[rgb(255_255_255/0.03)]">
              <th
                scope="col"
                className="px-4 py-5 text-left text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground sm:px-6"
              >
                Feature
              </th>
              <th
                scope="col"
                className="px-4 py-5 text-center text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground sm:px-6"
              >
                Tap Water
              </th>
              <th
                scope="col"
                className="px-4 py-5 text-center text-xs font-semibold uppercase tracking-[0.22em] text-brand-accent sm:px-6"
              >
                Perfect Hydration
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonFeatures.map((feature, index) => (
              <ComparisonRow key={feature.id} feature={feature} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </GlassCard>
  );
}
