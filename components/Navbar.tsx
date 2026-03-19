"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const nav = [
  {
    label: "Residential",
    href: "/residential",
    sub: [
      { label: "Landscape Maintenance", href: "/residential/landscape-maintenance" },
      { label: "Hardscaping & Design", href: "/residential/hardscaping-design" },
      { label: "Light Excavation", href: "/residential/light-excavation" },
    ],
  },
  {
    label: "Commercial",
    href: "/commercial",
    sub: [
      { label: "Property Maintenance", href: "/commercial/property-maintenance" },
      { label: "Sitework & Excavation", href: "/commercial/sitework-excavation" },
      { label: "Snow & Ice Management", href: "/commercial/snow-ice-management" },
    ],
  },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-white shadow-sm"}`}>
      {/* Top bar — slim contact strip */}
      <div className="border-b border-ink-100">
        <div className="wrap flex items-center justify-between py-1.5">
          <div className="flex items-center gap-6">
            <a href="tel:+17742916846" className="flex items-center gap-1.5 text-xs text-ink-500 hover:text-copper-600 transition-colors">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
              (774) 291-6846
            </a>
            <span className="hidden sm:flex items-center gap-1.5 text-xs text-ink-400">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              Franklin, MA
            </span>
          </div>
          <a href="https://clienthub.getjobber.com/client_hubs/642fdd6d-d859-4d28-83c3-314377e6f47d/login/new?source=share_login" target="_blank" rel="noopener noreferrer" className="text-xs text-ink-400 hover:text-copper-600 transition-colors">
            Client Login →
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="wrap flex items-center justify-between py-3" ref={dropdownRef}>
        <Link href="/" className="flex-shrink-0" onClick={() => setOpen(false)}>
          <Image src="/images/logo.png" alt="A Cut Above" width={140} height={93} className="h-11 w-auto" priority />
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-0.5">
          <Link href="/" className="px-4 py-2 text-sm font-heading font-medium text-ink-700 hover:text-copper-600 transition-colors">Home</Link>
          {nav.map((item) =>
            item.sub ? (
              <div key={item.label} className="relative group">
                <button
                  className="flex items-center gap-1 px-4 py-2 text-sm font-heading font-medium text-ink-700 hover:text-copper-600 transition-colors"
                  onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.label}
                  <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === item.label ? "rotate-180 text-copper-500" : "text-ink-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
                </button>
                {activeDropdown === item.label && (
                  <div
                    className="absolute top-full left-0 mt-0 w-60 bg-white border border-ink-100 shadow-xl shadow-ink-900/8 py-2"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link href={item.href} onClick={() => setActiveDropdown(null)}
                      className="block px-5 py-2 text-[11px] text-copper-500 hover:text-copper-600 font-heading tracking-widest uppercase transition-colors">
                      View All →
                    </Link>
                    <div className="border-t border-ink-100 mt-1 pt-1">
                      {item.sub.map((s) => (
                        <Link key={s.href} href={s.href} onClick={() => setActiveDropdown(null)}
                          className="block px-5 py-2.5 text-sm text-ink-700 hover:text-copper-600 hover:bg-parchment transition-colors">
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.label} href={item.href}
                className="px-4 py-2 text-sm font-heading font-medium text-ink-700 hover:text-copper-600 transition-colors">
                {item.label}
              </Link>
            )
          )}
        </div>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-copper-500 text-white text-xs font-heading font-semibold tracking-widest uppercase hover:bg-copper-600 transition-colors rounded-sm">
            Free Estimate
          </Link>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-ink-700" aria-label="Menu">
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-ink-800 transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}/>
              <span className={`block w-6 h-0.5 bg-ink-800 transition-all duration-300 ${open ? "opacity-0" : ""}`}/>
              <span className={`block w-6 h-0.5 bg-ink-800 transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}/>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-screen" : "max-h-0"}`}>
        <div className="bg-white border-t border-ink-100 pb-6">
          <div className="wrap pt-3 space-y-0.5">
            <Link href="/" onClick={() => setOpen(false)} className="block px-4 py-3 text-ink-700 hover:text-copper-600 font-heading">Home</Link>
            {nav.map((item) =>
              item.sub ? (
                <div key={item.label}>
                  <button onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    className="flex items-center justify-between w-full px-4 py-3 text-ink-700 hover:text-copper-600 font-heading">
                    {item.label}
                    <svg className={`w-4 h-4 transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="ml-4 border-l-2 border-copper-500/30 bg-parchment py-1">
                      {item.sub.map((s) => (
                        <Link key={s.href} href={s.href} onClick={() => setOpen(false)}
                          className="block px-5 py-2.5 text-sm text-ink-600 hover:text-copper-600 transition-colors">
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={item.label} href={item.href} onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-ink-700 hover:text-copper-600 font-heading">
                  {item.label}
                </Link>
              )
            )}
            <div className="pt-4 px-4">
              <Link href="/contact" onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-copper-500 text-white text-sm font-heading font-semibold tracking-widest uppercase hover:bg-copper-600 transition-colors rounded-sm">
                Request Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
