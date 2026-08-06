"use client";

import { useEffect, useRef } from "react";

interface PayFastRedirectFormProps {
  actionUrl: string;
  fields: Record<string, string>;
}

export function PayFastRedirectForm({
  actionUrl,
  fields,
}: PayFastRedirectFormProps) {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    formRef.current?.submit();
  }, []);

  return (
    <form ref={formRef} action={actionUrl} method="POST" className="hidden">
      {Object.entries(fields).map(([name, value]) => (
        <input key={name} type="hidden" name={name} value={value} readOnly />
      ))}
    </form>
  );
}
