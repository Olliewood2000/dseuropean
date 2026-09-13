# Page: About

**Route:** `/about`
**Primary term:** none. Brand and trust page
**Blocks:** 8
**Cut sections:** 3 (Hero, FeatureBand, QuoteCTA)

> **There is no founding story available.** No year, no founder, no company history. This page is built around what the client actually told us, and the strongest material they gave us is the team breakdown. Do not invent a heritage narrative to fill the gap. Sites that do are transparent about it to anyone who reads carefully.

---

## Metadata

| Field | Value |
|---|---|
| Meta title | About DS European \| Logistics and Installation, Kent |
| Meta description | A twenty one strong logistics and installation team based in Charing, Kent. Ten of us are supervisors and fitters, which is why our work does not stop at the kerb. |
| H1 | About DS European |
| Schema | `AboutPage` referencing the `Organization`, with address, telephone, `numberOfEmployees` and `openingHours` |
| Breadcrumbs | Home → About |
| Anchors | `#fleet`, linked from several service pages. Must be stable |

---

## Page goal

Someone is deciding whether to trust this company with something expensive. Give them the facts that make the installation claim credible, and the operational detail that tells them this is a real company with vehicles and a warehouse rather than a broker with a phone.

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

**Eyebrow:** ABOUT

**Title**
> About DS European

**Subtitle**
> A logistics and installation company based in Charing, Kent, working across the UK, Europe and beyond. Twenty one people, our own vehicles, our own warehouse and our own fitters.

**Primary CTA:** Get a quote → `/quote`
**Secondary CTA:** Talk to us → `/contact`

---

## Section 2. Who we are

```
Block: SplitFeature
Background: surface
Padding: standard
Ratio: 7/5
Reverse: false (media left)
```

**Eyebrow:** THE COMPANY
**Title:** A logistics company that turns up with tools

**Body**
> DS European moves high value and bespoke goods for businesses, and then installs them. Interior design schemes, exhibition builds, retail displays, office relocations and specialist equipment, across the UK, throughout Europe and, when the work calls for it, further than that.
>
> Between us we have around sixty years of combined experience in the industry. Most of what we do is for the same customers repeatedly, which is the part we would point at if you asked us how we are doing.

**Bullets**
- Based at Charing, near Ashford in Kent
- Twenty one people across transport, installation and warehousing
- Our own fleet, from tail lift Lutons to a 26 tonne Moffett
- Our own warehouse for storage, consolidation and fulfilment
- Available 24 hours a day, 365 days a year

**Image brief**
> The team, or part of it, in branded polos at the yard or warehouse. This is the one place on the site where a group photograph belongs, and it does more for trust here than anywhere else.

---

## Section 3. By the numbers

```
Block: StatBand
Background: subtle
Padding: standard
```

| Figure | Label |
|---|---|
| 21 | People across transport, installation and warehousing |
| 10 | Supervisors and fitters |
| 60 | Years of combined industry experience |
| 24/7 | Available 365 days a year |

`StatBand` appears here and nowhere else on the site. Home uses the lighter `TrustStrip` so the two never compete.

---

## Section 4. The team

```
Block: SplitFeature
Background: surface
Padding: standard
Ratio: 5/7
Reverse: true (media right)
```

**Eyebrow:** THE TEAM
**Title:** Ten of us are fitters

**Body**
> Twenty one people. Six drivers, ten supervisors and fitters, three warehouse operatives and two in the office. Those numbers are the whole argument for using us, so they are worth reading properly.
>
> Ten people whose job is what happens after the vehicle is unloaded. They travel with the work, unpack it, position it, assemble it and finish the room. For a good number of our customers they also run the job on site, deal directly with that customer's own client and represent them at the property.

**Bullets**
- 6 drivers
- 10 supervisors and fitters
- 3 warehouse operatives
- 2 in the office, who answer the phone when you ring it

**Image brief**
> Two fitters mid-installation, concentrating on the work. Not posed, not looking at camera.

This section is the spine of the page. The client's own headcount breakdown is the most persuasive thing in the entire discovery pack and it has never been used anywhere. The numbers are left to speak without a comparative claim about other companies attached to them.

