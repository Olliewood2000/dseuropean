# Page: Recent Jobs

**Route:** `/recent-jobs`
**Primary term:** none. This page exists to convert, not to rank
**Blocks:** 6
**Cut sections:** 2 (Hero, QuoteCTA)

> **This page is blocked on photography and on job detail.** It is written to work without either, because a case study page with placeholder images and two sentences per job is worse than not having one. The narrative version below is a real page rather than a holding page. Switch to the card version the day usable material arrives.

---

## Structural decision

**Build this as a single page for now, not a collection with individual case study pages.**

Four jobs do not justify a route per job, and four thin case study pages will index badly and convert worse than one good page. Move to `/recent-jobs/[slug]` in phase two, once there are at least six jobs with photography and a paragraph of real detail each. Structure the content so that migration is a content change rather than a rebuild.

---

## Metadata

| Field | Value |
|---|---|
| Meta title | Recent Jobs: Installations in the UK, Europe & Beyond \| DS European |
| Meta description | Interior installations delivered and fitted on site in Lake Como, Girona, France and Texas, alongside the everyday work across the UK. |
| H1 | Recent jobs |
| Schema | `CollectionPage`. No `Review` or `Rating` markup, since none exists |
| Breadcrumbs | Home → Recent Jobs |

---

## Page goal

Someone is most of the way to enquiring and wants to know whether this company has done anything like their job. Give them evidence rather than adjectives.

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

**Eyebrow:** RECENT JOBS

**Title**
> Recent jobs

**Subtitle**
> A sample of the work, from interior installations abroad to the scheduled runs that happen every week without anyone noticing.

**Primary CTA:** Get a quote → `/quote`

---

## Section 2. International installations

```
Block: FeatureBand
Background: inverse
Padding: generous
Cut: both (rising left to right)
```

> Placed high deliberately. On this page the international work is the headline rather than a supporting proof point, and it carries the section even with no photography at all.

**Eyebrow:** INTERIOR DESIGN INSTALLATIONS
**Title:** We travel with the furniture

**Items**
> Lake Como · Girona · France · Texas

**Body**
> When a designer specifies a scheme for a property abroad, someone still has to get it there in one piece and put it in the right room. On these projects we collected in the UK, moved the consignment, and our own fitters completed the installation on site.

No CTA on this band. The page below is the CTA.

**Note on cut count:** with a cut on the hero, both edges here and the closing CTA, this page runs at the three cut limit. Do not add a fourth.

---

## Section 3. The jobs

```
Block: JobGrid
Variant: narrative
Background: surface
Padding: standard
Columns: 3
```

**Title:** Recent work

**Intro**
> Written up rather than photographed, for now. Our crews are collecting images on site and this page will grow.

That intro line is doing real work. It explains the absence of photography honestly and frames it as in progress rather than missing, which is far better than an unexplained wall of text.

### Draft entries

Every entry below uses only what the client confirmed: destination and job type. **The client must supply the detail before launch.** Nothing beyond what they verify should be written in.

| Location | Service | Draft narrative |
|---|---|---|
| Lake Como, Italy | Furniture and interior installation | An interior design scheme collected in the UK and installed at a property on Lake Como. Our fitters travelled with the goods and completed the installation on site. |
| Girona, Spain | Furniture and interior installation | A specified furniture package moved from the UK to Girona and installed in the finished property by our own team. |
| Texas, USA | Furniture and interior installation | An interior installation delivered beyond Europe, collected in the UK and fitted on site in Texas. |
| France | Furniture and interior installation | Interior design installation work delivered into France, collected from UK makers and installed on arrival. |

### What to ask the client for, per job

A usable entry needs four things and nothing more:

1. What the job actually was, in one sentence
2. The constraint that made it difficult. Access, a deadline, a fragile item, a delayed site
3. What was done about it
4. The outcome

Four sentences per job transforms this page. Ask for them on the four above before asking for anything else, because these are the jobs that no competitor in Kent can match.

---

## Section 4. Everyday work

```
Block: TwoColumnText
Background: subtle
Padding: compact
```

**Title:** And the rest of it

**Body**
> Most of what we do is not a job in Italy. It is a scheme collected from four makers and held until a property is ready, an office moved over a weekend so nobody loses a working day, a stand delivered into a venue inside a two hour build up slot, and the same run to the same places every week for customers who have used us for years.
>
> The majority of our customers are repeat traders. The work that keeps a transport company going is the work nobody photographs.

**CTA:** See our services → `/services` (secondary)

This section exists to stop the page reading as though the company only does glamorous international projects. A fit-out contractor with an office move should see themselves here.

---

## Section 5. Coverage

```
Block: CoverageList
Background: surface
Padding: standard
```

**Eyebrow:** COVERAGE
**Title:** Where we have worked

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

## Section 6. Quote CTA

```
Block: QuoteCTA
Background: inverse
Padding: generous
Cut: top (falling left to right)
```

**Title:** Got something similar?

**Body**
> Tell us what needs moving and where it needs to go. Whether it is one piece across the county or a full scheme across Europe, send us the details and we will come back with a price.

**Primary CTA:** Get a quote → `/quote`
**Phone:** shown, with "24/7, 365" beneath

---

## When photography arrives

Three changes, no rebuild:

1. `JobGrid` switches from `variant: narrative` to `variant: card`
2. Add the hero image to the `Hero` block, switching it from `variant: page` to `variant: service`
3. If more than six jobs exist with real detail, migrate to `/recent-jobs/[slug]` with this page becoming the index

---

## Claims requiring client sign off

1. All four job narratives, which currently contain only destination and job type
2. Whether the client is contractually able to name locations at all. Interior designers and their private clients are frequently covered by confidentiality, and Lake Como plus a named designer could be a problem where Lake Como alone is not
3. Whether any client will give a testimonial, which would change this page more than photography would
4. The France entry, which is the vaguest of the four and may cover several jobs rather than one

### The confidentiality point deserves attention

Before this page is built, ask directly whether they can publish job locations. High value residential work often sits under an NDA, and the entire page rests on four place names. If the answer is no, the page becomes anonymised job types by region and the international band has to be reworded to describe the work without naming where.
