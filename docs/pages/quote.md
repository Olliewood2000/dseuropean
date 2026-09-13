# Page: Get a Quote

**Route:** `/quote`
**Primary term:** none. Conversion page, `noindex` not required but no SEO effort spent here
**Blocks:** 4
**Cut sections:** 1 (Hero)

> This is the page every CTA on the site points at. It has one job and everything on it either helps someone complete the form or gets out of the way. No `QuoteCTA` block at the foot, because the CTA is the page.

---

## Metadata

| Field | Value |
|---|---|
| Meta title | Get a Quote \| DS European |
| Meta description | Tell us what needs moving, where from and where to. We will come back with a price. Available 24 hours a day, 365 days a year. |
| H1 | Get a quote |
| Schema | None beyond the site wide `Organization` |
| Breadcrumbs | Home → Get a Quote |

---

## Page goal

Get the form completed, or get the phone rung. Nothing else on this page matters.

---

## Section 1. Hero

```
Block: Hero
Variant: page
Background: inverse
Padding: compact
Cut: bottom (falling left to right)
```

**Eyebrow:** GET A QUOTE

**Title**
> Tell us what needs moving

**Subtitle**
> Every job is priced individually, so the more you can tell us the faster we can come back with a real number rather than a range.

No CTA buttons in this hero. The form is directly beneath it and a button pointing at it would be absurd.

`compact` padding deliberately. The form needs to be as close to the top of the page as possible.

---

## Section 2. The form

```
Block: FormWithAside
Background: surface
Padding: standard
Ratio: 7/5
Form: QuoteForm
```

> **New block.** `FormWithAside` does not yet exist in `02-components.md` and must be added. Form in columns 1 to 7, aside in 9 to 12, aside sticky at `xl` and above, stacking below `lg` with the form first.

### Form fields

There is a real tension here. The component spec says six fields, because every additional field costs completions. But a quote for this kind of work genuinely needs more than six pieces of information, and a form that produces unquotable enquiries wastes everybody's time.

The resolution is a short required set with an optional section that looks optional.

**Required, always visible**

| Field | Type | Notes |
|---|---|---|
| Name | text | |
| Email | email | |
| Phone | tel | Both contact fields required. This audience often prefers a call back |
| Collecting from | text | Town or postcode is enough |
| Delivering to | text | Town or postcode is enough |
| What needs moving | textarea | 3 rows. Placeholder: "A dining table and six chairs, roughly 2.4m long" |

**Optional, behind a disclosure**

A single toggle reading **Add detail (optional, but speeds things up)**. Closed by default. Contains:

| Field | Type | Notes |
|---|---|---|
| Service | select | Pre-filled via `defaultService` when arriving from a service page |
| When do you need it | text | Free text, not a date picker. "Week of the 14th" is a real answer |
| Installation or set up required | checkbox | |
| Photographs | file, max 3 | Images only, 4MB total after client side compression. See `04-technical-spec.md` section 6. Genuinely speeds up equipment and furniture quotes |

Keeping the visible form at six fields preserves the completion rate. The disclosure gives the people who want to be helpful somewhere to be helpful.

### Behaviour

- Validation on blur, never on keystroke
- Inline errors with an icon and text, never colour alone
- Honeypot field plus a submission timestamp check
- Submits to a route handler, sends via Resend, returns a success state in place of the form
- No redirect to a thank you page. The state replaces the form in situ
- On success, fire the conversion event. See `04-technical-spec.md`

### Success message

**Heading:** Thanks, that is with us.

**Body**
> We will come back to you with a price. If it is urgent, ring us on [phone] rather than waiting for the email.

The response time wording is deliberately absent until the client commits to one. See sign off list.

### Aside content

Sits beside the form at `lg` and above. Reassurance, not decoration.

**Heading:** What happens next

1. **We read it properly.** Someone here looks at it, not a system.
2. **We come back with a price.** Not a range, and not a callback to ask the same questions again.
3. **If we need more, we ask.** Usually access at one end, or a photograph.

**Divider**

**Heading:** Would rather talk?

> [Phone number], 24 hours a day, 365 days a year.
> [WhatsApp link]

**Divider**

**Small print**
> Every job is quoted individually. There is no rate card, because a single piece across Kent and a full scheme into northern Italy are not the same job.

---

## Section 3. Trust strip

```
Block: TrustStrip
Background: subtle
Padding: compact
Tone: light
```

| Figure | Label |
|---|---|
| 60 years | Combined industry experience |
| 24/7 | Available 365 days a year |
| 10 | Fitters and supervisors on our own team |
| 21 | People across transport, installation and warehousing |

Same four items as Home. Repetition is correct here. Someone who arrived directly on this page from an ad has seen none of it.

---

## Section 4. Contact details

```
Block: ContactDetails
Layout: grid
Show map: false
Background: surface
Padding: compact
```

Phone, email, WhatsApp, address, hours. No map on this page, since it would push the page length up for no conversion benefit. The map lives on Contact.

**No `QuoteCTA` block.** This page is the quote CTA.

---

## Claims requiring client sign off

1. **Response time.** The form currently promises nothing. It should promise something, because "we will get back to you" converts worse than "within one working day". Ask what they can actually commit to and then hold them to it
2. Which inbox quote submissions land in. `accounts@` is wrong for this and the enquiry address question is still open
3. Whether photograph uploads are wanted, or whether they would rather people emailed them
4. Whether anyone monitors enquiries out of hours, given the 24/7 claim sitting directly beneath the form. If the answer is that the phone is 24/7 but the inbox is not, the aside wording should say so plainly rather than implying otherwise

---

## Note on the 24/7 claim on this page

The trust strip says available 24 hours a day. If a form submitted at 2am is read at 9am, that is fine and normal, but the page should not imply otherwise. The aside already routes urgent enquiries to the phone, which is the honest resolution. Keep that line even if the client wants to trim the aside.
