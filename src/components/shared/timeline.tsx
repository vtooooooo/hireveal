import { Check, Loader2, Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedSection } from "@/components/shared/animated-section";
import type { RoadmapItem } from "@/types";

const statusConfig: Record<
  RoadmapItem["status"],
  { icon: typeof Check; iconClass: string; dotClass: string }
> = {
  shipped: {
    icon: Check,
    iconClass: "text-success-600 dark:text-success-400",
    dotClass: "bg-success-500 border-success-500",
  },
  "in-progress": {
    icon: Loader2,
    iconClass: "text-warning-600 dark:text-warning-400",
    dotClass: "bg-warning-500 border-warning-500",
  },
  planned: {
    icon: Circle,
    iconClass: "text-muted-foreground",
    dotClass: "bg-transparent border-border",
  },
};

export function Timeline({ items }: { items: RoadmapItem[] }) {
  return (
    <ol className="relative flex flex-col gap-8 border-l border-border pl-8">
      {items.map((item, index) => {
        const config = statusConfig[item.status];
        const Icon = config.icon;

        return (
          <AnimatedSection key={item.title} delay={index * 0.05}>
            <li className="relative">
              <span
                className={cn(
                  "absolute -left-[calc(2rem+5px)] flex size-[10px] items-center justify-center rounded-full border-2",
                  config.dotClass
                )}
              />
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                    {item.quarter}
                  </span>
                  <Icon className={cn("size-3.5", config.iconClass)} aria-hidden />
                </div>
                <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                <p className="max-w-xl text-sm text-pretty text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </li>
          </AnimatedSection>
        );
      })}
    </ol>
  );
}
