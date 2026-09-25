import { getProject, type Project } from "@/data/projects";
import { site } from "@/lib/brand";

type PageKind = "home" | "about" | "services" | "projects" | "experience" | "contact";

export type Route =
  | {
      kind: PageKind;
      title: string;
      description: string;
      absolute?: boolean;
    }
  | {
      kind: "project";
      title: string;
      description: string;
      project: Project;
    }
  | {
      kind: "not-found";
      title: string;
      description: string;
    };

const pages: Record<Exclude<PageKind, "home">, { title: string; description: string }> = {
  about: {
    title: "About",
    description:
      "I am a full stack developer with more than five years across websites, applications, WordPress, SEO, and Google Ads.",
  },
  services: {
    title: "Services",
    description: "Full-stack development, technical SEO, Google Ads, WordPress, and website optimization.",
  },
  projects: {
    title: "Projects",
    description: "Websites I have worked on, plus SEO, website optimization, and Google Ads case studies.",
  },
  experience: {
    title: "Experience",
    description: "My employment history, from web development and SEO through full-stack roles, 2018 to May 2026.",
  },
  contact: {
    title: "Contact",
    description: "Contact me, a full stack developer in Islamabad. Email, phone, and LinkedIn.",
  },
};

export function normalizePath(pathname: string) {
  const path = pathname.split("?")[0]?.split("#")[0] || "/";
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path || "/";
}

export function matchRoute(pathname: string): Route {
  const path = normalizePath(pathname);

  if (path === "/") {
    return {
      kind: "home",
      title: site.title,
      description: `${site.description} Based in Islamabad, Pakistan.`,
      absolute: true,
    };
  }

  if (path === "/about" || path === "/services" || path === "/projects" || path === "/experience" || path === "/contact") {
    const kind = path.slice(1) as Exclude<PageKind, "home">;
    return { kind, ...pages[kind] };
  }

  const projectMatch = path.match(/^\/projects\/([^/]+)$/);
  if (projectMatch) {
    const project = getProject(decodeURIComponent(projectMatch[1]));
    if (project) {
      return {
        kind: "project",
        title: project.title,
        description: project.shortDescription,
        project,
      };
    }
  }

  return {
    kind: "not-found",
    title: "Page not found",
    description: "This page is not on my portfolio.",
  };
}

export function documentTitle(pathname: string) {
  const route = matchRoute(pathname);
  if (route.kind === "home") return route.title;
  return `${route.title} | Sadia Razaq`;
}
