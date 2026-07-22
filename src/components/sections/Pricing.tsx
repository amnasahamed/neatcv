import { CheckIcon } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const plans = [
  {
    name: "CV Writing",
    price: "₹499",
    description: "A polished, ATS-ready resume for your next application.",
    features: [
      "ATS-friendly resume",
      "Professional design",
      "Word and PDF files",
      "One free revision",
    ],
  },
  {
    name: "CV + LinkedIn",
    price: "₹799",
    description: "A consistent CV and LinkedIn presence built to be found.",
    features: [
      "Everything in the ₹499 package",
      "LinkedIn profile optimization",
      "Recruiter-friendly profile",
      "Better job visibility",
    ],
    featured: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="section-shell pricing-section">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Simple pricing"
            title="Choose the support you need."
            body="Straightforward packages for a stronger application. You will know exactly what is included before we begin."
          />
        </Reveal>
        <div className="pricing-layout pricing-layout-two">
          {plans.map((plan, index) => (
            <Reveal
              key={plan.name}
              className={`pricing-card ${plan.featured ? "pricing-featured" : ""}`}
              delay={index * 0.07}
            >
              <div>
                <h3>{plan.name}</h3>
                <p className="price">{plan.price}</p>
                <p className="pricing-description">{plan.description}</p>
              </div>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <CheckIcon size={17} weight="bold" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                className={`button ${plan.featured ? "button-primary" : "button-secondary"}`}
                href="#contact"
              >
                Book a review
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
