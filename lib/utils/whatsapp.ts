import { env } from "@/lib/config/env";

export interface WhatsAppOrderOptions {
  quantity?: number;
  deliveryAddress?: string;
}

const DEFAULT_ORDER_MESSAGE = `Hi Perfect Hydration,

I would like to order the 5L Automotive Grade Deionized Water.

Quantity:

Delivery Address:`;

/**
 * Builds a WhatsApp deep link with a pre-filled order message.
 */
export function buildWhatsAppOrderUrl(
  options: WhatsAppOrderOptions = {},
): string {
  const { quantity, deliveryAddress } = options;

  let message = DEFAULT_ORDER_MESSAGE;

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
