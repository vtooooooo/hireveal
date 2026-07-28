"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { LinkedinIcon } from "@/components/shared/linkedin-icon";
import { Button } from "@/components/ui/button";

const founders = [
  {
    name: "Meghana Lakshminarayana Swamy",
    role: "Founder",
    photo: "/team/meghana.jpeg",
    linkedin: "https://www.linkedin.com/in/meghana-swamy",
    description:
      "Owns the vision behind Hireveal and builds the product end-to-end — from the Chrome extension to the detection systems behind every signal.",
  },
  {
    name: "Vittu Ramadasu Darshan",
    role: "Co-Founder",
    photo: "/team/vittu.png",
    linkedin: "https://www.linkedin.com/in/vitturamadasudarshan",
    description:
      "Drives market research, product direction, and the UI/UX behind Hireveal — shaping an experience candidates can trust.",
  },
];

export function Team() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative flex flex-col overflow-hidden px-4 py-16 sm:px-6 lg:min-h-[calc(100vh-4rem)] lg:px-8 lg:py-8">
      <SectionHeading
        eyebrow="Our team"
        title="Built by people who experienced the problem firsthand."
        className="mx-auto max-w-3xl shrink-0"
      />

      <div className="mx-auto mt-10 grid w-full max-w-3xl flex-1 content-center grid-cols-1 gap-10 lg:mt-6 lg:min-h-0 lg:grid-cols-2 lg:gap-10">
        {founders.map((founder) => (
          <div key={founder.name} className="flex flex-col">
            <motion.div
              initial={shouldReduceMotion ? undefined : { clipPath: "inset(100% 0 0 0)" }}
              whileInView={shouldReduceMotion ? undefined : { clipPath: "inset(0% 0 0 0)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative aspect-[9/10] w-full overflow-hidden rounded-[22px] shadow-md"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="absolute inset-0"
              >
                <Image
                  src={founder.photo}
                  alt={founder.name}
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover"
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative z-10 -mt-8 flex flex-col gap-2.5 rounded-2xl border border-border bg-card p-5 shadow-lg"
            >
              <div>
                <p className="text-xl font-semibold text-foreground">{founder.name}</p>
                <p className="text-sm text-muted-foreground">{founder.role}</p>
              </div>

              <motion.div
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 8 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="w-fit"
              >
                <Button asChild variant="outline" size="sm">
                  <a href={founder.linkedin} target="_blank" rel="noopener noreferrer">
                    <LinkedinIcon className="size-4" />
                    LinkedIn
                  </a>
                </Button>
              </motion.div>

              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                {founder.description}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
