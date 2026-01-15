"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type WhyChooseItem = {
  id: string;
  title: string;
  description: string;
  image: string;
};

const whyChooseData: WhyChooseItem[] = [
  {
    id: "honest",
    title: "Honest Suggestion",
    description:
      "Trust is one of the most important factors when you look for an attorney. The attorney must provide you with honest and straightforward answers to your every query. Let our attorneys guide you through your legal needs, such as—last will, living trust, advanced directive, or power of attorney—to help you figure out what's best for your needs.",
    image: "/images/home/choose/img1.png",
  },
  {
    id: "experience",
    title: "Highly Experienced",
    description:
      "Our experienced legal staff will be able to provide you with the guidance, insight, and services that are required to ensure a more favorable outcome. Our attorneys have 12+ years of experience and have handled over 1000 cases with a 95% success rate.",
    image: "/images/home/choose/img2.png",
  },
  {
    id: "personalized",
    title: "Personalized Service",
    description:
      "Law changes almost every year and this is why you need lawyers who are up to date with every update. Equipping yourself with personalized legal services ensures better outcomes. Our trusted attorneys will advise you on whatever legal matters might arise.",
    image: "/images/home/choose/img3.png",
  },
];

export default function WhyChoose() {
  const [active, setActive] = useState<string>("personalized");
  const [offsetY, setOffsetY] = useState(0);

  const activeItem =
    whyChooseData.find((item) => item.id === active) ?? whyChooseData[0];

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * 0.3); // Adjust 0.3 for parallax speed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative w-full bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: "url('/images/home/hero/hero-bg1.jpg')",
      }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/40" /> */}

      {/* ===== Tabs / Navbar ===== */}
      <div className="relative z-20 mx-auto max-w-6xl px-8 pt-8 lg:pt-14">
        <div className="flex flex-wrap justify-center gap-8 border-b  text-lg font-semibold">
          {whyChooseData.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`relative pb-0 transition ${
                active === item.id
                  ? "text-orange-500 text-lg font-semibold"
                  : "text-gray-600 hover:text-black text-md font-semibold"
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

      {/* ===== Content ===== */}
      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-6 lg:10 px-4 py-8 lg:py-16 md:grid-cols-2">
        {/* Image */}
        <div className="relative  w-full overflow-hidden rounded-lg shadow-lg">
          <Image
            src={activeItem.image}
            alt={activeItem.title}
            width={1000}
            height={800}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/30" />
        </div>

        {/* Text */}
        <div>
          <h2 className="mb-6 text-3xl font-semibold text-gray-900 md:text-5xl">
            {activeItem.title}
          </h2>
          <p className="max-w-lg text-md leading-7 text-gray-700">
            {activeItem.description}
          </p>
        </div>
      </div>
    </section>
  );
}
