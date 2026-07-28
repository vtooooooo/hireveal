"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { AnimatedSection } from "@/components/shared/animated-section";
import { ScrollCue } from "@/components/shared/scroll-cue";
import { SectionTransition } from "@/components/shared/section-transition";

const problems = [
  {
    title: "Sponsorship buried in fine print",
    description:
      "Whether a role sponsors is often unstated or buried mid-paragraph — with no quick way to check a company's history without leaving the page.",
  },
  {
    title: "Reposted listings look brand new",
    description:
      "LinkedIn's \"Posted 2 days ago\" can hide a role that's actually been open, and reposted, for months.",
  },
  {
    title: "Fit gets checked after you apply",
    description:
      "Experience gaps, salary floors, and work-mode mismatches are usually discovered only after the cover letter's already written.",
  },
  {
    title: "Every listing reads the same",
    description:
      "Scrolling through generic postings gives no sense of which ones are actually worth your specific time.",
  },
];

function ProblemItem({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "center start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.45, 1, 0.45]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [12, 0, -12]);

  return (
    <motion.div
      ref={ref}
      style={shouldReduceMotion ? undefined : { opacity, y }}
      className="flex flex-col gap-3 border-t border-[#111827]/10 pt-6"
    >
      <span className="text-3xl font-semibold text-[#12B76A]">0{index + 1}</span>
      <h3 className="text-xl font-semibold text-[#111827]">{title}</h3>
      <p className="text-pretty text-base leading-relaxed text-[#111827]/60">
        {description}
      </p>
    </motion.div>
  );
}

export function Problem() {
  const shouldReduceMotion = useReducedMotion();
  const imageRef = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress: imageProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(imageProgress, [0, 1], shouldReduceMotion ? [0, 0] : [-40, 40]);
  const imageScale = useTransform(imageProgress, [0, 1], shouldReduceMotion ? [1, 1] : [1, 1.06]);

  return (
    <section
      id="problem"
      className="relative scroll-mt-16 overflow-hidden bg-gradient-to-br from-[#F7F1E7] via-[#F3ECDF] to-[#E9DCC8]"
    >
      <SectionTransition fromClassName="from-brand-50" />

      <div className="grid grid-cols-1 lg:grid-cols-[45%_55%]">
        {/* Left — text */}
        <div className="flex items-center px-6 py-24 sm:px-10 lg:px-16 lg:py-40">
          <div className="w-full max-w-[560px]">
            <AnimatedSection>
              <span className="text-xs font-medium tracking-[0.14em] text-[#111827]/45 uppercase">
                The problem
              </span>
              <h2 className="mt-4 text-balance text-4xl leading-[1.1] font-semibold tracking-tight text-[#111827] sm:text-5xl">
                Every job asks for your time.
                <br />
                Few deserve it.
              </h2>
              <p className="mt-6 max-w-[46ch] text-pretty leading-relaxed text-[#111827]/60">

              </p>
            </AnimatedSection>

            <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2">
              {problems.map((problem, index) => (
                <ProblemItem
                  key={problem.title}
                  index={index}
                  title={problem.title}
                  description={problem.description}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right — hero image */}
        <div ref={imageRef} className="relative min-h-[360px] overflow-hidden lg:min-h-full">
          <motion.div style={{ y, scale: imageScale }} className="absolute inset-0 -m-10">
            <Image
              src="/problem/frustrated_user.png"
              alt="A job seeker overwhelmed by browser tabs full of job listings"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
              priority
            />
          </motion.div>
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-40 bg-gradient-to-r from-[#F3ECDF] to-transparent lg:block" />
        </div>
      </div>

      <ScrollCue targetId="feature-overview" />
    </section>
  );
}
