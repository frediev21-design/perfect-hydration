import type { FaqItem } from "@/types/content";

export const faqSection = {
  eyebrow: "FAQ",
  title: "Questions & Answers",
  description:
    "Ordering, delivery, and storage — the essentials before you buy.",
} as const;

export const faqItems: FaqItem[] = [
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
      "In Gauteng, tap Order via WhatsApp — a pre-filled message opens with our team. Add your quantity and delivery address. Outside Gauteng, use Order on Bobshop for nationwide delivery.",
  },
  {
    id: "delivery-areas",
    question: "Which areas do you deliver to?",
    answer:
      "We deliver directly across Gauteng including Pretoria, Centurion, Johannesburg, Midrand, East Rand, and West Rand. Outside Gauteng? Order on Bobshop for nationwide delivery across South Africa.",
  },
  {
    id: "free-delivery",
    question: "When is delivery free?",
    answer:
      "Orders of 6 bottles or more qualify for free delivery in Gauteng. Use the bulk calculator on the pricing section to estimate your total including VAT.",
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
      "Order via WhatsApp for direct Gauteng delivery — payment details confirmed when you message us. For nationwide orders, Bobshop accepts card, EFT, and other marketplace payment options.",
  },
];
