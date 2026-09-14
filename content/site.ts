/** Shared public content. Unknown details must never be turned into working links. */
export const site = {
  name: "DS European",
  legalName: "DS European Ltd",
  // Existing Home OG description, reused without writing new marketing copy.
  positioning: "Specialist transport and on site installation across the UK, Europe and worldwide.",
  domain: "PLACEHOLDER_CANONICAL_DOMAIN",
  phone: "PLACEHOLDER_PHONE",
  phoneInternational: "PLACEHOLDER_PHONE_INTERNATIONAL",
  email: "PLACEHOLDER_EMAIL",
  whatsapp: "PLACEHOLDER_WHATSAPP",
  address: {
    street: "King Arthur Court, Maidstone Road",
    locality: "Charing",
    town: "Ashford",
    region: "Kent",
    postcode: "TN27 0JS",
    country: "GB",
  },
  hours: "24 hours a day, 365 days a year",
  hoursShort: "24/7, 365",
  enquiryMonitoringHours: "PLACEHOLDER_ENQUIRY_MONITORING_HOURS",
  responseTime: "PLACEHOLDER_ENQUIRY_RESPONSE_TIME",
  companyNumber: "PLACEHOLDER_COMPANY_NUMBER",
  vatNumber: "PLACEHOLDER_VAT_NUMBER",
  logos: {
    longWhite: "/Logo/ds-european-long-white.svg",
    longDark: "/Logo/ds-european-long-dark.svg",
    shortWhite: "/Logo/ds-european-short-white.svg",
    shortDark: "/Logo/ds-european-short-dark.svg",
  },
  decisions: {
    privateDeliveries: "PLACEHOLDER_PRIVATE_DELIVERIES_DECISION",
    publishJobLocations: "PLACEHOLDER_JOB_LOCATIONS_PERMISSION",
    publishHeadcount: "PLACEHOLDER_HEADCOUNT_PERMISSION",
    liftingEquipmentOwnership: "PLACEHOLDER_LIFTING_EQUIPMENT_OWNERSHIP",
    analytics: "PLACEHOLDER_ANALYTICS_DECISION",
    googleAds: "PLACEHOLDER_GOOGLE_ADS_DECISION",
    photoUploads: "PLACEHOLDER_PHOTO_UPLOADS_DECISION",
  },
  legal: {
    conditionsOfCarriage: "PLACEHOLDER_CONDITIONS_OF_CARRIAGE",
    enquiryRetention: "PLACEHOLDER_ENQUIRY_RETENTION_PERIOD",
    jobRecordRetention: "PLACEHOLDER_JOB_RECORD_RETENTION_PERIOD",
    icoRegistration: "PLACEHOLDER_ICO_REGISTRATION",
    lastReviewed: "PLACEHOLDER_LEGAL_REVIEW_DATE",
    cookieConfiguration: "PLACEHOLDER_COOKIE_CONFIGURATION_REVIEW",
  },
  warehouse: {
    address: "PLACEHOLDER_WAREHOUSE_ADDRESS",
    capacity: "PLACEHOLDER_WAREHOUSE_CAPACITY",
    security: "PLACEHOLDER_WAREHOUSE_SECURITY",
    insurance: "PLACEHOLDER_WAREHOUSE_INSURANCE",
    bonded: "PLACEHOLDER_WAREHOUSE_BONDED_STATUS",
  },
  socialProfiles: "PLACEHOLDER_SOCIAL_PROFILES",
} as const;

export function isPlaceholder(value: string): boolean {
  return value.startsWith("PLACEHOLDER_");
}
