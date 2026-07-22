import { Container } from "@/components/layout/Container";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/lib/site";

export function Faq() {
  return (
    <section id="faq" className="section-shell">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <SectionHeading
            title="Questions before you begin."
            body="If your situation is not covered here, send a short note and we will tell you how we can help."
          />
        </Reveal>
        <Reveal delay={0.08}>
          <Accordion items={faqs} />
        </Reveal>
      </Container>
    </section>
  );
}
