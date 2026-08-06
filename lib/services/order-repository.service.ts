import type { CheckoutOrder, OrderStatus } from "@/types/checkout";

/**
 * In-memory order store for Sprint E.
 * Replace with Supabase/PostgreSQL before production scale.
 */
const orders = new Map<string, CheckoutOrder>();

export function saveOrder(order: CheckoutOrder): void {
  orders.set(order.id, order);
}

export function getOrder(orderId: string): CheckoutOrder | null {
  return orders.get(orderId) ?? null;
}

export function updateOrderStatus(
  orderId: string,
  status: OrderStatus,
  providerReference?: string,
): CheckoutOrder | null {
  const order = orders.get(orderId);

  if (!order) {
    return null;
  }

  const updated: CheckoutOrder = {
    ...order,
    status,
    providerReference: providerReference ?? order.providerReference,
    paidAt: status === "paid" ? new Date().toISOString() : order.paidAt,
  };

  orders.set(orderId, updated);
  return updated;
}

export function listOrders(): CheckoutOrder[] {
  return Array.from(orders.values());
}
