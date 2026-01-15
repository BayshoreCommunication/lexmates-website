"use client";
import CountUp from "react-countup";

export default function WhyChooseLexmates() {
  return (
    <section
      className="relative w-full bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: "url('/images/home/why-choose/blue-map.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-24">
        <h2 className="mb-14 text-center text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
          Why Choose Lexmates?
        </h2>

        <div className="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { value: 3000, label: "Happy Clients" },
            { value: 14, label: "Years of Experience" },
            { value: 1200, label: "Successful Cases" },
            { value: 3000, label: "More Helped" },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-xl bg-white p-8 text-center shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-4xl font-bold text-orange-500">
                <CountUp end={item.value} duration={3} enableScrollSpy />+
              </h3>
              <p className="mt-3 text-sm font-medium text-gray-700">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
