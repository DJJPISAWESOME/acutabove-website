import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "Hardscaping & Design", description: "Custom hardscaping and outdoor design in Massachusetts." };

const features = [
  { title: "Fire Pits & Fireplaces", img: "/images/hardscaping-5.jpg", desc: "Custom-built fire features that become the heart of your outdoor space." },
  { title: "Patios & Outdoor Living", img: "/images/hardscaping-hero.jpg", desc: "Expand your living space with a beautifully crafted patio using premium materials." },
  { title: "Retaining Walls", img: "/images/hardscaping-6.jpg", desc: "Structural and decorative walls that manage slope and add beauty to your landscape." },
  { title: "Outdoor Kitchens", img: "/images/hardscaping-2.jpg", desc: "Fully equipped outdoor kitchens built to rival your indoor setup." },
  { title: "Walkways & Steps", img: "/images/hardscaping-3.jpg", desc: "Welcoming paths and custom steps crafted from natural stone or premium pavers." },
  { title: "Custom Borders", img: "/images/hardscaping-4.jpg", desc: "Crisp stone borders that define beds, pathways, and lawn areas with precision." },
];

export default function Page() {
  return (
    <>
      <section className="relative h-[65vh] min-h-[500px] flex items-end bg-ink-950">
        <Image src="/images/hardscaping-hero.jpg" alt="Hardscaping" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/40 to-transparent" />
        <div className="relative wrap pb-16">
          <nav className="flex gap-2 text-xs text-white/40 mb-5">
            <Link href="/" className="hover:text-copper-400 transition-colors">Home</Link><span>/</span>
            <Link href="/residential" className="hover:text-copper-400 transition-colors">Residential</Link><span>/</span>
            <span className="text-copper-400">Hardscaping & Design</span>
          </nav>
          <h1 className="section-title text-white">Hardscaping<br/>& Design.</h1>
          <p className="body-lg text-white/60 max-w-xl mt-4">Structures as beautiful as they are durable — built to last a lifetime.</p>
        </div>
      </section>

      <section className="section-pad bg-parchment">
        <div className="wrap grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="copper-line mb-5" />
            <p className="label text-copper-500 mb-4">Craftsmanship You Can See</p>
            <h2 className="section-title text-ink-900 mb-6">Outdoor Living,<br/>Elevated.</h2>
            <p className="body-md text-ink-500 mb-4">Great hardscaping is about more than laying stone. It is about understanding how people use a space and building something that will stand the test of time.</p>
            <p className="body-md text-ink-500 mb-8">Our design team works closely with each homeowner to bring their vision to life with precision craftsmanship and premium materials.</p>
            <Link href="/contact" className="btn-primary py-4 px-8">Start Your Design Consultation</Link>
          </div>
          <div className="relative h-[500px]">
            <Image src="/images/hardscaping-2.jpg" alt="Hardscape patio" fill className="object-cover" />
            <div className="absolute bottom-6 left-6 bg-copper-500 p-5">
              <p className="font-display text-4xl text-white leading-none">500+</p>
              <p className="text-xs font-heading text-white/80 tracking-widest uppercase mt-1">Projects Completed</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="wrap">
          <div className="text-center mb-14">
            <span className="copper-line mx-auto mb-5" />
            <h2 className="section-title text-ink-900">What We Build.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(f => (
              <div key={f.title} className="group overflow-hidden bg-parchment">
                <div className="relative h-52 overflow-hidden">
                  <Image src={f.img} alt={f.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-ink-900 text-lg font-semibold mb-2">{f.title}</h3>
                  <p className="text-ink-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-copper-500">
        <div className="wrap-narrow text-center">
          <h2 className="section-title text-white mb-5">Build Something Beautiful.</h2>
          <p className="body-md text-white/80 mb-8">Contact us for a free design consultation and detailed estimate.</p>
          <Link href="/contact" className="btn-ink py-4 px-10">Book Free Consultation</Link>
        </div>
      </section>
    </>
  );
}
