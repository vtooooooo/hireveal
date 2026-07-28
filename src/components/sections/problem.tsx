"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { AnimatedSection } from "@/components/shared/animated-section";
import { ScrollCue } from "@/components/shared/scroll-cue";

const problems = [
  {
    title: "Ghost listings",
    description:
      "Postings stay live long after hiring has stopped—collecting applications that may never be reviewed.",
  },
  {
    title: "Unverifiable sponsorship",
    description:
      "Candidates spend valuable time researching visa sponsorship with no reliable way to verify it upfront.",
  },
  {
    title: "Recruiter impersonation",
    description:
      "Fake recruiters and cloned profiles exploit job seekers when they're most eager to respond.",
  },
  {
    title: "Pay-to-play scams",
    description:
      "Some services charge candidates upfront for access to opportunities that were never guaranteed.",
  },
];

export function Problem() {
  const shouldReduceMotion = useReducedMotion();
  const imageRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [-40, 40]);

  return (
    <section
      id="problem"
      className="relative scroll-mt-16 overflow-hidden bg-gradient-to-br from-[#F7F1E7] via-[#F3ECDF] to-[#E9DCC8]"
    >
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
                <AnimatedSection
                  key={problem.title}
                  delay={0.15 + index * 0.12}
                  className="flex flex-col gap-3 border-t border-[#111827]/10 pt-6"
                >
                  <span className="text-3xl font-semibold text-[#12B76A]">
                    0{index + 1}
                  </span>
                  <h3 className="text-xl font-semibold text-[#111827]">{problem.title}</h3>
                  <p className="text-pretty text-base leading-relaxed text-[#111827]/60">
                    {problem.description}
                  </p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>

        {/* Right — hero image */}
        <div ref={imageRef} className="relative min-h-[360px] overflow-hidden lg:min-h-full">
          <motion.div style={{ y }} className="absolute inset-0 -m-10">
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
