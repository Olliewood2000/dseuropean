# Final staging review and launch handover
Updated 20 September 2026. This is a review build, not a production launch.

Subsequent review change: the user requested removal of all visible photo placeholder captions. They have been removed across the review site; the images remain temporary and are still excluded from production.

## What is implemented

All 17 planned page layouts are available in the review: Home, Services, seven service pages, Storage, About, Recent Jobs, Quote, Contact, Privacy, Cookies and Terms. The site includes responsive navigation, mobile menu, contact bar, FAQs, enquiry validation and uploads, email handlers, structured data, individual sharing images, sitemap, error pages and security headers.

The final work completes the remaining Private Deliveries and Recent Jobs layouts from the supplied copy. Both are visibly marked as unconfirmed review drafts and are excluded from production. Private customers have not been approved as an audience. The four job narratives and permission to publish their locations remain unconfirmed.

Four temporary AI-generated images illustrate transport, installation, storage and exhibition work. They are visibly labelled on the site, use descriptive AI-labelled alternative text, and automatically stop rendering in production. These are visual examples, not photographs of the business, staff, fleet, premises or named jobs. Original image briefs remain in the content for replacement by real photography. Recent Jobs remains a narrative page without fabricated project photographs.

Accessibility fixes give process numbers readable contrast and correct the contact definition-list structure. Form validation runs without eval so the CSP remains enforced. The default framework favicon is replaced by the supplied DS European logo. Updated 404 and error pages use the supplied wording and shared phone placeholder.

## Verification

- Optimised build, TypeScript and ESLint pass.
- 13 enquiry handler scenarios pass with mocked email delivery. No real emails were sent.
- 8 isolated SEO/tracking/review-gate scenarios pass.
- HTTP checks cover all 17 routes, unique titles/descriptions, canonical URLs, schema, sharing images, security headers, single H1, internal links and fragment targets, sitemap exclusions and 404/slash behaviour.
- Mobile browser review at 390px, tablet at 768px and desktop at 1440px. Sampled pages have no horizontal overflow. Mobile and desktop menus open by keyboard, close with Escape and return focus. Quote validation is linked to its field; optional details and service preselection work.
- No console warnings or errors in the sampled local browser review. Full assistive-technology testing with a screen reader and physical phone checks remain outstanding.
- All supplied inline verification markers remain visible. No em dashes found in rendered main copy.
- All page image totals fit the brief's budgets in an asset-size check using 1080px optimised images (approximately a 390px screen at 3x density). The largest total is 162 KB on Services. This is an asset check, not a complete real-device network trace.

Mobile Lighthouse, local optimised build, simulated throttling, 390px:

| Page | Performance | Accessibility | Best practices | SEO | LCP | CLS |
|---|---:|---:|---:|---:|---:|---:|
| Home | 96 | 100 | 100 | 69 | 2.7s | 0 |
| Furniture | 96 | 100 | 100 | 69 | 2.8s | 0 |
| Quote | 95 | 100 | 100 | 69 | 2.9s | 0 |

SEO is reduced solely by the intentional staging noindex/robots protection; every other scored SEO audit passed. This must stay in place until launch. The separate LCP target below 2 seconds has not been met. INP requires interaction/field evidence and is not claimed from these navigation audits. Lighthouse is an automated check, not complete accessibility certification. The reports are local results, not a measurement of Vercel performance.

## Phase status

Phases 1–9 have implementation in the staging history; unanswered content, email and analytics requirements remain open. Phase 10 checks and accessibility fixes are implemented, with the LCP target and full screen-reader/physical-device validation still outstanding. Phase 11 preparation is documented below. Phase 11 production launch is blocked on the client inputs and explicit launch approval. No human gate is marked passed.

The user's instruction to finish the review together replaces the earlier phase-by-phase stopping points. Their request for temporary generated images is a staging exception to the original photography rule. Neither instruction confirms the business claims or authorises production.

## Information needed from the client

1. **Contact details and domain:** the primary website domain; public phone number and international format; monitored enquiry email; monitored WhatsApp number; enquiry monitoring hours and any promised response time.
2. **Company and legal details:** registered company number, VAT number or confirmation it does not apply, approved conditions of carriage, enquiry and job-record retention periods, ICO position and legal review date. Review the three legal pages against actual operations.
3. **Services and claims:** whether private/individual jobs are accepted; pianos; two-person handling; packaging removal; domestic assembly; auction collection; same-day scope. Confirm ownership/hire arrangements for HIAB and Moffett equipment, the team/headcount figures, and each verification/sign-off item in the supplied briefs.
4. **Recent jobs:** permission to publish Lake Como, Girona, France and Texas. For each, give the job, its constraint, what the team did and the outcome. Confirm whether France describes one job or several.
5. **Photography:** real fleet, protected loads, warehouse, installation in progress, finished room and team photos, with permission to use them. Replace the four labelled AI examples before launch.
6. **Email delivery setup:** approved Resend sending domain, verified SPF/DKIM, a sending key stored in Vercel, and approved sender/recipient mailboxes. Then test both forms and both emails in real inboxes, including attachments and retry behaviour.
7. **Map and tracking:** confirm the business-address pin and supply a restricted Google Maps Static key if the static map is wanted. Decide on analytics, Google Ads and photo uploads. Analytics remains off; no tracking decision was assumed.
8. **Site ownership and launch access:** Vercel project/team review access, DNS control, Search Console and Google Business Profile access. Supply the old live domain/site URL list so existing URLs can be mapped before redirects are activated.

The warehouse capacity, security, insurance and bonded-status details are still unknown and have not been invented. They need answers only if you want those claims added. The detailed page-by-page sign-off list accompanies this report.

## Remaining launch steps

- Confirm the above facts; resolve every visible placeholder and verification marker.
- Confirm or remove Private Deliveries; approve or anonymise Recent Jobs and the job-location references elsewhere.
- Replace temporary images with approved photography and repeat image/performance checks.
- Complete the screen-reader and real-device checks, including iPhone HEIC uploads. Universal HEIC resizing is not implemented: unsupported browsers can send the original only within the 4 MB total limit.
- Verify real email delivery, response handling and deployment rate limiting. Success-path inbox delivery is not proved by mocked tests.
- Review supplied metadata: 14 of 17 descriptions fall outside the brief's 140–158 character range. Copy was preserved rather than silently rewritten.
- Confirm canonical domain and old-site URL mapping; configure redirects and domain settings.
- Recheck production headers, metadata, share previews, speed, contact links and enabled analytics choice.
- Obtain final launch approval, then deploy production, verify Search Console, submit sitemap and align the Google Business Profile address.

Main has not been merged or changed by this work. The completed review is on a separate branch targeting staging.
