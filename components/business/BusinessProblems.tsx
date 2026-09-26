import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const problems = [
  {
    number: "01",
    title: "Need a better website",
    text: "Your website should clearly communicate your services, build trust and make it easy for customers to take action.",
    icon: "M4 6h16v12H4zM4 10h16",
  },
  {
    number: "02",
    title: "Need a custom web solution",
    text: "When an off-the-shelf tool isn't enough, I can help translate business requirements into a practical web solution.",
    icon: "M8 8h8v8H8zM4 4h6M14 4h6M4 14v6M14 20h6",
  },
  {
    number: "03",
    title: "Need better online visibility",
    text: "SEO, Google Search Console, Google Business Profile and website optimization can help strengthen your online presence.",
    icon: "M11 11m-6 0a6 6 0 1 0 12 0a6 6 0 1 0-12 0M16 16l4 4",
  },
  {
    number: "04",
    title: "Need ongoing improvement",
    text: "Websites need maintenance, updates, optimization and continuous refinement after launch.",
    icon: "M12 6v6l4 2M12 21a9 9 0 1 0-9-9",
  },
];

export function BusinessProblems() {
  return (
    <section className="section reveal bg-paper" aria-labelledby="business-problem-heading">
      <Container>
        <SectionHeading id="business-problem-heading" eyebrow="The business problem" align="center">
          Your business doesn&apos;t need more technology. It needs the <em className="italic text-gold-deep">right solution.</em>
        </SectionHeading>
        <ol className="relative mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <div className="pointer-events-none absolute left-[12%] right-[12%] top-8 hidden h-px bg-gold xl:block" aria-hidden="true" />
          {problems.map((item) => (
            <li key={item.number} className="relative rounded-card bg-cream p-5 shadow-card">
              <div className="flex items-center gap-3">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-forest font-display text-sm font-bold text-gold">
                  {item.number}
                </span>
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-gold-deep" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                  <path d={item.icon} />
                </svg>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">{item.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
