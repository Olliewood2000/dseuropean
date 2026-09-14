// Supplied Quote and Contact page copy. Client details and claim sign-off remain pending.
export const quoteMeta = {
  title: "Get a Quote | DS European",
  description:
    "Tell us what needs moving, where from and where to. We will come back with a price. Available 24 hours a day, 365 days a year.",
};
export const contactMeta = {
  title: "Contact DS European | Charing, Ashford, Kent",
  description:
    "Call, email or message us. Based at Charing near Ashford in Kent, available 24 hours a day, 365 days a year.",
};
export const quotePage = {
  hero: {
    variant: "page",
    eyebrow: "GET A QUOTE",
    title: "Tell us what needs moving",
    subtitle:
      "Every job is priced individually, so the more you can tell us the faster we can come back with a real number rather than a range.",
    breadcrumbs: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Get a Quote",
      },
    ],
    section: {
      id: "quote-hero",
      background: "inverse",
      padding: "compact",
      cut: "bottom",
    },
  },
  trust: {
    items: [
      {
        figure: "60 years",
        label: "Combined industry experience",
      },
      {
        figure: "24/7",
        label: "Available 365 days a year",
      },
      {
        figure: "10",
        label: "Fitters and supervisors on our own team",
      },
      {
        figure: "21",
        label: "People across transport, installation and warehousing",
      },
    ],
    section: {
      id: "quote-trust",
      background: "subtle",
      padding: "compact",
    },
  },
  details: {
    layout: "grid",
    showMap: false,
    section: {
      id: "quote-contact",
      background: "surface",
      padding: "compact",
    },
  },
  aside: {
    heading: "What happens next",
    steps: [
      {
        title: "We read it properly.",
        body: "Someone here looks at it, not a system.",
      },
      {
        title: "We come back with a price.",
        body: "Not a range, and not a callback to ask the same questions again.",
      },
      {
        title: "If we need more, we ask.",
        body: "Usually access at one end, or a photograph.",
      },
    ],
    talk: "Would rather talk?",
    smallPrint:
      "Every job is quoted individually. There is no rate card, because a single piece across Kent and a full scheme into northern Italy are not the same job.",
  },
} as const;
export const contactPage = {
  hero: {
    variant: "page",
    eyebrow: "CONTACT",
    title: "Contact us",
    subtitle:
      "We are here 24 hours a day, 365 days a year. Call, email or send a message on WhatsApp, whichever suits.",
    primaryCta: {
      label: "Get a quote",
      href: "/quote",
    },
    breadcrumbs: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Contact",
      },
    ],
    section: {
      id: "contact-hero",
      background: "inverse",
      padding: "compact",
      cut: "bottom",
    },
  },
  form: {
    title: "Send us a message",
    intro:
      "If you want a price, the quote form will get you one faster because it asks the right questions. For anything else, this will reach us.",
    section: {
      id: "contact-form",
      background: "subtle",
      padding: "standard",
    },
  },
  aside: {
    heading: "Opening hours",
    body: [
      "24 hours a day, 365 days a year.",
      "We run work overnight, at weekends and on bank holidays because that is when a lot of it has to happen. If you need something out of hours, ring rather than email.",
    ],
    quoteHeading: "Looking for a price?",
    quoteBody: "The quote form asks what we need in order to price a job properly.",
  },
  finding: {
    title: "Finding us",
    body: [
      "We are at King Arthur Court on the Maidstone Road at Charing, between Maidstone and Ashford in Kent. It is a few minutes from junction 8 of the M20 and around fifteen minutes from Ashford International.",
      "If you are delivering to us or collecting, ring ahead so someone is expecting you and can point you at the right door.",
    ],
    section: {
      id: "contact-finding",
      background: "surface",
      padding: "compact",
    },
  },
  quote: {
    title: "Got a job to price?",
    body: "Tell us what needs moving, where from and where to. We will come back with a price.",
    primaryCta: {
      label: "Get a quote",
      href: "/quote",
    },
    showPhone: true,
    section: {
      id: "contact-quote",
      background: "inverse",
      padding: "generous",
      cut: "top",
    },
  },
} as const;
