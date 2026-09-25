import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Portrait } from "@/components/ui/Portrait";
import { resumes } from "@/data/contact";

export function Hero() {
  return (
    <section className="pb-4 pt-2 sm:pt-4" aria-labelledby="hero-heading">
      <Container className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-6 xl:gap-10">
        <div className="hero-copy min-w-0">
          <h1
            id="hero-heading"
            className="font-display text-[clamp(1.85rem,8vw,4.75rem)] font-bold leading-[0.98] tracking-[-0.04em]"
          >
            Sadia Razaq
          </h1>
          <p className="mt-3 font-display text-[clamp(1.15rem,4.4vw,2.35rem)] font-semibold leading-tight tracking-tight text-forest">
            Full Stack Developer
          </p>
          <p className="hero-enter mt-3 text-sm font-semibold tracking-wide text-muted sm:text-base">
            <span className="text-ink">Web development</span>
            <span className="mx-2 text-gold-deep" aria-hidden="true">
              ·
            </span>
            SEO and Google Ads
          </p>
          <p className="hero-enter hero-enter-late mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            I build responsive web applications, business websites and digital solutions using modern web technologies, while helping businesses improve their online visibility through SEO and Google Ads.
          </p>
          <div className="hero-enter hero-enter-late mt-7 flex flex-col gap-3 min-[520px]:flex-row min-[520px]:flex-wrap">
            <Button href="/projects" className="w-full justify-center min-[520px]:w-auto">
              View My Work
            </Button>
            {resumes[0] ? (
              <Button
                href={resumes[0].href}
                variant="ghost"
                download={resumes[0].fileName}
                className="w-full justify-center min-[520px]:w-auto"
              >
                Download Resume
              </Button>
            ) : null}
          </div>
        </div>
        <div className="hero-enter">
          <Portrait />
        </div>
      </Container>
    </section>
  );
}
