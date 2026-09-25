import { Ticker } from "@/components/sections/Ticker";

type Crumb = { href: string; label: string };

export function PageTitle({ title, trail = [] }: { title: string; trail?: Crumb[] }) {
  const crumbs = [{ href: "/", label: "Home" }, ...trail, { label: title }];

  return (
    <>
      <header className="bg-cream px-4 pb-6 pt-8 text-center sm:pb-8 sm:pt-12">
        <h1 className="font-display text-h1 font-bold">{title}</h1>
        <p className="mt-3 text-sm text-muted">
          {crumbs.map((crumb, index) => (
            <span key={`${crumb.label}-${index}`}>
              {index > 0 ? (
                <span className="mx-1.5 text-gold-deep" aria-hidden="true">
                  /
                </span>
              ) : null}
              {crumb.href ? (
                <a href={crumb.href} className="hover:text-ink">
                  {crumb.label}
                </a>
              ) : (
                crumb.label
              )}
            </span>
          ))}
        </p>
      </header>
      <Ticker decorative />
    </>
  );
}
