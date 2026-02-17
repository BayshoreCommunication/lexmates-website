"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialSection() {
  return (
    <section className="bg-[#f4f4f4]">
      <div className="max-w-[1320px] mx-auto px-8 py-8 md:py-16 relative">

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          className="relative"
        >
          <SwiperSlide>
            <SlideContent
              image="/images/testimonial/img.png"
              name="Racky Goaver"
              role="CEO of American BDS"
            />
          </SwiperSlide>

          <SwiperSlide>
            <SlideContent
              image="/images/testimonial/img.png"
              name="Daniel Smith"
              role="Corporate Client"
            />
          </SwiperSlide>

          <SwiperSlide>
            <SlideContent
              image="/images/testimonial/img.png"
              name="John Carter"
              role="Business Owner"
            />
          </SwiperSlide>
        </Swiper>

        {/* PAGINATION DOTS - BOTTOM RIGHT */}
        <div className="custom-pagination absolute right-8 bottom-8 flex gap-3 z-20" />

      </div>

      {/* Custom Dot Styling */}
      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #c2b280;
          opacity: 0.4;
          margin: 0 !important;
        }

        .custom-pagination .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.3);
        }
      `}</style>
    </section>
  );
}

function SlideContent({
  image,
  name,
  role,
}: {
  image: string;
  name: string;
  role: string;
}) {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* LEFT IMAGE */}
      <div className="relative w-full max-w-[450px]">
        <Image
          src={image}
          alt={name}
          width={1000}
          height={800}
          className="object-contain w-full h-auto"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div>
        <p className="text-sm text-[#c2b280] uppercase tracking-widest mb-2">
          What People Say
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
          Client Testimonial
        </h2>

        <div className="text-[#c2b280] text-4xl mb-4">“</div>

        <p className="text-gray-500 leading-relaxed mb-8 max-w-md">
          There are many variations of passages of Lorem Ipsum available,
          but the majority have suffered alteration in some form,
          by injected humour or randomised words.
        </p>

        {/* Client Info */}
        <div className="flex items-center gap-4">
          <div className="relative w-14 h-14 rounded-full overflow-hidden">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-800">
              {name}
            </h4>
            <p className="text-xs text-gray-500">
              {role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
