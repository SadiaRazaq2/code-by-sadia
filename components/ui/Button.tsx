import type { ReactNode } from "react";
import { Arrow } from "@/components/ui/Arrow";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "ghost";
  type?: "button" | "submit";
  className?: string;
  download?: boolean | string;
};

export function Button({ children, href, variant = "primary", type = "button", className = "", download }: ButtonProps) {
  const classes = `${variant === "ghost" ? "btn-ghost" : "btn-primary"} ${className}`.trim();

  if (download && href) {
    return (
      <a href={href} className={classes} download={download === true ? "" : download}>
        {variant === "ghost" ? children : inner(children)}
      </a>
    );
  }

  if (variant === "ghost") {
    if (href) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }
    return (
      <button type={type} className={classes}>
        {children}
      </button>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {inner(children)}
      </a>
    );
  }

  return (
    <button type={type} className={classes}>
      {inner(children)}
    </button>
  );
}

function inner(children: ReactNode) {
  return (
    <>
      <span className="btn-primary-label">{children}</span>
      <span className="btn-primary-icon">
        <Arrow />
      </span>
    </>
  );
}
