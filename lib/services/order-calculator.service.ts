import type {
  OrderCalculation,
  OrderCalculationInput,
} from "@/types/order";

/**
 * Calculates order totals including VAT and conditional delivery fee.
 */
export function calculateOrder(
  input: OrderCalculationInput,
): OrderCalculation {
  const quantity = Math.max(1, Math.floor(input.quantity));
  const subtotal = quantity * input.unitPrice;
  const vat = subtotal * input.vatRate;
  const deliveryIsFree = quantity >= input.freeDeliveryThreshold;
  const delivery = deliveryIsFree ? 0 : input.deliveryFee;
  const total = subtotal + vat + delivery;

  return {
    quantity,
    unitPrice: input.unitPrice,
    subtotal,
    vat,
    delivery,
    deliveryIsFree,
    total,
  };
}
