# 02. Component Library

The vocabulary every page document is written in. A page doc names blocks from this file and supplies content. It never describes layout.

Read alongside `01-brand-and-tokens.md`. Every value referenced here is defined there.

**Rule: no page invents a layout.** If a page needs something this file does not contain, the component is added here first, then used. One-off layouts are how a site stops looking like one site.

---

## 1. File structure

```
/components
  /primitives     Button, Eyebrow, SectionHeading, ArrowLink, Icon,
                  MotifShape, ImageFrame, ImagePlaceholder, Card, CountUp
  /layout         Container, Section, Header, MobileDrawer,
                  StickyContactBar, Footer, Breadcrumbs
  /blocks         Hero, TrustStrip, ServiceGrid, ServiceShowcase, SplitFeature,
                  TwoColumnText, ProcessSteps, FeatureBand, StatBand,
                  AudienceGrid, FleetStrip, JobGrid, CoverageList, FAQ,
                  RelatedServices, FormWithAside, QuoteCTA, ContactDetails
  /forms          QuoteForm, ContactForm, Field, Select, Textarea,
                  FormMessage
```

Naming: PascalCase files, named exports, one component per file. Props interfaces named `<Component>Props` and exported.

---

## 2. The section system

Every block on the site is wrapped in `Section`. It owns background, vertical padding and the angled cut, so no block manages its own.

```ts
type SectionBackground = "surface" | "subtle" | "inverse" | "accent";
type SectionPadding = "compact" | "standard" | "generous" | "none";
type SectionCut = "none" | "bottom" | "top" | "both";

interface SectionProps {
  background?: SectionBackground;   // default "surface"
  padding?: SectionPadding;         // default "standard"
  cut?: SectionCut;                 // default "none"
  container?: "site" | "narrow" | "full"; // default "site"
  id?: string;
  className?: string;               // block-specific hooks only, e.g. "hero-home"
  children: React.ReactNode;
}
```

The cut utilities add their own depth to padding, per the tokens doc. Do not add it manually.

### Section rhythm rules

These are binding and exist so page docs do not have to think about it.

1. Backgrounds alternate. Never two `surface` sections adjacent without a `subtle` or `inverse` between them.
2. `accent` background is used once per site at most. It is loud. Currently unassigned.
3. Cuts appear on `inverse` and `accent` sections only. Never cut a white section.
4. Maximum three cut sections per page.
5. Cut direction alternates. If one band cuts down to the right, the next cuts up to the right.
6. `generous` padding is reserved for heroes and `FeatureBand`.
7. Every page ends with `QuoteCTA` then `Footer`. No exceptions.

---

## 3. Primitives

### Button

```ts
interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost-dark" | "primary-dark";
  size?: "md" | "lg";
  href?: string;          // renders as Link when present
  icon?: LucideIcon;      // trailing only
  children: React.ReactNode;
}
```

Anatomy: label, optional 20px trailing icon at 8px gap. `radius-md`. `md` is 14px by 28px, `lg` is 18px by 36px.

Rules: one primary per section. On navy grounds use `primary-dark` and `ghost-dark`. Trailing icons only, never leading. Button labels are verbs: "Get a quote", "See our work", "Talk to us". Never "Learn more", never "Click here".

### Eyebrow

```ts
interface EyebrowProps {
  children: string;
  tone?: "light" | "dark";  // ground it sits on
}
```

Uppercase, `label` token, `accent` on light, `accent-on-dark` on navy. One per section maximum. No icon.

### SectionHeading

The standard opener for almost every block.

```ts
interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  intro?: string;            // body-lg, capped at 68ch
  as?: "h1" | "h2" | "h3";   // default h2
  align?: "left" | "center"; // default left
  tone?: "light" | "dark";
  action?: { label: string; href: string };  // ArrowLink, right aligned on desktop
}
```

