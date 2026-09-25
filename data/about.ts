export type CapabilityGroup = {
  title: string;
  summary: string;
  items: string[];
};

export type Highlight = {
  title: string;
  text: string;
};

export const capabilityGroups: CapabilityGroup[] = [
  {
    title: "Development",
    summary: "I build full-stack websites and applications, from the interface to the system behind them.",
    items: [
      "Full-stack web development",
      "React and Next.js development",
      "Laravel APIs",
      "REST APIs",
      "WordPress websites",
      "Responsive UI",
      "E-commerce websites",
      "Admin panels",
    ],
  },
  {
    title: "Delivery",
    summary: "I handle website maintenance, hosting, and deployment after a site goes live.",
    items: ["Website maintenance", "Hosting and deployment"],
  },
  {
    title: "Visibility",
    summary: "I work on SEO, Search Console, Business Profile, Semrush, and Google Ads.",
    items: ["SEO", "Google Search Console", "Google Business Profile", "Semrush", "Google Ads"],
  },
  {
    title: "Coordination",
    summary: "I handle client communication, requirements, and project coordination.",
    items: ["Client communication", "Requirements gathering", "Project coordination"],
  },
];

export const highlights: Highlight[] = [
  {
    title: "The site and the system behind it",
    text: "I cover React and Next.js, Laravel and REST APIs, WordPress, responsive UI, e-commerce websites, and admin panels.",
  },
  {
    title: "After the site goes live",
    text: "I stay with website maintenance, hosting, and deployment, so the handoff is a site that can keep running.",
  },
  {
    title: "Search, ads, and the brief",
    text: "I include Google Search Console, Google Business Profile, and Semrush, with Google Ads when paid traffic is part of the work. I also handle requirements, client communication, and project coordination on the same project.",
  },
];
