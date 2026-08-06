import { randomUUID } from "node:crypto";

import { env } from "@/lib/config/env";
import { calculateOrder } from "@/lib/services/order-calculator.service";
import { saveOrder } from "@/lib/services/order-repository.service";
import { buildPayFastCheckout } from "@/lib/services/payfast.service";
import { buildPayPalCheckout } from "@/lib/services/paypal.service";
import { productPricing, getFeaturedProduct } from "@/lib/services/product.service";
import type { CheckoutFormValues } from "@/lib/validations/checkout";
import type {
  CheckoutOrder,
  PayFastFormPayload,
  PayPalCheckoutPayload,
} from "@/types/checkout";

export async function createCheckoutOrder(
  input: CheckoutFormValues,
): Promise<CheckoutOrder> {
  const product = await getFeaturedProduct();
  const calculation = calculateOrder({
    quantity: input.quantity,
    unitPrice: productPricing.unitPrice,
    bulkUnitPrice: productPricing.bulkUnitPrice,
    bulkThreshold: productPricing.bulkThreshold,
    vatRate: env.NEXT_PUBLIC_VAT_RATE,
    deliveryFee: env.NEXT_PUBLIC_DELIVERY_FEE,
    freeDeliveryThreshold: env.NEXT_PUBLIC_FREE_DELIVERY_THRESHOLD,
  });

  const order: CheckoutOrder = {
    id: `PH-${randomUUID().slice(0, 8).toUpperCase()}`,
    productId: product.id,
    productName: product.shortName,
    customer: {
      firstName: input.firstName,
      lastName: input.lastName,
      email: input.email,
      phone: input.phone,
      deliveryAddress: input.deliveryAddress,
    },
    calculation,
    provider: input.provider,
    status: "pending",
    createdAt: new Date().toISOString(),
  };

  saveOrder(order);
  return order;
}

export async function initiateCheckoutPayment(
  input: CheckoutFormValues,
): Promise<
  | { provider: "payfast"; order: CheckoutOrder; payment: PayFastFormPayload }
  | { provider: "paypal"; order: CheckoutOrder; payment: PayPalCheckoutPayload }
> {
  const order = await createCheckoutOrder(input);

  if (input.provider === "payfast") {
    return {
      provider: "payfast",
      order,
      payment: buildPayFastCheckout(order),
    };
  }

  return {
    provider: "paypal",
    order,
    payment: await buildPayPalCheckout(order),
  };
}
