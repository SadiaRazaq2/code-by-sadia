import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";

export function Process() {
  return (
    <section className="section reveal">
      <Container>
        <div className="mb-10 text-center">
          <SectionHeading eyebrow="How it runs" align="center">
            From brief to a <em className="italic text-gold-deep">usable site</em>
          </SectionHeading>
        </div>
        <ol className="grid gap-4 md:grid-cols-2">
          {experience.map((step) => (
            <li key={step.id} className="rounded-3xl bg-paper p-6">
              <div className="mb-4 flex items-center gap-3 border-b border-line pb-4">
                <span className="grid size-11 place-items-center rounded-full bg-gold font-display font-bold">
                  {step.label}
                </span>
                <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">{step.title}</h3>
              </div>
              <p className="text-muted">{step.summary}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
