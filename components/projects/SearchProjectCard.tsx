import Image from "next/image";
import { Arrow } from "@/components/ui/Arrow";
import type { Project } from "@/data/projects";

export function SearchProjectCard({ project, lead = false }: { project: Project; lead?: boolean }) {
  const labels = project.labels?.length ? project.labels : [project.category];
  const image = project.images[0];

  return (
    <a
      href={`/projects/${project.slug}`}
      className={`group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-cream text-ink shadow-float transition duration-ui hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${
        lead ? "lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]" : ""
      }`}
    >
      {image ? (
        <div className="overflow-hidden bg-paper">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes={lead ? "(min-width: 1024px) 40rem, 100vw" : "(min-width: 1024px) 34rem, 100vw"}
            className="aspect-[1280/800] h-full w-full object-cover object-top transition duration-500 ease-out group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        </div>
      ) : (
        <div className={`grid place-items-center bg-forest-deep px-6 text-center ${lead ? "min-h-56" : "min-h-40"}`}>
          <p className="font-display text-xl font-semibold tracking-tight text-gold sm:text-2xl">{project.category}</p>
        </div>
      )}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <ul className="flex flex-wrap gap-x-4 gap-y-1">
          {labels.map((label) => (
            <li key={label} className="text-sm font-semibold text-gold-deep">
              {label}
            </li>
          ))}
        </ul>
        <h3 className="mt-3 font-display text-xl font-semibold tracking-tight sm:text-2xl">{project.title}</h3>
        <p className="mt-2 text-muted">{project.shortDescription}</p>
        {project.features.length > 0 ? (
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Work">
            {project.features.map((item) => (
              <li key={item} className="rounded-full bg-paper px-3 py-1 text-sm text-ink ring-1 ring-line">
                {item}
              </li>
            ))}
          </ul>
        ) : null}
        <span className="mt-auto inline-flex min-h-11 items-center gap-2 pt-5 font-display font-semibold text-forest">
          View Case Study
          <Arrow className="h-4 w-4 text-gold-deep" />
        </span>
      </div>
    </a>
  );
}
