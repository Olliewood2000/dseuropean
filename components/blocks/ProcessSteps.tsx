import type { LucideIcon } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Icon } from "@/components/primitives/Icon";
import { MotifShape } from "@/components/primitives/MotifShape";
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
        <ol className="process-grid">
          {steps.map((step) => (
            <li key={step.number} className="process-card card-motif">
              <MotifShape variant="tint" tone="white" size="md" position="top-right" opacity={0.08} />
              <div className="process-card-head">
                {step.icon && <Icon icon={step.icon} size={44} tone="inverse" />}
                <span className="process-number text-display-lg font-bold" aria-hidden="true">
                  {step.number}
                </span>
              </div>
              <div className="process-card-body">
                <h3 className="text-h4">{step.title}</h3>
                <p className="text-body-sm">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
