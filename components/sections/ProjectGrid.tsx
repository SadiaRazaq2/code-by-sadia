import { ProjectCard } from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getFeaturedProjects, type Project } from "@/data/projects";

export function ProjectGrid({
  projects = getFeaturedProjects(),
  showAllLink = false,
  heading = true,
}: {
  projects?: Project[];
  showAllLink?: boolean;
  heading?: boolean;
}) {
  const ordered = [...projects].sort((a, b) => Number(b.featured) - Number(a.featured));

  const grid = (
    <div className="grid gap-5 lg:grid-cols-2">
      {ordered.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );

  if (!heading) return grid;

  return (
    <section className="section reveal bg-paper" id="work" aria-labelledby="work-heading">
      <Container>
        <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading id="work-heading" eyebrow="Selected work">
            Recent <em className="italic text-gold-deep">websites</em>
          </SectionHeading>
          {showAllLink ? <Button href="/projects">All projects</Button> : null}
        </div>
        {grid}
      </Container>
    </section>
  );
}
