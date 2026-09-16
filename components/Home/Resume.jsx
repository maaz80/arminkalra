"use client";

import React from "react";

export default function Resume() {
  const experiences = [
    {
      company: "Designit - a Wipro Company",
      role: "Principal Experience Designer",
      location: "Bengaluru, India",
      period: "2022 - Present",
    },
    {
      company: "YesBank Ltd",
      role: "Sr. Lead UI UX Designer (Vice President)",
      location: "Gurugram, India",
      period: "2019 - 2022",
    },
    {
      company: "Etisalat",
      role: "UI UX Expert",
      location: "Dubai, UAE",
      period: "2017 - 2019",
    },
    {
      company: "Gadgets360, NDTV",
      role: "Sr. UI UX Designer",
      location: "New Delhi, India",
      period: "2015 - 2017",
    },
    {
      company: "OLX",
      role: "Sr. Digital Designer",
      location: "Gurugram, India",
      period: "2014 - 2015",
    },
  ];

  return (
    <section className="w-full bg-[#08080a] text-white py-16 sm:py-24 border-t border-zinc-900/60 font-sans">
      <div className="section-wrapper">
        {/* Header Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start mb-8 sm:mb-12">
          <div className="md:col-span-3">
            <h2 className="heading-secondary font-serif font-semibold text-3xl sm:text-4xl md:text-5xl text-white">
              Resume
            </h2>
          </div>

          <div className="md:col-span-9">
            <p className="text-[#e3e3e3] text-[18px] sm:text-[23px] font-sans font-normal leading-[1.6] max-w-4xl">
              My extensive background includes successful collaborations across various industries, addressing unique challenges and delivering designs aligned with customer needs and business goals.
            </p>
          </div>
        </div>

        {/* Experience List Grid with 16px font size & tighter vertical gap */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start pt-4">
          {/* Left Column Label (16px) */}
          <div className="md:col-span-3">
            <span className="text-zinc-400 font-sans font-normal text-[16px] block">
              Professional Experiences
            </span>
          </div>

          {/* Right Column Timeline (16px and compact vertical spacing) */}
          <div className="md:col-span-9 space-y-5">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-4 pb-4 border-b border-zinc-900/40 last:border-0"
              >
                <div className="space-y-0.5">
                  <h3 className="text-white font-sans font-semibold text-[16px] leading-tight">
                    {exp.company}
                  </h3>
                  <p className="text-zinc-400 font-sans text-[16px] leading-tight">
                    {exp.role}
                  </p>
                </div>
                <div className="text-left sm:text-right space-y-0.5">
                  <p className="text-zinc-400 font-sans text-[16px] leading-tight">
                    {exp.location}
                  </p>
                  <p className="text-zinc-400 font-sans text-[16px] leading-tight">
                    {exp.period}
                  </p>
                </div>
              </div>
            ))}

            {/* Download Resume Link */}
            <div className="pt-2">
              <a
                href="#download-resume"
                className="inline-flex items-center gap-2 text-[#ff5252] hover:text-[#ff3d00] transition-colors font-sans font-semibold text-[16px] group"
              >
                <span>download resume</span>
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
        </div>
      </div>
    </section>
  );
}
