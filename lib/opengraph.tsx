import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { getSeoPage } from "@/content/seo-pages";
import { site } from "@/content/site";

async function assets() {
  const [font, logo, css] = await Promise.all([
    readFile(path.join(process.cwd(), "assets/fonts/Montserrat-Bold.ttf")),
    readFile(path.join(process.cwd(), "public", site.logos.shortWhite)),
    readFile(path.join(process.cwd(), "app/globals.css"), "utf8"),
  ]);
  const token = (name: string) => {
    const value = css.match(new RegExp(`--${name}:\\s*([^;]+);`))?.[1];
    if (!value) throw new Error(`Missing brand token ${name}`);
    return value;
  };
  return {
    font,
    logo: `data:image/svg+xml;base64,${logo.toString("base64")}`,
    navy: token("color-surface-inverse"),
    white: token("color-ink-inverse"),
    accent: token("color-accent"),
    radius: token("radius-2xl"),
  };
}

export async function generateShareImage(route: string) {
  const page = getSeoPage(route);
  const brand = await assets();
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: brand.navy,
        color: brand.white,
        fontFamily: "Montserrat",
        fontWeight: 700,
        padding: 64,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: -110,
          top: -70,
          width: 350,
          height: 770,
          borderRadius: brand.radius,
          background: brand.accent,
          transform: "skewX(-15deg)",
          opacity: 0.55,
        }}
      />
      <div
        style={{
          display: "flex",
          fontSize: page.title.length > 70 ? 60 : 68,
          lineHeight: 1.12,
          maxWidth: 970,
          letterSpacing: "-0.02em",
        }}
      >
        {page.title}
      </div>
      {/* ImageResponse renders pixels, not a browser image element. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={brand.logo} width={116} height={116} alt={site.name} />
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [{ name: "Montserrat", data: brand.font, weight: 700, style: "normal" }],
    },
  );
}
