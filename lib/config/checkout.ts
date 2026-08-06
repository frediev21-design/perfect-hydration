export const checkoutSection = {
  title: "Secure Checkout",
  description:
    "Pay online for Gauteng delivery. Card, EFT, and Instant EFT via PayFast — or PayPal where available.",
  gautengNote:
    "Online checkout is available for Gauteng delivery. Outside Gauteng? Order on Bobshop for nationwide shipping.",
  whatsappFallback: "Prefer WhatsApp? Order manually instead.",
  payNowLabel: "Pay Securely",
  processingLabel: "Redirecting to payment…",
  summaryTitle: "Order Summary",
  productLabel: "5L Deionised Water",
  paymentMethodsTitle: "Payment method",
  payfastLabel: "PayFast",
  payfastDescription: "Card, EFT, Instant EFT, Mobicred",
  paypalLabel: "PayPal",
  paypalDescription: "PayPal account or card",
  noPaymentMethods:
    "Online payments are not configured yet. Order via WhatsApp or Bobshop.",
} as const;

export const checkoutSuccessCopy = {
  title: "Payment Received",
  description:
    "Thank you — your order is confirmed. We will contact you shortly to arrange Gauteng delivery.",
  referenceLabel: "Order reference",
  whatsappHint: "Need to add delivery details? Message us on WhatsApp.",
} as const;

export const checkoutCancelCopy = {
  title: "Payment Cancelled",
  description:
    "Your payment was not completed. You can try again or order via WhatsApp.",
  retryLabel: "Return to checkout",
  whatsappLabel: "Order via WhatsApp",
} as const;
