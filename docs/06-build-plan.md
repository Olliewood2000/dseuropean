# 06. Build Plan

Eleven phases with a verification gate on each. The build does not proceed past a gate until the gate passes.

**Why phased.** A single instruction to build the whole site produces a good Home page and nine thin ones, because quality degrades across a long generation. Phases keep each step inside the range where the output is actually reviewed.

---

## How to work through this

1. Give the build model the phase, not the whole plan.
2. Let it finish. Do not accept a phase that ends with "I'll continue with the next part".
3. Run the gate yourself, in a browser, not by reading the code.
4. Fix inside the phase. Never carry a known problem forward, because every later phase builds on it.
5. Commit at each gate so a phase can be rolled back cleanly.

---

## Phase 0. Pre-flight

**Decisions to make before any code**

| Decision | Status | Blocks |
|---|---|---|
| Nested URLs `/services/[slug]` | **Confirmed** | Nothing |
| Cookieless analytics, no consent banner | Recommended, not confirmed | Phase 9 |
| Google Ads in future | Unknown | Phase 9, and the cookie page |
| Private items as a service | Unknown | Phase 5, Home grid, nav |
| Canonical domain | **Unknown** | Launch |
| Primary phone number | **Unknown** | Launch |
| Enquiry email address | **Unknown** | Phase 7, launch |
| Lifting equipment owned or hired | Unknown | Phase 5, Phase 6 |
| Can job locations be published | Unknown | Phase 6 |

None of the unknowns block starting. All of them block launching.

**Repo setup**

- Next.js, App Router, TypeScript strict
- Tailwind v4 with the `@theme` block from `01-brand-and-tokens.md`
- `/docs` committed with all six documents plus the page documents
- Montserrat via `next/font/google`, weights 400 and 700 only
- `site.ts` created with every unknown marked `PLACEHOLDER_` so it is greppable

### Gate 0
- [ ] Project builds and serves
- [ ] `/docs` is in the repo
- [ ] Montserrat renders, no FOUT
- [ ] Every unknown in `site.ts` is greppable

---

## Phase 1. Foundations and chrome

Tokens, layout primitives, Header, MobileDrawer, StickyContactBar, Footer, Breadcrumbs.

Build the `Section` wrapper first. It owns background, padding and cuts, and every block depends on it.

### Gate 1
- [ ] All tokens resolve. No hardcoded hex anywhere in components
- [ ] `Section` renders all four backgrounds, all four paddings, all four cut variants
- [ ] The angled cut looks right at 390px, 768px and 1440px
- [ ] Header is transparent over a navy hero and solid after 80px of scroll, with no layout shift
- [ ] Services dropdown works by keyboard, not hover alone
- [ ] Mobile drawer traps focus, closes on Escape, locks body scroll
- [ ] Sticky contact bar appears after 400px and does not overlap the footer
- [ ] Skip link works

---

## Phase 2. Component library and kitchen sink

Every primitive, every block, plus `/dev/components` rendering all of them in every variant with placeholder content, on both light and inverse grounds.

**This is the highest leverage phase in the build.** Everything after it is assembly. A block fixed here is fixed on every page at once; a block fixed in phase 6 has to be re-checked on eight pages.

Do not skip the kitchen sink. Do not build it after the pages.

### Gate 2
- [ ] `/dev/components` renders every block in every variant
- [ ] `/dev/components` is `noindex` and absent from the sitemap
- [ ] Buttons: all four variants, both sizes, hover and focus correct
- [ ] `ImagePlaceholder` renders the brief legibly and is in the accessibility tree
- [ ] `FeatureBand` works with and without an items row
- [ ] `JobGrid` renders both `card` and `narrative`
- [ ] `TwoColumnText` holds the asymmetric split at `lg` and stacks correctly below
- [ ] `FormWithAside` stacks form first below `lg`
- [ ] **Service grid icon decision made by looking at all seven together at final size.** Keep or pull, per tokens section 14
- [ ] Three cut sections in sequence do not read as restless
- [ ] Nothing centred except `QuoteCTA`

---

## Phase 3. Home

Content from `pages/home.md`, verbatim. Eleven blocks.

### Gate 3
- [ ] Every section matches the page document in order, block, background and cut
- [ ] Copy is verbatim. Nothing shortened, improved or invented
- [ ] Exactly three cut sections, alternating direction
- [ ] Backgrounds alternate, no two `surface` adjacent
- [ ] Seven service cards, ragged final row, no filler card
- [ ] Hero image or placeholder carries `priority`
- [ ] Mobile at 390px: no overflow, no cramped display type
- [ ] Lighthouse mobile performance 95+

---

## Phase 4. Services hub and the service template

Build `/services`, then the `[slug]` route with furniture as the first content file. Prove the template renders one page correctly before generating six more.

### Gate 4
- [ ] `/services/furniture-transport` matches its page document exactly
- [ ] `generateStaticParams` produces the route
- [ ] `ServicePage` interface enforces every field. A missing field is a type error
- [ ] Breadcrumbs correct and emitting schema
- [ ] `/about#fleet` link resolves, with `scroll-margin-top` clearing the sticky header
- [ ] Hub does not duplicate Home's proposition

---

## Phase 5. The remaining six service pages

Content files only. No component work. If this phase requires a component change, the phase 2 gate was passed too early.

