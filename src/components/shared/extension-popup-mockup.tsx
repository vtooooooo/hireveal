import { CheckCircle2, ShieldCheck, X } from "lucide-react";
import { LogoMark } from "@/components/shared/logo-mark";
import { GhostScoreGauge } from "@/components/shared/ghost-score-gauge";
import type { DemoListing } from "@/types";
import { cn } from "@/lib/utils";

export function ExtensionPopupMockup({
  listing,
  className,
}: {
  listing: DemoListing;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "w-[320px] overflow-hidden rounded-2xl border border-border bg-card shadow-xl",
        className
      )}
    >
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div className="flex items-center gap-2">
          <LogoMark className="size-6" />
          <span className="text-sm font-semibold text-foreground">Hireveal</span>
        </div>
        <X className="size-3.5 text-muted-foreground" aria-hidden />
      </div>

      <div className="flex flex-col gap-4 p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground">Listing Pulse</p>
            <p className="flex items-center gap-1.5 text-sm font-medium text-foreground">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-success-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-success-500" />
              </span>
              Active listing
            </p>
          </div>
          <GhostScoreGauge score={listing.ghostScore} size={64} strokeWidth={6} />
        </div>

        <div className="flex flex-col gap-2 rounded-xl bg-muted p-3">
          {listing.signals.slice(0, 2).map((signal) => (
            <div key={signal.label} className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-success-600 dark:text-success-400" />
              <p className="text-xs text-pretty text-muted-foreground">{signal.label}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 rounded-xl border border-success-200 bg-success-50 px-3 py-2 dark:border-success-900 dark:bg-success-950/40">
          <ShieldCheck className="size-4 shrink-0 text-success-600 dark:text-success-400" />
          <p className="text-xs font-medium text-success-800 dark:text-success-300">
            Sponsorship claim: consistent with history
          </p>
        </div>
      </div>
    </div>
  );
}
