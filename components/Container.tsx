import type { ReactNode } from "react";
import { cn } from "@/lib/ui";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1440px] px-[clamp(20px,4vw,48px)]", className)}>
      {children}
    </div>
  );
}
