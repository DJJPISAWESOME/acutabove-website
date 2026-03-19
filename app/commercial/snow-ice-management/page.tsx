import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Snow & Ice Management",
  description: "24/7 commercial snow and ice management in Massachusetts. Snow plowing, salting, sidewalk clearing, and pre-treatment programs for businesses.",
};

const services = [
  {
    icon: "🚜",
    title: "Snow Plowing",
    desc: "Fast, thorough plowing of parking lots, access roads, and drive lanes. Our trucks are staged and ready before the storm hits.",
  },
  {
    icon: "🧂",
    title: "Salting & De-Icing",
    desc: "Liquid and granular de-icing applications to eliminate ice and prevent bonding. We select the right product for temperature and surface conditions.",
  },
  {
    icon: "🚶",
    title: "Sidewalk & Entrance Clearing",
    desc: "Hand shoveling and walk-behind snow blowers for walkways, entrances, stairs, and ADA-accessible paths — critical for liability and access.",
  },
  {
    icon: "🌡️",
    title: "Pre-Treatment Programs",
    desc: "Proactive liquid applications before a storm event to prevent ice from bonding and reduce the amount of material needed post-storm.",
  },
  {
    icon: "📱",
    title: "Real-Time Monitoring",
    desc: "We track weather forecasts around the clock and dispatch crews based on accumulation triggers set in your service agreement.",
  },
  {
    icon: "📋",
    title: "Seasonal Service Agreements",
    desc: "Per-event or seasonal contracts available. Seasonal agreements provide budget certainty regardless of how much it snows.",
  },
];

const triggers = [
  { amount: '1" Accumulation', action: "Standard plowing protocol initiated" },
  { amount: '2" Accumulation', action: "Full site plow + sand/salt application" },
  { amount: '4"+ Accumulation', action: "Multi-pass plowing + enhanced treatment" },
  { amount: "Ice/Freezing Rain", action: "Pre-treatment + post-event de-icing" },
];

