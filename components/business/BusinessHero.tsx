import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const nodes = [
  { label: "Website", x: 78, y: 118 },
  { label: "Application", x: 250, y: 72 },
  { label: "SEO", x: 250, y: 214 },
  { label: "Ads", x: 392, y: 144 },
];

export function BusinessHero() {
  return (
    <section className="bg-cream pb-12 pt-6 sm:pb-16 sm:pt-10" aria-labelledby="business-hero-heading">
      <Container className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-12">
        <div className="min-w-0">
          <p className="eyebrow uppercase tracking-[0.16em]">For businesses</p>
          <h1 id="business-hero-heading" className="mt-4 font-display text-display font-bold">
            Build. Improve. <em className="italic text-gold-deep">Grow.</em>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            I help businesses turn digital requirements into practical web solutions — from modern websites and web applications to SEO, website optimization and Google Ads.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="/contact?source=for-businesses" className="w-full justify-center sm:w-auto">
              Start a Project
            </Button>
            <Button href="/projects" variant="ghost" className="w-full justify-center sm:w-auto">
              View My Work
            </Button>
          </div>
        </div>
        <div className="hero-enter min-w-0" aria-hidden="true">
          <div className="rounded-[1.75rem] bg-forest p-4 text-cream shadow-float sm:p-6">
            <svg viewBox="0 0 470 290" className="h-auto w-full">
              <path className="flow-dash" d="M142 118 L204 72 M142 118 L204 214 M314 72 L340 144 M314 214 L340 144" fill="none" stroke="#F0B429" strokeWidth="2" />
              {nodes.map((node) => (
                <g key={node.label}>
                  <rect x={node.x - 52} y={node.y - 22} width="116" height="44" rx="22" fill="#1e2e26" stroke="#F0B429" strokeWidth="1.5" />
                  <text x={node.x + 6} y={node.y + 5} textAnchor="middle" fill="#fffdf8" fontSize="14" fontFamily="var(--font-display), Segoe UI, sans-serif">
                    {node.label}
                  </text>
                </g>
              ))}
            </svg>
            <p className="px-2 pb-2 text-center font-display text-sm font-semibold text-gold sm:text-base">
              Website, application, search, and ads in one practice
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
