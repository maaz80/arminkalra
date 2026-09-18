"use client";

import React, { useState, useEffect } from "react";

const defaultExperiences = [
  {
    _id: "default-1",
    company: "Designit - a Wipro Company",
    role: "Principal Experience Designer",
    location: "Bengaluru, India",
    period: "2022 - Present",
  },
  {
    _id: "default-2",
    company: "YesBank Ltd",
    role: "Sr. Lead UI UX Designer (Vice President)",
    location: "Gurugram, India",
    period: "2019 - 2022",
  },
  {
    _id: "default-3",
    company: "Etisalat",
    role: "UI UX Expert",
    location: "Dubai, UAE",
    period: "2017 - 2019",
  },
  {
    _id: "default-4",
    company: "Gadgets360, NDTV",
    role: "Sr. UI UX Designer",
    location: "New Delhi, India",
    period: "2015 - 2017",
  },
  {
    _id: "default-5",
    company: "OLX",
    role: "Sr. Digital Designer",
    location: "Gurugram, India",
    period: "2014 - 2015",
  },
];

const defaultHeader = {
  sectionTitle: "Resume",
  description:
    "My extensive background includes successful collaborations across various industries, addressing unique challenges and delivering designs aligned with customer needs and business goals.",
  experienceLabel: "Professional Experiences",
  downloadText: "download resume",
  downloadLink: "#download-resume",
};

export default function Resume() {
  const [header, setHeader] = useState(defaultHeader);
  const [experiences, setExperiences] = useState(defaultExperiences);

  useEffect(() => {
    const rawUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000/api").trim();
    const cleanUrl = rawUrl.replace(/\/+$/, "");
    const backendUrl = cleanUrl.endsWith("/api") ? cleanUrl : `${cleanUrl}/api`;

    fetch(`${backendUrl}/resume`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.data) {
          if (data.data.header) {
            setHeader((prev) => ({ ...prev, ...data.data.header }));
          }
          if (
            Array.isArray(data.data.experiences) &&
            data.data.experiences.length > 0
          ) {
            setExperiences(data.data.experiences);
          }
        }
      })
      .catch((err) => {
        console.error("Failed to fetch dynamic resume section data:", err);
      });
  }, []);

  const handleDownload = async (e) => {
    e.preventDefault();
    let linkUrl = header.downloadLink || "#download-resume";
    
    if (linkUrl === "#download-resume" || !linkUrl.startsWith("http")) {
      linkUrl = "/Latest CV 02-03-26.pdf";
    }

    try {
      // Fetch the file directly from Cloudinary as a blob to force download
      const response = await fetch(linkUrl);
      if (!response.ok) throw new Error("Network response was not ok");
      
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = blobUrl;
      
      // Determine filename
      let filename = "Resume.pdf";
      if (linkUrl.includes("cloudinary.com")) {
        const parts = linkUrl.split("/");
        const lastPart = parts[parts.length - 1];
        if (lastPart && lastPart.toLowerCase().endsWith(".pdf")) {
          filename = decodeURIComponent(lastPart);
        }
      }
      
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      
      // Cleanup
      document.body.removeChild(a);
      setTimeout(() => window.URL.revokeObjectURL(blobUrl), 1000);
    } catch (err) {
      console.error("Blob download failed, opening in new tab as fallback:", err);
      // Fallback: just open in new tab
      window.open(linkUrl, "_blank");
    }
  };

  return (
    <section className="w-full bg-background text-white pt-12 pb-0 sm:py-24 border-none md:border-t border-zinc-900/60 font-sans">
      <div className="section-wrapper">
        {/* Header Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start mb-8 sm:mb-12">
          <div className="md:col-span-3">
            <h2 className="heading-secondary font-serif font-semibold text-3xl sm:text-4xl md:text-5xl text-white">
              {header.sectionTitle || "Resume"}
            </h2>
          </div>

          <div className="md:col-span-9">
            <p className="text-[#e3e3e3] text-[18px] sm:text-[23px] font-sans font-normal leading-[1.6] max-w-4xl">
              {header.description}
            </p>
          </div>
        </div>

        {/* Experience List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start pt-4">
          {/* Left Column Label */}
          <div className="md:col-span-3">
            <span className="text-zinc-400 font-sans font-normal text-[16px] block">
              {header.experienceLabel || "Professional Experiences"}
            </span>
          </div>

          <div className="md:col-span-9 space-y-5">
            {experiences.map((exp, idx) => (
              <div
                key={exp._id || idx}
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
            {header.downloadText && (
              <div className="pt-2">
                <a
                  href="#"
                  onClick={handleDownload}
                  className="inline-flex items-center gap-2 text-[#ff5252] hover:text-[#ff3d00] transition-colors font-sans font-semibold text-[16px] group cursor-pointer"
                >
                  <span>{header.downloadText}</span>
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
