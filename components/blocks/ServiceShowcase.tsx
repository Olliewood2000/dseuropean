"use client";

import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type FocusEvent,
  type MouseEvent,
  type ReactNode,
} from "react";

export interface ServiceShowcaseProps {
  heading?: ReactNode;
  items: readonly {
    title: string;
    excerpt: string;
    href: string;
    icon?: ReactNode;
    cardMedia?: ReactNode;
    stageMedia?: ReactNode;
  }[];
  arrow: ReactNode;
}

const desktopQuery = "(min-width: 1024px)";
const reducedMotionQuery = "(prefers-reduced-motion: reduce)";
// Page scroll allowed per service while the showcase is pinned.
const scrollPerItem = 160;
// Scroll held still after the panel locks and before it releases, so pinning and list movement never overlap.
const holdBefore = 180;
const holdAfter = 120;
// Matches --duration-slow so the page scroll and the sliding highlight move together.
const slideDuration = 400;
// Matches --ease-in-out-brand, cubic-bezier(0.65, 0, 0.35, 1), closely enough to read as one motion.
const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);

export function ServiceShowcase({ heading, items, arrow }: ServiceShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const windowRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const activeRef = useRef(0);
  const metrics = useRef({ travel: 0, distance: 0, stickyTop: 0 });
  // While a selected row is being scrolled into place, scroll position must not change the active row.
  const scrollAnimation = useRef(0);

  const placeIndicator = (index: number) => {
    const indicator = indicatorRef.current;
    const row = rowRefs.current[index];
    if (!indicator || !row) return;
    indicator.style.transform = `translate3d(0, ${row.offsetTop}px, 0)`;
    indicator.style.height = `${row.offsetHeight}px`;
    if (!indicator.classList.contains("is-ready")) {
      requestAnimationFrame(() => indicator.classList.add("is-ready"));
    }
  };

  useEffect(() => {
    activeRef.current = activeIndex;
    placeIndicator(activeIndex);
  }, [activeIndex]);

  useEffect(() => {
    const desktop = window.matchMedia(desktopQuery);
    const count = rowRefs.current.length;
    let frame = 0;

    const reset = () => {
      if (trackRef.current) trackRef.current.style.height = "";
      if (railRef.current) railRef.current.style.transform = "";
      rowRefs.current.forEach((row) => row?.style.removeProperty("opacity"));
    };

    const measure = () => {
      const track = trackRef.current;
      const pin = pinRef.current;
      const view = windowRef.current;
      const rail = railRef.current;
      if (!desktop.matches || !track || !pin || !view || !rail) {
        reset();
        return;
      }
      const travel = Math.max(0, rail.offsetHeight - view.clientHeight);
      const distance = Math.max(travel, (count - 1) * scrollPerItem);
      metrics.current = {
        travel,
        distance,
        stickyTop: parseFloat(getComputedStyle(pin).top) || 0,
      };
      track.style.height = `${pin.offsetHeight + holdBefore + distance + holdAfter}px`;
      placeIndicator(activeRef.current);
    };

    const update = () => {
      frame = 0;
      const track = trackRef.current;
      const view = windowRef.current;
      const rail = railRef.current;
      if (!desktop.matches || !track || !view || !rail) return;
      const { travel, distance, stickyTop } = metrics.current;
      const scrolled = stickyTop - track.getBoundingClientRect().top - holdBefore;
      const progress = distance > 0 ? Math.min(1, Math.max(0, scrolled / distance)) : 0;
      rail.style.transform = `translate3d(0, ${-progress * travel}px, 0)`;
      const viewTop = view.getBoundingClientRect().top;
      rowRefs.current.forEach((row) => {
        if (!row) return;
        const box = row.getBoundingClientRect();
        const visible = Math.min(1, Math.max(0, (box.bottom - viewTop) / box.height));
        row.style.opacity = visible < 1 ? String(visible * visible) : "";
      });
      if (!scrollAnimation.current) setActiveIndex(Math.round(progress * (count - 1)));
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const remeasure = () => {
      measure();
      schedule();
    };
    const cancelScrollAnimation = () => {
      if (!scrollAnimation.current) return;
      cancelAnimationFrame(scrollAnimation.current);
      scrollAnimation.current = 0;
      schedule();
    };

    remeasure();
    const observer = new ResizeObserver(remeasure);
    if (railRef.current) observer.observe(railRef.current);
    if (pinRef.current) observer.observe(pinRef.current);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", remeasure);
    window.addEventListener("wheel", cancelScrollAnimation, { passive: true });
    window.addEventListener("touchstart", cancelScrollAnimation, { passive: true });
    window.addEventListener("keydown", cancelScrollAnimation);
    desktop.addEventListener("change", remeasure);
    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(scrollAnimation.current);
      scrollAnimation.current = 0;
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", remeasure);
      window.removeEventListener("wheel", cancelScrollAnimation);
      window.removeEventListener("touchstart", cancelScrollAnimation);
      window.removeEventListener("keydown", cancelScrollAnimation);
      desktop.removeEventListener("change", remeasure);
    };
  }, []);

  const scrollToItem = (index: number, animate: boolean) => {
    const track = trackRef.current;
    if (!track) return;
    const { distance, stickyTop } = metrics.current;
    const trackTop = track.getBoundingClientRect().top + window.scrollY;
    const progress = items.length > 1 ? index / (items.length - 1) : 0;
    const target = Math.round(trackTop - stickyTop + holdBefore + progress * distance);
    const from = window.scrollY;
    cancelAnimationFrame(scrollAnimation.current);
    setActiveIndex(index);
    if (!animate || window.matchMedia(reducedMotionQuery).matches || from === target) {
      scrollAnimation.current = 0;
      window.scrollTo({ top: target, behavior: "auto" });
      return;
    }
    let start = 0;
    const step = (time: number) => {
      if (!start) start = time;
      const t = Math.min(1, (time - start) / slideDuration);
      window.scrollTo({ top: from + (target - from) * easeInOut(t), behavior: "auto" });
      scrollAnimation.current = t < 1 ? requestAnimationFrame(step) : 0;
    };
    scrollAnimation.current = requestAnimationFrame(step);
  };

  const handleSelect = (index: number) => (event: MouseEvent<HTMLDivElement>) => {
    if (!window.matchMedia(desktopQuery).matches) return;
    if (event.target instanceof Element && event.target.closest("a")) return;
    if (index !== activeIndex) scrollToItem(index, true);
  };

  const handleFocus = (index: number) => (event: FocusEvent<HTMLAnchorElement>) => {
    if (window.matchMedia(desktopQuery).matches && event.currentTarget.matches(":focus-visible")) {
      scrollToItem(index, false);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div ref={trackRef} className="service-showcase">
      <div ref={pinRef} className="service-showcase-pin">
        {heading && <div className="service-showcase-heading">{heading}</div>}
        <div ref={windowRef} className="service-showcase-window">
          <div ref={railRef} className="service-showcase-rail">
            <span ref={indicatorRef} className="service-showcase-indicator" aria-hidden="true" />
            <ol className="service-showcase-list">
              {items.map((item, index) => (
                <li key={item.href}>
                  <div
                    ref={(row) => {
                      rowRefs.current[index] = row;
                    }}
                    className={`service-showcase-row ${index === activeIndex ? "is-active" : ""}`}
                    onClick={handleSelect(index)}
                  >
                    {item.cardMedia && (
                      <div className="service-showcase-card-media">{item.cardMedia}</div>
                    )}
                    <div className="service-showcase-body">
                      <div className="service-showcase-meta">
                        {item.icon}
                        <span className="service-showcase-index" aria-hidden="true">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="service-showcase-title text-h4">{item.title}</h3>
                      <p className="block-muted text-body-sm">{item.excerpt}</p>
                      <Link
                        href={item.href}
                        className="service-showcase-link arrow-link block-accent"
                        aria-label={`View service: ${item.title}`}
                        onFocus={handleFocus(index)}
                      >
                        View service
                        {arrow}
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="service-showcase-aside">
          <div className="service-showcase-frame">
            <span className="service-showcase-motif" aria-hidden="true" />
            <div className="service-showcase-stage">
              {items.map((item, index) => (
                <div
                  key={item.href}
                  className={`service-showcase-slide ${index === activeIndex ? "is-active" : ""}`}
                  aria-hidden={index === activeIndex ? undefined : true}
                >
                  {item.stageMedia}
                </div>
              ))}
              <p className="service-showcase-chip" aria-hidden="true">
                {items[activeIndex]?.title}
              </p>
            </div>
          </div>
          <div
            className="service-showcase-steps"
            style={
              {
                "--showcase-progress": items.length > 1 ? activeIndex / (items.length - 1) : 0,
              } as CSSProperties
            }
          >
            <span className="service-showcase-steps-fill" aria-hidden="true" />
            <ol className="service-showcase-steps-list">
            {items.map((item, index) => (
              <li key={item.href}>
                <button
                  type="button"
                  className={`service-showcase-step ${index === activeIndex ? "is-active" : ""} ${index < activeIndex ? "is-past" : ""}`}
                  aria-label={item.title}
                  aria-current={index === activeIndex ? "step" : undefined}
                  onClick={() => {
                    if (index !== activeIndex) scrollToItem(index, true);
                  }}
                >
                  {item.icon}
                </button>
              </li>
            ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
