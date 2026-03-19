import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "Commercial Landscaping Services", description: "Commercial landscaping, maintenance, excavation and snow management in Massachusetts." };

const services = [
  { href: "/commercial/property-maintenance", title: "Property Maintenance", img: "/images/prop-maint-1.jpg", desc: "Year-round grounds maintenance programs that keep your commercial property looking sharp every season." },
  { href: "/commercial/sitework-excavation", title: "Sitework & Excavation", img: "/images/hero-excavator.jpg", desc: "Full-scale commercial sitework from grading and utility installation to mass earthwork and foundation prep." },
  { href: "/commercial/snow-ice-management", title: "Snow & Ice Management", img: "/images/snow.jpg", desc: "24/7 snow and ice management that keeps your property safe and your business open all winter long." },
];

export default function CommercialPage() {
  return (
    <>
      <section className="relative h-[65vh] min-h-[500px] flex items-end bg-ink-900">
        <Image src="/images/commercial-2.jpg" alt="Commercial Landscaping" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/88 via-ink-900/35 to-transparent" />
        <div className="relative wrap pb-16">
          <p className="label text-copper-400 mb-3 flex items-center gap-3"><span className="w-8 h-px bg-copper-400"/>Commercial Services</p>
          <h1 className="section-title text-white mb-4">Commercial<br/>Landscaping.</h1>
          <p className="body-lg text-white/60 max-w-xl">Professional grounds management for businesses and commercial properties across Massachusetts.</p>
        </div>
      </section>

      <div className="bg-ink-800 border-b border-white/10 py-4">
        <div className="wrap flex flex-wrap justify-center gap-8 text-center">
          {["Fully Insured", "Seasonal Contracts", "24/7 Winter Response", "Single Point of Contact"].map(t => (
            <div key={t} className="flex items-center gap-2 text-white/75">
              <svg className="w-4 h-4 text-copper-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
              <span className="text-sm font-heading font-medium tracking-wide">{t}</span>
            </div>
          ))}
        </div>
      </div>

      <section className="section-pad bg-parchment">
        <div className="wrap">
          <div className="grid lg:grid-cols-3 gap-1">
            {services.map((svc) => (
              <div key={svc.href} className="group bg-white overflow-hidden">
                <div className="relative h-60 overflow-hidden">
                  <Image src={svc.img} alt={svc.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <h2 className="card-title text-ink-900 mb-3">{svc.title}</h2>
                  <p className="text-ink-500 text-sm leading-relaxed mb-6">{svc.desc}</p>
                  <Link href={svc.href} className="btn-primary py-3 px-6 text-xs">Learn More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-ink-900">
        <div className="wrap grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="copper-line mb-5" />
            <p className="label text-copper-400 mb-4">Your Commercial Partner</p>
            <h2 className="section-title text-white mb-6">First Impressions<br/>Start at the Curb.</h2>
            <p className="body-md text-white/55 mb-4">Your property exterior is the first thing clients, tenants, and employees see. A well-maintained commercial landscape communicates professionalism and organizational pride.</p>
            <p className="body-md text-white/55 mb-8">We manage everything from weekly maintenance programs to multi-phase commercial excavation, backed by full licensing, insurance, and 10+ years of experience.</p>
            <Link href="/contact" className="btn-primary py-4 px-8">Request a Commercial Proposal</Link>
          </div>
          <div className="relative h-[460px]">
            <Image src="/images/commercial-4.jpg" alt="Commercial property" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="section-pad bg-parchment border-t border-stone">
        <div className="wrap-narrow text-center">
          <span className="copper-line mx-auto mb-5" />
          <h2 className="section-title text-ink-900 mb-5">Ready for a Partner<br/>You Can Trust?</h2>
          <p className="body-md text-ink-500 mb-8">Request a free commercial proposal today — no obligation.</p>
          <Link href="/contact" className="btn-primary py-4 px-10">Get Your Commercial Proposal</Link>
        </div>
      </section>
    </>
  );
}
