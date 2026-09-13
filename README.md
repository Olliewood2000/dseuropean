# DS European staging

The current review is **Phase 3: Home**, on `phase/3-home`, based on `staging/website`.
The user approved Phase 2, which was merged into staging via PR #3. Phase 3 awaits review.
No production release or merge to `main` is authorised.

Read `AGENTS.md`, the phase prompts and `docs/staging-review.md` before continuing.
The original specification and final page copy remain unchanged.

## Local review

Use Node 22 and the locked packages:

```bash
npm ci
npm run dev
```

Open [the homepage](http://localhost:3000/). Its eleven sections use the supplied copy
and photo briefs from `docs/pages/home.md`, with service icons retained provisionally.
The [component review](http://localhost:3000/dev/components) still links to 52 samples
covering every specified block, primitive and form, including light/dark treatments and
named variants. The separate [rhythm sample](http://localhost:3000/dev/components/rhythm)
contains exactly three cut sections for checking the composition at realistic length.
The prior [foundations review](http://localhost:3000/dev/foundations) remains available.

The component gallery is separate from the homepage. Its repeated heroes, FAQs, buttons
and feature bands are deliberate variant samples. Future navigation links display a
staging explanation and a return link to Home until their scheduled phases are built.

## What needs review

- Review the homepage's eleven sections, three angled sections and seven service cards.
- Check the photo briefs, text wrapping and section spacing on phone, tablet and desktop.
- Service icons are kept for this review, following the user's instruction to continue;
  an explicit keep/remove preference was not supplied. They can still be removed together.
- Try FAQ keyboard controls and form validation. Quote has six required visible fields,
  with additional detail closed by default. Use sample data only.
- Forms only validate locally. They do not send requests or save data. Sending, spam
  handling, upload processing and real success transitions belong to Phase 7. Static
  success/error messages are explicitly labelled design samples.
- Contact values remain `PLACEHOLDER_`. Phone and WhatsApp controls are unavailable until
  confirmed. The map area is a labelled placeholder with a working directions link;
  the static map asset/settings remain outstanding. No maps iframe is loaded.

## Implementation and checks

Montserrat remains at weights 400 and 700. Lucide is the sole icon set. React Hook Form
and Zod are the only packages added in Phase 2, as specified. No new UI kit or animation
library. The geometry SVG is a sizing-test asset, not substitute client photography.

```bash
npm run build
npm run lint
npx tsc --noEmit
```

Browser checks cover 390px, 768px and 1440px. Staging routes are `noindex, nofollow`.
There is no sitemap yet; Phase 9 must exclude all `/dev/` routes. Automated checks and
agent browser inspection do not replace the user's Phase 3 review. Home's local mobile
Lighthouse performance score is 97, with zero measured layout shift. Full scores and
the staging limitations are recorded in `docs/staging-review.md`.
