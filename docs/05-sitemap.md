# 05. Sitemap and Internal Linking

Route structure, navigation, and how the pages connect to each other. Internal linking is the part of this document that matters most. The route list is twenty minutes of work; the linking is what decides whether seven service pages support each other or compete.

---

## 1. Hierarchy

```
/
├── /services                          Hub
│   ├── /services/furniture-transport
│   ├── /services/retail-display-transport
│   ├── /services/exhibition-transport
│   ├── /services/office-relocations
│   ├── /services/equipment-transport
│   ├── /services/business-deliveries
│   └── /services/private-deliveries
├── /storage                           Top level, supports all services
├── /recent-jobs
├── /about                             #fleet anchor
├── /quote                             Conversion
├── /contact
├── /privacy                           Footer only
├── /cookies                           Footer only
├── /terms                             Footer only
└── /dev/components                    noindex, excluded
```

**Maximum depth is two clicks from Home for every indexable page.** Service pages are reachable in one click from the Home service grid and in two through the hub. Both paths exist deliberately.

`/storage` sits at the top level rather than under `/services` because it is a capability supporting all seven services rather than an eighth service alongside them. It is linked from every service page, which is where most of its traffic will come from.

---

## 2. Route table

| Route | Priority | Change freq | In nav | In footer | Indexed |
|---|---|---|---|---|---|
| `/` | 1.0 | monthly | Logo | Yes | Yes |
| `/services` | 0.9 | monthly | Yes | Yes | Yes |
| `/services/furniture-transport` | 0.8 | monthly | Dropdown | Yes | Yes |
| `/services/retail-display-transport` | 0.8 | monthly | Dropdown | Yes | Yes |
| `/services/exhibition-transport` | 0.8 | monthly | Dropdown | Yes | Yes |
| `/services/office-relocations` | 0.8 | monthly | Dropdown | Yes | Yes |
| `/services/equipment-transport` | 0.8 | monthly | Dropdown | Yes | Yes |
| `/services/business-deliveries` | 0.8 | monthly | Dropdown | Yes | Yes |
| `/services/private-deliveries` | 0.8 | monthly | Dropdown | Yes | Yes |
| `/storage` | 0.8 | monthly | Yes | Yes | Yes |
| `/recent-jobs` | 0.7 | weekly | Yes | Yes | Yes |
| `/quote` | 0.7 | yearly | CTA button | Yes | Yes |
| `/about` | 0.6 | yearly | Yes | Yes | Yes |
| `/contact` | 0.6 | yearly | Yes | Yes | Yes |
| `/privacy` | 0.2 | yearly | No | Bottom bar | Yes |
| `/cookies` | 0.2 | yearly | No | Bottom bar | Yes |
| `/terms` | 0.2 | yearly | No | Bottom bar | Yes |
| `/dev/components` | n/a | n/a | No | No | **No** |

Google largely ignores the priority and changefreq values. They are included because they cost nothing and other crawlers do read them. Do not spend time tuning them.

`/recent-jobs` is set to weekly because it is the only page expected to change regularly once photography starts arriving.

---

## 3. Header navigation

Five items and one button. Resist adding more.

| Label | Target | Behaviour |
|---|---|---|
| Services | `/services` | Dropdown panel listing all seven, two columns, one line of description each. The label itself is a link |
| Storage | `/storage` | |
| Recent Jobs | `/recent-jobs` | |
| About | `/about` | |
| Contact | `/contact` | |
| **Get a quote** | `/quote` | Primary button, always visible including on mobile |

Phone number sits right of the nav with "24/7, 365" beneath it in `micro`.

The Services label must be a real link, not just a dropdown trigger. A hub page that can only be reached by clicking past it loses most of its traffic and most of its authority.

---

## 4. Footer

Four columns at `lg`, stacking to one below `md`.

**Column 1: DS European**
Short logo, one line positioning statement, full address, and a link to `/about`.

**Column 2: Services**
All seven service pages in the same order as the Home grid, plus a link to `/services`.

**Column 3: Company**
About, Storage and Fulfilment, Recent Jobs, Contact, Get a quote.

**Column 4: Contact**
Phone, email, WhatsApp, hours. Every one a working link.

**Bottom bar**
Company registration and VAT numbers once supplied, Privacy, Cookies, Terms, copyright line.

The footer is where every page gets its link to every other page. It is what keeps the site free of orphans without cluttering the body content.

---

## 5. Breadcrumbs

Present on every page except Home. Emits `BreadcrumbList` schema.

| Page | Trail |
|---|---|
| `/services` | Home → Services |
| `/services/[slug]` | Home → Services → [Service name] |
| `/storage` | Home → Storage and Fulfilment |
| `/recent-jobs` | Home → Recent Jobs |
| `/about` | Home → About |
| `/quote` | Home → Get a Quote |
| `/contact` | Home → Contact |
| Legal pages | Home → [Page name] |

Current page is never a link.

---

## 6. Internal linking map

Body links only. Header and footer links are sitewide and excluded from this table.

### From Home

| Target | Count | Context |
|---|---|---|
| `/quote` | 3 | Hero, storage section, closing CTA |
| `/recent-jobs` | 3 | Hero secondary, international band, jobs section |
| Each of 7 services | 1 each | Service grid cards |
| `/about` | 1 | More than transport section |
| `/storage` | 1 | Storage section |

### From the services hub

| Target | Count |
|---|---|
| Each of 7 services | 1 each, plus the grid card image link |
| `/storage` | 1 |
| `/quote` | 2 |

### From each service page

| Target | Count | Context |
|---|---|---|
| `/quote` | 3 | Hero, lead times section, closing CTA |
| `/storage` | 1 | Via RelatedServices on most pages |
| 2 other services | 1 each | RelatedServices, chosen manually |
| `/about` or `/about#fleet` | 1 | Handling or fleet reference |
| `/recent-jobs` | 0 or 1 | Only on pages carrying the international band |

