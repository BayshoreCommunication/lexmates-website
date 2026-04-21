"use client";

import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function Counter({ end, suffix = "", duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = end / (duration * 60);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(counter);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="relative w-full py-20">
      
      {/* Background Image */}
      <Image
        src="/images/breadcrumb/bg.png" // put your image in public/images
        alt="Background"
        fill
        className="object-cover"
      />

      Dark Overlay
      <div className="absolute inset-0 bg-blue-950/80 -z-10" />

      <div className="max-w-[1320px] mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

          {/* Item 1 */}
          <div className="bg-white/10 backdrop-blur-md py-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              <Counter end={95} suffix="%" />
            </h3>
            <p className="text-sm text-primary mt-2">Cases Won</p>
          </div>

          {/* Item 2 */}
          <div className="bg-white/10 backdrop-blur-md py-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              <Counter end={899} />
            </h3>
            <p className="text-sm text-primary mt-2">Trusted Client</p>
          </div>

          {/* Item 3 */}
          <div className="bg-white/10 backdrop-blur-md py-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              <Counter end={165} suffix="+" />
            </h3>
            <p className="text-sm text-primary mt-2">Dedicated Lawyer</p>
          </div>

          {/* Item 4 */}
          <div className="bg-white/10 backdrop-blur-md py-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              <Counter end={25} suffix="%" />
            </h3>
            <p className="text-sm text-primary mt-2">Case Dismissed</p>
          </div>

        </div>
      </div>
    </section>
  );
}
