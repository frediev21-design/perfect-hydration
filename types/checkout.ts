import type { OrderCalculation } from "@/types/order";

export type PaymentProvider = "payfast" | "paypal";

export type OrderStatus =
  | "pending"
  | "paid"
  | "failed"
  | "cancelled";

export interface CheckoutCustomer {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  deliveryAddress: string;
}

export interface CheckoutOrder {
  id: string;
  productId: string;
  productName: string;
  customer: CheckoutCustomer;
  calculation: OrderCalculation;
  provider: PaymentProvider;
  status: OrderStatus;
  createdAt: string;
  paidAt?: string;
  providerReference?: string;
}

export interface PayFastFormPayload {
  actionUrl: string;
  fields: Record<string, string>;
}

export interface PayPalCheckoutPayload {
  approvalUrl: string;
  orderId: string;
}
