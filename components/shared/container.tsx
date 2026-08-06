import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "main" | "header" | "footer";
}

const containerTags = {
  div: "div",
  section: "section",
  main: "main",
  header: "header",
  footer: "footer",
} as const;

export function Container({
  children,
  className,
  as = "div",
}: ContainerProps) {
  const Tag = containerTags[as];

  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
