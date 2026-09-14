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

## Phase 2 review, 13 September 2026

The user approved Phase 1 and instructed us to continue. PR #2 was merged into
`staging/website`, producing `0826d71`. Phase 2 is isolated on `phase/2-components` and
its PR targets staging. `main` remains untouched. No Gate 2 human check is marked passed.

### Component library

All primitives, the seventeen specified blocks and the six form components are present.
The review at `/dev/components` contains 52 labelled sample sections, with light/dark
versions and the named variants: button styles/sizes, image aspect ratios/masks, cards,
three hero types, compact hero without CTAs, service grids, both split ratios/directions,
text columns, process, trust/statistics, feature bands with/without items, audience/fleet,
narrative/image job grids, coverage, FAQs, related services, both forms and contact/CTA.

A separate `/dev/components/rhythm` composition has exactly three cut sections, avoiding
the variant gallery's intentionally repeated-band rhythm. One H1 per review route;
sample hero titles render as H2. Root now redirects to the component review. The original
foundations page remains available. No actual Home or service page has been assembled.

### Implementation decisions

- Section owns background, spacing and cuts. Blocks accept optional Section settings so
  future page documents can select their specified background and spacing without nesting
  duplicate Sections. Existing required content props retain their meaning.
- Hero CTA is optional for the quote-page exception; the Section override enables compact
  spacing. Breadcrumbs are supplied explicitly. Preview hero heading level is configurable.
- ImageFrame accepts static imports and sizes alongside string sources. Local SVG sizing
  samples use Next's unoptimised SVG path; all fill-image calls supply sizes for future
  raster assets. Next's AVIF/WebP output formats are configured.
- ImagePlaceholder is a labelled image in the accessibility tree. Its grid reserves the
  requested aspect ratio but grows for long briefs. Missing client photos remain written
  briefs. The SVG geometry test is visibly identified as an image-sizing sample.
- Image-mask inset is calculated from the documented 15-degree angle and nominal aspect
  ratio. No bitmap editing or stock photography is used.
- Cards keep all supplied excerpts rather than clipping them to three lines. Card titles
  are semantic H3 with the H4 visual scale, respecting the no-skipped-level instruction.
- ProcessSteps requires a tuple of three steps. JobGrid defaults to narrative. Forms and
  supporting text stack in the documented order. Only the closing CTA centres body text;
  the explicitly specified image-brief centring is retained.
- Native FAQ disclosures work without a client component and emit escaped JSON-LD from
  the same content. Sample FAQ text is fixture-only, not final service copy.
- Forms use React Hook Form and Zod, on-blur validation, accessible label/error links and
  unique IDs. Quote follows its authoritative page document: name, email, phone, collection,
  destination and moving description required; optional detail starts closed. The compact
  example proves default-service selection. Validation rejects punctuation-only phones.
- Form submission is deliberately a local preview check, not a mocked successful enquiry.
  Valid inputs display 'Preview checked. Nothing was sent.' The fields remain available,
  and editing clears that status. Loading, error and both success designs have separate
  labelled examples. Upload controls are visibly disabled. Phase 7 will implement actual
  send behaviour, upload compression/HEIC handling, spam controls and success focus.
- The ContactDetails map variant currently shows a labelled placeholder and an actual
  address-based directions link. The map asset/configuration is still missing. No client
  details, response-time promises, equipment ownership or job claims were invented.

### Verification

Production build, ESLint and standalone TypeScript checks pass. Browser inspection of
390px, 768px and 1440px found no horizontal overflow or clipped photo-brief text after
the layout fix. There is one H1 per route and no duplicate IDs. The card examples keep
all excerpts; all seven icons are distinct (armchair, shop, presentation, building, cog,
package check, gem), with an icon-free set provided for the user's decision.

Verified the 7/5 and 5/7 image/text widths and media-first mobile order. TwoColumnText
uses columns 1-4 and 6-12, and FormWithAside uses 1-7 and 9-12, with form first below lg.
The quote forms each expose six required fields; disclosures are closed and the compact
example selects Furniture. Invalid email and missing fields produce the supplied error
text, focus the first invalid field on submit, and successful preview validation does
not claim anything was sent. FAQ opens with Enter. Browser console returned no errors
or warnings during the inspected interactions. Review routes remain noindex.

### Human review still required

