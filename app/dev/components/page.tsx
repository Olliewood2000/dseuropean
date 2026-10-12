import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import { ArrowRight, Truck } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/primitives/Button";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { ArrowLink } from "@/components/primitives/ArrowLink";
import { Icon } from "@/components/primitives/Icon";
import { MotifShape } from "@/components/primitives/MotifShape";
import { ImageFrame } from "@/components/primitives/ImageFrame";
import { ImagePlaceholder } from "@/components/primitives/ImagePlaceholder";
import { Card } from "@/components/primitives/Card";
import { Hero } from "@/components/blocks/Hero";
import { TrustStrip } from "@/components/blocks/TrustStrip";
import { ServiceGrid } from "@/components/blocks/ServiceGrid";
import { SplitFeature } from "@/components/blocks/SplitFeature";
import { TwoColumnText } from "@/components/blocks/TwoColumnText";
import { ProcessSteps } from "@/components/blocks/ProcessSteps";
import { FeatureBand } from "@/components/blocks/FeatureBand";
import { StatBand } from "@/components/blocks/StatBand";
import { AudienceGrid } from "@/components/blocks/AudienceGrid";
import { FleetStrip } from "@/components/blocks/FleetStrip";
import { JobGrid } from "@/components/blocks/JobGrid";
import { CoverageList } from "@/components/blocks/CoverageList";
import { FAQ } from "@/components/blocks/FAQ";
import { RelatedServices } from "@/components/blocks/RelatedServices";
import { QuoteCTA } from "@/components/blocks/QuoteCTA";
import { ContactDetails } from "@/components/blocks/ContactDetails";
import { FormWithAside } from "@/components/blocks/FormWithAside";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { ContactForm } from "@/components/forms/ContactForm";
import { Field } from "@/components/forms/Field";
import { Select } from "@/components/forms/Select";
import { Textarea } from "@/components/forms/Textarea";
import { FormMessage } from "@/components/forms/FormMessage";
import {
  reviewServices,
  reviewBody,
  reviewBullets,
  reviewMedia,
  reviewTrust,
  reviewSteps,
  reviewAudiences,
  reviewVehicles,
  reviewJobs,
  reviewRegions,
  reviewFaqs,
} from "@/content/component-review";

export const metadata: Metadata = {
  title: "Phase 2 component review | DS European",
  robots: { index: false, follow: false },
};
const groups = [
  ["buttons", "Buttons and text"],
  ["images", "Images and cards"],
  ["heroes", "Page introductions"],
  ["services", "Service cards"],
  ["split", "Image and text"],
  ["text", "Text columns"],
  ["process", "Process and figures"],
  ["bands", "Feature bands"],
  ["audiences", "Audience and fleet"],
  ["jobs", "Recent jobs"],
  ["faq", "Coverage and FAQs"],
  ["forms", "Forms"],
  ["contact", "Contact and closing sections"],
] as const;

