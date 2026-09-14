"use client";

import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/next";
import { track } from "@vercel/analytics";
import { SpeedInsights } from "@vercel/speed-insights/next";
import {
  cleanTrackingUrl,
  linkConversion,
  formConversion,
  type ConversionEvent,
} from "@/lib/tracking";

export function SiteAnalytics({ paths }: { paths: readonly string[] }) {
  useEffect(() => {
    const send = (event: ConversionEvent | null) => {
      if (!event || !cleanTrackingUrl(location.href, paths, location.origin)) return;
      // Event names only. No form fields, contact destinations or uploaded filenames.
      try {
        track(event);
      } catch {
        /* Analytics must not interrupt an enquiry. */
      }
    };
    const click = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      const link = event.target instanceof Element ? event.target.closest("a[href]") : null;
      if (link instanceof HTMLAnchorElement) send(linkConversion(link.href));
    };
    const success = (event: Event) => {
      if (event instanceof CustomEvent) send(formConversion(event.detail));
    };
    document.addEventListener("click", click);
    window.addEventListener("enquiry-success", success);
    return () => {
      document.removeEventListener("click", click);
      window.removeEventListener("enquiry-success", success);
    };
  }, [paths]);

  function beforeSend<T extends { url: string }>(event: T): T | null {
    const url = cleanTrackingUrl(event.url, paths, location.origin);
    return url ? { ...event, url } : null;
  }
  return (
    <>
      <Analytics beforeSend={beforeSend} debug={false} />
      <SpeedInsights beforeSend={beforeSend} debug={false} />
    </>
  );
}
