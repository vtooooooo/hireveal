"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type Direction = "up" | "left" | "right" | "none";

type AnimatedSectionProps = HTMLMotionProps<"div"> & {
  direction?: Direction;
  delay?: number;
  once?: boolean;
};

const offsets: Record<Direction, [number, number]> = {
  up: [0, 24],
  left: [24, 0],
  right: [-24, 0],
  none: [0, 0],
};

export function AnimatedSection({
  direction = "up",
  delay = 0,
  once = true,
  className,
  children,
  ...props
}: AnimatedSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const [x, y] = offsets[direction];

  const variants: Variants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : x, y: shouldReduceMotion ? 0 : y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0.01 : 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  );
}
