import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        {
          "bg-slate-100 text-slate-700": variant === "default",
          "bg-blue-100 text-blue-700": variant === "primary",
          "bg-amber-100 text-amber-700": variant === "secondary",
          "bg-emerald-100 text-emerald-700": variant === "success",
          "bg-orange-100 text-orange-700": variant === "warning",
          "bg-red-100 text-red-700": variant === "danger",
        },
        className
      )}
      {...props}
    />
  )
);
Badge.displayName = "Badge";

export { Badge };
