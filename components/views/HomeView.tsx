import { About } from "@/components/sections/About";
import { ContactPanel } from "@/components/sections/ContactPanel";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { ProjectEnquiry } from "@/components/sections/ProjectEnquiry";
import { ProjectGrid } from "@/components/sections/ProjectGrid";
import { SearchWork } from "@/components/sections/SearchWork";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";
import { Ticker } from "@/components/sections/Ticker";
import { faqs } from "@/data/experience";
import { siteUrl } from "@/lib/brand";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
  url: siteUrl,
};

export function HomeView() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Hero />
      <Ticker />
      <Services />
      <About />
      <Skills />
      <ProjectGrid showAllLink />
      <SearchWork />
      <ProjectEnquiry />
      <ExperienceTimeline />
      <Process />
      <Faq />
      <ContactPanel />
    </>
  );
}
