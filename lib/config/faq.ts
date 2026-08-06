import type { FaqItem } from "@/types/content";

export const faqSection = {
  eyebrow: "FAQ",
  title: "Questions & Answers",
  description:
    "Everything you need to know about ordering ultra pure deionised water from Perfect Hydration.",
} as const;

export const faqItems: FaqItem[] = [
  {
    id: "what-is-deionized-water",
    question: "What is deionised water?",
    answer:
      "Perfect Hydration Ultra-Pure Deionised Water is produced using pre-filtration, Reverse Osmosis (RO), and Deionization (DI) to remove dissolved minerals, salts, and ionic contaminants — resulting in ultra-low conductivity and TDS. See our What is Deionised Water section for full details, quality targets, and applications.",
  },
  {
    id: "automotive-use",
    question: "Can I use this for car batteries and radiators?",
    answer:
      "Yes. Perfect Hydration deionised water is automotive grade and suitable for battery top-ups, radiator refills, and coolant mixing where low-mineral water is recommended by manufacturers.",
  },
  {
    id: "how-to-order",
    question: "How do I place an order?",
    answer:
      "Tap Order via WhatsApp anywhere on the site for Gauteng delivery — a pre-filled message opens in WhatsApp. Add your quantity and delivery address, and our team will confirm your order. For nationwide delivery, use Order on Bobshop.",
  },
  {
    id: "delivery-areas",
    question: "Which areas do you deliver to?",
    answer:
      "We deliver directly across Gauteng including Pretoria, Centurion, Johannesburg, Midrand, East Rand, and West Rand — order via WhatsApp. Outside Gauteng? Order on Bobshop for nationwide delivery across South Africa.",
  },
  {
    id: "outside-gauteng",
    question: "Can I order if I'm outside Gauteng?",
    answer:
      "Yes. Perfect Hydration is available on Bobshop with delivery nationwide across South Africa. Use the Order on Bobshop button on our delivery section or footer to shop directly on Bobshop.",
  },
  {
    id: "free-delivery",
    question: "When is delivery free?",
    answer:
      "Orders of 6 bottles or more qualify for free delivery. Use the bulk calculator on the pricing section to estimate your total including VAT.",
  },
  {
    id: "storage",
    question: "How should I store the water?",
    answer:
      "Store bottles upright in a cool, shaded area with caps sealed. Avoid direct sunlight and contamination. Use within a reasonable period once opened for best results.",
  },
  {
    id: "payment",
    question: "What payment methods do you accept?",
    answer:
      "Order via WhatsApp for direct Gauteng delivery, or shop on Bobshop for nationwide shipping. Payment details for WhatsApp orders are confirmed when you message us. Bobshop accepts card, EFT, and other marketplace payment options.",
  },
];
