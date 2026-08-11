export const pricingSection = {
  eyebrow: "Order Calculator",
  title: "Calculate Your Order",
  description:
    "Adjust quantity to see product total, VAT, delivery and final amount before ordering.",
  priceLabel: "Only",
  priceSuffix: "Per Bottle",
  quantityLabel: "Quantity",
  bottlesLabel: "bottles",
  freeDeliveryUnlocked: "Free delivery unlocked",
  freeDeliveryHint: "Add more bottles to unlock free delivery",
  specialOfferLabel: "Free Delivery",
  productLabel: "Product",
  productTotalLabel: "Product Total",
  vatLabel: "VAT",
  deliveryLabel: "Delivery",
  totalLabel: "Total",
  lineItemLabel: "5L bottle",
  orderNowLabel: "Order via WhatsApp",
  checkoutOnlineLabel: "Checkout Online",
  requestQuoteLabel: "Request Business Pricing",
  freeDeliveryLabel: "FREE",
} as const;

export const quantityPresets = [1, 6, 12, 24] as const;

export const calculatorLimits = {
  min: 1,
  max: 50,
} as const;
