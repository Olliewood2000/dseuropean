# 01. Brand and Tokens

Design system foundation for dseuropean. Derived from DS European Brand Guidelines 2025 and extended for web.

Three rules govern everything below:

1. The three brand colours are fixed. Everything else is an extension, never a replacement.
2. Montserrat only, Regular 400 and Bold 700. No other weights, no second family.
3. The angled motif is the brand's signature. Use it consistently or not at all.

---

## 0. Design principles

The site should feel **sharp, modern, trustworthy, professional**. Those words are only useful once translated into decisions, so here is what each one means in practice. Where a judgement call is not covered elsewhere in this document, resolve it against these.

### Sharp

- Definition over softness. 1px borders in preference to diffuse shadows. Shadows are for hover states, not for making things look pillowy.
- Tight negative tracking on all display type. Loose default tracking is the single clearest sign of an unconsidered build.
- High contrast. Navy against white, not grey against off-white.
- No blurs, no glows, no gradient overlays, no glassmorphism.
- Precise alignment. Everything sits on the 12 column grid and the 4px spacing scale. Nothing is eyeballed.
- The angled motif is used decisively at full commitment or not at all. A timid 4 degree lean looks like a rendering error.

### Modern

- Space is the primary tool. Full section padding, wide gutters, generous gaps. Do not fill empty areas.
- Large type. Headings are bigger than feels comfortable on first look.
- Asymmetry over symmetry. 7/5 splits, left aligned headings, off centre compositions.
- Restraint in ornament. No decorative dividers, no badge clusters, no icon beside every heading. Icons are used where they aid recognition or scanning, never for visual parity. See section 14.
- Two colours plus neutrals. That is the whole palette and it should stay that way.

### Trustworthy

- Specificity beats adjectives. "Lake Como, Girona, Texas" earns more trust than "worldwide coverage". "10 supervisors and fitters" earns more than "experienced team".
- Plain language. No superlatives, no exclamation marks, no "leading provider of".
- Never claim what is not evidenced. The claims whitelist in the source of truth document is binding.
- Contact details visible on every screen. Phone in the header, phone in the footer, sticky bar on mobile.
- Consistency signals competence. The same CTA block, the same button styles, the same section rhythm on every page.

### Professional

- B2B register. The reader is a project manager with a budget and a deadline, not a consumer being sold to.
- Calm motion, or none. Nothing moves to attract attention.
- Correct and careful copy. No typos, consistent capitalisation, UK English throughout.
- Substance over decoration. Every section earns its place by answering a question the reader actually has.

### The tension, and how it resolves

Sharp and modern pull toward minimal. Trustworthy pulls toward proof, detail and density. These conflict if handled badly.

The resolution: **minimal in layout, specific in language.** Keep the structure spare and the whitespace generous, then fill the words with concrete detail. A section with one heading, one paragraph and three real place names beats a section with six icons and generic copy, and it is both more modern and more credible.

---

### Brand core (fixed, from guidelines)

| Token | Hex | Use |
|---|---|---|
| Vivid Blue | `#0156C7` | Buttons, links, accents, stat figures, motif fills |
| Dark Blue | `#000056` | Headings, inverse surfaces, header, footer |
| White | `#FFFFFF` | Primary page surface |

### Blue ramp (extended from Vivid Blue, 600 is brand)

| Token | Hex |
|---|---|
| `blue-50` | `#EFF5FE` |
| `blue-100` | `#DCE8FD` |
| `blue-200` | `#BFD6FC` |
| `blue-300` | `#93BCF9` |
| `blue-400` | `#5F99F5` |
| `blue-500` | `#3A79EC` |
| `blue-600` | `#0156C7` |
| `blue-700` | `#0147A3` |
| `blue-800` | `#043B85` |
| `blue-900` | `#0A346E` |
| `blue-950` | `#061F45` |

### Navy ramp (extended from Dark Blue, 950 is brand)

| Token | Hex |
|---|---|
| `navy-50` | `#F2F4FC` |
| `navy-100` | `#E3E7F7` |
| `navy-200` | `#C4CCEC` |
| `navy-300` | `#96A4D9` |
| `navy-400` | `#6375BF` |
| `navy-500` | `#4151A3` |
| `navy-600` | `#2E3C87` |
| `navy-700` | `#222D6E` |
| `navy-800` | `#161F5C` |
| `navy-900` | `#0B1257` |
| `navy-950` | `#000056` |

