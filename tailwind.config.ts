import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#314838",
          soft: "#3c5646",
          deep: "#1e2e26",
          card: "#3a5244",
        },
        gold: {
          DEFAULT: "#f0b429",
          deep: "#8a5e09",
        },
        ink: "#1a1a1a",
        muted: "#4a524c",
        paper: "#f6f3ec",
        cream: "#fffdf8",
        line: "#e4ddd0",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Segoe UI", "sans-serif"],
        display: ["var(--font-display)", "Segoe UI", "sans-serif"],
      },
      fontSize: {
        display: ["clamp(2rem, 8vw, 4.25rem)", { lineHeight: "1.02", letterSpacing: "-0.045em" }],
        h1: ["clamp(1.85rem, 6.2vw, 3.5rem)", { lineHeight: "1.08", letterSpacing: "-0.035em" }],
        h2: ["clamp(1.55rem, 4.2vw, 3rem)", { lineHeight: "1.12", letterSpacing: "-0.03em" }],
        h3: ["clamp(1.15rem, 2.2vw, 1.35rem)", { lineHeight: "1.25", letterSpacing: "-0.02em" }],
      },
      spacing: {
        section: "6rem",
        "section-sm": "4rem",
      },
      maxWidth: {
        container: "72rem",
      },
      borderRadius: {
        card: "1.5rem",
        image: "1.125rem",
        control: "0.75rem",
      },
      boxShadow: {
        card: "0 16px 40px rgba(30, 46, 38, 0.08)",
        float: "0 22px 48px rgba(30, 46, 38, 0.16)",
        header: "0 10px 28px rgba(30, 46, 38, 0.12)",
      },
      transitionDuration: {
        ui: "180ms",
      },
    },
  },
  plugins: [],
};

export default config;