### Gate 5
- [ ] All seven routes build
- [ ] No FAQ question or answer appears on two pages
- [ ] Each page carries its assigned primary term and no other page's
- [ ] `RelatedServices` pairings match the sitemap document
- [ ] Every page links to `/storage`
- [ ] International band appears on furniture, exhibitions and recent jobs only
- [ ] Private items built or dropped, per the client decision

---

## Phase 6. Storage, Recent Jobs, About

### Gate 6
- [ ] `JobGrid` on Recent Jobs is `narrative`, not `card`
- [ ] The line explaining the missing photography is present
- [ ] About `#fleet` anchor stable and linked correctly from two service pages
- [ ] `StatBand` on About, `TrustStrip` on Home, never both on one page
- [ ] Storage carries no capacity, security or insurance claim

---

## Phase 7. Forms

Quote and Contact pages, both forms, route handlers, Resend, spam handling, success states.

**Test with a real email address on a real domain.** A form that renders is not a form that works.

### Gate 7
- [ ] Both forms submit and both emails arrive
- [ ] Sending domain verified with SPF and DKIM
- [ ] `replyTo` set to the enquirer
- [ ] Quote subject line carries service and collection town
- [ ] Optional disclosure closed by default, six visible fields
- [ ] Photo upload: 3 files, downscaled client side, under 4MB total, HEIC accepted
- [ ] Validation on blur, errors have icon and text, linked with `aria-describedby`
- [ ] Success replaces the form in place. No redirect
- [ ] Honeypot and timestamp both discard silently with a 200
- [ ] Failed submission does not lose what was typed

---

## Phase 8. Legal

Three pages, placeholders clearly marked, all `index, follow`.

### Gate 8
- [ ] All three render and are linked from the footer bottom bar
- [ ] Every placeholder is visibly marked, not silently blank
- [ ] Terms covers website use only and states that carriage is governed separately

---

## Phase 9. SEO plumbing

Metadata, schema, OG images, sitemap, robots, redirects, analytics.

### Gate 9
- [ ] Every page has a unique title and a 140 to 158 character description
- [ ] Canonical on every page, absolute, on the canonical domain
- [ ] Schema validates in the Rich Results Test
- [ ] No `Review` or `AggregateRating` anywhere
- [ ] OG image generates per route and renders correctly in a share preview
- [ ] `sitemap.xml` excludes `/dev/` and `/api/`
- [ ] `lang="en-GB"`
- [ ] Analytics firing, no cookies set. Check the application tab
- [ ] Conversion events fire on form success, `tel:` click and WhatsApp click

---

## Phase 10. Performance and accessibility

### Gate 10
- [ ] Lighthouse mobile: performance 95+, accessibility 100, best practices 100, SEO 100
- [ ] LCP under 2.0s, CLS under 0.05, INP under 200ms
- [ ] Every fill image has a correct `sizes`
- [ ] Per page image budgets met, measured at 390px in the network panel
- [ ] Full keyboard pass, every interactive element reachable and visibly focused
- [ ] Screen reader pass on Home, one service page and the quote form
- [ ] `prefers-reduced-motion` honoured
- [ ] Security headers present
- [ ] No console errors or warnings

---

## Phase 11. Launch

**Blocked until the client answers.** Everything in this phase depends on the unknowns in phase 0.

- [ ] Canonical domain confirmed, redirects in place
- [ ] Old site crawled, every ranking URL mapped to a 301
- [ ] One phone number sitewide, from `site.ts`
- [ ] Enquiry email live and monitored
- [ ] WhatsApp number monitored, in international format
- [ ] Company registration and VAT in the footer
- [ ] **Every `*(verify)*` confirmed or removed.** 12 inline markers, plus 97 numbered sign off items across the page documents
- [ ] No `PLACEHOLDER_` remaining anywhere
- [ ] Content checklist from `03-content-rules.md` section 13 run on every page
- [ ] Search Console verified, sitemap submitted
- [ ] Google Business Profile address matching the site to the character
- [ ] Form submissions tested from a phone on mobile data, not just a laptop

---

## Stop the build if it does any of this

Common failure modes, all of which have happened on builds like this:

- **Writes marketing copy.** Copy is supplied. If a page document is missing something, it asks
- **Shortens supplied copy to fit a layout.** The layout changes, not the copy
- **Adds a library.** No animation library, no UI kit, no state manager, no icon set beyond Lucide
- **Uses `localStorage` or `sessionStorage`**
- **Invents a component** instead of using one from `02-components.md`
- **Adds stock photography.** Missing images are `ImagePlaceholder`, always
- **Centres things.** Only `QuoteCTA`
- **Puts icons everywhere.** Tokens section 14 governs
- **Hardcodes a hex value, a phone number, an email or an address**
- **Adds a fourth cut section** to a page
- **Runs ahead into the next phase** without the gate passing

---

## Running alongside the build

Two things should be happening in parallel rather than waiting for the code:

**Chase the client.** The verification list, the blocking answers, the photography brief. The build can reach phase 10 without any of it, and cannot launch without most of it.

**Get the shot list moving.** Every `ImagePlaceholder` brief is an instruction for a phone camera. Ask the client to have drivers and fitters take five shots per job for a month: loaded vehicle, wrapped item, install in progress, finished space, team on site. That solves the photography problem faster than a shoot and costs nothing.
