import type { ReactNode } from "react";

export function SectionHeading({
  title,
  body,
  eyebrow,
  align = "left",
}: {
  title: string;
  body?: string;
  eyebrow?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={
        align === "center" ? "section-heading text-center" : "section-heading"
      }
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {body && <p className={align === "center" ? "mx-auto" : ""}>{body}</p>}
    </div>
  );
}

export function IconTitle({
  icon,
  children,
}: {
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="icon-title">
      <span aria-hidden="true">{icon}</span>
      <h3>{children}</h3>
    </div>
  );
}
