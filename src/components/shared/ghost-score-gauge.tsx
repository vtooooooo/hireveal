"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type GhostScoreGaugeProps = {
  score: number; // 0-100, higher = healthier
  size?: number;
  strokeWidth?: number;
  className?: string;
};

function tone(score: number) {
  if (score >= 70) {
    return { stroke: "var(--success-500)", text: "text-success-600", label: "Healthy" };
  }
  if (score >= 40) {
    return { stroke: "var(--warning-500)", text: "text-warning-600", label: "Caution" };
  }
  return { stroke: "var(--danger-500)", text: "text-danger-600", label: "High risk" };
}

export function GhostScoreGauge({
  score,
  size = 128,
  strokeWidth = 10,
  className,
}: GhostScoreGaugeProps) {
  const shouldReduceMotion = useReducedMotion();
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.max(0, Math.min(100, score));
  const offset = circumference * (1 - clamped / 100);
  const { stroke, text, label } = tone(clamped);
  const numberFontSize = Math.max(12, Math.min(40, size * 0.32));
  const labelFontSize = Math.max(8, Math.min(13, size * 0.13));

  return (
    <div className={cn("relative inline-flex items-center justify-center", className)} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--border)"
          strokeWidth={strokeWidth}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 1, ease: [0.21, 0.47, 0.32, 0.98] }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-0.5">
        <span
          className="font-mono leading-none font-semibold text-foreground"
          style={{ fontSize: numberFontSize }}
        >
          {clamped}
        </span>
        <span
          className={cn("font-medium tracking-wide uppercase", text)}
          style={{ fontSize: labelFontSize }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
