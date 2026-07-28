import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SectionHeading } from "@/components/shared/section-heading";
import { ContactForm } from "@/components/shared/contact-form";
import { siteConfig } from "@/lib/constants/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Contact"
        title="Get in touch."
        description="Question about a listing, a bug to report, or something else on your mind — send it over."
      />

      <div className="mt-12">
        <ContactForm />
      </div>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        Prefer email? Reach us directly at{" "}
        <a
          href={`mailto:${siteConfig.supportEmail}`}
          className="font-medium text-foreground underline underline-offset-2"
        >
          {siteConfig.supportEmail}
        </a>
        .
      </p>
    </section>
  );
}
