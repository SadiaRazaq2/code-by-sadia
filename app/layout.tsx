import type { Metadata, Viewport } from "next";
import { Outfit, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SiteProvider } from "@/components/site/SiteProvider";
import { contact } from "@/data/contact";
import { site, siteUrl } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#314838",
  colorScheme: "light",
};

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: {
    default: site.title,
    template: site.titleTemplate,
  },
  description: site.description,
  applicationName: site.name,
  authors: [siteUrl ? { name: contact.name, url: siteUrl } : { name: contact.name }],
  creator: contact.name,
  publisher: contact.name,
  category: "portfolio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: site.locale,
    title: {
      default: site.title,
      template: site.titleTemplate,
    },
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: site.title,
      template: site.titleTemplate,
    },
    description: site.description,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: site.name,
      ...(siteUrl ? { url: siteUrl } : {}),
      description: site.description,
    },
    {
      "@type": "Person",
      name: contact.name,
      jobTitle: contact.role,
      description: site.description,
      ...(siteUrl ? { url: siteUrl, image: `${siteUrl}/profile.png` } : {}),
      email: contact.email,
      telephone: contact.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Islamabad",
        addressCountry: "Pakistan",
      },
      sameAs: [contact.linkedin],
      knowsAbout: [
        "Next.js",
        "React",
        "TypeScript",
        "JavaScript",
        "Laravel",
        "REST APIs",
        "AngularJS",
        "WordPress",
        "SEO",
        "Google Ads",
        "Website optimization",
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${sourceSans.variable} bg-cream font-sans text-ink antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:rounded-lg focus:bg-gold focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        <SiteProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </SiteProvider>
      </body>
    </html>
  );
}
