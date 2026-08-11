import type { FaqItem } from "@/types/content";

export const faqSection = {
  eyebrow: "FAQ",
  title: "Questions & Answers",
  description:
    "Common questions about applications, ordering, delivery, and storage.",
} as const;

export const faqItems: FaqItem[] = [
  {
    id: "battery-use",
    question: "Can I use Perfect Hydration for batteries?",
    answer:
      "Yes. It is automotive-grade deionised water suitable for battery top-ups where low-mineral water is recommended. Always follow your battery or equipment manufacturer guidance.",
  },
  {
    id: "radiator-use",
    question: "Can I use it in a radiator?",
    answer:
      "Yes. It is suitable for radiator systems and top-ups where low-mineral water is specified. Check your vehicle or equipment requirements before use.",
  },
  {
    id: "coolant-mixing",
    question: "Can I mix it with coolant?",
    answer:
      "Yes. Deionised water is commonly used for coolant mixing where reduced mineral content is preferred. Follow the coolant manufacturer's dilution and compatibility instructions.",
  },
  {
    id: "conductivity",
    question: "What is the conductivity?",
    answer:
      "Perfect Hydration is tested to ≤1 µS/cm @ 25°C, with TDS ≤1 mg/L and pH in the 5.0–6.7 range.",
  },
  {
    id: "purification",
    question: "How is the water purified?",
    answer:
      "Each batch is processed through pre-filtration, reverse osmosis (RO), and deionisation (DI) before bottling.",
  },
  {
    id: "testing",
    question: "How is it tested?",
    answer:
      "Production batches are conductivity-checked against our specification before dispatch from our Pretoria facility.",
  },
  {
    id: "bottling-location",
    question: "Where is it bottled?",
    answer:
      "Perfect Hydration is bottled and batch-tested in Pretoria, Gauteng, South Africa.",
  },
  {
    id: "delivery-areas",
    question: "Where do you deliver?",
    answer:
      "We deliver across Gauteng including Pretoria, Centurion, Midrand, Johannesburg, East Rand, and West Rand. For nationwide delivery, order through Bobshop.",
  },
  {
    id: "free-delivery",
    question: "When is delivery free?",
    answer:
      "Orders of 6 bottles or more qualify for free delivery in Gauteng. Use the order calculator to see your total including VAT.",
  },
  {
    id: "storage",
    question: "How should I store the water?",
    answer:
      "Store bottles upright in a cool, shaded area with caps sealed. Avoid direct sunlight and contamination. Use within a reasonable period once opened.",
  },
  {
    id: "bulk-orders",
    question: "Can I buy in bulk?",
    answer:
      "Yes. Order 6 bottles at R390 (R65 per bottle), or message us for 12+ bottle and recurring supply pricing.",
  },
  {
    id: "business-supply",
    question: "Do you supply businesses?",
    answer:
      "Yes. We support workshops, fleets, laboratories and industrial operations with volume pricing, recurring deliveries, and dedicated account support via WhatsApp.",
  },
  {
    id: "outside-gauteng",
    question: "Can I order outside Gauteng?",
    answer:
      "Direct delivery is available in Gauteng. For nationwide orders, purchase through Bobshop with delivery across South Africa.",
  },
];
