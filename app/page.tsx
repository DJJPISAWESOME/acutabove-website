import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhotoGallery from "@/components/PhotoGallery";

export const metadata: Metadata = {
  title: "A Cut Above Landscaping & Excavation | Massachusetts",
  description: "Expert residential and commercial landscaping, hardscaping, excavation and snow management across 15+ Massachusetts communities.",
};

const services = [
  { label: "Residential", title: "Landscape\nMaintenance", href: "/residential/landscape-maintenance", img: "/images/lawn-mower.jpg" },
  { label: "Residential", title: "Hardscaping\n& Design", href: "/residential/hardscaping-design", img: "/images/hardscaping-hero.jpg" },
  { label: "Residential", title: "Light\nExcavation", href: "/residential/light-excavation", img: "/images/light-excav.jpg" },
  { label: "Commercial", title: "Property\nMaintenance", href: "/commercial/property-maintenance", img: "/images/prop-maint-1.jpg" },
  { label: "Commercial", title: "Sitework &\nExcavation", href: "/commercial/sitework-excavation", img: "/images/commercial-5.jpg" },
  { label: "Commercial", title: "Snow & Ice\nManagement", href: "/commercial/snow-ice-management", img: "/images/snow.jpg" },
];

const gallery = [
  { src: "/images/hardscaping-hero.jpg", alt: "Nighttime pool patio with outdoor living space and landscape lighting" },
  { src: "/images/hardscaping-5.jpg", alt: "Custom pool patio with outdoor bar and paver surround" },
  { src: "/images/gallery-1.jpg", alt: "Stone patio with natural boulder retaining wall and plantings" },
  { src: "/images/gallery-3.jpg", alt: "Curved paver walkway with new plant and mulch bed installation" },
  { src: "/images/hardscaping-3.jpg", alt: "Custom fire pit with granite cap and built-in seating wall" },
  { src: "/images/hardscaping-4.jpg", alt: "Outdoor kitchen and bar with stone base and paver patio" },
  { src: "/images/lawn-mower.jpg", alt: "Professional lawn mowing service at a residential property" },
  { src: "/images/light-excav.jpg", alt: "Excavation and drainage work at a residential site" },
  { src: "/images/gallery-4.jpg", alt: "A Cut Above CAT excavator and dump truck on a light excavation job" },
  { src: "/images/gallery-5.jpg", alt: "Natural boulder retaining wall with crushed stone drainage" },
  { src: "/images/snow.jpg", alt: "Commercial snow removal with loader at night" },
  { src: "/images/prop-maint-1.jpg", alt: "Commercial property landscape maintenance" },
];

const stats = [
  { value: "10+", label: "Years in Business" },
  { value: "500+", label: "Projects Completed" },
  { value: "15+", label: "Communities Served" },
  { value: "24/7", label: "Winter Response" },
];

