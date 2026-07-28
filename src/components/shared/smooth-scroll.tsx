"use client";

import * as React from "react";
import Lenis from "lenis";
import { frame, cancelFrame, useReducedMotion } from "framer-motion";

export function SmoothScroll() {
  const shouldReduceMotion = useReducedMotion();

  React.useEffect(() => {
    if (shouldReduceMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      touchMultiplier: 1,
    });

    function update(data: { timestamp: number }) {
      lenis.raf(data.timestamp);
    }

    frame.update(update, true);

    return () => {
      cancelFrame(update);
      lenis.destroy();
    };
  }, [shouldReduceMotion]);

  return null;
}