Rules: `center` is permitted only inside `QuoteCTA`. `action` sits inline with the title on `lg` and above, and drops beneath the intro below that.

### ArrowLink

Text link with a trailing 20px arrow that translates 4px right on hover. `accent` on light, `accent-on-dark` on navy. Used for every "read more" affordance on the site. No underline at rest, underline on hover.

### Icon

Wrapper enforcing the icon rules in tokens section 14. Never import Lucide icons directly into a block.

```ts
interface IconProps {
  icon: LucideIcon;
  size?: 20 | 24 | 32;      // default 24
  tone?: "accent" | "accent-on-dark" | "muted";
  label?: string;           // if absent, aria-hidden
}
```

### MotifShape

Decorative skewed parallelogram.

```ts
interface MotifShapeProps {
  variant?: "solid" | "outline" | "tint";
  tone?: "accent" | "white" | "navy";
  size?: "sm" | "md" | "lg" | "xl";
  position: "top-right" | "bottom-left" | "right" | "bottom-right";
  opacity?: number;   // tint variant only, 0.08 to 0.16
}
```

Rules: `skewX(-15deg)`, `radius-2xl`, always `aria-hidden`. Maximum three per composition, all leaning the same way. Must bleed off at least one viewport edge. Never animated.

### ImageFrame

```ts
interface ImageFrameProps {
  src: string;
  alt: string;
  aspect?: "16/9" | "4/3" | "3/2" | "1/1" | "3/4";
  masked?: boolean;    // clips to the motif shape
  priority?: boolean;
}
```

Wraps `next/image` with `fill`, `radius-lg`, and `object-cover`. Hover scale to 1.03 over `duration-slow` when inside a link.

### ImagePlaceholder

Used everywhere a photograph is specified but not yet supplied. This is deliberate: missing photography should be visible and countable, not quietly filled with stock.

```ts
interface ImagePlaceholderProps {
  aspect?: ImageFrameProps["aspect"];
  brief: string;        // what photo is needed, e.g. "Fitters wrapping a dining table"
  masked?: boolean;
}
```

Renders a `navy-950` block with a tint `MotifShape`, the brief in `label` type centred in `ink-inverse-muted`, and a camera icon. Every instance across the site produces the client's shot list.

### Card

Base surface for grid items.

```ts
interface CardProps {
  href?: string;
  tone?: "light" | "dark";
  motifCorner?: boolean;   // default true
  children: React.ReactNode;
}
```

Light: white, 1px `border`, `radius-lg` with the motif corner treatment. Dark: `navy-900`, 1px `border-inverse`. Hover when `href` present: `shadow-md` and 2px rise over `duration-fast`. Never both a border and a resting shadow.

### CountUp

The figure inside `TrustStrip` and `StatBand`. Nowhere else.

```ts
interface CountUpProps {
  value: string;   // the figure exactly as written in content
  index?: number;  // position in the strip, staggers the start by 120ms each
}
```

Client component. A figure that is a whole number, optionally followed by a word ("60 years"), counts from 0 to its value once, over 1400ms with an ease-out, when 15 percent of it is visible. The word renders at `h3` beside the digits. Any other figure ("24/7") renders as written and only rises in. Digits are tabular and hold their final width so nothing shifts while counting.

The written value is always in the DOM for screen readers and search; the animated digits are `aria-hidden`. Under `prefers-reduced-motion: reduce`, or without JavaScript, the final value shows with no count. If the script never hydrates, a 3 second CSS fallback reveals the figure.

---

## 4. Chrome

### Header

```ts
interface HeaderProps {
  transparentOnHero?: boolean;   // default true on pages with an inverse hero
}
```

Anatomy, `lg` and above:
- Long logo, white variant, left
- Nav centre or left aligned after the logo: Services (with dropdown), Storage, Recent Jobs, About, Contact
- Right: phone number in `body-sm` 700 with "24/7, 365" in `micro` beneath it, then `Button` primary-dark "Get a quote"

