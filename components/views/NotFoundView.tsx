import { PageTitle } from "@/components/layout/PageTitle";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function NotFoundView() {
  return (
    <>
      <PageTitle title="Page not found" />
      <Container className="py-16 text-center">
        <p className="font-display font-semibold text-gold-deep">404</p>
        <p className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">That page is not here.</p>
        <p className="mx-auto mt-4 max-w-md text-base text-muted sm:text-lg">
          The link may be old. My work and contact details are still on this site.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/">Back home</Button>
        </div>
      </Container>
    </>
  );
}
