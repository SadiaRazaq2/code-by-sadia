import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const groups = [
  {
    number: "01",
    title: "Web development",
    items: [
      "Business websites",
      "Full-stack web applications",
      "Next.js / React development",
      "Laravel APIs",
      "REST APIs",
      ".NET Core",
      "Admin panels",
      "E-commerce websites",
      "Responsive UI",
    ],
  },
  {
    number: "02",
    title: "Website and WordPress",
    items: ["WordPress websites", "Website maintenance", "Content updates", "Website optimization", "Hosting and deployment", "Website migration"],
  },
  {
    number: "03",
    title: "SEO and visibility",
    items: ["Technical SEO", "On-page SEO", "Google Search Console", "Google Business Profile", "Semrush", "Website optimization"],
  },
  {
    number: "04",
    title: "Google Ads",
    items: ["Search campaigns", "Search-term analysis", "Conversion tracking", "Landing-page alignment", "Campaign optimization"],
  },
];

export function BusinessCapabilities() {
  return (
    <section className="section reveal bg-cream" aria-labelledby="business-capabilities-heading">
      <Container>
        <SectionHeading id="business-capabilities-heading" eyebrow="What I can help with">
          Capabilities for <em className="italic text-gold-deep">businesses</em>
        </SectionHeading>
        <ul className="mt-10 grid gap-5 lg:grid-cols-2">
          {groups.map((group) => (
            <li key={group.number} className="rounded-card bg-paper p-5 shadow-card sm:p-6">
              <p className="font-display text-sm font-bold text-gold-deep">{group.number}</p>
              <h3 className="mt-1 font-display text-2xl font-semibold tracking-tight">{group.title}</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="rounded-full bg-cream px-3 py-1.5 text-sm font-medium text-ink ring-1 ring-line">
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
