import { NextResponse } from "next/server";

import { getOrder } from "@/lib/services/order-repository.service";
import { toPublicOrderSummary } from "@/lib/services/order-query.service";

interface OrderRouteProps {
  params: Promise<{ orderId: string }>;
}

export async function GET(_request: Request, { params }: OrderRouteProps) {
  const { orderId } = await params;
  const order = getOrder(orderId);

  if (!order) {
    return NextResponse.json({ error: "Order not found" }, { status: 404 });
  }

  return NextResponse.json({ order: toPublicOrderSummary(order) });
}
