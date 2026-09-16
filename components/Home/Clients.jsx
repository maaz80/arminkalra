"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaHeart } from "react-icons/fa";

export default function Clients() {
  const containerRef = useRef(null);

  // Track scroll progress of the container relative to viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Row 1: Moves LEFT on scroll down, moves RIGHT (reverse) on scroll up
  const xRow1 = useTransform(scrollYProgress, [0, 1], ["50px", "-550px"]);

  // Row 2: Moves RIGHT on scroll down, moves LEFT (reverse) on scroll up
  const xRow2 = useTransform(scrollYProgress, [0, 1], ["-550px", "50px"]);

  const row1Brands = [
    {
      name: "Business Today",
      render: () => (
        <span className="font-serif font-bold text-white text-xl sm:text-2xl tracking-tight select-none">
          Business Today
        </span>
      ),
    },
    {
      name: "Designit",
      render: () => (
        <div className="text-center font-sans font-bold text-white text-2xl tracking-tight select-none">
          Designit
          <span className="block text-[11px] font-normal text-zinc-400 -mt-1 tracking-wider">
            a wipro company
          </span>
        </div>
      ),
    },
    {
      name: "YES BANK",
      render: () => (
        <div className="flex items-center gap-2 select-none">
          <div className="w-5 h-5 bg-[#e53935] text-white flex items-center justify-center rounded-sm font-bold text-xs">
            ✓
          </div>
          <span className="font-sans font-bold text-white text-xl tracking-wider">
            YES BANK
          </span>
        </div>
      ),
    },
    {
      name: "Etisalat",
      render: () => (
        <div className="flex items-center gap-2.5 select-none">
          <span className="font-sans font-medium text-white text-2xl tracking-tight">
            etisalat
          </span>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 3.2 1.5 6.05 3.84 7.9 1.4-2.5 3.86-5.9 6.16-5.9 2.5 0 4 2.1 4 4.5 0 1.9-1.1 3.5-2.5 3.5H12c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
          </svg>
        </div>
      ),
    },
    {
      name: "Gadgets 360",
      render: () => (
        <div className="text-center font-sans select-none">
          <div className="flex items-center gap-1 text-white font-bold text-xl">
            <span>Gadgets</span>
            <span className="bg-white text-black text-xs font-black px-1.5 py-0.5 rounded-full">
              360
            </span>
          </div>
          <span className="block text-[10px] text-zinc-400 tracking-wider uppercase mt-0.5">
            An NDTV venture
          </span>
        </div>
      ),
    },
    {
      name: "INSIJAM",
      render: () => (
        <div className="flex items-center gap-2.5 select-none">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
          >
            <rect
              x="6"
              y="6"
              width="12"
              height="12"
              rx="2"
              transform="rotate(45 12 12)"
            />
          </svg>
          <span className="font-serif font-medium text-white text-xl tracking-[0.2em]">
            INSIJAM
          </span>
        </div>
      ),
    },
  ];

  const row2Brands = [
    {
      name: "OLX",
      render: () => (
        <div className="font-sans font-black text-white text-4xl tracking-tighter select-none">
          olx
        </div>
      ),
    },
    {
      name: "INDIA TODAY",
      render: () => (
        <div className="text-center font-serif font-bold text-white text-xl sm:text-2xl tracking-widest leading-tight select-none">
          INDIA
          <br />
          TODAY
        </div>
      ),
    },
    {
      name: "Business Today",
      render: () => (
        <span className="font-serif font-bold text-white text-xl sm:text-2xl tracking-tight select-none">
          Business Today
        </span>
      ),
    },
    {
      name: "COSMOPOLITAN",
      render: () => (
        <div className="font-serif font-bold text-white text-lg sm:text-xl tracking-[0.25em] select-none">
          COSMOPOLITAN
        </div>
      ),
    },
    {
      name: "Zenith Techlabs",
      render: () => (
        <div className="font-sans font-bold text-white text-lg sm:text-xl tracking-tight select-none">
          Zenith Techlabs
        </div>
      ),
    },
    {
      name: "Designit",
      render: () => (
        <div className="text-center font-sans font-bold text-white text-2xl tracking-tight select-none">
          Designit
          <span className="block text-[11px] font-normal text-zinc-400 -mt-1 tracking-wider">
            a wipro company
          </span>
        </div>
      ),
    },
  ];

  const row1Repeated = [...row1Brands, ...row1Brands, ...row1Brands];
  const row2Repeated = [...row2Brands, ...row2Brands, ...row2Brands];

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#08080a] py-16 sm:py-24 border-t border-zinc-900/60 overflow-hidden relative"
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
                key={idx}
                className="w-[180px] h-[140px] sm:w-[240px] sm:h-[170px] bg-[#141417] hover:bg-[#1a1a1e] border border-zinc-800/80 rounded-2xl flex flex-col items-center justify-center p-6 shrink-0 transition-colors shadow-lg"
              >
                {brand.render()}
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
                key={idx}
                className="w-[180px] h-[140px] sm:w-[240px] sm:h-[170px] bg-[#141417] hover:bg-[#1a1a1e] border border-zinc-800/80 rounded-2xl flex flex-col items-center justify-center p-6 shrink-0 transition-colors shadow-lg"
              >
                {brand.render()}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
