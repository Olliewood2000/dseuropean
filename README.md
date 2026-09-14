# DS European staging

The current review is **Phase 5: remaining business service pages**, on
`phase/5-services`, based on `staging/website`. The user approved Phase 4 and PR #5
was merged into staging. Phase 5 awaits review and two client decisions. No merge
into `main` is authorised.

Read `AGENTS.md`, the phase prompts and `docs/staging-review.md` before continuing.
The original specification and page documents remain unchanged.

## Local review

Use Node 22 and the locked packages:

```bash
npm ci
npm run dev
```

Start with the [Services overview](http://localhost:3000/services) and follow the
five newly working business cards:

- [Retail Displays](http://localhost:3000/services/retail-display-transport)
- [Exhibitions](http://localhost:3000/services/exhibition-transport)
- [Office Relocations](http://localhost:3000/services/office-relocations)
- [Equipment](http://localhost:3000/services/equipment-transport)
- [Business Deliveries](http://localhost:3000/services/business-deliveries)

[Furniture](http://localhost:3000/services/furniture-transport), the Services hub,
[Home](http://localhost:3000/), [components](http://localhost:3000/dev/components)
and [foundations](http://localhost:3000/dev/foundations) retain their earlier versions.

## What needs review

Check each page's supplied headings, handling lists, image briefs, feature section,
coverage, lead times, FAQs and related links on phone, tablet and desktop.

Private Items is not built or registered: its page document explicitly requires the
client to confirm that private customers are accepted before building it. Existing
seven-category navigation and grids remain a staging draft. The unresolved hub FAQ
is still omitted. No client answer has been assumed.

Equipment's ownership FeatureBand is omitted until HIAB and Moffett ownership is
confirmed. The remaining Equipment page has nine sections; the other business pages
have ten. Supplied `*(verify)*` markers remain visible and claims still need client
sign-off before launch. Contact values remain `PLACEHOLDER_` entries.

The fleet link is `/about#fleet`; About and Storage are Phase 6. Forms are Phase 7.
Unbuilt destinations show a staging explanation and return link. Do not begin the
next phase before review and resolution of the outstanding phase decisions.

## Implementation and checks

The five new content files use the existing `ServicePage` contract and shared
coverage. The ordered registry now exposes six business routes. No component,
template, style or dependency changed. Unknown and private service slugs return 404.

```bash
npm run build
npm run lint
npx tsc --noEmit
```

Build, lint and type checks pass. Rendered copy checks cover 478 supplied values
across all six business pages, excluding only the pending ownership section, with
none missing. All 36 FAQ questions and answers are distinct. Related links match
the page documents and every business page links to Storage.

Browser checks cover all five new pages at 390px, 768px and 1440px, with no horizontal
overflow, clipped briefs or duplicate IDs. Full verification notes and limitations
are in `docs/staging-review.md`. These checks do not pass the human Phase 5 gate.

Staging stays `noindex, nofollow`. Canonical URLs, absolute schema URLs and other
SEO plumbing remain Phase 9.
