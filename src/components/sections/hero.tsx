"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Puzzle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ExtensionPopupMockup } from "@/components/shared/extension-popup-mockup";
import { demoListings } from "@/lib/constants/features";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute top-[-10%] left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-brand-900/[0.05] blur-3xl dark:bg-brand-25/[0.04]" />
        <div className="absolute top-[10%] right-[8%] h-[320px] w-[320px] rounded-full bg-success-500/[0.08] blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 pt-20 pb-24 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:pt-28 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col items-start gap-6"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
            <Puzzle className="size-3.5" />
            Free Chrome extension
          </span>

          <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.05]">
            The trust layer for hiring.
          </h1>

          <p className="max-w-lg text-pretty text-lg text-muted-foreground">
            Hireveal tells you whether a job listing is actually active, whether its
            sponsorship claim holds up, and whether the recruiter behind it is
            legitimate — before you spend an hour on an application.
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

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: shouldReduceMotion ? 0.01 : 0.8,
            delay: 0.15,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="flex justify-center lg:justify-end"
        >
          <motion.div
            animate={shouldReduceMotion ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ExtensionPopupMockup listing={demoListings[0]} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
