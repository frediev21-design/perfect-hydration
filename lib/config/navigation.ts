import type { FooterLinkGroup, NavLink } from "@/types/navigation";

export const mainNavLinks: NavLink[] = [
  { label: "Applications", href: "/#applications" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Business", href: "/#business" },
  { label: "Checkout", href: "/checkout" },
  { label: "FAQ", href: "/#faq" },
];

export const productNavLinks: NavLink[] = [
  { label: "Deionised Water", href: "/products/deionized-water" },
];

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Company",
    links: [
      { label: "Why Perfect Hydration", href: "/#why" },
      { label: "Testimonials", href: "/#testimonials" },
      { label: "Delivery Areas", href: "/#delivery" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Products",
    links: [
      {
        label: "5L Deionised Water",
        href: "/products/deionized-water",
      },
      { label: "Specifications", href: "/#specifications" },
      { label: "Bulk Pricing", href: "/#pricing" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Checkout Online", href: "/checkout" },
      { label: "Order via WhatsApp", href: "whatsapp", external: true },
      { label: "Order on Bobshop", href: "bobshop", external: true },
      { label: "Call Us", href: "tel", external: true },
      { label: "Email Us", href: "mailto", external: true },
    ],
  },
];

export const navigationConfig = {
  mainNavLinks,
  productNavLinks,
  footerLinkGroups,
} as const;
