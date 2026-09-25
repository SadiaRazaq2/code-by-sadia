import Image from "next/image";
import { Arrow } from "@/components/ui/Arrow";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const image = project.images[0];
  const technologies = project.technologies?.filter((item) => item.trim()) ?? [];

  return (
    <a
      href={`/projects/${project.slug}`}
      className={`project-card group ${project.featured ? "project-card-featured" : ""}`}
    >
      {image ? (
        <div className="overflow-hidden rounded-image bg-paper">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(min-width: 1024px) 34rem, 100vw"
            className="aspect-[5/3] w-full object-cover object-top transition duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100 sm:aspect-[1280/800]"
          />
        </div>
      ) : null}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {project.featured ? <span className="text-sm font-semibold text-gold-deep">Featured</span> : null}
        {(project.labels?.length ? project.labels : [project.category]).map((label) => (
          <span key={label} className="tag">
            {label}
          </span>
        ))}
      </div>
      <h3 className="mt-3 font-display text-xl font-semibold leading-tight tracking-tight sm:text-2xl">{project.title}</h3>
      <p className="mt-2 text-muted">{project.shortDescription}</p>
      {technologies.length > 0 ? (
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
          {technologies.map((item) => (
            <li key={item} className="rounded-full bg-paper px-3 py-1 text-sm font-medium text-ink ring-1 ring-line">
              {item}
            </li>
          ))}
        </ul>
      ) : null}
      <span className="mt-5 inline-flex min-h-11 items-center gap-2 font-display font-semibold text-forest">
        View Case Study
        <Arrow className="h-4 w-4 text-gold-deep transition group-hover:translate-x-0.5 motion-reduce:transition-none" />
      </span>
    </a>
  );
}
