import { absoluteUrl } from "@/lib/site-origin";
import { JsonLd } from "@/components/JsonLd";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Icon } from "@/components/primitives/Icon";

export interface BreadcrumbsProps {
  items: readonly { label: string; href?: string }[];
  tone?: "light" | "dark";
}

export function Breadcrumbs({ items, tone = "light" }: BreadcrumbsProps) {
  if (items.length < 2) return null;
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(index < items.length - 1 && item.href ? { item: absoluteUrl(item.href) } : {}),
    })),
  };
  return (
    <>
      <nav
        aria-label="Breadcrumb"
        className={`text-body-sm ${tone === "dark" ? "text-ink-inverse-muted" : "text-ink-muted"}`}
      >
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((item, index) => (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {index > 0 && (
                <Icon
                  icon={ChevronRight}
                  size={20}
                  tone={tone === "dark" ? "accent-on-dark" : "muted"}
                />
              )}
              {index === items.length - 1 ? (
                <span aria-current="page">{item.label}</span>
              ) : item.href ? (
                <Link href={item.href} className="underline-offset-4 hover:underline">
                  {item.label}
                </Link>
              ) : (
                <span>{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd data={schema} />
    </>
  );
}
