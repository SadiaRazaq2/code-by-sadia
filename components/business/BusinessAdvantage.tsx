import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const business = ["Goals", "Customer needs", "Requirements", "Priorities", "Budget considerations", "User experience"];
const technical = ["Architecture", "Frontend", "Backend", "APIs", "CMS", "Hosting", "Deployment"];
const path = ["Business requirement", "Technical direction", "Practical solution"];

export function BusinessAdvantage() {
  return (
    <section className="section reveal bg-cream" aria-labelledby="business-advantage-heading">
      <Container>
        <SectionHeading id="business-advantage-heading" eyebrow="Technical advantage">
          Technical understanding behind every <em className="italic text-gold-deep">conversation.</em>
        </SectionHeading>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
          Because I come from a hands-on development background, I understand both the business requirement and the technical side of delivering it.
        </p>
        <div className="mt-10 grid items-stretch gap-4 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-5">
          <article className="rounded-card bg-paper p-5 shadow-card sm:p-6">
            <h3 className="font-display text-xl font-semibold tracking-tight">Business side</h3>
            <ul className="mt-4 grid gap-2">
              {business.map((item) => (
                <li key={item} className="flex items-center gap-3 text-base">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <p className="grid place-items-center font-display text-3xl text-gold-deep" aria-hidden="true">
            <span className="lg:hidden">↓</span>
            <span className="hidden lg:inline">→</span>
          </p>
          <article className="rounded-card bg-forest p-5 text-cream shadow-float sm:p-6">
            <h3 className="font-display text-xl font-semibold tracking-tight">Technical side</h3>
            <ul className="mt-4 grid gap-2">
              {technical.map((item) => (
                <li key={item} className="flex items-center gap-3 text-base">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
        <ol className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
          {path.map((item, index) => (
            <li key={item} className="flex flex-col items-center gap-3 sm:flex-row">
              <span className="rounded-full bg-forest px-4 py-2 text-center font-display text-sm font-semibold text-cream sm:text-base">
                {item}
              </span>
              {index < path.length - 1 ? (
                <span className="font-display text-xl text-gold-deep" aria-hidden="true">
                  <span className="sm:hidden">↓</span>
                  <span className="hidden sm:inline">→</span>
                </span>
              ) : null}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
