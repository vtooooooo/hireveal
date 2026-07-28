"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { LinkedinIcon } from "@/components/shared/linkedin-icon";
import { Button } from "@/components/ui/button";

const founders = [
  {
    name: "Meghana Lakshminarayana Swamy",
    role: "Founder",
    photoLabel: "Founder Photo",
    linkedin: "https://www.linkedin.com/in/meghana-swamy",
    description:
      "Owns the vision behind Hireveal and builds the product end-to-end — from the Chrome extension to the detection systems behind every signal.",
  },
  {
    name: "Vittu Ramadasu Darshan",
    role: "Co-Founder",
    photoLabel: "Co-Founder Photo",
    linkedin: "https://www.linkedin.com/in/vitturamadasudarshan",
    description:
      "Drives market research, product direction, and the UI/UX behind Hireveal — shaping an experience candidates can trust.",
  },
];

export function Team() {
  return (
    <section className="relative flex flex-col overflow-hidden px-4 py-16 sm:px-6 lg:min-h-[calc(100vh-4rem)] lg:px-8 lg:py-8">
      <SectionHeading
        eyebrow="Our team"
        title="Built by people who experienced the problem firsthand."
        className="mx-auto max-w-3xl shrink-0"
      />

      <div className="mt-10 grid flex-1 grid-cols-1 gap-10 lg:mt-8 lg:min-h-0 lg:grid-cols-2 lg:gap-12">
        {founders.map((founder, index) => (
          <AnimatedSection
            key={founder.name}
            direction={index === 0 ? "right" : "left"}
            delay={0.15 + index * 0.1}
            className="flex flex-col"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative min-h-[160px] flex-1 overflow-hidden rounded-[22px] bg-gradient-to-br from-brand-100 to-brand-50 shadow-md"
            >
              <div className="flex h-full w-full items-center justify-center">
                <span className="text-sm font-medium text-muted-foreground">
                  {founder.photoLabel}
                </span>
              </div>
            </motion.div>

            <div className="relative z-10 mx-4 -mt-8 flex flex-col gap-2.5 rounded-2xl border border-border bg-card p-5 shadow-lg">
              <div>
                <p className="text-xl font-semibold text-foreground">{founder.name}</p>
                <p className="text-sm text-muted-foreground">{founder.role}</p>
              </div>

              <Button asChild variant="outline" size="sm" className="w-fit">
                <a href={founder.linkedin} target="_blank" rel="noopener noreferrer">
                  <LinkedinIcon className="size-4" />
                  LinkedIn
                </a>
              </Button>

              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                {founder.description}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