export default function SnowIceManagementPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[62vh] min-h-[460px] flex items-end">
        <Image
          src="https://static.wixstatic.com/media/3403b0_f1e2d3c4b5a6f7e8d9c0b1a2f3e4d5c6~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/snow.jpg"
          alt="Snow and Ice Management"
          fill className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-transparent" />
        <div className="relative container-wide pb-16">
          <nav className="flex items-center gap-2 text-gray-400 text-sm mb-6">
            <Link href="/" className="hover:text-gold-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/commercial" className="hover:text-gold-400 transition-colors">Commercial</Link>
            <span>/</span>
            <span className="text-gold-400">Snow & Ice Management</span>
          </nav>
          <p className="eyebrow text-gold-400 mb-3">Commercial Services</p>
          <h1 className="display-lg text-white max-w-2xl">Snow & Ice Management</h1>
          <p className="body-lg text-gray-200 max-w-xl mt-4">
            24/7 winter coverage that keeps your business open, your property safe, and your liability protected — no matter what the storm brings.
          </p>
        </div>
      </section>

      {/* Urgency Banner */}
      <div className="bg-gold-400 py-4">
        <div className="container-wide flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-pine-950 font-semibold text-sm">❄️ Don't get caught off guard this winter — spots are limited. Secure your service agreement now.</p>
          <Link href="/contact" className="bg-pine-950 text-white py-2.5 px-6 text-sm font-semibold hover:bg-pine-800 transition-colors whitespace-nowrap">
            Get Winter Coverage
          </Link>
        </div>
      </div>

      {/* Intro */}
      <section className="section-pad bg-white">
        <div className="container-wide grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="gold-line" />
            <p className="eyebrow text-gold-600 mb-3">Always Ready</p>
            <h2 className="display-md text-charcoal mb-6">Winter Shouldn't Slow Your Business Down</h2>
            <p className="body-md text-gray-600 mb-4">
              A snow event doesn't have to mean a closed parking lot, dangerous walkways, or unhappy customers. With A Cut Above's commercial snow and ice management program, your property is covered before, during, and after every storm.
            </p>
            <p className="body-md text-gray-600 mb-4">
              We use weather monitoring technology to track incoming storms around the clock and dispatch crews based on pre-defined accumulation thresholds in your service agreement — so your property is plowed and safe before you or your employees arrive.
            </p>
            <p className="body-md text-gray-600 mb-8">
              Our winter crews are experienced, our equipment is maintained and inspected before each season, and our response times are among the best in the area.
            </p>
            <Link href="/contact" className="btn-gold py-4 px-8">Get a Winter Service Proposal</Link>
          </div>
          <div className="relative h-[460px]">
            <Image
              src="https://static.wixstatic.com/media/3403b0_f1e2d3c4b5a6f7e8d9c0b1a2f3e4d5c6~mv2.jpg/v1/fill/w_900,h_900,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/snow.jpg"
              alt="Snow plowing"
              fill className="object-cover"
            />
            <div className="absolute top-6 left-6 bg-pine-950/90 backdrop-blur-sm border border-gold-400/30 p-5">
              <p className="text-gold-400 font-display text-xl font-bold">24/7</p>
              <p className="text-white text-xs mt-1">Storm Response</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad bg-cream">
        <div className="container-wide">
          <div className="text-center mb-14">
            <span className="gold-line mx-auto" />
            <p className="eyebrow text-gold-600 mb-3">What's Covered</p>
            <h2 className="display-md text-charcoal">Snow & Ice Services</h2>
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

      {/* Response Protocol */}
      <section className="section-pad bg-pine-950">
        <div className="container-wide">
          <div className="text-center mb-14">
            <span className="gold-line mx-auto" />
            <p className="eyebrow text-gold-400 mb-3">Service Protocol</p>
            <h2 className="display-md text-white">Our Response Triggers</h2>
            <p className="body-md text-gray-400 mt-4 max-w-xl mx-auto">We establish clear service thresholds in your agreement so you always know exactly when and how we'll respond.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {triggers.map(t => (
              <div key={t.amount} className="bg-white/5 border border-white/10 p-6 flex items-start gap-4">
                <span className="text-2xl">❄️</span>
                <div>
                  <p className="font-display text-gold-400 text-lg mb-1">{t.amount}</p>
                  <p className="text-gray-300 text-sm">{t.action}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">Custom thresholds available. We build your agreement around your property's specific needs.</p>
        </div>
      </section>

      {/* Liability section */}
      <section className="section-pad bg-white">
        <div className="container-wide grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="gold-line" />
            <p className="eyebrow text-gold-600 mb-3">Protect Your Business</p>
            <h2 className="display-md text-charcoal mb-6">Liability Is Real. Don't Leave It to Chance.</h2>
            <p className="body-md text-gray-600 mb-4">
              Slip-and-fall claims on icy commercial properties are one of the most common — and expensive — forms of business liability in New England. Proper snow and ice management isn't just about convenience; it's about protecting your business, your employees, and your customers.
            </p>
            <p className="body-md text-gray-600 mb-8">
              A Cut Above carries comprehensive general liability insurance, and our service logs provide documentation of every treatment and visit — invaluable in the event of a liability claim.
            </p>
            <div className="space-y-4">
              {[
                "Full general liability insurance coverage",
                "Detailed service logs for every visit",
                "Licensed and trained winter crews",
                "MA Dig Safe compliance on all work",
              ].map(item => (
                <div key={item} className="flex items-center gap-3 text-gray-700 text-sm">
                  <svg className="w-5 h-5 text-gold-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-pine-950 p-10">
            <p className="eyebrow text-gold-400 mb-4">Quick Stats</p>
            <div className="space-y-8">
              {[
                { value: "24/7", label: "Storm monitoring & dispatch" },
                { value: "10+", label: "Winters of commercial experience" },
                { value: "100%", label: "Fully insured coverage" },
              ].map(s => (
                <div key={s.label} className="border-b border-white/10 pb-8 last:border-0 last:pb-0">
                  <p className="font-display text-gold-400 text-4xl">{s.value}</p>
                  <p className="text-gray-400 text-sm mt-2">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-gold-500">
        <div className="container-narrow text-center">
          <h2 className="display-md text-pine-950 mb-4">Secure Your Winter Coverage Now</h2>
          <p className="body-lg text-pine-900 mb-8">Winter service agreements fill up fast. Contact us today for a free site review and seasonal pricing proposal.</p>
          <Link href="/contact" className="btn-pine py-4 px-10 text-base">Get Winter Coverage</Link>
        </div>
      </section>
    </>
  );
}
