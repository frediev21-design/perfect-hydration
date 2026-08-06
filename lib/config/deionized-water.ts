export const deionizedWaterSection = {
  eyebrow: "Product Education",
  title: "What is Deionised Water?",
  description:
    "Ultra-pure water produced by removing dissolved minerals and ions — essential for systems where tap water causes scale, corrosion, or contamination.",
  columns: [
    {
      id: "process",
      title: "Process",
      items: [
        "Pre-filtration removes sediment and chlorine",
        "Reverse Osmosis strips dissolved solids",
        "Deionization removes remaining ions",
      ],
    },
    {
      id: "spec",
      title: "Specification",
      items: [
        "Conductivity ≤1 µS/cm @ 25°C",
        "TDS ≤1 mg/L",
        "pH 5.0–6.7",
      ],
      footnote:
        "Internal QC targets 0 µS/cm under controlled testing. Certified values shown above.",
    },
    {
      id: "applications",
      title: "Key Applications",
      items: [
        "Battery and radiator top-ups",
        "Coolant mixing",
        "Laboratory and industrial rinse",
        "CO₂ laser tube cooling",
      ],
      link: {
        label: "See all applications",
        href: "/#applications",
      },
    },
  ],
} as const;
