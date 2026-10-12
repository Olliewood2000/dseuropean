"use client";

import { useEffect, useRef, type CSSProperties } from "react";

const COUNT_DURATION = 1400;
const STAGGER = 120;

export interface CountUpProps {
  value: string;
  index?: number;
}

/** Only a leading whole number followed by an optional word unit counts. "24/7" renders as written. */
function parse(value: string) {
  const match = /^(\d+)(?:\s+(.+))?$/.exec(value);
  if (!match?.[1]) return null;
  return { digits: match[1], unit: match[2] };
}

export function CountUp({ value, index = 0 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const parsed = parse(value);
  const target = parsed ? Number(parsed.digits) : null;

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const digits = root.querySelector<HTMLElement>("[data-digits]");
    const finish = () => {
      if (digits && target !== null) digits.textContent = String(target);
      root.dataset.state = "done";
    };
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      finish();
      return;
    }
    root.dataset.state = "waiting";
    let timer = 0;
    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        timer = window.setTimeout(() => {
          if (!digits || target === null) {
            finish();
            return;
          }
          digits.textContent = "0";
          root.dataset.state = "running";
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / COUNT_DURATION, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            digits.textContent = String(Math.round(target * eased));
            if (progress < 1) frame = requestAnimationFrame(tick);
            else finish();
          };
          frame = requestAnimationFrame(tick);
        }, index * STAGGER);
      },
      { threshold: 0.15 },
    );
    observer.observe(root);
    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
      cancelAnimationFrame(frame);
    };
  }, [target, index]);

  const digitStyle: CSSProperties | undefined = parsed
    ? { minWidth: `${parsed.digits.length}ch` }
    : undefined;

  return (
    <span ref={ref} className="count-up" data-state="pending">
      <span className="sr-only">{value}</span>
      <span aria-hidden="true">
        {parsed ? (
          <>
            <span data-digits className="count-up-digits" style={digitStyle}>
              {parsed.digits}
            </span>
            {parsed.unit && <span className="count-up-unit">{parsed.unit}</span>}
          </>
        ) : (
          value
        )}
      </span>
    </span>
  );
}
