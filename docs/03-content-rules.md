# 03. Content Rules

Governs every word on the site. Where this document and a page document disagree, the page document wins on content and this document wins on style.

---

## 1. The prime rule

**Copy is supplied, not generated.**

Every heading, paragraph, bullet, FAQ answer and CTA label on this site is written in the page documents. The build does not write marketing copy, does not improve supplied copy, does not shorten it to fit a layout, and does not fill a section it thinks looks empty.

If a layout does not accommodate the supplied copy, the layout changes.

If a page document is missing copy for a section, the build stops and asks. It does not draft a placeholder paragraph, because placeholder paragraphs reach production.

### What the build may write

A short list, and nothing outside it:

- Alt text for images, per section 9
- `aria-label` and other accessibility strings
- Form validation messages, from the inventory in section 10
- Error page content, from the inventory in section 10
- Loading and empty states
- `title` and `meta` where a page document has not specified them

---

## 2. Voice

Four words govern the site: sharp, modern, trustworthy, professional. In copy terms that means:

**Plain over impressive.** Write the way a competent operations person would explain something to a colleague. If a sentence would sound ridiculous said aloud on the phone, rewrite it.

**Specific over general.** "Ten of our team are fitters" beats "experienced installation team". "Lake Como, Girona, Texas" beats "worldwide coverage". Every time a general claim can be swapped for a concrete fact, swap it.

**Short sentences.** Vary length, but the default is short. Two clauses is usually one too many.

**Second person.** The reader is "you". The company is "we". Never "DS European offers", always "we do".

**No selling at the reader.** This audience is buying risk reduction, not excitement. The tone is a company explaining how it works, not a company convincing you it is good.

**Admit limits.** See section 6.

---

## 3. Mechanics

### Language

UK English throughout. The ones that will actually come up:

| Correct | Wrong |
|---|---|
| organise, recognise, specialise | organize, recognize |
| licence (noun), license (verb) | license as a noun |
| practice (noun), practise (verb) | practise as a noun |
| programme (a schedule) | program |
| tonne | ton |
| kerb | curb |
| metre, centimetre | meter, centimeter |
| storey (of a building) | story |
| enquiry | inquiry |
| fit-out (noun and adjective) | fitout, fit out |
| pop-up | popup, pop up |

### Punctuation

- **No em dashes anywhere.** Use a comma, a full stop or a colon. This is absolute.
- No exclamation marks. Not in copy, not in microcopy, not in error messages.
- No ampersands in body copy. Permitted in meta titles where length is tight, and in nothing else.
- Serial comma only where it prevents genuine ambiguity.
- Single space after a full stop.
- Apostrophes and quotes curly, not straight.

### Capitalisation

- **Sentence case for every heading**, including page titles, section headings and card titles. Never title case.
- Eyebrow labels are uppercase, which is styling rather than capitalisation. Write them sentence case in the content and let CSS do the work.
- Service names take a capital when naming the service as a thing: the Furniture page, our Exhibitions service. Lowercase in ordinary prose: "we move furniture for designers".
- Job titles lowercase unless attached to a name.
- "We" and "us" never capitalised mid sentence. The client's own written answers do this occasionally and it should be corrected.

### Numbers

- Spell out one to nine in body prose. Numerals for 10 and above.
- Always numerals for measurements, weights, capacities, times, dates and money. "7.5 tonne", not "seven point five tonne".
- Always numerals in stat blocks, trust strips and figures, regardless of size. "10", not "ten".
- "24/7" is written that way. Not "24-7", not "twenty four seven".
- "365 days a year", not "365".
- Phone numbers spaced as the client writes them, consistently across every instance.

---

## 4. Banned words and phrases

Every one of these appears on competitor sites and each one makes the page less credible.

**Never use**

