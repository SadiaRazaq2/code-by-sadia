import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { requestOrigin } from "@/lib/site";

const staticPaths = ["/", "/about", "/services", "/projects", "/experience", "/contact"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const origin = await requestOrigin();
  const pages = staticPaths.map((path) => ({
    url: path === "/" ? `${origin}/` : `${origin}${path}`,
  }));

  const caseStudies = projects.map((project) => ({
    url: `${origin}/projects/${project.slug}`,
  }));

  return [...pages, ...caseStudies];
}
