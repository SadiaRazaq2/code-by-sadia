import Image from "next/image";

export function Portrait({ variant = "hero" }: { variant?: "hero" | "about" }) {
  return (
    <div className={`portrait-stage ${variant === "about" ? "portrait-about" : ""}`}>
      <div className="portrait-disc" aria-hidden="true" />
      <div className="portrait-photo">
        <Image
          src="/profile.png"
          alt="Portrait of Sadia Razaq, full stack developer"
          fill
          priority={variant === "hero"}
          sizes="(min-width: 1024px) 420px, 80vw"
          className="object-contain object-bottom"
        />
      </div>
      {variant === "hero" ? (
        <>
          <div className="portrait-badge">
            <span>
              <strong className="font-display text-[0.95rem] font-semibold leading-none text-cream">
                Full
                <br />
                Stack
              </strong>
              <span className="mt-1 block text-[0.58rem] uppercase tracking-wide text-gold">Developer</span>
            </span>
          </div>
          <span className="portrait-pointer" aria-hidden="true" />
          <span className="chip bottom-[18%] left-0 bg-gold text-ink">SEO &amp; Ads</span>
        </>
      ) : (
        <>
          <span className="chip left-0 top-10 bg-forest text-cream">Full Stack</span>
          <span className="chip bottom-12 right-1 bg-gold text-ink">SEO &amp; Ads</span>
        </>
      )}
    </div>
  );
}
