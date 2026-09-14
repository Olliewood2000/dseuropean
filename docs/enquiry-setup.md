# Enquiry delivery setup

Phase 7 implements the pages and submission paths. Delivery stays disabled until
approved contact details and a sending domain are available. Do not mark Gate 7
passed from a successful build or mocked transport tests.

1. Put the approved public phone, international phone, enquiry address and monitored
   WhatsApp number in `content/site.ts`. Do not infer them from older stationery.
2. In Resend, verify the agreed sending domain and its SPF/DKIM records. Create a
   sending API key. Set credentials through Vercel's environment settings, never
   in a committed file or browser code.
3. Set `RESEND_API_KEY`, `ENQUIRY_FROM_EMAIL` (plain mailbox on the verified domain)
   and `ENQUIRY_TO_EMAIL` (approved monitored inbox). Keep
   `ENQUIRY_DELIVERY_ENABLED=false` until the test window is agreed.
4. Configure Vercel WAF rate limiting for `/api/quote` and `/api/contact`.
   Application honeypot/timestamp checks do not replace this deployment setting.
5. During an authorised test window, set `ENQUIRY_DELIVERY_ENABLED=true`, redeploy
   the preview and submit both forms with an approved test recipient. Check the
   company notification and sender confirmation arrive, replies route correctly,
   attachments open, and the success heading receives focus without navigation.
6. Confirm whether customers should attach photos. Test real JPEG, PNG, WebP and
   iPhone HEIC files, including three files, large originals, failed uploads and
   retries. Do not use client photographs in automated tests.
7. For the Contact map, supply `NEXT_PUBLIC_MAPS_KEY` for Google Maps Static API
   with API/referrer restrictions for the review and eventual live domains.
   Verify the address marker and directions in a browser. Without this setting,
   the supplied review placeholder stays visible. No interactive iframe loads.

The HTML forms send multipart data with JSON fields and binary photographs,
keeping the 4 MB photo allowance below Vercel's 4.5 MB request cap. The handler
also accepts JSON when no files are included. It caps the complete request at
4.1 MB, validates against the client schema, checks file signatures/types and
sends plain-text emails through the Resend HTTP API. Files are attached to the
company notification and are not persisted to a file store. Sender confirmations
contain the supplied success wording and a plain copy of submitted fields.

Retries use distinct notification/confirmation idempotency keys derived from the
same submission ID and payload. If confirmation fails after the notification was
accepted, retrying the unchanged request reuses both keys. Provider errors return
an error to the form and keep entered data. Resend acceptance is not proof of inbox
delivery; both inboxes must be checked in the real test.

Decodable photos are resized to a longest edge of 1920px at JPEG quality 0.8.
Browsers without native HEIC decoding attach the original HEIC only if the whole
submission remains within the 4 MB photo cap. Universal HEIC resizing is not
implemented or claimed: an extra decoder needs the repository's dependency rule
exception, which has been requested. The original-file fallback is provisional
pending that answer. Raw files above 20 MB are rejected before browser decoding.

Known review limitations: contact values remain placeholders; the map key and
verified sending-domain credentials are not configured; WAF configuration is not
verified; real inbox arrival and success-focus verification remain pending.
The existing M20/timing copy also needs client verification before publication.
No environment settings or real email recipients were changed by this phase.

Run `node tests/enquiries.cjs` with Node 22 for isolated route tests. It replaces
only the email transport in that process and never sends actual messages. The
HEIC route fixture tests the file-signature path, not real device decoding.

References: [Resend send API](https://resend.com/docs/api-reference/emails/send-email),
[Resend idempotency](https://resend.com/docs/dashboard/emails/idempotency-keys),
[Vercel request limits](https://vercel.com/docs/functions/limitations).
