import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commercial Property Maintenance",
  description: "Year-round commercial property maintenance programs in Massachusetts. Lawn care, seasonal cleanups, mulching, pruning, and seasonal color for businesses.",
};

const seasons = [
  {
    name: "Spring",
    icon: "🌸",
    services: [
      "Spring cleanup & debris removal",
      "Turf fertilization & pre-emergent weed control",
      "Bed edging, re-mulching, and weeding",
      "Ornamental pruning & shrub shaping",
      "Annual color plantings installed",
      "Irrigation system activation & inspection",
    ],
  },
  {
    name: "Summer",
    icon: "☀️",
    services: [
      "Weekly lawn mowing & edging",
      "Ongoing bed maintenance & weeding",
      "Deadheading & plant care",
      "Supplemental fertilization",
      "Pest & disease monitoring",
      "Irrigation adjustments",
    ],
  },
  {
    name: "Fall",
    icon: "🍂",
    services: [
      "Fall color plantings installed",
      "Leaf removal & property cleanup",
      "Lawn overseeding & fall fertilization",
      "Shrub & ornamental pruning",
      "Bed preparation for winter",
      "Irrigation winterization",
    ],
  },
  {
    name: "Winter",
    icon: "❄️",
    services: [
      "24/7 snow & ice monitoring",
      "Snow plowing & removal",
      "Salting & de-icing treatments",
      "Sidewalk & entrance clearing",
      "Post-storm inspection & cleanup",
      "Damage assessments",
    ],
  },
];

const benefits = [
  { title: "Single Point of Contact", desc: "One dedicated account manager who knows your property and answers your calls." },
  { title: "Consistent Crews", desc: "The same experienced team visits your property, building familiarity and accountability." },
  { title: "Detailed Service Reports", desc: "Know exactly what was done on every visit with transparent reporting." },
  { title: "Flexible Contracting", desc: "Month-to-month or annual contracts — whatever works best for your operation." },
  { title: "Fully Insured", desc: "Complete general liability and workers' comp coverage on every job." },
  { title: "Emergency Response", desc: "Priority availability for storm events, unexpected issues, and urgent property needs." },
];

export default function PropertyMaintenancePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[440px] flex items-end">
        <Image
          src="https://static.wixstatic.com/media/3403b0_12a9965e10864beba8e58ce8c95dd5e1~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/landscaping.jpg"
          alt="Commercial Property Maintenance"
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
            <span className="text-gold-400">Property Maintenance</span>
          </nav>
          <p className="eyebrow text-gold-400 mb-3">Commercial Services</p>
          <h1 className="display-lg text-white max-w-2xl">Commercial Property Maintenance</h1>
          <p className="body-lg text-gray-200 max-w-xl mt-4">
            Comprehensive, year-round grounds maintenance programs that keep your commercial property looking sharp in every season.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-pad bg-white">
        <div className="container-wide grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="gold-line" />
            <p className="eyebrow text-gold-600 mb-3">Reliable & Professional</p>
            <h2 className="display-md text-charcoal mb-6">Grounds Management You Can Count On</h2>
            <p className="body-md text-gray-600 mb-4">
              Managing a commercial property means juggling dozens of priorities. Your grounds shouldn't be one of them. Our managed maintenance programs take the worry out of property upkeep — we handle the scheduling, the labor, and the quality control so you don't have to.
            </p>
            <p className="body-md text-gray-600 mb-8">
              Whether you manage a single office building or a multi-site portfolio, we can build a custom program that covers everything your property needs, delivered consistently and professionally throughout the year.
            </p>
            <Link href="/contact" className="btn-gold py-4 px-8">Request a Commercial Proposal</Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-[250px]">
              <Image src="https://static.wixstatic.com/media/3403b0_12a9965e10864beba8e58ce8c95dd5e1~mv2.jpg/v1/fill/w_600,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/landscaping.jpg" alt="Property maintenance" fill className="object-cover" />
            </div>
            <div className="relative h-[250px] mt-8">
              <Image src="https://static.wixstatic.com/media/3403b0_b86eb3805c674dc3b08dd7d7d26a1c92~mv2.jpg/v1/fill/w_600,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/patio.jpg" alt="Commercial grounds" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal breakdown */}
      <section className="section-pad bg-cream">
        <div className="container-wide">
          <div className="text-center mb-14">
            <span className="gold-line mx-auto" />
            <p className="eyebrow text-gold-600 mb-3">Year-Round Program</p>
            <h2 className="display-md text-charcoal">Service By Season</h2>
            <p className="body-md text-gray-500 mt-4 max-w-xl mx-auto">Our comprehensive programs adapt to each season's demands, ensuring your property always looks its best.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasons.map((season) => (
              <div key={season.name} className="bg-white border border-gray-100 p-7">
                <span className="text-3xl block mb-3">{season.icon}</span>
                <h3 className="font-display text-xl text-charcoal mb-5 border-b border-gray-100 pb-4">{season.name}</h3>
                <ul className="space-y-2.5">
                  {season.services.map(s => (
                    <li key={s} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0 mt-1.5" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-pad bg-pine-950">
        <div className="container-wide">
          <div className="text-center mb-14">
            <span className="gold-line mx-auto" />
            <p className="eyebrow text-gold-400 mb-3">Partnership Benefits</p>
            <h2 className="display-md text-white">What Makes Us Different</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(b => (
              <div key={b.title} className="bg-white/5 hover:bg-white/10 transition-colors p-7 border border-white/10">
                <h3 className="font-display text-white text-lg mb-3">{b.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-gold-500">
        <div className="container-narrow text-center">
          <h2 className="display-md text-pine-950 mb-4">Let's Build Your Maintenance Program</h2>
          <p className="body-lg text-pine-900 mb-8">Contact us for a free property walkthrough and custom proposal. We'll assess your site and put together a program that fits your property and budget.</p>
          <Link href="/contact" className="btn-pine py-4 px-10 text-base">Get Your Free Proposal</Link>
        </div>
      </section>
    </>
  );
}
