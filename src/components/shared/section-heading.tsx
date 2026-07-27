import { cn } from "@/lib/utils";
import { AnimatedSection } from "@/components/shared/animated-section";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <AnimatedSection
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow ? (
        <span className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg",
            align === "center" ? "mx-auto" : ""
          )}
        >
          {description}
        </p>
      ) : null}
    </AnimatedSection>
  );
}