---

## Section 5. How we work

```
Block: FeatureBand
Background: inverse
Padding: generous
Cut: both (rising left to right)
```

**Eyebrow:** HOW WE WORK
**Title:** Bespoke is not a word we use to justify a price

**Items**
> Safe · Reliable · Efficient

**Body**
> There is no rate card here, because there is no standard job. Every quote is built around the item, the route, the access and the date, and the reason we work that way is that it is the only honest way to price work like this. What we want to be known for is straightforward enough: that we turn up, that we do what we said, and that you hear about a problem from us before you hear about it from your customer.

No CTA on this band.

The three words are the client's own, taken from their mission statement. So is the framing of bespoke solutions.

---

## Section 6. The fleet

```
Block: FleetStrip
Background: surface
Padding: standard
id: fleet
```

**Eyebrow:** THE FLEET
**Title:** The right vehicle for the item

**Intro**
> The vehicle is chosen for the item and the access at both ends. Owning the lifting equipment rather than hiring it in is the difference between a difficult unload being a plan and being a problem.

| Name | Capacity | Icon |
|---|---|---|
| LWB and Luton | Tail lift | `Van` |
| 7.5 tonne | Curtain or box | `Truck` |
| 18 tonne | Curtain or box | `Truck` |
| HIAB | Crane mounted | `Crane` |
| 26 tonne Moffett | Vehicle mounted forklift | `Forklift` |

**Anchor `#fleet` must be stable.** It is linked from the furniture and equipment service pages.

The intro line assumes the lifting equipment is owned rather than hired. Same open question as the equipment page. If hired, cut that sentence here and the whole band on that page.

---

## Section 7. Where we work

```
Block: CoverageList
Background: subtle
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

Shared data source. Do not edit per page.

---

## Section 8. Quote CTA

```
Block: QuoteCTA
Background: inverse
Padding: generous
Cut: top (falling left to right)
```

**Title:** Tell us what needs moving

**Body**
> One item or a full project. Send us the details and we will come back with a price.

**Primary CTA:** Get a quote → `/quote`
**Phone:** shown, with "24/7, 365" beneath

---

## Deviations from the standard About composition

`ProcessSteps` is deliberately omitted. It appears on Home, the services hub and all seven service pages, and a ninth run through the same three stages here would be filler. Anyone on About has already seen it.

---

## Claims requiring client sign off

1. Whether the lifting equipment is owned or hired, which affects section 6 and the whole equipment page
2. The characterisation of fitters running jobs on site and dealing with the client's own customers, which is drawn from the client's own written answer but is stronger here in their own voice
3. Whether they are comfortable publishing the headcount breakdown. Some companies prefer not to reveal their size. If that is the case, this page loses its best material and will need rethinking rather than trimming

## Content still missing for this page

The gaps below are not blocking, but each one would measurably improve the page:

1. **Year founded.** Sixty years combined is a team statistic, not a company age. A founding year would sit naturally in section 2 and is the most common thing a cautious customer looks for
2. **Who runs it.** Gary is on the business card with no role attached. A named director with a job title converts better than an anonymous company
3. **What DS stands for.** Possibly initials, possibly nothing. If there is a story it belongs in section 2, and if there is not, leave it alone
4. **Team photography.** Section 2 specifies a group shot and section 4 an installation shot. Both are easy to take and both are currently placeholders
5. **Accreditations and memberships.** FORS, BAR, ISO, trade bodies. If any exist they belong on this page as a logo row beneath section 3
6. **Insurance and goods in transit cover.** Currently unstated anywhere on the site. Once supplied, the natural home is a fourth stat in section 3
7. **Company registration and VAT numbers.** For the footer rather than this page, but they come from the same conversation
8. **Operator licence**, and whether international work runs on their own licence or through partners

### A note on the name

DS European do work beyond Europe. Texas is on the site in four places. If the client has a view on that, section 2 is where a line acknowledging it would sit, and it tends to read as confident rather than apologetic. Ask before writing it, because some companies are sensitive about their own name.
