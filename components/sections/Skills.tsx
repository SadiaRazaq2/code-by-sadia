import { skillMarks } from "@/data/skillMarks";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Skills() {
  return (
    <section className="section reveal scroll-mt-28" id="skills" aria-labelledby="skills-heading">
      <Container>
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <SectionHeading id="skills-heading" eyebrow="Skills" align="center">
            Frameworks and <em className="italic text-gold-deep">tools</em>
          </SectionHeading>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            I start with frontend and backend. Publishing, search, ads, and the tools I use to ship a site follow.
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4" aria-label="Frameworks and tools">
          {skillMarks.map((mark) => (
            <li key={mark.name}>
              <div className="flex h-full flex-col items-center rounded-[22px] bg-cream px-2.5 py-4 text-center shadow-card transition duration-ui hover:-translate-y-1 hover:shadow-float motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:px-3 sm:py-5">
                <span className="grid size-12 place-items-center rounded-2xl bg-white ring-1 ring-line sm:size-16" aria-hidden="true">
                  {mark.path ? (
                    <svg viewBox="0 0 24 24" className="size-7 sm:size-9" aria-hidden="true">
                      <path fill={`#${mark.hex}`} d={mark.path} />
                    </svg>
                  ) : (
                    <span
                      className="px-1 text-center font-display text-[0.68rem] font-bold leading-tight tracking-tight"
                      style={{ color: `#${mark.hex}` }}
                    >
                      {mark.wordmark}
                    </span>
                  )}
                </span>
                <span className="mt-2.5 font-display text-[0.8rem] font-semibold leading-tight text-ink sm:mt-3 sm:text-sm">{mark.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