### Steel neutrals (cool tinted so they sit with the blues)

| Token | Hex |
|---|---|
| `steel-25` | `#FAFBFD` |
| `steel-50` | `#F4F6FA` |
| `steel-100` | `#E9EDF4` |
| `steel-200` | `#D7DEEA` |
| `steel-300` | `#B9C4D6` |
| `steel-400` | `#8E9CB5` |
| `steel-500` | `#5C6A85` |
| `steel-600` | `#4F5D75` |
| `steel-700` | `#333E5C` |
| `steel-800` | `#2A3345` |
| `steel-900` | `#1B2130` |

Never use a warm or pure grey. Every neutral on this site is blue tinted.

### Semantic tokens

These are what components reference. Components should not use raw ramp values.

| Token | Value | Use |
|---|---|---|
| `surface` | `#FFFFFF` | Default page background |
| `surface-subtle` | `#F4F6FA` | Alternating sections, card fills |
| `surface-inverse` | `#000056` | Navy bands, header, footer, hero |
| `surface-accent` | `#0156C7` | Full accent panels, primary buttons |
| `ink` | `#000056` | Headings |
| `ink-body` | `#333E5C` | Body copy |
| `ink-muted` | `#5C6A85` | Captions, meta, labels |
| `ink-inverse` | `#FFFFFF` | Text on navy or accent |
| `ink-inverse-muted` | `#C4CCEC` | Secondary text on navy |
| `accent` | `#0156C7` | Links, icons, figures |
| `accent-hover` | `#0147A3` | Hover state |
| `accent-on-dark` | `#93BCF9` | Links and accents on navy |
| `border` | `#D7DEEA` | Default borders, dividers |
| `border-strong` | `#B9C4D6` | Inputs, emphasised edges |
| `border-inverse` | `rgba(255,255,255,0.16)` | Dividers on navy |
| `focus` | `#5F99F5` | Focus ring, both grounds |
| `success` | `#0E7C4A` | Form success |
| `warning` | `#B45309` | Form warning |
| `error` | `#C0271F` | Form validation errors |
| `error-on-dark` | `#FF9A93` | Errors on navy |

### Colour usage rules

- Body copy is never vivid blue. The guidelines set it that way on the brand page, which works on a slide and does not work across paragraphs.
- Vivid blue appears sparingly. If more than roughly 10 percent of a viewport is vivid blue, it is doing too much.
- Page rhythm comes from white against navy. Do not introduce a third background colour beyond `surface-subtle`.
- On navy, links use `accent-on-dark`, not vivid blue. Vivid blue on navy fails contrast.
- A vivid blue filled button on a navy ground needs a 1px `rgba(255,255,255,0.24)` edge, or its shape disappears.

### Contrast reference

| Pair | Ratio | Verdict |
|---|---|---|
| `#000056` on white | 17.4:1 | Pass AAA |
| `#333E5C` on white | 9.9:1 | Pass AAA |
| `#5C6A85` on white | 5.3:1 | Pass AA |
| `#0156C7` on white | 6.4:1 | Pass AA, AAA for large |
| White on `#0156C7` | 6.4:1 | Pass AA |
| White on `#000056` | 17.4:1 | Pass AAA |
| `#93BCF9` on `#000056` | 9.2:1 | Pass AAA |
| `#0156C7` on `#000056` | 1.5:1 | Fail, never use as text |

---

## 2. Typography

Montserrat, self hosted via `next/font/google`. Weights 400 and 700 only. Latin subset. `display: swap`.

### Scale

