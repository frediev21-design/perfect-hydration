"use client";

import { motion, useReducedMotion } from "framer-motion";

import { GlassCard } from "@/components/shared/glass-card";
import {
  deionizedWaterUseCases,
} from "@/lib/config/deionized-water";
import { cn } from "@/lib/utils";
import type { DeionizedWaterUseCase } from "@/types/landing";

function UseCaseItem({
  useCase,
  index,
}: {
  useCase: DeionizedWaterUseCase;
  index: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const Icon = useCase.icon;

  return (
    <motion.li
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.45,
        delay: index * 0.04,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(useCase.featured && "sm:col-span-2")}
    >
      <GlassCard
        className={cn(
          "flex h-full gap-4 p-5",
          useCase.featured && "flex-col sm:flex-row sm:items-start",
        )}
      >
        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-brand-accent/20 bg-brand-accent/10 text-brand-accent">
          <Icon aria-hidden className="size-5" />
        </span>
        <div>
          <p className="font-heading text-base font-extrabold text-white">
            {useCase.title}
          </p>
          {useCase.description ? (
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {useCase.description}
            </p>
          ) : null}
        </div>
      </GlassCard>
    </motion.li>
  );
}

export function DeionizedWaterUses() {
  return (
    <ul className="mt-10 grid gap-4 sm:grid-cols-2">
      {deionizedWaterUseCases.map((useCase, index) => (
        <UseCaseItem key={useCase.id} useCase={useCase} index={index} />
      ))}
    </ul>
  );
}
