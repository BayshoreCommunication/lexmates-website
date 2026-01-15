"use client";

import Image from "next/image";
import Link from "next/link";

export default function ServicesSection() {
    const services = [
  { name: "LITIGATION", slug: "litigation" },
  { name: "CIVIL", slug: "civil" },
  { name: "WRIT PETITION", slug: "writ-petition" },
  { name: "LAND & REAL ESTATE", slug: "land-real-estate" },
  { name: "COMMERCIAL", slug: "commercial" },
  { name: "INCOME TAX, VAT & CUSTOM", slug: "income-tax-vat-custom" },
  { name: "COMPANY MATTER", slug: "company-matter" },
  { name: "BUSINESS", slug: "business" },
  { name: "REGISTRATION", slug: "registration" },
  { name: "SUB-KOBLA, HEBA DEED, WILLS AND WAQF", slug: "sub-kobla-heba-deed-wills-waqf" },
  { name: "FAMILY MATTER", slug: "family-matter" },
  { name: "CRIMINAL CASES", slug: "criminal-cases" },
  { name: "INTELLECTUAL PROPERTY LAW", slug: "intellectual-property-law" },
  { name: "IMMIGRATION & EDUCATION ABROAD", slug: "immigration-education-abroad" },
  { name: "DOCUMENTATION AND NOTARIZATION", slug: "documentation-notarization" },
  { name: "NRB LEGAL SERVICES", slug: "nrb-legal-services" },
  { name: "DUAL CITIZENSHIP", slug: "dual-citizenship" },
  { name: "CYBER LAW", slug: "cyber-law" },
];

  return (
    <section className="py-12 px-8 bg-white max-w-[1320px] mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-black">
        LEXMATES SERVICES
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1640px] mx-auto">
        {services.map((service, idx) => (
          <Link
            key={idx}
            href={`/services/${service.slug}`}
            className="group"
          >
            <div
              className="flex items-center gap-4 
                         bg-white 
                         border border-gray-200 
                         rounded-md 
                         p-4 
                         shadow-sm 
                         hover:shadow-lg 
                         transition-all 
                         cursor-pointer"
            >
              <Image
                src="/images/home/service/law.png"
                alt="Service Icon"
                width={40}
                height={40}
                className="flex-shrink-0"
              />

              <p className="font-extrabold text-gray-800 text-sm md:text-base group-hover:text-orange-600 transition-colors">
                {service.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