| Token | Size | Line height | Tracking | Weight | Use |
|---|---|---|---|---|---|
| `display-xl` | 80px | 1.02 | -0.03em | 700 | Home hero only |
| `display-lg` | 64px | 1.05 | -0.03em | 700 | Page heroes |
| `display-md` | 52px | 1.08 | -0.025em | 700 | Major section heads |
| `h1` | 40px | 1.15 | -0.02em | 700 | Page titles |
| `h2` | 32px | 1.2 | -0.02em | 700 | Section headings |
| `h3` | 26px | 1.25 | -0.015em | 700 | Sub headings |
| `h4` | 22px | 1.3 | -0.01em | 700 | Card titles |
| `body-lg` | 19px | 1.65 | 0 | 400 | Section intros, hero sublines |
| `body` | 17px | 1.7 | 0 | 400 | Default body |
| `body-sm` | 15px | 1.6 | 0 | 400 | Secondary, captions |
| `label` | 13px | 1.4 | 0.12em | 700 | Eyebrows, uppercase |
| `micro` | 12px | 1.4 | 0.04em | 400 | Legal, footnotes |

### Mobile overrides

Montserrat is wide, so large sizes need cutting hard on small screens.

| Token | Mobile size |
|---|---|
| `display-xl` | 40px |
| `display-lg` | 36px |
| `display-md` | 32px |
| `h1` | 30px |
| `h2` | 25px |
| `h3` | 22px |
| `body-lg` | 18px |
| `body` | 17px |

Body never drops below 17px anywhere on the site.

### Typography rules

- Negative tracking on every heading above 22px. Montserrat set at default tracking looks loose and cheap at size.
- Measure capped at 68 characters for body, 20 characters for display headings.
- Eyebrow labels are uppercase, 13px, 700, `accent` on light or `accent-on-dark` on navy. One per section maximum.
- No italics. Montserrat's italic is not in the guidelines.
- No text shadows.
- Headings left aligned by default. Centre only in the quote CTA block.

---

## 3. Spacing

4px base unit.

| Token | Value |
|---|---|
| `1` | 4px |
| `2` | 8px |
| `3` | 12px |
| `4` | 16px |
| `5` | 20px |
| `6` | 24px |
| `8` | 32px |
| `10` | 40px |
| `12` | 48px |
| `16` | 64px |
| `20` | 80px |
| `24` | 96px |
| `32` | 128px |
| `40` | 160px |
| `48` | 192px |

### Section padding (vertical)

| Breakpoint | Standard | Compact | Generous |
|---|---|---|---|
| Mobile | 64px | 48px | 80px |
| Tablet | 96px | 64px | 112px |
| Desktop | 128px | 80px | 160px |

Generous is for the hero and the global installation band only.

### Container

| Property | Value |
|---|---|
| Max width | 1320px |
| Narrow variant | 880px (long form text, legal pages) |
| Gutter mobile | 20px |
| Gutter tablet | 32px |
| Gutter desktop | 48px |

### Grid

12 columns, 24px gutter desktop, 16px mobile. Asymmetric splits are the house style: 7/5 and 5/7 for feature blocks, never 6/6.

---

## 4. Radii

Taken from the rounded corners on the logo's parallelogram forms.

| Token | Value | Use |
|---|---|---|
| `radius-sm` | 6px | Inputs, small tags |
| `radius-md` | 10px | Buttons |
| `radius-lg` | 16px | Cards, image frames |
| `radius-xl` | 24px | Large panels |
| `radius-2xl` | 32px | Motif shapes |
| `radius-full` | 9999px | Pills, circular logo lockup |

Never square corners. Never fully rounded cards.

---

## 5. The angled motif

The brand's signature device. Two distinct applications, and they behave differently.

### Brand angle

**15 degrees.** Expressed as `skewX(-15deg)`. This is the only angle used anywhere on the site.

### A. Motif shapes

The rounded parallelograms from the cover and back page. Used as decorative elements in heroes and CTA blocks, and as image masks.

```css
.motif-shape {
  transform: skewX(-15deg);
  border-radius: var(--radius-2xl);
}
.motif-shape > * {
  transform: skewX(15deg); /* counter skew so content stays upright */
}
```

Rules:
- Always leaning the same way. Never mirror the angle within one composition.
- Maximum three shapes per composition.
- Decorative shapes sit at 8 to 16 percent opacity on navy, or solid vivid blue when they are the focal element.
- Always bleed off at least one edge of the viewport. A fully contained motif shape looks like a mistake.

### B. Section cuts

The diagonal edge between a navy band and a white one. This is a fixed vertical delta rather than a true skew, because a true 15 degree skew across a 1320px container produces a 350px cut, which is far too aggressive.

