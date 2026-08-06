"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Truck } from "lucide-react";

import { deliveryAreas } from "@/lib/config/delivery";
import { cn } from "@/lib/utils";

export function DeliveryAreas() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {deliveryAreas.map((area, index) => (
        <motion.article
          key={area.id}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: 0.45,
            delay: index * 0.06,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={cn(
            "rounded-2xl border border-white/10 bg-[rgb(255_255_255/0.04)] p-5 backdrop-blur-xl",
            "transition-[border-color,box-shadow] duration-300 hover:border-brand-accent/30",
            "hover:shadow-[0_12px_40px_rgba(0,174,239,0.1)]",
          )}
        >
          <div className="mb-3 flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-full border border-brand-accent/20 bg-brand-accent/10 text-brand-accent">
              <Truck aria-hidden className="size-4" />
            </span>
            <h3 className="font-heading text-lg font-extrabold text-white">
              {area.name}
            </h3>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {area.description}
          </p>
        </motion.article>
      ))}
    </div>
  );
}