Choose whether to keep the seven service-card icons, inspect light and inverse versions,
check the photo briefs and the three-section rhythm, and approve or request changes.
Phase 3 (the final Home page) starts only after that review. Earlier client decisions,
photography and contact/integration settings remain outstanding.

## Phase 3 review, 13 September 2026

The user approved continuing with "good keep going" after viewing Phase 2. PR #3 was
merged into staging at `f47566e`; Home is isolated on `phase/3-home`. Main remains at
`6744b9e`. Service icons are retained provisionally as stated to the user, since no
separate icon preference was supplied. No Phase 3 human gate is marked passed.

### Page assembly

| Order | Block | Content | Background | Padding | Cut |
|---|---|---|---|---|---|
| 1 | Hero, home | Delivered, installed, and finished. | inverse | generous | bottom |
| 2 | TrustStrip | Four supplied figures | surface | compact | none |
| 3 | ServiceGrid | Seven supplied services, three columns, icons, no images | subtle | standard | none |
| 4 | SplitFeature | Installation, media left, 7/5 media/copy | surface | standard | none |
| 5 | ProcessSteps | Three stages, one team | subtle | standard | none |
| 6 | FeatureBand | Lake Como, Girona, France, Texas | inverse | generous | both |
| 7 | AudienceGrid | Four audiences, copy only | surface | standard | none |
| 8 | SplitFeature | Storage, media right, 5/7 media/copy | subtle | standard | none |
| 9 | FleetStrip | Five vehicle types and supplied capacities | surface | compact | none |
| 10 | JobGrid, narrative | Three supplied draft job narratives | subtle | standard | none |
| 11 | QuoteCTA | Supplied closing copy and central phone placeholder | inverse | generous | top |

Content lives in typed `content/home.ts`, `content/fleet.ts` and `content/jobs.ts`.
The service grid uses the existing ordered service module. The page contains assembly
and metadata only. No new component or project dependency was added. The supplied
photo briefs remain markup placeholders; Hero already requests priority when real
image data is supplied, while a markup placeholder has no image request to prioritise.

The specified `Crane` glyph does not exist in the installed Lucide package. HIAB retains
`Container`, the same provisional glyph shown in the approved component gallery; the
supplied name and "Crane mounted" capacity are unchanged. No equipment ownership claim
has been added. Job card title/service fields remain empty because this phase uses
narratives and no separate titles/service copy were supplied.

### Verification evidence

- Production build, ESLint, standalone TypeScript and diff whitespace checks pass.
- Compared 96 unique supplied copy values from the Home document with rendered HTML,
  including the three image accessible names; none were missing or shortened.
- Browser inspection at 390, 768 and 1440 pixels: no horizontal overflow, one H1,
  no duplicate IDs, readable photo briefs, seven cards arranged 1/2/3 columns, with
  a single card in the final desktop row. Split media stacks first on small screens.
- Eleven sections have the specified order, backgrounds and padding. Exactly three
  cut sections use the previously reviewed bottom/both/top alternating slopes.
- Main-content links: seven individual services, About once, Storage once, recent jobs
  three times, quote twice. The header provides the third quote CTA mentioned in the
  document's summary; no extra content section or button was invented.
- Local production Lighthouse, default mobile simulation: performance 97, accessibility
  96, best practices 96, SEO 63. LCP 2.7 seconds, CLS 0, total blocking time 60 ms.
  Performance meets this phase's 95 target; the Phase 10 LCP target is not yet met.
  The audit tool ran outside the repository and added no application dependencies.
- Accessibility flags only the three decorative process numbers, specified at 20%
  opacity and already aria-hidden. Their styling is preserved for design review;
  automated accessibility 100 is not claimed. Review this at Phase 10.
- Best-practice console failures are automatic Next link prefetches to `/quote` and
  `/recent-jobs`, which intentionally do not exist yet. These resolve when the scheduled
  pages are built. SEO is reduced by intentional staging noindex. Neither score is
  represented as a launch result or a completed Phase 10 audit.

### Outstanding review and later work

Review Home at `/` and approve or request changes before Phase 4 (Services hub and the
furniture service template). The development galleries remain available at their URLs.
The page has supplied title, description and Open Graph text, while retaining noindex,
nofollow. The supplied 190-character description is preserved. Canonical/domain,
Organization/LocalBusiness schema and generated sharing images remain Phase 9 work,
with genuine contact details required before launch.

