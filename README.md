# DS European staging

Current review: **Phase 7, Quote and Contact**, on `phase/7-forms`, targeting
`staging/website`. PR #7 was merged after the user requested the next phase.
Main remains unchanged. Earlier unanswered client decisions remain open.

## Review

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
```

The isolated route tests cover both notification paths, validation, spam controls,
request/file limits, provider failure and retry idempotency. Their email transport
is mocked; no real messages are sent. Build/lint/types and browser checks do not
replace real inbox tests or the human Phase 7 gate.

Both pages retain noindex/nofollow. Canonical SEO, analytics integration, legal
pages and launch work remain in later phases. No Phase 8 work is included.
