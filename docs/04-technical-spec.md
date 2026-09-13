# 04. Technical Specification

Stack, routing, data, forms, metadata and performance. The build follows this document. Where it conflicts with a page document, the page document wins on content and this wins on implementation.

---

## 1. Stack

| Layer | Choice |
|---|---|
| Framework | Next.js, App Router, latest stable |
| Language | TypeScript, `strict: true` |
| Styling | Tailwind v4 with the `@theme` config from `01-brand-and-tokens.md`. v3 fallback config is in the same document |
| Icons | `lucide-react`, wrapped per tokens section 14 |
| Forms | React Hook Form plus Zod, schema shared between client and server |
| Email | Resend |
| Hosting | Vercel |
| Analytics | Vercel Analytics and Speed Insights. Cookieless, see section 9 |
| CMS | None |

No database. No auth. No client state library. If the build reaches for any of these, something has gone wrong.

---

## 2. Routes

| Route | Rendering | Notes |
|---|---|---|
| `/` | Static | |
| `/services` | Static | Hub |
| `/services/[slug]` | Static, `generateStaticParams` | 7 pages |
| `/storage` | Static | Top level, not under services |
| `/recent-jobs` | Static | Single page for now, see the page doc |
| `/about` | Static | Must expose a stable `#fleet` anchor |
| `/quote` | Static shell, dynamic route handler for submission | |
| `/contact` | Static | |
| `/privacy`, `/cookies`, `/terms` | Static | |
| `/dev/components` | Static | `noindex`, excluded from sitemap. Kitchen sink page |
| `/api/quote`, `/api/contact` | Route handlers | POST only |

Service slugs, fixed:

```
furniture-transport
retail-display-transport
exhibition-transport
office-relocations
equipment-transport
business-deliveries
private-deliveries
```

Trailing slashes off. Lowercase, hyphenated, no other casing accepted.

### The `#fleet` anchor

`/about#fleet` is linked from the furniture and equipment service pages. The `id` must survive refactors. Set it on the `Section` wrapper, not on an inner heading, and add `scroll-margin-top` equal to the condensed header height so the anchor does not land under the sticky header.

---

## 3. Content model

Page content lives in typed TypeScript modules, not MDX and not hardcoded in components. The client will not be editing this site, so MDX buys nothing and costs type safety.

```
/content
  site.ts               Phone, email, WhatsApp, address, hours, social. Single source
  coverage.ts           The CoverageList data, shared by six pages
  services/
    index.ts            Ordered array, used by nav, grids and generateStaticParams
    furniture-transport.ts
    ...
  jobs.ts               Recent jobs entries
  fleet.ts              Vehicle list, used on Home and About
```

Every service file conforms to one interface, so the `[slug]` template renders all seven and a missing field is a type error rather than an empty section.

```ts
export interface ServicePage {
  slug: string;
  nav: { title: string; excerpt: string };
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; subtitle: string; imageBrief: string };
  whatWeMove: SplitFeatureContent;
  handling: SplitFeatureContent;
  process: { number: string; title: string; body: string; icon: string }[];
  featureBand: FeatureBandContent | null;
  leadTimes: { title: string; body: string[] };
  faqs: { question: string; answer: string }[];
  related: string[];          // slugs and /storage
  quoteCta: { title: string; body: string };
}
```

**`site.ts` is the only place the phone number, email and address are written.** Every appearance on the site imports from it. There are currently three phone numbers in circulation for this client, and a single source is what stops two of them ending up on the site.

---

## 4. Metadata

Next Metadata API. `metadataBase` set from an env var so previews do not emit production URLs.

Root layout template:

```ts
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
  title: {
    default: "DS European | Specialist Transport & Installation",
    template: "%s | DS European",
  },
  robots: { index: true, follow: true },
  openGraph: { type: "website", locale: "en_GB", siteName: "DS European" },
};
```

Per page titles come from the page documents. Where a document specifies the full title including the brand, set it directly rather than through the template.

Canonical URL on every page, absolute, on the confirmed canonical domain.

