import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const audiences = [
  { title: "Small businesses", text: "Professional websites and digital foundations." },
  { title: "Growing businesses", text: "Websites, systems and optimization that can evolve with the business." },
  { title: "Service businesses", text: "Websites, SEO, Google Business Profile and Google Ads." },
  { title: "E-commerce businesses", text: "E-commerce websites, product presentation and supporting web functionality." },
];

export function BusinessAudience() {
  return (
    <section className="section reveal bg-paper" aria-labelledby="business-audience-heading">
      <Container>
        <SectionHeading id="business-audience-heading" eyebrow="Who this is for" align="center">
          Built around real <em className="italic text-gold-deep">business needs.</em>
        </SectionHeading>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {audiences.map((item) => (
            <li key={item.title} className="rounded-card border border-line bg-cream p-6">
              <h3 className="font-display text-xl font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-muted">{item.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
