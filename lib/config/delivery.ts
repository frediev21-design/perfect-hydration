import type { DeliveryArea } from "@/types/content";

export const deliverySection = {
  eyebrow: "Delivery",
  title: "Gauteng Delivery Available",
  description:
    "Direct delivery across major Gauteng hubs. For nationwide orders, purchase through Bobshop.",
  mapLabel: "Delivery coverage map",
  coverageNote: "Gauteng delivery available.",
  bobshopTitle: "Nationwide via Bobshop",
  bobshopNote:
    "For orders outside Gauteng, purchase through Bobshop with delivery across South Africa.",
  bobshopLabel: "Buy on Bobshop",
} as const;

export const deliveryAreas: DeliveryArea[] = [
  {
    id: "pretoria",
    name: "Pretoria",
    description: "Pretoria CBD, Menlyn, Brooklyn, and northern suburbs.",
    mapX: 52,
    mapY: 22,
  },
  {
    id: "centurion",
    name: "Centurion",
    description: "Centurion, Irene, Highveld, and surrounding business parks.",
    mapX: 50,
    mapY: 36,
  },
  {
    id: "midrand",
    name: "Midrand",
    description: "Midrand, Halfway House, Kyalami, and Waterfall.",
    mapX: 48,
    mapY: 48,
  },
  {
    id: "johannesburg",
    name: "Johannesburg",
    description: "Sandton, Rosebank, Randburg, and inner-city areas.",
    mapX: 46,
    mapY: 58,
  },
  {
    id: "east-rand",
    name: "East Rand",
    description: "Boksburg, Benoni, Kempton Park, and Germiston.",
    mapX: 68,
    mapY: 62,
  },
  {
    id: "west-rand",
    name: "West Rand",
    description: "Roodepoort, Krugersdorp, and western industrial zones.",
    mapX: 28,
    mapY: 60,
  },
];
