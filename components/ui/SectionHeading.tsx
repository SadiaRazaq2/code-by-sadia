import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  children,
  align = "left",
  tone = "dark",
  id,
  level = "h2",
}: {
  eyebrow: string;
  children: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  id?: string;
  level?: "h1" | "h2";
}) {
  const Title = level;
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <p className={`eyebrow ${tone === "light" ? "eyebrow-light" : ""}`}>{eyebrow}</p>
      <Title id={id} className="mt-3 font-display text-h2 font-bold">
        {children}
      </Title>
    </div>
  );
}