Photographs, contact details, private deliveries and draft job/location publication
permissions remain client decisions. The staging draft does not assert those approvals.
Quote/contact delivery remains Phase 7. Destination pages show the staging explanation
and return to Home; this phase does not invent temporary marketing pages for them.

## Phase 4 review, 13 September 2026

The user approved the homepage with "keep going". PR #4 was merged into staging at
`1acfde7`; Phase 4 is isolated on `phase/4-services`. Main remains at `6744b9e`. No Phase 4
human gate is marked passed and no remaining service pages have been built.

### Assembly and content contract

Services hub: Hero page, ServiceGrid with seven supplied photo briefs, SplitFeature,
ProcessSteps, TwoColumnText, FAQ, QuoteCTA. Seven sections, two cuts, backgrounds
inverse/surface/subtle/surface/subtle/surface/inverse. Section 5 is compact; closing CTA
is generous; other sections use standard padding. Its proposition and process copy are
supplied specifically for the hub and differ from Home.

Furniture: Hero service, SplitFeature 7/5, reversed SplitFeature 5/7, ProcessSteps,
FeatureBand, CoverageList, TwoColumnText, FAQ, RelatedServices, QuoteCTA. Ten sections,
three alternating cuts. Backgrounds and padding follow each section of the page doc.
The related cards are Office Relocations, Exhibitions and Storage and Fulfilment.

`ServicePage` requires all 13 top-level fields. The technical-spec field names are
retained, with required coverage added. Fields use the existing typed block props so
headings, CTAs, breadcrumbs, icons and section settings absent from the example contract
are not lost. Process uses the existing three-step tuple; hero subtitle, image, primary
CTA, breadcrumbs and settings are required; closing title/body/CTA are required.
`featureBand` must be explicitly present or null. The route is the shared template;
there is no new component. A typed registry derives its order from the existing service
index and exposes only furniture to `generateStaticParams`, with dynamicParams false.

### Copy and pending decisions

- The five answered hub FAQs are rendered from the supplied copy. Its private-work FAQ
  contains an instruction to choose an answer after client confirmation, rather than
  an approved answer. The user was asked, with omission as the suggested interim choice.
  Pending an answer, that one question is omitted from both visible FAQ and JSON-LD.
  This does not decide whether private deliveries will be launched; the seven-card
  staging draft is retained, as on Home.
- Furniture keeps all six supplied answers and the literal `*(verify)*` marker on the
  packaging-removal bullet. No claim sign-off is inferred from visual phase approval.
- The hub's internal-link summary requests a body Storage link but supplies no matching
  link/CTA in its seven detailed sections. Detailed section assembly is preserved;
  Storage remains reachable through the shared header/footer. No CTA copy was invented.
- Furniture's instruction that the first paragraph include the literal words "and
  installation" differs from the supplied subtitle, which says "delivered and installed".
  The supplied subtitle is retained verbatim, as are its title and H1.
- Canonical/domain and Organization, Service and CollectionPage SEO are Phase 9. The
  existing BreadcrumbList and FAQPage blocks emit schema now; breadcrumb item URLs
  remain relative until preview/canonical origins are configured in that phase.

### Verification evidence

- Production build, ESLint and standalone TypeScript pass. Build output includes
  `/services` and only `/services/furniture-transport` from generateStaticParams.
- A virtual compiler test removed every one of 13 required fields in turn, plus the
  nested hero subtitle. All 14 invalid shapes produced the expected type errors;
  the valid contract compiled. No test dependency or scratch file entered the repo.
- Compared 57 unique hub values and 82 furniture values with rendered HTML, including
  photo accessible names and FAQ answers. No supplied value was missing. The unresolved
  hub question and its drafting instruction were explicitly excluded from that check.
- HTTP: both new routes return 200; an unbuilt service and an unknown slug return 404.
- Browser: hub Furniture card opens the correct template, current breadcrumb has
  aria-current and no link, Home and Services crumbs have the correct destinations.
  Breadcrumb schemas have two/three entries; FAQ schemas match five/six visible answers.
- Inspected full desktop pages and phone/tablet layouts at 1440, 390 and 768 pixels.
  No horizontal overflow or clipped briefs; one H1 per page; hub has seven cards and
  a ragged final row, with three/two/one columns. Split media stacks first below lg.
