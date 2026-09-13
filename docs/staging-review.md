# Staging build review

## Scope

The review version is built on `staging/website`, starting from `6744b9e`.
The user's current instruction is to keep development and preview deployment separate
from `main` and the production website. No merge into `main` is authorised by this work.
The supplied phase gates remain in effect unless the user changes those checkpoints.
No human review gate has been marked passed.

## 1. Website and audience

DS European's website explains its transport, installation and storage services to
interior designers, fit-out contractors, event organisers and other business customers.
Its purpose is to generate informed enquiries through a quote form, phone and contact
channels. It is a marketing website, with no shop, customer accounts or database. The
design uses the supplied navy/blue identity, Montserrat, asymmetric sections and real
photography when available. The supplied page copy governs the content.

## 2. Routes

Seventeen planned public routes, including the conditional private service:

```
/
/services
/services/furniture-transport
/services/retail-display-transport
/services/exhibition-transport
/services/office-relocations
/services/equipment-transport
/services/business-deliveries
/services/private-deliveries
/storage
/recent-jobs
/about
/quote
/contact
/privacy
/cookies
/terms
```

The About page requires a stable `#fleet` anchor. `/dev/components` is the component
review page and is excluded from indexing. `/api/quote` and `/api/contact` are planned
submission endpoints. Individual job pages and sector pages are outside the initial build.

## 3. Contradictions, gaps and ambiguities

### Client decisions remain with Ollie

- Domain, primary phone, enquiry inbox, WhatsApp number and monitored hours.
- Private deliveries: the page explicitly requires confirmation before it is built;
  the decision also affects the navigation, Home grid and Services hub copy.
- Permission to publish job locations and team headcount.
- Ownership of the HIAB/Moffett, storage operations and other claims listed in the
  page sign-off sections. The strict whitelist does not confirm the full draft copy.
- Company registration, VAT, retention periods, conditions of carriage and legal review.
- Photo uploads, enquiry response times, analytics and any advertising plan.
- Real photography and approved job narratives remain outstanding.

The four logo files are now supplied in `public/Logo/`. The technical document spells
that folder `public/logo/`; code must match the actual capitalisation on Linux hosting.
The long dark logo contains live text referencing Montserrat semibold italic; the long
white logo is outlined. Preserve supplied artwork and flag any font-dependent rendering.

### Editorial and component conflicts

- The requirement to reproduce copy verbatim conflicts with some supplied title-case
  headings, full stops, numerals, straight apostrophes and the banned-phrase rules.
- Fourteen of the seventeen supplied meta descriptions fall outside the stated 140–158
  character target. Home is 190 characters. Approved edits belong with the content author.
- Quote and Storage metadata-table H1s differ from the explicit hero titles.
- The quote page explicitly omits QuoteCTA, despite the general closing-block rule.
- The Quote hero has no buttons, but `HeroProps.primaryCta` is required. Compact page
  heroes also need an explicit way to select their documented padding.
- Quote's detailed fields require email and phone, unlike the component summary's
  email-or-phone field. The detailed page also moves the date to optional fields.
- The component summary promises a response within a working day; the page deliberately
  makes no unconfirmed response-time promise.
- Quote says FormWithAside has not been added, but it already exists in the library.
- Phase 2 asks for form presentation; phase 7 supplies the working email integration.
- Legal pages refer to a Prose block without a corresponding component contract.
- The sample service interface omits data needed by the detailed pages, including
  secondary CTAs, varied closing titles and complete section settings.
- ImageFrame needs responsive `sizes` and static image imports, which its sample
  string-only source interface does not fully express.
- Markup-only ImagePlaceholder does not request a photograph, so image priority is
  inapplicable even though the Home gate mentions priority for placeholders.
- Storage supplies a hero image brief while its chosen page-Hero variant has no image.
- The composition summary differs from the detailed About, Storage and Recent Jobs
  pages. The detailed page sections are the appropriate assembly reference.
- Recent Jobs says two cut sections in its header but specifies three in its sections;
  it also places two navy sections together. Inspect the transition at its review gate.
- International-band instructions disagree across gate 5, the template notes and the
  actual exhibition/office content. The detailed pages specify availability bands.
- QuoteCTA and ImagePlaceholder have explicit padding/centring instructions that
  differ from the generic rules. Treat these as documented component exceptions.
- Card line caps conflict with displaying all supplied copy. Do not truncate content.
- Visual h4 sizes must not force skipped semantic heading levels.
- Supplied CSS lacks several documented mobile, duration and inverse-border tokens,
  as well as all Section padding/cut variants. Complete these in phase 1.
- Sitemap requires a quote CTA always visible on mobile, while the chrome summary
  lists logo, phone and menu. Resolve the narrow layout during the chrome review.
- The Services nav label must remain a link while a separate control opens its menu.
- Storage's unanswered security FAQ must be answered by the client or omitted.
- FAQ count rules differ, and several draft service FAQs do not state the requested
  service limit. Do not invent new answers.
- Cookie copy claims necessary anti-spam cookies, but the proposed honeypot/timestamp
  implementation does not require them. Align that copy with the final implementation.
- Footer positioning wording is not provided as a dedicated field; address prose must
  still derive its shared details from `content/site.ts`.
- Draft placeholder formats vary. Final checks must catch `[PLACEHOLDER]`, `[phone]`,
  conditional answer instructions and `PLACEHOLDER_`, plus the 12 inline verify markers
  and all numbered sign-off items.

### Process notes

- The PDF requires kickoff findings before phase 0 and a reviewed merge between phases.
  The staging request changes the destination; the checkpoint question is still pending.
