# Page: Storage and Fulfilment

**Route:** `/storage`
**Primary term:** commercial storage and fulfilment
**Blocks:** 7
**Cut sections:** 2 (Hero, QuoteCTA)

> **The client called this their edge over competitors and then told us nothing about it.** No location, no capacity, no security detail, no insurance position, no bonded status. This page is written around that gap, which is why it argues from use case rather than from specification. It will get materially stronger once those answers arrive, and the sign off list is the most important part of this document.

---

## Metadata

| Field | Value |
|---|---|
| Meta title | Storage & Fulfilment for Projects and Campaigns \| DS European |
| Meta description | Warehouse storage that fits around a project. Hold goods until the site is ready, consolidate deliveries from several suppliers, and call stock off when you need it. |
| H1 | Storage and fulfilment |
| Schema | `Service`, serviceType Storage and fulfilment, plus the `FAQPage` block |
| Breadcrumbs | Home → Storage and Fulfilment |

### Search intent

Primary: commercial storage and fulfilment, project storage.
Secondary: furniture storage for interior designers, exhibition stand storage, retail display storage, storage and distribution UK, warehouse storage Kent.

Note: this page sits at the top level rather than under `/services` because it is a capability that supports all seven services rather than a service alongside them.

---

## Page goal

Someone has goods with nowhere to go and a date that has slipped. Convince them there is somewhere secure to put it, run by the same company doing the transport, so nothing has to be handed between two suppliers.

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

**Eyebrow:** STORAGE AND FULFILMENT

**Title**
> Somewhere to put it until you need it

**Subtitle**
> Our own warehouse, run by the same company doing the transport. Goods held until the site is ready, schemes consolidated from several suppliers, and stock called off when it suits your programme.

**Primary CTA:** Get a quote → `/quote`
**Secondary CTA:** Talk to us → `/contact`

**Image brief**
> Warehouse interior, racked and labelled goods, clean and well lit. This is the single most important missing photograph on the site after the installation shots, because the whole page asks the reader to trust a building they cannot see.

---

## Section 2. Why it exists

```
Block: SplitFeature
Background: surface
Padding: standard
Ratio: 7/5
Reverse: false (media left)
```

**Eyebrow:** THE PROBLEM
**Title:** The goods are ready. The site is not.

**Body**
> It happens on almost every project. The furniture is finished, the stand has come back from a show, the fixtures have arrived from the printer, and the place they are meant to go is three weeks behind.
>
> Without somewhere to put it, that becomes somebody's problem. Usually it becomes a corner of a workshop, a hallway at the client's office, or a self storage unit booked in a hurry by whoever had a card on them. None of those are good for goods that took four months to make.

**Bullets**
- Hold goods when a site or property is delayed
- Store between phases of a project
- Keep exhibition stands and display kit between uses
- Take delivery on your behalf while you are elsewhere
- Free up workshop and office space

**Image brief**
> Wrapped furniture on racking, labelled with job references. Detail of the labelling is more persuasive than a wide empty aisle.

---

## Section 3. Consolidation and fulfilment

```
Block: SplitFeature
Background: subtle
Padding: standard
Ratio: 5/7
Reverse: true (media right)
```

**Eyebrow:** CONSOLIDATION
**Title:** Four suppliers, one delivery

**Body**
> A specified scheme rarely comes from one place. The joinery is made in one workshop, the upholstery in another, the lighting is imported and the stone arrives separately. Delivered individually to a live site, that is four bookings, four access slots and four chances for something to arrive on a day nobody is there.
>
> We take them all into the warehouse as they are finished, check them against the schedule, and deliver to site as one coordinated installation on the date you actually want it.

**Bullets**
- Goods received from multiple suppliers on your behalf
- Checked against your schedule as they arrive
- Held together until the full scheme is complete
- Delivered as a single coordinated installation
- Call off in stages where a project is phased

**CTA:** How we work → `/services` (secondary)

**Image brief**
> Several distinctly different items grouped together on the warehouse floor, clearly staged for one job.

---

## Section 4. How storage works with us

