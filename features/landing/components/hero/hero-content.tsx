"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

import { BobshopOrderButton } from "@/features/orders/components/bobshop-order-button";
import { WhatsAppOrderButton } from "@/features/orders/components/whatsapp-order-button";
import { bobshopConfig } from "@/lib/config/bobshop";
import { heroContent } from "@/lib/config/hero";

interface HeroContentProps {
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

export function HeroContent({ whatsappUrl }: HeroContentProps) {
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
        {heroContent.eyebrow}
      </motion.p>

      <motion.h1
        variants={shouldReduceMotion ? undefined : itemVariants}
        className="font-heading text-5xl leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl"
      >
        {heroContent.titleLead}
        <br />
        <span className="text-gradient-accent">{heroContent.titleAccent}</span>
      </motion.h1>

      <motion.p
        variants={shouldReduceMotion ? undefined : itemVariants}
        className="mt-8 max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl"
      >
        {heroContent.subline}
      </motion.p>

      <motion.ul
        variants={shouldReduceMotion ? undefined : itemVariants}
        className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground"
        aria-label="Product specifications"
      >
        {heroContent.specLine.map((spec) => (
          <li key={spec} className="flex items-center gap-2">
            <span
              aria-hidden
              className="size-1.5 rounded-full bg-brand-accent"
            />
            {spec}
          </li>
        ))}
      </motion.ul>

      <motion.div
        variants={shouldReduceMotion ? undefined : itemVariants}
        className="mt-8 flex flex-wrap items-baseline gap-x-4 gap-y-1"
      >
        <p className="font-heading text-3xl text-white sm:text-4xl">
          {heroContent.priceLabel}
        </p>
        <p className="text-sm text-brand-accent">{heroContent.deliveryNote}</p>
      </motion.div>

      <motion.div
        variants={shouldReduceMotion ? undefined : itemVariants}
        className="mt-10 flex flex-col gap-4 sm:flex-row"
      >
        <WhatsAppOrderButton href={whatsappUrl} eventSource="hero">
          {heroContent.primaryCta}
        </WhatsAppOrderButton>
        <BobshopOrderButton href={bobshopConfig.url} eventSource="hero">
          {heroContent.secondaryCta}
        </BobshopOrderButton>
      </motion.div>
    </motion.div>
  );
}
