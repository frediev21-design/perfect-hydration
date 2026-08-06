import type { FooterLinkGroup, NavLink } from "@/types/navigation";

export const mainNavLinks: NavLink[] = [
  { label: "Why Us", href: "/#why" },
  { label: "Applications", href: "/#applications" },
  { label: "Specifications", href: "/#specifications" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
];

export const productNavLinks: NavLink[] = [
  { label: "Deionized Water", href: "/products/deionized-water" },
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
        label: "5L Deionized Water",
        href: "/products/deionized-water",
      },
      { label: "Specifications", href: "/#specifications" },
      { label: "Bulk Pricing", href: "/#pricing" },
    ],
  },
  {
    title: "Contact",
    links: [
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