### Open Graph images

Generate dynamically with `next/og` `ImageResponse` at `/opengraph-image.tsx` per route group. Navy `#000056` ground, white Montserrat Bold title, the short logo bottom left, one motif shape bleeding off the right. 1200 by 630.

Dynamic OG beats a single static image here because most sharing will be of specific service pages.

---

## 5. Structured data

JSON-LD, rendered through a single `<JsonLd />` component taking an object. No third party library.

| Page | Schema |
|---|---|
| Root layout | `Organization` and `LocalBusiness`, with `address`, `telephone`, `email`, `areaServed` GB and EU, `openingHoursSpecification` covering 24/7 |
| All pages except Home | `BreadcrumbList` |
| Service pages | `Service` with `provider` referencing the Organization |
| Any page with an FAQ block | `FAQPage`, emitted from the same data the block renders |
| `/services`, `/recent-jobs` | `CollectionPage` |
| `/contact` | `ContactPage` |

**No `Review`, `AggregateRating` or `Rating` markup.** None exists and fabricating it is both a policy violation and a manual action risk.

`openingHoursSpecification` for 24/7:

```json
{
  "@type": "OpeningHoursSpecification",
  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
  "opens": "00:00",
  "closes": "23:59"
}
```

---

## 6. Forms

### Architecture

Client validates with Zod on blur. Submits JSON to a route handler. The handler re-validates against the same schema, checks spam signals, sends via Resend, returns a result. The client swaps the form for a success state in place. **No redirect to a thank you page.**

### Spam handling

Three layers, no CAPTCHA:

1. **Honeypot.** A visually hidden field named something plausible such as `company_website`. Any value means a bot. Return 200 and discard, so the bot does not learn.
2. **Timestamp.** A hidden field holding the mount time. Submission under 3 seconds after mount is discarded the same way.
3. **Vercel WAF** rate limiting on the API routes.

CAPTCHA is not used. It costs real completions from a B2B audience and these three catch almost everything at this volume. If spam becomes a genuine problem, add Cloudflare Turnstile rather than reCAPTCHA.

### File uploads

**Cap is 4MB, not 10MB.** An earlier draft of the quote page document specified 10MB, which fails at the platform: Vercel serverless functions cap the request body at roughly 4.5MB, so the upload never reaches our code. The quote page document has been corrected to match this section.

Implementation:

- Maximum 3 images
- Client side downscale before upload: longest edge 1920px, JPEG quality 0.8, using a canvas
- Hard cap 4MB total after compression, validated client and server side
- `image/jpeg`, `image/png`, `image/webp`, `image/heic` accepted. HEIC matters, because half the photographs a site manager sends from a phone are HEIC
- Attached to the Resend email rather than stored

If larger uploads are ever needed, move to Vercel Blob with a client side upload and send URLs in the email. Not needed for launch.

### Email

Two templates, plain and legible rather than designed. Marketing HTML emails land in spam more often and nobody needs a hero image on an enquiry notification.

- **To DS European.** Subject carries the service and the collection town so it is scannable in a list: `Quote request: Furniture, Maidstone to Lyon`. `replyTo` set to the enquirer so a reply goes straight back. Every field in the body, including empty optional ones marked as not supplied.
- **To the enquirer.** Short confirmation of what they sent, plus the phone number.

Sending domain must be verified in Resend with SPF and DKIM before launch. Sending from an unverified domain puts every notification in junk, which is a silent and expensive failure.

### Accessibility

Labels above fields, always visible, never placeholder-only. Errors linked with `aria-describedby`. `aria-live="polite"` region for the submission result. Focus moves to the success heading on completion.

---

## 7. Images

Performance is a primary requirement on this site, not a final pass. Images are where it is won or lost.

### Two categories, handled differently

**Site assets.** Photography supplied by the client, committed to the repo, controlled by us.

**User uploads.** Photographs attached to a quote request, arriving from a stranger's phone. Covered in section 6, not here. These cannot be pre-processed and the 4MB cap applies to them alone.

### Source assets

