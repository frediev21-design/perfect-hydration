"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

import { GlassCard } from "@/components/shared/glass-card";
import { CallButton } from "@/features/orders/components/call-button";
import { WhatsAppOrderButton } from "@/features/orders/components/whatsapp-order-button";
import { heroUseCases, heroTrustChips } from "@/lib/config/hero";
import { formatPriceCompact } from "@/lib/utils/format";
import type { Product } from "@/types/product";

interface HeroContentProps {
  product: Product;
  whatsappUrl: string;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function HeroContent({ product, whatsappUrl }: HeroContentProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="flex max-w-2xl flex-col justify-center"
      variants={shouldReduceMotion ? undefined : containerVariants}
      initial={shouldReduceMotion ? false : "hidden"}
      animate="visible"
    >
      <motion.p
        variants={shouldReduceMotion ? undefined : itemVariants}
        className="mb-6 inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-brand-accent"
      >
        {product.grade}
      </motion.p>

      <motion.h1
        variants={shouldReduceMotion ? undefined : itemVariants}
        className="font-heading text-5xl leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl"
      >
        Ultra Pure
        <br />
        <span className="text-gradient-accent">Deionised Water</span>
      </motion.h1>

      <motion.div
        variants={shouldReduceMotion ? undefined : itemVariants}
        className="mt-8 space-y-4"
      >
        <p className="text-lg font-medium text-white/90 sm:text-xl">
          Professional quality for
        </p>
        <ul className="flex flex-wrap gap-2.5">
          {heroUseCases.map((useCase) => (
            <li
              key={useCase}
              className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm text-muted-foreground"
            >
              {useCase}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div variants={shouldReduceMotion ? undefined : itemVariants}>
        <GlassCard className="mt-10 inline-flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-end sm:gap-6">
          <div>
            <p className="text-sm uppercase tracking-widest text-muted-foreground">
              From
            </p>
            <p className="font-heading text-4xl text-white sm:text-5xl lg:text-6xl">
              {formatPriceCompact(product.price)}
            </p>
          </div>
          <p className="pb-1 text-sm text-muted-foreground">Per Bottle</p>
        </GlassCard>
      </motion.div>

      <motion.div
        variants={shouldReduceMotion ? undefined : itemVariants}
        className="mt-10 flex flex-col gap-4 sm:flex-row"
      >
        <WhatsAppOrderButton href={whatsappUrl} />
        <CallButton />
      </motion.div>

      <motion.ul
        variants={shouldReduceMotion ? undefined : itemVariants}
        className="mt-6 flex flex-wrap gap-2.5"
        aria-label="Product quality indicators"
      >
        {heroTrustChips.map((chip) => (
          <li
            key={chip}
            className="rounded-full border border-brand-accent/25 bg-brand-accent/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-brand-accent"
          >
            {chip}
          </li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
