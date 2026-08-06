"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

import {
  comparisonFeatures,
  comparisonSection,
} from "@/lib/config/comparison";

export function ComparisonInfographic() {
  const shouldReduceMotion = useReducedMotion();
  const { infographic } = comparisonSection;

  return (
    <motion.div
      className="relative mx-auto mt-10 max-w-6xl sm:mt-12"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Image
        src={infographic.src}
        alt={infographic.alt}
        width={infographic.width}
        height={infographic.height}
        sizes="(max-width: 1280px) 100vw, 1152px"
        loading="lazy"
        className="h-auto w-full rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
      />

      <div className="sr-only">
        <h2>
          {comparisonSection.titleLead} {comparisonSection.titleAccent}
        </h2>
        <p>{comparisonSection.description}</p>
        <table>
          <caption>Tap water vs Perfect Hydration comparison</caption>
          <thead>
            <tr>
              <th scope="col">Feature</th>
              <th scope="col">{comparisonSection.tapWaterLabel}</th>
              <th scope="col">{comparisonSection.perfectHydrationLabel}</th>
            </tr>
          </thead>
          <tbody>
            {comparisonFeatures.map((feature) => (
              <tr key={feature.id}>
                <th scope="row">{feature.label}</th>
                <td>{feature.tapWater}</td>
                <td>{feature.perfectHydration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
