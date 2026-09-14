import { pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { Hero } from "@/components/blocks/Hero";
import { FormWithAside } from "@/components/blocks/FormWithAside";
import { TrustStrip } from "@/components/blocks/TrustStrip";
import { ContactDetails } from "@/components/blocks/ContactDetails";
import { quotePage } from "@/content/enquiry-pages";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { contactLinks } from "@/lib/contact";

export const metadata: Metadata = pageMetadata("/quote");
export default async function QuotePage({ searchParams }: PageProps<"/quote">) {
  const query = await searchParams;
  const defaultService = services.find((s) => s.slug === query.service)?.slug ?? "";
  return (
    <>
      <Hero {...quotePage.hero} />
      <FormWithAside
        form="quote"
        preview={false}
        defaultService={defaultService}
        section={{ id: "quote-form", background: "surface", padding: "standard" }}
        aside={
          <>
            <div className="space-y-4">
              <h2 className="text-h3 font-bold">{quotePage.aside.heading}</h2>
              <ol className="list-decimal space-y-4 pl-5">
                {quotePage.aside.steps.map((step) => (
                  <li key={step.title}>
                    <strong>{step.title}</strong> {step.body}
                  </li>
                ))}
              </ol>
            </div>
            <div className="block-border space-y-4 border-t pt-6">
              <h2 className="text-h3 font-bold">{quotePage.aside.talk}</h2>
              <p>
                {contactLinks.phone ? <a href={contactLinks.phone}>{site.phone}</a> : site.phone},{" "}
                {site.hours}.
              </p>
              <p>
                {contactLinks.whatsapp ? (
                  <a href={contactLinks.whatsapp}>WhatsApp</a>
                ) : (
                  site.whatsapp
                )}
              </p>
            </div>
            <p className="block-border border-t pt-6">{quotePage.aside.smallPrint}</p>
          </>
        }
      />
      <TrustStrip {...quotePage.trust} />
      <ContactDetails {...quotePage.details} />
    </>
  );
}
