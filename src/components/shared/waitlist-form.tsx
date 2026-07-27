"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { joinWaitlist } from "@/lib/actions/waitlist";
import { waitlistSchema } from "@/lib/schemas/waitlist";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import type { z } from "zod";

type FormValues = z.infer<typeof waitlistSchema>;

export function WaitlistForm({ className }: { className?: string }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(waitlistSchema) });

  const onSubmit = async (values: FormValues) => {
    const result = await joinWaitlist(values.email);
    if (result.success) {
      router.push("/waitlist/success");
    } else {
      toast.error(result.error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={cn("flex w-full max-w-md flex-col gap-2 sm:flex-row sm:items-start", className)}
    >
      <div className="flex-1">
        <label htmlFor="waitlist-email" className="sr-only">
          Email address
        </label>
        <Input
          id="waitlist-email"
          type="email"
          placeholder="you@company.com"
          autoComplete="email"
          aria-invalid={!!errors.email}
          className="h-11"
          {...register("email")}
        />
        {errors.email ? (
          <p className="mt-1.5 text-xs text-destructive">{errors.email.message}</p>
        ) : null}
      </div>
      <Button type="submit" size="lg" className="h-11 shrink-0 px-5" disabled={isSubmitting}>
        {isSubmitting ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          <>
            Join the waitlist
            <ArrowRight className="size-4" />
          </>
        )}
      </Button>
    </form>
  );
}
