import Image from "next/image";
import {
  ArrowRightIcon,
  CheckCircleIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section id="top" className="hero-shell">
      <Container className="grid min-h-[calc(100dvh-72px)] items-center gap-12 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
        <Reveal className="hero-copy">
          <p className="eyebrow">CV and LinkedIn support</p>
          <h1>Make your experience impossible to overlook.</h1>
          <p className="hero-subtext">
            ATS-friendly CVs and LinkedIn profiles written to show your value
            clearly.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              Book a review <ArrowRightIcon size={18} weight="bold" />
            </a>
            <a className="button button-secondary" href="#services">
              See our services
            </a>
          </div>
        </Reveal>

        <Reveal className="hero-visual" delay={0.12}>
          <div className="hero-image-wrap">
            <Image
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1400&q=85"
              alt="A young Indian professional preparing a CV at a desk with a laptop"
              width={1400}
              height={1050}
              priority
              sizes="(max-width: 1023px) 100vw, 48vw"
            />
          </div>
          <div className="hero-note">
            <CheckCircleIcon size={22} weight="fill" aria-hidden="true" />
            <p>
              <strong>Clear positioning</strong>
              <span>Built around the roles you want next.</span>
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
