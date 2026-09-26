"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const faqs = [
  {
    question: "What types of projects do you work on?",
    answer:
      "I work on business websites, full-stack web applications, WordPress, e-commerce, admin panels, website maintenance, SEO, Google Business Profile, and Google Ads.",
  },
  {
    question: "Can you work with an existing website?",
    answer: "Yes. I can work on an existing website, including updates, optimization, and the search or ads work beside it.",
  },
  {
    question: "Can you work with WordPress?",
    answer: "Yes. I set up WordPress websites and handle content updates, maintenance, and optimization.",
  },
  {
    question: "Can you help with SEO and Google Ads?",
    answer:
      "Yes. I work on technical and on-page SEO, Google Search Console, Google Business Profile, Semrush, and Google Ads, including search-term analysis, conversion tracking, and landing-page alignment.",
  },
  {
    question: "Can you work with an existing development team?",
    answer: "Yes. I can join an existing team for the website, the application, or the SEO and Google Ads work.",
  },
  {
    question: "What happens after I submit a project inquiry?",
    answer:
      "After you submit an inquiry, the initial step is to understand your requirements, goals and current setup before discussing the appropriate scope and next steps.",
  },
];

export function BusinessFaq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section reveal bg-cream" aria-labelledby="business-faq-heading">
      <Container>
        <div className="mb-10 text-center">
          <SectionHeading id="business-faq-heading" eyebrow="FAQ" align="center">
            Questions before you <em className="italic text-gold-deep">start</em>
          </SectionHeading>
        </div>
        <div className="mx-auto grid max-w-3xl gap-3">
          {faqs.map((item, index) => {
            const isOpen = open === index;
            const panelId = `business-faq-${index}`;
            return (
              <div key={item.question}>
                <h3>
                  <button
                    type="button"
                    className={`flex min-h-11 w-full items-center justify-between gap-3 px-4 py-3.5 text-left font-display text-base font-semibold leading-snug text-ink transition-colors duration-ui sm:px-5 sm:py-4 sm:text-lg ${
                      isOpen ? "rounded-t-2xl bg-gold" : "rounded-2xl bg-paper shadow-card hover:shadow-float"
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
                  <div id={panelId} className="rounded-b-2xl bg-gold px-5 pb-4 text-base leading-relaxed text-forest-deep">
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
