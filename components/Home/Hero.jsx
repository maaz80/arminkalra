"use client";

import React from "react";

// Cursor Arrow SVG Component with white border stroke and horizontal flip option
function CursorArrow({ color, flip = false }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill={color}
      stroke="#ffffff"
      strokeWidth="1.5"
      strokeLinejoin="round"
      strokeLinecap="round"
      className={`drop-shadow-md shrink-0 ${flip ? "scale-x-[-1]" : ""}`}
    >
      <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <div className="min-h-screen bg-[#08080a] text-white flex flex-col justify-between overflow-x-hidden font-serif selection:bg-white/20">
      {/* Navbar */}
      <header className="w-full flex items-center justify-between px-6 sm:px-12 py-6 z-20">
        <div className="text-white font-bold text-xl sm:text-2xl tracking-wide select-none font-sans">
          ਅਮ੍ਰਿਨਕਾਲਰਾ
        </div>
        <button
          aria-label="Toggle Navigation Menu"
          className="text-white hover:text-zinc-300 transition-colors p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-8 pt-8 sm:pt-6 max-w-6xl mx-auto w-full">
        {/* Main Heading */}
        <h1 className="text-center font-serif font-semibold text-[30px] min-[400px]:text-[36px] sm:text-[48px] md:text-[62px] leading-10 min-[400px]:leading-12 sm:leading-15.5 md:leading-20 tracking-tight text-white max-w-5xl select-none py-4">
          {/* Line 1 */}
          <span className="block">
            Principal{" "}
            <span className="relative inline-block border-b-[2.5px] border-[#00c853] pb-0.5">
              Experience
              {/* Green Badge: User Experience Audit */}
              <span className="absolute -bottom-10 right-0 sm:-bottom-2 sm:-right-24 flex items-center gap-1.5 z-10 pointer-events-none animate-float-cw-1">
                <CursorArrow color="#00c853" />
                <span className="bg-[#00c853] text-white font-sans font-medium text-[12px] leading-9 tracking-wide px-3.5 rounded-full shadow-md whitespace-nowrap">
                  User Experience Audit
                </span>
              </span>
            </span>
          </span>

          {/* Line 2 */}
          <span className="block mt-1 sm:mt-2">
            Designer, rooted in Design
          </span>

          {/* Line 3 */}
          <span className="block mt-1 sm:mt-2">
            <span className="relative inline-block border-b-[2.5px] border-[#f59e0b] pb-0.5">
              Thinking
              {/* Yellow Badge (Left side): Wireframing - Arrow on Top-Right & Flipped Right */}
              <span className="absolute -bottom-10 -left-4 sm:-bottom-12 sm:-left-12 flex items-start z-10 pointer-events-none animate-float-ccw-1">
                <span className="bg-[#f59e0b] text-white font-sans font-medium text-[12px] leading-9 tracking-wide px-3.5 rounded-full shadow-md whitespace-nowrap">
                  Wireframing
                </span>
                <div className="-mt-3 -ml-1">
                  <CursorArrow color="#f59e0b" flip={true} />
                </div>
              </span>
            </span>{" "}
            and a{" "}
            <span className="relative inline-block border-b-[2.5px] border-[#ff3d00] pb-0.5">
              passion
              {/* Red Badge: Visual Design */}
              <span className="absolute -bottom-10 -right-8 sm:bottom-0 sm:-right-20 flex items-center gap-1.5 z-10 pointer-events-none animate-float-cw-2">
                <CursorArrow color="#ff3d00" />
                <span className="bg-[#ff3d00] text-white font-sans font-medium text-[12px] leading-9 tracking-wide px-3.5 rounded-full shadow-md whitespace-nowrap">
                  Visual Design
                </span>
              </span>
            </span>{" "}
            for
          </span>

          {/* Line 4 */}
          <span className="block mt-1 sm:mt-2">
            <span className="relative inline-block border-b-[2.5px] border-[#ec4899] pb-0.5">
              User-Centric
              {/* Pink Badge (Left side): User Research - Arrow on Top-Right & Flipped Right */}
              <span className="absolute -bottom-11 -left-6 sm:-bottom-13 sm:-left-16 flex items-start z-10 pointer-events-none animate-float-ccw-2">
                <span className="bg-[#ec4899] text-white font-sans font-medium text-[12px] leading-9 tracking-wide px-3.5 rounded-full shadow-md whitespace-nowrap">
                  User Research
                </span>
                <div className="-mt-3 -ml-1">
                  <CursorArrow color="#ec4899" flip={true} />
                </div>
              </span>
            </span>{" "}
            <span className="relative inline-block border-b-[2.5px] border-[#8b5cf6] pb-0.5">
              Solutions
              {/* Purple Badge: Prototype */}
              <span className="absolute -bottom-10 -right-4 sm:-bottom-2 sm:-right-10 flex items-center gap-1.5 z-10 pointer-events-none animate-float-cw-3">
                <CursorArrow color="#8b5cf6" />
                <span className="bg-[#8b5cf6] text-white font-sans font-medium text-[12px] leading-9 tracking-wide px-3.5 rounded-full shadow-md whitespace-nowrap">
                  Prototype
                </span>
              </span>
            </span>
          </span>
        </h1>

        {/* Subtitle Pill Container */}
        <div className="w-full max-w-212.5 mt-14 sm:mt-16 mb-8 relative">
          <div className="bg-[#18181b] border border-zinc-800 rounded-full px-5 py-3.5 sm:px-3 sm:py-4.5 text-center shadow-xl">
            <p className="text-zinc-200 text-xs sm:text-base font-sans font-normal tracking-wide leading-relaxed">
              Armin Kalra, crafting equitable and enjoyable user experiences, where usability meets delight.
            </p>
          </div>
          {/* Blue Badge: Design System */}
          <div className="absolute -bottom-9 right-2 sm:bottom-0 sm:right-6 flex items-center gap-1.5 z-10 pointer-events-none animate-float-ccw-3">
            <CursorArrow color="#0070f3" />
            <span className="bg-[#0070f3] text-white font-sans font-medium text-[12px] leading-9 tracking-wide px-3.5 rounded-full shadow-md whitespace-nowrap">
              Design System
            </span>
          </div>
        </div>
      </main>

      {/* Footer Location Bar using Poppins font & 16px size */}
      <footer className="w-full pb-6 sm:pb-8 px-4 flex flex-wrap items-center justify-center gap-2.5 sm:gap-6 text-[16px] text-zinc-300 font-sans font-medium tracking-wide">
        <span>New Delhi</span>
        <span className="text-zinc-600 select-none">•</span>
        <span>London</span>
        <span className="text-zinc-600 select-none">•</span>
        <span>Dubai</span>
        <span className="text-zinc-600 select-none">•</span>
        <span>Bengaluru</span>
        <span className="text-zinc-600 select-none">•</span>
        <span>Switzerland</span>
        <span className="text-zinc-600 select-none">•</span>
        <span>Kuwait</span>
      </footer>
    </div>
  );
}
