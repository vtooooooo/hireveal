import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/constants/faq";

export function FaqPreview() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="FAQ" title="Questions worth answering upfront." />

      <AnimatedSection className="mt-12">
        <Accordion type="single" collapsible>
          {faqs.slice(0, 5).map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger className="text-base">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </AnimatedSection>

      <AnimatedSection className="mt-10 flex justify-center">
        <Button asChild variant="outline">
          <Link href="/faq">
            See all FAQs
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </AnimatedSection>
    </section>
  );
}
