import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { ComingSoon } from "@/components/shared/coming-soon";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <ComingSoon
      title="Contact"
      description="A proper contact form is on its way. Check back soon."
    />
  );
}
