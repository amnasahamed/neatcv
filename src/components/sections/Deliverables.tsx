import Image from "next/image";
import {
  CheckCircleIcon,
  MagnifyingGlassIcon,
  QuotesIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Deliverables() {
  return (
    <section className="section-shell deliverables-section">
      <Container>
        <Reveal>
          <SectionHeading
            title="Practical work you can use immediately."
            body="Every project ends with polished documents, clear reasoning, and guidance you can apply to future opportunities."
          />
        </Reveal>
        <div className="deliverables-grid">
          <Reveal className="deliverable deliverable-image">
            <Image
              src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?auto=format&fit=crop&w=1300&q=85"
              alt="A printed resume and a notebook arranged on a desk for review"
              width={1300}
              height={950}
              sizes="(max-width: 767px) 100vw, 58vw"
            />
          </Reveal>
          <Reveal className="deliverable deliverable-accent" delay={0.05}>
            <MagnifyingGlassIcon
              size={34}
              weight="duotone"
              aria-hidden="true"
            />
            <h3>Keyword direction</h3>
            <p>
              Role-relevant language chosen for people and parsing software.
            </p>
          </Reveal>
          <Reveal className="deliverable" delay={0.1}>
            <QuotesIcon size={34} weight="duotone" aria-hidden="true" />
            <h3>A stronger narrative</h3>
            <p>
              A consistent story from your opening profile through every
              experience.
            </p>
          </Reveal>
          <Reveal className="deliverable deliverable-dark" delay={0.15}>
            <CheckCircleIcon size={34} weight="duotone" aria-hidden="true" />
            <h3>Editable final files</h3>
            <p>
              Clean, practical documents you can update as your career develops.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
