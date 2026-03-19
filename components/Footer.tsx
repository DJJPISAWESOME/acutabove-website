import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-white">
      {/* CTA Band */}
      <div className="bg-copper-500 py-10">
        <div className="wrap flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-4xl uppercase text-white leading-none">Ready to Get Started?</p>
            <p className="text-white/80 mt-2 font-body text-sm">Free estimates — no pressure, no obligation.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-ink-900 text-white text-xs font-heading font-semibold tracking-widest uppercase hover:bg-ink-700 transition-colors">
              Request Estimate
            </Link>
            <a href="tel:+17742916846" className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white/50 text-white text-xs font-heading font-semibold tracking-widest uppercase hover:bg-white hover:text-ink-900 transition-colors">
              (774) 291-6846
            </a>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="wrap py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <Image src="/images/logo.png" alt="A Cut Above" width={130} height={87} className="h-14 w-auto mb-5 brightness-0 invert" />
          <p className="text-white/50 text-sm leading-relaxed">
            Professional landscaping, hardscaping, excavation & snow management across 15+ Massachusetts communities.
          </p>
          <p className="text-white/40 text-xs mt-4">Licensed & Fully Insured</p>
        </div>

        {/* Residential */}
        <div>
          <p className="text-[10px] font-heading font-semibold tracking-[0.35em] uppercase text-copper-400 mb-4">Residential</p>
          <ul className="space-y-2.5">
            {[
              ["Overview", "/residential"],
              ["Landscape Maintenance", "/residential/landscape-maintenance"],
              ["Hardscaping & Design", "/residential/hardscaping-design"],
              ["Light Excavation", "/residential/light-excavation"],
            ].map(([label, href]) => (
              <li key={href}><Link href={href} className="text-sm text-white/55 hover:text-white transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Commercial */}
        <div>
          <p className="text-[10px] font-heading font-semibold tracking-[0.35em] uppercase text-copper-400 mb-4">Commercial</p>
          <ul className="space-y-2.5">
            {[
              ["Overview", "/commercial"],
              ["Property Maintenance", "/commercial/property-maintenance"],
              ["Sitework & Excavation", "/commercial/sitework-excavation"],
              ["Snow & Ice Management", "/commercial/snow-ice-management"],
            ].map(([label, href]) => (
              <li key={href}><Link href={href} className="text-sm text-white/55 hover:text-white transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Info */}
        <div>
          <p className="text-[10px] font-heading font-semibold tracking-[0.35em] uppercase text-copper-400 mb-4">Company</p>
          <ul className="space-y-2.5 mb-6">
            {[["Careers", "/careers"], ["Contact Us", "/contact"]].map(([label, href]) => (
              <li key={href}><Link href={href} className="text-sm text-white/55 hover:text-white transition-colors">{label}</Link></li>
            ))}
          </ul>
          <p className="text-[10px] font-heading font-semibold tracking-[0.35em] uppercase text-copper-400 mb-3">Service Areas</p>
          <p className="text-xs text-white/40 leading-relaxed">
            Franklin · Milford · Norfolk · Hopedale · Sherborn · Wrentham · Holliston · Bellingham · Dover · Medway · Franklin · Medfield · Blackstone
          </p>
          <p className="text-[10px] font-heading font-semibold tracking-[0.35em] uppercase text-copper-400 mt-4 mb-2">Hours</p>
          <p className="text-xs text-white/40">Mon–Fri: 8:00 AM – 5:00 PM</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="wrap py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>© {new Date().getFullYear()} A Cut Above Landscaping & Excavation. All rights reserved.</p>
          <p>Serving Massachusetts with pride.</p>
        </div>
      </div>
    </footer>
  );
}