Behaviour: transparent over inverse heroes, solid `navy-950` once scrolled past 80px, with a 1px `border-inverse` bottom edge. Height 88px at rest, 68px when condensed, transition over `duration-base`.

Services dropdown: full width panel, `navy-900`, listing all service pages in two columns with one line of description each. Opens on hover at `lg` and above, on click at all sizes. Escape closes. Focus trapped while open.

Below `lg`: logo, phone icon button, hamburger. Drawer handles the rest.

### MobileDrawer

Full screen `navy-950` overlay sliding from the right over `duration-base`. Nav items at `h3` size, services expandable inline. Contact details and both CTAs pinned at the bottom. Body scroll locked, focus trapped, closes on Escape and on route change.

### StickyContactBar

Below `md` only. Fixed to the viewport bottom, `navy-950`, 1px top border. Two equal targets: Call and WhatsApp, 56px tall, icon plus label. Appears after 400px of scroll. Adds bottom padding to `Footer` so it never overlaps content.

### Footer

`navy-950`. Four columns at `lg`, stacking to one below `md`.

1. Short logo, one line positioning statement, address
2. Services, all links
3. Company: About, Storage, Recent Jobs, Contact, Get a quote
4. Contact block: phone, email, WhatsApp, hours, each an actual link

Bottom bar, separated by 1px `border-inverse`: company registration and VAT when supplied, Privacy, Cookies, Terms, and the copyright line.

One `MotifShape` tint bleeding off the right edge.

### Breadcrumbs

On every page except Home. `body-sm`, `ink-muted`, chevron separators, current page not linked. Emits `BreadcrumbList` schema.

---

## 5. Blocks

### Hero

```ts
interface HeroProps {
  variant: "home" | "page" | "service";
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  image?: ImageFrameProps | ImagePlaceholderProps;
}
```

**home**: `inverse`, `generous`, `cut="bottom"`. Title at `display-xl`. 7/5 split with a masked image right at `lg` and above, image hidden below `md`. Two `MotifShape` elements bleeding off the right. Header transparent over it.

With `backgroundImages` (six real photographs, `src` and `alt`), the home hero replaces the masked image with a crossfading backdrop. CSS only, no client JavaScript.

- **Backdrop:** covers the right 65% at `lg` and above, fading into `surface-inverse` on the left, with a short navy fade at the top for the header. Between `md` and `lg` it shows as a rounded 3/2 frame below the copy; hidden below `md`.
- **Behind the header:** from `lg` the section is pulled up under the transparent header so the photographs start at the top of the page. From `xl` the hero is at least the viewport height, capped at 1080px, with the copy vertically centred.
- **Timing:** each slide holds for 6s on a 36s cycle and drifts slowly from scale 1 to 1.05 while visible.
- **Progress:** six 15 degree bars at the bottom right of the backdrop fill in step with the slides. Decorative, `aria-hidden`.
- **Globe:** the upper right quarter of an accurate globe outline (orthographic projection centred on the mid Atlantic, land outlines and a 15 degree graticule) sits behind the copy, anchored to the bottom left of the section. `public/images/hero-globe.svg`, white strokes at 15 percent opacity, masked out between 35 and 85 percent of its width so it fades before the photographs. It replaces the two tint `MotifShape`s. Below `lg` the photo frame sits above it.
- **Headline:** tracking tightened to -0.035em; from `xl`, 88px with a line height of 1. The final line ("and finished.") is set in `accent-on-dark`.
- **Padding:** from `lg` the home hero uses 40px top and bottom padding (56px from `xl`) instead of `generous`, plus the header height and cut. Height follows the content, with no minimum. On desktop screens 880px tall or less, padding drops to 24px, the headline to `display-lg` and the gaps to 20px, so the progress bars stay visible without scrolling.
- **Testimonials (optional):** `testimonials: { quote, attribution }[]` renders a white `surface` card under the buttons, with the `card-motif` corner treatment, a short 15 degree `accent` marker, the quote in `ink` and the attribution in `ink-muted`. The gap above the card matches the gap above the buttons. With more than one, the quotes crossfade every 6s on the same beat as the photographs (timing assumes exactly three), and the card holds the height of the longest quote. The marker is then replaced by one progress bar per quote, the same 15 degree shape as the photograph bars but with an `accent` fill on a `border` track. Under reduced motion only the first quote shows, the bars hide and the single marker returns. Only real, client-approved testimonials may be used (`00-source-of-truth.md` section 9). Nothing renders when absent.
- **Entry:** the headline lines (split at the existing commas), then the subtitle, the buttons and the testimonial fade in with the 16px rise at `duration-slow`, staggered 120ms.
- **Reduced motion:** the first photograph only, no drift, no progress bars, no entry animation.

