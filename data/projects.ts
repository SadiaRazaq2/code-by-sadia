export const serviceTypes = {
  "web-development": "Web development",
  seo: "SEO",
  "google-ads": "Google Ads",
  wordpress: "WordPress",
} as const;

export type ServiceType = keyof typeof serviceTypes;

export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const projectCategories = [
  "Marketplace",
  "Storefront",
  "Product site",
  "Catalogue",
  "Admin panel",
  "E-commerce system",
  "SEO & Website Optimization",
  "Google Ads",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  /** Extra labels when one case study covers more than one practice. */
  labels?: ProjectCategory[];
  /** Website builds stay in the main grid. Search and ads case studies use their own area. */
  area?: "websites" | "search";
  shortDescription: string;
  description: string;
  /** Set only when the constraint is actually known. */
  challenge?: string;
  /** Set only when the approach is actually known. */
  solution?: string;
  role?: string;
  /** Verified technologies for this client project only. Do not list Next.js unless this site was built with it. */
  technologies?: string[];
  features: string[];
  images: ProjectImage[];
  liveUrl?: string;
  githubUrl?: string;
  duration?: string;
  slug: string;
  featured: boolean;
  serviceType: ServiceType;
};

export const projects: Project[] = [
  {
    id: "dubai-boating",
    slug: "dubai-boating",
    title: "Dubai Boating",
    category: "Marketplace",
    serviceType: "web-development",
    featured: true,
    shortDescription:
      "Marketplace website with search for listings, category navigation, and paths for captains and partners.",
    description:
      "The public site is a marketplace interface. The homepage is built around search for boats and listings. Navigation then opens buying and selling, marinas, fishing, water sports, and scuba, with separate routes for captains, partnerships, and account actions.",
    features: [
      "A search-led homepage for listings",
      "Category navigation across boating services",
      "Clear paths for captains, partners, and account actions",
    ],
    images: [
      {
        src: "/projects/dubai-boating.jpeg",
        alt: "Homepage of the Dubai Boating marketplace website",
        width: 1280,
        height: 800,
      },
      {
        src: "/projects/dubai-boating-full.png",
        alt: "Full homepage of the Dubai Boating marketplace website",
        width: 1920,
        height: 4091,
      },
    ],
  },
  {
    id: "i-love-bubble-tea",
    slug: "i-love-bubble-tea",
    title: "I Love Bubble Tea",
    category: "Storefront",
    serviceType: "web-development",
    featured: true,
    shortDescription:
      "Wholesale website with a shop, promotions, and a consultation path beside the product story.",
    description:
      "The public site is a wholesale storefront. The homepage states the offer and gives two next steps: shop the range, or request a consultation. Promotions, about, and contact sit in the same navigation.",
    features: [
      "A storefront homepage with a single clear offer",
      "Shop and consultation calls to action",
      "Navigation for promotions, about, and contact",
    ],
    images: [
      {
        src: "/projects/i-love-bubble-tea.jpeg",
        alt: "Homepage of the I Love Bubble Tea wholesale website",
        width: 1280,
        height: 800,
      },
      {
        src: "/projects/i-love-bubble-tea-full.png",
        alt: "Full homepage of the I Love Bubble Tea wholesale website",
        width: 1920,
        height: 4943,
      },
    ],
  },
  {
    id: "roballi-espresso",
    slug: "roballi-espresso",
    title: "Roballi Espresso",
    category: "Product site",
    serviceType: "web-development",
    featured: true,
    shortDescription: "Product website for espresso machines, with the shop, kits, and promotions available from the header.",
    description:
      "The public site is a product website. The first screen tells the espresso-machine story and points into the shop. The header keeps the shop, kits, coffee, and promotions within reach.",
    features: ["A product-led first screen", "Shop, kit, and promotion paths", "A header that keeps the catalogue within reach"],
    images: [
      {
        src: "/projects/roballi-espresso.jpeg",
        alt: "Homepage of the Roballi espresso machines website",
        width: 1280,
        height: 800,
      },
    ],
  },
  {
    id: "tapioca-supplier",
    slug: "tapioca-supplier",
    title: "Tapioca Supplier",
    category: "Catalogue",
    serviceType: "web-development",
    featured: true,
    shortDescription:
      "Wholesale catalogue website for ingredients and machines, with offers and a partner path.",
    description:
      "The public site is a wholesale catalogue. The homepage pairs the supply offer with catalogue and partnership actions, then explains customization, distribution, the ingredient line, machines and equipment, and training.",
    features: [
      "Catalogue and equipment navigation",
      "Wholesale and partner calls to action",
      "A homepage that explains the supply offer in sections",
    ],
    images: [
      {
        src: "/projects/tapioca-supplier.jpeg",
        alt: "Homepage of the Tapioca Supplier wholesale website",
        width: 1280,
        height: 800,
      },
      {
        src: "/projects/tapioca-supplier-full.png",
        alt: "Full homepage of the Tapioca Supplier wholesale website",
        width: 1920,
        height: 4184,
      },
    ],
  },
  {
    id: "genius-drive",
    slug: "genius-drive",
    title: "Genius Drive",
    category: "SEO & Website Optimization",
    labels: ["SEO & Website Optimization", "Google Ads"],
    serviceType: "seo",
    featured: true,
    shortDescription:
      "SEO, website optimization, and Google Ads for a safe-driver service site, including Search Console, Business Profile, and WordPress updates.",
    description:
      "My work on Genius Drive covers the public website and the search and ads around it. That includes website SEO, technical SEO, keyword analysis, Google Search Console monitoring, website optimization, and Google Business Profile management. My Google Ads work includes search term analysis, conversion tracking, and landing page alignment. WordPress updates and website maintenance are part of the same engagement.",
    features: [
      "Website SEO",
      "Google Search Console monitoring",
      "Keyword analysis",
      "Technical SEO",
      "Website optimization",
      "Google Business Profile management",
      "Google Ads",
      "Search term analysis",
      "Conversion tracking",
      "Landing page alignment",
      "WordPress updates",
      "Website maintenance",
    ],
    images: [
      {
        src: "/projects/genius-drive.jpeg",
        alt: "Homepage of the Genius Drive website",
        width: 1280,
        height: 800,
      },
      {
        src: "/projects/genius-drive-full.png",
        alt: "Full homepage of the Genius Drive website",
        width: 1920,
        height: 9874,
      },
    ],
  },
  {
    id: "fun-beach-water-sports",
    slug: "fun-beach-water-sports",
    title: "Fun Beach Water Sports",
    category: "SEO & Website Optimization",
    serviceType: "seo",
    featured: true,
    shortDescription: "SEO and website optimization for a water-sports website.",
    description:
      "My work is SEO and website optimization for the Fun Beach Water Sports website. The public site presents rides, about, contact, and a blog.",
    features: ["SEO", "Website optimization"],
    images: [
      {
        src: "/projects/fun-beach.jpeg",
        alt: "Homepage of the Fun Beach Water Sports website",
        width: 1280,
        height: 800,
      },
      {
        src: "/projects/fun-beach-full.png",
        alt: "Full homepage of the Fun Beach Water Sports website",
        width: 1920,
        height: 5530,
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getWebsiteProjects() {
  return projects.filter((project) => project.area !== "search");
}

export function getFeaturedProjects() {
  return getWebsiteProjects().filter((project) => project.featured);
}

export function getSearchProjects() {
  return projects.filter((project) => project.area === "search");
}

export function getRelatedProjects(slug: string, limit = 3) {
  const current = getProject(slug);
  if (!current) return [];
  const area = current.area ?? "websites";
  return projects
    .filter((project) => project.slug !== slug && (project.area ?? "websites") === area)
    .slice(0, limit);
}
