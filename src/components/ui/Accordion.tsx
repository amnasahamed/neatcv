"use client";

import { CaretDownIcon } from "@phosphor-icons/react";
import { useState } from "react";

export function Accordion({
  items,
}: {
  items: ReadonlyArray<{ question: string; answer: string }>;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="accordion-list">
      {items.map((item, index) => {
        const open = openIndex === index;
        const contentId = `faq-answer-${index}`;

        return (
          <div className="accordion-item" key={item.question}>
            <button
              type="button"
              className="accordion-trigger"
              onClick={() => setOpenIndex(open ? null : index)}
              aria-expanded={open}
              aria-controls={contentId}
            >
              <span>{item.question}</span>
              <CaretDownIcon
                size={20}
                className={open ? "rotate-180" : ""}
                aria-hidden="true"
              />
            </button>
            <div id={contentId} hidden={!open} className="accordion-content">
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
