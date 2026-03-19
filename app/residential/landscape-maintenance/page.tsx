import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "Landscape Maintenance", description: "Professional residential landscape maintenance in Massachusetts." };

export default function Page() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[460px] flex items-end bg-ink-900">
        <Image src="/images/landscape-maint-3.jpg" alt="Landscape Maintenance" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/88 via-ink-950/40 to-transparent" />
        <div className="relative wrap pb-16">
          <nav className="flex gap-2 text-xs text-white/40 mb-5">
            <Link href="/" className="hover:text-copper-400 transition-colors">Home</Link><span>/</span>
            <Link href="/residential" className="hover:text-copper-400 transition-colors">Residential</Link><span>/</span>
            <span className="text-copper-400">Landscape Maintenance</span>
          </nav>
          <p className="label text-copper-400 mb-3">Residential Services</p>
          <h1 className="page-title text-white">Landscape<br/>Maintenance.</h1>
        </div>
      </section>

      <section className="section-pad bg-parchment">
        <div className="wrap grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="copper-line mb-5" />
            <p className="label text-copper-500 mb-4">Consistent Excellence</p>
            <h2 className="section-title text-ink-900 mb-6">A Beautiful Lawn Starts Here.</h2>
            <p className="body-md text-ink-500 mb-4">A well-maintained landscape takes consistent attention and professional expertise. Our crews treat your property with the same care they would give their own.</p>
            <p className="body-md text-ink-500 mb-8">We schedule around your routine, communicate clearly, and deliver results you can see from the curb every single visit.</p>
            <Link href="/contact" className="btn-primary py-4 px-8">Get a Free Quote</Link>
          </div>
          <div className="relative h-[440px]">
            <Image src="/images/lawn-mower.jpg" alt="Lawn care" fill className="object-cover" />
            <div className="relative h-[440px]">
              <div className="absolute -bottom-6 -left-6 bg-copper-500 p-5 z-10">
                <p className="font-display text-4xl text-white leading-none">10+</p>
                <p className="text-xs font-heading text-white/80 tracking-widest uppercase mt-1">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-ink-900">
        <div className="wrap">
          <div className="text-center mb-14">
            <span className="copper-line mx-auto mb-5" />
            <p className="label text-copper-400 mb-3">What Is Included</p>
            <h2 className="page-title text-white">Our Services.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {[
              { icon: "🌿", title: "Lawn Mowing & Edging", desc: "Consistent, precise cuts with clean edging along all beds, walkways, and driveways." },
              { icon: "🍂", title: "Spring & Fall Cleanups", desc: "We clear debris, leaves, and dead material so your property looks sharp heading into every season." },
              { icon: "🌱", title: "Mulching & Bed Care", desc: "Fresh mulch, weeded beds, and clean edges that make your landscape pop." },
              { icon: "✂️", title: "Pruning & Trimming", desc: "Properly timed pruning keeps shrubs and ornamentals healthy and beautifully shaped." },
              { icon: "🍃", title: "Leaf Removal", desc: "Thorough fall cleanups to protect your lawn and leave your property spotless." },
              { icon: "🌸", title: "Seasonal Plantings", desc: "Seasonal color installations that refresh your curb appeal and thrive all season long." },
            ].map(s => (
              <div key={s.title} className="bg-ink-900 p-8 hover:bg-ink-800 transition-colors">
                <span className="text-3xl block mb-4">{s.icon}</span>
                <h3 className="font-heading text-white text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <Image src="/images/landscape-maint-2.jpeg" alt="Landscape maintenance" fill className="object-cover" />
        <div className="absolute inset-0 bg-ink-900/78" />
        <div className="relative wrap-narrow text-center">
          <h2 className="section-title text-white mb-6">Start Your Maintenance Plan.</h2>
          <p className="body-md text-white/55 mb-8">Free on-site consultation. We will walk your property and build a custom plan around your exact needs.</p>
          <Link href="/contact" className="btn-primary py-4 px-10">Schedule Your Free Visit</Link>
        </div>
      </section>
    </>
  );
}