**page**: `inverse`, `standard`, `cut="bottom"`. Title at `display-lg`, no image, subtitle capped at 60ch. Breadcrumbs above the title.

**service**: `inverse`, `standard`, `cut="bottom"`. As page, but with a single masked image right at 5 columns and the primary CTA always "Get a quote".

All variants: title `text-balance`, one `h1` per page, image `priority` on Home only.

### TrustStrip

```ts
interface TrustStripProps {
  items: { figure: string; label: string }[];  // 3 to 4
  tone?: "light" | "dark";   // default light
}
```

Sits directly beneath a hero at `compact` padding. Figures at `display-md` in `accent` through `CountUp`, labels at `body-sm` in `ink-muted`. Each item opens with a 32 by 4px accent marker skewed at the motif angle, which draws in from the left as its figure reveals. Four across at `lg`, two by two at `md`, stacked below. 1px vertical dividers between items at `lg` only.

No icons. The figures are the visual.

### ServiceGrid

```ts
interface ServiceGridProps {
  heading?: SectionHeadingProps;
  services: {
    title: string;
    excerpt: string;
    href: string;
    icon?: LucideIcon;
    image?: ImageFrameProps | ImagePlaceholderProps;
  }[];
  columns?: 2 | 3;          // default 3
  showImages?: boolean;     // default false
  variant?: "cards" | "showcase"; // default "cards"
}
```

**cards** (default): `Card` per service. Anatomy top to bottom: optional 24px icon top left, title at `h4`, excerpt at `body-sm` in `ink-muted` capped at three lines, `ArrowLink` "View service" pinned to the card foot. Equal heights within a row.

Three across at `lg`, two at `md`, one below. With seven services the last row runs short at three columns, which is correct and should not be padded with a filler card.

Icon decision per tokens section 14: build with icons, review at final size, pull them if they blur together.

**showcase**: an image-led index for Home. Every service needs an `image`, real or placeholder.

