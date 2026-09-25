import { PageTitle } from "@/components/layout/PageTitle";
import { ProjectDetail } from "@/components/projects/ProjectDetail";
import type { Project } from "@/data/projects";
import { siteUrl } from "@/lib/brand";

function projectJsonLd(project: Project) {
  const origin = siteUrl ?? "";
  const url = `${origin}/projects/${project.slug}`;
  const image = project.images[0];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: project.title,
        description: project.shortDescription,
        url,
        ...(image && siteUrl ? { image: `${siteUrl}${image.src}` } : {}),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: origin ? `${origin}/` : "/" },
          { "@type": "ListItem", position: 2, name: "Projects", item: `${origin}/projects` },
          { "@type": "ListItem", position: 3, name: project.title, item: url },
        ],
      },
    ],
  };
}

export function ProjectView({ project }: { project: Project }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd(project)) }} />
      <PageTitle title={project.title} trail={[{ href: "/projects", label: "Projects" }]} />
      <ProjectDetail project={project} />
    </>
  );
}
