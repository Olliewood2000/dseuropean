"use client";

import { MessageCircle, Phone } from "lucide-react";
import { contactLinks } from "@/lib/contact";
import { useScrolledPast } from "@/lib/scroll";
import { Icon } from "@/components/primitives/Icon";

export function StickyContactBar() {
  const visible = useScrolledPast(400);
  return (
    <nav aria-label="Quick contact" className="sticky-contact-bar" hidden={!visible}>
      {contactLinks.phone ? (
        <a href={contactLinks.phone}>
          <Icon icon={Phone} size={20} tone="accent-on-dark" />
          Call
        </a>
      ) : (
        <button
          type="button"
          disabled
          aria-label="Call unavailable: phone number awaiting confirmation"
        >
          <Icon icon={Phone} size={20} tone="accent-on-dark" />
          Call<span className="text-micro">Pending</span>
        </button>
      )}
      {contactLinks.whatsapp ? (
        <a href={contactLinks.whatsapp}>
          <Icon icon={MessageCircle} size={20} tone="accent-on-dark" />
          WhatsApp
        </a>
      ) : (
        <button
          type="button"
          disabled
          aria-label="WhatsApp unavailable: number awaiting confirmation"
        >
          <Icon icon={MessageCircle} size={20} tone="accent-on-dark" />
          WhatsApp<span className="text-micro">Pending</span>
        </button>
      )}
    </nav>
  );
}
