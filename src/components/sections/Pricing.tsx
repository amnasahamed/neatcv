import { CheckIcon } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const plans = [
  {
    name: "CV refresh",
    price: "From £95",
    description: "For a focused rewrite of your current CV.",
    features: [
      "ATS-friendly CV",
      "Target-role positioning",
      "Two revision rounds",
    ],
  },
  {
    name: "Complete profile",
    price: "From £155",
    description: "For a CV and LinkedIn profile that work together.",
    features: [
      "ATS-friendly CV",
      "LinkedIn profile rewrite",
      "Keyword direction",
      "Two revision rounds",
    ],
    featured: true,
  },
  {
    name: "LinkedIn focus",
    price: "From £75",
    description: "For a clearer, more searchable professional profile.",
    features: [
      "Headline and About rewrite",
      "Experience optimization",
      "Profile checklist",
    ],
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
            body="Final pricing depends on document length and complexity. You will receive a clear quote before any work begins."
          />
        </Reveal>
        <div className="pricing-layout">
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
