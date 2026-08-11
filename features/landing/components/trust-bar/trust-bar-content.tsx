"use client";

import { motion, useReducedMotion } from "framer-motion";

import { Container } from "@/components/shared/container";
import { trustStripItems } from "@/lib/config/trust-bar";

export function TrustBarContent() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Product trust indicators"
      className="border-y border-white/8 bg-brand-primary/30 py-5 sm:py-6"
    >
      <Container>
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          {trustStripItems.map((item, index) => (
            <motion.li
              key={item.id}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="flex flex-col items-center text-center"
            >
              <span className="font-heading text-sm font-bold uppercase tracking-[0.14em] text-white sm:text-base">
                {item.value}
              </span>
              <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground sm:text-xs">
                {item.label}
              </span>
            </motion.li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
