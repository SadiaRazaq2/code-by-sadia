import Image from "next/image";
import type { Project } from "@/data/projects";

export function RelatedProjects({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null;

  return (
    <section className="border-t border-line pt-10" aria-labelledby="related-projects-heading">
      <h2 id="related-projects-heading" className="font-display text-xl font-semibold tracking-tight sm:text-3xl">
        Related projects
      </h2>
      <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const image = project.images[0];
          return (
            <li key={project.id}>
              <a href={`/projects/${project.slug}`} className="group block h-full overflow-hidden rounded-[22px] bg-paper shadow-card">
                {image ? (
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    sizes="(min-width: 1024px) 22rem, (min-width: 640px) 50vw, 100vw"
                    className="aspect-[1280/800] w-full object-cover object-top"
                  />
                ) : (
                  <div className="grid aspect-[1280/800] place-items-center bg-forest px-4 text-center">
                    <span className="font-display text-xl font-semibold text-gold">{project.category}</span>
                  </div>
                )}
                <span className="block p-5">
                  <span className="text-sm font-semibold text-gold-deep">{project.category}</span>
                  <h3 className="mt-1 font-display text-xl font-semibold tracking-tight group-hover:text-forest">
                    {project.title}
                  </h3>
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
