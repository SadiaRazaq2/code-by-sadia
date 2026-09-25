import { PageTitle } from "@/components/layout/PageTitle";
import { ProjectGrid } from "@/components/sections/ProjectGrid";
import { SearchWork } from "@/components/sections/SearchWork";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getWebsiteProjects } from "@/data/projects";

export function ProjectsView() {
  return (
    <>
      <PageTitle title="Projects" />
      <section className="bg-paper py-12" aria-labelledby="websites-heading">
        <Container>
          <h2 id="websites-heading" className="text-center font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Selected websites
          </h2>
          <p className="mx-auto mb-8 mt-4 max-w-2xl text-center text-base leading-relaxed text-muted sm:mb-10 sm:text-lg">
            I describe what the pages do. I add results, traffic, and client quotes only when they can be published accurately.
          </p>
          <ProjectGrid projects={getWebsiteProjects()} heading={false} />
        </Container>
      </section>
      <SearchWork />
      <section className="py-16 text-center">
        <Container>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            If this is the <em className="italic text-gold-deep">shape of the work</em>
          </h2>
          <div className="mt-6 flex justify-center">
            <Button href="/contact">Start a project</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
