import { z } from "zod";

const serverEnvSchema = z.object({
  PAYFAST_MERCHANT_ID: z.string().optional(),
  PAYFAST_MERCHANT_KEY: z.string().optional(),
  PAYFAST_PASSPHRASE: z.string().optional(),
  PAYFAST_SANDBOX: z.coerce.boolean().optional(),
  PAYPAL_CLIENT_ID: z.string().optional(),
  PAYPAL_CLIENT_SECRET: z.string().optional(),
  PAYPAL_SANDBOX: z.coerce.boolean().optional(),
});

export type ServerEnv = z.infer<typeof serverEnvSchema>;

function parseServerEnv(): ServerEnv {
  const parsed = serverEnvSchema.safeParse({
    PAYFAST_MERCHANT_ID: process.env.PAYFAST_MERCHANT_ID,
    PAYFAST_MERCHANT_KEY: process.env.PAYFAST_MERCHANT_KEY,
    PAYFAST_PASSPHRASE: process.env.PAYFAST_PASSPHRASE,
    PAYFAST_SANDBOX: process.env.PAYFAST_SANDBOX ?? "true",
    PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID,
    PAYPAL_CLIENT_SECRET: process.env.PAYPAL_CLIENT_SECRET,
    PAYPAL_SANDBOX: process.env.PAYPAL_SANDBOX ?? "true",
  });

  if (!parsed.success) {
    console.error(
      "Invalid server environment variables:",
      parsed.error.flatten().fieldErrors,
    );
    throw new Error("Invalid server environment variables");
  }

  return parsed.data;
}

export function getServerEnv(): ServerEnv {
  return parseServerEnv();
}

export function isPayFastConfigured(env: ServerEnv = getServerEnv()): boolean {
  return Boolean(env.PAYFAST_MERCHANT_ID && env.PAYFAST_MERCHANT_KEY);
}

export function isPayPalConfigured(env: ServerEnv = getServerEnv()): boolean {
  return Boolean(env.PAYPAL_CLIENT_ID && env.PAYPAL_CLIENT_SECRET);
}
