import type { Metadata } from "next";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { Hero } from "@/components/blocks/Hero";
import { ContactDetails } from "@/components/blocks/ContactDetails";
import { FormWithAside } from "@/components/blocks/FormWithAside";
import { TwoColumnText } from "@/components/blocks/TwoColumnText";
import { QuoteCTA } from "@/components/blocks/QuoteCTA";
import { Button } from "@/components/primitives/Button";
import { contactMeta, contactPage } from "@/content/enquiry-pages";
import { site } from "@/content/site";
import { contactLinks, fullAddress, directionsLink } from "@/lib/contact";

export const metadata: Metadata = {
  title: { absolute: contactMeta.title },
  description: contactMeta.description,
  robots: { index: false, follow: false },
};
export default function ContactPage() {
  return (
    <>
      <Hero {...contactPage.hero} />
      <ContactDetails
        layout="grid"
        showMap
        section={{ id: "contact-details", background: "surface", padding: "standard" }}
        details={[
          {
            label: "Phone",
            value: site.phone,
            href: contactLinks.phone,
            note: site.hours,
            icon: Phone,
          },
          {
            label: "WhatsApp",
            value: contactLinks.whatsapp ? "Message us" : site.whatsapp,
            href: contactLinks.whatsapp,
            note: "Photographs and voice notes welcome",
            icon: MessageCircle,
          },
          {
            label: "Email",
            value: site.email,
            href: contactLinks.email,
            note: "We read everything that comes in",
            icon: Mail,
          },
          { label: "Address", value: fullAddress, href: directionsLink, icon: MapPin },
        ]}
      />
      <FormWithAside
        {...contactPage.form}
        form="contact"
        preview={false}
        aside={
          <>
            <div className="space-y-4">
              <h2 className="text-h3 font-bold">{contactPage.aside.heading}</h2>
              {contactPage.aside.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="block-border space-y-4 border-t pt-6">
              <h2 className="text-h3 font-bold">{contactPage.aside.quoteHeading}</h2>
              <p>{contactPage.aside.quoteBody}</p>
              <Button href="/quote" variant="secondary">
                Get a quote
              </Button>
            </div>
          </>
        }
      />
      <TwoColumnText
        {...contactPage.finding}
        cta={{ label: "Get directions", href: directionsLink, variant: "secondary" }}
      />
      <QuoteCTA {...contactPage.quote} />
    </>
  );
}
