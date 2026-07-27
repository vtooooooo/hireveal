import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "flex size-7 items-center justify-center rounded-lg bg-brand-900 text-success-400",
        className
      )}
    >
      <ShieldCheck className="size-4" strokeWidth={2} />
    </span>
  );
}
