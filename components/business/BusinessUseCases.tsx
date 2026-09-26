import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const cases = [
  {
    number: "01",
    title: "Business website",
    text: "For businesses that need a professional, responsive online presence.",
    icon: "M4 6h16v12H4zM4 10h16",
  },
  {
    number: "02",
    title: "Custom web application",
    text: "For businesses that need functionality beyond a standard website.",
    icon: "M8 7h8v10H8zM5 4h4M15 4h4M5 20h4M15 20h4",
  },
  {
    number: "03",
    title: "Website optimization",
    text: "For existing websites that need technical, UX, SEO or performance improvements.",
    icon: "M5 19V9M12 19V5M19 19v-7",
  },
  {
    number: "04",
    title: "Online visibility",
    text: "For businesses working on SEO, Google Business Profile and Google Ads.",
    icon: "M12 21a9 9 0 1 0-9-9M12 7v5l3 2",
  },
];

export function BusinessUseCases() {
  return (
    <section className="section reveal bg-cream" aria-labelledby="business-cases-heading">
      <Container>
        <SectionHeading id="business-cases-heading" eyebrow="Where I can help">
          Practical places to <em className="italic text-gold-deep">start</em>
        </SectionHeading>
        <ul className="mt-10 grid gap-5 md:grid-cols-2">
          {cases.map((item) => (
            <li key={item.number}>
              <article className="flex h-full flex-col rounded-card bg-paper p-6 shadow-card transition duration-ui hover:-translate-y-1 hover:shadow-float motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-display text-sm font-bold text-gold-deep">{item.number}</span>
                  <span className="grid size-12 place-items-center rounded-2xl bg-forest text-gold" aria-hidden="true">
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
                      <path d={item.icon} />
                    </svg>
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-muted">{item.text}</p>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
