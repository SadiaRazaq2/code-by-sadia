import type { ReactNode } from "react";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { RelatedProjects } from "@/components/projects/RelatedProjects";
import { Container } from "@/components/ui/Container";
import { getRelatedProjects, type Project } from "@/data/projects";

function filled(value?: string) {
  return Boolean(value?.trim());
}

function StudySection({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section className="border-t border-line pt-8 sm:pt-10" aria-labelledby={id}>
      <h2 id={id} className="font-display text-xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      <div className="mt-4 max-w-3xl">{children}</div>
    </section>
  );
}

export function ProjectDetail({ project }: { project: Project }) {
  const technologies = project.technologies?.map((item) => item.trim()).filter(Boolean) ?? [];
  const features = project.features.map((item) => item.trim()).filter(Boolean);
  const links = [
    filled(project.liveUrl) ? { label: "Live website", href: project.liveUrl as string } : null,
    filled(project.githubUrl) ? { label: "GitHub", href: project.githubUrl as string } : null,
  ].filter((item): item is { label: string; href: string } => item !== null);
  const gallery = project.images.slice(1);
  const related = getRelatedProjects(project.slug);

  return (
    <article className="py-8 sm:py-10">
      <Container className="grid gap-10 sm:gap-12">
        <ProjectHero project={project} />

        <div className="grid gap-8 sm:gap-10">
          {filled(project.description) ? (
            <StudySection id="project-overview" title="Project overview">
              <p className="text-base leading-relaxed text-muted sm:text-lg">{project.description}</p>
            </StudySection>
          ) : null}

          {filled(project.challenge) ? (
            <StudySection id="project-challenge" title="Challenge">
              <p className="text-base leading-relaxed text-muted sm:text-lg">{project.challenge}</p>
            </StudySection>
          ) : null}

          {filled(project.solution) ? (
            <StudySection id="project-solution" title="Solution">
              <p className="text-base leading-relaxed text-muted sm:text-lg">{project.solution}</p>
            </StudySection>
          ) : null}

          {filled(project.role) ? (
            <StudySection id="project-role" title="My role">
              <p className="text-base leading-relaxed text-muted sm:text-lg">{project.role}</p>
            </StudySection>
          ) : null}

          {technologies.length > 0 ? (
            <StudySection id="project-technologies" title="Technologies">
              <ul className="flex flex-wrap gap-2">
                {technologies.map((item) => (
                  <li key={item} className="rounded-full bg-paper px-3 py-1.5 text-sm font-medium ring-1 ring-line">
                    {item}
                  </li>
                ))}
              </ul>
            </StudySection>
          ) : null}

          {features.length > 0 ? (
            <StudySection id="project-features" title="Key features">
              <ul className="grid gap-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-base sm:text-lg">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </StudySection>
          ) : null}
        </div>

        {gallery.length > 0 ? (
          <section className="border-t border-line pt-8 sm:pt-10" aria-labelledby="project-gallery">
            <h2 id="project-gallery" className="font-display text-xl font-semibold tracking-tight sm:text-3xl">
              Project gallery
            </h2>
            <div className="mt-5">
              <ProjectGallery project={project} skip={1} />
            </div>
          </section>
        ) : null}

        {links.length > 0 ? (
          <StudySection id="project-links" title="Links">
            <ul className="grid gap-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="break-all font-semibold text-forest underline decoration-gold underline-offset-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </StudySection>
        ) : null}

        <RelatedProjects projects={related} />
      </Container>
    </article>
  );
}
