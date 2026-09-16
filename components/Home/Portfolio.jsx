"use client";

import React from "react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";

export default function Portfolio() {
  return (
    <section className="w-full bg-[#08080a] text-white py-16 sm:py-24 relative overflow-hidden font-sans border-t border-zinc-900/60">
      {/* Background Watermark Text */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full select-none pointer-events-none opacity-5 text-center">
        <span className="font-serif font-bold text-[120px] sm:text-[200px] md:text-[280px] leading-none text-transparent stroke-text uppercase tracking-widest">
          Portfolio
        </span>
      </div>

      <div className="section-wrapper relative z-10">
        {/* Header Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start mb-16 sm:mb-20">
          <div className="md:col-span-3">
            <h2 className="heading-secondary font-serif font-semibold text-3xl sm:text-4xl md:text-5xl text-white">
              Portfolio
            </h2>
          </div>

          <div className="md:col-span-9">
            <p className="text-[#e3e3e3] text-[18px] sm:text-[23px] font-sans font-normal leading-[1.6] max-w-4xl">
              I closely collaborate with stakeholders and interact with users to deliver tailored solutions addressing specific pain points. My focus revolves around the essentials of UI/UX design: instincts, innovation, and intuitive interfaces—the bear necessities for exceptional user experiences.
            </p>
          </div>
        </div>

        {/* Project Cards List */}
        <div className="space-y-12 sm:space-y-16">
          {/* Card 1: Banking (Genie) */}
          <div className="hover:bg-[#121215] border-4 border-transparent hover:border-zinc-800/90 rounded-2xl sm:rounded-3xl p-0 sm:p-10 lg:p-12 shadow-2xl transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Side: Image */}
              <div className="lg:col-span-6 relative flex items-center justify-center p-2 sm:p-4">
                <Image
                  src="/images/bank-image.webp"
                  alt="Genie Banking Dashboard UI Mockup"
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain rounded-xl drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Right Side: Details */}
              <div className="lg:col-span-6 space-y-6">
                <span className="text-zinc-400 font-sans font-medium text-sm sm:text-base tracking-wide block">
                  Banking
                </span>

                <h3 className="text-white font-sans font-semibold text-2xl sm:text-3xl md:text-[27px] leading-snug">
                  Transforming “Genie” into a User-Centric Hub: digitised services, accessible, usable, and efficient
                </h3>

                {/* Heart Counter */}
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#ff4d4d] flex items-center justify-center text-white text-xs shadow-md">
                    <FaHeart />
                  </div>
                  <span className="text-zinc-300 font-sans font-medium text-sm">6</span>
                </div>

                {/* Skill Tags Box */}
                <div className="bg-[#18181c] border border-zinc-800/80 rounded-xl p-4 sm:p-5">
                  <div className="flex flex-wrap gap-2.5">
                    <span className="border border-zinc-700 bg-zinc-900/60 text-zinc-300 text-xs sm:text-sm px-3.5 py-1.5 rounded-md font-sans">
                      Heuristic Evaluation
                    </span>
                    <span className="border border-zinc-700 bg-zinc-900/60 text-zinc-300 text-xs sm:text-sm px-3.5 py-1.5 rounded-md font-sans">
                      Prototype
                    </span>
                    <span className="border border-zinc-700 bg-zinc-900/60 text-zinc-300 text-xs sm:text-sm px-3.5 py-1.5 rounded-md font-sans">
                      Usability Testing
                    </span>
                    <span className="border border-zinc-700 bg-zinc-900/60 text-zinc-300 text-xs sm:text-sm px-3.5 py-1.5 rounded-md font-sans">
                      User Interviews
                    </span>
                    <span className="border border-zinc-700 bg-zinc-900/60 text-zinc-300 text-xs sm:text-sm px-3.5 py-1.5 rounded-md font-sans">
                      User Research
                    </span>
                    <span className="border border-zinc-700 bg-zinc-900/60 text-zinc-300 text-xs sm:text-sm px-3.5 py-1.5 rounded-md font-sans">
                      Wire-framing
                    </span>
                  </div>
                </div>

                {/* CTA Link */}
                <div className="pt-2">
                  <a
                    href="#project-genie"
                    className="inline-flex items-center gap-2 text-white hover:text-zinc-300 transition-colors font-sans font-semibold text-base sm:text-lg group"
                  >
                    <span>View Project</span>
                    <svg
                      width="20"
                      height="20"
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
            </div>
          </div>

          {/* Card 2: Finance (Personal Finance Management) */}
          <div className="hover:bg-[#121215] border-4 border-transparent hover:border-zinc-800/90 rounded-2xl sm:rounded-3xl p-0 sm:p-10 lg:p-12 shadow-2xl transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Side: Details */}
              <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
                <span className="text-zinc-400 font-sans font-medium text-sm sm:text-base tracking-wide block">
                  Finance
                </span>

                <h3 className="text-white font-sans font-semibold text-2xl sm:text-3xl md:text-[27px] leading-snug">
                  Money Matters Made Simple: A UI/UX Case Study on “Personal Finance Management”
                </h3>

                {/* Heart Counter */}
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#ff4d4d] flex items-center justify-center text-white text-xs shadow-md">
                    <FaHeart />
                  </div>
                  <span className="text-zinc-300 font-sans font-medium text-sm">6</span>
                </div>

                {/* Skill Tags Box */}
                <div className="bg-[#18181c] border border-zinc-800/80 rounded-xl p-4 sm:p-5">
                  <div className="flex flex-wrap gap-2.5">
                    <span className="border border-zinc-700 bg-zinc-900/60 text-zinc-300 text-xs sm:text-sm px-3.5 py-1.5 rounded-md font-sans">
                      Affinity Diagram
                    </span>
                    <span className="border border-zinc-700 bg-zinc-900/60 text-zinc-300 text-xs sm:text-sm px-3.5 py-1.5 rounded-md font-sans">
                      Heuristic Evaluation
                    </span>
                    <span className="border border-zinc-700 bg-zinc-900/60 text-zinc-300 text-xs sm:text-sm px-3.5 py-1.5 rounded-md font-sans">
                      Prototype
                    </span>
                    <span className="border border-zinc-700 bg-zinc-900/60 text-zinc-300 text-xs sm:text-sm px-3.5 py-1.5 rounded-md font-sans">
                      Survey - Quantitative & Qualitative Survey
                    </span>
                    <span className="border border-zinc-700 bg-zinc-900/60 text-zinc-300 text-xs sm:text-sm px-3.5 py-1.5 rounded-md font-sans">
                      Usability Testing
                    </span>
                    <span className="border border-zinc-700 bg-zinc-900/60 text-zinc-300 text-xs sm:text-sm px-3.5 py-1.5 rounded-md font-sans">
                      User Interviews
                    </span>
                    <span className="border border-zinc-700 bg-zinc-900/60 text-zinc-300 text-xs sm:text-sm px-3.5 py-1.5 rounded-md font-sans">
                      User Research
                    </span>
                    <span className="border border-zinc-700 bg-zinc-900/60 text-zinc-300 text-xs sm:text-sm px-3.5 py-1.5 rounded-md font-sans">
                      Wire-framing
                    </span>
                  </div>
                </div>

                {/* CTA Link */}
                <div className="pt-2">
                  <a
                    href="#project-finance"
                    className="inline-flex items-center gap-2 text-[#ff5252] hover:text-[#ff3d00] transition-colors font-sans font-semibold text-base sm:text-lg group"
                  >
                    <span>view project</span>
                    <svg
                      width="20"
                      height="20"
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

              {/* Right Side: Image */}
              <div className="lg:col-span-6 relative flex items-center justify-center p-2 sm:p-4 order-1 lg:order-2">
                <Image
                  src="/images/finance-image.webp"
                  alt="Personal Finance Management UI/UX Case Study"
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain rounded-xl drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Card 3: Wellbeing (Insijam) */}
          <div className="hover:bg-[#121215] border-4 border-transparent hover:border-zinc-800/90 rounded-2xl sm:rounded-3xl p-0 sm:p-10 lg:p-12 shadow-2xl transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Side: Image */}
              <div className="lg:col-span-6 relative flex items-center justify-center p-2 sm:p-4">
                <Image
                  src="/images/wellbeing-image.webp"
                  alt="Insijam UI/UX Narrative Case Study"
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain rounded-xl drop-shadow-2xl"
                />
              </div>

              {/* Right Side: Details */}
              <div className="lg:col-span-6 space-y-6">
                <span className="text-zinc-400 font-sans font-medium text-sm sm:text-base tracking-wide block">
                  Wellbeing
                </span>

                <h3 className="text-white font-sans font-semibold text-2xl sm:text-3xl md:text-[27px] leading-snug">
                  Insijam: The Canvas of Empowerment “A UI/UX Narrative of Insijam’s Journey”
                </h3>

                {/* Heart Counter */}
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#ff4d4d] flex items-center justify-center text-white text-xs shadow-md">
                    <FaHeart />
                  </div>
                  <span className="text-zinc-300 font-sans font-medium text-sm">4</span>
                </div>

                {/* Skill Tags Box */}
                <div className="bg-[#18181c] border border-zinc-800/80 rounded-xl p-4 sm:p-5">
                  <div className="flex flex-wrap gap-2.5">
                    <span className="border border-zinc-700 bg-zinc-900/60 text-zinc-300 text-xs sm:text-sm px-3.5 py-1.5 rounded-md font-sans">
                      Heuristic Evaluation
                    </span>
                    <span className="border border-zinc-700 bg-zinc-900/60 text-zinc-300 text-xs sm:text-sm px-3.5 py-1.5 rounded-md font-sans">
                      Prototype
                    </span>
                    <span className="border border-zinc-700 bg-zinc-900/60 text-zinc-300 text-xs sm:text-sm px-3.5 py-1.5 rounded-md font-sans">
                      Target Audience
                    </span>
                    <span className="border border-zinc-700 bg-zinc-900/60 text-zinc-300 text-xs sm:text-sm px-3.5 py-1.5 rounded-md font-sans">
                      Usability Testing
                    </span>
                    <span className="border border-zinc-700 bg-zinc-900/60 text-zinc-300 text-xs sm:text-sm px-3.5 py-1.5 rounded-md font-sans">
                      User Interviews
                    </span>
                    <span className="border border-zinc-700 bg-zinc-900/60 text-zinc-300 text-xs sm:text-sm px-3.5 py-1.5 rounded-md font-sans">
                      User Research
                    </span>
                    <span className="border border-zinc-700 bg-zinc-900/60 text-zinc-300 text-xs sm:text-sm px-3.5 py-1.5 rounded-md font-sans">
                      Wire-framing
                    </span>
                  </div>
                </div>

                {/* CTA Link */}
                <div className="pt-2">
                  <a
                    href="#project-insijam"
                    className="inline-flex items-center gap-2 text-white hover:text-zinc-300 transition-colors font-sans font-semibold text-base sm:text-lg group"
                  >
                    <span>View Project</span>
                    <svg
                      width="20"
                      height="20"
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
            </div>
          </div>

          {/* Card 4: Wellbeing (BMCR) */}
          <div className="hover:bg-[#121215] border-4 border-transparent hover:border-zinc-800/90 rounded-2xl sm:rounded-3xl p-0 sm:p-10 lg:p-12 shadow-2xl transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Side: Details */}
              <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
                <span className="text-zinc-400 font-sans font-medium text-sm sm:text-base tracking-wide block">
                  Wellbeing
                </span>

                <h3 className="text-white font-sans font-semibold text-2xl sm:text-3xl md:text-[27px] leading-snug">
                  Design Thinking & Innovation – Burn, Maintain, Care, Restore: A Journey Towards Holistic Well-being
                </h3>

                {/* Heart Counter */}
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#ff4d4d] flex items-center justify-center text-white text-xs shadow-md">
                    <FaHeart />
                  </div>
                  <span className="text-zinc-300 font-sans font-medium text-sm">3</span>
                </div>

                {/* Skill Tags Box */}
                <div className="bg-[#18181c] border border-zinc-800/80 rounded-xl p-4 sm:p-5">
                  <div className="flex flex-wrap gap-2.5">
                    <span className="border border-zinc-700 bg-zinc-900/60 text-zinc-300 text-xs sm:text-sm px-3.5 py-1.5 rounded-md font-sans">
                      Customer Journey MAP
                    </span>
                    <span className="border border-zinc-700 bg-zinc-900/60 text-zinc-300 text-xs sm:text-sm px-3.5 py-1.5 rounded-md font-sans">
                      Prototype
                    </span>
                    <span className="border border-zinc-700 bg-zinc-900/60 text-zinc-300 text-xs sm:text-sm px-3.5 py-1.5 rounded-md font-sans">
                      User Research
                    </span>
                    <span className="border border-zinc-700 bg-zinc-900/60 text-zinc-300 text-xs sm:text-sm px-3.5 py-1.5 rounded-md font-sans">
                      Visual Design
                    </span>
                  </div>
                </div>

                {/* CTA Link */}
                <div className="pt-2">
                  <a
                    href="#project-bmcr"
                    className="inline-flex items-center gap-2 text-[#ff5252] hover:text-[#ff3d00] transition-colors font-sans font-semibold text-base sm:text-lg group"
                  >
                    <span>view project</span>
                    <svg
                      width="20"
                      height="20"
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

              {/* Right Side: Image */}
              <div className="lg:col-span-6 relative flex items-center justify-center p-2 sm:p-4 order-1 lg:order-2">
                <Image
                  src="/images/wellbeing2-image.webp"
                  alt="Design Thinking & Innovation - BMCR"
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain rounded-xl drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Big Button at end of Portfolio (image-8.png) */}
        <div className="mt-12 sm:mt-16 w-full">
          <button
            type="button"
            className="w-full bg-[#0d0d10] hover:bg-[#15151a] border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white font-sans font-medium text-sm sm:text-base tracking-wide py-5 sm:py-6 rounded-xl sm:rounded-2xl transition-all duration-300 select-none shadow-lg text-center cursor-pointer"
          >
            view all projects
          </button>
        </div>
      </div>
    </section>
  );
}
