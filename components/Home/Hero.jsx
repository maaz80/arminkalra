"use client";

import React, { useState, useEffect } from "react";

// Cursor Arrow SVG Component with white border stroke and horizontal flip option
function CursorArrow({ color, flip = false }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill={color || "currentColor"}
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

const defaultHeroData = {
  logoUrl: "/images/logo.webp",
  logoAlt: "Pyush Anand Logo",
  titleLine1Prefix: "Principal",
  highlight1Text: "Experience",
  highlight1Color: "#00c853",
  badge1Text: "User Experience Audit",
  badge1Color: "#00c853",
  titleLine2: "Designer, rooted in Design",
  highlight2Text: "Thinking",
  highlight2Color: "#f59e0b",
  badge2Text: "Wireframing",
  badge2Color: "#f59e0b",
  titleLine3Middle: "and a",
  highlight3Text: "passion",
  highlight3Color: "#ff3d00",
  badge3Text: "Visual Design",
  badge3Color: "#ff3d00",
  titleLine3Suffix: "for",
  highlight4Text: "User-Centric",
  highlight4Color: "#ec4899",
  badge4Text: "User Research",
  badge4Color: "#ec4899",
  highlight5Text: "Solutions",
  highlight5Color: "#8b5cf6",
  badge5Text: "Prototype",
  badge5Color: "#8b5cf6",
  subtitle:
    "Pyush Anand, crafting equitable and enjoyable user experiences, where usability meets delight.",
  badge6Text: "Design System",
  badge6Color: "#0070f3",
  locations: ["Delhi", "Gurgaon", "Dubai", "UK", "US", "Noida"],
};

export default function Hero() {
  const [heroData, setHeroData] = useState(defaultHeroData);

  useEffect(() => {
    const rawUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000/api").trim();
    const cleanUrl = rawUrl.replace(/\/+$/, "");
    const backendUrl = cleanUrl.endsWith("/api") ? cleanUrl : `${cleanUrl}/api`;

    fetch(`${backendUrl}/hero`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.data) {
          setHeroData((prev) => ({
            ...prev,
            ...data.data,
            locations: data.data.locations || prev.locations,
          }));
        }
      })
      .catch((err) => {
        console.error("Failed to fetch dynamic hero section data:", err);
      });
  }, []);

  return (
    <div className="min-h-screen bg-background text-white flex flex-col justify-between overflow-x-hidden font-serif selection:bg-white/20">
      {/* Navbar */}
      <header className="w-full flex items-center justify-between px-6 sm:px-12 py-6 z-20">
        <img
          src={heroData.logoUrl || "/images/logo.webp"}
          alt={heroData.logoAlt || "Logo"}
          width={35}
          height={35}
          className="h-9 w-auto object-contain"
        />
        <button
          aria-label="Toggle Navigation Menu"
          className="text-white hover:text-zinc-300 transition-colors p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 opacity-0"
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
            {heroData.titleLine1Prefix}{" "}
            <span
              className="relative inline-block border-b-[2.5px] pb-0.5"
              style={{ borderColor: heroData.highlight1Color || "#00c853" }}
            >
              {heroData.highlight1Text}
              {/* Green Badge: User Experience Audit */}
              <span className="absolute -bottom-10 right-0 sm:-bottom-2 sm:-right-24 flex items-center gap-1.5 z-10 pointer-events-none animate-float-cw-1">
                <CursorArrow color={heroData.badge1Color || heroData.highlight1Color || "#00c853"} />
                <span
                  style={{ backgroundColor: heroData.badge1Color || heroData.highlight1Color || "#00c853" }}
                  className="text-white font-sans font-medium text-[12px] leading-9 tracking-wide px-3.5 rounded-full shadow-md whitespace-nowrap"
                >
                  {heroData.badge1Text}
                </span>
              </span>
            </span>
          </span>

          {/* Line 2 */}
          <span className="block mt-1 sm:mt-2">
            {heroData.titleLine2}
          </span>

          {/* Line 3 */}
          <span className="block mt-1 sm:mt-2">
            <span
              className="relative inline-block border-b-[2.5px] pb-0.5"
              style={{ borderColor: heroData.highlight2Color || "#f59e0b" }}
            >
              {heroData.highlight2Text}
              {/* Yellow Badge */}
              <span className="absolute -bottom-10 -left-4 sm:-bottom-12 sm:-left-12 flex items-start z-10 pointer-events-none animate-float-ccw-1">
                <span
                  style={{ backgroundColor: heroData.badge2Color || heroData.highlight2Color || "#f59e0b" }}
                  className="text-white font-sans font-medium text-[12px] leading-9 tracking-wide px-3.5 rounded-full shadow-md whitespace-nowrap"
                >
                  {heroData.badge2Text}
                </span>
                <div className="-mt-3 -ml-1">
                  <CursorArrow color={heroData.badge2Color || heroData.highlight2Color || "#f59e0b"} flip={true} />
                </div>
              </span>
            </span>{" "}
            {heroData.titleLine3Middle}{" "}
            <span
              className="relative inline-block border-b-[2.5px] pb-0.5"
              style={{ borderColor: heroData.highlight3Color || "#ff3d00" }}
            >
              {heroData.highlight3Text}
              {/* Red Badge */}
              <span className="absolute -bottom-10 -right-8 sm:bottom-0 sm:-right-20 flex items-center gap-1.5 z-10 pointer-events-none animate-float-cw-2">
                <CursorArrow color={heroData.badge3Color || heroData.highlight3Color || "#ff3d00"} />
                <span
                  style={{ backgroundColor: heroData.badge3Color || heroData.highlight3Color || "#ff3d00" }}
                  className="text-white font-sans font-medium text-[12px] leading-9 tracking-wide px-3.5 rounded-full shadow-md whitespace-nowrap"
                >
                  {heroData.badge3Text}
                </span>
              </span>
            </span>{" "}
            {heroData.titleLine3Suffix}
          </span>

          {/* Line 4 */}
          <span className="block mt-1 sm:mt-2">
            <span
              className="relative inline-block border-b-[2.5px] pb-0.5"
              style={{ borderColor: heroData.highlight4Color || "#ec4899" }}
            >
              {heroData.highlight4Text}
              {/* Pink Badge */}
              <span className="absolute -bottom-11 -left-6 sm:-bottom-13 sm:-left-16 flex items-start z-10 pointer-events-none animate-float-ccw-2">
                <span
                  style={{ backgroundColor: heroData.badge4Color || heroData.highlight4Color || "#ec4899" }}
                  className="text-white font-sans font-medium text-[12px] leading-9 tracking-wide px-3.5 rounded-full shadow-md whitespace-nowrap"
                >
                  {heroData.badge4Text}
                </span>
                <div className="-mt-3 -ml-1">
                  <CursorArrow color={heroData.badge4Color || heroData.highlight4Color || "#ec4899"} flip={true} />
                </div>
              </span>
            </span>{" "}
            <span
              className="relative inline-block border-b-[2.5px] pb-0.5"
              style={{ borderColor: heroData.highlight5Color || "#8b5cf6" }}
            >
              {heroData.highlight5Text}
              {/* Purple Badge */}
              <span className="absolute -bottom-10 -right-4 sm:-bottom-2 sm:-right-10 flex items-center gap-1.5 z-10 pointer-events-none animate-float-cw-3">
                <CursorArrow color={heroData.badge5Color || heroData.highlight5Color || "#8b5cf6"} />
                <span
                  style={{ backgroundColor: heroData.badge5Color || heroData.highlight5Color || "#8b5cf6" }}
                  className="text-white font-sans font-medium text-[12px] leading-9 tracking-wide px-3.5 rounded-full shadow-md whitespace-nowrap"
                >
                  {heroData.badge5Text}
                </span>
              </span>
            </span>
          </span>
        </h1>

        {/* Subtitle Pill Container */}
        <div className="w-full max-w-212.5 mt-14 sm:mt-16 mb-8 relative">
          <div className="bg-white/20 border border-zinc-800 rounded-full px-5 py-3.5 sm:px-3 sm:py-4.5 text-center shadow-xl">
            <p className="text-zinc-200 text-xs sm:text-base font-sans font-normal tracking-wide leading-relaxed">
              {heroData.subtitle}
            </p>
          </div>
          {/* Subtitle Badge */}
          <div className="absolute -bottom-9 right-2 sm:bottom-0 sm:right-6 flex items-center gap-1.5 z-10 pointer-events-none animate-float-ccw-3">
            <CursorArrow color={heroData.badge6Color || "#0070f3"} />
            <span
              style={{ backgroundColor: heroData.badge6Color || "#0070f3" }}
              className="text-white font-sans font-medium text-[12px] leading-9 tracking-wide px-3.5 rounded-full shadow-md whitespace-nowrap"
            >
              {heroData.badge6Text}
            </span>
          </div>
        </div>
      </main>

      {/* Footer Location Bar */}
      <footer className="w-full pb-6 sm:pb-8 px-4 flex flex-wrap items-center justify-center gap-2.5 sm:gap-6 text-[16px] text-zinc-300 font-sans font-medium tracking-wide">
        {(heroData.locations || []).map((loc, idx) => (
          <React.Fragment key={idx}>
            <span>{loc}</span>
            {idx < (heroData.locations || []).length - 1 && (
              <span className="text-zinc-600 select-none">•</span>
            )}
          </React.Fragment>
        ))}
      </footer>
    </div>
  );
}
