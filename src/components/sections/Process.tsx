import {
  ChatCircleTextIcon,
  FileArrowUpIcon,
  NotePencilIcon,
  TargetIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const process = [
  {
    title: "Share",
    body: "Send your current CV, target roles, and the context behind your next move.",
    icon: FileArrowUpIcon,
  },
  {
    title: "Clarify",
    body: "We identify your strongest evidence, gaps, priorities, and positioning.",
    icon: ChatCircleTextIcon,
  },
  {
    title: "Rewrite",
    body: "Your documents are rebuilt with clear structure and role-relevant language.",
    icon: NotePencilIcon,
  },
  {
    title: "Refine",
    body: "You review the draft and we sharpen it through two focused revision rounds.",
    icon: TargetIcon,
  },
];

export function Process() {
  return (
    <section id="process" className="section-shell">
      <Container>
        <Reveal>
          <SectionHeading
            title="A thoughtful process without the guesswork."
            body="You always know what we need, what happens next, and why each change strengthens your application."
          />
        </Reveal>
        <div className="process-grid">
          {process.map((item, index) => (
            <Reveal
              key={item.title}
              className="process-item"
              delay={index * 0.07}
            >
              <item.icon size={27} weight="duotone" aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
