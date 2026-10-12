import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { site } from "@/content/site";

export default function NotFound() {
  return (
    <Section background="inverse" padding="generous">
      <div className="space-y-6">
        <h1 className="text-display-md text-ink-inverse">Page not found</h1>
        <p className="max-w-measure text-ink-inverse-muted">
          That page does not exist, or it has moved. Try the services page, or ring us on{" "}
          {site.phone} and we will point you in the right direction.
        </p>
        <Link
          href="/services"
          className="inline-block text-accent-on-dark underline underline-offset-4"
        >
          See our services
        </Link>
        <Link
          href="/quote"
          className="ml-6 inline-block text-accent-on-dark underline underline-offset-4"
        >
          Get a quote
        </Link>
      </div>
    </Section>
  );
}
