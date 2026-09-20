import type { LucideIcon } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Icon } from "@/components/primitives/Icon";
import { SectionHeading, type SectionHeadingProps } from "@/components/primitives/SectionHeading";
import { blockTone, sectionOptions, type BlockProps } from "@/lib/blocks";
export interface ProcessStep {
  number: string;
  title: string;
  body: string;
  icon?: LucideIcon;
}
export interface ProcessStepsProps extends BlockProps {
  heading?: SectionHeadingProps;
  steps: readonly [ProcessStep, ProcessStep, ProcessStep];
}
export function ProcessSteps({ heading, steps, tone, section }: ProcessStepsProps) {
  const resolvedTone = blockTone(section, tone);
  return (
    <Section {...sectionOptions(section, tone)}>
      <div className="block-stack">
        {heading && <SectionHeading {...heading} tone={resolvedTone} />}
        <ol className="process-grid grid gap-8 lg:grid-cols-3 lg:gap-6">
          {steps.map((step) => (
            <li key={step.number} className="relative space-y-4">
              <div className="flex items-center gap-4">
                <span
                  className="process-number block-accent text-display-md font-bold"
                  aria-hidden="true"
                >
                  {step.number}
                </span>
                {step.icon && (
                  <Icon
                    icon={step.icon}
                    size={32}
                    tone={resolvedTone === "dark" ? "accent-on-dark" : "accent"}
                  />
                )}
              </div>
              <h3 className="relative text-h4">{step.title}</h3>
              <p className="block-muted relative text-body-sm">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
