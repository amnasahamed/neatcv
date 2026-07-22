import Image from "next/image";
import {
  CheckIcon,
  LinkedinLogoIcon,
  ReadCvLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/site";

const icons = [ReadCvLogoIcon, LinkedinLogoIcon];

export function Services() {
  return (
    <section id="services" className="section-shell service-section">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What we improve"
            title="One clear story, wherever recruiters find you."
            body="Your CV and LinkedIn should reinforce each other. We shape both around your goals, strengths, and target roles."
          />
        </Reveal>

        <div className="services-layout">
          <Reveal className="service-image">
            <Image
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1300&q=85"
              alt="A professional planning a career move at a laptop and notebook"
              width={1300}
              height={1040}
              sizes="(max-width: 1023px) 100vw, 46vw"
            />
          </Reveal>

          <div className="service-list">
            {services.map((service, index) => {
              const Icon = icons[index];
              return (
                <Reveal
                  key={service.title}
                  className="service-block"
                  delay={index * 0.08}
                >
                  <div className="service-number" aria-hidden="true">
                    <Icon size={26} weight="duotone" />
                  </div>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <ul>
                      {service.includes.map((item) => (
                        <li key={item}>
                          <CheckIcon
                            size={16}
                            weight="bold"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
