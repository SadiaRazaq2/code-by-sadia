"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { useSite } from "@/components/site/SiteProvider";
import { navigation } from "@/data/navigation";

function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const { path, hash } = useSite();
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [path, hash]);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    navRef.current?.querySelector("a")?.focus();

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-cream px-3 py-3 sm:px-5">
      <div
        className={`mx-auto flex w-full max-w-6xl flex-wrap items-center bg-forest text-cream shadow-header ${
          open ? "rounded-[1.75rem]" : "rounded-full"
        }`}
      >
        <div className="flex h-14 w-full min-w-0 items-center gap-2 px-2.5 sm:h-[4.25rem] sm:gap-3 sm:px-4 lg:w-auto lg:flex-1">
          <a href="/" className="mr-auto inline-flex shrink-0 items-center" aria-label="Sadia Razaq, home">
            <Image
              src="/logo.png"
              alt=""
              width={866}
              height={288}
              priority
              className="h-9 w-[6.75rem] object-contain object-left min-[400px]:h-11 min-[400px]:w-[8.25rem] sm:h-14 sm:w-[10.5rem]"
            />
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span
              className={`absolute h-0.5 w-5 bg-cream transition-transform duration-ui ${open ? "translate-y-0 rotate-45" : "-translate-y-1.5"}`}
            />
            <span className={`absolute h-0.5 w-5 bg-cream transition-opacity duration-ui ${open ? "opacity-0" : ""}`} />
            <span
              className={`absolute h-0.5 w-5 bg-cream transition-transform duration-ui ${open ? "translate-y-0 -rotate-45" : "translate-y-1.5"}`}
            />
          </button>
        </div>

        <nav
          ref={navRef}
          id={menuId}
          aria-label="Primary"
          className={`${open ? "flex" : "hidden"} w-full flex-col gap-1 border-t border-white/15 px-3 pb-4 pt-2 lg:flex lg:w-auto lg:flex-row lg:items-center lg:gap-1 lg:border-0 lg:px-2 lg:py-2`}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center">
            {navigation.map((link) => {
              const current = isCurrent(path, link.href);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={current ? "page" : undefined}
                    className={`flex min-h-11 items-center rounded-full px-3 font-display text-[0.95rem] font-semibold transition-colors duration-ui lg:min-h-0 lg:px-2.5 lg:py-2 xl:px-3 ${
                      current ? "bg-white/10 text-gold" : "text-cream/90 hover:bg-white/10 hover:text-gold"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <a
            href="/contact"
            className="mt-1 inline-flex min-h-11 items-center justify-center rounded-full bg-cream px-5 font-display font-semibold text-forest-deep hover:bg-gold lg:ml-2 lg:mt-0"
          >
            Let&apos;s Talk
          </a>
        </nav>
      </div>
    </header>
  );
}
