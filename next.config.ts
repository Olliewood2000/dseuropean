import type { NextConfig } from "next";

const development = process.env.NODE_ENV === "development";
const preview = process.env.VERCEL_ENV === "preview";
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${development ? " 'unsafe-eval'" : ""}${preview ? " https://vercel.live" : ""}`,
  `style-src 'self' 'unsafe-inline'${preview ? " https://vercel.live" : ""}`,
  `img-src 'self' data: blob: https://maps.googleapis.com https://maps.gstatic.com${preview ? " https://vercel.live https://vercel.com" : ""}`,
  `font-src 'self'${preview ? " https://vercel.live https://assets.vercel.com" : ""}`,
  `connect-src 'self'${development ? " ws: wss:" : ""}${preview ? " https://vercel.live wss://ws-us3.pusher.com" : ""}`,
  `frame-src ${preview ? "https://vercel.live" : "'none'"}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join("; ");

const nextConfig: NextConfig = {
  trailingSlash: false,
  images: { formats: ["image/avif", "image/webp"] },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Content-Security-Policy", value: csp },
          ...(process.env.VERCEL_ENV !== "production"
            ? [{ key: "X-Robots-Tag", value: "noindex, nofollow" }]
            : []),
        ],
      },
    ];
  },
};

export default nextConfig;
