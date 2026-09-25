import { Arrow } from "@/components/ui/Arrow";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/skills";

const icons = [
  "M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z",
  "M11 11m-6 0a6 6 0 1 0 12 0a6 6 0 1 0-12 0M16 16l4 4",
  "M4 10h6v10H4zM14 4h6v16h-6z",
  "M4 4h16v16H4zM8 9h8M8 13h5",
  "M5 19V9M12 19V5M19 19v-7",
];

function Mark({ path, light = false }: { path: string; light?: boolean }) {
  return (
    <span
      className={`grid place-items-center rounded-full ${light ? "size-14 bg-white/10 text-gold" : "mb-4 size-12 bg-paper text-forest"}`}
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <path d={path} />
      </svg>
    </span>
  );
}

export function Services() {
  const [lead, ...rest] = services;

  return (
    <section className="section reveal bg-paper" id="services">
      <Container>
        <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Services">
            Full stack first, <em className="italic text-gold-deep">then the work around it</em>
          </SectionHeading>
          <Button href="/contact">Start a project</Button>
        </div>
        <div className="grid items-stretch gap-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <article id={lead.id} className="flex scroll-mt-28 flex-col justify-between rounded-[22px] bg-forest p-5 text-cream shadow-float sm:p-8">
            <div>
              <Mark path={icons[0]} light />
              <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight sm:mt-6 sm:text-3xl">{lead.title}</h3>
              <p className="mt-3 max-w-md text-base leading-relaxed text-cream/80 sm:text-lg">{lead.summary}</p>
            </div>
            <a href="/contact" className="mt-8 inline-flex min-h-11 items-center gap-2 font-display font-semibold text-gold">
              Discuss this
              <Arrow className="h-4 w-4" />
            </a>
          </article>
          <div className="grid gap-5 sm:grid-cols-2">
            {rest.map((service, index) => (
              <article key={service.id} id={service.id} className="scroll-mt-28 rounded-[22px] bg-cream p-5 shadow-card transition-shadow duration-ui hover:shadow-float">
                <Mark path={icons[index + 1]} />
                <h3 className="font-display text-xl font-semibold tracking-tight">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{service.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
