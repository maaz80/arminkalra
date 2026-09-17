"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const defaultBrands = [
  { _id: "b2", src: "/images/comp2.webp", alt: "Client Logo 2" },
  { _id: "b3", src: "/images/comp3.webp", alt: "Client Logo 3" },
  { _id: "b4", src: "/images/comp4.webp", alt: "Client Logo 4" },
  { _id: "b5", src: "/images/comp5.webp", alt: "Client Logo 5" },
  { _id: "b6", src: "/images/comp6.webp", alt: "Client Logo 6" },
  { _id: "b7", src: "/images/comp7.webp", alt: "Client Logo 7" },
  { _id: "b8", src: "/images/comp8.webp", alt: "Client Logo 8" },
];

export default function Clients() {
  const [brands, setBrands] = useState(defaultBrands);
  const containerRef = useRef(null);

  useEffect(() => {
    const backendUrl =
      process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000/api";

    fetch(`${backendUrl}/companies`)
      .then((res) => res.json())
      .then((data) => {
        if (data && Array.isArray(data.data) && data.data.length > 0) {
          const formatted = data.data.map((c) => ({
            _id: c._id,
            src: c.image || "/images/comp2.webp",
            alt: c.alt || c.name || "Client Logo",
          }));
          setBrands(formatted);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch dynamic company logos:", err);
      });
  }, []);

  // Track scroll progress of container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const xRow1 = useTransform(scrollYProgress, [0, 1], ["50px", "-550px"]);
  const xRow2 = useTransform(scrollYProgress, [0, 1], ["-550px", "50px"]);

  // Split brands into 2 rows dynamically
  const half = Math.ceil(brands.length / 2);
  const row1Brands = brands.slice(0, half);
  const row2Brands = brands.slice(half).length > 0 ? brands.slice(half) : brands;

  // Repeat for continuous marquee effect
  const row1Repeated = [
    ...row1Brands,
    ...row1Brands,
    ...row1Brands,
    ...row1Brands,
  ];
  const row2Repeated = [
    ...row2Brands,
    ...row2Brands,
    ...row2Brands,
    ...row2Brands,
  ];

  return (
    <section
      ref={containerRef}
      className="w-full bg-background py-16 sm:py-24 border-t border-zinc-900/60 overflow-hidden relative"
    >
      {/* Floating Heart Icon Badge on Right */}
      <div className="absolute right-8 sm:right-24 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#18181c]/90 border border-zinc-700/80 backdrop-blur-md flex items-center justify-center shadow-2xl">
          <FaHeart className="text-[#ff4d4d] text-xl sm:text-2xl animate-pulse" />
        </div>
      </div>

      <div className="space-y-6 sm:space-y-8 relative z-10">
        {/* Row 1: Moves Left on Scroll Down, Right on Scroll Up */}
        <div className="overflow-hidden w-full flex">
          <motion.div
            style={{ x: xRow1 }}
            className="flex gap-4 sm:gap-6 shrink-0"
          >
            {row1Repeated.map((brand, idx) => (
              <div
                key={`${brand._id || idx}-${idx}`}
                className="w-45 h-35 sm:w-60 sm:h-42.5 bg-white/10 hover:bg-white/15 border border-white/50 rounded-2xl flex items-center justify-center p-3 shrink-0 transition-colors shadow-lg"
              >
                <img
                  src={brand.src}
                  alt={brand.alt}
                  width={280}
                  height={100}
                  className="w-40 max-h-20 object-contain brightness-0 invert opacity-85 hover:opacity-100 transition-opacity select-none"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Moves Right on Scroll Down, Left on Scroll Up */}
        <div className="overflow-hidden w-full flex">
          <motion.div
            style={{ x: xRow2 }}
            className="flex gap-4 sm:gap-6 shrink-0"
          >
            {row2Repeated.map((brand, idx) => (
              <div
                key={`${brand._id || idx}-${idx}`}
                className="w-45 h-35 sm:w-60 sm:h-42.5 bg-white/10 hover:bg-white/15 border border-white/50 rounded-2xl flex items-center justify-center p-6 shrink-0 transition-colors shadow-lg"
              >
                <img
                  src={brand.src}
                  alt={brand.alt}
                  width={180}
                  height={100}
                  className="w-40 max-h-20 object-contain brightness-0 invert opacity-85 hover:opacity-100 transition-opacity select-none"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
