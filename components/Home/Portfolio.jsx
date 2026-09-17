"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";

const defaultProjects = [
  {
    _id: "default-1",
    category: "Banking",
    title:
      "Transforming “Genie” into a User-Centric Hub: digitised services, accessible, usable, and efficient",
    image: "/images/bank-image.webp",
    imageAlt: "Genie Banking Dashboard UI Mockup",
    likes: 6,
    tags: [
      "Heuristic Evaluation",
      "Prototype",
      "Usability Testing",
      "User Interviews",
      "User Research",
      "Wire-framing",
    ],
    projectLink: "#project-genie",
    linkText: "View Project",
    imagePosition: "left",
  },
  {
    _id: "default-2",
    category: "Finance",
    title:
      "Money Matters Made Simple: A UI/UX Case Study on “Personal Finance Management”",
    image: "/images/finance-image.webp",
    imageAlt: "Personal Finance Management UI/UX Case Study",
    likes: 6,
    tags: [
      "Affinity Diagram",
      "Heuristic Evaluation",
      "Prototype",
      "Survey - Quantitative & Qualitative Survey",
      "Usability Testing",
      "User Interviews",
      "User Research",
      "Wire-framing",
    ],
    projectLink: "#project-finance",
    linkText: "view project",
    imagePosition: "right",
  },
  {
    _id: "default-3",
    category: "Wellbeing",
    title:
      "Insijam: The Canvas of Empowerment “A UI/UX Narrative of Insijam’s Journey”",
    image: "/images/wellbeing-image.webp",
    imageAlt: "Insijam UI/UX Narrative Case Study",
    likes: 4,
    tags: [
      "Heuristic Evaluation",
      "Prototype",
      "Target Audience",
      "Usability Testing",
      "User Interviews",
      "User Research",
      "Wire-framing",
    ],
    projectLink: "#project-insijam",
    linkText: "View Project",
    imagePosition: "left",
  },
  {
    _id: "default-4",
    category: "Wellbeing",
    title:
      "Design Thinking & Innovation – Burn, Maintain, Care, Restore: A Journey Towards Holistic Well-being",
    image: "/images/wellbeing2-image.webp",
    imageAlt: "Design Thinking & Innovation - BMCR",
    likes: 3,
    tags: [
      "Customer Journey MAP",
      "Prototype",
      "User Research",
      "Visual Design",
    ],
    projectLink: "#project-bmcr",
    linkText: "view project",
    imagePosition: "right",
  },
];

const defaultHeader = {
  sectionTitle: "Portfolio",
  watermarkText: "Portfolio",
  description:
    "I closely collaborate with stakeholders and interact with users to deliver tailored solutions addressing specific pain points. My focus revolves around the essentials of UI/UX design: instincts, innovation, and intuitive interfaces—the bear necessities for exceptional user experiences.",
  viewAllButtonText: "View all projects",
  viewAllButtonLink: "#",
};

