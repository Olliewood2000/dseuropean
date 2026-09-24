# Page: Home

**Route:** `/`
**Blocks:** 11
**Cut sections:** 3 (Hero, FeatureBand, QuoteCTA). At the limit, do not add more

---

## Metadata

| Field | Value |
|---|---|
| Meta title | Specialist Transport & Installation, UK and Europe \| DS European |
| Meta description | We move and install high value goods for interior designers, fit-out firms and event organisers. Bespoke furniture, exhibition builds, retail displays and office relocations. Available 24/7. |
| OG title | Delivered, installed, and finished |
| OG description | Specialist transport and on site installation across the UK, Europe and worldwide. |
| Canonical | Site root, per the confirmed canonical domain |
| Schema | `Organization` plus `LocalBusiness`, with address, telephone, `openingHours` as 24/7, and `areaServed` GB and EU |

---

## Page goal

Convince a project manager at an interior design, fit-out or events firm of two things inside eight seconds: DS European handle valuable, awkward items rather than pallets, and the job does not stop at the kerb.

**Primary CTA:** Get a quote.
**Secondary CTA:** See our work.

---

## Section 1. Hero

```
Block: Hero
Variant: home
Background: inverse
Padding: generous
Cut: bottom (falling left to right)
```

**Title**
> Delivered, installed, and finished.

**Subtitle**
> Specialist transport and on site installation across the UK, Europe and worldwide. Bespoke furniture, retail displays, exhibition builds and office relocations, handled by one team from collection to final placement.

**Primary CTA:** Get a quote → `/quote`
**Secondary CTA:** See our work → `/recent-jobs`

**Image brief**
> Two fitters in DS European branded polos positioning a large piece of furniture inside a finished interior. Shot from behind or side on, faces not required. Portrait or 3/2 crop, masked to the motif shape.

Two `MotifShape` tints bleeding off the right edge. Header transparent over this section.

---

## Section 2. Trust strip

```
Block: TrustStrip
Background: surface
Padding: compact
Tone: light
```

| Figure | Label |
|---|---|
| 60 years | Combined industry experience |
| 24/7 | Available 365 days a year |
| 10 | Fitters and supervisors on our own team |
| 21 | People across transport, installation and warehousing |

No icons. The figures carry it.

---

## Section 3. What we move

```
Block: ServiceGrid
Background: subtle
Padding: standard
Variant: showcase
Show images: true
```

**Eyebrow:** WHAT WE MOVE
**Title:** Specialist transport, by what you need moving

**Intro**
> Every job is different, so every quote is built around the item, the route and the deadline. These are the areas we work in most.

| Title | Excerpt | Href | Image brief |
|---|---|---|---|
| Furniture | Bespoke, luxury and designer pieces handled with care from collection through to installation. | `/services/furniture-transport` | A wrapped piece being carried into a finished interior |
| Retail Displays | Pop-up units, store fixtures and brand activation materials delivered securely and on schedule. | `/services/retail-display-transport` | A pop-up unit part assembled in an empty retail space |
| Exhibitions | Show stands, event builds and promotional setups transported and set up directly at the venue. | `/services/exhibition-transport` | Flight cases on a venue floor during build up |
| Office Relocations | Full office moves, including dismantling, transport, installation and reassembly on site. | `/services/office-relocations` | Desks being reassembled in a new office |
| Equipment | Commercial, specialist and technical equipment moved safely with professional handling. | `/services/equipment-transport` | A Moffett unloading a crated machine |
| Business Deliveries | Scheduled or repeat routes for businesses that need a dependable transport partner. | `/services/business-deliveries` | A branded vehicle at a loading bay |
| Private Items | One-off personal deliveries for items that matter and cannot be entrusted to a standard courier. | `/services/private-deliveries` | A single blanket wrapped item entering a home |

Image briefs are shared with the services hub grid. Hero photographs are not reused here. Until real photography arrives each slot renders `ImagePlaceholder` with its brief.

From `lg` the seven services form a single ruled index beside the image stage, so there is no short final row. Below `lg` they fall back to image-topped cards, where a short final row is correct. Do not add a filler card.

