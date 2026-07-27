import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/constants/faq";

export const metadata: Metadata = buildMetadata({
  title: "FAQ",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading align="left" eyebrow="FAQ" title="Everything worth asking upfront." />
      <div className="mt-14">
        <Accordion type="single" collapsible>
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger className="text-base">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
