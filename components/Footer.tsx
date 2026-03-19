import Link from "next/link";
import Image from "next/image";

const residentialLinks = [
  { href: "/residential/landscape-maintenance", label: "Landscape Maintenance" },
  { href: "/residential/hardscaping-design", label: "Hardscaping & Design" },
  { href: "/residential/light-excavation", label: "Light Excavation Work" },
];
const commercialLinks = [
  { href: "/commercial/property-maintenance", label: "Property Maintenance" },
  { href: "/commercial/sitework-excavation", label: "Sitework & Excavation" },
  { href: "/commercial/snow-ice-management", label: "Snow & Ice Management" },
];
const serviceAreas = ["Mendon","Milford","Needham","Norfolk","Hopedale","Sherborn","Wrentham","Holliston","Bellingham","Dover","Medway","Millis","Franklin","Medfield","Blackstone"];

export default function Footer() {
  return (
    <footer className="bg-pine-950 text-white">
      <div className="container-wide py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Image
            src="https://static.wixstatic.com/media/3403b0_cfc3adac6c46487bb57858fad61d5f80~mv2.png/v1/fill/w_472,h_314,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ACAlogo(No-Number).png"
            alt="A Cut Above Landscaping"
            width={120} height={80}
            className="object-contain brightness-200 mb-5"
          />
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Transforming outdoor spaces across Massachusetts with expert landscaping, hardscaping, and excavation for over a decade.
          </p>
          <div className="space-y-2 text-sm">
            <a href="tel:+17742916846" className="flex items-center gap-2 text-gray-400 hover:text-gold-400 transition-colors">
              <span className="text-gold-500">☎</span> (774) 291-6846
            </a>
            <a href="mailto:info@acutabovema.com" className="flex items-center gap-2 text-gray-400 hover:text-gold-400 transition-colors">
              <span className="text-gold-500">✉</span> info@acutabovema.com
            </a>
          </div>
        </div>

        {/* Residential */}
        <div>
          <h4 className="font-display text-white text-base mb-1">Residential</h4>
          <span className="block w-8 h-px bg-gold-500 mb-5" />
          <ul className="space-y-2.5">
            {residentialLinks.map(l => (
              <li key={l.href}><Link href={l.href} className="text-gray-400 text-sm hover:text-white transition-colors">{l.label}</Link></li>
            ))}
          </ul>
          <h4 className="font-display text-white text-base mt-8 mb-1">Commercial</h4>
          <span className="block w-8 h-px bg-gold-500 mb-5" />
          <ul className="space-y-2.5">
            {commercialLinks.map(l => (
              <li key={l.href}><Link href={l.href} className="text-gray-400 text-sm hover:text-white transition-colors">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-white text-base mb-1">Company</h4>
          <span className="block w-8 h-px bg-gold-500 mb-5" />
          <ul className="space-y-2.5">
            {[
              { href: "/", label: "Home" },
              { href: "/residential", label: "Residential Services" },
              { href: "/commercial", label: "Commercial Services" },
              { href: "/careers", label: "Careers" },
              { href: "/contact", label: "Contact Us" },
            ].map(l => (
              <li key={l.href}><Link href={l.href} className="text-gray-400 text-sm hover:text-white transition-colors">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Service Areas + Hours */}
        <div>
          <h4 className="font-display text-white text-base mb-1">Service Areas</h4>
          <span className="block w-8 h-px bg-gold-500 mb-5" />
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            {serviceAreas.join(" · ")}
          </p>
          <h4 className="font-display text-white text-base mb-1">Hours</h4>
          <span className="block w-8 h-px bg-gold-500 mb-5" />
          <p className="text-gray-400 text-sm">Mon – Fri: 8:00 AM – 5:00 PM</p>
          <p className="text-gray-400 text-sm">Weekends: Closed</p>
          <Link href="/contact" className="mt-6 btn-gold py-3 px-6 text-xs inline-flex">
            Free Estimate
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="container-wide flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} A Cut Above Landscaping & Excavation. All rights reserved.</p>
          <p>Serving Massachusetts communities since 2014</p>
        </div>
      </div>
    </footer>
  );
}
