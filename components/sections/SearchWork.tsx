import { SearchProjectCard } from "@/components/projects/SearchProjectCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getSearchProjects } from "@/data/projects";

export function SearchWork() {
  const projects = getSearchProjects();
  const ordered = [...projects].sort((a, b) => Number(b.featured) - Number(a.featured));
  const [lead, ...rest] = ordered;

  if (!lead) return null;

  return (
    <section className="section reveal scroll-mt-28 bg-forest text-cream" id="search-work" aria-labelledby="search-work-heading">
      <Container>
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <SectionHeading id="search-work-heading" eyebrow="Search and ads" align="center" tone="light">
            SEO, optimization, and <em className="italic text-gold">Google Ads</em>
          </SectionHeading>
          <p className="mt-4 text-base leading-relaxed text-cream/80 sm:text-lg">Each case study stays with the work that was done.</p>
        </div>
        <div className="grid gap-5">
          <SearchProjectCard project={lead} lead />
          {rest.length > 0 ? (
            <div className="grid gap-5 lg:grid-cols-2">
              {rest.map((project) => (
                <SearchProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
