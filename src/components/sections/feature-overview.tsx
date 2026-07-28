"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/animated-section";
import { ScrollCue } from "@/components/shared/scroll-cue";
import { features } from "@/lib/constants/features";

export function FeatureOverview() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="feature-overview"
      className="relative flex scroll-mt-16 flex-col overflow-hidden bg-brand-900 py-16 lg:min-h-[calc(100vh-4rem)] lg:py-10"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-success-500/15 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-[380px] w-[380px] translate-y-1/2 rounded-full bg-success-500/10 blur-3xl" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="flex flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-white/60 uppercase">
            What Hireveal checks
          </span>
          <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            One score, built around you.
          </h2>
          <p className="max-w-2xl text-pretty text-base text-white/60 sm:text-lg">
            Hireveal reads the LinkedIn listing you have open, checks what evidence
            actually exists, and combines it with your own profile.
          </p>
        </AnimatedSection>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <AnimatedSection key={feature.title} delay={0.1 + index * 0.1}>
                <motion.div
                  whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                  transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="group relative flex h-full flex-col items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-8 text-center"
                >
                  <div
                    aria-hidden
                    className="absolute top-6 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-success-500/20 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <span className="relative z-10 flex size-14 items-center justify-center rounded-full border border-success-500/30 bg-success-500/10 text-success-400">
                    <Icon className="size-6" strokeWidth={1.5} />
                  </span>
                  <h3 className="relative z-10 text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="relative z-10 text-pretty text-sm leading-relaxed text-white/60">
                    {feature.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>

      <ScrollCue targetId="how-it-works" />
    </section>
  );
}
