import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/nav/Hireveal_logo_transparent.png"
      alt="Hireveal"
      width={1221}
      height={292}
      priority
      className={cn("h-7 w-auto object-contain", className)}
    />
  );
}
