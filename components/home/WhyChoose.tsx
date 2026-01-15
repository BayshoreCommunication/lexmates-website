"use client";

import { useState } from "react";
import Image from "next/image";
// import { whyChooseData } from "@/data/whyChooseData";
const whyChooseData = [
  {
    id: "honest",
    title: "Honest Suggestion",
    description:
      "Trust is one of the most important factors when you look for an attorney. The attorney must provide you with honest and straightforward answers to your every query. Let our attorneys guide you through your legal needs, such as—last will, living trust, advanced directive, or power of attorney—to help you figure out what's best for your needs.",
    image: "/images/home/why-choose/honest.jpg",
  },
  {
    id: "experience",
    title: "Highly Experienced",
    description:
      "Our experienced legal staff will be able to provide you with the guidance, insight, and services that are required to ensure a more favorable outcome for proceedings and legal efforts. Our attorneys have 12+ years of experience in this field. To date, we have handled 1000 cases and have 950+ successful cases. From this, it is easily understandable that our experience helped us to find the right solution for our clients.",
    image: "/images/home/why-choose/experience.jpg",
  },
  {
    id: "personalized",
    title: "Personalized Service",
    description:
      "Law changes almost every year and this is why you need lawyers who are up to date with every update. Equipping yourself with personalized legal services and solutions that specifically address your issues, ensures a more favorable outcome. Our trusted network of attorneys will be able to advise you on whatever legal matters might arise.",
    image: "/images/home/why-choose/blue-map.jpg",
  },
];
export default function WhyChoose() {
  const [active, setActive] = useState("personalized");

  const activeItem = whyChooseData.find((item) => item.id === active);

  return (
    <section className="relative w-full overflow-hidden bg-[#f4f7fa]">
      {/* Tabs / Navbar */}
      <div className="relative z-20 mx-auto max-w-6xl px-4 pt-16">
        <div className="flex justify-center gap-10 border-b text-sm font-medium">
          {whyChooseData.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`relative pb-3 transition ${
                active === item.id
                  ? "text-orange-500"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {item.title}
              {active === item.id && (
                <span className="absolute left-0 bottom-0 h-[2px] w-full bg-orange-500" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ✅ PARALLAX BACKGROUND (STATIC IMAGE) */}
      <div
        className="absolute inset-0 -z-10 bg-fixed bg-center bg-no-repeat bg-contain"
        style={{
          backgroundImage: "url('/images/header/logo.png')",
        }}
      >
        <div className="absolute inset-0 bg-white/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 py-24 md:grid-cols-2">
        {/* Image */}
        <div className="relative h-[420px] w-full overflow-hidden rounded-lg shadow-lg">
          <Image
            src={activeItem?.image || ""}
            alt={activeItem?.title || ""}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/40" />
        </div>

        {/* Text */}
        <div>
          <h2 className="mb-6 text-3xl font-semibold text-gray-900 md:text-4xl">
            {activeItem?.title}
          </h2>
          <p className="max-w-lg text-sm leading-7 text-gray-700">
            {activeItem?.description}
          </p>
        </div>
      </div>
    </section>
  );
}
