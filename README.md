# DS European staging

The current review is **Phase 6: Storage and About**, on `phase/6-company`, based
on `staging/website`. The user approved continuing after the Phase 5 review and
PR #6 was merged into staging. Unanswered client decisions remain open; no human
gate is marked passed and no merge into `main` is authorised.

Read `AGENTS.md`, the phase prompts and `docs/staging-review.md` before continuing.
The original specification and page documents remain unchanged.

## Local review

Use Node 22 and the locked packages:

```bash
npm ci
npm run dev
```

- [Storage](http://localhost:3000/storage): seven sections, five answered FAQs,
  project storage, consolidation, process and audiences.
- [About](http://localhost:3000/about): eight sections, company and team copy,
  four supplied figures, fleet and shared coverage.
- [Fleet anchor](http://localhost:3000/about#fleet): now reachable from the
  Furniture and Equipment service pages, clear of the fixed header.
- [Services](http://localhost:3000/services) and [Home](http://localhost:3000/):
  retain their reviewed versions. Development galleries remain available.

## What needs review

Review Storage and About on desktop, tablet and phone. Photos remain supplied
image briefs. Storage uses the specified text-only page hero; its conflicting
hero image brief is preserved in content for a later agreed composition change.
The H1 follows the explicit hero title rather than the differing metadata table.

Recent Jobs is not built: its brief requires asking whether job locations may be
published before building the page. That question is pending. Existing Home and
coverage references remain staging drafts, not publication permission.

Private Items remains unbuilt pending confirmation that private customers are
accepted. Equipment's ownership section and About's ownership sentence remain
omitted pending the HIAB/Moffett decision. Storage's unanswered location/security
FAQ is omitted from the page and schema. No capacity, security or insurance claim
has been added. Other supplied claims and team figures still need launch sign-off.

Forms and email delivery remain Phase 7. Contact values remain `PLACEHOLDER_`
entries. Unbuilt destinations return a staging explanation and a return link.

## Implementation and checks

Storage and About each have a typed content module and an assembled page, using
existing blocks. Shared fleet data is reused; About preserves its supplied Moffett
capacity wording. No component, CSS, dependency or earlier page changed.

```bash
npm run build
npm run lint
npx tsc --noEmit
```

Production build, lint and standalone type checks pass. Rendered copy checks cover
126 expected values, with explicit exclusions for the pending ownership sentence,
blocked Storage FAQ and non-rendered hero image brief. Browser checks at 390, 768
and 1440 pixels found no overflow, clipped briefs or duplicate IDs. Fleet links
from both service pages land below the condensed header.

The Recent Jobs portion and full human Phase 6 gate remain pending. See
`docs/staging-review.md` for exact evidence and exceptions. Staging remains
`noindex, nofollow`; launch SEO and publication remain later phases.
