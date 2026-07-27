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
    return { stroke: "var(--success-500)", text: "text-success-600 dark:text-success-400", label: "Healthy" };
  }
  if (score >= 40) {
    return { stroke: "var(--warning-500)", text: "text-warning-600 dark:text-warning-400", label: "Caution" };
  }
  return { stroke: "var(--danger-500)", text: "text-danger-600 dark:text-danger-400", label: "High risk" };
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
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-mono text-2xl font-semibold text-foreground">{clamped}</span>
        <span className={cn("text-[11px] font-medium uppercase tracking-wide", text)}>{label}</span>
      </div>
    </div>
  );
}
