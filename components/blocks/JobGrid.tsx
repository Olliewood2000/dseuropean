import { Section } from "@/components/layout/Section";
import { Card } from "@/components/primitives/Card";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { SectionHeading, type SectionHeadingProps } from "@/components/primitives/SectionHeading";
import { renderMedia, type Media } from "@/lib/media";
import { blockTone, sectionOptions, type BlockProps } from "@/lib/blocks";
export interface JobGridProps extends BlockProps {
  heading?: SectionHeadingProps;
  jobs: readonly {
    title: string;
    location: string;
    service: string;
    excerpt?: string;
    href?: string;
    image?: Media;
  }[];
  columns?: 2 | 3;
  variant?: "card" | "narrative";
}
export function JobGrid({
  heading,
  jobs,
  columns = 3,
  variant = "narrative",
  tone,
  section,
}: JobGridProps) {
  const resolvedTone = blockTone(section, tone);
  return (
    <Section {...sectionOptions(section, tone)}>
      <div className="block-stack">
        {heading && <SectionHeading {...heading} tone={resolvedTone} />}
        <div
          className={`grid gap-4 md:grid-cols-2 lg:gap-6 ${columns === 3 ? "lg:grid-cols-3" : ""} ${variant === "narrative" ? "narrative-grid" : ""}`}
        >
          {jobs.map((job) => (
            <Card key={`${job.location}-${job.title}`} href={job.href} tone={resolvedTone}>
              {variant === "card" &&
                job.image &&
                renderMedia(job.image, {
                  aspect: "3/2",
                  sizes: "(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) 50vw, 600px",
                })}
              <div className="card-body space-y-4">
                {variant === "card" ? (
                  <>
                    <Eyebrow tone={resolvedTone}>{job.location}</Eyebrow>
                    <h3 className="text-h4">{job.title}</h3>
                    <p className="block-muted text-micro">{job.service}</p>
                  </>
                ) : (
                  <h3 className="text-h3">{job.location}</h3>
                )}
                {job.excerpt && (
                  <p
                    className={`block-muted ${variant === "narrative" ? "text-body" : "text-body-sm"}`}
                  >
                    {job.excerpt}
                  </p>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
