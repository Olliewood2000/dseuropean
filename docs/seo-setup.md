# SEO and analytics setup

Phase 9 prepares metadata, structured data, sharing images, sitemap and robots for
the 15 implemented public pages. Staging is still excluded from indexing and has
no active analytics. This document is a setup checklist, not launch approval.

## Origins and indexing

- Local builds use `NEXT_PUBLIC_SITE_URL` or `http://127.0.0.1:3000`.
- Vercel Preview builds always use the immutable `VERCEL_URL` deployment origin,
  even if a production URL exists in shared environment settings.
- Eventual Vercel Production builds require an HTTPS `NEXT_PUBLIC_SITE_URL` origin
  with no credentials, path, query or fragment.
- Indexing requires `SITE_INDEXING_ENABLED=true`, `VERCEL_ENV=production`, and
  `site.domain` set to the same confirmed HTTPS origin. All three conditions must
  hold. Keep the flag false until the separate launch review is complete.

While indexing is disabled, pages say noindex/nofollow and robots disallows `/`.
The sitemap is available for review but is not advertised in robots. When launch
is approved, robots allows public routes, excludes `/dev/` and `/api/`, and points
to the sitemap. Developer pages keep their own noindex setting.

The sitemap is generated from `content/seo-pages.ts`, including the registered
service modules automatically. Private deliveries and Recent Jobs are excluded
while their routes remain unbuilt. No build-time `lastModified` dates are invented.
Add a newly approved non-service page to the registry when its route is built.

Canonical-domain, www/apex and alternate-domain redirects remain blocked on the
client's domain decision. Next's trailing-slash 308 redirect is verified. Existing
site URLs still require a crawl and explicit mapping before launch; no blanket
homepage redirect has been introduced.

## Search descriptions and structured data

All supplied titles and descriptions remain verbatim. Thirteen of the fifteen
built descriptions miss the brief's 140 to 158 character target. The author needs
to approve replacements or an exception; do not silently trim or generate copy.

| Page | Current description length |
|---|---:|
| Home | 190 |
| Services | 166 |
| Furniture | 179 |
| Retail displays | 155 |
| Exhibitions | 146 |
| Office relocations | 167 |
| Equipment | 165 |
| Business deliveries | 162 |
| Storage | 165 |
| About | 163 |
| Quote | 126 |
| Contact | 108 |
| Privacy | 63 |
| Cookies | 39 |
| Terms | 86 |

Organization and LocalBusiness are emitted in the root layout. Services identify
that Organization as provider. Services hub and Contact have CollectionPage and
ContactPage respectively. Breadcrumbs have absolute URLs. FAQ data comes from the
same items rendered on the page. One JsonLd helper escapes markup before embedding.
No rating or review schema is emitted. Unknown contact details are omitted from
machine-readable data; visible page placeholders are retained for client review.

## Sharing images

Each route has a Next `opengraph-image.tsx` entry. Titles come from the supplied
content; Home uses its supplied OG title. Next's metadata file convention supplies
the actual image URL for Open Graph and the Twitter card, including route-group
suffixes and cache keys. Do not construct legal-page image paths manually.

The renderer uses next/og, 1200 by 630 dimensions, the supplied short white SVG,
Montserrat Bold and the existing CSS colour/radius tokens. The 48,520-byte TTF is
used only for server image rendering; it does not add a browser font weight.
`assets/fonts/OFL.txt` preserves its licence. The font was obtained from Google's
Montserrat 700 font CSS, with its source recorded in `assets/fonts/README.md`.

Vercel's current preview protection prevents unauthorised sharing crawlers from
fetching pages and images. Local image rendering and metadata checks do not prove
that a public WhatsApp or social preview can fetch the protected deployment. Test
public sharing again on an owner-approved accessible deployment before launch.

## Analytics and conversion events

The two packages specified by the brief are installed: `@vercel/analytics` 2.0.1
and `@vercel/speed-insights` 2.0.0. Preparation is not approval to enable tracking.
The user's analytics choice remains unanswered. No Vercel project analytics
settings or paid plan were changed.

Activation requires all of:

1. Client approval of the Vercel cookieless setup, recorded by replacing the
   analytics placeholder in `content/site.ts` with `vercel-cookieless`.
2. Owner configuration of Web Analytics and Speed Insights in Vercel, including
   confirmation that the plan supports the desired custom events.
3. `SITE_ANALYTICS_ENABLED=true` in an approved Production deployment. Preview
   and local builds cannot load the tracking component through this setting.

The subscriber sends `quote_submitted` or `contact_submitted` after the existing
form success event, and `phone_click` or `whatsapp_click` for the relevant links.
It sends event names only. The shared beforeSend filter drops unregistered paths
and external URLs and strips queries/fragments. It does not send form fields,
uploaded filenames or contact destinations. Listeners are removed on unmount.

The existing form spam-discard response is still 200 by brief design, so client
success analytics alone cannot prove delivery. Keep spam/delivery reporting
separate and retain the real inbox acceptance tests from Phase 7.

Before marking the analytics gate complete, verify actual successful form events,
telephone/WhatsApp events, page views, field-performance data, absence of cookies,
and transmitted payloads in the browser and Vercel dashboard. Reconcile Privacy
and Cookies wording with the final setup. No Google Analytics, Ads, consent system,
localStorage or sessionStorage was introduced.

## Verification commands

```bash
npm run build
npm run lint
npx tsc --noEmit
node tests/seo.cjs
# With the checked production build running locally:
node tests/seo.cjs --http
```

The isolated suite exercises preview/production separation, launch gates,
metadata/sitemap coverage, schema references and escaping, and tracking redaction.
HTTP checks inspect every public route's title, description, canonical, social
metadata, schema and generated PNG, as well as staging robots and slash redirects.
Human gate review, public crawler access and active tracking remain separate.

Implementation references: [Next metadata](https://nextjs.org/docs/app/api-reference/functions/generate-metadata),
[generated images](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image),
[Vercel analytics configuration](https://vercel.com/docs/analytics/package),
[Speed Insights configuration](https://vercel.com/docs/speed-insights/package).
