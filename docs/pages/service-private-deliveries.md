# Page: Private Deliveries

**Route:** `/services/private-deliveries`
**Primary term:** private and high value item delivery
**Blocks:** 10
**Cut sections:** 3 (Hero, FeatureBand, QuoteCTA)

> **Evidence note.** Every answer in the discovery pack describes business customers. This service came from the drafted category list, and nothing the client has said confirms they take private work, how they price it, or whether they want it. **Confirm before this page is built at all.** If they do not want individual customers, delete the page and drop the category to six. Everything below assumes they do.

---

## Metadata

| Field | Value |
|---|---|
| Meta title | Private & High Value Item Delivery \| DS European |
| Meta description | One-off deliveries for items that matter. Antiques, art, furniture and inherited pieces collected, transported and placed in the room, not left at the door. |
| H1 | Private and high value item delivery |
| Schema | `Service`, serviceType Private delivery, plus the `FAQPage` block |
| Breadcrumbs | Home → Services → Private Items |

### Search intent

Primary: high value item delivery, private furniture delivery.
Secondary: antique delivery service UK, single item transport, auction collection and delivery, art transport UK, furniture delivery to France, white glove delivery for individuals.

---

## Page goal

Someone has one item they care about and no idea who moves a single object properly. Convince them that one item is a real job rather than an imposition, that it will be carried into the room, and that getting a price is a short conversation rather than a form with a postcode and a size category.

**Primary CTA:** Get a quote.

---

## Section 1. Hero

```
Block: Hero
Variant: service
Background: inverse
Padding: standard
Cut: bottom (falling left to right)
```

**Eyebrow:** PRIVATE ITEMS

**Title**
> Private and high value item delivery

**Subtitle**
> One-off deliveries for the things that cannot go in the back of a courier van. Collected carefully, moved properly, and carried into the room rather than left in a hallway.

**Primary CTA:** Get a quote → `/quote`
**Secondary CTA:** Talk to us → `/contact`

**Image brief**
> A single blanket wrapped item being carried into a domestic interior by two people. Domestic setting is important on this page. Every other service image is commercial. 3/2 crop, masked to the motif shape.

---

## Section 2. What we move

```
Block: SplitFeature
Background: surface
Padding: standard
Ratio: 7/5
Reverse: false (media left)
```

**Eyebrow:** WHAT WE MOVE
**Title:** One item, treated as a job in its own right

**Body**
> Most transport is priced and handled by volume. That works until the thing being moved is irreplaceable, at which point being one of four hundred consignments on a vehicle stops feeling reassuring.
>
> We spend most of our week moving furniture and interiors for designers and makers. A private delivery is the same work at a smaller scale, handled by the same people, with the same wrapping and the same care.

**Bullets**
- Antiques and inherited furniture
- Art, mirrors and framed pieces
- Commissioned and designer furniture
- Auction and dealer purchases
- Pianos and large instruments *(verify)*
- Single pieces to or from a second property
- Items too valuable or awkward for a courier
- Deliveries to and from properties in Europe

**Image brief**
> Close crop of an item being blanket wrapped before collection. Hands and material, no faces needed.

---

## Section 3. Into the room, not to the door

```
Block: SplitFeature
Background: subtle
Padding: standard
Ratio: 5/7
Reverse: true (media right)
```

**Eyebrow:** HOW WE WORK
**Title:** A delivery that ends on the doorstep is only half a delivery

**Body**
> Ten of our team are fitters and supervisors. On a private job that means the item comes into the house, goes to the room you want it in, and is unwrapped and positioned before anyone leaves.
>
> If it needs assembling, it gets assembled. If the packaging needs taking away, it goes with us. You should not be left with a crate in the hallway and a set of instructions.

**Bullets**
- Carried in and placed in the room you want it
- Unwrapped, assembled and positioned on site
- Packaging taken away with us *(verify)*
- Two person handling as standard *(verify)*

**CTA:** About DS European → `/about` (secondary)

**Image brief**
> Item in its final position in a room, packing blankets folded on the floor beside it. The end of the job, not the middle.

---

## Section 4. How a private delivery runs

```
Block: ProcessSteps
Background: surface
Padding: standard
Tone: light
```

**Eyebrow:** HOW IT WORKS
**Title:** Straightforward, and mostly handled by us

| No. | Title | Body | Icon |
|---|---|---|---|
| 01 | Tell us what it is | What the item is, where it is now, where it is going. Photographs help more than measurements, though both are useful. | `MessageSquare` |
| 02 | We collect | From a dealer, an auction house, a maker, a family home or a storage unit. Wrapped and secured before it moves. | `PackageCheck` |
| 03 | We deliver and place it | Into the property, into the room, unwrapped and positioned, packaging away with us. | `Home` |

