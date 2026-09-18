"use client";

import React, { useState, useEffect } from "react";
import {
  FaDribbble,
  FaInstagram,
  FaLinkedinIn,
  FaRegCopy,
  FaCheck,
  FaPhoneAlt,
  FaDownload,
  FaBehance,
} from "react-icons/fa";

const defaultFooterData = {
  watermarkText: "Let's Collaborate",
  logoUrl: "/images/logo.webp",
  hirePillText: "Hire me :)",
  headline:
    "Let’s collaborate & craft more equitable and enjoyable user experiences.",
  quickLinks: [
    { category: "Banking", title: "Transforming Genie", link: "#project-genie" },
    { category: "Finance", title: "Personal Finance Management", link: "#project-finance" },
    { category: "Wellbeing", title: "Design Thinking & Innovation", link: "#project-bmcr" },
    { category: "Wellbeing", title: "Insijam", link: "#project-insijam" },
  ],
  behanceUrl: "https://www.behance.net/pyushanand",
  dribbbleUrl: "https://dribbble.com/pyushanand",
  instagramUrl: "#instagram",
  linkedinUrl: "https://www.linkedin.com/in/kalra/",
  email: "pyushanand2007@gmail.com",
  phone: "+91-8700671102",
  downloadText: "Download Resume",
  downloadLink: "#download-resume",
};

export default function Footer() {
  const [footerData, setFooterData] = useState(defaultFooterData);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const rawUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000/api").trim();
    const cleanUrl = rawUrl.replace(/\/+$/, "");
    const backendUrl = cleanUrl.endsWith("/api") ? cleanUrl : `${cleanUrl}/api`;

    fetch(`${backendUrl}/footer`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.data) {
          setFooterData((prev) => ({
            ...prev,
            ...data.data,
            quickLinks: data.data.quickLinks || prev.quickLinks,
          }));
        }
      })
      .catch((err) => {
        console.error("Failed to fetch dynamic footer data:", err);
      });
  }, []);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    const targetEmail = footerData.email || "pyushanand2007@gmail.com";
    navigator.clipboard.writeText(targetEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const quickLinksList = footerData.quickLinks || [];
  const halfLength = Math.ceil(quickLinksList.length / 2);
  const col1Links = quickLinksList.slice(0, halfLength);
  const col2Links = quickLinksList.slice(halfLength);

  return (
    <footer className="w-full bg-background text-white pt-12 pb-0 sm:py-24 relative overflow-hidden font-sans border-none md:border-t border-zinc-900/60 selection:bg-white/20">
      {/* Background Watermark Text */}
      <div className="absolute bottom-4 sm:bottom-8 lg:bottom-12 left-0 w-full select-none pointer-events-none z-0 overflow-hidden leading-none">
        <span className="font-serif font-bold text-[65px] min-[400px]:text-[85px] sm:text-[140px] md:text-[185px] lg:text-[230px] xl:text-[195px] text-transparent stroke-text-faint tracking-tight whitespace-nowrap block opacity-20 sm:opacity-25">
          {footerData.watermarkText || "Let's Collaborate"}
        </span>
      </div>

      <div className="section-wrapper relative z-10">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start mb-16 sm:mb-24">
          {/* Left Column: Logo + Pill + Large Headline */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3.5">
              <img
                src={footerData.logoUrl || "/images/logo.webp"}
                alt="Logo"
                width={35}
                height={35}
                className="h-9 w-auto object-contain"
              />
              <span className="bg-white/10 text-white font-sans font-medium text-[12px] px-3 py-1 rounded-full shadow-md select-none">
                {footerData.hirePillText || "Hire me :)"}
              </span>
            </div>

            <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-[36px] leading-[1.22] text-white tracking-tight max-w-md pt-2 whitespace-pre-line">
              {footerData.headline}
            </h2>
          </div>

          {/* Middle Column: Case Studies / Quick Links */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-6 pt-2">
            {/* Column 1 */}
            <div className="space-y-6">
              {col1Links.map((item, idx) => (
                <div key={idx}>
                  <span className="text-zinc-400 font-sans text-sm block mb-1 font-normal">
                    {item.category}
                  </span>
                  <a
                    href={item.link || "#"}
                    className="text-white font-sans font-bold text-base hover:text-zinc-300 transition-colors block leading-tight"
                  >
                    {item.title}
                  </a>
                </div>
              ))}
            </div>

            {/* Column 2 */}
            <div className="space-y-6">
              {col2Links.map((item, idx) => (
                <div key={idx}>
                  <span className="text-zinc-400 font-sans text-sm block mb-1 font-normal">
                    {item.category}
                  </span>
                  <a
                    href={item.link || "#"}
                    className="text-white font-sans font-bold text-base hover:text-zinc-300 transition-colors block leading-tight"
                  >
                    {item.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Social Icons (Left) + Contact Details (Right) */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-white/10 relative z-10">
          {/* Left: Social Circles */}
          <div className="flex items-center gap-3">
            {footerData.behanceUrl && (
              <a
                href={footerData.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Behance Profile"
                className="w-10 h-10 rounded-full bg-white/10 border border-white/80 flex items-center justify-center text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors shadow-sm"
              >
                <FaBehance className="text-base" />
              </a>
            )}
            {footerData.dribbbleUrl && (
              <a
                href={footerData.dribbbleUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dribbble Profile"
                className="w-10 h-10 rounded-full bg-white/10 border border-white/80 flex items-center justify-center text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors shadow-sm"
              >
                <FaDribbble className="text-base" />
              </a>
            )}
            {footerData.instagramUrl && (
              <a
                href={footerData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="w-10 h-10 rounded-full bg-white/10 border border-white/80 flex items-center justify-center text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors shadow-sm"
              >
                <FaInstagram className="text-base" />
              </a>
            )}
            {footerData.linkedinUrl && (
              <a
                href={footerData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-white transition-colors"
              >
                <FaLinkedinIn />
              </a>
            )}
          </div>

          {/* Contact Details */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-zinc-300">
            {/* Email with copy button */}
            <div className="flex items-center gap-2">
              <a
                href={`mailto:${footerData.email || "pyushanand2007@gmail.com"}`}
                className="hover:text-white transition-colors"
              >
                {footerData.email || "pyushanand2007@gmail.com"}
              </a>
              <button
                onClick={handleCopyEmail}
                aria-label="Copy Email"
                className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                {copied ? <FaCheck className="text-emerald-400 text-xs" /> : <FaRegCopy className="text-xs" />}
              </button>
            </div>

            {/* Phone with phone icon */}
            {footerData.phone && (
              <div className="flex items-center gap-2">
                <a
                  href={`tel:${footerData.phone.replace(/[^0-9+]/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {footerData.phone}
                </a>
                <a
                  href={`tel:${footerData.phone.replace(/[^0-9+]/g, "")}`}
                  aria-label="Call"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  <FaPhoneAlt className="text-xs" />
                </a>
              </div>
            )}

            {/* Download Resume with download icon */}
            {footerData.downloadText && (
              <div className="flex items-center gap-2">
                <a
                  href={getFormattedLink(footerData.downloadLink)}
                  onClick={handleDownloadResume}
                  download
                  className="hover:text-white transition-colors font-medium cursor-pointer"
                >
                  {footerData.downloadText}
                </a>
                <a
                  href={getFormattedLink(footerData.downloadLink)}
                  onClick={handleDownloadResume}
                  download
                  aria-label="Download Resume File"
                  className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  <FaDownload className="text-xs" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
