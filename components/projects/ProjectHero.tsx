import Image from "next/image";
import { Arrow } from "@/components/ui/Arrow";
import { serviceTypes, type Project } from "@/data/projects";

function tagsFor(project: Project) {
  const labels = project.labels?.length ? project.labels : [project.category, serviceTypes[project.serviceType]];
  return [...new Set(labels)];
}

export function ProjectHero({ project }: { project: Project }) {
  const image = project.images[0];
  const live = project.liveUrl?.trim();

  return (
    <header className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-12">
      <div>
        <ul className="flex flex-wrap gap-2">
          {tagsFor(project).map((label) => (
            <li key={label} className="tag">
              {label}
            </li>
          ))}
        </ul>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{project.shortDescription}</p>
        {live ? (
          <a href={live} className="btn-primary mt-6 w-full justify-center sm:w-auto" target="_blank" rel="noopener noreferrer">
            <span className="btn-primary-label">Live Website</span>
            <span className="btn-primary-icon">
              <Arrow />
            </span>
          </a>
        ) : null}
      </div>
      {image ? (
        <div className="overflow-hidden rounded-card bg-paper shadow-card">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            priority
            sizes="(min-width: 1024px) 38rem, 100vw"
            className="aspect-[5/3] w-full object-cover object-top sm:aspect-[1280/800]"
          />
        </div>
      ) : null}
    </header>
  );
}
