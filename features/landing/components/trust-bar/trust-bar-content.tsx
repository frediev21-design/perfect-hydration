"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";

import { Container } from "@/components/shared/container";
import {
  trustBarConfig,
  trustIndustries,
} from "@/lib/config/trust-bar";
import { cn } from "@/lib/utils";

function StarRating({ count }: { count: number }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className="flex items-center gap-1"
      aria-label={`${count} out of 5 stars`}
    >
      {Array.from({ length: count }, (_, index) => (
        <motion.span
          key={index}
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: index * 0.08,
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Star
            aria-hidden
            className="size-4 fill-brand-accent text-brand-accent"
          />
        </motion.span>
      ))}
    </div>
  );
}

function IndustryBadge({
  label,
  icon: Icon,
}: {
  label: string;
  icon: (typeof trustIndustries)[number]["icon"];
}) {
  return (
    <div className="flex shrink-0 items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2">
      <span className="flex size-8 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent">
        <Icon aria-hidden className="size-4" />
      </span>
      <span className="text-sm font-medium text-white/90">{label}</span>
    </div>
  );
}

export function TrustBarContent() {
  const shouldReduceMotion = useReducedMotion();
  const marqueeItems = [...trustIndustries, ...trustIndustries];

  return (
    <section
      aria-label="Trust and social proof"
      className="relative overflow-hidden border-y border-white/8 bg-brand-primary/30 py-6 sm:py-8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(2,8,23,0.85)_0%,transparent_12%,transparent_88%,rgba(2,8,23,0.85)_100%)]"
      />

      <Container>
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-2 text-center lg:items-start lg:text-left"
          >
            <StarRating count={trustBarConfig.rating} />
            <p className="font-heading text-lg font-extrabold tracking-tight text-white sm:text-xl">
              {trustBarConfig.headline}
            </p>
            <p className="text-sm text-muted-foreground">
              {trustBarConfig.subheadline}
            </p>
          </motion.div>

          <div className="hidden items-center gap-3 xl:flex">
            {trustIndustries.map((industry) => (
              <IndustryBadge
                key={industry.id}
                label={industry.label}
                icon={industry.icon}
              />
            ))}
          </div>
        </div>
      </Container>

      <div className="relative mt-6 overflow-hidden xl:hidden">
        <motion.div
          className="flex w-max gap-3 px-5"
          animate={shouldReduceMotion ? undefined : { x: ["0%", "-50%"] }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {marqueeItems.map((industry, index) => (
            <IndustryBadge
              key={`${industry.id}-${index}`}
              label={industry.label}
              icon={industry.icon}
            />
          ))}
        </motion.div>
      </div>

      <div className="mt-6 hidden items-center justify-center gap-3 px-5 sm:flex xl:hidden">
        {trustIndustries.map((industry, index) => (
          <motion.div
            key={industry.id}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06, duration: 0.45 }}
            className={cn(index >= 3 && "hidden md:block")}
          >
            <IndustryBadge label={industry.label} icon={industry.icon} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
