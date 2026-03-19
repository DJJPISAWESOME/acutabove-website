import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "Commercial Sitework & Excavation", description: "Commercial sitework and excavation in Massachusetts." };

export default function Page() {
  return (
    <>
      <section className="relative h-[65vh] min-h-[500px] flex items-end bg-ink-950">
        <Image src="/images/commercial-5.jpg" alt="Commercial sitework and excavation" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/40 to-transparent" />
        <div className="relative wrap pb-16">
          <nav className="flex gap-2 text-xs text-white/40 mb-5">
            <Link href="/" className="hover:text-copper-400 transition-colors">Home</Link><span>/</span>
            <Link href="/commercial" className="hover:text-copper-400 transition-colors">Commercial</Link><span>/</span>
            <span className="text-copper-400">Sitework & Excavation</span>
          </nav>
          <h1 className="section-title text-white">Sitework &<br/>Excavation.</h1>
          <p className="body-lg text-white/60 max-w-xl mt-4">Large-scale commercial earthwork executed with precision, professionalism, and full compliance.</p>
        </div>
      </section>

      <section className="section-pad bg-parchment">
        <div className="wrap grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="copper-line mb-5" />
            <h2 className="section-title text-ink-900 mb-6">Built for<br/>Commercial Scale.</h2>
            <p className="body-md text-ink-500 mb-4">Commercial sitework demands precision planning, regulatory compliance, and the experience to execute complex projects on time and within budget.</p>
            <p className="body-md text-ink-500 mb-8">We work directly with engineers, general contractors, and developers to ensure our work integrates seamlessly with the full project scope.</p>
            <Link href="/contact" className="btn-primary py-4 px-8">Request a Project Bid</Link>
          </div>
          <div className="relative h-[460px]">
            <Image src="/images/about-2.jpg" alt="Excavator at work on a commercial site" fill className="object-cover" />
            <div className="absolute bottom-6 right-6 bg-copper-500 p-5">
              <p className="font-display text-4xl text-white leading-none">10+</p>
              <p className="text-xs font-heading text-white/80 tracking-widest uppercase mt-1">Years Commercial Experience</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-ink-950">
        <div className="wrap grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {[
            { icon: "🏗️", title: "Mass Grading & Earthwork", desc: "Large-scale grading and earthmoving for commercial site development and land balancing." },
            { icon: "🔧", title: "Utility Trench Installation", desc: "Precision trenching for water, sewer, electrical, and telecom conduits." },
            { icon: "🌊", title: "Stormwater Management", desc: "Detention basins, bioretention, catch basins, culverts, and underground drainage." },
            { icon: "🏢", title: "Foundation Excavation", desc: "Excavation for building foundations, footings, and below-grade structures." },
            { icon: "🚗", title: "Parking Lot & Road Prep", desc: "Full site prep for parking areas, access roads, and driveways." },
            { icon: "🌲", title: "Site Clearing & Demo", desc: "Commercial land clearing, tree removal, stump grinding, and demolition." },
          ].map(s => (
            <div key={s.title} className="bg-ink-950 hover:bg-ink-800 transition-colors p-8">
              <span className="text-3xl block mb-4">{s.icon}</span>
              <h3 className="font-heading text-white text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-copper-500">
        <div className="wrap-narrow text-center">
          <h2 className="section-title text-white mb-5">Have a Project?</h2>
          <p className="body-md text-white/80 mb-8">Contact us to discuss your project scope, timeline, and requirements.</p>
          <Link href="/contact" className="btn-ink py-4 px-10">Request a Project Bid</Link>
        </div>
      </section>
    </>
  );
}
