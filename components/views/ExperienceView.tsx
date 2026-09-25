import { PageTitle } from "@/components/layout/PageTitle";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { Process } from "@/components/sections/Process";
import { Skills } from "@/components/sections/Skills";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function ExperienceView() {
  return (
    <>
      <PageTitle title="Experience" />
      <ExperienceTimeline />
      <Process />
      <Skills />
      <section className="pb-16 text-center">
        <Container>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Bring the <em className="italic text-gold-deep">current site</em>
          </h2>
          <div className="mt-6 flex justify-center">
            <Button href="/contact">Start a project</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
