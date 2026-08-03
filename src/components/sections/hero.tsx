"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, Puzzle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants/site";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const heroRef = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const headlineScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.96]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);
  const ctaOpacity = useTransform(scrollYProgress, [0.3, 1], [1, 0]);

  const headlineStyle = shouldReduceMotion
    ? undefined
    : { scale: headlineScale, opacity: headlineOpacity };
  const ctaStyle = shouldReduceMotion ? undefined : { opacity: ctaOpacity };

  return (
    <div ref={heroRef} className="relative flex flex-1 flex-col overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-15%] left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-brand-900/[0.05] blur-3xl" />
        <div className="absolute top-[15%] left-1/2 h-[360px] w-[600px] -translate-x-1/2 rounded-full bg-success-500/[0.1] blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-1 flex-col items-center justify-center gap-6 px-4 py-10 text-center sm:px-6 lg:px-8">
        <motion.div style={headlineStyle} className="flex flex-col items-center gap-6">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
          >
            <Puzzle className="size-3.5" />
            Free Chrome extension
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0.01 : 0.4,
              delay: shouldReduceMotion ? 0 : 0.08,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-7xl lg:leading-[1.05]"
          >
            Before you apply, Hi<span className="text-success-600">reveal</span> it.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0.01 : 0.4,
              delay: shouldReduceMotion ? 0 : 0.16,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="max-w-2xl text-pretty text-lg text-muted-foreground"
          >
            Hireveal surfaces the evidence behind every job listing, so candidates can
            make informed decisions before investing their time.
          </motion.p>
        </motion.div>

        <motion.div style={ctaStyle}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0.01 : 0.4,
              delay: shouldReduceMotion ? 0 : 0.24,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild size="lg" className="h-12 px-6 text-base">
              <Link href={siteConfig.extensionUrl}>Add to Chrome — it&apos;s free</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-6 text-base">
              <Link href="/extension#interactive-demo">
                See how it works
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
