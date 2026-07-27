import Link from "next/link";
import { Lock, UserCheck, Zap, BookOpenCheck } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";

const markers = [
  {
    icon: Lock,
    label: "Privacy-first",
    detail: "No account or data collection required to use the core extension.",
  },
  {
    icon: UserCheck,
    label: "No account required",
    detail: "Install and it works — nothing to sign up for.",
  },
  {
    icon: Zap,
    label: "Works in seconds",
    detail: "Signals appear inline as soon as a listing loads.",
  },
  {
    icon: BookOpenCheck,
    label: "Open methodology",
    detail: "Every score is explained, not just asserted.",
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
