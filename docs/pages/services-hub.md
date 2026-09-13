# Page: Services Hub

**Route:** `/services`
**Primary term:** specialist transport and installation
**Blocks:** 7
**Cut sections:** 2 (Hero, QuoteCTA)

> This page must not repeat Home. Home sells the company. This page explains the common thread running through seven services and helps someone identify which one they need. Where a section here looks similar to one on Home, the angle is deliberately different.

---

## Metadata

| Field | Value |
|---|---|
| Meta title | Our Services: Transport, Installation & Storage \| DS European |
| Meta description | Specialist transport with on site installation and storage behind it. Furniture, exhibitions, retail displays, office relocations, equipment and scheduled deliveries. |
| H1 | Specialist transport, installation and storage |
| Schema | `CollectionPage` listing all seven `Service` entries, plus the `FAQPage` block |
| Breadcrumbs | Home → Services |

### Search intent

Primary: specialist transport company UK, transport and installation services.
Secondary: logistics and installation company, white glove logistics UK, transport company with storage, bespoke logistics provider.

---

## Page goal

Two audiences land here. Someone browsing from the nav who needs directing to the right service page, and someone arriving from search who does not yet know what kind of company this is. Serve both without padding.

**Primary CTA:** Get a quote.

---

## Section 1. Hero

```
Block: Hero
Variant: page
Background: inverse
Padding: standard
Cut: bottom (falling left to right)
```

**Eyebrow:** SERVICES

**Title**
> Specialist transport, installation and storage

**Subtitle**
> Seven services, one team, and the same thing underneath all of them. We collect it, we hold it if the site is not ready, we move it, and our own fitters install it at the other end.

**Primary CTA:** Get a quote → `/quote`

No hero image on this variant. Breadcrumbs sit above the title.

---

## Section 2. The services

```
Block: ServiceGrid
Background: surface
Padding: standard
Columns: 3
Show images: true
```

**Title:** What we do

**Intro**
> If your job sits across two of these, that is normal. Most of our work does.

Same seven services, same hrefs and excerpts as Home. This grid uses `showImages: true`, which is the only difference between the two. Where photography is missing, `ImagePlaceholder` renders with a per service brief.

| Service | Image brief |
|---|---|
| Furniture | A wrapped piece being carried into a finished interior |
| Retail Displays | A pop-up unit part assembled in an empty retail space |
| Exhibitions | Flight cases on a venue floor during build up |
| Office Relocations | Desks being reassembled in a new office |
| Equipment | A Moffett unloading a crated machine |
| Business Deliveries | A branded vehicle at a loading bay |
| Private Items | A single blanket wrapped item entering a home |

---

## Section 3. What connects them

```
Block: SplitFeature
Background: subtle
Padding: standard
Ratio: 7/5
Reverse: false (media left)
```

**Eyebrow:** THE COMMON THREAD
**Title:** Seven services, one capability

**Body**
> The list above is organised by what you are moving, because that is how people search for it. Underneath, it is the same capability every time: a crew who can collect, a warehouse that can hold it, a fleet that can lift it, and fitters who can install it.
>
> That matters because jobs rarely stay inside one category. A designer's scheme arrives from four makers, waits three weeks for the property, and is installed alongside an office fit-out. Split across three suppliers that becomes your problem to coordinate. With us it is one job.

**Bullets**
- Collection from makers, suppliers, showrooms or your premises
- Storage between collection and the date you actually need it
- The right vehicle for the weight and the access
- Installation on site by our own fitters, not subcontractors
- One point of contact across the whole job

**Image brief**
> Warehouse interior with mixed goods racked and labelled. This section is about breadth, so a wide shot works better than a detail crop for once.

---

## Section 4. How it works

```
Block: ProcessSteps
Background: surface
Padding: standard
Tone: light
```

**Eyebrow:** HOW IT WORKS
**Title:** The same three stages, whatever it is

| No. | Title | Body | Icon |
|---|---|---|---|
| 01 | Collect and consolidate | From one supplier or several. Where a job arrives from multiple sources we bring it together in one place and check it before anything ships. | `PackageCheck` |
| 02 | Hold or move | Straight out, or into the warehouse until the site is ready. Vehicle chosen for the item and the access at both ends. | `Truck` |
| 03 | Deliver and install | Positioned, assembled and finished on site by our own supervisors and fitters. | `Wrench` |

---

## Section 5. Choosing the right one

```
Block: TwoColumnText
Background: subtle
Padding: compact
```

**Title:** Not sure which service you need?

**Body**
> Most people get this wrong at least once, and it does not matter. The categories exist to make the site navigable, not to decide how we price or plan a job. If your work spans furniture and an office fit-out, or a retail rollout that also needs storing between campaigns, it is still one enquiry and one quote.
>
> If you would rather skip the decision entirely, ring us. Two minutes on the phone will get you further than working out which of seven pages describes your situation most closely.

**CTA:** Get a quote → `/quote` (primary)

---

## Section 6. FAQ

```
Block: FAQ
Background: surface
Padding: standard
Container: narrow
```

**Title:** Common questions

**Do you subcontract any of the work?**
> The installation is ours. Ten of our twenty one staff are supervisors and fitters, and they travel with the job. Some destinations beyond our own fleet's reach are covered through established partners, and we will tell you when that is the case rather than leave you to find out.

**Can one job cover several of these services?**
> Yes, and most of the larger ones do. A single project often involves collection from several suppliers, a period in storage, transport and then installation. It is quoted and managed as one job.

**Do you work with individuals or only businesses?**
> *(Answer depends on the private items decision. If they accept private work: "Both. Most of our work is for businesses, and we also take one-off private deliveries where the item warrants proper handling." If they do not: remove this question entirely and drop the private items service.)*

**Do you cover the whole of the UK?**
> Yes, nationwide, with same day available where the schedule allows. We also work across Europe regularly and have delivered and installed beyond it.

**What is the difference between you and a standard haulier?**
> A haulier moves the goods. We collect them, store them if needed, move them, and install them on site with our own team. For most of our customers the installation is the reason they use us.

**Do you publish prices?**
> No, because every job is built around the item, the route, the access and the date. Send us the details and you will get a price rather than a starting from figure that turns out not to apply.

---

## Section 7. Quote CTA

```
Block: QuoteCTA
Background: inverse
Padding: generous
Cut: top (falling left to right)
```

**Title:** Tell us what needs moving

**Body**
> One item or a full project, one supplier or six. Send us the details and we will come back with a price.

**Primary CTA:** Get a quote → `/quote`
**Phone:** shown, with "24/7, 365" beneath

---

## Internal linking

This page links out to all seven service pages and to `/storage`. Every service page links back here through the breadcrumb. The header Services dropdown mirrors this grid exactly.

This page is the hub that passes authority down to the seven children. Do not let any service page outrank it for the generic terms by giving it a thin treatment.

---

## Claims requiring client sign off

1. The private items answer, which is blocked on the larger decision
2. Partner coverage for destinations beyond their own fleet, and whether they are comfortable saying so openly
3. Consolidating jobs arriving from multiple suppliers, which appears on several pages and has not yet been confirmed once