---

## Section 5. The same care as a commissioned interior

```
Block: FeatureBand
Background: inverse
Padding: generous
Cut: both (rising left to right)
```

**Eyebrow:** WHY US
**Title:** We move furniture for the people who make it

**Items**
> Collected · Wrapped · Delivered · Placed

**Body**
> Our regular customers are interior designers, bespoke furnishers and fit-out companies. The pieces we handle for them are commissioned, one-off and expensive to get wrong. A private delivery gets the same crew, the same vehicles and the same handling, because we do not have a lesser version to offer.

**CTA:** Get a quote → `/quote`

---

## Section 6. Where we deliver

```
Block: CoverageList
Background: surface
Padding: standard
```

**Eyebrow:** COVERAGE
**Title:** UK, Europe and beyond

| Region | Detail |
|---|---|
| United Kingdom | Nationwide, including same day where the schedule allows |
| France | Regular scheduled and project work |
| Italy | Including completed installations on Lake Como |
| Spain | Including completed installations in Girona |
| Rest of Europe | Covered through our own fleet and established partners |
| Worldwide | Delivered and installed, including projects in the United States |

Shared data source across all service pages. Do not edit per page.

---

## Section 7. Lead times and pricing

```
Block: TwoColumnText
Background: subtle
Padding: compact
```

**Title:** Lead times and how we quote

**Body**
> Single item deliveries in the UK can often be covered quickly, sometimes same day. Anything going to or from a property in Europe needs more notice, typically around three weeks, because the route and the paperwork have to be planned rather than improvised.
>
> There is no price list. A chair going across Kent and a dining table going to the south of France are not comparable jobs, and a published rate would be wrong for one of them. Tell us what the item is and where it needs to go and we will give you a price.

**CTA:** Get a quote → `/quote` (primary)

---

## Section 8. FAQ

```
Block: FAQ
Background: surface
Padding: standard
Container: narrow
```

**Title:** Common questions

**I only have one item. Is that too small a job?**
> No. Single items are exactly what this service is for. The care involved does not change because there is only one of something.

**Will you bring it inside, or leave it at the door?**
> Inside, and into the room you want it in. Our fitters unwrap and position the item before they leave, and assemble it if it needs assembling.

**Can you collect from an auction house or a dealer?**
> Yes. Auction houses, dealers, galleries, makers and private addresses are all normal collection points. Tell us the collection deadline, because auction storage charges tend to start quickly.

**Can you deliver to a property abroad?**
> Yes. We work across Europe regularly and have delivered further afield. Allow more notice for anything leaving the UK, and tell us early so the route and paperwork can be arranged properly.

**Do I need to be there for the collection or the delivery?**
> Someone needs to be present at both ends to give access and confirm where the item is going. It does not have to be you, as long as we know who to expect and they can make that decision.

**How do I get a price?**
> Send us a photograph of the item, a rough size, and the two addresses. That is usually enough for a price without a site visit.

---

## Section 9. Related services

```
Block: RelatedServices
Background: subtle
Padding: compact
```

| Title | Href |
|---|---|
| Furniture | `/services/furniture-transport` |
| Storage and Fulfilment | `/storage` |
| Office Relocations | `/services/office-relocations` |

---

## Section 10. Quote CTA

```
Block: QuoteCTA
Background: inverse
Padding: generous
Cut: top (falling left to right)
```

**Title:** Got something that matters to move?

**Body**
> Send us a photograph, a rough size and the two addresses. We will come back with a price.

**Primary CTA:** Get a quote → `/quote`
**Phone:** shown, with "24/7, 365" beneath

---

## Claims requiring client sign off

Before anything else on this list: **confirm they want private customers at all.**

1. Whether private and individual work is accepted, and whether they want more of it
2. Pianos and large instruments, which need specialist handling and may be a firm no
3. Two person handling as standard on private jobs
4. Packaging removal from a domestic property
5. Assembly in a domestic setting, as opposed to commercial installation
6. Collection from auction houses, which often have their own access and release procedures
7. Whether same day applies to private work or only to business accounts

### A note on this audience

Individuals behave differently to trade customers. They ask about price earlier, they worry about damage more, and they are far more likely to abandon a quote form than pick up the phone. Two consequences worth acting on:

- The phone number needs to be more prominent on this page than on any other.
- The FAQ answers the price question directly rather than deflecting it, which is why the last question exists. If the client is uncomfortable with that, the page will convert badly and it is worth understanding why before softening it.
