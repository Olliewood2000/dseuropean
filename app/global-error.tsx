"use client";
import { site } from "@/content/site";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en-GB">
      <head>
        <title>Something went wrong | DS European</title>
        <meta name="robots" content="noindex" />
      </head>
      <body>
        <main>
          <h1>Something went wrong</h1>
          <p>Sorry about that. Try again in a moment, or ring us on {site.phone}.</p>
          <button type="button" onClick={reset}>
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
