"use client";

import { motion, useReducedMotion } from "framer-motion";
import { UserCheck, ScanSearch, Lock, BookOpenCheck } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";

const markers = [
  {
    icon: UserCheck,
    label: "Personalized to you",
    detail:
      "Scored against your own experience, salary floor, and work authorization — not a generic checklist.",
  },
  {
    icon: ScanSearch,
    label: "Evidence, not guesses",
    detail:
      "Posting age comes from ATS records or archive snapshots — labeled honestly, never presented as certainty.",
  },
  {
    icon: Lock,
    label: "Your CV stays local",
    detail:
      "Resumes are parsed in your browser. The file and raw text are discarded once your profile is confirmed.",
  },
  {
    icon: BookOpenCheck,
    label: "Every score explained",
    detail: "Click “Why this score?” for the exact reasons — no hidden scam-pattern deductions.",
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
