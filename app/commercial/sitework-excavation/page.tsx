import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commercial Sitework & Excavation",
  description: "Commercial sitework and excavation services in Massachusetts. Grading, utility installation, stormwater management, and large-scale earthwork.",
};

const services = [
  {
    icon: "🏗️",
    title: "Mass Grading & Earthwork",
    desc: "Large-scale grading and earthmoving for commercial site development. We manage cut/fill operations, site balancing, and final grading to plan specifications.",
  },
  {
    icon: "🔧",
    title: "Utility Trench Installation",
    desc: "Precision trenching for water, sewer, electrical, and telecom conduits. We coordinate with utility contractors and restore surfaces to original condition.",
  },
  {
    icon: "🌊",
    title: "Stormwater Management",
    desc: "Design and installation of detention basins, bioretention areas, catch basins, culverts, and underground drainage systems to meet site engineering requirements.",
  },
  {
    icon: "🏢",
    title: "Foundation Excavation",
    desc: "Excavation for building foundations, footings, and below-grade structures. Accurate, safe, and executed to spec with minimal impact to surrounding areas.",
  },
  {
    icon: "🚗",
    title: "Parking Lot & Road Prep",
    desc: "Full site preparation for parking areas, access roads, and driveways including subbase installation, grading, and final compaction.",
  },
  {
    icon: "🌲",
    title: "Site Clearing & Demo",
    desc: "Commercial land clearing, tree removal, stump grinding, and demolition of existing structures to prepare sites for new construction.",
  },
];

const capabilities = [
  { label: "Equipment Fleet", items: ["Excavators (multiple sizes)", "Motor Graders", "Bulldozers", "Wheel Loaders", "Dump Trucks", "Vibratory Compactors"] },
  { label: "Project Capabilities", items: ["Site plans & specifications review", "Dig Safe coordination", "Erosion control compliance", "As-built documentation", "Subcontractor coordination", "Phase scheduling"] },
];

export default function SiteworkExcavationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[62vh] min-h-[460px] flex items-end">
        <Image
          src="https://static.wixstatic.com/media/3403b0_76c8f0a0de4a46298428e1c6d79e1f8e~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/excavation.jpg"
          alt="Commercial Sitework and Excavation"
          fill className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/40 to-transparent" />
        <div className="relative container-wide pb-16">
          <nav className="flex items-center gap-2 text-gray-400 text-sm mb-6">
            <Link href="/" className="hover:text-gold-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/commercial" className="hover:text-gold-400 transition-colors">Commercial</Link>
            <span>/</span>
            <span className="text-gold-400">Sitework & Excavation</span>
          </nav>
          <p className="eyebrow text-gold-400 mb-3">Commercial Services</p>
          <h1 className="display-lg text-white max-w-2xl">Sitework & Excavation</h1>
          <p className="body-lg text-gray-200 max-w-xl mt-4">
            Large-scale commercial excavation and sitework executed with precision, professionalism, and full compliance with Massachusetts requirements.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-pad bg-white">
        <div className="container-wide grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="gold-line" />
            <p className="eyebrow text-gold-600 mb-3">Built for Commercial Scale</p>
            <h2 className="display-md text-charcoal mb-6">The Earthwork Expertise Your Project Demands</h2>
            <p className="body-md text-gray-600 mb-4">
              Commercial sitework requires more than just heavy equipment — it demands precision planning, regulatory compliance, and the experience to execute complex projects on time and within budget.
            </p>
            <p className="body-md text-gray-600 mb-4">
              A Cut Above has the equipment fleet, licensed operators, and project management capabilities to handle commercial excavation and sitework across Massachusetts. From initial clearing through final grading, we manage the entire earthwork phase of your project.
            </p>
            <p className="body-md text-gray-600 mb-8">
              We work directly with engineers, general contractors, and developers to ensure our work integrates seamlessly with the full project scope.
            </p>
            <Link href="/contact" className="btn-gold py-4 px-8">Request a Project Bid</Link>
          </div>
          <div className="relative h-[460px]">
            <Image
              src="https://static.wixstatic.com/media/3403b0_76c8f0a0de4a46298428e1c6d79e1f8e~mv2.jpg/v1/fill/w_900,h_900,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/excavation.jpg"
              alt="Commercial excavation"
              fill className="object-cover"
            />
            <div className="absolute bottom-6 right-6 bg-gold-400 p-5">
              <p className="text-pine-950 text-3xl font-display font-bold">10+</p>
              <p className="text-pine-900 text-sm font-medium mt-1">Years of Commercial Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad bg-cream">
        <div className="container-wide">
          <div className="text-center mb-14">
            <span className="gold-line mx-auto" />
            <p className="eyebrow text-gold-600 mb-3">What We Do</p>
            <h2 className="display-md text-charcoal">Sitework Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(s => (
              <div key={s.title} className="bg-white p-8 border border-gray-100 hover:border-gold-300 transition-colors">
                <span className="text-3xl block mb-4">{s.icon}</span>
                <h3 className="font-display text-lg text-charcoal mb-3">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-pad bg-pine-950">
        <div className="container-wide">
          <div className="text-center mb-14">
            <span className="gold-line mx-auto" />
            <p className="eyebrow text-gold-400 mb-3">Our Capabilities</p>
            <h2 className="display-md text-white">Fully Equipped for Commercial Work</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map(cap => (
              <div key={cap.label} className="bg-white/5 border border-white/10 p-8">
                <h3 className="font-display text-white text-lg mb-6 pb-4 border-b border-white/10">{cap.label}</h3>
                <ul className="space-y-3">
                  {cap.items.map(item => (
                    <li key={item} className="flex items-start gap-3 text-gray-300 text-sm">
                      <svg className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <div className="text-center mb-14">
            <span className="gold-line mx-auto" />
            <p className="eyebrow text-gold-600 mb-3">How We Work</p>
            <h2 className="display-md text-charcoal">Our Project Process</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Bid & Site Review", desc: "We review plans, visit the site, and submit a competitive, detailed bid with a clear scope of work." },
              { step: "02", title: "Planning & Coordination", desc: "We coordinate with engineers, GCs, and utilities to ensure a seamless mobilization." },
              { step: "03", title: "Execution", desc: "Our licensed operators execute the earthwork to spec, with regular progress updates and quality checks." },
              { step: "04", title: "Completion & Sign-Off", desc: "Final grading inspections, as-builts, and punch list close-out — done right before we leave the site." },
            ].map(p => (
              <div key={p.step} className="border border-gray-200 p-7">
                <span className="font-display text-3xl text-gold-400 block mb-4">{p.step}</span>
                <h3 className="font-display text-charcoal text-lg mb-3">{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-gold-500">
        <div className="container-narrow text-center">
          <h2 className="display-md text-pine-950 mb-4">Have a Commercial Sitework Project?</h2>
          <p className="body-lg text-pine-900 mb-8">Contact us to discuss your project scope, timeline, and requirements. We're ready to bid and ready to deliver.</p>
          <Link href="/contact" className="btn-pine py-4 px-10 text-base">Request a Project Bid</Link>
        </div>
      </section>
    </>
  );
}
