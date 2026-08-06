import { getServerEnv } from "@/lib/config/server-env";
import { env } from "@/lib/config/env";
import type { CheckoutOrder, PayPalCheckoutPayload } from "@/types/checkout";

function getPayPalBaseUrl(): string {
  const serverEnv = getServerEnv();
  return serverEnv.PAYPAL_SANDBOX
    ? "https://api-m.sandbox.paypal.com"
    : "https://api-m.paypal.com";
}

async function getPayPalAccessToken(): Promise<string> {
  const serverEnv = getServerEnv();

  if (!serverEnv.PAYPAL_CLIENT_ID || !serverEnv.PAYPAL_CLIENT_SECRET) {
    throw new Error("PayPal is not configured");
  }

  const credentials = Buffer.from(
    `${serverEnv.PAYPAL_CLIENT_ID}:${serverEnv.PAYPAL_CLIENT_SECRET}`,
  ).toString("base64");

  const response = await fetch(`${getPayPalBaseUrl()}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  if (!response.ok) {
    throw new Error("Unable to authenticate with PayPal");
  }

  const payload = (await response.json()) as { access_token: string };
  return payload.access_token;
}

export async function buildPayPalCheckout(
  order: CheckoutOrder,
): Promise<PayPalCheckoutPayload> {
  const siteUrl = env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  const accessToken = await getPayPalAccessToken();

  const response = await fetch(`${getPayPalBaseUrl()}/v2/checkout/orders`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      intent: "CAPTURE",
      purchase_units: [
        {
          reference_id: order.id,
          description: `${order.productName} x ${order.calculation.quantity}`,
          custom_id: order.id,
          amount: {
            currency_code: "ZAR",
            value: order.calculation.total.toFixed(2),
          },
        },
      ],
      application_context: {
        brand_name: "Perfect Hydration",
        shipping_preference: "NO_SHIPPING",
        user_action: "PAY_NOW",
        return_url: `${siteUrl}/checkout/success?provider=paypal`,
        cancel_url: `${siteUrl}/checkout/cancel`,
      },
    }),
  });

  if (!response.ok) {
    throw new Error("Unable to create PayPal checkout order");
  }

  const payload = (await response.json()) as {
    id: string;
    links: Array<{ rel: string; href: string }>;
  };

  const approvalLink = payload.links.find((link) => link.rel === "approve");

  if (!approvalLink) {
    throw new Error("PayPal approval URL missing");
  }

  return {
    approvalUrl: approvalLink.href,
    orderId: payload.id,
  };
}

export async function capturePayPalOrder(
  paypalOrderId: string,
): Promise<{ referenceId?: string; captureId?: string }> {
  const accessToken = await getPayPalAccessToken();

  const response = await fetch(
    `${getPayPalBaseUrl()}/v2/checkout/orders/${paypalOrderId}/capture`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    },
  );

  if (!response.ok) {
    throw new Error("Unable to capture PayPal payment");
  }

  const payload = (await response.json()) as {
    purchase_units?: Array<{
      reference_id?: string;
      payments?: {
        captures?: Array<{ id?: string }>;
      };
    }>;
  };

  const purchaseUnit = payload.purchase_units?.[0];

  return {
    referenceId: purchaseUnit?.reference_id,
    captureId: purchaseUnit?.payments?.captures?.[0]?.id,
  };
}
