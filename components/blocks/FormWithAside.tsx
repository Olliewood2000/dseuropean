import type { ReactNode } from "react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { ContactForm } from "@/components/forms/ContactForm";
import { blockTone, sectionOptions, type BlockProps } from "@/lib/blocks";
export interface FormWithAsideProps extends BlockProps {
  title?: string;
  intro?: string;
  form: "quote" | "contact";
  aside: ReactNode;
}
export function FormWithAside({ title, intro, form, aside, tone, section }: FormWithAsideProps) {
  const resolvedTone = blockTone(section, tone);
  return (
    <Section {...sectionOptions(section, tone)}>
      <div className="block-stack">
        {title && <SectionHeading title={title} intro={intro} tone={resolvedTone} />}
        <div className="form-with-aside grid items-start gap-10 lg:grid-cols-12 lg:gap-6">
          <div className="min-w-0 lg:col-span-7">
            {form === "quote" ? (
              <QuoteForm tone={resolvedTone} />
            ) : (
              <ContactForm tone={resolvedTone} />
            )}
          </div>
          <aside className="form-aside block-muted space-y-6 text-body-sm lg:col-span-4 lg:col-start-9">
            {aside}
          </aside>
        </div>
      </div>
    </Section>
  );
}
