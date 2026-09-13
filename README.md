# DS European staging

The current review is **Phase 1: foundations and chrome**, on `phase/1-chrome`, based on
`staging/website`. The user confirmed that each phase is reviewed before the next starts.
The Phase 1 pull request targets staging. Do not merge or push this work to `main` without
an explicit release decision.

Read `AGENTS.md`, the phase prompts and `docs/staging-review.md` before continuing.
The original specification and page copy remain unchanged.

## Local preview

Use Node 22 and the locked dependencies:

```bash
npm ci
npm run dev
```

Open [the foundations review](http://localhost:3000/dev/foundations). The root redirects
there temporarily. This page exercises the shared chrome and Section variants; it is not
the final homepage. Future page links currently display the staging not-found page with
a return link. No Phase 2 blocks have been assembled.

Montserrat is loaded through `next/font/google`, at weights 400 and 700. Lucide is the
only dependency added in Phase 1, as specified in the brief. Contact details remain in
`content/site.ts`; `PLACEHOLDER_` values never become telephone, email or WhatsApp links.
`.env.example` lists future integration settings. Keep secrets in ignored environment files.

## Validation and review

```bash
npm run build
npm run lint
npx tsc --noEmit
```

Review the browser checklist at 390px, 768px and 1440px. Automated and agent browser checks
do not replace human approval of Gate 1. Staging metadata remains `noindex, nofollow`.
The production homepage is scheduled for Phase 3, after the Phase 2 component review.
