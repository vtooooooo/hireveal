import { AnimatedSection } from "@/components/shared/animated-section";
import { Badge } from "@/components/ui/badge";
import type { Feature } from "@/types";

export function FeatureCard({ feature, delay = 0 }: { feature: Feature; delay?: number }) {
  const Icon = feature.icon;

  return (
    <AnimatedSection
      delay={delay}
      className="group flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
    >
      <div className="flex items-start justify-between">
        <div className="flex size-10 items-center justify-center rounded-xl bg-success-50 text-success-700 dark:bg-success-950 dark:text-success-400">
          <Icon className="size-5" strokeWidth={1.75} />
        </div>
        {feature.status === "roadmap" ? (
          <Badge variant="outline" className="text-xs text-muted-foreground">
            On the roadmap
          </Badge>
        ) : null}
      </div>
      <div className="flex flex-col gap-1.5">
        <h3 className="text-base font-semibold text-foreground">{feature.title}</h3>
        <p className="text-sm text-pretty text-muted-foreground">{feature.description}</p>
      </div>
    </AnimatedSection>
  );
}
