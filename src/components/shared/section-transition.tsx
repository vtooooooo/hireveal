"use client";

import * as React from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Scroll-linked crossfade sitting at the top of a section, fading out the
 * previous section's color as this section's own top edge scrolls through
 * the viewport — a continuous, reversible blend rather than a static gradient.
 */
export function SectionTransition({ fromClassName }: { fromClassName: string }) {
  const shouldReduceMotion = useReducedMotion();
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      ref={ref}
      aria-hidden
      style={shouldReduceMotion ? { opacity: 0 } : { opacity }}
      className={cn(
        "pointer-events-none absolute inset-x-0 top-0 h-[30vh] bg-gradient-to-b to-transparent",
        fromClassName
      )}
    />
  );
}
