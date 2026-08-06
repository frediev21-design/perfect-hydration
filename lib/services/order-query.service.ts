import type { CheckoutOrder } from "@/types/checkout";

export interface PublicOrderSummary {
  id: string;
  status: CheckoutOrder["status"];
  productName: string;
  quantity: number;
  total: number;
  createdAt: string;
  paidAt?: string;
}

export function toPublicOrderSummary(order: CheckoutOrder): PublicOrderSummary {
  return {
    id: order.id,
    status: order.status,
    productName: order.productName,
    quantity: order.calculation.quantity,
    total: order.calculation.total,
    createdAt: order.createdAt,
    paidAt: order.paidAt,
  };
}