- FAQ starts closed. Clicking opens it; Enter on the focused native summary toggles it.
  Other component interactions and Home remain on their previously reviewed versions.
- The fleet CTA points exactly to `/about#fleet`. Its destination does not exist until
  Phase 6. Gate 4's destination/scroll-offset check therefore remains pending; no dummy
  About page or false successful anchor test was added. Section's existing scroll offset
  remains available for the actual About fleet section.

Review the hub and furniture page before Phase 5. Real photography, client verification,
contact channels, email submission and launch SEO remain in their scheduled phases.

## Phase 5 review, 14 September 2026

The user approved Phase 4 with "Keep going". PR #5 was merged into staging at
`1b767b0`; this phase is isolated on `phase/5-services`. Main remains at `6744b9e`.
No Phase 5 human gate is marked passed. Phase 6 has not been started.

### Content and assembly

Five business content files now register Retail Displays, Exhibitions, Office
Relocations, Equipment and Business Deliveries alongside Furniture. They satisfy
the existing ServicePage contract, use the shared coverage copy and render through
the unchanged service template. Apart from this review documentation and README,
the only changes are those five files and the registry. No component, app route,
style, image asset or dependency changed.

Detailed page copy governs each feature section: Retail Displays uses storage,
Exhibitions uses event availability, Office Relocations uses out-of-hours moves,
and Business Deliveries uses repeat customers. The Retail and Business bands have
no items row, as specified. The generic international-band gate conflicts with
the detailed Exhibition page; the authoritative page copy has been preserved.

### Pending client decisions

- `docs/pages/service-private-deliveries.md` explicitly says "Confirm before this
  page is built at all." The user has been asked whether DS European accepts private
  customers. No answer has arrived, so no private content file or route is built.
  Existing Home/hub/navigation categories remain a seven-category staging draft;
  this is not a decision to launch or drop private work. The hub FAQ remains omitted.
- Equipment's ownership FeatureBand is explicitly null until ownership of HIAB and
  Moffett lifting equipment is confirmed. Its ownership heading and body are absent,
  with no invented replacement. This page has nine sections and two cuts; the other
  five business pages have ten sections and three cuts.
- Supplied verification markers remain literal `*(verify)*` text. Draft claims,
  photography, contact channels and publication permissions are not signed off by
  phase-layout approval. No new claims or stock photography were introduced.

### Verification evidence

- Production build, ESLint and standalone TypeScript pass. All six registered
  business service routes return HTTP 200. Private and an unknown service return 404.
- Compared supplied headings, paragraphs, lists, process cells, image briefs, CTAs
  and FAQs with rendered HTML: Furniture 82 values, Retail 79, Exhibition 82,
  Office 82, Equipment 75 and Business 78. All 478 values are present. Equipment's
  pending ownership section is explicitly excluded from this check.
- All six pages have six FAQs. None of the 36 questions or answers are duplicated
  across pages. FAQ schema matches the supplied answers; breadcrumbs have three
  entries. Each page uses its supplied title, description and primary H1.
- Related links match the detailed page pairings and order, including `/storage`
  on every business page. The Equipment fleet CTA is exactly `/about#fleet`.
- Browser checks at 390, 768 and 1440 pixels cover all five new pages: one H1,
  expected section/cut counts, six initially closed FAQs, no horizontal overflow,
  no clipped image briefs and no duplicate IDs. Split media stacks first below lg.
- Full-page visual inspection covered Retail, Office and Exhibition on desktop,
  Equipment on tablet and Business Deliveries on phone. Long copy and optional
  feature rows fit their existing layouts.
- The overview Exhibition card opens the correct new route. Business Deliveries'
  related Equipment link opens its page. A native FAQ opens on click and closes
  with Enter when its summary has focus.
- No new performance or full Lighthouse claim is made for this content-only phase.
  Phase 10 remains the full launch audit.

The all-seven-routes and private-client decision gates cannot pass while the private
page decision is pending. Review the five new business pages and resolve the two
client questions before completing this phase. About/fleet anchor, Storage, Recent
Jobs, forms and launch SEO remain in their scheduled phases. No placeholder page
has been invented to claim those destination checks pass.

## Phase 6 review, 14 September 2026

