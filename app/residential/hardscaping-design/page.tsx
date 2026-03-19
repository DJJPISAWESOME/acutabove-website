import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hardscaping & Design",
  description: "Custom hardscaping and outdoor design in Massachusetts. Patios, fire pits, retaining walls, outdoor kitchens, walkways, and custom stonework.",
};

const features = [
  {
    icon: "🔥",
    title: "Fire Pits & Fireplaces",
    desc: "Custom-built fire pits and outdoor fireplaces that become the heart of your backyard. Natural stone, brick, or concrete block — designed for your space.",
    img: "https://static.wixstatic.com/media/3403b0_5a2c1f8a9e2d4b7c8f3e6d1a0b5c9e2f~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/firepit.jpg",
  },
  {
    icon: "🧱",
    title: "Patios & Outdoor Living",
    desc: "Expand your living space outdoors with a beautifully crafted patio. From simple bluestone to elaborate paver designs with built-in seating and lighting.",
    img: "https://static.wixstatic.com/media/3403b0_b86eb3805c674dc3b08dd7d7d26a1c92~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/patio.jpg",
  },
  {
    icon: "🏗️",
    title: "Retaining Walls",
    desc: "Functional and beautiful retaining walls that manage elevation changes, prevent erosion, and create usable flat space on sloped properties.",
    img: "https://static.wixstatic.com/media/3403b0_d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/wall.jpg",
  },
  {
    icon: "🍽️",
    title: "Outdoor Kitchens",
    desc: "Fully equipped outdoor kitchens with built-in grills, countertops, storage, and more. Entertain in style with a setup that rivals your indoor kitchen.",
    img: "https://static.wixstatic.com/media/3403b0_a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/kitchen.jpg",
  },
  {
    icon: "🚶",
    title: "Walkways & Steps",
    desc: "Welcoming walkways and custom steps that guide guests through your property with elegance and safety, crafted from natural stone or pavers.",
    img: "https://static.wixstatic.com/media/3403b0_9f8e7d6c5b4a3f2e1d0c9b8a7f6e5d4c~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/walkway.jpg",
  },
  {
    icon: "🪨",
    title: "Borders & Edging",
    desc: "Crisp stone borders and decorative edging that define garden beds, pathways, and lawn areas for a polished, intentional landscape aesthetic.",
    img: "https://static.wixstatic.com/media/3403b0_12a9965e10864beba8e58ce8c95dd5e1~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/landscaping.jpg",
  },
];

const process = [
  { step: "01", title: "Design Consultation", desc: "We meet on-site to discuss your vision, assess the space, and understand your goals and budget." },
  { step: "02", title: "Custom Proposal", desc: "You receive a detailed, transparent proposal with material options, timeline, and investment breakdown." },
  { step: "03", title: "Expert Installation", desc: "Our experienced crew executes the project with precision, keeping your property clean and the timeline on track." },
  { step: "04", title: "Final Walkthrough", desc: "We walk through the completed project with you and ensure every detail meets your expectations before we leave." },
];

export default function HardscapingDesignPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[65vh] min-h-[480px] flex items-end">
        <Image
          src="https://static.wixstatic.com/media/3403b0_b86eb3805c674dc3b08dd7d7d26a1c92~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/patio.jpg"
          alt="Hardscaping & Design"
          fill className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/40 to-transparent" />
        <div className="relative container-wide pb-16">
          <nav className="flex items-center gap-2 text-gray-400 text-sm mb-6">
            <Link href="/" className="hover:text-gold-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/residential" className="hover:text-gold-400 transition-colors">Residential</Link>
            <span>/</span>
            <span className="text-gold-400">Hardscaping & Design</span>
          </nav>
          <p className="eyebrow text-gold-400 mb-3">Residential Services</p>
          <h1 className="display-lg text-white max-w-2xl">Hardscaping & Design</h1>
          <p className="body-lg text-gray-200 max-w-xl mt-4">
            Outdoor spaces that are as beautiful as they are durable. Custom stonework, patios, fire features, and more — built to last a lifetime.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-pad bg-cream">
        <div className="container-wide grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="gold-line" />
            <p className="eyebrow text-gold-600 mb-3">Craftsmanship You Can See</p>
            <h2 className="display-md text-charcoal mb-6">Outdoor Living, Elevated</h2>
            <p className="body-md text-gray-600 mb-4">
              Great hardscaping is about more than laying stone. It's about understanding how people use a space, how it interacts with the existing landscape, and how to build something that will stand the test of time.
            </p>
            <p className="body-md text-gray-600 mb-8">
              Our design team works closely with each homeowner to understand their vision, then brings it to life with precision craftsmanship and premium materials. Every project — no matter the size — gets the same attention to detail.
            </p>
            <Link href="/contact" className="btn-gold py-4 px-8">Start Your Design Consultation</Link>
          </div>
          <div className="relative h-[460px]">
            <Image
              src="https://static.wixstatic.com/media/3403b0_b86eb3805c674dc3b08dd7d7d26a1c92~mv2.jpg/v1/fill/w_900,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/patio.jpg"
              alt="Beautiful hardscape patio"
              fill className="object-cover"
            />
            <div className="absolute bottom-6 left-6 bg-gold-400 p-5">
              <p className="text-pine-950 text-3xl font-display font-bold">500+</p>
              <p className="text-pine-900 text-sm font-medium mt-1">Hardscape Projects Completed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <div className="text-center mb-14">
            <span className="gold-line mx-auto" />
            <p className="eyebrow text-gold-600 mb-3">What We Build</p>
            <h2 className="display-md text-charcoal">Hardscaping Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="group">
                <div className="relative h-52 overflow-hidden mb-5">
                  <Image
                    src={f.img}
                    alt={f.title}
                    fill className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/20 transition-colors" />
                </div>
                <span className="text-2xl block mb-3">{f.icon}</span>
                <h3 className="font-display text-lg text-charcoal mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad bg-pine-950">
        <div className="container-wide">
          <div className="text-center mb-14">
            <span className="gold-line mx-auto" />
            <p className="eyebrow text-gold-400 mb-3">How It Works</p>
            <h2 className="display-md text-white">Our Simple Process</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((p) => (
              <div key={p.step} className="text-center">
                <div className="w-16 h-16 border-2 border-gold-400 flex items-center justify-center mx-auto mb-5">
                  <span className="font-display text-gold-400 text-xl">{p.step}</span>
                </div>
                <h3 className="font-display text-white text-lg mb-3">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="section-pad bg-cream">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="gold-line mx-auto" />
            <p className="eyebrow text-gold-600 mb-3">Premium Materials</p>
            <h2 className="display-md text-charcoal">We Work With the Best</h2>
            <p className="body-md text-gray-500 mt-4 max-w-xl mx-auto">We source high-quality materials suited to the New England climate — durable enough to handle our harsh winters and beautiful enough to last for decades.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {["Natural Stone", "Concrete Pavers", "Bluestone", "Brick", "Granite", "Fieldstone", "Flagstone", "Travertine"].map(m => (
              <div key={m} className="bg-white border border-gray-200 py-5 px-4">
                <p className="text-charcoal font-medium text-sm">{m}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-gold-500">
        <div className="container-narrow text-center">
          <h2 className="display-md text-pine-950 mb-4">Ready to Build Something Beautiful?</h2>
          <p className="body-lg text-pine-900 mb-8">Contact us for a free design consultation. We'll visit your property, discuss your ideas, and provide a detailed estimate.</p>
          <Link href="/contact" className="btn-pine py-4 px-10 text-base">Book Your Free Consultation</Link>
        </div>
      </section>
    </>
  );
}
