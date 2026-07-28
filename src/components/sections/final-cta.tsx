"use client";

import * as React from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionTransition } from "@/components/shared/section-transition";

export function FinalCta() {
  const shouldReduceMotion = useReducedMotion();
  const ctaRef = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "start center"],
  });
  const brightness = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const filter = useTransform(brightness, (v) => `brightness(${v})`);
  const paragraphOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const buttonScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <motion.section
      ref={ctaRef}
      style={shouldReduceMotion ? undefined : { filter }}
      className="relative flex flex-1 flex-col justify-center overflow-hidden bg-brand-900"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-success-500/10 blur-3xl" />
      </div>
      <SectionTransition fromClassName="from-brand-50" />

      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 lg:px-8">
        <AnimatedSection className="flex flex-col items-center gap-6">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Stop applying on faith.
          </h2>
          <motion.p
            style={shouldReduceMotion ? undefined : { opacity: paragraphOpacity }}
            className="max-w-md text-pretty text-white/70"
          >
            Add Hireveal and see the signals behind every listing you already visit.
          </motion.p>
          <motion.div style={shouldReduceMotion ? undefined : { scale: buttonScale }}>
            <Button size="lg" className="h-12 bg-white px-6 text-base text-brand-900 hover:bg-white/90">
              Add to Chrome — it&apos;s free
            </Button>
          </motion.div>
        </AnimatedSection>
      </div>
    </motion.section>
  );
}
