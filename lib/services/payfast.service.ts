import crypto from "node:crypto";

import { getServerEnv } from "@/lib/config/server-env";
import { env } from "@/lib/config/env";
import type { CheckoutOrder, PayFastFormPayload } from "@/types/checkout";

const PAYFAST_LIVE_URL = "https://www.payfast.co.za/eng/process";
const PAYFAST_SANDBOX_URL = "https://sandbox.payfast.co.za/eng/process";

function encodePayFastValue(value: string): string {
  return encodeURIComponent(value.trim()).replace(/%20/g, "+");
}

export function generatePayFastSignature(
  data: Record<string, string>,
  passphrase?: string,
): string {
  const pairs = Object.entries(data)
    .filter(([key, value]) => key !== "signature" && value !== "")
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([key, value]) => `${key}=${encodePayFastValue(value)}`);

  let signatureString = pairs.join("&");

  if (passphrase) {
    signatureString += `&passphrase=${encodePayFastValue(passphrase)}`;
  }

  return crypto.createHash("md5").update(signatureString).digest("hex");
}

export function buildPayFastCheckout(order: CheckoutOrder): PayFastFormPayload {
  const serverEnv = getServerEnv();

  if (!serverEnv.PAYFAST_MERCHANT_ID || !serverEnv.PAYFAST_MERCHANT_KEY) {
    throw new Error("PayFast is not configured");
  }

  const siteUrl = env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  const amount = order.calculation.total.toFixed(2);
  const itemName = `${order.productName} x ${order.calculation.quantity}`;

  const fields: Record<string, string> = {
    merchant_id: serverEnv.PAYFAST_MERCHANT_ID,
    merchant_key: serverEnv.PAYFAST_MERCHANT_KEY,
    return_url: `${siteUrl}/checkout/success?provider=payfast&order=${encodeURIComponent(order.id)}`,
    cancel_url: `${siteUrl}/checkout/cancel?order=${encodeURIComponent(order.id)}`,
    notify_url: `${siteUrl}/api/webhooks/payfast`,
    name_first: order.customer.firstName,
    name_last: order.customer.lastName,
    email_address: order.customer.email,
    cell_number: order.customer.phone,
    m_payment_id: order.id,
    amount,
    item_name: itemName,
    item_description: "Gauteng delivery — Perfect Hydration",
    custom_str1: order.customer.deliveryAddress.slice(0, 255),
    custom_int1: String(order.calculation.quantity),
  };

  fields.signature = generatePayFastSignature(
    fields,
    serverEnv.PAYFAST_PASSPHRASE,
  );

  return {
    actionUrl: serverEnv.PAYFAST_SANDBOX ? PAYFAST_SANDBOX_URL : PAYFAST_LIVE_URL,
    fields,
  };
}

export function verifyPayFastSignature(
  data: Record<string, string>,
  signature: string,
): boolean {
  const serverEnv = getServerEnv();
  const expected = generatePayFastSignature(data, serverEnv.PAYFAST_PASSPHRASE);
  return expected === signature;
}

export async function validatePayFastItn(
  pfParamString: string,
): Promise<boolean> {
  const serverEnv = getServerEnv();
  const validateUrl = serverEnv.PAYFAST_SANDBOX
    ? "https://sandbox.payfast.co.za/eng/query/validate"
    : "https://www.payfast.co.za/eng/query/validate";

  const response = await fetch(validateUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: pfParamString,
  });

  const body = await response.text();
  return body.trim() === "VALID";
}

export function buildPayFastParamString(data: Record<string, string>): string {
  return Object.entries(data)
    .filter(([, value]) => value !== "")
    .map(([key, value]) => `${key}=${encodePayFastValue(value)}`)
    .join("&");
}
