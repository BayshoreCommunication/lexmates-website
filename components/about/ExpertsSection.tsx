"use client";

import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function ExpertsSection() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="bg-[#f4f4f4]">
      <div className="max-w-[1320px] mx-auto px-8 py-8 md:py-16 relative">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm text-primary uppercase tracking-widest">
            Qualified Attorneys
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-2">
            Meet Our Experts
          </h2>

          <div className="w-16 h-[2px] bg-primary mx-auto mt-4" />
        </div>

        {/* LEFT ARROW */}
        <button
          ref={prevRef}
          className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 z-20
          w-12 h-12 bg-primary
          flex items-center justify-center
          rounded shadow transition"
        >
          <span className="text-3xl leading-none">‹</span>
        </button>

        {/* RIGHT ARROW */}
        <button
          ref={nextRef}
          className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 z-20
          w-12 h-12 bg-primary
          flex items-center justify-center
          rounded shadow transition"
        >
          <span className="text-3xl leading-none">›</span>
        </button>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
          }}
        >

          <SwiperSlide>
            <ExpertCard
              image="/images/about/img1.png"
              name="Darcy Alec"
              role="Family Lawyer"
            />
          </SwiperSlide>

          <SwiperSlide>
            <ExpertCard
              image="/images/about/img2.png"
              name="Daniel Dambeldor"
              role="Criminal Lawyer"
            />
          </SwiperSlide>

          <SwiperSlide>
            <ExpertCard
              image="/images/about/img3.png"
              name="William Stephen"
              role="Family Lawyer"
            />
          </SwiperSlide>

          <SwiperSlide>
            <ExpertCard
              image="/images/about/img1.png"
              name="John Carter"
              role="Corporate Lawyer"
            />
          </SwiperSlide>

        </Swiper>
      </div>
    </section>
  );
}

function ExpertCard({
  image,
  name,
  role,
}: {
  image: string;
  name: string;
  role: string;
}) {
  return (
    <div className="bg-white group">
      <div className="relative w-full h-[350px] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-500 object-top"
        />
      </div>

      <div className="text-center py-6">
        <h3 className="text-lg font-semibold text-gray-800">
          {name}
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          {role}
        </p>
      </div>
    </div>
  );
}
