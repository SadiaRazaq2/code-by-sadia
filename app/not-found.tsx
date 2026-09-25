import type { Metadata } from "next";
import { NotFoundView } from "@/components/views/NotFoundView";

export const metadata: Metadata = {
  title: "Page not found",
  description: "This page is not on my portfolio.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Page not found",
    description: "This page is not on my portfolio.",
  },
  twitter: {
    title: "Page not found",
    description: "This page is not on my portfolio.",
  },
};

export default function NotFound() {
  return <NotFoundView />;
}
