"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Puzzle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-15%] left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-brand-900/[0.05] blur-3xl dark:bg-brand-25/[0.04]" />
        <div className="absolute top-[15%] left-1/2 h-[360px] w-[600px] -translate-x-1/2 rounded-full bg-success-500/[0.1] blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 pt-24 pb-28 text-center sm:px-6 lg:px-8 lg:pt-32 lg:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col items-center gap-6"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
            <Puzzle className="size-3.5" />
            Free Chrome extension
          </span>

          <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.05]">
            Hiring is broken. We&apos;re making it{" "}
            <span className="text-success-600 dark:text-success-400">transparent</span>.
          </h1>

          <p className="max-w-lg text-pretty text-lg text-muted-foreground">
            Hireveal surfaces the evidence behind every job listing—so candidates can
            make informed decisions before investing their time.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="h-12 px-6 text-base">
              Add to Chrome — it&apos;s free
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-6 text-base">
              <Link href="#interactive-demo">
                See how it works
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <p className="text-xs text-muted-foreground">
            No account required. Works instantly on LinkedIn and Indeed.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
