"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface ApplicationIconCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export function ApplicationIconCard({
  title,
  description,
  icon: Icon,
  index,
}: ApplicationIconCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={
        shouldReduceMotion
          ? undefined
          : { y: -6, transition: { duration: 0.22 } }
      }
      className="group"
    >
      <div
        className={cn(
          "relative flex h-full flex-col items-center rounded-2xl border border-white/10",
          "bg-[rgb(255_255_255/0.04)] px-5 py-8 text-center backdrop-blur-xl",
          "transition-[border-color,box-shadow,background-color] duration-300",
          "group-hover:border-brand-accent/30 group-hover:bg-[rgb(255_255_255/0.07)]",
          "group-hover:shadow-[0_12px_40px_rgba(0,174,239,0.12)]",
        )}
      >
        <motion.div
          className="mb-5 flex size-16 items-center justify-center rounded-full border border-brand-accent/20 bg-brand-accent/10 text-brand-accent"
          whileHover={
            shouldReduceMotion ? undefined : { scale: 1.08, rotate: 4 }
          }
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          <Icon aria-hidden className="size-7" />
        </motion.div>

        <h3 className="font-heading text-base font-extrabold text-white">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </motion.article>
  );
}
