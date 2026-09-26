import { Container } from "@/components/ui/Container";

const steps = [
  { number: "01", title: "Discover", text: "Understand the business, audience, goals and requirements." },
  { number: "02", title: "Define", text: "Clarify the scope, priorities and technical direction." },
  { number: "03", title: "Build", text: "Develop the website, application or digital solution." },
  { number: "04", title: "Optimize", text: "Improve usability, performance, SEO and online visibility where applicable." },
  { number: "05", title: "Refine", text: "Maintain, improve and evolve the solution as business needs change." },
];

export function BusinessProcess() {
  return (
    <section className="section reveal bg-forest text-cream" aria-labelledby="business-process-heading">
      <Container>
        <p className="eyebrow eyebrow-light">How I work</p>
        <h2 id="business-process-heading" className="mt-3 max-w-3xl font-display text-h2 font-bold">
          From business requirement to <em className="italic text-gold">working solution.</em>
        </h2>
        <ol className="relative mt-12 grid gap-0 lg:grid-cols-5 lg:gap-4">
          <div className="pointer-events-none absolute left-[8%] right-[8%] top-5 hidden h-px bg-gold lg:block" aria-hidden="true" />
          {steps.map((step, index) => (
            <li key={step.number} className="relative border-l border-gold/70 pb-8 pl-6 last:pb-0 lg:border-l-0 lg:pb-0 lg:pl-0 lg:pt-12">
              <span className="absolute -left-[0.45rem] top-0 grid size-4 place-items-center rounded-full bg-gold lg:left-0 lg:top-3" aria-hidden="true" />
              {index < steps.length - 1 ? (
                <span className="absolute bottom-1 left-[-0.7rem] font-display text-gold lg:hidden" aria-hidden="true">
                  ↓
                </span>
              ) : null}
              <p className="font-display text-sm font-bold tracking-wide text-gold">{step.number}</p>
              <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/80 sm:text-base">{step.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
