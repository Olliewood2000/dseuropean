"use client";

import { useSyncExternalStore } from "react";

function subscribe(listener: () => void) {
  window.addEventListener("scroll", listener, { passive: true });
  return () => window.removeEventListener("scroll", listener);
}

export function useScrolledPast(threshold: number) {
  return useSyncExternalStore(
    subscribe,
    () => window.scrollY > threshold,
    () => false,
  );
}
