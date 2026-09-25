const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim().replace(/\/$/, "");

export const siteUrl = configured
  ? configured
  : vercel
    ? `https://${vercel.replace(/^https?:\/\//, "")}`
    : undefined;

export const site = {
  name: "Sadia Razaq",
  title: "Sadia Razaq | Full Stack Developer | Next.js, React, Laravel",
  titleTemplate: "%s | Sadia Razaq",
  description:
    "I am a full stack developer specializing in Next.js, React, Laravel, APIs, WordPress, SEO and Google Ads.",
  locale: "en_US",
} as const;