The user said "Keep going" after reviewing Phase 5's five business pages and its
outstanding decisions. PR #6 was merged into staging at `d090c15`. Development is
isolated on `phase/6-company`. This instruction authorises continuing the staging
build; it is not an answer to any client question or a passed human gate. Main
remains at `6744b9e`. Phase 7 has not started.

### Assembly

- Storage: Hero page, SplitFeature 7/5, reversed SplitFeature 5/7, ProcessSteps,
  AudienceGrid, FAQ and QuoteCTA. Seven sections, two cuts. All detailed page
  section backgrounds and padding are preserved. Five answered FAQs render.
- About: Hero page, SplitFeature 7/5, StatBand, reversed SplitFeature 5/7,
  FeatureBand, FleetStrip, CoverageList and QuoteCTA. Eight sections, three cuts.
  Four supplied team figures appear in StatBand; no TrustStrip or ProcessSteps
  was added to this page. Home retains its original TrustStrip.
- Existing shared fleet entries and icons are reused. About overrides only the
  Moffett capacity with its exact page-specific "Vehicle mounted forklift" text;
  Home's "Forklift mounted" text remains unchanged. The approved Container icon
  remains for HIAB because Lucide does not supply the specified Crane export.
- FleetStrip's Section carries the stable `fleet` ID. Existing section CSS gives
  it 84px scroll margin: the 68px condensed header plus 16px clearance. No CSS or
  shared component change was required.
- About imports shared coverage without changing its copy. Both pages use supplied
  metadata and retain noindex/nofollow. Breadcrumb schema renders now; Service,
  AboutPage and Organization schema remain Phase 9 with real organisation details.

### Decisions and composition exceptions

- Recent Jobs is unbuilt. Its page document says, "Before this page is built, ask
  directly whether they can publish job locations." The user was asked whether
  Lake Como, Girona, France and Texas may be named; no answer has arrived. Existing
  Home and coverage references are staging draft content, not publication approval.
  No new narrative page or anonymised substitute copy has been invented.
- About's fleet intro retains its first supplied sentence and omits the second,
  which asserts equipment ownership. Ownership remains unknown, not recorded as
  hired. The Equipment page's ownership band remains omitted for the same reason.
- Storage explicitly permits removing its unanswered location/security FAQ. That
  question and its drafting instruction are absent from visible content and FAQ
  schema. No capacity, security, insurance or bonded-status claims are introduced.
- Storage's specified `page` Hero is text only in the component contract, although
  its page doc includes an image brief. This pre-flight conflict remains visible
  in the review record: preserve the specified variant and save the unused brief
  in content. The two actual SplitFeature image slots show their supplied briefs.
  No component was changed or extra block introduced to resolve this implicitly.
- Storage's explicit hero title takes precedence over the conflicting metadata H1
  entry, consistent with the pre-flight decision. Detailed page compositions take
  precedence over the abbreviated component-library page summary.
- Team figures and other supplied operational copy are staging drafts and require
  client sign-off before launch. Private customers, equipment ownership, contact
  details and job publication permissions remain unanswered.

### Verification evidence

- Production build, ESLint and standalone TypeScript pass. `/storage` and `/about`
  return HTTP 200. `/recent-jobs` and private deliveries still return HTTP 404.
- Rendered copy audit: 60 Storage values and 66 About values, all present. Excluded
  only the non-rendered Storage hero brief, blocked FAQ and About ownership sentence.
  Both breadcrumb schemas have two entries; Storage FAQ schema has five answers.
- Both pages checked at 390, 768 and 1440 pixels: one H1, expected section/cut
  counts, no horizontal overflow, clipped image briefs or duplicate IDs. Split
  media stacks first below lg. Full-page visuals inspected for About on phone and
  Storage on desktop. The long Storage FAQ opens on phone without overflow.
- Clicked Equipment's fleet link at 390px and Furniture's at 1440px. Both reach
  `/about#fleet`. Section top measures about 84px and header bottom 68px, leaving
  the intended clearance; the fleet heading is visible below the header.
- Only new page assemblies, their typed content and review documentation changed.
  No new component, dependency, photograph, form handler or performance claim.

Review Storage and About now. Full Phase 6 completion remains pending Recent Jobs
location permission and human review. The private-client and equipment questions
remain tracked separately; continuing the build did not resolve them.
