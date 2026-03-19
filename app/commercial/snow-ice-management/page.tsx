import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "Snow & Ice Management", description: "24/7 commercial snow and ice management in Massachusetts." };

export default function Page() {
  return (
    <>
      <section className="relative h-[65vh] min-h-[500px] flex items-end bg-ink-900">
        <Image src="/images/snow.jpg" alt="Snow & Ice Management" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/92 via-ink-950/50 to-transparent" />
        <div className="relative wrap pb-16">
          <nav className="flex gap-2 text-xs text-white/40 mb-5">
            <Link href="/" className="hover:text-copper-400 transition-colors">Home</Link><span>/</span>
            <Link href="/commercial" className="hover:text-copper-400 transition-colors">Commercial</Link><span>/</span>
            <span className="text-copper-400">Snow & Ice Management</span>
          </nav>
          <h1 className="page-title text-white">Snow & Ice<br/>Management.</h1>
          <p className="body-lg text-white/60 max-w-xl mt-4">24/7 coverage that keeps your business open all winter — no matter what the forecast brings.</p>
        </div>
      </section>

      <div className="bg-ink-800 border-b border-white/10 py-4">
        <div className="wrap flex flex-wrap justify-center gap-6">
          <span className="text-sm text-white/75 font-heading font-medium">Spots are limited — secure your winter service agreement now.</span>
          <Link href="/contact" className="text-xs font-heading font-semibold text-white bg-copper-500 px-4 py-2 hover:bg-copper-600 transition-colors rounded-sm">Get Winter Coverage</Link>
        </div>
      </div>

      <section className="section-pad bg-parchment">
        <div className="wrap grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="copper-line mb-5" />
            <h2 className="section-title text-ink-900 mb-6">Winter Should Not<br/>Slow You Down.</h2>
            <p className="body-md text-ink-500 mb-4">With A Cut Above snow and ice management, your property is covered before, during, and after every storm. We use weather monitoring technology to track incoming storms around the clock.</p>
            <p className="body-md text-ink-500 mb-8">Our crews are dispatched based on pre-defined accumulation thresholds in your service agreement — so your property is plowed and safe before you or your employees arrive.</p>
            <Link href="/contact" className="btn-primary py-4 px-8">Get Winter Coverage</Link>
          </div>
          <div className="bg-ink-900 p-10">
            <div className="space-y-8">
              {[{ v: "24/7", l: "Storm monitoring & dispatch" }, { v: "10+", l: "Winters of commercial experience" }, { v: "100%", l: "Fully insured coverage" }].map(s => (
                <div key={s.v} className="border-b border-white/10 pb-8 last:border-0 last:pb-0">
                  <p className="font-display text-5xl text-copper-400 leading-none">{s.v}</p>
                  <p className="text-white/50 text-sm mt-2">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-ink-900">
        <div className="wrap grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {[
            { icon: "🚜", title: "Snow Plowing", desc: "Fast, thorough plowing of parking lots, access roads, and drive lanes." },
            { icon: "🧂", title: "Salting & De-Icing", desc: "Liquid and granular de-icing to eliminate ice and prevent bonding." },
            { icon: "🚶", title: "Sidewalk Clearing", desc: "Shoveling and snow blowing for walkways, entrances, stairs, and ADA paths." },
            { icon: "🌡️", title: "Pre-Treatment", desc: "Proactive liquid applications before a storm to prevent ice from bonding." },
            { icon: "📱", title: "Real-Time Monitoring", desc: "We track weather 24/7 and dispatch crews based on accumulation triggers." },
            { icon: "📋", title: "Seasonal Agreements", desc: "Per-event or seasonal contracts. Seasonal pricing provides budget certainty." },
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
          <h2 className="section-title text-ink-900 mb-5">Secure Your Winter Coverage.</h2>
          <p className="body-md text-ink-500 mb-8">Service agreements fill up fast. Contact us today for a free site review and seasonal pricing.</p>
          <Link href="/contact" className="btn-primary py-4 px-10">Get Winter Coverage</Link>
        </div>
      </section>
    </>
  );
}
