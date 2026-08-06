import { env } from "@/lib/config/env";

export interface WhatsAppOrderOptions {
  quantity?: number;
  deliveryAddress?: string;
  quote?: boolean;
}

const DEFAULT_ORDER_MESSAGE = `Hi Perfect Hydration,

I would like to order the 5L Automotive Grade Deionised Water.

Quantity:

Delivery Address:`;

const DEFAULT_QUOTE_MESSAGE = `Hi Perfect Hydration,

I would like to request a quote for the 5L Automotive Grade Deionised Water.

Quantity:

Delivery Address:`;

const DEFAULT_BUSINESS_MESSAGE = `Hi Perfect Hydration,

I am interested in a business account for recurring deionised water deliveries.

Company name:

Estimated monthly volume:

Delivery address:`;

/**
 * Builds a WhatsApp deep link with a pre-filled order message.
 */
export function buildWhatsAppOrderUrl(
  options: WhatsAppOrderOptions = {},
): string {
  const { quantity, deliveryAddress, quote = false } = options;

  let message = quote ? DEFAULT_QUOTE_MESSAGE : DEFAULT_ORDER_MESSAGE;

  if (quantity !== undefined) {
    message = message.replace(
      "Quantity:",
      `Quantity: ${quantity}`,
    );
  }

  if (deliveryAddress) {
    message = message.replace(
      "Delivery Address:",
      `Delivery Address: ${deliveryAddress}`,
    );
  }

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

/**
 * Builds a WhatsApp deep link for business account enquiries.
 */
export function buildWhatsAppBusinessUrl(): string {
  const encodedMessage = encodeURIComponent(DEFAULT_BUSINESS_MESSAGE);
  return `https://wa.me/${env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodedMessage}`;
}