Icons: build with them, review at final size, pull all seven if they blur together.

---

## Section 4. More than transport

```
Block: SplitFeature
Background: surface
Padding: standard
Ratio: 7/5
Reverse: false (media left)
```

**Eyebrow:** WHERE WE DIFFER
**Title:** Most of our work does not end at the kerb

**Body**
> Ten of our team are supervisors and fitters. They travel with the job, unpack it, position it, assemble it and take the packaging away with them. Nothing is handed to a third party at the far end.
>
> For a lot of our clients that goes further still. We manage the installation on site, liaise directly with their customer and represent them at the property. Most of the companies we work with came to us once and stayed.

**Bullets**
- Fitters and supervisors employed directly, not subcontracted
- On site assembly, positioning and packaging removal
- Project supervision and direct liaison with your client
- One point of contact from collection to sign off

**CTA:** About DS European → `/about` (secondary)

**Media:** gallery of three.

**Image brief (lead, 3/4)**
> Close crop of gloved hands unwrapping a packing blanket from a piece of furniture. Detail shot rather than wide. This is the single most valuable photograph on the site and is easy to capture on a phone.

**Supporting images (4/3):** `Glass_pod_Hero_Image.webp` and `Office_Desk_Hero_Image.webp`, with the alt text used in the hero. Swap for job photographs as they arrive.

---

## Section 5. How a job runs

```
Block: ProcessSteps
Background: surface
Padding: standard (no top padding, continues section 4 as one white band)
Tone: light
```

**Eyebrow:** HOW IT WORKS
**Title:** Three stages, one team

| No. | Title | Body | Icon |
|---|---|---|---|
| 01 | Collect and store | We collect from the maker, the supplier or your premises. If the site is not ready, the goods go into our warehouse until it is. | `PackageCheck` |
| 02 | Transport | The right vehicle for the item, from a tail lift Luton to a 26 tonne Moffett. UK, Europe or worldwide. | `Truck` |
| 03 | Install and set up | Our fitters position, assemble and finish on site, then clear the packaging. | `Wrench` |

Icons permitted here. The sequence benefits from a visual anchor.

---

## Section 6. International work

```
Block: FeatureBand
Background: inverse
Padding: generous
Cut: both (rising left to right, alternating from the hero)
```

**Eyebrow:** RECENT INSTALLATIONS
**Title:** Interior design installations, delivered and fitted on site

**Items** (rendered as large type, separated by accent squares)
> Lake Como · Girona · France · Texas

**Body**
> Our fitters travel with the goods. When an interior designer specifies a scheme for a property abroad, we collect the pieces, move them, and install them in the finished room.

**CTA:** See our work → `/recent-jobs`

Works entirely without photography. This is the page's proof point and must stay intact even if no images ever arrive.

---

## Section 7. Who we work with

```
Block: AudienceGrid
Background: surface
Padding: standard
```

**Eyebrow:** OUR CLIENTS
**Title:** Built around the way these businesses work
**Title accent:** these businesses work

**Intro**
> The majority of our customers are repeat traders who use us across multiple projects a year. We provide flexible, reliable logistics that fit the way your business and projects run.

| Title | Body | Benefit |
|---|---|---|
| Interior designers | Bespoke and specified pieces collected from makers, stored until the property is ready, then installed on site. | White-glove handling |
| Event organisers | Stands, builds and activation materials delivered to venue, set up to schedule and collected afterwards. | Time-critical delivery |
| Fit-out contractors | Programme led deliveries into live sites, with teams who understand access, timings and site rules. | Site-ready logistics |
| Bespoke furnishers | One-off and high value pieces handled by people who treat them the way you made them. | Handled with care |

**Images** (supplied, `/images/Our Clients WEBPs/`)

| Card | File | Alt |
|---|---|---|
| Interior designers | `Interior designers.webp` | Finished high-end interior design installation |
| Event organisers | `Event organisers.webp` | Professionally installed exhibition and event stand |
| Fit-out contractors | `Fit-out contractors.webp` | Commercial interior fit-out project under construction |
| Bespoke furnishers | `Bespoke furnishers.webp` | Close-up of high-end bespoke wooden furniture |

