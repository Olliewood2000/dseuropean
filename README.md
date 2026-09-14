# DS European staging

The current review is **Phase 4: Services hub and furniture template**, on
`phase/4-services`, based on `staging/website`. The user approved the homepage and PR #4
was merged into staging. Phase 4 awaits review. No merge into `main` is authorised.

Read `AGENTS.md`, the phase prompts and `docs/staging-review.md` before continuing.
The original specification and page documents remain unchanged.

## Local review

Use Node 22 and the locked packages:

```bash
npm ci
npm run dev
```

- [Services overview](http://localhost:3000/services): seven sections, seven image cards
  and five answered FAQs. The private-deliveries FAQ is omitted pending confirmation.
- [Furniture transport](http://localhost:3000/services/furniture-transport): the first
  service rendered through the shared ten-section template, with six supplied FAQs.
- [Homepage](http://localhost:3000/): approved Phase 3 assembly.
- [Component review](http://localhost:3000/dev/components): the reusable library.
- [Foundations review](http://localhost:3000/dev/foundations): tokens and chrome.

The other six service pages are not registered yet. Unbuilt destinations show a staging
explanation and return link. The furniture fleet link is `/about#fleet`; About and its
anchor are Phase 6, so the destination check remains pending until then.

## What needs review

Check the Services overview, then follow its Furniture card and check the full service
page. Confirm the headings, image briefs, handling lists, coverage, lead-time copy,
FAQs and related links at phone, tablet and desktop sizes. Approve the template before
Phase 5 creates the remaining service content files.

All supplied text is preserved, including the furniture packaging-removal `*(verify)*`
marker. Client claims, photos, private deliveries and publication permissions still need
sign-off before launch. Contact values remain visible `PLACEHOLDER_` entries. Forms in
the component gallery validate locally only; email and uploads remain Phase 7.

## Implementation and checks

`content/services/types.ts` defines the required ServicePage contract. Furniture is the
only registered service in `content/services/pages.ts`. The registry follows the ordered
service index and drives `generateStaticParams`; unknown slugs return 404. Shared region
copy lives in `content/coverage.ts`. All page assembly uses the existing blocks.

```bash
npm run build
npm run lint
npx tsc --noEmit
```

Build, lint and type checks pass. A separate compile check verified that omitting each
of 13 required service fields, or the hero subtitle, is rejected. Rendered copy checks
cover 57 hub values and 82 furniture values; none are missing, apart from the explicitly
excluded unresolved FAQ. Browser checks cover 390px, 768px and 1440px. No new component
or dependency was added. Full verification notes and limitations are in
`docs/staging-review.md`. Automated checks do not replace the user's Phase 4 review.

Staging stays `noindex, nofollow`. Breadcrumb and FAQ schema render from the displayed
content. Canonical URLs, absolute schema URLs and other SEO plumbing remain Phase 9.
