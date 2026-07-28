"use client";

import * as React from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Download, MousePointerClick, Sparkles } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionTransition } from "@/components/shared/section-transition";

const steps = [
  {
    icon: Download,
    title: "Install the extension",
    description: "One click from the Chrome Web Store. No account, no setup screen.",
  },
  {
    icon: MousePointerClick,
    title: "Browse job listings normally",
    description: "Keep using LinkedIn or Indeed exactly as you already do.",
  },
  {
    icon: Sparkles,
    title: "See signals appear inline",
    description: "Ghost Score, sponsorship check, and scam flags show up on the listing itself.",
  },
];

export function HowItWorks() {
  const shouldReduceMotion = useReducedMotion();
  const gridRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start end", "start center"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="relative flex flex-1 flex-col justify-center bg-muted/40 py-16 lg:py-10">
      <SectionTransition fromClassName="from-brand-900" />

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="flex flex-col items-center gap-5 text-center">
          <span className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
            How it works
          </span>
          <h2 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Nothing to change about how you search.
          </h2>
        </AnimatedSection>

        <div ref={gridRef} className="relative mt-16 grid grid-cols-1 gap-12 sm:grid-cols-3 lg:mt-20 lg:gap-16">
          <motion.div
            aria-hidden
            style={shouldReduceMotion ? { scaleX: 1 } : { scaleX: lineScale }}
            className="absolute top-8 right-[16.67%] left-[16.67%] hidden h-px origin-left bg-border sm:block"
          />
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <AnimatedSection
                key={step.title}
                delay={index * 0.1}
                className="relative flex flex-col items-center gap-5 text-center"
              >
                <div className="relative flex size-16 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-sm">
                  <Icon className="size-7" strokeWidth={1.5} />
                  <span className="absolute -top-2 -right-2 flex size-6 items-center justify-center rounded-full bg-brand-900 font-mono text-xs font-medium text-white">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="max-w-xs text-pretty text-base text-muted-foreground">
                  {step.description}
                </p>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
