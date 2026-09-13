import Image from "next/image";
import Link from "next/link";
import { isPlaceholder, site } from "@/content/site";
import { services } from "@/content/services";
import { companyLinks, legalLinks } from "@/content/navigation";
import { contactLinks } from "@/lib/contact";
import { MotifShape } from "@/components/primitives/MotifShape";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="site-footer" id="site-footer">
      <MotifShape position="right" variant="tint" tone="white" size="lg" opacity={0.08} />
      <Container>
        <div className="relative grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <Link href="/" aria-label={`${site.name} home`} className="inline-block">
              <Image src={site.logos.shortWhite} alt={site.name} width={96} height={96} />
            </Link>
            <p className="text-body-sm text-ink-inverse-muted">{site.positioning}</p>
            <address className="text-body-sm not-italic text-ink-inverse-muted">
              {site.address.street}
              <br />
              {site.address.locality}, {site.address.town}
              <br />
              {site.address.region}, {site.address.postcode}
            </address>
            <Link href="/about" className="footer-link">
              About DS European
            </Link>
          </div>
          <nav aria-label="Footer services">
            <h2 className="mb-6 text-h4 text-ink-inverse">Services</h2>
            <ul className="space-y-3 text-body-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link className="footer-link" href={`/services/${service.slug}`}>
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link className="footer-link" href="/services">
                  All services
                </Link>
              </li>
            </ul>
          </nav>
          <nav aria-label="Footer company">
            <h2 className="mb-6 text-h4 text-ink-inverse">Company</h2>
            <ul className="space-y-3 text-body-sm">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link className="footer-link" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="min-w-0">
            <h2 className="mb-6 text-h4 text-ink-inverse">Contact</h2>
            <ul className="space-y-4 text-body-sm">
              <li>
                {contactLinks.phone ? (
                  <a className="footer-link" href={contactLinks.phone}>
                    {site.phone}
                  </a>
                ) : (
                  <span className="placeholder-value">{site.phone}</span>
                )}
              </li>
              <li>
                {contactLinks.email ? (
                  <a className="footer-link" href={contactLinks.email}>
                    {site.email}
                  </a>
                ) : (
                  <span className="placeholder-value">{site.email}</span>
                )}
              </li>
              <li>
                {contactLinks.whatsapp ? (
                  <a className="footer-link" href={contactLinks.whatsapp}>
                    WhatsApp
                  </a>
                ) : (
                  <span className="placeholder-value">{site.whatsapp}</span>
                )}
              </li>
              <li>
                <Link href="/contact" className="footer-link">
                  {site.hours}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom relative flex flex-wrap items-start justify-between gap-6 border-t border-border-inverse py-8 text-micro text-ink-inverse-muted">
          <div className="space-y-2">
            <p>
              © {new Date().getFullYear()} {site.legalName}
            </p>
            {!isPlaceholder(site.companyNumber) && (
              <p>Company registration: {site.companyNumber}</p>
            )}
            {!isPlaceholder(site.vatNumber) && <p>VAT: {site.vatNumber}</p>}
          </div>
          <nav aria-label="Legal">
            <ul className="flex flex-wrap gap-6">
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="footer-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
