# DS European staging

Current review: **Phase 9, SEO and sharing previews**, on `phase/9-seo`, targeting
`staging/website`. PR #9 was merged after the user requested the next phase.
Main remains unchanged. Earlier unanswered client decisions remain open.

## Review

- Every built page now has absolute canonical and social metadata, structured
  data, and a branded 1200 by 630 sharing image using the supplied title and logo.
- `/sitemap.xml` lists the 15 implemented public pages. `/robots.txt` blocks
  staging crawling. Indexing and analytics remain disabled by default.
- The two documented Vercel analytics packages are prepared behind explicit
  production/client-decision gates. Domain choice, live analytics approval,
  description-length exceptions and public sharing tests remain outstanding.
- See `docs/seo-setup.md` for configuration, verification and remaining decisions.

Earlier review pages:

- `/privacy`, `/cookies` and `/terms`: supplied legal drafts, narrow prose,
  highlighted unresolved details and working footer links. Last updated remains
  a review-date placeholder. These are staging drafts awaiting client review.
- Cookie and analytics statements need confirmation against the eventual setup.
  Neither analytics nor application anti-spam cookies are currently enabled.
- Terms cover website use only. Existing conditions of carriage must be supplied;
  no carriage terms, registration numbers or retention periods were invented.

- `/quote`: four sections, six required fields, optional detail disclosure,
  photograph attachments and the supplied reassurance aside.
- `/contact`: five sections, four contact methods, message form, directions and
  a static-map slot. Real contact values remain placeholders.
- Service-page quote buttons now carry the selected service into `/quote`.
- `/dev/components` keeps non-sending gallery forms by default.

The forms are connected to their route handlers. **Live email delivery is disabled**
until the approved inbox, sender/domain credentials and test window are supplied.
An attempted real submission currently shows the supplied failure message and
keeps the fields. It does not pretend that an enquiry reached the company.

See `docs/enquiry-setup.md` for environment variables and the remaining checks:
real email arrival, SPF/DKIM, WAF configuration, map settings and device photo tests.
HEIC originals can attach within the cap when the browser cannot decode them;
universal HEIC resizing needs an approved extra decoder and remains pending.
Recent Jobs, private customers and equipment ownership are still client decisions.

## Run and verify

Use Node 22 and locked dependencies:

```bash
npm ci
npm run dev
npm run build
npm run lint
npx tsc --noEmit
node tests/enquiries.cjs
node tests/seo.cjs
# With npm run start running separately:
node tests/seo.cjs --http
```

The isolated route tests cover both notification paths, validation, spam controls,
request/file limits, provider failure and retry idempotency. Their email transport
is mocked; no real messages are sent. Build/lint/types and browser checks do not
replace real inbox tests or the human Phase 7 gate.

All review pages retain noindex/nofollow under the user's staging-only instruction,
including legal pages whose production brief calls for indexing. Live-domain
redirects, active analytics, performance/accessibility acceptance and launch work
remain pending. No Phase 10 work is included. See `docs/staging-review.md` for
verification and outstanding decisions.
