export type Employment = {
  id: string;
  dates: string;
  title: string;
  organization: string;
  place: string;
};

export const employment: Employment[] = [
  {
    id: "grand-computer",
    dates: "07/2024–05/2026",
    title: "Web Developer – Full Stack",
    organization: "Grand Computer General Trading",
    place: "UAE — Remote",
  },
  {
    id: "vicky-codes",
    dates: "10/2023–07/2024",
    title: "Web Developer – Frontend",
    organization: "Freelance / Vicky Codes",
    place: "Islamabad",
  },
  {
    id: "rider-logistics",
    dates: "10/2022–08/2023",
    title: "Web Developer – Full Stack",
    organization: "Rider Logistics Pvt Ltd",
    place: "Islamabad — Onsite",
  },
  {
    id: "mala-tourism",
    dates: "06/2022–09/2022",
    title: "SEO Virtual Assistant",
    organization: "Mala Tourism LLC",
    place: "UAE — Remote",
  },
  {
    id: "it-services",
    dates: "2018–2022",
    title: "Web Developer",
    organization: "IT Services",
    place: "Remote",
  },
];

export type ExperienceStep = {
  id: string;
  label: string;
  title: string;
  summary: string;
};

export const experience: ExperienceStep[] = [
  {
    id: "discover",
    label: "01",
    title: "Discover",
    summary:
      "I look at what the business sells, who it is for, and which pages already bring people in. I review the current site before I assume a rebuild.",
  },
  {
    id: "shape",
    label: "02",
    title: "Shape",
    summary:
      "I set a page map, a content model, and the URLs that search or ads should land on. Pages earn a place instead of being copied from a theme.",
  },
  {
    id: "build",
    label: "03",
    title: "Build",
    summary:
      "I build the interface, whether that is Next.js, WordPress, Laravel, or an existing AngularJS app, with REST integrations and tracking in place.",
  },
  {
    id: "refine",
    label: "04",
    title: "Refine",
    summary:
      "I refine speed, headings, internal links, and a handoff the team can follow. The site should still be editable after launch.",
  },
];

export const faqs = [
  {
    question: "What kinds of projects do you take?",
    answer:
      "I take marketing sites, marketplace and catalogue websites, WordPress builds, and web applications that need a proper interface. I also handle SEO, Google Ads landing pages, and performance work when the project needs them.",
  },
  {
    question: "Which technologies do you work with?",
    answer:
      "I work with Next.js, React, TypeScript, and JavaScript on the front end. Laravel and REST APIs on the server side. WordPress for publishing, and AngularJS when an existing application needs to be extended.",
  },
  {
    question: "Do you only write code, or also handle search and ads?",
    answer:
      "I write the code, and I also handle search and ads. Technical SEO, page speed, and the pages a Google Ads campaign points to are part of the same brief when that is what the site needs.",
  },
  {
    question: "Can you work with an existing WordPress or AngularJS site?",
    answer:
      "Yes. I can give you a safer editor experience, a cleaner content model, a performance pass, or continued work on an existing AngularJS application. A rebuild is only the answer when the current setup is getting in the way.",
  },
  {
    question: "What do you need to start?",
    answer:
      "I need the offer in plain language, a link to the current site if there is one, and who will update it after launch. Access to analytics, Search Console, or the ads account helps when those are in scope.",
  },
];
