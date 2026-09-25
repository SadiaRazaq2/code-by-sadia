import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { employment } from "@/data/experience";

export function ExperienceTimeline({ heading = true }: { heading?: boolean }) {
  return (
    <section className="section reveal bg-paper" id="experience" aria-labelledby="experience-heading">
      <Container>
        {heading ? (
          <div className="mb-10 max-w-2xl">
            <SectionHeading id="experience-heading" eyebrow="Experience">
              Employment <em className="italic text-gold-deep">history</em>
            </SectionHeading>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              My roles from 2018 through May 2026, with the title, organization, and location for each one.
            </p>
          </div>
        ) : (
          <h2 id="experience-heading" className="sr-only">
            Employment history
          </h2>
        )}
        <ol className="mx-auto max-w-3xl">
          {employment.map((role) => (
            <li key={role.id} className="grid gap-2 py-6 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-10 sm:py-8">
              <p className="font-display text-sm font-semibold tracking-wide text-gold-deep sm:pt-0.5 sm:text-right sm:text-base">
                {role.dates}
              </p>
              <div className="relative border-l-2 border-gold/45 pl-6 sm:pl-8">
                <span className="absolute -left-[7px] top-1.5 size-3 rounded-full bg-gold ring-4 ring-paper" aria-hidden="true" />
                <h3 className="font-display text-xl font-semibold leading-tight tracking-tight sm:text-2xl">{role.title}</h3>
                <p className="mt-1 text-base font-semibold sm:text-lg">{role.organization}</p>
                <p className="text-muted">{role.place}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
