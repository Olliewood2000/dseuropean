# Page: Contact

**Route:** `/contact`
**Primary term:** DS European contact
**Blocks:** 5
**Cut sections:** 2 (Hero, QuoteCTA)

> Contact and Quote do different jobs and should not compete. Quote is for someone who wants a price. Contact is for someone who wants to reach a person, check where the company is, or ask something that is not a job. This page routes anyone wanting a price to `/quote` rather than trying to capture them here with a worse form.

---

## Metadata

| Field | Value |
|---|---|
| Meta title | Contact DS European \| Charing, Ashford, Kent |
| Meta description | Call, email or message us. Based at Charing near Ashford in Kent, available 24 hours a day, 365 days a year. |
| H1 | Contact us |
| Schema | `ContactPage` plus `LocalBusiness` with full `PostalAddress`, `telephone`, `email`, `geo` and `openingHoursSpecification` covering 24/7 |
| Breadcrumbs | Home → Contact |

---

## Page goal

Get the person to the right channel quickly. Most will want the phone number, which means it should be the largest thing on the page after the heading.

---

## Section 1. Hero

```
Block: Hero
Variant: page
Background: inverse
Padding: compact
Cut: bottom (falling left to right)
```

**Eyebrow:** CONTACT

**Title**
> Contact us

**Subtitle**
> We are here 24 hours a day, 365 days a year. Call, email or send a message on WhatsApp, whichever suits.

**Primary CTA:** Get a quote → `/quote`

The CTA is present so that anyone who actually wants a price gets routed there in one click rather than filling in the general form below.

`compact` padding. Nobody arrives at a contact page to read.

---

## Section 2. Contact details

```
Block: ContactDetails
Layout: grid
Show map: true
Background: surface
Padding: standard
```

Four cards above the map, each a working link with a 24px icon.

| Method | Content | Link |
|---|---|---|
| Phone | [Primary number] <br> 24 hours a day, 365 days a year | `tel:` |
| WhatsApp | Message us <br> Photographs and voice notes welcome | `https://wa.me/[number]` |
| Email | [Enquiry address] <br> We read everything that comes in | `mailto:` |
| Address | King Arthur Court, Maidstone Road, Charing, Ashford, TN27 0JS | Directions link |

**Phone is set larger than the other three.** It is the channel most of this audience wants and the page should not pretend all four are equal.

### Map

Static, lazy loaded, never an interactive iframe on first paint. Centred on the Charing address with a single marker. A directions link beneath it opens the address in the user's default maps app.

### WhatsApp note

The client named WhatsApp as a preferred channel, which is unusual for a B2B logistics company and worth leaning into rather than burying. Site managers and fitters send photographs of access problems, and WhatsApp is how that actually happens. The line about photographs and voice notes is there to give people permission.

---

## Section 3. Send us a message

```
Block: FormWithAside
Background: subtle
Padding: standard
Ratio: 7/5
Form: ContactForm
```

**Title:** Send us a message

**Intro**
> If you want a price, the quote form will get you one faster because it asks the right questions. For anything else, this will reach us.

### Fields

| Field | Type |
|---|---|
| Name | text |
| Email | email |
| Phone | tel |
| Message | textarea, 5 rows |

Four fields. Same validation, spam handling and inline success behaviour as `QuoteForm`.

### Aside content

**Heading:** Opening hours

> 24 hours a day, 365 days a year.
>
> We run work overnight, at weekends and on bank holidays because that is when a lot of it has to happen. If you need something out of hours, ring rather than email.

**Divider**

**Heading:** Looking for a price?

> The quote form asks what we need in order to price a job properly.
>
> [Get a quote button, secondary variant]

---

## Section 4. Where we are

```
Block: TwoColumnText
Background: surface
Padding: compact
```

**Title:** Finding us

**Body**
> We are at King Arthur Court on the Maidstone Road at Charing, between Maidstone and Ashford in Kent. It is a few minutes from junction 8 of the M20 and around fifteen minutes from Ashford International.
>
> If you are delivering to us or collecting, ring ahead so someone is expecting you and can point you at the right door.

**CTA:** Get directions → maps link (secondary)

Local detail like the M20 junction and Ashford International does two things. It helps people actually find the place, and it gives the page the regional specificity that local search rewards.

**Verify the M20 junction and the Ashford International timing before publishing.** Both are stated from the address rather than from anything the client told us.

---

## Section 5. Quote CTA

```
Block: QuoteCTA
Background: inverse
Padding: generous
Cut: top (falling left to right)
```

**Title:** Got a job to price?

**Body**
> Tell us what needs moving, where from and where to. We will come back with a price.

**Primary CTA:** Get a quote → `/quote`
**Phone:** shown, with "24/7, 365" beneath

---

## Blocking items

This page cannot be built correctly until three things are settled, and all three have been open since the brand guidelines arrived.

1. **The primary phone number.** Three are currently in circulation: the 0330 on the questionnaire, a mobile on Gary's business card and a third on the van livery. The site needs one, and it should be the one that will later carry call tracking
2. **The enquiry email address.** `accounts@` is the only address we have been given and it is the wrong destination for new business. `gary@` exists. A `sales@` or `info@` alias would be better than either
3. **The WhatsApp number.** Needs to be a number that is actually monitored, in international format for the `wa.me` link

Also unresolved: the canonical domain. The van says `.co.uk`, the email says `.com`.

---

## Claims requiring client sign off

1. Whether all four channels are genuinely monitored 24/7, or whether that applies to the phone only. The page currently implies the phone and says nothing about the others, which is correct, but the client should confirm it
2. Whether they want deliveries and collections at the Charing address at all, and whether ringing ahead is the actual instruction
3. Company registration and VAT numbers, which belong in the footer and are usually found on this page by anyone checking the company is real
