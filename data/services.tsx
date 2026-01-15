export interface servicesData {
  name: string;
  slug: string;
  description: string[];
}

export const servicesData: Record<string, servicesData> = {
  litigation: {
    name: "LITIGATION",
    slug: "litigation",
    description: [
      "Our litigation practice provides strategic representation in complex legal disputes before all courts and tribunals.",
      "We handle civil and commercial litigation with a strong focus on protecting client interests through effective advocacy."
    ]
  },
  civil: {
    name: "CIVIL",
    slug: "civil",
    description: [
      "Our civil law services address disputes relating to property, contracts, recovery of money, and personal rights.",
      "We provide practical legal solutions through negotiation, mediation, and court proceedings when required."
    ]
  },
  "writ-petition": {
    name: "WRIT PETITION",
    slug: "writ-petition",
    description: [
      "We specialize in writ petitions before the High Court to safeguard fundamental and legal rights.",
      "Our team ensures prompt and effective remedies against unlawful or arbitrary actions by authorities."
    ]
  },
  "land-real-estate": {
    name: "LAND & REAL ESTATE",
    slug: "land-real-estate",
    description: [
      "We offer comprehensive legal services for land and real estate transactions and disputes.",
      "Our services include due diligence, registration, documentation, and litigation concerning property rights."
    ]
  },
  commercial: {
    name: "COMMERCIAL",
    slug: "commercial",
    description: [
      "Our commercial law practice assists businesses with contracts, disputes, and regulatory compliance.",
      "We focus on minimizing risk while ensuring legal protection for business operations."
    ]
  },
  "income-tax-vat-custom": {
    name: "INCOME TAX, VAT & CUSTOM",
    slug: "income-tax-vat-custom",
    description: [
      "We provide expert legal assistance in income tax, VAT, and customs matters including assessments and appeals.",
      "Our firm represents clients before tax authorities and appellate tribunals."
    ]
  },
  "company-matter": {
    name: "COMPANY MATTER",
    slug: "company-matter",
    description: [
      "We handle company incorporation, governance, restructuring, and compliance matters.",
      "Our legal team advises directors, shareholders, and corporations on regulatory obligations and disputes."
    ]
  },
  business: {
    name: "BUSINESS",
    slug: "business",
    description: [
      "Our business law services support entrepreneurs and enterprises at every stage of operation.",
      "We provide strategic legal guidance on contracts, risk management, and compliance."
    ]
  },
  registration: {
    name: "REGISTRATION",
    slug: "registration",
    description: [
      "We assist with registration of businesses, legal documents, and statutory filings.",
      "Our services ensure accuracy, compliance, and timely completion."
    ]
  },
  "sub-kobla-heba-deed-wills-waqf": {
    name: "SUB-KOBLA, HEBA DEED, WILLS AND WAQF",
    slug: "sub-kobla-heba-deed-wills-waqf",
    description: [
      "We prepare and register Sub-Kobla, Heba deeds, wills, and waqf documents.",
      "Our firm ensures legal validity and protection of rights in all property transfers and endowments."
    ]
  },
  "family-matter": {
    name: "FAMILY MATTER",
    slug: "family-matter",
    description: [
      "We provide confidential and compassionate legal services in family law matters.",
      "Our practice includes divorce, maintenance, child custody, and related disputes."
    ]
  },
  "criminal-cases": {
    name: "CRIMINAL CASES",
    slug: "criminal-cases",
    description: [
      "Our criminal law practice offers robust defense and prosecution services.",
      "We represent clients at all stages of criminal proceedings with diligence and discretion."
    ]
  },
  "intellectual-property-law": {
    name: "INTELLECTUAL PROPERTY LAW",
    slug: "intellectual-property-law",
    description: [
      "We protect intellectual property rights including trademarks, copyrights, and patents.",
      "Our services include registration, enforcement, licensing, and dispute resolution."
    ]
  },
  "immigration-education-abroad": {
    name: "IMMIGRATION & EDUCATION ABROAD",
    slug: "immigration-education-abroad",
    description: [
      "We provide legal assistance for immigration, visas, and education abroad matters.",
      "Our team guides clients through documentation and regulatory compliance."
    ]
  },
  "documentation-notarization": {
    name: "DOCUMENTATION AND NOTARIZATION",
    slug: "documentation-notarization",
    description: [
      "We offer professional documentation drafting and notarization services.",
      "Our firm ensures legal accuracy and timely execution of all documents."
    ]
  },
  "nrb-legal-services": {
    name: "NRB LEGAL SERVICES",
    slug: "nrb-legal-services",
    description: [
      "We provide specialized legal services for Non-Resident Bangladeshis (NRB).",
      "Our services include property management, power of attorney, and legal representation in Bangladesh."
    ]
  },
  "dual-citizenship": {
    name: "DUAL CITIZENSHIP",
    slug: "dual-citizenship",
    description: [
      "We assist eligible clients with dual citizenship applications and related legal procedures.",
      "Our team ensures compliance with applicable laws for a smooth application process."
    ]
  },
  "cyber-law": {
    name: "CYBER LAW",
    slug: "cyber-law",
    description: [
      "Our cyber law services address digital crimes, data protection, and technology-related legal issues.",
      "We represent clients in cybercrime cases and provide advisory services on online legal risks."
    ]
  }
};