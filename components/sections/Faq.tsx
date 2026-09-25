"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/data/experience";

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section reveal bg-paper" id="faq" aria-labelledby="faq-heading">
      <Container>
        <div className="mb-10 text-center">
          <SectionHeading id="faq-heading" eyebrow="FAQs" align="center">
            Questions? <em className="italic text-gold-deep">Answered plainly.</em>
          </SectionHeading>
        </div>
        <div className="mx-auto grid max-w-3xl gap-3">
          {faqs.map((item, index) => {
            const isOpen = open === index;
            const panelId = `faq-answer-${index}`;
            return (
              <div key={item.question}>
                <h3>
                  <button
                    type="button"
                    className={`flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left font-display text-base font-semibold leading-snug text-ink transition-colors duration-ui sm:gap-4 sm:px-5 sm:py-4 sm:text-lg ${
                      isOpen ? "rounded-t-2xl bg-gold" : "rounded-2xl bg-cream shadow-card hover:shadow-float"
                    }`}
                    aria-expanded={isOpen}
                    aria-controls={isOpen ? panelId : undefined}
                    onClick={() => setOpen(isOpen ? -1 : index)}
                  >
                    {item.question}
                    <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
                  </button>
                </h3>
                {isOpen ? (
                  <div id={panelId} className="rounded-b-2xl bg-gold px-5 pb-4 text-forest-deep">
                    {item.answer}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
