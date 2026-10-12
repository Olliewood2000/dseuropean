# AGENTS.md

Marketing website for DS European Ltd, a UK logistics and installation company.

This project is **fully specified before any code**. The `/docs` folder contains the complete design system, component library, page copy, technical spec and build plan. Your job is to implement what is specified, not to design or write.

---

## Read before doing anything

| File | What it governs |
|---|---|
| `docs/00-source-of-truth.md` | The client, their services, and the binding claims whitelist |
| `docs/01-brand-and-tokens.md` | Colour, type, spacing, radii, the angled motif, breakpoints |
| `docs/02-components.md` | Every component and block, with props. The vocabulary the page docs use |
| `docs/03-content-rules.md` | Voice, banned words, microcopy, alt text |
| `docs/04-technical-spec.md` | Stack, routes, content model, forms, metadata, performance |
| `docs/05-sitemap.md` | Routes, navigation, internal linking, keyword map |
| `docs/06-build-plan.md` | The eleven phases and their gates |
| `docs/pages/*.md` | Final copy and block assembly, one file per page |

For any phase, read `06-build-plan.md` plus the docs that phase touches. For page work, the page doc is authoritative on content.

---

## Hard rules

**Copy is supplied, not generated.** Every heading, paragraph, bullet, FAQ answer and button label is written in the page docs. Use it verbatim. Do not improve it, shorten it to fit a layout, or write new copy. If a page doc is missing content for a section, stop and ask.

**If the layout will not hold the copy, change the layout.**

**No component that is not in `02-components.md`.** If something genuinely needs a new block, propose it and wait. Do not invent one mid-page.

**No claim outside the whitelist** in `00-source-of-truth.md` section 9. This includes alt text, meta descriptions and structured data. No insurance figures, no accreditations, no client names, no ratings, no review schema.

**No stock photography, ever.** Every image slot without a real image uses `ImagePlaceholder` with the brief from the page doc.

**No new dependencies** beyond what `04-technical-spec.md` lists. No animation library, no UI kit, no state manager, no second icon set.

**No `localStorage` or `sessionStorage`.**

**No hardcoded values.** Colours come from tokens. Phone, email and address come from `content/site.ts`. Never type a hex, a phone number or an address into a component.

**Stay inside the phase.** Finish it, report, stop. Do not begin the next phase because the current one went well.

**Do not mark a gate as passed.** Gates are verified by a human in a browser.

---

## Style

- UK English. No em dashes anywhere. No exclamation marks.
- Sentence case headings, never title case.
- TypeScript strict. No `any`. No non-null assertions without a comment explaining why.
- Named exports, one component per file, PascalCase filenames.
- Tailwind utility classes from the token config. No arbitrary values except where a doc specifies one.
- Server Components by default. `"use client"` only where interactivity requires it, which is the header, the drawer, the forms, the FAQ, the stat figure counter (`CountUp`) and the service showcase (`ServiceShowcase`).

---

## Commands

```bash
npm run dev          # local
npm run build        # must pass before any gate
npm run lint
npx tsc --noEmit     # must pass clean
```

---

## When you are unsure

Ask. A question costs one message. A wrong assumption implemented across nine pages costs a phase.

Specifically, ask rather than guess when: a page doc is ambiguous, two docs conflict, the copy will not fit the specified block, or a client detail is marked `PLACEHOLDER_` and you need its value.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
