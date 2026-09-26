"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects, type Project } from "@/data/projects";

const filters = [
  { id: "all", label: "All" },
  { id: "web-development", label: "Web Development" },
  { id: "seo", label: "SEO" },
  { id: "google-ads", label: "Google Ads" },
  { id: "wordpress", label: "WordPress" },
] as const;

type FilterId = (typeof filters)[number]["id"];

const priority = [
  "dubai-boating",
  "i-love-bubble-tea",
  "tapioca-supplier",
  "roballi-espresso",
  "genius-drive",
  "fun-beach-water-sports",
];

function matches(project: Project, filter: FilterId) {
  if (filter === "all") return true;
  if (filter === "web-development") return project.serviceType === "web-development";
  if (filter === "seo") return project.serviceType === "seo" || Boolean(project.labels?.some((label) => label.includes("SEO")));
  if (filter === "google-ads") return project.serviceType === "google-ads" || Boolean(project.labels?.includes("Google Ads"));
  return project.serviceType === "wordpress" || project.features.some((feature) => /wordpress/i.test(feature));
}

const curated = priority
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is Project => Boolean(project));

export function BusinessWork() {
  const [filter, setFilter] = useState<FilterId>("all");
  const visible = curated.filter((project) => matches(project, filter));

  return (
    <section className="section reveal bg-paper" aria-labelledby="business-work-heading">
      <Container>
        <SectionHeading id="business-work-heading" eyebrow="Selected work" align="center">
          Work businesses can <em className="italic text-gold-deep">look through</em>
        </SectionHeading>
        <div className="mt-8 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter projects">
          {filters.map((item) => {
            const selected = filter === item.id;
            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={selected}
                className={`min-h-11 rounded-full px-4 font-display text-sm font-semibold transition-colors duration-ui ${
                  selected ? "bg-forest text-cream" : "bg-cream text-ink ring-1 ring-line hover:ring-gold"
                }`}
                onClick={() => setFilter(item.id)}
              >
                {item.label}
              </button>
            );
          })}
        </div>
        <ul className="mt-8 grid gap-5 md:grid-cols-2">
          {visible.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
