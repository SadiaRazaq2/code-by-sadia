"use client";

import { useSite } from "@/components/site/SiteProvider";
import { AboutView } from "@/components/views/AboutView";
import { ContactView } from "@/components/views/ContactView";
import { ExperienceView } from "@/components/views/ExperienceView";
import { ForBusinessesView } from "@/components/views/ForBusinessesView";
import { HomeView } from "@/components/views/HomeView";
import { NotFoundView } from "@/components/views/NotFoundView";
import { ProjectsView } from "@/components/views/ProjectsView";
import { ProjectView } from "@/components/views/ProjectView";
import { ServicesView } from "@/components/views/ServicesView";
import { matchRoute } from "@/lib/routes";

export function SiteApp() {
  const { path } = useSite();
  const route = matchRoute(path);

  let view = <NotFoundView />;
  if (route.kind === "home") view = <HomeView />;
  if (route.kind === "about") view = <AboutView />;
  if (route.kind === "services") view = <ServicesView />;
  if (route.kind === "projects") view = <ProjectsView />;
  if (route.kind === "experience") view = <ExperienceView />;
  if (route.kind === "for-businesses") view = <ForBusinessesView />;
  if (route.kind === "contact") view = <ContactView />;
  if (route.kind === "project") view = <ProjectView project={route.project} />;

  return (
    <div key={path} className="contents" data-site-app="">
      {view}
    </div>
  );
}