export default function HomePage() {
  return (
    <>
      {/* ══ HERO ══ */}
      <section className="relative min-h-[90vh] flex items-end bg-ink-900 pt-24">
        <Image
          src="/images/hero-excavator.jpg"
          alt="A Cut Above Landscaping & Excavation"
          fill className="object-cover object-center"
          priority quality={95}
        />
        {/* Overlay — charcoal, not green */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900/85 via-ink-900/55 to-ink-900/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent" />

        <div className="relative wrap pb-16 md:pb-22">
          <p className="label text-copper-400 mb-5 flex items-center gap-3">
            <span className="w-8 h-px bg-copper-400 inline-block" />
            Massachusetts&apos; Premier Landscaping
          </p>
          <h1 className="hero-xl text-white max-w-3xl leading-none mb-5">
            Crafting<br />
            <span className="text-copper-400">Outdoor</span><br />
            Excellence.
          </h1>
          <p className="body-lg text-white/65 max-w-xl mb-8">
            Expert residential and commercial landscape solutions — from design through excavation — built to last and crafted to impress.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">Request Free Estimate</Link>
            <Link href="/residential" className="btn-outline-light">Explore Services</Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 pt-10 border-t border-white/15 max-w-2xl">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl text-copper-400 leading-none">{s.value}</p>
                <p className="text-white/50 text-xs mt-1 font-heading uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TRUST BAND ══ */}
      <div className="bg-ink-800 py-4 border-b border-white/5">
        <div className="wrap flex flex-wrap items-center justify-center gap-8 text-center">
          {["Licensed & Insured", "Free Estimates", "10+ Years Experience", "24/7 Winter Coverage"].map(t => (
            <div key={t} className="flex items-center gap-2 text-white/75">
              <svg className="w-4 h-4 flex-shrink-0 text-copper-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
              <span className="text-sm font-heading font-medium tracking-wide">{t}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ══ ABOUT ══ */}
      <section className="section-pad bg-white">
        <div className="wrap grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative h-[460px] lg:h-[520px] rounded-sm overflow-hidden">
            <Image src="/images/about-2.jpg" alt="A Cut Above team" fill className="object-cover" />
            <div className="absolute bottom-6 right-6 bg-copper-500 px-6 py-5 text-white shadow-lg">
              <p className="font-display text-4xl leading-none">500+</p>
              <p className="text-xs font-heading tracking-widest uppercase mt-1 text-white/80">Projects Completed</p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <span className="copper-line mb-5" />
            <p className="label text-copper-500 mb-3">Who We Are</p>
            <h2 className="section-title text-ink-900 mb-6">A Cut Above<br/>the Rest.</h2>
            <p className="body-md text-ink-600 mb-4">
              At A Cut Above, we believe your property deserves more than just maintenance — it deserves craftsmanship. For over a decade, we&apos;ve been the trusted choice for homeowners and businesses across Massachusetts.
            </p>
            <p className="body-md text-ink-600 mb-8">
              From weekly lawn maintenance to full commercial sitework and winter snow management, every project gets our full attention, the best materials, and a commitment to results that last.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/residential" className="btn-primary">Residential Services</Link>
              <Link href="/commercial" className="btn-outline-dark">Commercial Services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SERVICES GRID ══ */}
      <section className="section-pad bg-ink-900">
        <div className="wrap">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="copper-line mb-5" />
              <p className="label text-copper-400 mb-3">What We Do</p>
              <h2 className="section-title text-white">Our<br/>Services.</h2>
            </div>
            <p className="body-md text-white/45 max-w-sm md:text-right">Complete landscape and excavation solutions for residential and commercial properties across Massachusetts.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-1.5">
            {services.map((svc) => (
              <Link key={svc.href} href={svc.href} className="group relative h-64 overflow-hidden block">
                <Image src={svc.img} alt={svc.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/30 to-transparent" />
                <div className="absolute inset-0 bg-copper-500/0 group-hover:bg-copper-500/15 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 p-5">
                  <p className="text-[10px] font-heading font-semibold tracking-[0.35em] uppercase text-copper-400 mb-1">{svc.label}</p>
                  <h3 className="font-display text-2xl text-white leading-none whitespace-pre-line">{svc.title}</h3>
                  <span className="inline-flex items-center gap-1.5 mt-2.5 text-xs text-white/55 font-heading group-hover:text-copper-400 transition-colors">
                    Learn More <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PHOTO GALLERY ══ */}
      <section className="section-pad bg-parchment overflow-hidden">
        <div className="wrap mb-10">
          <span className="copper-line mb-5" />
          <p className="label text-copper-500 mb-3">Our Work</p>
          <h2 className="section-title text-ink-900">Proven<br/>Results.</h2>
          <p className="body-md text-ink-500 mt-3 max-w-lg">Click any photo to view it full size.</p>
        </div>
        <div className="wrap">
          <PhotoGallery images={gallery} />
        </div>
      </section>

      {/* ══ WHY US ══ */}
      <section className="section-pad bg-white">
        <div className="wrap">
          <div className="text-center mb-14">
            <span className="copper-line mx-auto mb-5" />
            <p className="label text-copper-500 mb-3">Why Choose Us</p>
            <h2 className="section-title text-ink-900">The A Cut Above<br/>Difference.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { n: "01", title: "Licensed & Insured", body: "Full general liability and workers' comp on every job. You're fully protected." },
              { n: "02", title: "Expert Crews", body: "Trained, professional crews who take pride in their work and show up on time." },
              { n: "03", title: "Transparent Pricing", body: "Free estimates, detailed proposals, and no hidden fees. Ever." },
              { n: "04", title: "Winter Ready", body: "24/7 storm monitoring and rapid response for commercial snow events." },
              { n: "05", title: "Locally Rooted", body: "We live and work here. We know the land, the climate, and the community." },
              { n: "06", title: "Satisfaction Guaranteed", body: "We don't consider a job done until you're completely satisfied." },
            ].map(item => (
              <div key={item.n} className="border border-ink-100 p-7 hover:border-copper-300 hover:shadow-sm transition-all group">
                <p className="font-display text-4xl text-copper-500/20 group-hover:text-copper-500/40 transition-colors leading-none mb-3">{item.n}</p>
                <h3 className="font-heading text-ink-900 text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-ink-500 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ QUOTE BREAK ══ */}
      <section className="relative h-[45vh] min-h-[320px] flex items-center">
        <Image src="/images/about-1.jpg" alt="Professional landscaping" fill className="object-cover" />
        <div className="absolute inset-0 bg-ink-900/78" />
        <div className="relative wrap text-center">
          <p className="font-display text-[clamp(30px,4.5vw,64px)] text-white uppercase leading-tight max-w-3xl mx-auto">
            &ldquo;Your Property is Our <span className="text-copper-400">Reputation.</span>&rdquo;
          </p>
          <p className="text-white/45 mt-3 font-heading text-sm">— A Cut Above Landscaping &amp; Excavation</p>
          <Link href="/contact" className="btn-primary mt-7 inline-flex">Request Your Free Estimate</Link>
        </div>
      </section>

      {/* ══ SERVICE AREAS ══ */}
      <div className="bg-parchment border-t border-stone py-7">
        <div className="wrap text-center">
          <p className="label text-ink-400 mb-3">Service Areas</p>
          <p className="text-ink-500 text-sm leading-loose font-heading">
            Franklin · Milford · Norfolk · Hopedale · Sherborn · Wrentham · Holliston · Bellingham · Dover · Medway · Millis · Medfield · Blackstone · Uxbridge
          </p>
        </div>
      </div>
    </>
  );
}
