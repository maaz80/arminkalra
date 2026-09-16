"use client";

import React, { useState } from "react";
import {
  FaDribbble,
  FaInstagram,
  FaLinkedinIn,
  FaRegCopy,
  FaCheck,
  FaPhoneAlt,
  FaDownload,
} from "react-icons/fa";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("arminderpal2007@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="w-full bg-[#08080a] text-white py-16 sm:py-24 relative overflow-hidden font-sans border-t border-zinc-900/60 selection:bg-white/20">
      {/* Background Watermark Text - "Let's Collaborate" */}
      <div className="absolute -bottom-4 sm:-bottom-8 lg:-bottom-12 left-0 w-full select-none pointer-events-none z-0 overflow-hidden leading-none">
        <span className="font-serif font-bold text-[65px] min-[400px]:text-[85px] sm:text-[140px] md:text-[185px] lg:text-[230px] xl:text-[275px] text-transparent stroke-text-faint tracking-tight whitespace-nowrap block opacity-20 sm:opacity-25">
          Let's Collaborate
        </span>
      </div>

      <div className="section-wrapper relative z-10">
        {/* Main Content Grid (3 Columns on Large Screens) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start mb-16 sm:mb-24">
          {/* Left Column: Logo + Pill + Large Headline */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3.5">
              <span className="text-white font-bold text-2xl sm:text-3xl tracking-wide select-none font-sans">
                ਅਮ੍ਰਿਨਕਾਲਰਾ
              </span>
              <span className="bg-[#ff5e4d] text-white font-sans font-medium text-[12px] px-3 py-1 rounded-full shadow-md select-none">
                Hire me :)
              </span>
            </div>

            <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-[36px] leading-[1.22] text-white tracking-tight max-w-md pt-2">
              Let’s collaborate <br />
              &amp; craft more <br />
              equitable and <br />
              enjoyable user <br />
              experiences.
            </h2>
          </div>

          {/* Middle Column: Case Studies (2 Sub-columns) */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-6 pt-2">
            {/* Column 1 */}
            <div className="space-y-6">
              <div>
                <span className="text-zinc-400 font-sans text-sm block mb-1 font-normal">
                  Banking
                </span>
                <a
                  href="#project-genie"
                  className="text-white font-sans font-bold text-base hover:text-zinc-300 transition-colors block leading-tight"
                >
                  Transforming Genie
                </a>
              </div>

              <div>
                <span className="text-zinc-400 font-sans text-sm block mb-1 font-normal">
                  Wellbeing
                </span>
                <a
                  href="#project-bmcr"
                  className="text-white font-sans font-bold text-base hover:text-zinc-300 transition-colors block leading-tight"
                >
                  Design Thinking &amp; Innovation
                </a>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-6">
              <div>
                <span className="text-zinc-400 font-sans text-sm block mb-1 font-normal">
                  Banking
                </span>
                <a
                  href="#project-finance"
                  className="text-white font-sans font-bold text-base hover:text-zinc-300 transition-colors block leading-tight"
                >
                  Personal Finance Management
                </a>
              </div>

              <div>
                <span className="text-zinc-400 font-sans text-sm block mb-1 font-normal">
                  Wellbeing
                </span>
                <a
                  href="#project-insijam"
                  className="text-white font-sans font-bold text-base hover:text-zinc-300 transition-colors block leading-tight"
                >
                  Insijam
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 2x4 Tool Icons Grid */}
          <div className="lg:col-span-3 flex lg:justify-end pt-2">
            <div className="grid grid-cols-2 gap-3.5 w-fit">
              {/* 1. Figma */}
              <div
                className="w-11 h-11 bg-[#141417] border border-zinc-800/80 rounded-xl flex items-center justify-center shadow-md hover:border-zinc-700 transition-colors"
                title="Figma"
              >
                <svg width="20" height="20" viewBox="0 0 38 57" fill="none">
                  <path
                    d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V28.5Z"
                    fill="#1ABCFE"
                  />
                  <path
                    d="M0 47.5C0 42.2533 4.2533 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.2533 57 0 52.7467 0 47.5Z"
                    fill="#0ACF83"
                  />
                  <path
                    d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.2533 33.7467 0 28.5 0H19Z"
                    fill="#FF7262"
                  />
                  <path
                    d="M0 9.5C0 14.7467 4.2533 19 9.5 19H19V0H9.5C4.2533 0 0 4.2533 0 9.5Z"
                    fill="#F24E1E"
                  />
                  <path
                    d="M0 28.5C0 33.7467 4.2533 38 9.5 38H19V19H9.5C4.2533 19 0 23.2533 0 28.5Z"
                    fill="#A259FF"
                  />
                </svg>
              </div>

              {/* 2. Miro */}
              <div
                className="w-11 h-11 bg-[#ffd028] rounded-xl flex items-center justify-center shadow-md text-black font-black text-xl select-none"
                title="Miro"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.8 3H5.2C4 3 3 4 3 5.2v13.6C3 20 4 21 5.2 21h13.6c1.2 0 2.2-1 2.2-2.2V5.2C21 4 20 3 18.8 3zm-2.2 12.8h-2.1l1.4-4.8h.1l1.4 4.8zm-4.7 0H9.8l1.4-4.8h.1l1.4 4.8zm-4.7 0H5.1l1.4-4.8h.1l1.4 4.8z" />
                </svg>
              </div>

              {/* 3. Sketch */}
              <div
                className="w-11 h-11 bg-[#141417] border border-zinc-800/80 rounded-xl flex items-center justify-center shadow-md hover:border-zinc-700 transition-colors"
                title="Sketch"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#fdb300">
                  <polygon points="12,2 3,9 12,22 21,9" />
                </svg>
              </div>

              {/* 4. Zeplin */}
              <div
                className="w-11 h-11 bg-[#141417] border border-zinc-800/80 rounded-xl flex items-center justify-center shadow-md hover:border-zinc-700 transition-colors"
                title="Zeplin"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#fca326">
                  <ellipse cx="12" cy="12" rx="9" ry="5" transform="rotate(-30 12 12)" />
                </svg>
              </div>

              {/* 5. Adobe Illustrator (Ai) */}
              <div
                className="w-11 h-11 bg-[#330000] border border-[#ff9a00]/30 rounded-xl flex items-center justify-center shadow-md font-sans font-bold text-[#ff9a00] text-sm select-none"
                title="Adobe Illustrator"
              >
                Ai
              </div>

              {/* 6. Adobe Photoshop (Ps) */}
              <div
                className="w-11 h-11 bg-[#001e36] border border-[#31a8ff]/30 rounded-xl flex items-center justify-center shadow-md font-sans font-bold text-[#31a8ff] text-sm select-none"
                title="Adobe Photoshop"
              >
                Ps
              </div>

              {/* 7. InVision (in) */}
              <div
                className="w-11 h-11 bg-[#ff3366] rounded-xl flex items-center justify-center shadow-md font-sans font-bold text-white text-base italic select-none"
                title="InVision"
              >
                in
              </div>

              {/* Empty placeholder slot to complete grid aesthetic */}
              <div className="w-11 h-11" />
            </div>
          </div>
        </div>

        {/* Bottom Bar: Social Icons (Left) + Contact Details (Right) */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-zinc-900/50 relative z-10">
          {/* Left: Social Circles */}
          <div className="flex items-center gap-3">
            <a
              href="https://dribbble.com/arminkalra"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dribbble Profile"
              className="w-10 h-10 rounded-full bg-[#18181c] border border-zinc-800/80 flex items-center justify-center text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors shadow-sm"
            >
              <FaDribbble className="text-base" />
            </a>

            <a
              href="#instagram"
              aria-label="Instagram Profile"
              className="w-10 h-10 rounded-full bg-[#18181c] border border-zinc-800/80 flex items-center justify-center text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors shadow-sm"
            >
              <FaInstagram className="text-base" />
            </a>

            <a
              href="https://www.linkedin.com/in/arminkalra/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-10 h-10 rounded-full bg-[#18181c] border border-zinc-800/80 flex items-center justify-center text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors shadow-sm"
            >
              <FaLinkedinIn className="text-base" />
            </a>
          </div>

          {/* Right: Inline Contact Links */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-sm text-zinc-300 font-sans font-normal">
            {/* Email with copy icon */}
            <div className="flex items-center gap-2">
              <a
                href="mailto:arminderpal2007@gmail.com"
                className="hover:text-white transition-colors"
              >
                arminderpal2007@gmail.com
              </a>
              <button
                onClick={handleCopyEmail}
                title="Copy email address"
                className="text-zinc-400 hover:text-white transition-colors p-1"
                aria-label="Copy Email"
              >
                {copied ? (
                  <FaCheck className="text-emerald-400 text-xs animate-bounce" />
                ) : (
                  <FaRegCopy className="text-xs" />
                )}
              </button>
            </div>

            {/* Phone with phone icon */}
            <div className="flex items-center gap-2">
              <a
                href="tel:+918700671102"
                className="hover:text-white transition-colors"
              >
                +91-8700671102
              </a>
              <a
                href="tel:+918700671102"
                aria-label="Call Armin Kalra"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <FaPhoneAlt className="text-xs" />
              </a>
            </div>

            {/* Download Resume with download icon */}
            <div className="flex items-center gap-2">
              <a
                href="#download-resume"
                className="hover:text-white transition-colors font-medium"
              >
                Download Resume
              </a>
              <a
                href="#download-resume"
                aria-label="Download Resume File"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <FaDownload className="text-xs" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
