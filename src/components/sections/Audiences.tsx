import Image from "next/image";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const audiences = [
  {
    title: "Starting out",
    body: "Turn projects, coursework, internships, and part-time work into clear evidence of what you can contribute.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=85",
    alt: "A young professional reviewing notes with peers at a shared table",
  },
  {
    title: "Returning to work",
    body: "Explain time away with confidence and bring your skills, experience, and current direction back into focus.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=85",
    alt: "A working professional preparing for her next opportunity at a desk",
  },
  {
    title: "Changing careers",
    body: "Connect transferable strengths to your new field so recruiters can see the logic behind your move.",
    image:
      "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=1000&q=85",
    alt: "A professional planning a career transition with a notebook and laptop",
  },
];

export function Audiences() {
  return (
    <section className="section-shell" aria-labelledby="audiences-heading">
      <Container>
        <Reveal>
          <SectionHeading
            title="Your path does not need to look conventional."
            body="We find the strongest story in the experience you already have, then make it easy for recruiters to understand."
          />
        </Reveal>
        <div className="audience-grid">
          {audiences.map((audience, index) => (
            <Reveal
              key={audience.title}
              className="audience-card"
              delay={index * 0.06}
            >
              <div className="audience-image">
                <Image
                  src={audience.image}
                  alt={audience.alt}
                  width={900}
                  height={720}
                  sizes="(max-width: 767px) 100vw, 33vw"
                />
              </div>
              <div className="audience-content">
                <div className="flex items-center justify-between gap-3">
                  <h3>{audience.title}</h3>
                  <ArrowUpRightIcon size={20} aria-hidden="true" />
                </div>
                <p>{audience.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
