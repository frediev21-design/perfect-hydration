export const originSection = {
  eyebrow: "Our Origin",
  title: "Bottled in Pretoria · Tested Before Dispatch",
  description:
    "Every 5L bottle is filled at our Pretoria facility using pre-filtration, reverse osmosis, and deionization — then batch-checked for conductivity before it leaves.",
  location: {
    city: "Pretoria",
    region: "Gauteng",
    country: "South Africa",
  },
  pillars: [
    {
      id: "process",
      title: "Pre-filtration · RO · DI",
      description:
        "Multi-stage purification removes dissolved minerals and impurities at source.",
    },
    {
      id: "qc",
      title: "Batch conductivity checks",
      description:
        "Each production run is tested against our ≤1 µS/cm specification before bottling.",
    },
    {
      id: "delivery",
      title: "Same-week Gauteng delivery",
      description:
        "Orders ship from Pretoria for fast workshop and fleet turnaround across Gauteng.",
    },
  ],
} as const;
