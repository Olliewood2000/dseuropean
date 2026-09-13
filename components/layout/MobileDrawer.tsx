"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ChevronDown, X } from "lucide-react";
import { site } from "@/content/site";
import { navigation } from "@/content/navigation";
import { services } from "@/content/services";
import { contactLinks } from "@/lib/contact";
import { trapFocus } from "@/lib/focus";
import { Icon } from "@/components/primitives/Icon";
import { Button } from "@/components/primitives/Button";

export interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const disclosure = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const element = dialog.current;
    if (!element || !open) return;
    const previousFocus = document.activeElement;
    const detailsElement = disclosure.current;
    const previousOverflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    const keydown = (event: KeyboardEvent) => trapFocus(event, element);
    element.addEventListener("keydown", keydown);
    return () => {
      element.removeEventListener("keydown", keydown);
      element.close();
      if (detailsElement) detailsElement.open = false;
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) previousFocus.focus();
    };
  }, [open]);

  return (
    <dialog
      ref={dialog}
      id="mobile-menu"
      className="mobile-drawer"
      aria-label="Site menu"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
    >
      <div className="drawer-inner">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" onClick={onClose} className="drawer-logo" aria-label={`${site.name} home`}>
            <Image src={site.logos.longWhite} alt={site.name} width={460} height={72} />
          </Link>
          <button
            ref={closeButton}
            type="button"
            className="icon-control"
            aria-label="Close menu"
            onClick={onClose}
          >
            <Icon icon={X} tone="accent-on-dark" />
          </button>
        </div>
        <nav aria-label="Mobile navigation" className="drawer-nav">
          <details ref={disclosure} className="drawer-services">
            <summary className="flex items-center justify-between gap-4">
              Services
              <Icon icon={ChevronDown} tone="accent-on-dark" />
            </summary>
            <ul className="mt-4 space-y-2 text-body">
              <li>
                <Link href="/services" onClick={onClose}>
                  All services
                </Link>
              </li>
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} onClick={onClose}>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={onClose}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="drawer-contact space-y-4">
          <div className="space-y-2 text-body-sm">
            {contactLinks.phone ? (
              <a className="block font-bold" href={contactLinks.phone}>
                {site.phone}
              </a>
            ) : (
              <span className="placeholder-value block">{site.phone}</span>
            )}
            {contactLinks.email ? (
              <a className="block" href={contactLinks.email}>
                {site.email}
              </a>
            ) : (
              <span className="placeholder-value block">{site.email}</span>
            )}
            <p className="text-ink-inverse-muted">{site.hours}</p>
          </div>
          <div
            className="flex flex-wrap gap-3"
            onClick={(event) => {
              if (event.target instanceof Element && event.target.closest("a")) onClose();
            }}
          >
            <Button href="/quote" variant="primary-dark">
              Get a quote
            </Button>
            <Button href="/contact" variant="ghost-dark">
              Talk to us
            </Button>
          </div>
        </div>
      </div>
    </dialog>
  );
}
