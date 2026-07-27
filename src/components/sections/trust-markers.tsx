"use client";

import { motion, useReducedMotion } from "framer-motion";
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
  },
];

export function TrustMarkers() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="border-y border-border bg-muted/40">
      <div className="w-full px-4 py-24 sm:px-6 lg:px-12">
        <div className="relative">
          <motion.div
            aria-hidden
            className="absolute top-10 right-[12.5%] left-[12.5%] hidden h-[2px] bg-success-500/40 sm:block"
            style={{ transformOrigin: "left" }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 1, ease: [0.21, 0.47, 0.32, 0.98] }}
          />

          <div className="relative grid grid-cols-2 gap-x-8 gap-y-16 sm:grid-cols-4">
            {markers.map((marker, index) => {
              const Icon = marker.icon;
              return (
                <AnimatedSection
                  key={marker.label}
                  delay={index * 0.15}
                  className="flex flex-col items-center gap-5 text-center"
                >
                  <span className="relative z-10 flex size-20 items-center justify-center rounded-full border-[3px] border-success-500 bg-background text-success-600 shadow-md">
                    <Icon className="size-8" strokeWidth={1.5} />
                  </span>
                  <div className="flex flex-col gap-2">
                    <p className="text-lg font-semibold text-foreground">{marker.label}</p>
                    <p className="mx-auto max-w-xs text-pretty text-sm text-muted-foreground">
                      {marker.detail}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