- The repository is public although the collaboration checklist recommends private.
  This work does not change repository visibility.
- GitHub write access is confirmed; Vercel project administration and email/domain
  account access have not been inferred from that access.
- Phases 0 through 11 are twelve numbered stages despite the eleven-phase label.

## 4. Technical points to resolve in the relevant phase

- Four MB of image data becomes approximately 5.33 MB when base64 encoded in JSON,
  before the other fields. That exceeds the documented Vercel function payload limit.
  Agree multipart transport or a smaller encoded payload before implementing uploads.
  See https://vercel.com/docs/functions/limitations.
- A file picker's HEIC acceptance does not establish browser canvas decoding support.
  Test real files and agree a fallback before claiming compression works everywhere.
- A hidden timestamp is forgeable; a three-second cutoff can reject fast legitimate
  submissions. A silent successful response must not be mistaken for a delivered email.
- Vercel WAF configuration must be checked separately from route-handler implementation.
- Preview origin, production canonical domain and staging indexing need distinct handling.
  This branch starts with noindex metadata and does not select a production domain.
- `display: swap` plus preloading cannot prove that no fallback text ever appears under
  every network condition. Record actual browser observations at the relevant gate.
- Checkout modification times are unreliable content revision dates for a sitemap.
- Lighthouse, keyboard, screen-reader and email-delivery acceptance checks remain
  separate from a successful production build.

## Initial phase

Phase 0 adds the supplied brand CSS, Montserrat, shared content placeholders, project
folders and configuration examples. The starter page remains until the appropriate
component/page phases. Automated checks do not constitute human gate approval.

### Setup verification

- Production build: passed with Node 22.23.2.
- ESLint: passed.
- TypeScript no-emit check: passed.
- Original dependency versions: unchanged. npm refreshed metadata for bundled optional packages.
- Original planning/page documents and supplied logo assets: unchanged.
- Main and production: no changes pushed or merged.
- Human phase gate: pending, not marked passed.

## Phase 1 review, 13 September 2026

### Authorisation and branch

The user confirmed review after every phase and then instructed us to work through it.
That is the authorisation to proceed from initial setup to Phase 1. No human Gate 1
checkbox has been marked passed. Work is on `phase/1-chrome`, based on the approved
staging setup at `687b633`. The Phase 1 PR targets `staging/website`, not `main`.
No production release or merge to main is authorised.

### Implemented

- Section first, then Container, Header, MobileDrawer, StickyContactBar, Footer and
  Breadcrumbs. Shared Button, Icon and footer MotifShape are the dependencies needed
  by these specified chrome components. No Phase 2 blocks are built.
- Completed missing semantic border, responsive type, section spacing and duration
  tokens from the prose tables. Section owns the background, padding and cut depth.
  Cut-both uses a combined polygon; light surfaces cannot be cut.
- Fixed header with a permanent 88px layout reservation, transparent at rest and solid
  at scroll positions greater than 80px, condensing to 68px without moving the content.
- Services hub link separate from its menu control. Two-column dropdown with hover,
  click, keyboard focus containment and Escape. Supplied descriptions wrap as needed
  rather than being truncated to satisfy the contradictory one-line instruction.
- Native modal mobile drawer, explicit Tab containment, Escape, focus restoration,
  background scroll lock, inline services disclosure and route-change closure.
- Quote button remains visible on mobile, following the sitemap's explicit requirement.
  Phone and menu controls remain present. Unconfirmed phone/WhatsApp actions are disabled
  and labelled; no invented contact values or placeholder URL destinations are created.
- Mobile contact bar after 400px; footer reserves its full height plus the device safe area.
- Footer positioning uses the existing Home OG description verbatim. Navigation labels
  and descriptions use the supplied Home/sitemap copy, including its original casing.
  Private Items is shown for staging review and remains an unresolved launch decision.
- Breadcrumb navigation with escaped BreadcrumbList JSON-LD. Relative item URLs resolve
  against the current origin while the canonical domain remains unconfirmed.
- Temporary `/dev/foundations` review page, requested by the Phase 1 build prompt, with
  all four background, padding and cut choices. Root temporarily redirects to it.
  Fixture labels are review instructions, not replacement marketing copy. Final page
  links are intentionally not implemented until their phases; the staging not-found
  view explains this and links back to the review.
- All staging pages remain noindex. No form backend, analytics or client tracking added.

### Checks performed

- Production build, ESLint and standalone TypeScript check pass with Node 22.
- Browser review at 390px, 768px and 1440px; no horizontal overflow. Additional checks
  at 320px and 1024px confirm the header also fits at those widths.
- Desktop 88px transparent header becomes 68px navy at scroll; main document position
  remains 88px. Section cut depths resolve to 32px, 56px and 80px at the required widths.
- Verified dropdown Enter, Tab wrap and Escape; seven readable service links, without
  truncation. Mobile modal traps Tab, restores focus on Escape, locks background scroll,
  expands services and closes when a route is selected.
- Skip link focuses the main landmark. Contact controls contain no placeholder links.
  Mobile bar appears after scroll and legal footer links remain visible above it.
- Montserrat resolves correctly; mobile heading scale resolves to the documented values.
  Browser console check returned no warnings or errors during the reviewed interactions.

### Human review still required

Review Gate 1 against the deployed preview, especially the angled section rhythm, desktop
Services menu, mobile drawer and footer. Approve or request changes before Phase 2 begins.
Contact values, the private-deliveries decision and the earlier content questions remain
open, as recorded above. They are not silently confirmed by the staging implementation.
