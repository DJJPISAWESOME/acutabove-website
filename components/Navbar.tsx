"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const residentialLinks = [
  { href: "/residential", label: "All Residential Services" },
  { href: "/residential/landscape-maintenance", label: "Landscape Maintenance" },
  { href: "/residential/hardscaping-design", label: "Hardscaping & Design" },
  { href: "/residential/light-excavation", label: "Light Excavation Work" },
];

const commercialLinks = [
  { href: "/commercial", label: "All Commercial Services" },
  { href: "/commercial/property-maintenance", label: "Property Maintenance" },
  { href: "/commercial/sitework-excavation", label: "Sitework & Excavation" },
  { href: "/commercial/snow-ice-management", label: "Snow & Ice Management" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileRes, setMobileRes] = useState(false);
  const [mobileCom, setMobileCom] = useState(false);
  const [resDropdown, setResDropdown] = useState(false);
  const [comDropdown, setComDropdown] = useState(false);
  const resRef = useRef<HTMLDivElement>(null);
  const comRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (resRef.current && !resRef.current.contains(e.target as Node)) setResDropdown(false);
      if (comRef.current && !comRef.current.contains(e.target as Node)) setComDropdown(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const navTextClass = scrolled ? "text-charcoal hover:text-gold-500" : "text-white hover:text-gold-300";
  const dropItemClass = "block px-5 py-2.5 text-sm text-charcoal hover:bg-pine-50 hover:text-gold-600 transition-colors border-b border-gray-50 last:border-0";

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-400 ${scrolled ? "bg-white shadow-md py-3" : "py-5 bg-transparent"}`}>
      <div className="container-wide flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="https://static.wixstatic.com/media/3403b0_cfc3adac6c46487bb57858fad61d5f80~mv2.png/v1/fill/w_472,h_314,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ACAlogo(No-Number).png"
            alt="A Cut Above Landscaping"
            width={110} height={73}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          <Link href="/" className={`text-sm font-medium tracking-wide transition-colors duration-200 ${navTextClass}`}>
            Home
          </Link>

          {/* Residential Dropdown */}
          <div ref={resRef} className="relative">
            <button
              onClick={() => { setResDropdown(!resDropdown); setComDropdown(false); }}
              className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors duration-200 ${navTextClass}`}
            >
              Residential
              <svg className={`w-3.5 h-3.5 transition-transform ${resDropdown ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {resDropdown && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white shadow-xl border border-gray-100 py-1">
                {residentialLinks.map(l => (
                  <Link key={l.href} href={l.href} className={dropItemClass} onClick={() => setResDropdown(false)}>
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Commercial Dropdown */}
          <div ref={comRef} className="relative">
            <button
              onClick={() => { setComDropdown(!comDropdown); setResDropdown(false); }}
              className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors duration-200 ${navTextClass}`}
            >
              Commercial
              <svg className={`w-3.5 h-3.5 transition-transform ${comDropdown ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {comDropdown && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white shadow-xl border border-gray-100 py-1">
                {commercialLinks.map(l => (
                  <Link key={l.href} href={l.href} className={dropItemClass} onClick={() => setComDropdown(false)}>
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/careers" className={`text-sm font-medium tracking-wide transition-colors duration-200 ${navTextClass}`}>
            Careers
          </Link>
          <Link href="/contact" className={`text-sm font-medium tracking-wide transition-colors duration-200 ${navTextClass}`}>
            Contact
          </Link>
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden lg:inline-flex btn-gold py-3 px-6 text-xs">
            Free Estimate
          </Link>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 flex flex-col gap-[5px]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {[0,1,2].map(i => (
              <span key={i} className={`block h-0.5 w-6 transition-all duration-300 ${scrolled ? "bg-charcoal" : "bg-white"} ${
                mobileOpen
                  ? i === 0 ? "rotate-45 translate-y-[7px]"
                  : i === 1 ? "opacity-0 scale-x-0"
                  : "-rotate-45 -translate-y-[7px]"
                  : ""
              }`} />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ${mobileOpen ? "max-h-[500px]" : "max-h-0"}`}>
        <div className="bg-white border-t border-gray-100 px-5 py-4 flex flex-col gap-1">
          <Link href="/" className="py-3 text-sm font-medium text-charcoal border-b border-gray-100" onClick={() => setMobileOpen(false)}>Home</Link>

          {/* Mobile Residential */}
          <div className="border-b border-gray-100">
            <button onClick={() => setMobileRes(!mobileRes)} className="w-full py-3 text-sm font-medium text-charcoal flex justify-between items-center">
              Residential
              <svg className={`w-4 h-4 transition-transform ${mobileRes ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            {mobileRes && (
              <div className="pb-2 pl-4 flex flex-col gap-1">
                {residentialLinks.map(l => (
                  <Link key={l.href} href={l.href} className="py-2 text-sm text-gray-600 hover:text-gold-500" onClick={() => setMobileOpen(false)}>{l.label}</Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Commercial */}
          <div className="border-b border-gray-100">
            <button onClick={() => setMobileCom(!mobileCom)} className="w-full py-3 text-sm font-medium text-charcoal flex justify-between items-center">
              Commercial
              <svg className={`w-4 h-4 transition-transform ${mobileCom ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            {mobileCom && (
              <div className="pb-2 pl-4 flex flex-col gap-1">
                {commercialLinks.map(l => (
                  <Link key={l.href} href={l.href} className="py-2 text-sm text-gray-600 hover:text-gold-500" onClick={() => setMobileOpen(false)}>{l.label}</Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/careers" className="py-3 text-sm font-medium text-charcoal border-b border-gray-100" onClick={() => setMobileOpen(false)}>Careers</Link>
          <Link href="/contact" className="py-3 text-sm font-medium text-charcoal border-b border-gray-100" onClick={() => setMobileOpen(false)}>Contact</Link>
          <Link href="/contact" className="mt-3 btn-gold justify-center" onClick={() => setMobileOpen(false)}>Request Free Estimate</Link>
        </div>
      </div>
    </header>
  );
}
