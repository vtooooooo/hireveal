"use client";

import { ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export function ScrollCue({ targetId }: { targetId: string }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="flex justify-center pb-6">
      <a
        href={`#${targetId}`}
        aria-label="Scroll to the next section"
        className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-success-500 hover:text-success-600"
      >
        <motion.span
          animate={shouldReduceMotion ? undefined : { y: [0, 4, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="size-4" />
        </motion.span>
      </a>
    </div>
  );
}
