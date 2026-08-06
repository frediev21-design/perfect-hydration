export const pricingSection = {
  eyebrow: "Pricing",
  title: "Order More, Save More",
  description:
    "Drag the quantity to see your live total, VAT and delivery — then order straight to WhatsApp.",
  priceLabel: "Only",
  priceSuffix: "Per Bottle",
  quantityLabel: "Quantity",
  bottlesLabel: "bottles",
  freeDeliveryUnlocked: "Free delivery unlocked",
  freeDeliveryHint: "Add more bottles to unlock free delivery",
  specialOfferLabel: "Special Offer",
  lineItemLabel: "5L bottle",
  orderNowLabel: "Order Now",
  checkoutOnlineLabel: "Checkout Online",
  requestQuoteLabel: "Request Quote",
  freeDeliveryLabel: "FREE",
  effectiveCostLabel: "Effective cost per bottle",
  deliverySavingsPrefix: "You saved",
  deliverySavingsSuffix: "on delivery",
} as const;

export const quantityPresets = [1, 6, 12, 24] as const;

export const calculatorLimits = {
  min: 1,
  max: 50,
} as const;