| Breakpoint | Cut depth |
|---|---|
| Mobile | 32px |
| Tablet | 56px |
| Desktop | 80px |

```css
/* cut on the bottom edge, falling left to right */
.cut-bottom {
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - var(--cut)), 0 100%);
  padding-bottom: calc(var(--section-py) + var(--cut));
}

/* cut on the top edge, rising left to right */
.cut-top {
  clip-path: polygon(0 var(--cut), 100% 0, 100% 100%, 0 100%);
  padding-top: calc(var(--section-py) + var(--cut));
}
```

Rules:
- Cut direction alternates down the page. If one band cuts down to the right, the next cuts up to the right.
- Never cut both edges of the same band unless it is a full bleed feature band, which is the only exception.
- Always add the cut depth to that side's padding or the content collides with the diagonal.
- Maximum three cut sections per page. Beyond that the page reads as restless.

### C. Card corner treatment

A subtle nod rather than a full skew. One corner of a card gets a larger radius than the other three.

```css
.card-motif { border-radius: var(--radius-lg) var(--radius-2xl) var(--radius-lg) var(--radius-lg); }
```

---

## 6. Breakpoints

| Token | Min width | Target |
|---|---|---|
| `xs` | 0 | Small phones |
| `sm` | 480px | Large phones |
| `md` | 768px | Tablet portrait |
| `lg` | 1024px | Tablet landscape, small laptop |
| `xl` | 1280px | Desktop |
| `2xl` | 1536px | Large desktop |

Mobile first. Header collapses to the mobile drawer below `lg`. The sticky call and WhatsApp bar shows below `md` only.

---

## 7. Elevation

Navy tinted shadows. Pure black shadows look dirty against this palette.

| Token | Value |
|---|---|
| `shadow-sm` | `0 1px 2px rgba(0,0,86,0.06)` |
| `shadow-md` | `0 4px 16px rgba(0,0,86,0.08)` |
| `shadow-lg` | `0 12px 32px rgba(0,0,86,0.10)` |
| `shadow-xl` | `0 24px 56px rgba(0,0,86,0.12)` |

Cards rest at `shadow-sm` or a 1px border, not both. Hover lifts to `shadow-md`.

---

## 8. Motion

| Token | Value |
|---|---|
| `duration-fast` | 150ms |
| `duration-base` | 250ms |
| `duration-slow` | 400ms |
| `ease-out` | `cubic-bezier(0.22, 1, 0.36, 1)` |
| `ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` |

Permitted:
- Section entry: fade from 0 to 1 with a 16px rise, `duration-slow`, triggered once at 15 percent visibility
- Card hover: shadow change plus 2px rise, `duration-fast`
- Image hover: scale to 1.03, `duration-slow`
- Button hover: background colour only

Not permitted: carousels, parallax, counting numbers, typewriter effects, looping background video, anything with a bounce easing.

All of it wrapped in `prefers-reduced-motion: reduce`.

---

## 9. Focus and accessibility

- Focus ring: 2px solid `focus`, 2px offset, on every interactive element. Never removed.
- Hit targets minimum 44 by 44px.
- Body text minimum 17px.
- Every image gets meaningful alt text. Decorative motif shapes get `aria-hidden="true"`.
- Colour never carries meaning alone. Form errors get an icon and text.
- Target Lighthouse accessibility 100.

---

## 10. Tailwind v4 implementation

`app/globals.css`:

```css
@import "tailwindcss";

@theme {
  /* Brand */
  --color-blue-50:  #EFF5FE;
  --color-blue-100: #DCE8FD;
  --color-blue-200: #BFD6FC;
  --color-blue-300: #93BCF9;
  --color-blue-400: #5F99F5;
  --color-blue-500: #3A79EC;
  --color-blue-600: #0156C7;
  --color-blue-700: #0147A3;
  --color-blue-800: #043B85;
  --color-blue-900: #0A346E;
  --color-blue-950: #061F45;

  --color-navy-50:  #F2F4FC;
  --color-navy-100: #E3E7F7;
  --color-navy-200: #C4CCEC;
  --color-navy-300: #96A4D9;
  --color-navy-400: #6375BF;
  --color-navy-500: #4151A3;
  --color-navy-600: #2E3C87;
  --color-navy-700: #222D6E;
  --color-navy-800: #161F5C;
  --color-navy-900: #0B1257;
  --color-navy-950: #000056;

  --color-steel-25:  #FAFBFD;
  --color-steel-50:  #F4F6FA;
  --color-steel-100: #E9EDF4;
  --color-steel-200: #D7DEEA;
  --color-steel-300: #B9C4D6;
  --color-steel-400: #8E9CB5;
  --color-steel-500: #5C6A85;
  --color-steel-600: #4F5D75;
  --color-steel-700: #333E5C;
  --color-steel-800: #2A3345;
  --color-steel-900: #1B2130;

  /* Semantic */
  --color-surface:            #FFFFFF;
  --color-surface-subtle:     #F4F6FA;
  --color-surface-inverse:    #000056;
  --color-surface-accent:     #0156C7;
  --color-ink:                #000056;
  --color-ink-body:           #333E5C;
  --color-ink-muted:          #5C6A85;
  --color-ink-inverse:        #FFFFFF;
  --color-ink-inverse-muted:  #C4CCEC;
  --color-accent:             #0156C7;
  --color-accent-hover:       #0147A3;
  --color-accent-on-dark:     #93BCF9;
  --color-border:             #D7DEEA;
  --color-border-strong:      #B9C4D6;
  --color-focus:              #5F99F5;
  --color-success:            #0E7C4A;
  --color-warning:            #B45309;
  --color-error:              #C0271F;
  --color-error-on-dark:      #FF9A93;

  /* Type */
  --font-sans: var(--font-montserrat), ui-sans-serif, system-ui, sans-serif;

  --text-micro: 0.75rem;
  --text-micro--line-height: 1.4;
  --text-label: 0.8125rem;
  --text-label--line-height: 1.4;
  --text-label--letter-spacing: 0.12em;
  --text-body-sm: 0.9375rem;
  --text-body-sm--line-height: 1.6;
  --text-body: 1.0625rem;
  --text-body--line-height: 1.7;
  --text-body-lg: 1.1875rem;
  --text-body-lg--line-height: 1.65;
  --text-h4: 1.375rem;
  --text-h4--line-height: 1.3;
  --text-h4--letter-spacing: -0.01em;
  --text-h3: 1.625rem;
  --text-h3--line-height: 1.25;
  --text-h3--letter-spacing: -0.015em;
  --text-h2: 2rem;
  --text-h2--line-height: 1.2;
  --text-h2--letter-spacing: -0.02em;
  --text-h1: 2.5rem;
  --text-h1--line-height: 1.15;
  --text-h1--letter-spacing: -0.02em;
  --text-display-md: 3.25rem;
  --text-display-md--line-height: 1.08;
  --text-display-md--letter-spacing: -0.025em;
  --text-display-lg: 4rem;
  --text-display-lg--line-height: 1.05;
  --text-display-lg--letter-spacing: -0.03em;
  --text-display-xl: 5rem;
  --text-display-xl--line-height: 1.02;
  --text-display-xl--letter-spacing: -0.03em;

  /* Radii */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-2xl: 32px;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0,0,86,0.06);
  --shadow-md: 0 4px 16px rgba(0,0,86,0.08);
  --shadow-lg: 0 12px 32px rgba(0,0,86,0.10);
  --shadow-xl: 0 24px 56px rgba(0,0,86,0.12);

  /* Breakpoints */
  --breakpoint-sm: 480px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;

  /* Motion */
  --ease-out-brand: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-in-out-brand: cubic-bezier(0.65, 0, 0.35, 1);
}

:root {
  --cut: 32px;
  --section-py: 64px;
  --container-max: 1320px;
  --gutter: 20px;
}

@media (min-width: 768px) {
  :root { --cut: 56px; --section-py: 96px; --gutter: 32px; }
}

@media (min-width: 1280px) {
  :root { --cut: 80px; --section-py: 128px; --gutter: 48px; }
}

@layer base {
  body {
    background: var(--color-surface);
    color: var(--color-ink-body);
    font-family: var(--font-sans);
    font-size: var(--text-body);
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
  }
  h1, h2, h3, h4 { color: var(--color-ink); font-weight: 700; }
  :focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
}

@layer utilities {
  .container-site {
    max-width: var(--container-max);
    margin-inline: auto;
    padding-inline: var(--gutter);
  }
  .container-narrow { max-width: 880px; margin-inline: auto; padding-inline: var(--gutter); }
  .section { padding-block: var(--section-py); }
  .cut-bottom {
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - var(--cut)), 0 100%);
    padding-bottom: calc(var(--section-py) + var(--cut));
  }
  .cut-top {
    clip-path: polygon(0 var(--cut), 100% 0, 100% 100%, 0 100%);
    padding-top: calc(var(--section-py) + var(--cut));
  }
  .motif-shape { transform: skewX(-15deg); border-radius: var(--radius-2xl); }
  .motif-inner { transform: skewX(15deg); }
  .card-motif {
    border-radius: var(--radius-lg) var(--radius-2xl) var(--radius-lg) var(--radius-lg);
  }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Font loading

```ts
// app/layout.tsx
import { Montserrat } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
  display: "swap",
});
```

---

## 11. Tailwind v3 fallback

If the build uses Tailwind v3, the same tokens as `tailwind.config.ts`:

```ts
import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx,mdx}", "./components/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "480px", md: "768px", lg: "1024px", xl: "1280px", "2xl": "1536px",
    },
    extend: {
      colors: {
        blue: {
          50:"#EFF5FE",100:"#DCE8FD",200:"#BFD6FC",300:"#93BCF9",400:"#5F99F5",
          500:"#3A79EC",600:"#0156C7",700:"#0147A3",800:"#043B85",900:"#0A346E",950:"#061F45",
        },
        navy: {
          50:"#F2F4FC",100:"#E3E7F7",200:"#C4CCEC",300:"#96A4D9",400:"#6375BF",
          500:"#4151A3",600:"#2E3C87",700:"#222D6E",800:"#161F5C",900:"#0B1257",950:"#000056",
        },
        steel: {
          25:"#FAFBFD",50:"#F4F6FA",100:"#E9EDF4",200:"#D7DEEA",300:"#B9C4D6",
          400:"#8E9CB5",500:"#5C6A85",600:"#4F5D75",700:"#333E5C",800:"#2A3345",900:"#1B2130",
        },
        surface: { DEFAULT:"#FFFFFF", subtle:"#F4F6FA", inverse:"#000056", accent:"#0156C7" },
        ink: { DEFAULT:"#000056", body:"#333E5C", muted:"#5C6A85", inverse:"#FFFFFF", "inverse-muted":"#C4CCEC" },
        accent: { DEFAULT:"#0156C7", hover:"#0147A3", "on-dark":"#93BCF9" },
        line: { DEFAULT:"#D7DEEA", strong:"#B9C4D6" },
        focus: "#5F99F5",
        success: "#0E7C4A",
        warning: "#B45309",
        error: { DEFAULT:"#C0271F", "on-dark":"#FF9A93" },
      },
      fontFamily: { sans: ["var(--font-montserrat)", "ui-sans-serif", "system-ui"] },
      fontSize: {
        micro: ["0.75rem", { lineHeight: "1.4" }],
        label: ["0.8125rem", { lineHeight: "1.4", letterSpacing: "0.12em", fontWeight: "700" }],
        "body-sm": ["0.9375rem", { lineHeight: "1.6" }],
        body: ["1.0625rem", { lineHeight: "1.7" }],
        "body-lg": ["1.1875rem", { lineHeight: "1.65" }],
        h4: ["1.375rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        h3: ["1.625rem", { lineHeight: "1.25", letterSpacing: "-0.015em" }],
        h2: ["2rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        h1: ["2.5rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-md": ["3.25rem", { lineHeight: "1.08", letterSpacing: "-0.025em" }],
        "display-lg": ["4rem", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-xl": ["5rem", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
      },
      borderRadius: { sm:"6px", md:"10px", lg:"16px", xl:"24px", "2xl":"32px" },
      boxShadow: {
        sm: "0 1px 2px rgba(0,0,86,0.06)",
        md: "0 4px 16px rgba(0,0,86,0.08)",
        lg: "0 12px 32px rgba(0,0,86,0.10)",
        xl: "0 24px 56px rgba(0,0,86,0.12)",
      },
      transitionTimingFunction: {
        "out-brand": "cubic-bezier(0.22, 1, 0.36, 1)",
        "in-out-brand": "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      maxWidth: { site: "1320px", narrow: "880px", measure: "68ch" },
    },
  },
} satisfies Config;
```

---

## 12. Button specification

Four variants only.

| Variant | Background | Text | Border | Hover |
|---|---|---|---|---|
| Primary | `accent` | white | none | `accent-hover` |
| Primary on navy | `accent` | white | 1px `rgba(255,255,255,0.24)` | `accent-hover` |
| Secondary | transparent | `ink` | 1px `border-strong` | bg `steel-50` |
| Ghost on navy | transparent | white | 1px `rgba(255,255,255,0.32)` | bg `rgba(255,255,255,0.08)` |

Shared: `radius-md`, 14px vertical and 28px horizontal padding, 17px, weight 700, `duration-fast` transition. Large variant for heroes: 18px vertical, 36px horizontal.

Every page has exactly one primary CTA repeated. Never two primary buttons competing in one section.

---

## 13. Quick do and do not

**Do**
- Alternate white and navy bands for page rhythm
- Keep vivid blue rare enough that it always means something
- Let sections breathe at full section padding
- Use asymmetric splits
- Lean every angled element the same way

**Do not**
- Set body copy in vivid blue
- Introduce a warm neutral, a gradient, or a third brand colour
- Use more than three section cuts per page
- Use the guideline deck's stock photography
- Add a second typeface or extra Montserrat weights
- Centre body copy

---

## 14. Iconography

### The governing test

Could this icon be swapped for any other icon in the set without the reader noticing? If yes, remove it. It is filling space, not carrying meaning.

Icons earn their place when they aid **recognition** (a vehicle type, a contact method), **navigation** (arrows, chevrons, menu), or **scanning** (letting a reader find the right item in a list without reading every label). They do not earn their place by giving a grid visual balance.

### Set

Lucide React. One set across the entire site, no mixing, no custom one-offs unless a genuine gap exists.

### Style

| Property | Value |
|---|---|
| Stroke width | 1.5px |
| Line cap | `square` |
| Line join | `miter` |
| Standard size | 24px |
| Inline with text | 20px |
| Feature or step | 32px |
| Colour on light | `accent` |
| Colour on navy | `accent-on-dark` |
| Colour in UI chrome | `ink-muted` |

Lucide ships with round caps and joins, which reads soft. Overriding to square and miter aligns the icons with the 1px borders and tight tracking, and is most of the difference between sharp and generic.

```tsx
// components/Icon.tsx
<LucideIcon
  strokeWidth={1.5}
  strokeLinecap="square"
  strokeLinejoin="miter"
  aria-hidden="true"
/>
```

### Placement rules

- Never inside a tinted circle or rounded square. The icon-in-a-bubble pattern is the most templated device on the web.
- One icon per card, maximum.
- Top left of a card, or inline before a label. Never centred above a heading.
- Aligned to the same grid as the text beneath it, not optically floated.
- Never at a size not in the table above.
- Decorative icons get `aria-hidden="true"`. An icon that is the only content of a control gets an accessible label.

### Where icons are used

| Location | Use |
|---|---|
| Fleet strip | Yes. Vehicle types are scanned, not read |
| Three step process | Yes. Sequence benefits from a visual anchor |
| Contact methods | Yes. Phone, email and WhatsApp are recognised marks |
| Form validation | Yes. Colour must not carry meaning alone |
| UI chrome | Yes. Arrows, chevrons, menu, close |
| Service grid | Conditional, see below |
| Trust strip | No. The figures are the visual |
| Beside section headings | No |
| Why choose us points | No. The copy is the content |

### The service grid

Seven cards with distinct, well drawn icons aid scanning and look considered. Seven cards with vague abstract marks look like filler.

Build it with icons, then review them together at final size. If furniture, equipment and private items produce marks that read as roughly the same shape, pull icons from the grid entirely and let the card titles carry it. Decide by looking, not in advance.