Supply good quality sources and let the optimiser do the compression. Do not compress twice.

`next/image` transcodes to AVIF where the browser supports it, which is 20 to 30 percent smaller than WebP. Transcoding an already heavily compressed WebP into AVIF compresses a degraded image, and it shows in gradients, skin tones and flat walls. WebP sources are fine. Aggressively optimised WebP sources are not.

| Use | Max source width | Source quality |
|---|---|---|
| Home hero | 2400px | 85 |
| Service and page heroes | 2000px | 85 |
| SplitFeature media | 1600px | 85 |
| Grid and card images | 1000px | 85 |
| OG images | Generated, not supplied | n/a |

Never commit a source larger than the table above. A 6000px camera original in the repo slows every build and serves nobody.

### Logo assets

`public/logo/` holds four SVG files: long and short format, each in white and dark variants. SVG is used throughout, since the logo renders at sizes from a footer mark to a full mobile drawer nav, and SVG holds up cleanly across that whole range.

- `next/image` throughout, via the `ImageFrame` primitive. Never a bare `<img>`
- `formats: ["image/avif", "image/webp"]` in `next.config`
- Local assets only, imported statically so blur placeholders generate at build
- `priority` on the Home hero image only. Every other image lazy
- **`sizes` set correctly on every fill image.** A missing `sizes` serves a 2000px file to a phone and is the single most common cause of a poor LCP on a site like this
- Aspect ratio always declared, so nothing shifts as images load

### Per page image budget

Measured as total image bytes transferred on a mobile viewport, after optimisation:

| Page | Budget |
|---|---|
| Home | 500KB |
| Service page | 350KB |
| Any other page | 300KB |

If a page exceeds its budget, the fix is fewer images or smaller rendered dimensions, not heavier compression. Check the budget in the network panel at 390px wide, not in Lighthouse.

### A note on launch weight

Most image slots ship as `ImagePlaceholder`, which renders markup rather than an image. Launch performance will therefore look excellent and will degrade as real photography arrives. Re-measure against these budgets every time a batch of client photos is added, rather than assuming the launch numbers still hold.

---

## 8. Fonts

```ts
import { Montserrat } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
  display: "swap",
  preload: true,
});
```

Two weights only. Adding weights that the guidelines do not specify also costs load time.

---

## 9. Analytics and tracking

**Cookieless by default, and therefore no consent banner anywhere on the site.**

- Vercel Analytics for traffic
- Vercel Speed Insights for field performance data

Neither sets cookies and neither collects personal data, which is what keeps `/cookies` to two paragraphs.

### Conversion events

Fire on successful form submission, not on button click:

| Event | Fired on |
|---|---|
| `quote_submitted` | Quote form 200 response |
| `contact_submitted` | Contact form 200 response |
| `phone_click` | `tel:` link click |
| `whatsapp_click` | WhatsApp link click |

Phone and WhatsApp clicks matter more than form submissions on this site. Most of this audience rings.

### If Google Ads is added later

Ollie runs Google Ads for other clients and it is likely here. That changes things:

- GA4 and Google Ads set cookies, so a consent management platform and a banner become necessary
- Google Consent Mode v2 is required for EEA and UK traffic
- The `/cookies` page needs the full cookie table version described in its page document

**Decide before launch rather than retrofitting.** Adding consent infrastructure to a live site is materially more work than building it in, and the cookieless setup above is genuinely sufficient until there is paid traffic to measure.

---

## 10. Redirects and domains

### Blocked on a client decision

The canonical domain is still unconfirmed. The van livery says `.co.uk`, the email says `.com`. Once decided:

| From | To | Type |
|---|---|---|
| Non-canonical domain, all paths | Canonical equivalent | 301 |
| `www` | Apex, or the reverse, consistently | 301 |
| `http` | `https` | 301, plus HSTS |
| Any trailing slash URL | Non-trailing | 308, handled by Next |

### Old site URLs

**Crawl the existing site before launch and map every URL that currently ranks or has links to it.** Any that do not have an obvious equivalent get a 301 to the closest page, not to the homepage. Blanket homepage redirects lose the value of the link.

