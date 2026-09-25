import { ImageResponse } from "next/og";

export const alt = "Sadia Razaq, Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#fffdf8",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, fontWeight: 700, color: "#8A5E09", letterSpacing: "0.08em" }}>
          FULL STACK DEVELOPER
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 18,
            fontSize: 84,
            fontWeight: 700,
            color: "#1a1a1a",
            lineHeight: 1,
            letterSpacing: "-0.04em",
          }}
        >
          Sadia Razaq
        </div>
        <div style={{ display: "flex", marginTop: 28, maxWidth: 860, fontSize: 34, lineHeight: 1.35, color: "#314838" }}>
          Next.js, React, Laravel, APIs, WordPress, SEO and Google Ads.
        </div>
      </div>
    ),
    size,
  );
}
