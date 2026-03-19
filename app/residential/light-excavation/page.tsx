import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "Light Excavation", description: "Residential light excavation in Massachusetts." };

export default function Page() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[460px] flex items-end bg-ink-900">
        <Image src="/images/light-excav.jpg" alt="Light Excavation" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/88 via-ink-950/40 to-transparent" />
        <div className="relative wrap pb-16">
          <nav className="flex gap-2 text-xs text-white/40 mb-5">
            <Link href="/" className="hover:text-copper-400 transition-colors">Home</Link><span>/</span>
            <Link href="/residential" className="hover:text-copper-400 transition-colors">Residential</Link><span>/</span>
            <span className="text-copper-400">Light Excavation</span>
          </nav>
          <h1 className="page-title text-white">Light<br/>Excavation.</h1>
          <p className="body-lg text-white/60 max-w-xl mt-4">Precision earthwork done right the first time.</p>
        </div>
      </section>

      <section className="section-pad bg-parchment">
        <div className="wrap grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="copper-line mb-5" />
            <p className="label text-copper-500 mb-4">The Right Foundation</p>
            <h2 className="section-title text-ink-900 mb-6">Every Great Project<br/>Starts Below Grade.</h2>
            <p className="body-md text-ink-500 mb-4">Before any stone is laid, any lawn is seeded, or any structure is built — the ground beneath needs to be properly prepared.</p>
            <p className="body-md text-ink-500 mb-8">We operate compact, residential-friendly equipment that can access tight yards without causing unnecessary damage to existing landscaping.</p>
            <Link href="/contact" className="btn-primary py-4 px-8">Get a Free Estimate</Link>
          </div>
          <div className="relative h-[460px]">
            <Image src="/images/light-excav-2.jpeg" alt="Excavation" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="section-pad bg-ink-900">
        <div className="wrap grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {[
            { icon: "📐", title: "Grading & Leveling", desc: "Proper grading ensures water drains away from your home and creates a stable, level surface." },
            { icon: "🏗️", title: "Site Preparation", desc: "Get your property ready for new construction, additions, pools, or major landscaping work." },
            { icon: "🪚", title: "Trenching", desc: "Precision trenching for drainage pipes, irrigation systems, utility lines, and more." },
            { icon: "🌊", title: "Drainage Solutions", desc: "French drains, catch basins, and swales to solve wet yard problems permanently." },
            { icon: "🌲", title: "Land Clearing", desc: "Clear brush, stumps, and vegetation to open up space. Debris hauled away clean." },
            { icon: "🏠", title: "Foundation Prep", desc: "Excavation for sheds, small additions, retaining walls, and other structures." },
          ].map(s => (
            <div key={s.title} className="bg-ink-900 hover:bg-ink-800 transition-colors p-8">
              <span className="text-3xl block mb-4">{s.icon}</span>
              <h3 className="font-heading text-white text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-parchment border-t border-stone">
        <div className="wrap-narrow text-center">
          <h2 className="section-title text-ink-900 mb-5">Start Your Project Right.</h2>
          <p className="body-md text-ink-500 mb-8">Free site evaluation and estimate. We will walk the property and provide a clear, honest plan.</p>
          <Link href="/contact" className="btn-primary py-4 px-10">Get Your Free Estimate</Link>
        </div>
      </section>
    </>
  );
}
