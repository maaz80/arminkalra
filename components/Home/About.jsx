"use client";

import React from "react";

export default function About() {
  return (
    <section className="w-full bg-[#08080a] text-white py-16 sm:py-24 border-t border-zinc-900/60 font-sans">
      <div className="section-wrapper">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Left Column: Heading */}
          <div className="md:col-span-3">
            <h2 className="heading-secondary font-serif font-semibold text-3xl sm:text-4xl md:text-5xl text-white">
              About
            </h2>
          </div>

          {/* Right Column: Main Text & Details */}
          <div className="md:col-span-9 space-y-12">
            {/* Primary Paragraph & CTA */}
            <div className="space-y-6 max-w-4xl">
              <p className="text-[#e3e3e3] text-[18px] sm:text-[23px] font-sans font-normal leading-[1.6] tracking-normal">
                I’m currently working as Principal Experience Designer @Designit - a Wipro Company, Bangalore, with 12 years of experience in sectors including Telecom, Banking, Media, E-commerce, and Healthcare. With a fervent commitment to Design Thinking and a User-Centric approach.
              </p>

              <div>
                <a
                  href="#about"
                  className="inline-flex items-center gap-2 text-[#ff5252] hover:text-[#ff3d00] transition-colors font-sans font-medium text-base tracking-wide group"
                >
                  <span>About me</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transform group-hover:translate-x-1 transition-transform"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Secondary Paragraphs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="hidden md:block"></div>

              <div className="space-y-6 max-w-md text-[#e3e3e3]/80 text-sm sm:text-base font-sans leading-relaxed">
                <p>
                  Over the past 12 years, I have the privilege of collaborating with great global brands like Cynergy Bank, YesBank, Etisalat, OLX, NDTV, V&A Museum and many more.
                </p>
                <p>
                  My collaborative approach and passion for crafting exceptional user experiences make me a valuable asset to any project or team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
