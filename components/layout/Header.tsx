"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, Phone } from "lucide-react";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { navigation } from "@/content/navigation";
import { contactLinks } from "@/lib/contact";
import { focusableElements, trapFocus } from "@/lib/focus";
import { useScrolledPast } from "@/lib/scroll";
import { Button } from "@/components/primitives/Button";
import { Icon } from "@/components/primitives/Icon";
import { Container } from "./Container";
import { MobileDrawer } from "./MobileDrawer";

export interface HeaderProps {
  transparentOnHero?: boolean;
}

export function Header({ transparentOnHero = true }: HeaderProps) {
  const pathname = usePathname();
  const scrolled = useScrolledPast(80);
  const [servicesPath, setServicesPath] = useState<string | null>(null);
  const [drawerPath, setDrawerPath] = useState<string | null>(null);
  const servicesOpen = servicesPath === pathname;
  const drawerOpen = drawerPath === pathname;
  const group = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const hoverOpened = useRef(false);
  const closeDrawer = useCallback(() => setDrawerPath(null), []);

  useEffect(() => {
    if (!servicesOpen) return;
    function keydown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setServicesPath(null);
        toggle.current?.focus();
      } else if (group.current) trapFocus(event, group.current);
    }
    function focusin(event: FocusEvent) {
      if (group.current && event.target instanceof Node && !group.current.contains(event.target)) {
        focusableElements(group.current)[0]?.focus();
      }
    }
    function pointerdown(event: PointerEvent) {
      if (event.target instanceof Node && !group.current?.contains(event.target))
        setServicesPath(null);
    }
    document.addEventListener("keydown", keydown);
    document.addEventListener("focusin", focusin);
    document.addEventListener("pointerdown", pointerdown);
    return () => {
      document.removeEventListener("keydown", keydown);
      document.removeEventListener("focusin", focusin);
      document.removeEventListener("pointerdown", pointerdown);
    };
  }, [servicesOpen]);

  useEffect(() => {
    // Read the CSS breakpoint token so behaviour and layout cannot drift apart.
    const width = getComputedStyle(document.documentElement)
      .getPropertyValue("--breakpoint-lg")
      .trim();
    const media = window.matchMedia(`(min-width: ${width})`);
    const resize = () => {
      setServicesPath(null);
      setDrawerPath(null);
    };
    media.addEventListener("change", resize);
    return () => media.removeEventListener("change", resize);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div
        className={`header-offset ${transparentOnHero ? "bg-surface-inverse" : "bg-surface"}`}
        aria-hidden="true"
      />
      <header
        className={`site-header ${scrolled ? "is-condensed" : ""} ${scrolled || !transparentOnHero || servicesOpen ? "is-solid" : ""}`}
      >
        <Container>
          <div className="header-row">
            <Link href="/" className="header-logo" aria-label={`${site.name} home`}>
              <Image src={site.logos.longWhite} alt={site.name} width={460} height={72} priority />
            </Link>
            <nav aria-label="Main navigation" className="desktop-nav">
              <div
                ref={group}
                className="services-group"
                onPointerEnter={(event) => {
                  if (event.pointerType === "mouse" && !servicesOpen) {
                    hoverOpened.current = true;
                    setServicesPath(pathname);
                  }
                }}
                onPointerLeave={() => {
                  if (!group.current?.contains(document.activeElement)) setServicesPath(null);
                }}
              >
                <div className="flex items-center">
                  <Link
                    href="/services"
                    className="nav-link"
                    aria-current={pathname === "/services" ? "page" : undefined}
                  >
                    Services
                  </Link>
                  <button
                    ref={toggle}
                    type="button"
                    className="nav-toggle"
                    aria-label="Services menu"
                    aria-expanded={servicesOpen}
                    aria-controls="services-panel"
                    onClick={() => {
                      setServicesPath(servicesOpen && !hoverOpened.current ? null : pathname);
                      hoverOpened.current = false;
                    }}
                  >
                    <span className={servicesOpen ? "chevron-open" : "chevron"}>
                      <Icon icon={ChevronDown} size={20} tone="accent-on-dark" />
                    </span>
                  </button>
                </div>
                <div id="services-panel" className="services-panel" hidden={!servicesOpen}>
                  <Container>
                    <ul className="grid gap-x-12 gap-y-2 md:grid-cols-2">
                      {services.map((service) => (
                        <li key={service.slug}>
                          <Link
                            href={`/services/${service.slug}`}
                            className="service-menu-link"
                            aria-current={
                              pathname === `/services/${service.slug}` ? "page" : undefined
                            }
                          >
                            <span className="font-bold text-ink-inverse">{service.title}</span>
                          <span className="block text-body-sm font-normal text-ink-inverse-muted">
                              {service.excerpt}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Container>
                </div>
              </div>
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="nav-link"
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="header-contact">
              {contactLinks.phone ? (
                <a href={contactLinks.phone} className="font-bold">
                  {site.phone}
                </a>
              ) : (
                <span className="placeholder-value">{site.phone}</span>
              )}
              <span className="block text-micro text-ink-inverse-muted">{site.hoursShort}</span>
            </div>
            <div className="header-quote">
              <Button href="/quote" variant="primary-dark">
                Get a quote
              </Button>
            </div>
            <div className="mobile-controls">
              {contactLinks.phone ? (
                <a
                  href={contactLinks.phone}
                  className="icon-control"
                  aria-label={`Call ${site.name}`}
                >
                  <Icon icon={Phone} tone="accent-on-dark" />
                </a>
              ) : (
                <button
                  type="button"
                  className="icon-control"
                  disabled
                  aria-label="Phone number awaiting confirmation"
                  title={site.phone}
                >
                  <Icon icon={Phone} tone="accent-on-dark" />
                </button>
              )}
              <button
                type="button"
                className="icon-control"
                aria-label="Open menu"
                aria-haspopup="dialog"
                aria-expanded={drawerOpen}
                aria-controls="mobile-menu"
                onClick={() => setDrawerPath(pathname)}
              >
                <Icon icon={Menu} tone="accent-on-dark" />
              </button>
            </div>
          </div>
        </Container>
      </header>
      <MobileDrawer open={drawerOpen} onClose={closeDrawer} />
    </>
  );
}