### From `/storage`

| Target | Count |
|---|---|
| `/services` | 1 |
| `/quote` | 2 |

`/storage` deliberately does not link out to individual service pages. It receives links rather than distributing them, because its job is retention rather than routing.

### From `/recent-jobs`

| Target | Count |
|---|---|
| `/services` | 1 |
| `/quote` | 2 |

### From `/about`

| Target | Count |
|---|---|
| `/quote` | 2 |
| `/contact` | 1 |

### From `/contact`

| Target | Count |
|---|---|
| `/quote` | 3 |

### Related services pairings

Chosen manually rather than generated, so each pairing makes commercial sense.

| Page | Links to |
|---|---|
| Furniture | Office Relocations, Exhibitions, Storage |
| Office Relocations | Furniture, Equipment, Storage |
| Exhibitions | Retail Displays, Equipment, Storage |
| Retail Displays | Exhibitions, Business Deliveries, Storage |
| Equipment | Office Relocations, Business Deliveries, Storage |
| Business Deliveries | Retail Displays, Equipment, Storage |
| Private Items | Furniture, Office Relocations, Storage |

Every service page links to `/storage`. That is deliberate and it is the single most valuable internal link on the site, because storage is what turns one job into a relationship.

---

## 7. Anchor text

- **Descriptive, and varied.** Never the same anchor pointing at two different pages, and never the identical anchor every time a page is linked.
- **Never** "click here", "read more", "this page", or a bare URL.
- Exact match anchors are fine occasionally and suspicious when every link uses them. Aim for roughly a third exact, a third partial, a third natural phrasing.

Worked example, links to `/services/furniture-transport`:

| From | Anchor |
|---|---|
| Home service grid | Furniture |
| Private Items related | Furniture |
| Office Relocations related | Furniture |
| Services hub grid | Furniture |
| Body prose, where it occurs | furniture transport and installation |

The card and grid anchors are structural and repeat by necessity. It is the prose anchors that should vary.

---

## 8. Keyword map

One primary term per page. This table is the cannibalisation defence and nothing should be written that contradicts it.

| Page | Primary term | Secondary |
|---|---|---|
| `/` | specialist transport and installation UK | white glove logistics, transport and installation company |
| `/services` | specialist transport company UK | logistics and installation services |
| Furniture | furniture transport and installation | bespoke furniture delivery, luxury furniture transport |
| Retail Displays | retail display transport | pop-up unit delivery, store fixture installation |
| Exhibitions | exhibition stand transport | event logistics, trade show delivery |
| Office Relocations | office relocation and installation | commercial relocation, office move company |
| Equipment | specialist equipment transport | machinery transport, HIAB and Moffett delivery |
| Business Deliveries | scheduled business deliveries | dedicated transport, same day business courier |
| Private Items | private and high value item delivery | antique delivery, single item transport |
| `/storage` | commercial storage and fulfilment | project storage, exhibition stand storage |
| `/about` | DS European | transport company Kent |
| `/contact` | DS European contact | transport company Charing Ashford |

### Cannibalisation risks

Four pairs are close enough to need watching.

**Furniture and Private Items.** Both are furniture delivery. The separation is audience: Furniture is written for designers, makers and fit-out firms, Private Items for individuals with one piece. Keep the language of each firmly in its own audience. If Private Items is dropped, this risk disappears entirely.

**Exhibitions and Retail Displays.** Both cover branded temporary builds. The separation is venue: a show floor with a build-up slot, versus a store or centre with a trading-hours restriction. Never let either page describe the other's setting.

**`/services` and `/`.** Both target the generic company term. Home should own the brand and the broad proposition; the hub should own the service category language. The services hub is written deliberately thinner in proposition and heavier in routing to keep this separation.

**`/storage` and the storage sections on service pages.** Service pages mention storage in one or two sentences and link out. They must never contain a storage section deep enough to rank on its own.

### Monitoring

Once indexed, check Search Console quarterly for two pages ranking for the same query. When it happens, the fix is usually to strengthen the intended page's coverage of the term and thin the other, not to delete anything.

---

## 9. Orphan check

Every indexable route is reachable from the header, the footer, or both. There are no orphan pages by design.

Before launch, crawl the built site and confirm:

- Every route in section 2 appears in the crawl
- No route has zero internal inbound links
- No internal link 404s or redirects
- `/dev/components` is absent from the sitemap and carries `noindex`
- No `nofollow` on any internal link

---

## 10. XML sitemap

Generated at build by `app/sitemap.ts` from the same content modules that build the nav, so a new service page appears automatically and cannot be forgotten.

Excludes `/dev/components` and the API routes. Includes `lastModified`, taken from the file modification time rather than the build time, so a rebuild does not signal that every page changed.

Submitted to Search Console on launch day.

---

## 11. Phase two routes

Not built now. Recorded so the structure can accommodate them without a migration.

### Sector pages

```
/for/interior-designers
/for/event-organisers
/for/fit-out-contractors
```

They convert well because the reader self-identifies, and they overlap heavily with the service pages, which is exactly why they wait. Build them once there is Search Console data showing what people actually arrive looking for. They would slot as siblings of `/services` and link across to the relevant service pages.

### Individual case studies

```
/recent-jobs/[slug]
```

Triggered when there are six or more jobs with real photography and a paragraph of genuine detail each. `/recent-jobs` becomes the index. See the Recent Jobs page document.

### Location pages

Not recommended. A thin page per Kent town is the oldest trick in local SEO and it works badly now. If local visibility needs work, the Google Business Profile and the Contact page will do more.
