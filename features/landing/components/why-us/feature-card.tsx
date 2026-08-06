"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import { GlassCard } from "@/components/shared/glass-card";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  highlight?: string;
  icon: LucideIcon;
  index: number;
}

export function FeatureCard({
  title,
  description,
  highlight,
  icon: Icon,
  index,
}: FeatureCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              y: -8,
              transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
            }
      }
      className="group h-full"
    >
      <GlassCard className="relative h-full overflow-hidden p-6 transition-[border-color,box-shadow] duration-300 group-hover:border-brand-accent/25 group-hover:shadow-[0_16px_48px_rgba(0,174,239,0.12)] sm:p-8">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-brand-accent/5 blur-2xl transition-opacity duration-300 group-hover:bg-brand-accent/10"
        />

        <div className="relative">
          <div className="mb-5 flex size-12 items-center justify-center rounded-2xl border border-brand-accent/20 bg-brand-accent/10 text-brand-accent transition-transform duration-300 group-hover:scale-105">
            <Icon aria-hidden className="size-5" />
          </div>

          <h3 className="font-heading text-xl font-extrabold text-white">
            {title}
          </h3>

          {highlight ? (
            <p className="mt-2 font-heading text-2xl text-brand-accent">
              {highlight}
            </p>
          ) : null}

          <p
            className={cn(
              "text-sm leading-relaxed text-muted-foreground sm:text-base",
              highlight ? "mt-3" : "mt-3",
            )}
          >
            {description}
          </p>
        </div>
      </GlassCard>
    </motion.article>
  );
}
