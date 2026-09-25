import { PageTitle } from "@/components/layout/PageTitle";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function AboutView() {
  return (
    <>
      <PageTitle title="About" />
      <About />
      <Skills />
      <section className="pb-16 text-center">
        <Container>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            If the fit is <em className="italic text-gold-deep">obvious</em>
          </h2>
          <div className="mt-6 flex justify-center">
            <Button href="/contact">Start a project</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
