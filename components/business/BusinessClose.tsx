import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function BusinessClose() {
  return (
    <section className="section reveal bg-forest text-cream" aria-labelledby="business-close-heading">
      <Container className="text-center">
        <p className="eyebrow eyebrow-light uppercase tracking-[0.16em]">Have a project in mind?</p>
        <h2 id="business-close-heading" className="mx-auto mt-3 max-w-3xl font-display text-h2 font-bold">
          Let&apos;s turn your business requirement into a practical <em className="italic text-gold">digital solution.</em>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
          Tell me what you&apos;re trying to build, improve or solve.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/contact?source=for-businesses" className="w-full justify-center sm:w-auto">
            Start a Project
          </Button>
          <Button href="/projects" variant="ghost" className="w-full justify-center sm:w-auto">
            View My Work
          </Button>
        </div>
      </Container>
    </section>
  );
}