This has not been done yet and should happen before the build finishes, not after it goes live.

---

## 11. SEO plumbing

- `app/sitemap.ts` generating from the routes, excluding `/dev/components`
- `app/robots.ts` allowing everything except `/dev/` and `/api/`
- `lang="en-GB"` on the html element
- Every page reachable from the header or footer. No orphans
- Google Search Console verified and the sitemap submitted on launch day
- Google Business Profile claimed and the address consistent with the site to the character

---

## 12. Performance targets

Measured on a throttled mobile connection, not a desktop test:

| Metric | Target |
|---|---|
| LCP | Under 2.0s |
| CLS | Under 0.05 |
| INP | Under 200ms |
| Lighthouse Performance | 95+ |
| Lighthouse Accessibility | 100 |
| Lighthouse Best Practices | 100 |
| Lighthouse SEO | 100 |

Accessibility at 100 is not aspirational. It is achievable on a site like this and anything less indicates something was skipped.

### The things that will cost you

- Missing `sizes` on fill images
- The hero image without `priority`
- Oversized source assets, or sources compressed twice before the optimiser sees them
- Exceeding the per page image budgets in section 7 once real photography lands
- The map on Contact, if it loads eagerly. Static and lazy, per the page doc
- Layout shift from the sticky header condensing. Reserve the height

---

## 13. Accessibility

WCAG 2.2 AA.

- Semantic landmarks: one `main`, `header`, `footer`, `nav`
- Skip link, first focusable element, visible on focus
- Focus visible on everything, 2px `focus` ring at 2px offset, never removed
- Mobile drawer: focus trapped, Escape closes, body scroll locked, focus returns to the trigger
- Services dropdown: keyboard operable, not hover only
- Hit targets 44 by 44px minimum
- `prefers-reduced-motion` respected globally
- Test with keyboard only and with VoiceOver before launch

---

## 14. Security headers

Set in `next.config`:

| Header | Value |
|---|---|
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` |
| `X-Content-Type-Options` | `nosniff` |
| `X-Frame-Options` | `DENY` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` |
| `Content-Security-Policy` | Scoped to self, Vercel Analytics and the map provider. Tighten after the build, before launch |

---

## 15. Environment variables

```
NEXT_PUBLIC_SITE_URL        Canonical origin, no trailing slash
RESEND_API_KEY
ENQUIRY_TO_EMAIL            Where form submissions land
ENQUIRY_FROM_EMAIL          Verified sending address on the site domain
NEXT_PUBLIC_MAPS_KEY        Only if the static map provider requires one
```

No secret is ever prefixed `NEXT_PUBLIC_`. Every variable set in Vercel for both preview and production.

---

## 16. Error handling

- `app/not-found.tsx` and `app/error.tsx` using the microcopy in `03-content-rules.md` section 10
- Both carry the header, the footer and the phone number. An error page without a phone number on a site like this loses the enquiry
- `app/global-error.tsx` as a minimal fallback
- Form failures never lose what the user typed

---

## 17. Repository

```
/app
/components       primitives, layout, blocks, forms
/content          typed content modules
/lib              schemas, email, utils
/public           images, logos, favicons
/docs             this document set, committed alongside the code
```

Commit the `/docs` folder into the repo. The build model reads from it, and six months from now it is the only record of why any of these decisions were made.

---

## 18. Definition of done

- [ ] All 17 routes build and render
- [ ] `/dev/components` renders every block in every variant
- [ ] Both forms send and the emails arrive, tested on a real address
- [ ] Sending domain verified with SPF and DKIM
- [ ] Lighthouse targets met on mobile
- [ ] Keyboard and screen reader pass
- [ ] No `*(verify)*` markers remain in shipped content
- [ ] Phone, email and address identical sitewide, sourced from `site.ts`
- [ ] Redirects in place and old URLs mapped
- [ ] Sitemap submitted, Search Console verified
- [ ] Security headers present
- [ ] No console errors or warnings
