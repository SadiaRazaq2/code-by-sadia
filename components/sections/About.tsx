import { capabilityGroups, highlights } from "@/data/about";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Portrait } from "@/components/ui/Portrait";
import { SectionHeading } from "@/components/ui/SectionHeading";

const capabilityIcons = [
  "M5 7.5h14v8H5zM3 17.5h18M9 11l1.6 1.6L9 14.2M12.2 14.2h2.6",
  "M12 3.5c1.8 2.4 2.6 4.6 2.6 7.2L12 13l-2.6-2.3c0-2.6.8-4.8 2.6-7.2zM8.2 12.2 5.8 14l.8 2.4M15.8 12.2 18.2 14l-.8 2.4M12 15.2V18",
  "M5 17.5V11M9.5 17.5V8M14 17.5v-4.5M18.5 17.5V7M5 12.5l4.2-3.4 3.6 2.4 5.2-5",
  "M8.2 9.2a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6zM15.8 9.2a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6zM4.6 17.2c.4-2 1.8-3 3.6-3s3.2 1 3.6 3M12.2 17.2c.4-2 1.8-3 3.6-3s3.2 1 3.6 3",
];

export function About({ titleLevel = "h2" }: { titleLevel?: "h1" | "h2" }) {
  return (
    <section className="section reveal bg-cream" aria-labelledby="about-heading">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-12">
          <Portrait variant="about" />
          <div>
            <SectionHeading id="about-heading" eyebrow="About Me" level={titleLevel}>
              Full stack developer, <em className="italic text-gold-deep">across digital projects</em>
            </SectionHeading>
            <div className="mt-5 max-w-xl space-y-4 text-base leading-relaxed text-muted sm:text-lg">
              <p>
                I have more than five years of experience working across web development and digital projects.
              </p>
              <p>
                I cover the website or application itself, the practical steps that keep it online, and the search and advertising tasks that sit beside the build.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 lg:mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="flex items-center justify-center gap-3 font-display text-sm font-semibold text-gold-deep">
              <span className="h-px w-8 bg-gold" aria-hidden="true" />
              Practice
              <span className="h-px w-8 bg-gold" aria-hidden="true" />
            </p>
            <h3 id="about-capabilities" className="mt-3 font-display text-h2 font-bold">
              Core <em className="italic text-gold-deep">capabilities</em>
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              From development to visibility, I cover the build, what keeps a site online, and the search and ads work beside it.
            </p>
          </div>
          <ol className="relative mt-12 grid gap-x-4 gap-y-12 sm:mt-14 sm:grid-cols-2 sm:gap-y-14 xl:mt-16 xl:grid-cols-4 xl:gap-5">
            <svg
              className="pointer-events-none absolute inset-x-[6%] top-3 hidden h-14 w-[88%] xl:block"
              viewBox="0 0 100 36"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M2 20 C14 20 16 6 28 14 C40 22 44 6 56 14 C68 22 74 8 86 16 C92 20 96 18 98 16"
                fill="none"
                stroke="#F0B429"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
              />
              <path
                d="M56 14 C68 22 74 8 86 16 C92 20 96 18 98 16"
                fill="none"
                stroke="#314838"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
              />
              <circle cx="2" cy="20" r="1.1" fill="#F0B429" />
              <circle cx="98" cy="16" r="1.1" fill="#314838" />
            </svg>
            {capabilityGroups.map((group, index) => {
              const gold = index % 2 === 0;
              return (
                <li key={group.title} className="relative pt-11">
                  <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2">
                    <span
                      className={`absolute -inset-2 rounded-full border border-dashed ${gold ? "border-gold/70" : "border-forest/35"}`}
                      aria-hidden="true"
                    />
                    <span
                      className={`relative grid size-16 place-items-center rounded-full shadow-float ring-4 ring-cream sm:size-[4.6rem] ${gold ? "bg-gold text-forest" : "bg-forest text-gold"}`}
                    >
                      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d={capabilityIcons[index]} />
                      </svg>
                      <span
                        className={`absolute -bottom-2.5 grid size-7 place-items-center rounded-full font-display text-xs font-bold ring-2 ${gold ? "bg-white text-gold-deep ring-gold" : "bg-gold text-forest-deep ring-forest"}`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </span>
                  </div>
                  <article className="flex h-full flex-col items-center rounded-[1.6rem] bg-white px-4 pb-5 pt-14 text-center shadow-card ring-1 ring-line/80 transition duration-ui hover:-translate-y-1 hover:shadow-float motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                    <h4 id={`capability-${group.title}`} className="font-display text-xl font-semibold tracking-tight">
                      {group.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{group.summary}</p>
                    <ul className="mt-4 flex flex-wrap justify-center gap-2" aria-labelledby={`capability-${group.title}`}>
                      {group.items.map((item) => (
                        <li key={item} className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-ink ring-1 ring-line sm:text-sm">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="mt-12 rounded-[1.5rem] bg-forest px-5 py-8 text-cream sm:px-8 sm:py-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h3 className="font-display text-h3 font-semibold text-cream">Professional highlights</h3>
            <Button href="/experience" className="w-full justify-center sm:w-auto">
              View My Experience
            </Button>
          </div>
          <ol className="mt-8 grid gap-4 md:grid-cols-3">
            {highlights.map((item, index) => (
              <li key={item.title} className="rounded-[22px] bg-forest-card p-5">
                <span className="font-display text-sm font-semibold text-gold">0{index + 1}</span>
                <h4 className="mt-2 font-display text-xl font-semibold tracking-tight">{item.title}</h4>
                <p className="mt-2 text-cream/80">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
