"use client";

import { useActionState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitContactForm, type ContactFormState } from "@/lib/actions/contact";

const initialState: ContactFormState = { status: "idle" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-10 text-center">
        <span className="flex size-11 items-center justify-center rounded-full bg-success-50 text-success-600">
          <CheckCircle2 className="size-6" strokeWidth={1.75} />
        </span>
        <p className="text-lg font-semibold text-foreground">Message sent.</p>
        <p className="text-sm text-muted-foreground">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-medium text-foreground">
          Name
        </label>
        <Input
          id="name"
          name="name"
          placeholder="Jane Doe"
          autoComplete="name"
          aria-invalid={Boolean(state.errors?.name)}
        />
        {state.errors?.name && (
          <p className="text-xs text-danger-600">{state.errors.name}</p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="jane@example.com"
          autoComplete="email"
          aria-invalid={Boolean(state.errors?.email)}
        />
        {state.errors?.email && (
          <p className="text-xs text-danger-600">{state.errors.email}</p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          placeholder="How can we help?"
          aria-invalid={Boolean(state.errors?.message)}
        />
        {state.errors?.message && (
          <p className="text-xs text-danger-600">{state.errors.message}</p>
        )}
      </div>

      {state.status === "error" && !state.errors && (
        <p className="text-sm text-danger-600">{state.message}</p>
      )}

      <Button type="submit" size="lg" className="h-11" disabled={pending}>
        {pending ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}