leading provider, market leading, industry leading, one of the UK's leading
unrivalled, second to none, unparalleled, best in class
seamless, hassle-free, stress-free, worry-free
state of the art, cutting edge, next level
we pride ourselves on, here at DS European, we are passionate about
your trusted partner, trusted name, go-to
solutions (as a standalone noun: "logistics solutions", "transport solutions")
utilise (use "use"), in order to (use "to"), prior to (use "before")
reach out (use "contact", "ring", "email")
please do not hesitate to
at your convenience
delighted, thrilled, excited to

**Use with care**

| Phrase | Rule |
|---|---|
| bespoke | Three times per page in body copy. Meta descriptions, audience names ("bespoke furnishers") and the client's own mission statement wording do not count toward the limit. It is genuine industry language for this audience, which is why it is capped rather than banned, and why the cap is not tighter |
| peace of mind | Once per site. It is in the client's brand deck, so it is not banned, but it is a cliché |
| one stop shop | The client uses this phrase. Do not put it on the site. Show it instead by listing what they do |
| white glove | Industry standard term, fine in a service context. Never as a headline |
| premium, luxury, high end | Describe the goods, never the company. "Luxury furniture" is fine. "A premium service" is not |
| professional | Almost always removable. Check whether the sentence loses anything without it |

---

## 5. Claims

### The whitelist is binding

`00-source-of-truth.md` section 9 lists what can be claimed. Nothing outside it goes on the site. This applies to the build as much as to the copy, including alt text, meta descriptions and schema.

**Never, under any circumstances, without written evidence from the client:**

- Any insurance figure or the bare phrase "fully insured"
- Any accreditation, membership, certification or standard
- Any named client, logo or testimonial
- Any star rating or review count
- Number of years trading, jobs completed, vehicles owned or clients served
- Any superlative about size, speed or price relative to competitors

If the client asks for one of these to be added, ask for the evidence first. A claim that has to be withdrawn after a complaint costs more than the enquiry it won.

### The verify marker

Page documents mark unconfirmed statements with `*(verify)*`. That marker means the line is plausible but unevidenced.

**Any line carrying `*(verify)*` must be either confirmed by the client or removed before launch.** It must never ship with the marker visible, and it must never ship with the marker silently deleted. Track them: there are currently 12 inline `*(verify)*` markers across the page documents, plus 97 numbered items in the sign off lists at the foot of the page documents. The sign off lists are the larger and more important set.

---

## 6. Declaring limits

A page that says yes to everything is discounted entirely. A page with one clear boundary makes its other claims believable.

**Rule: one declared limit per service page.** No more, because a page full of caveats reads as a company protecting itself rather than one that knows its job.

How to phrase it:

- **Position it next to a capability**, not on its own. The limit borrows credibility from what surrounds it.
- **Frame it as a handoff, not a refusal.** "We do the transport and positioning, your engineer does the commissioning, and we will be there on the day" is a boundary. "We do not do that" is a lost enquiry.
- **Give the reason.** Certification, insurance, specialism. A limit without a reason reads as reluctance.

The worked example is the equipment page FAQ on disconnection and commissioning. Follow that pattern.

---

## 7. CTA and button wording

Every button label is a verb. Approved labels, and no others without a reason:

| Label | Use |
|---|---|
| Get a quote | Primary CTA sitewide |
| Talk to us | Secondary, routing to Contact |
| See our work | Secondary, routing to Recent Jobs |
| View service | Service cards |
| See the full fleet | Routing to the About fleet anchor |
| Get directions | Contact page map |
| Send message | Contact form submit |
| Send request | Quote form submit |

**Never:** Learn more, Read more, Click here, Find out more, Submit, Discover, Explore, Get started.

"Read more" is permitted in one place only: the `ArrowLink` on job cards, where it follows a job title and is therefore specific by context.

---

## 8. Headings

