"use client";

import * as React from "react";
import { useInView, useReducedMotion, animate } from "framer-motion";

type NumberCounterProps = {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
};

export function NumberCounter({
  value,
  duration = 1.4,
  suffix = "",
  prefix = "",
  className,
}: NumberCounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();
  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration: shouldReduceMotion ? 0.01 : duration,
      ease: [0.21, 0.47, 0.32, 0.98],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });

    return () => controls.stop();
  }, [isInView, value, duration, shouldReduceMotion]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}
