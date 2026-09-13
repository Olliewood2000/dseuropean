# Pages: Legal

**Routes:** `/privacy`, `/cookies`, `/terms`
**Blocks:** Hero page, Prose in narrow container, QuoteCTA
**Linked from:** footer bottom bar only. Not in the main nav

> **Not legal advice.** These are working drafts to get the site launchable, written from what a small UK service business ordinarily needs. They have not been reviewed by a solicitor and neither of us is one. Anything below marked as a placeholder must be completed by the client before launch, and the terms page in particular should not go live in the form drafted here. See the note at the end.

---

## Shared structure

All three pages use the same three blocks.

```
1. Hero, variant page, background inverse, padding compact, cut bottom
2. Prose, container narrow, background surface, padding standard
3. QuoteCTA, background inverse, padding generous, cut top
```

Prose styling: `h2` for section headings, `body` for text, generous paragraph spacing, links in `accent`. Maximum 68ch measure. No `MotifShape` decoration on these pages.

All three are `index, follow`. Do not `noindex` legal pages. Their presence is a trust signal and their absence is noticed by anyone checking whether a company is real.

Each page carries a last updated date at the top of the prose block.

---

# Page: Privacy Policy

**Route:** `/privacy`
**Meta title:** Privacy Policy | DS European
**Meta description:** How DS European collects, uses and stores personal information.
**H1:** Privacy policy

## Content

**Who we are**

> DS European Ltd, King Arthur Court, Maidstone Road, Charing, Ashford, TN27 0JS. Registered in England and Wales, company number [PLACEHOLDER]. You can contact us about anything on this page at [enquiry email] or [phone].

**What we collect**

> When you complete a form on this website we collect your name, email address, telephone number and whatever details you give us about the job. If you attach photographs to a quote request, we collect those too.
>
> We also collect basic information about how the site is used, such as which pages are viewed and roughly where visitors are in the world. This does not identify you.

**Why we collect it**

> To respond to your enquiry, to prepare a quotation, and to carry out work if you go ahead. Where you have asked us to quote, we process your information because it is necessary to take steps at your request before entering into a contract. Where we use the site analytics described above, we do so on the basis of our legitimate interest in understanding how the website performs.

**Who we share it with**

> We do not sell your information to anybody. We share it only where we need to in order to do the work or run the business, which may include:
>
> - Our website and email providers, who host the site and deliver form submissions to us
> - Partners or subcontractors where part of a job is carried out by them, and only the details they need
> - Our accountants, and anyone we are legally required to disclose to

**How long we keep it**

> Enquiries that do not become jobs are kept for [PLACEHOLDER, typically 12 to 24 months] and then deleted. Records relating to work we have carried out are kept for [PLACEHOLDER, typically 6 years] to meet our legal and accounting obligations.

**Your rights**

> You have the right to ask us for a copy of the information we hold about you, to have it corrected if it is wrong, to ask us to delete it, and to object to us using it. Contact us at [enquiry email] and we will respond within one month.
>
> If you are unhappy with how we have handled your information you can complain to the Information Commissioner's Office at ico.org.uk.

**Changes**

> We will update this page if how we handle information changes. The date at the top shows when it was last revised.

## Placeholders required before launch

1. Company registration number
2. The enquiry email address, once decided
3. Retention periods for enquiries and for job records
4. Confirmation of which analytics tool is used, if any
5. Confirmation of which email delivery provider is used
6. Whether they have a data protection registration with the ICO, which most businesses handling customer data need

---

# Page: Cookie Notice

**Route:** `/cookies`
**Meta title:** Cookie Notice | DS European
**Meta description:** What cookies this website uses and why.
**H1:** Cookie notice

## The recommendation that shapes this page

**Use analytics that do not set cookies, and this page stays two paragraphs with no consent banner anywhere on the site.**

Vercel Analytics or Plausible both give you page views, referrers and traffic sources without cookies and without personal data. Google Analytics gives you more, and costs you a consent banner on every first visit, a consent management platform to maintain, and a measurable drop in the data you were trying to collect because a large share of visitors decline.

