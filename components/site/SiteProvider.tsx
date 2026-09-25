"use client";

import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { flushSync } from "react-dom";
import { documentTitle, normalizePath } from "@/lib/routes";

type SiteContextValue = {
  path: string;
  hash: string;
};

const SiteContext = createContext<SiteContextValue | null>(null);

export function useSite() {
  const value = useContext(SiteContext);
  if (!value) throw new Error("useSite must be used within SiteProvider");
  return value;
}

function scrollToHash(hash: string) {
  const id = hash.replace(/^#/, "");
  if (!id) return false;
  const target = document.getElementById(id);
  if (!target) return false;
  target.scrollIntoView();
  return true;
}

export function SiteProvider({ children }: { children: ReactNode }) {
  const initialPath = normalizePath(usePathname() || "/");
  const [path, setPath] = useState(initialPath);
  const [hash, setHash] = useState("");
  const pathRef = useRef(path);
  const positions = useRef(new Map<string, number>());
  pathRef.current = path;

  function reveal(nextPath: string, nextHash: string, top: number | null) {
    const update = () => {
      flushSync(() => {
        setPath(nextPath);
        setHash(nextHash);
      });
      if (nextHash && scrollToHash(nextHash)) return;
      if (top !== null) window.scrollTo(0, top);
    };

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || typeof document.startViewTransition !== "function") {
      update();
      return;
    }
    document.startViewTransition(update);
  }

  function navigate(href: string) {
    const url = new URL(href, window.location.href);
    if (url.origin !== window.location.origin) {
      window.location.assign(href);
      return;
    }

    const nextPath = normalizePath(url.pathname);
    const nextHash = url.hash;
    const currentHash = window.location.hash;

    if (nextPath === pathRef.current && nextHash === currentHash) {
      if (!nextHash || !scrollToHash(nextHash)) window.scrollTo(0, 0);
      return;
    }

    positions.current.set(`${pathRef.current}${currentHash}`, window.scrollY);
    window.history.pushState(null, "", `${nextPath}${url.search}${nextHash}`);
    reveal(nextPath, nextHash, nextHash ? null : 0);
  }

  useEffect(() => {
    document.title = documentTitle(path);
  }, [path]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = (event.target as Element | null)?.closest("a");
      if (!anchor) return;
      if (anchor.target && anchor.target !== "_self") return;
      if (anchor.hasAttribute("download")) return;
      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("#")) return;

      let url: URL;
      try {
        url = new URL(href, window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;
      if (!document.querySelector("[data-site-app]")) return;

      event.preventDefault();
      event.stopPropagation();
      navigate(`${url.pathname}${url.search}${url.hash}`);
    };

    const onPop = () => {
      const nextPath = normalizePath(window.location.pathname);
      const nextHash = window.location.hash;
      const saved = positions.current.get(`${nextPath}${nextHash}`);
      reveal(nextPath, nextHash, nextHash ? null : (saved ?? 0));
    };

    document.addEventListener("click", onClick, true);
    window.addEventListener("popstate", onPop);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("popstate", onPop);
    };
  }, []);

  useEffect(() => {
    const currentHash = window.location.hash;
    if (!currentHash) return;
    setHash(currentHash);
    scrollToHash(currentHash);
  }, []);

  return <SiteContext.Provider value={{ path, hash }}>{children}</SiteContext.Provider>;
}
