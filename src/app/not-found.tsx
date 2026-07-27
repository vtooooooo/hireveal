import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-lg flex-col items-center justify-center gap-6 px-4 text-center sm:px-6">
      <span className="font-mono text-sm font-medium text-muted-foreground">404</span>
      <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        This listing doesn&apos;t exist either.
      </h1>
      <p className="max-w-sm text-pretty text-muted-foreground">
        The page you&apos;re looking for isn&apos;t here. It may have moved, or the
        link might be off.
      </p>
      <Button asChild variant="outline">
        <Link href="/">
          <ArrowLeft className="size-4" />
          Back to home
        </Link>
      </Button>
    </section>
  );
}