```
Block: ProcessSteps
Background: surface
Padding: standard
Tone: light
```

**Eyebrow:** HOW IT WORKS
**Title:** In, held, out

| No. | Title | Body | Icon |
|---|---|---|---|
| 01 | Goods in | We collect, or receive delivery on your behalf. Everything is checked in against your job reference and the schedule. | `PackageCheck` |
| 02 | Held | Stored in our own warehouse rather than a third party facility, so the same company remains responsible throughout. | `Warehouse` |
| 03 | Called off | Released when you need it, delivered by our own vehicles, installed on site by our own fitters. | `Truck` |

---

## Section 5. Who uses it

```
Block: AudienceGrid
Background: subtle
Padding: standard
```

**Eyebrow:** WHO USES IT
**Title:** Mostly people whose deadlines moved

| Title | Body |
|---|---|
| Interior designers | Schemes collected from makers as they finish, held until the property is ready, then installed as one job. |
| Event organisers | Stands, cases and event kit stored between shows instead of taking up space for ten months of the year. |
| Retail and brand teams | Display units and point of sale held between campaigns, called off for the next activation. |
| Fit-out contractors | Furniture and fittings held off site until the programme reaches the point where they can go in. |

---

## Section 6. FAQ

```
Block: FAQ
Background: surface
Padding: standard
Container: narrow
```

**Title:** Common questions

**How long can you store goods for?**
> From a few days to as long as a project needs. Short term storage around a delayed site and longer term storage of display kit between campaigns are both normal.

**Can you take delivery on our behalf?**
> Yes. Suppliers deliver into our warehouse, we check the goods in against your job reference, and you are told what has landed rather than having to chase it.

**Can you hold a scheme from several suppliers and deliver it as one?**
> Yes, and that is what most of our project storage is used for. Items arrive as each maker finishes, sit together until the scheme is complete, then go to site as a single installation.

**Can we call goods off in stages?**
> Yes. Phased projects and staged rollouts are handled by releasing part of the job at a time, with the rest staying in store.

**Do you handle the delivery out of storage as well?**
> Yes. It is the same company throughout. The goods are collected by us, stored by us, delivered by us and installed by us, so nothing changes hands between suppliers.

**Where is the warehouse and how is it secured?**
> *(Blocked. Cannot be answered until the client supplies location, security arrangements and insurance position. Do not build this question with a vague answer. Either answer it properly or remove it.)*

---

## Section 7. Quote CTA

```
Block: QuoteCTA
Background: inverse
Padding: generous
Cut: top (falling left to right)
```

**Title:** Need somewhere to put it?

**Body**
> Tell us roughly what it is, how much of it there is and how long you need it held. We will come back with a price.

**Primary CTA:** Get a quote → `/quote`
**Phone:** shown, with "24/7, 365" beneath

---

## Claims requiring client sign off

This page has the widest gap between what is claimed and what is evidenced of anything on the site. Nothing below is stated anywhere in the discovery answers.

**Blocking**
1. Warehouse location and whether it is at the Charing address or elsewhere
2. Capacity, in whatever unit they think in. Square footage, pallet spaces or racking bays
3. Security arrangements: alarmed, monitored, gated, CCTV
4. Insurance position for goods held in store, and the cover level
5. Whether the facility is bonded, which matters for anything moving in and out of Europe

**Operational**
6. Receiving deliveries from third party suppliers on the client's behalf
7. Checking goods in against a job reference or schedule
8. Call off in stages
9. Whether storage is charged separately or absorbed into project pricing
10. Minimum and maximum storage periods, if any
11. Whether they will store goods for customers who are not also using them for transport

### Why this page matters more than its traffic suggests

The client named storage as the thing that gives them an edge. It will never be a high volume search term, but it is the reason a designer keeps using them across four projects instead of one. Treat it as a retention page rather than an acquisition page, and link to it from every service page.

Once the blocking answers arrive, add a `TrustStrip` between sections 1 and 2 carrying capacity, security and insurance as three figures. That is the version of this page that actually converts.
