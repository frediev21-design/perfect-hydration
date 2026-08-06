export interface OrderCalculationInput {
  quantity: number;
  unitPrice: number;
  vatRate: number;
  deliveryFee: number;
  freeDeliveryThreshold: number;
}

export interface OrderCalculation {
  quantity: number;
  unitPrice: number;
  subtotal: number;
  vat: number;
  delivery: number;
  deliveryIsFree: boolean;
  total: number;
}
