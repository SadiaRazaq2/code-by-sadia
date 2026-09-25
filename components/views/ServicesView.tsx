import { PageTitle } from "@/components/layout/PageTitle";
import { Arrow } from "@/components/ui/Arrow";
import { Container } from "@/components/ui/Container";
import { services } from "@/data/skills";

const icons = [
  "M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z",
  "M11 11m-6 0a6 6 0 1 0 12 0a6 6 0 1 0-12 0M16 16l4 4",
  "M4 10h6v10H4zM14 4h6v16h-6z",
  "M4 4h16v16H4zM8 9h8M8 13h5",
  "M5 19V9M12 19V5M19 19v-7",
];

export function ServicesView() {
  return (
    <>
      <PageTitle title="Services" />
      <section className="bg-paper py-12 sm:py-16" aria-labelledby="services-provide">
        <Container>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="flex items-center justify-center gap-3 font-display text-sm font-semibold text-gold-deep">
              <span className="h-px w-8 bg-gold" aria-hidden="true" />
              Services
              <span className="h-px w-8 bg-gold" aria-hidden="true" />
            </p>
            <h2 id="services-provide" className="mt-3 font-display text-h2 font-bold">
              Services <em className="italic text-gold-deep">I provide</em>
            </h2>
          </div>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <li key={service.id}>
                <article className="flex h-full flex-col rounded-[22px] bg-cream p-6 shadow-card">
                  <span className="grid size-12 place-items-center rounded-2xl bg-paper text-forest" aria-hidden="true">
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
                      <path d={icons[index]} />
                    </svg>
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">{service.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted sm:text-base">{service.summary}</p>
                  <a href="/contact" className="mt-5 inline-flex min-h-11 items-center gap-2 font-display font-semibold text-forest">
                    Learn more
                    <Arrow className="h-4 w-4 text-gold-deep" />
                  </a>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