For a site of this size the extra depth in GA4 is not worth a banner covering the hero. Take the cookieless route unless the client specifically needs GA4 for something.

## Content, cookieless version

> This website does not use tracking or advertising cookies.
>
> We use a small number of strictly necessary cookies to make the site work, for example to prevent spam submissions on our forms. These do not identify you and cannot be used to track you across other websites. Under UK law, strictly necessary cookies do not require your consent.
>
> We measure how the website is used with a privacy focused analytics tool that does not set cookies and does not collect personal information. It tells us which pages are viewed and where visitors arrived from, and nothing about who you are.
>
> If you would like to know more about how we handle personal information, see our [privacy policy](/privacy).

## If GA4 is used instead

The page needs a cookie table listing each cookie, its purpose and its duration, and the site needs a consent banner with genuine reject functionality, with analytics scripts blocked until consent is given. That is a materially larger build and should be a deliberate decision rather than a default.

---

# Page: Terms

**Route:** `/terms`
**Meta title:** Terms | DS European
**Meta description:** Terms of use for the DS European website and where to find our conditions of carriage.
**H1:** Terms

## The important point on this page

**Do not write trading terms for a haulage company.**

Two different documents are being confused when a site like this has a single terms page:

**Website terms of use.** Low risk, short, generic. Covers using the website itself. Safe to draft, and drafted below.

**Conditions of carriage.** The terms on which they actually move goods. These cover liability for loss and damage, limits per tonne, claim notification periods, lien over goods, and insurance. Most UK hauliers trade under the RHA Conditions of Carriage rather than bespoke terms, and getting this wrong exposes them on exactly the high value goods this whole site is about.

**Ask the client what they currently trade under.** They will almost certainly have something already, on the back of their paperwork or referenced in their quotations. The website should link to or reproduce that document, not invent one.

Until they answer, the terms page covers website use only and says nothing about carriage.

## Content, website terms only

**About these terms**

> These terms cover your use of this website. They do not cover the work we carry out for customers, which is governed by our conditions of carriage. [PLACEHOLDER: link or reference once confirmed.]

**Who we are**

> DS European Ltd, King Arthur Court, Maidstone Road, Charing, Ashford, TN27 0JS. Registered in England and Wales, company number [PLACEHOLDER]. VAT number [PLACEHOLDER].

**Using this site**

> You may use this website for your own purposes and to find out about our services. You may not use it in any way that is unlawful, or that damages or interferes with the site or anyone else's use of it.

**Our content**

> The content of this website, including text, images and design, belongs to us unless stated otherwise. You may not reproduce it commercially without our permission.

**Quotations and information**

> Information on this site is provided for general guidance. Service descriptions, coverage and lead times are indicative rather than a contractual commitment. Nothing on this website is an offer. A price becomes binding only when we issue a written quotation and it is accepted.

**Links to other sites**

> Where we link to another website we are not responsible for its content.

**Liability**

> We take care to keep this website accurate and available, but we do not guarantee that it will be uninterrupted or free of error. Nothing in these terms limits our liability for death or personal injury caused by negligence, or for fraud.

**Governing law**

> These terms are governed by the law of England and Wales.

## Placeholders required before launch

1. Company registration number
2. VAT number
3. What they currently trade under. RHA Conditions of Carriage, bespoke terms, or nothing
4. Whether those conditions should be linked as a PDF or reproduced on the site

---

## Summary of what is needed from the client

Short list, and most of it is a five minute answer:

1. Company registration number
2. VAT number
3. Enquiry email address
4. What conditions of carriage they trade under
5. How long they want to keep enquiry records
6. Whether they are registered with the ICO

## Before launch

The privacy and cookie pages are ordinary and low risk once the placeholders are filled. The carriage terms are not, and are worth a solicitor or their trade body looking at, particularly given the value of the goods involved. If the client has an existing relationship with the RHA or a similar body, that is usually the cheapest route to getting it right.