export default function Portfolio() {
  const [header, setHeader] = useState(defaultHeader);
  const [projects, setProjects] = useState(defaultProjects);

  useEffect(() => {
    const backendUrl =
      process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000/api";

    fetch(`${backendUrl}/portfolio`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.data) {
          if (data.data.header) {
            setHeader((prev) => ({ ...prev, ...data.data.header }));
          }
          if (Array.isArray(data.data.projects) && data.data.projects.length > 0) {
            setProjects(data.data.projects);
          }
        }
      })
      .catch((err) => {
        console.error("Failed to fetch dynamic portfolio section data:", err);
      });
  }, []);

  return (
    <section className="w-full bg-background text-white py-16 sm:py-24 relative overflow-hidden font-sans border-t border-zinc-900/60">
      {/* Background Watermark Text */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full select-none pointer-events-none opacity-5 text-center">
        <span className="font-serif font-bold text-[120px] sm:text-[200px] md:text-[280px] leading-none text-transparent stroke-text uppercase tracking-widest">
          {header.watermarkText || "Portfolio"}
        </span>
      </div>

      <div className="section-wrapper relative z-10">
        {/* Header Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start mb-16 sm:mb-20">
          <div className="md:col-span-3">
            <h2 className="heading-secondary font-serif font-semibold text-3xl sm:text-4xl md:text-5xl text-white">
              {header.sectionTitle || "Portfolio"}
            </h2>
          </div>

          <div className="md:col-span-9">
            <p className="text-[#e3e3e3] text-[18px] sm:text-[23px] font-sans font-normal leading-[1.6] max-w-4xl">
              {header.description}
            </p>
          </div>
        </div>

        {/* Project Cards List */}
        <div className="space-y-12 sm:space-y-16">
          {projects.map((proj, index) => {
            const isImageRight =
              proj.imagePosition === "right" ||
              (proj.imagePosition !== "left" && index % 2 === 1);

            return (
              <div
                key={proj._id || index}
                className="hover:bg-white/10 border-3 border-transparent hover:border-white/70 rounded-2xl sm:rounded-3xl p-4 sm:p-10 lg:p-12 shadow-2xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-6 relative flex items-center justify-center p-2 sm:p-4 ${
                      isImageRight ? "order-1 lg:order-2" : ""
                    }`}
                  >
                    <img
                      src={proj.image || "/images/bank-image.webp"}
                      alt={proj.imageAlt || proj.title}
                      width={800}
                      height={600}
                      className="w-full h-auto max-h-[480px] object-contain rounded-xl drop-shadow-2xl"
                    />
                  </div>

                  {/* Details Column */}
                  <div
                    className={`lg:col-span-6 space-y-6 ${
                      isImageRight ? "order-2 lg:order-1" : ""
                    }`}
                  >
                    <span className="text-zinc-400 font-sans font-medium text-sm sm:text-base tracking-wide block">
                      {proj.category || "UI/UX Case Study"}
                    </span>

                    <h3 className="text-white font-sans font-semibold text-2xl sm:text-3xl md:text-[27px] leading-snug">
                      {proj.title}
                    </h3>

                    {/* Heart Counter */}
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-[#ff4d4d] flex items-center justify-center text-white text-xs shadow-md">
                        <FaHeart />
                      </div>
                      <span className="text-zinc-300 font-sans font-medium text-sm">
                        {proj.likes || 0}
                      </span>
                    </div>

                    {/* Skill Tags Box */}
                    {proj.tags && proj.tags.length > 0 && (
                      <div className="bg-white/10 rounded-xl p-4 sm:p-5">
                        <div className="flex flex-wrap gap-2.5">
                          {proj.tags.map((tag, tagIdx) => (
                            <span
                              key={tagIdx}
                              className="bg-white/20 text-zinc-300 text-xs sm:text-sm px-3.5 py-1.5 rounded-md font-sans"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* CTA Link */}
                    <div className="pt-2">
                      <a
                        href={proj.projectLink || "#"}
                        className={`inline-flex items-center gap-2 transition-colors font-sans font-semibold text-base sm:text-lg group ${
                          index % 2 === 1
                            ? "text-[#ff5252] hover:text-[#ff3d00]"
                            : "text-white hover:text-zinc-300"
                        }`}
                      >
                        <span>{proj.linkText || "View Project"}</span>
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
            );
          })}
        </div>

        {/* View All Projects Button */}
        {header.viewAllButtonText && (
          <div className="mt-12 sm:mt-16 w-full">
            <a
              href={header.viewAllButtonLink || "#"}
              className="block w-full bg-white/10 hover:bg-white/15 border border-white/50 hover:border-white-70 text-white/90 hover:text-white font-sans font-medium text-sm sm:text-base tracking-wide py-5 sm:py-6 rounded-xl sm:rounded-2xl transition-all duration-300 select-none shadow-lg text-center cursor-pointer"
            >
              {header.viewAllButtonText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