- From `lg`: a 12 column split. Left, 6 columns, a ruled index of every service. Clicking a row selects it (the page scrolls smoothly to that service's point in the pinned run and it becomes active); only "View service" navigates to the service page. Each row shows: index number (01, 02 and so on) in `label`, the icon, title at `h4`, excerpt at `body-sm` in `ink-muted`, and "View service" with the arrow. The section heading sits in the left column above the index. Right, 6 columns, a stage up to 600px tall whose top aligns with the eyebrow, holding every service image stacked, with the `card-motif` corner, `shadow-lg`, a solid accent motif panel behind it at the brand angle, and the active service title on a solid navy chip in the bottom left corner. Beneath the stage, a step row: one 40px circle per service carrying that service's icon, joined by a 2px `border` rule that fills in `accent` up to the active service. The active circle is `surface-inverse` with an `accent-on-dark` icon at 1.25 scale; passed circles take an `accent` border. The row shows the full count on arrival, and each circle is a button (labelled with the service title) that selects its service.
- Behaviour: the heading, index and stage pin together as one panel (up to 760px tall) centred vertically in the viewport below the condensed header. Once pinned, the first 180px of scroll moves nothing, so the lock reads as its own moment; only then does further page scroll move the index upward inside a clipped window beneath the heading, and rows fade out as they pass under it. Scroll progress through the pinned run selects the active service, so scrolling steps through them in order, about 160px of scroll per service. After the last service there is a 120px hold, then the panel releases and the page continues. No scroll hijacking: it is driven by the normal page scroll. Keyboard focus also makes a row active and scrolls the page to its position in the run. The active row is marked by a single `surface-inverse` panel with the `card-motif` corner and `shadow-md` that slides between rows at `duration-slow` with `ease-in-out`. Selecting a row animates the page scroll over the same duration and easing so the two move as one. The row content cross-fades over the same timing, switching to inverse colours (title `ink-inverse`, excerpt and index `ink-inverse-muted`, icon, arrow and link `accent-on-dark`), with a 4px `accent-on-dark` bar skewed at 15 degrees on its left edge and the arrow nudged right. Other rows keep their icons at reduced opacity. The stage crossfades to the active image at `duration-slow` and the image eases to scale 1.03. No autoplay, no controls. Only the active stage image is exposed to assistive technology.
- Below `lg`: the stage is hidden and each row renders as the image-topped cards layout, 3/2 image, two across at `md`, one below. The "View service" link stretches over the whole card, so the card is a single tap target.
- Reduced motion: the stage swaps without the crossfade or scale.
- Implemented as a small client component (`ServiceShowcase`) holding the active index only. Media is rendered on the server and passed in.

### SplitFeature

The workhorse. Image one side, content the other.

```ts
interface SplitFeatureProps {
  heading: SectionHeadingProps;
  body: string | string[];
  bullets?: string[];
  cta?: { label: string; href: string; variant?: ButtonProps["variant"] };
  media: Media | [Media, Media, Media];  // Media = ImageFrameProps | ImagePlaceholderProps
  reverse?: boolean;        // media right instead of left
  ratio?: "7/5" | "5/7";    // default "7/5", media side first
}
```

Never 6/6. Vertical centre alignment. Media masked to the motif shape when it sits on an `inverse` background, plain `radius-lg` on light. Bullets use a 20px check icon only where the list is genuinely scanned, otherwise a 4px square marker in `accent`.

**Gallery.** Passing exactly three media items renders a gallery instead of a single image. The first is the lead, at `3/4`, with the motif corner (`radius-2xl` top right). The other two stack beside it at `4/3`, dropped by 40px (64px from `md`) so the column sits staggered against the lead, with a 48 by 6px `accent` marker skewed at the motif angle in the space above. Behind both, a skewed motif panel in `steel-100` (`navy-100` on `subtle`, `surface-raised-inverse` on dark grounds) extends below the images. Images carry `shadow-lg` and are never masked. The layout keeps its two columns at every width and stacks as a unit above the copy below `lg`. Use it where a section is there to show work, not as a default.

Stacks below `lg`, media first regardless of `reverse`.

### TwoColumnText

Prose with no image. Exists because several sections on the site are genuinely text only, and a `SplitFeature` with the media omitted collapses to a full width paragraph block that breaks the page rhythm.

```ts
interface TwoColumnTextProps {
  eyebrow?: string;
  title: string;
  body: string[];              // one string per paragraph
  bullets?: string[];
  cta?: { label: string; href: string; variant?: ButtonProps["variant"] };
  tone?: "light" | "dark";
}
```

Anatomy at `lg` and above: title in columns 1 to 4, body in columns 6 to 12. The empty column between them is the point. It gives the block the same asymmetric weight as `SplitFeature` without needing a photograph.

Title at `h2`, sticky to the top of the section on scroll at `xl` and above. Body at `body`, capped at 68ch. Paragraph spacing at `space-6`. CTA sits beneath the final paragraph, left aligned to the body column rather than the title.

Stacks below `lg`, title first, at normal document flow.

Rules:
- Two to three paragraphs. Beyond that it is a page, not a section.
- Never used twice on the same page.
- Never used for the primary message of a page. It is a supporting block, typically lead times, pricing approach or a short explanatory passage.
- `compact` padding by default, since it carries less visual weight than the blocks around it.

Used by: every service page for the lead times and pricing section, and the legal pages for introductory passages above the prose body.

### ProcessSteps

```ts
interface ProcessStepsProps {
  heading?: SectionHeadingProps;
  steps: { number: string; title: string; body: string; icon?: LucideIcon }[];
  tone?: "light" | "dark";
}
```

Three steps across at `lg`, stacked below. Each: large step number at `display-md` in `accent` at 20 percent opacity sitting behind, 32px icon, title at `h4`, body at `body-sm`. A 1px connecting rule between steps at `lg` only, `border` or `border-inverse` by tone.

Built for exactly three steps. Do not extend to four without revisiting the layout.

### FeatureBand

Full bleed statement band. The most visually loaded block on the site, and the reason it is limited.

```ts
interface FeatureBandProps {
  eyebrow?: string;
  title: string;
  body?: string;
  items?: string[];          // rendered as large type, e.g. place names
  cta?: { label: string; href: string };
  background?: "inverse" | "accent";   // default "inverse"
  media?: [Image, Image, Image];       // lead, upper, lower: { src, alt, position? }
}
```

`generous` padding, `cut="both"`, `container="site"`. Title at `display-md`. `items` render as a horizontal row of `h2` weight 700 separated by a 4px `accent-on-dark` square, wrapping to a stacked list below `md`.

With `media`, the band splits into copy and a layered collage (copy stacked above from `lg` down). `items` become outlined location pills with a `MapPin`, and the CTA takes a trailing arrow. The collage is three overlapping slanted frames with level photographs over three `accent` bars. Below `md` it simplifies to the lead image full width with the other two side by side beneath.

Two `MotifShape` tints. Works entirely without photography, which is why it carries the international proof on Home.

One per page. Never two.

### StatBand

```ts
interface StatBandProps {
  stats: { figure: string; label: string; suffix?: string }[];  // 3 or 4
  background?: "subtle" | "inverse";
}
```

Larger and more prominent than `TrustStrip`. Figures at `display-lg` through `CountUp`, with the same accent marker, labels at `body-sm`. Used on About, not on Home, so the two do not compete.

### AudienceGrid

```ts
interface AudienceGridProps {
  heading: SectionHeadingProps;
  audiences: {
    title: string;
    body: string;
    href?: string;
    image?: { src: string; alt: string; position?: string };
    benefit?: string;
  }[];
  titleAccent?: string;
}
```

Four `Card` items, no icons, no images. Title at `h4`, body at `body-sm` in two lines. `href` is left unset until sector pages exist in phase 2.

When any item has an `image`, the block renders as image cards (`AudienceCard`): eyebrow with a trailing accent line, a two-tone heading (`titleAccent` on its own line in accent blue), then four informational cards in a subgrid so rows align. Each card has a short accent rule, title at `h4`, body at `body-sm`, a 3/2 image with a pale skewed motif behind its right edge, and a pale blue benefit strip with a check. One column, two from `sm`, four from `xl`. Cards are never links. Pale skewed shapes sit at the section's outer edges.

### FleetStrip

```ts
interface FleetStripProps {
  heading?: SectionHeadingProps;
  vehicles: VehicleCardProps[];
  cta?: { label: string; href: string };
  media?: ImageFrameProps | ImagePlaceholderProps;
  titleAccent?: string;
}

interface VehicleCardProps {
  name: string;
  capacity?: string;
  note?: string;
  icon: LucideIcon;
  image?: { src: string; alt: string };
}
```

Low visual weight, high informational value. Horizontal row at `lg` with 1px dividers, two columns at `md`, stacked below. Each item: 24px icon, name at `body` 700, capacity at `body-sm` in `ink-muted`.

With `media`, the block becomes an equal two column split at `lg`. Left: eyebrow with a 48px accent rule, the title at `display-md` (`h1` below `lg`) with `titleAccent` on its own line in `accent`, the intro in `ink-muted`, then the image at 3/2 over a skewed `blue-100` motif panel. Right: five `VehicleCard` items over a faint skewed `steel-50` panel. Stacks as heading, image, cards below `lg`. Used on Home.

`VehicleCard` is informational: no link, no focus stop, no hover state. White card, 1px `border`, `radius-lg`, `shadow-sm`. Left: a white fleet glyph from `lib/fleet-icons.ts` in an `accent` tile, name at `body-lg` 700, capacity at `body-sm` in `ink-muted`. Right: the supplied vehicle cutout, `object-fit: contain`, over a skewed `blue-50` panel drawn with `::before`. Below 640px the icon sits above the name so the vehicle keeps its width.

Icons are genuinely useful here because vehicle types are scanned rather than read. This is the clearest case on the site for keeping them.

### JobGrid and JobCard

```ts
interface JobGridProps {
  heading?: SectionHeadingProps;
  jobs: {
    title: string;
    location: string;
    service: string;
    excerpt?: string;
    href?: string;
    image?: ImageFrameProps | ImagePlaceholderProps;
  }[];
  columns?: 2 | 3;
  variant?: "card" | "narrative";
}
```

**card**: image at 3/2, location as an eyebrow, title at `h4`, service tag at `micro` in `ink-muted`.

**narrative**: the fallback while photography is outstanding. No image. `subtle` background card, location at `h3`, two or three sentences of `body`. Reads as a considered editorial choice rather than an empty slot.

Default to `narrative` until real photography is supplied. This is the single most important instruction in this file for the current state of the project.

### CoverageList

```ts
interface CoverageListProps {
  heading: SectionHeadingProps;
  regions: { name: string; detail?: string }[];
}
```

Simple two column list at `lg` with 1px row dividers. For the UK, Europe and worldwide breakdown on About and the service pages.

### FAQ

```ts
interface FAQProps {
  heading?: SectionHeadingProps;
  items: { question: string; answer: string }[];
}
```

Native `details` and `summary`, styled. Chevron rotating over `duration-fast`. `container="narrow"`. First item closed by default. Emits `FAQPage` schema.

Four to six items per page. Questions written as a customer would ask them.

### RelatedServices

Three `Card` links at the foot of every service page, above `QuoteCTA`. Compact, title and arrow only, no excerpt. Chosen manually per page in the page doc, not automatically.

### QuoteCTA

The closing block on every page.

```ts
interface QuoteCTAProps {
  title?: string;        // defaults to the site standard
  body?: string;
  primaryCta?: { label: string; href: string };
  showPhone?: boolean;   // default true
}
```

`inverse`, `generous`, `cut="top"`, centred. Title at `display-md`, body capped at 55ch, primary `lg` button, phone number beside it at `h3` as a `tel:` link with "24/7, 365" beneath in `micro`. Two `MotifShape` tints.

This is the only block on the site permitted to centre its text.

### ContactDetails

```ts
interface ContactDetailsProps {
  layout?: "stacked" | "grid";
  showMap?: boolean;
}
```

Phone, email, WhatsApp, address, hours. Each an actionable link with a 24px icon. Map is a lazy loaded static embed, never an interactive iframe on first paint.

---

## 6. Forms

### FormWithAside

Wrapper that puts a form beside a column of supporting content. Used on both form pages.

```ts
interface FormWithAsideProps {
  title?: string;
  intro?: string;
  form: "quote" | "contact";
  aside: React.ReactNode;
  tone?: "light" | "dark";
}
```

Anatomy at `lg` and above: form in columns 1 to 7, aside in columns 9 to 12. The aside is sticky at `xl` and above so it stays beside a long form. Below `lg` it stacks with the form first, because the aside supports the form rather than introducing it.

Aside styling: `body-sm`, `ink-muted` for body text, `h4` for its headings, 1px `border` dividers between groups.

Rules:
- The aside carries reassurance and routing only. What happens next, the phone number, a pointer to the other form. Never marketing copy, never a services list.
- One per page.
- The aside never contains a second form or a competing primary button. A secondary button routing to the other form page is permitted.
- If the aside would be empty, use the form component directly rather than this wrapper with a blank column.

### QuoteForm

Six fields. Every additional field costs completions.

```ts
interface QuoteFormProps {
  compact?: boolean;     // inline variant for the quote page hero
  defaultService?: string;
}
```

Fields: name, email or phone, collection location, delivery location, what is being moved, date or approximate timeframe. Plus a single checkbox for "Installation or set up required".

Behaviour: client side validation on blur, not on keystroke. Inline errors with icon and text. Honeypot field plus a submission timestamp check for spam. Submits to a route handler, which sends via Resend and returns a success state in place of the form. Never a redirect to a thank you page, so the state is preserved.

Fields: `radius-sm`, 1px `border-strong`, 14px padding, `body` size, label above in `body-sm` 700. Focus ring per tokens.

### ContactForm

Four fields: name, email, phone, message. Same styling and behaviour.

### FormMessage

Success and error states. Success: `success` coloured 24px icon, heading, one line confirming a response within one working day. Error: `error`, and always includes the phone number as a fallback.

---

## 7. Composition reference

Which blocks build which pages. Page docs confirm and supply content.

| Page | Blocks |
|---|---|
| Home | Hero home, TrustStrip, ServiceGrid showcase, SplitFeature, ProcessSteps, FeatureBand, AudienceGrid, SplitFeature storage, FleetStrip, QuoteCTA |
| Services hub | Hero page, ServiceGrid showImages, SplitFeature, ProcessSteps, TwoColumnText, FAQ, QuoteCTA |
| Service page | Hero service, SplitFeature, SplitFeature reversed, ProcessSteps, FeatureBand, CoverageList, TwoColumnText, FAQ, RelatedServices, QuoteCTA |
| Storage | Hero page, SplitFeature, TrustStrip, FAQ, QuoteCTA |
| Recent Jobs | Hero page, JobGrid narrative, FeatureBand, QuoteCTA |
| About | Hero page, SplitFeature, StatBand, ProcessSteps, CoverageList, QuoteCTA |
| Get a Quote | Hero page compact, FormWithAside with QuoteForm, TrustStrip, ContactDetails |
| Contact | Hero page compact, ContactDetails with map, FormWithAside with ContactForm, TwoColumnText, QuoteCTA |
| Legal | Hero page, Prose in narrow container, QuoteCTA |

---

## 8. Kitchen sink page

Build `/dev/components`, excluded from the sitemap and `noindex`, rendering every block above in every variant with placeholder content, on both light and inverse grounds.

This page is built and reviewed **before any real page is assembled**. It is where the section rhythm, the cut behaviour and the icon decision get judged, and fixing a block there fixes it everywhere at once.

---

## 9. Rules summary

- No page invents a layout. Blocks are added here first.
- Every block is wrapped in `Section`. Blocks never own their background or padding.
- One `h1` per page, always in the hero.
- One primary button per section.
- Maximum three cut sections per page, alternating direction.
- One `FeatureBand` per page.
- `JobGrid` defaults to `narrative` until photography exists.
- `TwoColumnText` is a supporting block only. Never the primary message of a page, never twice on one page.
- `FormWithAside` appears once per page. The aside is reassurance and routing, never marketing.
- Every photograph slot that has no photograph uses `ImagePlaceholder` with a written brief. Never stock.
- Every page ends `QuoteCTA` then `Footer`.
- Button labels are verbs. Never "Learn more".