export default function ComponentReview() {
  return (
    <>
      <Section background="inverse" padding="compact" id="component-index">
        <div className="space-y-6">
          <Eyebrow tone="dark">Phase 2 · Component review</Eyebrow>
          <h1 className="max-w-display text-display-lg text-ink-inverse">
            The pieces of the website
          </h1>
          <p className="max-w-measure text-body-lg text-ink-inverse-muted">
            Review each reusable section before we assemble the homepage. These are labelled
            samples, with light and dark versions. Photographs, contact details and email delivery
            are still pending.
          </p>
          <nav
            aria-label="Component review sections"
            className="review-index text-body-sm text-accent-on-dark"
          >
            {groups.map(([id, label]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
            <Link href="/dev/components/rhythm">Three-section rhythm</Link>
          </nav>
        </div>
      </Section>
      {(["light", "dark"] as const).map((tone) => (
        <Section
          key={`buttons-${tone}`}
          background={tone === "dark" ? "inverse" : "surface"}
          id={tone === "light" ? "buttons" : undefined}
        >
          <div className="block-stack">
            <SectionHeading
              title={`Buttons and text · ${tone}`}
              eyebrow="Primitives"
              intro="Compare the two button sizes, trailing arrows, hover colours and visible keyboard focus."
              tone={tone}
              action={{ label: "See our work", href: "/dev/components/rhythm" }}
            />
            <div className="grid gap-6 md:grid-cols-2">
              {(tone === "light"
                ? (["primary", "secondary"] as const)
                : (["primary-dark", "ghost-dark"] as const)
              ).map((variant) => (
                <div key={variant} className="primitive-sample space-y-4">
                  <h3 className="text-h4">{variant}</h3>
                  <div className="flex flex-wrap items-start gap-4">
                    {(["md", "lg"] as const).map((size) => (
                      <Button
                        key={size}
                        href="#images"
                        variant={variant}
                        size={size}
                        icon={ArrowRight}
                      >
                        Get a quote
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <ArrowLink href="#images" tone={tone}>
              See our work
            </ArrowLink>
            <div className="flex flex-wrap items-end gap-8">
              {([20, 24, 32] as const).map((size) => (
                <div key={size} className="space-y-2">
                  <Icon
                    icon={Truck}
                    size={size}
                    tone={tone === "dark" ? "accent-on-dark" : "accent"}
                    label={`${size}px vehicle icon sample`}
                  />
                  <p className="block-muted text-micro">{size}px</p>
                </div>
              ))}
              <Icon icon={Truck} tone="muted" label="Muted icon sample" />
            </div>
            <SectionHeading
              title="A smaller heading sample"
              as="h3"
              intro="Body copy stays at a readable size while headings scale down on phones."
              tone={tone}
            />
          </div>
        </Section>
      ))}
      <Section background="subtle" id="images">
        <div className="block-stack">
          <SectionHeading
            title="Image placeholders and frames"
            intro="The written photo brief stays readable and available to screen readers. The geometric asset below is only an image-sizing test, not client photography."
          />
          <div className="grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
            {(["16/9", "4/3", "3/2", "1/1", "3/4"] as const).map((aspect) => (
              <div key={aspect} className="space-y-4">
                <h3 className="text-h4">{aspect}</h3>
                <ImagePlaceholder aspect={aspect} brief="Fitters wrapping a dining table" />
                <ImageFrame
                  src="/images/dev-frame.svg"
                  alt={`Geometric image-sizing sample at ${aspect}`}
                  aspect={aspect}
                  sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) 50vw, 400px"
                />
              </div>
            ))}
          </div>
          <div className="grid items-start gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-h4">Masked placeholder · long brief</h3>
              <ImagePlaceholder {...reviewMedia} masked />
            </div>
            <div className="space-y-4">
              <h3 className="text-h4">Masked frame</h3>
              <ImageFrame
                src="/images/dev-frame.svg"
                alt="Masked geometric image-sizing sample"
                masked
              />
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {(["light", "dark"] as const).map((tone) => (
              <Fragment key={tone}>
                <Card tone={tone}>
                  <div className="card-body space-y-4">
                    <h3 className="text-h4">{tone} card · motif corner</h3>
                    <p className="block-muted">A card without a link has no hover lift.</p>
                  </div>
                </Card>
                <Card tone={tone} href="#heroes" motifCorner={false}>
                  <div className="card-body space-y-4">
                    <h3 className="text-h4">{tone} card · regular corners</h3>
                    <p className="block-muted">A linked card rises slightly on hover.</p>
                  </div>
                </Card>
              </Fragment>
            ))}
          </div>
        </div>
      </Section>
      <Section background="inverse">
        <div className="block-stack">
          <SectionHeading
            title="Decorative motif variants"
            tone="dark"
            intro="Each sample bleeds off its frame. Solid, outline and tint treatments share the same angle."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {(["solid", "outline", "tint"] as const).map((variant, index) => (
              <div
                key={variant}
                className="motif-sample relative overflow-hidden rounded-lg border border-border-inverse p-6"
              >
                <MotifShape
                  variant={variant}
                  tone={index === 0 ? "accent" : "white"}
                  size={index === 0 ? "sm" : index === 1 ? "md" : "xl"}
                  position={index === 1 ? "bottom-right" : "right"}
                />
                <h3 className="relative text-h4 text-ink-inverse">{variant}</h3>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <div id="heroes" className="sample-label">
        Page introductions · Home, page, service and compact form variants
      </div>
      {(["home", "page", "service"] as const).map((variant) => (
        <Hero
          key={variant}
          variant={variant}
          title={`${variant === "home" ? "Home" : variant === "page" ? "Page" : "Service"} introduction sample`}
          eyebrow={`${variant} hero`}
          subtitle={reviewBody[0]}
          image={reviewMedia}
          primaryCta={{ label: "Get a quote", href: "#forms" }}
          secondaryCta={{ label: "See our work", href: "#jobs" }}
          titleAs="h2"
          breadcrumbs={[{ label: "Review", href: "/dev/components" }, { label: `${variant} hero` }]}
        />
      ))}
      <Hero
        variant="page"
        title="Compact introduction, without buttons"
        subtitle="The form follows directly below on the quote page."
        titleAs="h2"
        section={{ padding: "compact" }}
      />
      <div id="services" className="sample-label">
        Service cards · Compare all seven icons, then the version without them
      </div>
      <ServiceGrid
        heading={{
          title: "Seven services with icons",
          intro:
            "Review whether each icon is distinct and useful. The short final row is intentional.",
        }}
        services={reviewServices}
        section={{ background: "subtle" }}
      />
      <ServiceGrid
        heading={{ title: "Seven services without icons" }}
        services={reviewServices.map((service) => ({ ...service, icon: undefined }))}
        tone="dark"
      />
      <ServiceGrid
        heading={{ title: "Service cards with image placeholders · two columns" }}
        services={reviewServices.slice(0, 2)}
        columns={2}
        showImages
      />
      <ServiceGrid
        heading={{ title: "Service cards with image placeholders · three columns, dark" }}
        services={reviewServices.slice(0, 3)}
        showImages
        tone="dark"
      />
      <ServiceGrid
        heading={{
          title: "Service showcase · hover or focus a row to change the image",
          intro: "Ruled index with a sticky image stage from lg, image cards below.",
        }}
        services={reviewServices}
        variant="showcase"
        showImages
        section={{ background: "subtle" }}
      />
      <div id="split" className="sample-label">
        Image and text · Both ratios and directions, on light and dark backgrounds
      </div>
      {(["light", "dark"] as const).flatMap((tone) =>
        (["7/5", "5/7"] as const).map((ratio, index) => (
          <SplitFeature
            key={`${tone}-${ratio}`}
            heading={{ title: `${ratio} split · ${tone} · image ${index ? "right" : "left"}` }}
            body={reviewBody}
            bullets={index ? undefined : reviewBullets}
            media={reviewMedia}
            ratio={ratio}
            reverse={Boolean(index)}
            tone={tone}
            cta={{ label: "Talk to us", href: "#forms" }}
          />
        )),
      )}
      <div id="text" className="sample-label">
        Text columns · Title in columns 1–4, body in columns 6–12
      </div>
      {(["light", "dark"] as const).map((tone) => (
        <TwoColumnText
          key={tone}
          tone={tone}
          eyebrow="Supporting text"
          title={`Text columns · ${tone}`}
          body={reviewBody}
          bullets={tone === "dark" ? reviewBullets : undefined}
          cta={{ label: "Get a quote", href: "#forms" }}
        />
      ))}
      <div id="process" className="sample-label">
        Process, trust and statistics · Optional headings and icons
      </div>
      <ProcessSteps heading={{ title: "Three stages with icons" }} steps={reviewSteps} />
      <ProcessSteps
        steps={[
          { ...reviewSteps[0], icon: undefined },
          { ...reviewSteps[1], icon: undefined },
          { ...reviewSteps[2], icon: undefined },
        ]}
        tone="dark"
      />
      <TrustStrip items={reviewTrust} />
      <TrustStrip items={reviewTrust.slice(0, 3)} tone="dark" />
      <StatBand stats={reviewTrust.map((item) => ({ ...item }))} />
      <StatBand
        stats={[
          { figure: "60", suffix: "years", label: "Combined industry experience" },
          ...reviewTrust.slice(1, 3),
        ]}
        background="inverse"
      />
      <div id="bands" className="sample-label">
        Feature band · With and without an items row
      </div>
      <FeatureBand
        eyebrow="With items"
        title="Feature band sample"
        body={reviewBody[0]}
        items={["Location one", "Location two", "Location three"]}
        cta={{ label: "See our work", href: "#jobs" }}
      />
      <FeatureBand title="Without an items row" body={reviewBody[0]} background="accent" />
      <div id="audiences" className="sample-label">
        Audience cards and fleet strip · Light and dark
      </div>
      <AudienceGrid
        heading={{ title: "Four audiences, without decorative icons" }}
        audiences={reviewAudiences}
      />
      <AudienceGrid
        heading={{ title: "Audience cards on navy" }}
        audiences={reviewAudiences}
        tone="dark"
      />
      <FleetStrip
        heading={{ title: "Fleet strip" }}
        vehicles={reviewVehicles}
        cta={{ label: "See our work", href: "#jobs" }}
      />
      <FleetStrip vehicles={reviewVehicles} tone="dark" />
      <div id="jobs" className="sample-label">
        Recent jobs · Narrative and image-card variants, two and three columns
      </div>
      {(["light", "dark"] as const).flatMap((tone) =>
        (["narrative", "card"] as const).map((variant) => (
          <JobGrid
            key={`${tone}-${variant}`}
            heading={{
              title: `${variant === "narrative" ? "Narrative" : "Image"} job cards · ${tone}`,
            }}
            jobs={reviewJobs}
            variant={variant}
            columns={tone === "light" ? 3 : 2}
            tone={tone}
          />
        )),
      )}
      <div id="faq" className="sample-label">
        Coverage, FAQs and related services
      </div>
      {(["light", "dark"] as const).map((tone) => (
        <Fragment key={tone}>
          <CoverageList
            heading={{ title: `Coverage list · ${tone}` }}
            regions={reviewRegions}
            tone={tone}
          />
          <FAQ
            heading={{ title: `Questions and answers · ${tone}` }}
            items={reviewFaqs}
            tone={tone}
          />
          <RelatedServices
            title={`Related services · ${tone}`}
            services={reviewServices.slice(0, 3)}
            tone={tone}
          />
        </Fragment>
      ))}
      <div id="forms" className="sample-label">
        Forms · Validation works locally; sending and photo uploads wait until Phase 7
      </div>
      {(["light", "dark"] as const).map((tone) => (
        <Fragment key={tone}>
          <FormWithAside
            title={`Quote form with supporting text · ${tone}`}
            form="quote"
            tone={tone}
            aside={
              <>
                <div className="space-y-3">
                  <h3>Supporting information</h3>
                  <p>
                    The form stays first on mobile. On larger screens, this column sits to its right
                    and stays visible as the form scrolls.
                  </p>
                </div>
                <p>This is a layout sample. No enquiry is sent.</p>
              </>
            }
          />
          <FormWithAside
            title={`Contact form with supporting text · ${tone}`}
            form="contact"
            tone={tone}
            aside={
              <>
                <h3>A shorter form</h3>
                <p>Four fields, the same input styling and the same visible validation.</p>
              </>
            }
          />
        </Fragment>
      ))}
      <Section>
        <div className="block-stack">
          <SectionHeading title="Compact quote form and standalone contact form" />
          <QuoteForm compact defaultService="furniture-transport" />
          <ContactForm />
        </div>
      </Section>
      {(["light", "dark"] as const).map((tone) => (
        <Section key={tone} background={tone === "dark" ? "inverse" : "subtle"}>
          <div className="block-stack">
            <SectionHeading
              title={`Field and message states · ${tone}`}
              tone={tone}
              intro="Static design samples below are not submission receipts."
            />
            <div className="grid gap-6 md:grid-cols-2">
              <Field
                id={`sample-name-${tone}`}
                label="Name"
                hint="Default input with supporting text"
              />
              <Field
                id={`sample-email-${tone}`}
                label="Email"
                type="email"
                defaultValue="invalid"
                error="That does not look like an email address"
              />
              <Select
                id={`sample-select-${tone}`}
                label="Service"
                options={[
                  { label: "Furniture", value: "furniture" },
                  { label: "Equipment", value: "equipment" },
                ]}
              />
              <Select
                id={`sample-select-error-${tone}`}
                label="Required service sample"
                options={[{ label: "Select a service", value: "" }]}
                error="This one is needed"
              />
              <Textarea
                id={`sample-text-${tone}`}
                label="Message"
                rows={3}
                hint="Textarea sample"
              />
              <Textarea
                id={`sample-text-error-${tone}`}
                label="Message error sample"
                rows={3}
                error="A little more detail would help"
              />
            </div>
            <p className="font-bold">Success design samples, not sent enquiries</p>
            <FormMessage variant="success" form="quote" />
            <FormMessage variant="success" form="contact" />
            <FormMessage variant="error" />
            <FormMessage variant="preview" />
            <Button disabled variant={tone === "dark" ? "primary-dark" : "primary"}>
              Sending
            </Button>
          </div>
        </Section>
      ))}
      <div id="contact" className="sample-label">
        Contact details and closing call to action
      </div>
      <ContactDetails layout="grid" />
      <ContactDetails layout="stacked" showMap tone="dark" />
      <QuoteCTA
        title="Closing section · without phone"
        body={reviewBody[0]}
        showPhone={false}
        primaryCta={{ label: "Get a quote", href: "#forms" }}
      />
      <QuoteCTA
        title="Closing section · with phone placeholder"
        body={reviewBody[0]}
        primaryCta={{ label: "Get a quote", href: "#forms" }}
      />
    </>
  );
}
