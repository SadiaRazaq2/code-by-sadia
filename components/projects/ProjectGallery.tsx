import Image from "next/image";
import type { Project, ProjectImage } from "@/data/projects";

function isTall(image: ProjectImage) {
  return image.height > image.width * 1.4;
}

export function ProjectGallery({ project, skip = 0 }: { project: Project; skip?: number }) {
  const images = project.images.slice(skip);
  if (images.length === 0) return null;

  return (
    <div className="grid gap-4">
      {images.map((image) =>
        isTall(image) ? (
          <div key={image.src} className="project-scroll">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              quality={60}
              sizes="(min-width: 1024px) 720px, 100vw"
              className="h-auto w-full"
            />
          </div>
        ) : (
          <div key={image.src} className="overflow-hidden rounded-card bg-paper shadow-card">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(min-width: 1024px) 720px, 100vw"
              className="aspect-[5/3] w-full object-cover object-top sm:aspect-[1280/800]"
            />
          </div>
        ),
      )}
    </div>
  );
}
