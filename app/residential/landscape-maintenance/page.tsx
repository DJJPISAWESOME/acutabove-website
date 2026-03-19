import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Landscape Maintenance",
  description: "Professional residential landscape maintenance services in Massachusetts. Lawn care, mulching, pruning, seasonal cleanups and more.",
};

const services = [
  {
    icon: "🌿",
    title: "Lawn Mowing & Edging",
    desc: "Consistent, precise cuts that keep your lawn looking manicured. We edge along beds, walkways, and driveways for a clean, finished look every visit.",
  },
  {
    icon: "🍂",
    title: "Spring & Fall Cleanups",
    desc: "Start and end every season right. We clear debris, leaves, and dead plant material so your property looks fresh and is ready for what's ahead.",
  },
  {
    icon: "🌱",
    title: "Mulching & Bed Maintenance",
    desc: "Fresh mulch refreshes the look of your beds while retaining moisture and suppressing weeds. We edge, weed, and dress beds to perfection.",
  },
  {
    icon: "✂️",
    title: "Pruning & Shrub Trimming",
    desc: "Properly timed pruning keeps shrubs, hedges, and ornamental plants healthy and beautifully shaped throughout the growing season.",
  },
  {
    icon: "🍃",
    title: "Leaf Removal",
    desc: "We provide thorough leaf cleanup in the fall to protect your lawn and ensure a clean, tidy property heading into winter.",
  },
  {
    icon: "🌸",
    title: "Seasonal Plantings",
    desc: "Refresh your curb appeal with seasonal color. We source and install annuals and perennials that thrive in your specific microclimate.",
  },
];

const packages = [
  {
    name: "Basic Care",
    ideal: "Smaller properties, minimal beds",
    includes: ["Weekly lawn mowing", "Edging along hardscape", "Grass clipping cleanup", "Monthly site inspection"],
  },
  {
    name: "Full Maintenance",
    ideal: "Most residential properties",
    includes: ["Everything in Basic", "Bed weeding & maintenance", "Mulch application (2x/year)", "Pruning & trimming", "Spring & fall cleanup"],
    featured: true,
  },
  {
    name: "Premium Package",
    ideal: "Larger estates & luxury properties",
    includes: ["Everything in Full", "Seasonal color plantings", "Fertilization program", "Pest & disease monitoring", "Priority scheduling"],
  },
];

export default function LandscapeMaintenancePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[440px] flex items-end">
        <Image
          src="https://static.wixstatic.com/media/3403b0_12a9965e10864beba8e58ce8c95dd5e1~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/landscaping.jpg"
          alt="Landscape Maintenance"
          fill className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/40 to-transparent" />
        <div className="relative container-wide pb-16">
          <nav className="flex items-center gap-2 text-gray-400 text-sm mb-6">
            <Link href="/" className="hover:text-gold-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/residential" className="hover:text-gold-400 transition-colors">Residential</Link>
            <span>/</span>
            <span className="text-gold-400">Landscape Maintenance</span>
          </nav>
          <p className="eyebrow text-gold-400 mb-3">Residential Services</p>
          <h1 className="display-lg text-white max-w-2xl">Landscape Maintenance</h1>
          <p className="body-lg text-gray-200 max-w-xl mt-4">
            Reliable, professional care that keeps your property looking its absolute best — every week, every season.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-pad bg-white">
        <div className="container-wide grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="gold-line" />
            <p className="eyebrow text-gold-600 mb-3">Consistent Excellence</p>
            <h2 className="display-md text-charcoal mb-6">A Well-Kept Lawn Doesn't Happen by Accident</h2>
            <p className="body-md text-gray-600 mb-4">
              A beautiful, well-maintained landscape takes consistent attention and professional expertise. At A Cut Above, our maintenance crews are trained to treat your property with the same care they'd give their own.
            </p>
            <p className="body-md text-gray-600 mb-8">
              We schedule around your routine, communicate clearly, and deliver results you can see from the curb. Whether you need weekly mowing or a full seasonal program, we customize our services to match your lawn's specific needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-gold py-4 px-8">Get a Free Quote</Link>
              <Link href="/residential" className="btn-outline-dark py-4 px-8">All Residential Services</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-[260px]">
              <Image
                src="https://static.wixstatic.com/media/3403b0_12a9965e10864beba8e58ce8c95dd5e1~mv2.jpg/v1/fill/w_600,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/landscaping.jpg"
                alt="Lawn care"
                fill className="object-cover"
              />
            </div>
            <div className="relative h-[260px] mt-8">
              <Image
                src="https://static.wixstatic.com/media/3403b0_b86eb3805c674dc3b08dd7d7d26a1c92~mv2.jpg/v1/fill/w_600,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/patio.jpg"
                alt="Beautiful yard"
                fill className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-pad bg-cream">
        <div className="container-wide">
          <div className="text-center mb-14">
            <span className="gold-line mx-auto" />
            <p className="eyebrow text-gold-600 mb-3">What's Included</p>
            <h2 className="display-md text-charcoal">Our Maintenance Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-white p-8 border border-gray-100 hover:border-gold-300 transition-colors">
                <span className="text-3xl block mb-4">{s.icon}</span>
                <h3 className="font-display text-lg text-charcoal mb-3">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <div className="text-center mb-14">
            <span className="gold-line mx-auto" />
            <p className="eyebrow text-gold-600 mb-3">Service Plans</p>
            <h2 className="display-md text-charcoal">Choose Your Maintenance Plan</h2>
            <p className="body-md text-gray-500 mt-4 max-w-xl mx-auto">Every property is different. We offer three maintenance tiers — or we can build a fully custom plan around your exact needs.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div key={pkg.name} className={`p-8 border-2 relative ${pkg.featured ? "border-gold-400 bg-pine-950 text-white" : "border-gray-200 bg-white"}`}>
                {pkg.featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold-400 text-pine-950 text-xs font-bold px-4 py-1 tracking-widest uppercase">Most Popular</span>
                )}
                <h3 className={`font-display text-xl mb-1 ${pkg.featured ? "text-white" : "text-charcoal"}`}>{pkg.name}</h3>
                <p className={`text-sm mb-6 ${pkg.featured ? "text-gray-400" : "text-gray-500"}`}>Ideal for: {pkg.ideal}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.includes.map(item => (
                    <li key={item} className={`flex items-start gap-3 text-sm ${pkg.featured ? "text-gray-300" : "text-gray-700"}`}>
                      <svg className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`w-full text-center py-3 px-6 text-sm font-semibold tracking-wide transition-colors block ${pkg.featured ? "bg-gold-400 text-pine-950 hover:bg-gold-300" : "border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white"}`}>
                  Get a Quote
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">All plans include a free on-site consultation. Pricing varies by property size and scope.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-pine-950">
        <div className="container-narrow text-center">
          <span className="gold-line mx-auto" />
          <h2 className="display-md text-white mb-4 mt-6">Let's Build Your Maintenance Plan</h2>
          <p className="body-lg text-gray-400 mb-8">Contact us for a free walkthrough and custom quote. No pressure, no obligation — just expert advice for your property.</p>
          <Link href="/contact" className="btn-gold py-4 px-10">Schedule Your Free Visit</Link>
        </div>
      </section>
    </>
  );
}
