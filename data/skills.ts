export type SkillGroup = {
  id: string;
  title: string;
  skills: string[];
  layout: "feature" | "standard" | "bridge" | "wide";
  emphasis?: boolean;
};

export type Service = {
  id: string;
  title: string;
  summary: string;
};

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    layout: "feature",
    emphasis: true,
    skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Material UI", "Ant Design"],
  },
  {
    id: "backend",
    title: "Backend",
    layout: "feature",
    emphasis: true,
    skills: ["Laravel", "Laravel APIs", "REST APIs", "Node.js"],
  },
  {
    id: "cms",
    title: "CMS & Websites",
    layout: "standard",
    skills: ["WordPress", "Responsive Websites", "E-commerce Websites", "Admin Panels", "Website Maintenance"],
  },
  {
    id: "seo",
    title: "SEO & Digital",
    layout: "standard",
    skills: ["Technical SEO", "On-page SEO", "Google Search Console", "Google Business Profile", "Semrush", "Website Optimization"],
  },
  {
    id: "ads",
    title: "Paid Advertising",
    layout: "bridge",
    skills: ["Google Ads", "Search Campaigns", "Search Term Analysis", "Conversion Tracking", "Landing Page Alignment"],
  },
  {
    id: "infrastructure",
    title: "Development & Infrastructure",
    layout: "wide",
    skills: ["Git", "GitHub", "Postman", "cPanel", "SiteGround", "Hostinger", "DNS", "Website Migration", "Deployment", "VS Code", "Cursor"],
  },
];

export const services: Service[] = [
  {
    id: "full-stack",
    title: "Full-stack development",
    summary:
      "I build websites and applications with Next.js, React, TypeScript, Laravel, and REST APIs. The interface and the system behind it stay in one build.",
  },
  {
    id: "seo",
    title: "Technical SEO",
    summary:
      "I work on structure, indexation, internal links, and templates so the pages that matter are the ones search engines can read.",
  },
  {
    id: "ads",
    title: "Google Ads",
    summary:
      "I build landing pages and site paths that match the query, the ad, and the next step a visitor is meant to take.",
  },
  {
    id: "wordpress",
    title: "WordPress",
    summary:
      "I set up WordPress so a team can update it, with a front end that still feels considered and stays reasonably fast.",
  },
  {
    id: "optimization",
    title: "Website optimization",
    summary:
      "I work on page weight, clarity, and the route from a visit to an enquiry. Fewer obstacles between the page and the person.",
  },
];
