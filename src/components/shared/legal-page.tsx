import type { ReactNode } from "react";

export function LegalPage({
  title,
  effectiveDate,
  children,
}: {
  title: string;
  effectiveDate: string;
  children: ReactNode;
}) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <header className="mb-12 flex flex-col gap-2 border-b border-border pb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h1>
        <p className="text-sm text-muted-foreground">Effective {effectiveDate}</p>
      </header>

      <div
        className="flex flex-col gap-10 text-muted-foreground
        [&_h2]:mb-3 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-foreground
        [&_p]:leading-relaxed [&_p]:text-pretty
        [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5
        [&_li]:leading-relaxed
        [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-2"
      >
        {children}
      </div>
    </article>
  );
}
