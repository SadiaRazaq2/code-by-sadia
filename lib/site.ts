import type { Metadata } from "next";
import { headers } from "next/headers";
import { site, siteUrl } from "@/lib/brand";

export { site, siteUrl };

/**
 * Public origin for canonical URLs, the sitemap, and structured data.
 * Unset until NEXT_PUBLIC_SITE_URL or the Vercel production host is available,
 * so local requests keep the host the dev server is actually using.
 */

export async function requestOrigin() {
  if (siteUrl) return siteUrl;
  const headerList = await headers();
  const host = headerList.get("x-forwarded-host") ?? headerList.get("host");
  const proto = headerList.get("x-forwarded-proto") ?? (host?.includes("localhost") ? "http" : "https");
  return host ? `${proto}://${host}` : "http://localhost:3000";
}

type SocialImage = {
  url: string;
  alt: string;
  width?: number;
  height?: number;
};

export function pageMetadata({
  title,
  description,
  path,
  absolute = false,
  type = "website",
  image,
}: {
  title: string;
  description: string;
  path: string;
  absolute?: boolean;
  type?: "website" | "article";
  image?: SocialImage;
}): Metadata {
  const titled = absolute ? { absolute: title } : title;
  const socialImage = image ?? {
    url: "/opengraph-image",
    alt: "Sadia Razaq, Full Stack Developer",
    width: 1200,
    height: 630,
  };

  return {
    title: titled,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: titled,
      description,
      url: path,
      siteName: site.name,
      locale: site.locale,
      type,
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: titled,
      description,
      images: [socialImage.url],
    },
  };
}
