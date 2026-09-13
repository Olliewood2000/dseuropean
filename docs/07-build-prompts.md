# 07. Build Prompts

Prompts to paste into Codex, one per phase. `AGENTS.md` at the repo root is read automatically, so these stay short deliberately.

**Do not paste the whole document.** One phase at a time, and only after the previous gate has passed in a browser.

---

## Kickoff

Run once, before phase 0. It gets the model oriented and surfaces contradictions before any code exists.

```
Read everything in /docs, including /docs/pages.

This project is fully specified before any code. Do not write any code yet.

Give me:

1. A one paragraph summary of what this site is and who it is for.
2. The full route list you understand you are building.
3. Every contradiction, gap or ambiguity you find across the documents.
4. Anything specified that you believe will not work as written, technically or otherwise.

Be specific and be critical. I would rather find problems now than in phase 6. Do not be agreeable about it.
```

Work through its answers before starting. Point 3 is the valuable one. Ten documents written over several sessions will contain inconsistencies and it is cheaper to find them here.

---

## Phase 0. Pre-flight

```
Phase 0 of /docs/06-build-plan.md.

Scaffold the project per /docs/04-technical-spec.md. Nothing else.

- Next.js App Router, TypeScript strict
- Tailwind v4 with the @theme block from /docs/01-brand-and-tokens.md section 10, verbatim
- Montserrat via next/font/google, weights 400 and 700 only
- The repo structure from 04-technical-spec section 17
- content/site.ts with every unknown value as PLACEHOLDER_PHONE, PLACEHOLDER_EMAIL and so on, so they are greppable

Do not build any components or pages.

When done, list what you created and confirm npm run build and npx tsc --noEmit both pass.
```

---

## Phase 1. Foundations and chrome

```
Phase 1 of /docs/06-build-plan.md.

Build the Section wrapper first, since every block depends on it. Then Container, then the chrome: Header, MobileDrawer, StickyContactBar, Footer, Breadcrumbs.

Specs in /docs/02-components.md sections 2 and 4. Nav and footer structure in /docs/05-sitemap.md sections 3 and 4.

Points to get right:
- Section owns background, padding and cut. No block manages its own.
- The cut is a fixed vertical delta, not a true skew. See 01-brand-and-tokens section 5.
- The Services nav label is a real link to /services, not only a dropdown trigger.
- Header transparent over inverse heroes, solid after 80px, no layout shift when it condenses.
- Dropdown and drawer both keyboard operable.

Build a temporary page rendering the chrome so I can check it. Do not build any blocks.
```

---

## Phase 2. Component library and kitchen sink

```
Phase 2 of /docs/06-build-plan.md. This is the most important phase in the build.

Build every primitive and every block in /docs/02-components.md sections 3 and 5, plus the forms in section 6.

Then build /dev/components rendering every block in every variant with placeholder content, on both light and inverse grounds, clearly labelled. noindex, excluded from the sitemap.

Everything after this phase is assembly, so a mistake here reaches every page. Follow the props interfaces exactly.

Particular attention:
- ImagePlaceholder must render its brief legibly and be in the accessibility tree
- FeatureBand works with and without an items row
- JobGrid renders both card and narrative variants
- TwoColumnText holds title in columns 1 to 4 and body in 6 to 12
- FormWithAside stacks form first below lg
- Service grid cards: build with icons so I can judge whether to keep them

Do not build any real pages.
```

---

## Phase 3. Home

```
Phase 3 of /docs/06-build-plan.md.

Build / from /docs/pages/home.md.

Eleven blocks, in order, with the backgrounds, padding and cuts specified. Copy verbatim from the page doc. Do not shorten, improve or add anything.

Every image slot uses ImagePlaceholder with the brief from the doc.

Content into content/ modules per 04-technical-spec section 3, not hardcoded in the page.

Report which blocks you used for each section so I can check it against the doc.
```

---

## Phase 4. Services hub and the template

```
Phase 4 of /docs/06-build-plan.md.

Two things:

1. /services from /docs/pages/services-hub.md
2. The /services/[slug] route with generateStaticParams, and content/services/furniture-transport.ts from /docs/pages/service-furniture-transport.md

Define the ServicePage interface from 04-technical-spec section 3 so a missing field is a type error. One template renders all seven pages.

Only build furniture. I want to verify the template against its doc before the other six exist.

Check that /about#fleet is linked correctly even though About does not exist yet.
```

---

## Phase 5. The remaining six service pages

