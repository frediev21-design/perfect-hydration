import type { FaqItem } from "@/types/content";

export const faqSection = {
  eyebrow: "FAQ",
  title: "Questions & Answers",
  description:
    "Everything you need to know about ordering ultra pure deionized water from Perfect Hydration.",
} as const;

export const faqItems: FaqItem[] = [
  {
    id: "what-is-deionized-water",
    question: "What is deionized water?",
    answer:
      "Deionized water is water that has had nearly all of its mineral ions removed through processes like reverse osmosis and deionization. The result is ultra pure water with very low conductivity, ideal for automotive, laboratory, and industrial applications.",
  },
  {
    id: "automotive-use",
    question: "Can I use this for car batteries and radiators?",
    answer:
      "Yes. Perfect Hydration deionized water is automotive grade and suitable for battery top-ups, radiator refills, and coolant mixing where low-mineral water is recommended by manufacturers.",
  },
  {
    id: "how-to-order",
    question: "How do I place an order?",
    answer:
      "Tap Order via WhatsApp anywhere on the site. A pre-filled message opens in WhatsApp — add your quantity and delivery address, and our team will confirm your order.",
  },
  {
    id: "delivery-areas",
    question: "Which areas do you deliver to?",
    answer:
      "We deliver across Gauteng including Pretoria, Centurion, Johannesburg, Midrand, East Rand, and West Rand. Contact us via WhatsApp if you are unsure about your area.",
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
      "Payment details are confirmed when you order via WhatsApp. Online card payments will be available in a future update to the Perfect Hydration platform.",
  },
];
