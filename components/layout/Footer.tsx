import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { navigation } from "@/data/navigation";
import { services } from "@/data/skills";

export function Footer() {
  return (
    <footer>
      <Container>
        <div className="flex flex-col items-start justify-between gap-5 py-8 sm:flex-row sm:items-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
            Let’s <em className="italic text-gold-deep">start</em> there
          </h2>
          <Button href="/contact">Start a project</Button>
        </div>
        <div className="grid gap-8 border-t border-line py-8 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_1fr_1fr]">
          <div>
            <a href="/" className="mb-3 flex items-center gap-2.5 text-ink">
              <span className="grid h-11 w-11 place-items-center rounded-[14px] bg-gold font-display text-sm font-bold text-forest-deep">
                SR
              </span>
              <span className="font-display text-xl font-semibold">Sadia</span>
            </a>
            <p className="max-w-sm text-muted">
              I build full-stack websites, with SEO, Google Ads, WordPress, and website optimization in the same practice.
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-display font-semibold text-gold-deep">Navigation</h3>
            <ul className="grid gap-1.5 text-muted">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-ink">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-display font-semibold text-gold-deep">Practice</h3>
            <ul className="grid gap-1.5 text-muted">
              {services.map((service) => (
                <li key={service.id}>
                  <a href={`/#${service.id}`} className="hover:text-ink">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-display font-semibold text-gold-deep">Currently</h3>
            <p className="text-muted">
              I am taking on website, application, search, and ads projects where the site itself is part of the work.
            </p>
          </div>
        </div>
      </Container>
      <div className="bg-forest py-4 text-cream/80">
        <Container className="flex flex-wrap justify-between gap-3 text-sm">
          <span>Copyright © {new Date().getFullYear()} Sadia Razaq.</span>
          <span>Full Stack Developer</span>
        </Container>
      </div>
    </footer>
  );
}