Four informational image cards, no icons beside titles, no links.

---

## Section 8. Storage and fulfilment

```
Block: SplitFeature
Background: subtle
Padding: standard
Ratio: 5/7
Reverse: true (media right)
```

**Eyebrow:** STORAGE AND FULFILMENT
**Title:** Somewhere to put it until the site is ready

**Body**
> Projects slip. Sites are not always ready on the day the furniture is. Our warehouse means a job can be collected, consolidated, held and then delivered when it suits the programme, without passing through anyone else's hands.
>
> It is also what lets us take a scheme arriving from several suppliers, bring it together in one place, and deliver it to site as a single co-ordinated installation.

**CTA:** Storage and fulfilment → `/storage` (secondary)

**Image brief**
> Wrapped and labelled goods on racking inside the warehouse. Clean, well lit, no clutter in frame.

---

## Section 9. Fleet

```
Block: FleetStrip
Background: surface
Padding: compact
```

**Eyebrow:** OUR VEHICLES

**Title:** The right vehicle for the item (accent line: "for the item")

**Intro:** From single items to full loads, our modern fleet and specialist vehicles ensure your goods are moved safely and efficiently.

**Image:** `/images/Ds_Hero_webps/Fleet_Vehicles_Hero_Image.webp`

| Name | Capacity | Icon | Vehicle image |
|---|---|---|---|
| LWB and Luton | Tail lift | `LutonVan` | `LutonVAN.webp` |
| 7.5 tonne | Curtain or box | `RigidLorry` | `7.5 Tonne.webp` |
| 18 tonne | Curtain or box | `HeavyLorry` | `18Tonne.webp` |
| HIAB | Crane mounted | `CraneLorry` | `HIAB.webp` |
| 26 tonne Moffett | Forklift mounted | `ForkliftLorry` | `Moffett.webp` |

Vehicle images live in `/images/Vehicle Webps/`.

Icons kept. Vehicle types are scanned, not read.

---

## Section 10. Recent jobs (removed)

Removed from Home: it repeated the Recent installations band (section 6), which already names the same locations and links to `/recent-jobs`. The draft entries below are kept for the Recent jobs page.

```
Block: JobGrid
Variant: narrative
Background: subtle
Padding: standard
Columns: 3
```

**Eyebrow:** RECENT WORK
**Title:** A few of the jobs we have run

**Action link:** All recent work → `/recent-jobs`

**Draft entries.** These use only confirmed facts. Detail must be added or corrected by the client before launch, and nothing beyond what they confirm should be written in.

| Location | Draft narrative |
|---|---|
| Lake Como, Italy | An interior design scheme collected in the UK and installed at a property on Lake Como. Our fitters travelled with the goods and completed the installation on site. |
| Girona, Spain | A specified furniture package moved from the UK to Girona and installed in the finished property by our own team. |
| Texas, USA | An interior installation delivered beyond Europe, collected in the UK and fitted on site in Texas. |

Switch to `variant: card` the day usable photography is supplied. No rebuild required.

---

## Section 11. Quote CTA

```
Block: QuoteCTA
Background: inverse
Padding: generous
Cut: none (flat top edge, reserved for the planned lorry scroll effect)
```

**Title:** Tell us what needs moving

**Body**
> Send us the item, the collection point and the destination and we will come back with a price. Same day work considered, projects typically booked around three weeks ahead.

**Primary CTA:** Get a quote → `/quote`
**Phone:** shown, with "24/7, 365" beneath

---

## Internal links out of this page

`/quote` ×3, `/recent-jobs` ×3, `/about` ×1, `/storage` ×1, and all seven service pages ×1 each.

---

## Copy notes

- No claim on this page sits outside the whitelist in `00-source-of-truth.md`.
- "Most of the companies we work with came to us once and stayed" is a rewording of the client's own statement that the majority of customers are repeat traders. If they will not stand behind the phrasing, revert to the plainer version.
- Nothing states an insurance figure, an accreditation or a client name. Those are blocked until evidenced.
- UK English throughout. No exclamation marks. No superlatives.
