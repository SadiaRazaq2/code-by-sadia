import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteApp } from "@/components/site/SiteApp";
import { projects } from "@/data/projects";
import { matchRoute } from "@/lib/routes";
import { pageMetadata } from "@/lib/site";

type Props = { params: Promise<{ slug?: string[] }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    { slug: [] as string[] },
    { slug: ["about"] },
    { slug: ["services"] },
    { slug: ["projects"] },
    { slug: ["experience"] },
    { slug: ["contact"] },
    ...projects.map((project) => ({ slug: ["projects", project.slug] })),
  ];
}

function toPath(slug?: string[]) {
  if (!slug || slug.length === 0) return "/";
  return `/${slug.join("/")}`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pathname = toPath(slug);
  const route = matchRoute(pathname);

  if (route.kind === "not-found") {
    return {
      title: "Page not found",
      description: route.description,
      robots: { index: false, follow: false },
    };
  }

  if (route.kind === "project") {
    const image = route.project.images[0];
    return pageMetadata({
      title: route.title,
      description: route.description,
      path: pathname,
      type: "article",
      image: image
        ? { url: image.src, alt: image.alt, width: image.width, height: image.height }
        : undefined,
    });
  }

  return pageMetadata({
    title: route.title,
    description: route.description,
    path: pathname,
    absolute: route.absolute,
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (matchRoute(toPath(slug)).kind === "not-found") notFound();
  return <SiteApp />;
}
