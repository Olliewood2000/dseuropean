import { ChevronDown } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Icon } from "@/components/primitives/Icon";
import { SectionHeading, type SectionHeadingProps } from "@/components/primitives/SectionHeading";
import { blockTone, sectionOptions, type BlockProps } from "@/lib/blocks";
export interface FAQProps extends BlockProps {
  heading?: SectionHeadingProps;
  items: readonly { question: string; answer: string }[];
}
export function FAQ({ heading, items, tone, section }: FAQProps) {
  const resolvedTone = blockTone(section, tone);
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
  return (
    <Section {...sectionOptions({ container: "narrow", ...section }, tone)}>
      <div className="block-stack">
        {heading && <SectionHeading {...heading} tone={resolvedTone} />}
        <div>
          {items.map((item) => (
            <details key={item.question} className="faq-item block-border border-t">
              <summary>
                <h3 className="text-body font-bold">{item.question}</h3>
                <Icon
                  icon={ChevronDown}
                  size={20}
                  tone={resolvedTone === "dark" ? "accent-on-dark" : "accent"}
                />
              </summary>
              <p className="block-muted pb-6">{item.answer}</p>
            </details>
          ))}
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
        />
      </div>
    </Section>
  );
}
