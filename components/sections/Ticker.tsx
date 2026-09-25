const items = [
  "Full-stack Development",
  "Next.js",
  "React",
  "TypeScript",
  "Laravel",
  "REST APIs",
  "WordPress",
  "Technical SEO",
  "Google Ads",
  "Website Optimization",
];

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item} className="flex items-center gap-5 px-5 font-display text-base font-semibold tracking-tight text-ink sm:gap-7 sm:px-7 sm:text-lg">
          <span>{item}</span>
          <span aria-hidden="true">*</span>
        </li>
      ))}
    </ul>
  );
}

export function Ticker({ decorative = false }: { decorative?: boolean }) {
  return (
    <section
      className="ticker relative overflow-hidden bg-forest py-2 sm:py-2.5"
      aria-label={decorative ? undefined : "Services"}
      aria-hidden={decorative || undefined}
    >
      <div className="ticker-band w-[114%] -translate-x-[7%] rotate-[-1.4deg] bg-gold py-3.5 sm:py-4">
        <div className="ticker-track flex w-max">
          <Row />
          <Row hidden />
        </div>
      </div>
    </section>
  );
}
