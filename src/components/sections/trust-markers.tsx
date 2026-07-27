import Link from "next/link";
import { ScanSearch, Zap, Activity, BookOpenCheck } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";

const markers = [
  {
    icon: ScanSearch,
    label: "Evidence-backed insights",
    detail: "Every verdict is backed by observable signals, not assumptions.",
  },
  {
    icon: Zap,
    label: "Fast setup",
    detail: "Create your account once and start analyzing job listings in seconds.",
  },
  {
    icon: Activity,
    label: "Real-time analysis",
    detail: "Signals appear instantly as you browse supported job listings.",
  },
  {
    icon: BookOpenCheck,
    label: "Transparent methodology",
    detail: "Every score is explained, so you always know why.",
    href: "/methodology",
  },
];

export function TrustMarkers() {
  return (
    <section className="border-y border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {markers.map((marker, index) => {
            const Icon = marker.icon;
            const content = (
              <div className="flex flex-col items-start gap-2">
                <Icon className="size-5 text-success-600 dark:text-success-400" strokeWidth={1.75} />
                <p className="text-sm font-medium text-foreground">{marker.label}</p>
                <p className="text-xs text-pretty text-muted-foreground">{marker.detail}</p>
              </div>
            );

            return (
              <AnimatedSection key={marker.label} delay={index * 0.05}>
                {marker.href ? (
                  <Link href={marker.href} className="block transition-opacity hover:opacity-80">
                    {content}
                  </Link>
                ) : (
                  content
                )}
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