```
Phase 5 of /docs/06-build-plan.md.

Six content files, from these docs:

- service-retail-display-transport.md
- service-exhibition-transport.md
- service-office-relocations.md
- service-equipment-transport.md
- service-business-deliveries.md
- service-private-deliveries.md

Content files only. No component changes. If you believe a component change is needed, stop and tell me instead of making it.

Copy verbatim. Do not harmonise the pages, do not reuse FAQ answers between them, do not adjust wording for consistency. The differences are deliberate.

RelatedServices pairings from /docs/05-sitemap.md section 6.
```

---

## Phase 6. Storage, Recent Jobs, About

```
Phase 6 of /docs/06-build-plan.md.

Three pages from /docs/pages/storage.md, recent-jobs.md and about.md.

Specifically:
- Recent Jobs uses JobGrid variant narrative, not card. Keep the line explaining the missing photography.
- About needs a stable #fleet anchor on the Section wrapper, with scroll-margin-top clearing the condensed header.
- Storage carries no capacity, security or insurance claim. Those answers do not exist yet.
```

---

## Phase 7. Forms

```
Phase 7 of /docs/06-build-plan.md.

/quote and /contact from their page docs, plus both route handlers.

Per 04-technical-spec section 6:
- Zod schema shared client and server
- Honeypot plus a 3 second timestamp check, both returning 200 and discarding silently
- Quote form: six visible required fields, optional fields behind a closed disclosure
- Photo upload: max 3 images, client side downscale to 1920px longest edge at quality 0.8, hard cap 4MB total, accept HEIC
- Resend, replyTo set to the enquirer, quote subject line carrying service and collection town
- Success state replaces the form in place, no redirect
- A failed submission never loses what was typed

Microcopy from /docs/03-content-rules.md section 10, verbatim.

Tell me which environment variables I need to set.
```

---

## Phase 8. Legal

```
Phase 8 of /docs/06-build-plan.md.

/privacy, /cookies and /terms from /docs/pages/legal.md.

Use the cookieless version of the cookie notice.

Every PLACEHOLDER must render visibly, not silently blank. I need to see what is outstanding.

All three index, follow. Linked from the footer bottom bar only.
```

---

## Phase 9. SEO plumbing

```
Phase 9 of /docs/06-build-plan.md.

Metadata, JSON-LD, dynamic OG images, sitemap.ts, robots.ts, analytics.

Per 04-technical-spec sections 4, 5, 9 and 11.

- Schema: Organization and LocalBusiness in the root layout, BreadcrumbList everywhere except Home, Service on service pages, FAQPage wherever an FAQ block renders, emitted from the same data the block uses
- No Review, Rating or AggregateRating anywhere. None exists
- OG images generated with next/og: navy ground, white Montserrat Bold title, short logo bottom left, one motif shape bleeding right
- sitemap.ts generated from the content modules so a new service appears automatically
- Vercel Analytics and Speed Insights. Cookieless. No consent banner
- Conversion events on form success, tel: click and WhatsApp click

Do not add Google Analytics or any cookie-setting script.
```

---

## Phase 10. Performance and accessibility

```
Phase 10 of /docs/06-build-plan.md.

Audit and fix against gate 10. Do not add features.

Check specifically:
- sizes on every fill image. Missing sizes is the main LCP risk on this site
- priority on the Home hero only
- No layout shift from the header condensing
- The Contact map is static and lazy
- Security headers from 04-technical-spec section 14
- Full keyboard pass
- prefers-reduced-motion honoured

Report Lighthouse mobile scores for Home, one service page and /quote, and tell me what you changed.
```

---

## Phase 11. Launch

Mostly not a Codex task. The remaining items need client answers. When they arrive:

```
Client answers are in. Update content/site.ts and remove every PLACEHOLDER_ value.

[paste the confirmed values]

Then:
- Add the redirects in /docs/04-technical-spec.md section 10
- Grep the whole repo for PLACEHOLDER_ and *(verify)* and report anything left
- Confirm the phone number, email and address are identical everywhere and sourced only from site.ts
```

---

## Prompts worth reusing

**When a phase goes wrong**

```
Stop. Before fixing anything, tell me what you think went wrong and why, and which document you were working from.
```

Getting the diagnosis before the fix stops a wrong fix being applied across several files.

**When it has written copy**

```
You have written copy that is not in the page doc. Show me every line you wrote that is not in /docs/pages/[page].md, then replace them with the supplied copy. If the supplied copy does not fit the layout, change the layout.
```

**Before accepting a gate**

```
Walk me through how this phase meets each item in its gate in /docs/06-build-plan.md. Where something is not met, say so plainly rather than describing it as done.
```

**When it wants a new dependency**

```
What does this dependency give us that we cannot do with what is already in the stack? If the answer is convenience, we are not adding it.
```