- One `h1` per page, always in the hero, always the page title.
- Heading levels never skip. No `h4` under an `h2`.
- Section headings are `h2`. Card titles and FAQ questions are `h3` or `h4` depending on the block.
- A heading is a statement, not a label. "Ten of us are fitters" beats "Our team". "The goods are ready, the site is not" beats "Storage".
- Never end a heading with a full stop, except where the heading is two sentences, which should be rare.
- Never use a question as a section heading unless the section answers it directly.

---

## 9. Alt text

- Describe what is in the image and why it is there. "Two fitters positioning a dining table in a finished interior", not "furniture delivery".
- Never start with "image of" or "photo of".
- Decorative images, including every `MotifShape`, get `alt=""` and `aria-hidden="true"`.
- Do not keyword stuff. Alt text written for search rather than for a screen reader is both worse accessibility and worse SEO.
- `ImagePlaceholder` components take the brief as their alt text, so the placeholder is legible to assistive technology as well as visually.
- Logos: "DS European" for the full lockup. Not "DS European logo".

---

## 10. Microcopy inventory

Fixed strings. The build uses these rather than inventing its own.

### Forms

| Context | String |
|---|---|
| Required field, empty | This one is needed |
| Email, invalid | That does not look like an email address |
| Phone, invalid | That does not look like a phone number |
| Message, too short | A little more detail would help |
| File, too large | That is over the 4MB limit. Try fewer or smaller images |
| File, wrong type | Images only, please |
| Submission failed | That did not send. Try again, or ring us on [phone] |
| Submitting | Sending |

### Quote form success

> **Thanks, that is with us.**
> We will come back to you with a price. If it is urgent, ring us on [phone] rather than waiting for the email.

### Contact form success

> **Thanks, that is with us.**
> We will get back to you. If it is urgent, ring us on [phone].

### 404

> **Page not found**
> That page does not exist, or it has moved. Try the services page, or ring us on [phone] and we will point you in the right direction.
>
> [Button: See our services] [Button: Get a quote]

### 500

> **Something went wrong**
> Sorry about that. Try again in a moment, or ring us on [phone].

### Other

| Context | String |
|---|---|
| Skip link | Skip to content |
| Mobile menu, open | Open menu |
| Mobile menu, close | Close menu |
| Breadcrumb home | Home |
| Sticky bar, call | Call |
| Sticky bar, WhatsApp | WhatsApp |
| Services dropdown | Services |
| Phone context line | 24/7, 365 |

No error message blames the user. No success message uses an exclamation mark. No loading state says "Please wait".

---

## 11. Meta descriptions

- 140 to 158 characters.
- Lead with what the company does for the reader, not the company name.
- Include the primary term naturally, once.
- No "Welcome to", no "We are a leading".
- One concrete detail where it fits. A place name, a number, the 24/7.
- Never duplicated across two pages.

---

## 12. FAQ rules

- Five to six questions per page.
- Questions written as a customer would type them, including the awkward phrasing. "I only have one item. Is that too small a job?" is better than "Minimum order requirements".
- Answers two to four sentences. If an answer needs more, it belongs in a section.
- **No question or answer duplicated across two pages.** Seven service pages sharing FAQ content is the fastest way to make them compete with each other in search.
- Answer the question in the first sentence. Context afterwards.
- At least one answer per page should say something slightly against interest. A limit, a lead time, a price honesty. It is what makes the other five believable.

---

## 13. Pre-launch content checklist

Run against every page before it goes live:

- [ ] No em dashes anywhere
- [ ] No banned words from section 4
- [ ] Every `*(verify)*` either confirmed or removed
- [ ] No claim outside the whitelist
- [ ] UK English throughout
- [ ] Sentence case headings
- [ ] One `h1`, no skipped levels
- [ ] Every button label on the approved list
- [ ] Meta description unique, 140 to 158 characters
- [ ] No FAQ question or answer appearing on another page
- [ ] Every image has meaningful alt text or is properly marked decorative
- [ ] No placeholder text, no lorem ipsum, no "coming soon"
- [ ] Phone number, email and address identical everywhere they appear
