// Verbatim working draft from docs/pages/legal.md. Shared facts are resolved from site.ts.
export const legalPages = {
  privacy: {
    title: "Privacy policy",
    meta: {
      title: "Privacy Policy | DS European",
      description: "How DS European collects, uses and stores personal information.",
    },
    blocks: [
      {
        heading: "Who we are",
        paragraphs: [
          "{{legalName}}, {{legalAddress}}. Registered in England and Wales, company number {{companyNumber}}. You can contact us about anything on this page at {{email}} or {{phone}}.",
        ],
        list: [],
      },
      {
        heading: "What we collect",
        paragraphs: [
          "When you complete a form on this website we collect your name, email address, telephone number and whatever details you give us about the job. If you attach photographs to a quote request, we collect those too.",
          "We also collect basic information about how the site is used, such as which pages are viewed and roughly where visitors are in the world. This does not identify you.",
        ],
        list: [],
      },
      {
        heading: "Why we collect it",
        paragraphs: [
          "To respond to your enquiry, to prepare a quotation, and to carry out work if you go ahead. Where you have asked us to quote, we process your information because it is necessary to take steps at your request before entering into a contract. Where we use the site analytics described above, we do so on the basis of our legitimate interest in understanding how the website performs.",
        ],
        list: [],
      },
      {
        heading: "Who we share it with",
        paragraphs: [
          "We do not sell your information to anybody. We share it only where we need to in order to do the work or run the business, which may include:",
        ],
        list: [
          "Our website and email providers, who host the site and deliver form submissions to us",
          "Partners or subcontractors where part of a job is carried out by them, and only the details they need",
          "Our accountants, and anyone we are legally required to disclose to",
        ],
      },
      {
        heading: "How long we keep it",
        paragraphs: [
          "Enquiries that do not become jobs are kept for [{{enquiryRetention}}, typically 12 to 24 months] and then deleted. Records relating to work we have carried out are kept for [{{jobRecordRetention}}, typically 6 years] to meet our legal and accounting obligations.",
        ],
        list: [],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "You have the right to ask us for a copy of the information we hold about you, to have it corrected if it is wrong, to ask us to delete it, and to object to us using it. Contact us at {{email}} and we will respond within one month.",
          "If you are unhappy with how we have handled your information you can complain to the Information Commissioner's Office at ico.org.uk.",
        ],
        list: [],
      },
      {
        heading: "Changes",
        paragraphs: [
          "We will update this page if how we handle information changes. The date at the top shows when it was last revised.",
        ],
        list: [],
      },
    ],
  },
  cookies: {
    title: "Cookie notice",
    meta: {
      title: "Cookie Notice | DS European",
      description: "What cookies this website uses and why.",
    },
    blocks: [
      {
        paragraphs: [
          "This website does not use tracking or advertising cookies.",
          "We use a small number of strictly necessary cookies to make the site work, for example to prevent spam submissions on our forms. These do not identify you and cannot be used to track you across other websites. Under UK law, strictly necessary cookies do not require your consent.",
          "We measure how the website is used with a privacy focused analytics tool that does not set cookies and does not collect personal information. It tells us which pages are viewed and where visitors arrived from, and nothing about who you are.",
          "If you would like to know more about how we handle personal information, see our [privacy policy](/privacy).",
        ],
        list: [],
      },
    ],
  },
  terms: {
    title: "Terms",
    meta: {
      title: "Terms | DS European",
      description:
        "Terms of use for the DS European website and where to find our conditions of carriage.",
    },
    blocks: [
      {
        heading: "About these terms",
        paragraphs: [
          "These terms cover your use of this website. They do not cover the work we carry out for customers, which is governed by our conditions of carriage. {{conditionsOfCarriage}}",
        ],
        list: [],
      },
      {
        heading: "Who we are",
        paragraphs: [
          "{{legalName}}, {{legalAddress}}. Registered in England and Wales, company number {{companyNumber}}. VAT number {{vatNumber}}.",
        ],
        list: [],
      },
      {
        heading: "Using this site",
        paragraphs: [
          "You may use this website for your own purposes and to find out about our services. You may not use it in any way that is unlawful, or that damages or interferes with the site or anyone else's use of it.",
        ],
        list: [],
      },
      {
        heading: "Our content",
        paragraphs: [
          "The content of this website, including text, images and design, belongs to us unless stated otherwise. You may not reproduce it commercially without our permission.",
        ],
        list: [],
      },
      {
        heading: "Quotations and information",
        paragraphs: [
          "Information on this site is provided for general guidance. Service descriptions, coverage and lead times are indicative rather than a contractual commitment. Nothing on this website is an offer. A price becomes binding only when we issue a written quotation and it is accepted.",
        ],
        list: [],
      },
      {
        heading: "Links to other sites",
        paragraphs: ["Where we link to another website we are not responsible for its content."],
        list: [],
      },
      {
        heading: "Liability",
        paragraphs: [
          "We take care to keep this website accurate and available, but we do not guarantee that it will be uninterrupted or free of error. Nothing in these terms limits our liability for death or personal injury caused by negligence, or for fraud.",
        ],
        list: [],
      },
      {
        heading: "Governing law",
        paragraphs: ["These terms are governed by the law of England and Wales."],
        list: [],
      },
    ],
  },
} as const;
export type LegalSlug = keyof typeof legalPages;
