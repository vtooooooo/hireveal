import type { ComponentProps } from "react";

type Direction = "up" | "left" | "right" | "none";

// direction/delay/once are accepted (and ignored) so existing call sites
// don't need to change now that entrance animations have been removed.
type AnimatedSectionProps = ComponentProps<"div"> & {
  direction?: Direction;
  delay?: number;
  once?: boolean;
};

export function AnimatedSection({
  direction,
  delay,
  once,
  className,
  children,
  ...props
}: AnimatedSectionProps) {
  void direction;
  void delay;
  void once;

  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}
