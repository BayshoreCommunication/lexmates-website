"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative  w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/home/hero/hero-bg1.jpg"
        alt="City Background"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/20" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[90vh] flex-col items-center justify-center px-4">
        <h1 className="mb-10 max-w-4xl text-center text-3xl font-semibold italic text-[#3b5b82] md:text-4xl lg:text-5xl">
          “A passion for justice. The experience for win”
        </h1>

        <div className="w-full max-w-xl rounded-md bg-white p-8 shadow-lg md:p-10">
          <h2 className="mb-6 text-center text-2xl font-semibold text-gray-800">
            Request Free Consultation
          </h2>

          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter Your E-mail"
              className="w-full rounded border px-4 py-3 text-sm focus:border-blue-600 focus:outline-none"
            />

            <input
              type="tel"
              placeholder="Enter Your Phone number"
              className="w-full rounded border px-4 py-3 text-sm focus:border-blue-600 focus:outline-none"
            />

            <input
              type="text"
              placeholder="Consult For"
              className="w-full rounded border px-4 py-3 text-sm focus:border-blue-600 focus:outline-none"
            />

            <textarea
              rows={4}
              placeholder="Enter Your Query"
              className="w-full resize-none rounded border px-4 py-3 text-sm focus:border-blue-600 focus:outline-none"
            />

            <button className="w-full rounded bg-orange-500 py-3 text-sm font-semibold uppercase text-white hover:bg-orange-600">
              Send Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
