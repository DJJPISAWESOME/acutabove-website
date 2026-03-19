import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "Commercial Property Maintenance", description: "Year-round commercial property maintenance in Massachusetts." };

export default function Page() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[460px] flex items-end bg-ink-900">
        <Image src="/images/prop-maint-1.jpg" alt="Property Maintenance" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/88 via-ink-950/40 to-transparent" />
        <div className="relative wrap pb-16">
          <nav className="flex gap-2 text-xs text-white/40 mb-5">
            <Link href="/" className="hover:text-copper-400 transition-colors">Home</Link><span>/</span>
            <Link href="/commercial" className="hover:text-copper-400 transition-colors">Commercial</Link><span>/</span>
            <span className="text-copper-400">Property Maintenance</span>
          </nav>
          <h1 className="page-title text-white">Property<br/>Maintenance.</h1>
        </div>
      </section>

      <section className="section-pad bg-parchment">
        <div className="wrap grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="copper-line mb-5" />
            <h2 className="section-title text-ink-900 mb-6">Grounds Management<br/>You Can Count On.</h2>
            <p className="body-md text-ink-500 mb-4">Managing a commercial property means juggling dozens of priorities. Your grounds should not be one of them. Our managed maintenance programs take the worry out of property upkeep.</p>
            <p className="body-md text-ink-500 mb-8">We handle the scheduling, the labor, and the quality control — so you receive consistent, professional results without the headaches.</p>
            <Link href="/contact" className="btn-primary py-4 px-8">Request a Proposal</Link>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="relative h-56"><Image src="/images/prop-maint-2.jpg" alt="Maintenance" fill className="object-cover" /></div>
            <div className="relative h-56 mt-8"><Image src="/images/prop-maint-3.jpeg" alt="Maintenance" fill className="object-cover" /></div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-ink-900">
        <div className="wrap">
          <div className="text-center mb-14">
            <span className="copper-line mx-auto mb-5" />
            <p className="label text-copper-400 mb-3">Year-Round Coverage</p>
            <h2 className="section-title text-white">Service By Season.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {[
              { name: "Spring", icon: "🌸", items: ["Spring cleanup & debris removal", "Turf fertilization", "Mulching & bed edging", "Shrub pruning", "Color plantings", "Irrigation startup"] },
              { name: "Summer", icon: "☀️", items: ["Weekly mowing & edging", "Ongoing bed maintenance", "Fertilization", "Pest monitoring", "Irrigation management", "Plant care"] },
              { name: "Fall", icon: "🍂", items: ["Leaf removal & cleanup", "Fall color plantings", "Lawn overseeding", "Shrub prep for winter", "Bed cleanup", "Irrigation winterization"] },
              { name: "Winter", icon: "❄️", items: ["24/7 storm monitoring", "Snow plowing & removal", "Salting & de-icing", "Sidewalk clearing", "Post-storm inspection", "Damage assessment"] },
            ].map(s => (
              <div key={s.name} className="bg-ink-900 p-7 hover:bg-ink-800 transition-colors">
                <span className="text-3xl block mb-3">{s.icon}</span>
                <h3 className="font-heading text-white text-lg font-semibold mb-4 pb-3 border-b border-white/10">{s.name}</h3>
                <ul className="space-y-2">
                  {s.items.map(i => <li key={i} className="flex items-start gap-2 text-xs text-white/55"><span className="w-1 h-1 rounded-full bg-copper-400 flex-shrink-0 mt-1.5"/>{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-parchment border-t border-stone">
        <div className="wrap-narrow text-center">
          <h2 className="section-title text-ink-900 mb-5">Build Your Maintenance Program.</h2>
          <p className="body-md text-ink-500 mb-8">Free property walkthrough and custom proposal.</p>
          <Link href="/contact" className="btn-primary py-4 px-10">Get Your Free Proposal</Link>
        </div>
      </section>
    </>
  );
}
