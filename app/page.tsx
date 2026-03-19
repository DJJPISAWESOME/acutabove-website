import Image from "next/image";
import Link from "next/link";
import WhyChooseUs from "@/components/WhyChooseUs";

const IMG = {
  hero: "https://static.wixstatic.com/media/3403b0_58e3687ab2d44828a47c78289ef85222~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_90,enc_avif,quality_auto/3403b0_58e3687ab2d44828a47c78289ef85222~mv2.jpg",
  about1: "https://static.wixstatic.com/media/3403b0_0a99be59a0fd49bb8aeeb3be5e70e4b7~mv2.jpg/v1/fill/w_800,h_1000,q_85,enc_avif,quality_auto/TV16.jpg",
  about2: "https://static.wixstatic.com/media/3403b0_bf4ec5c2bbf743cc83713e059c62a541~mv2.jpg/v1/fill/w_800,h_600,q_85,enc_avif,quality_auto/TV7.jpg",
  resHero: "https://static.wixstatic.com/media/3403b0_54eac26b7c784cd38fb5a5388846d270~mv2.jpg/v1/fill/w_900,h_700,q_85,enc_avif,quality_auto/100073625_2850407295076186_8790373208101486592_n.jpg",
  hardscape: "https://static.wixstatic.com/media/3403b0_3b6ec09ab26a4e87affd582f1666a68a~mv2.jpg/v1/fill/w_900,h_600,q_85,enc_avif,quality_auto/3403b0_3b6ec09ab26a4e87affd582f1666a68a~mv2.jpg",
  excavation: "https://static.wixstatic.com/media/3403b0_58e3687ab2d44828a47c78289ef85222~mv2.jpg/v1/fill/w_900,h_600,q_90,enc_avif,quality_auto/3403b0_58e3687ab2d44828a47c78289ef85222~mv2.jpg",
  comMaint: "https://static.wixstatic.com/media/3403b0_b2b0dd28a00e451b8f4e2768ed32a0b5~mv2.jpg/v1/fit/w_900,h_600,q_90,enc_avif,quality_auto/3403b0_b2b0dd28a00e451b8f4e2768ed32a0b5~mv2.jpg",
  sitework: "https://static.wixstatic.com/media/3403b0_0232438967ef4e11b35bde3ad9ca5ec4~mv2.jpg/v1/fit/w_900,h_600,q_90,enc_avif,quality_auto/3403b0_0232438967ef4e11b35bde3ad9ca5ec4~mv2.jpg",
  snow: "https://static.wixstatic.com/media/3403b0_309d6f14b9954e2ca4f24facda4873f1~mv2.jpg/v1/fit/w_900,h_600,q_90,enc_avif,quality_auto/3403b0_309d6f14b9954e2ca4f24facda4873f1~mv2.jpg",
  cta: "https://static.wixstatic.com/media/3403b0_d5501a4cb40c473389ff2193cb74feb9~mv2.jpg/v1/fill/w_1920,h_800,q_85,enc_avif,quality_auto/3403b0_d5501a4cb40c473389ff2193cb74feb9~mv2.jpg",
  gallery1: "https://static.wixstatic.com/media/3403b0_f5eb54e998c74a33a21db8b6c016b6ac~mv2.jpg/v1/fit/w_800,h_600,q_90,enc_avif,quality_auto/3403b0_f5eb54e998c74a33a21db8b6c016b6ac~mv2.jpg",
  gallery2: "https://static.wixstatic.com/media/3403b0_fd3b6f7d37e34205b9a9298ed01dff4a~mv2.jpg/v1/fill/w_800,h_600,q_85,enc_avif,quality_auto/282656881_4989579961158898_178547514176078595_n.jpg",
  gallery3: "https://static.wixstatic.com/media/3403b0_17824d279de94f9daa8dccfde25e1e29~mv2.jpg/v1/fill/w_800,h_600,q_85,enc_avif,quality_auto/IMG_1115.jpg",
};

const stats = [
  { n: "10+", label: "Years in Business" },
  { n: "500+", label: "Projects Completed" },
  { n: "15+", label: "Communities Served" },
  { n: "24/7", label: "Winter Response" },
];

const residentialServices = [
  { title: "Landscape Maintenance", href: "/residential/landscape-maintenance", img: IMG.resHero, desc: "Year-round mowing, edging, mulching, pruning, and seasonal cleanups." },
  { title: "Hardscaping & Design", href: "/residential/hardscaping-design", img: IMG.hardscape, desc: "Patios, fire pits, retaining walls, outdoor kitchens, and walkways." },
  { title: "Light Excavation Work", href: "/residential/light-excavation", img: IMG.excavation, desc: "Precise grading, trenching, and site prep for any residential project." },
];

const commercialServices = [
  { title: "Property Maintenance", href: "/commercial/property-maintenance", img: IMG.comMaint, desc: "Comprehensive four-season commercial landscape care." },
  { title: "Sitework & Excavation", href: "/commercial/sitework-excavation", img: IMG.sitework, desc: "Professional grading, utility work, and drainage for commercial sites." },
  { title: "Snow & Ice Management", href: "/commercial/snow-ice-management", img: IMG.snow, desc: "24/7 plowing, salting, and shoveling to keep your business open." },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative h-screen min-h-[700px] flex items-center">
        <Image src={IMG.hero} alt="Excavation work" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-pine-950/85 via-pine-950/60 to-pine-950/20" />
        <div className="relative z-10 container-wide">
          <div className="max-w-2xl">
            <p className="eyebrow text-gold-400 mb-5">Massachusetts&apos; Premier Landscaping</p>
            <h1 className="display-xl text-white mb-6">
              Crafting Outdoor{" "}
              <span className="italic text-gold-400">Excellence.</span>
            </h1>
            <p className="text-gray-200 text-lg leading-relaxed mb-10 max-w-xl">
              Expert residential and commercial landscape solutions — from design through excavation — built to last and crafted to impress across Massachusetts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-gold">Request Free Estimate</Link>
              <Link href="/residential" className="btn-outline-white">Explore Services</Link>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
          <div className="w-px h-14 bg-white/30 animate-pulse" />
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        </div>
      </section>

      {/* ── TRUST BAR ───────────────────────────────────────── */}
      <section className="bg-gold-500 py-4">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-2 text-white text-xs font-semibold tracking-widest uppercase">
            {["Licensed & Insured", "Free Estimates", "10+ Years Experience", "24/7 Winter Response"].map(t => (
              <span key={t} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-white/60" />{t}
              </span>
            ))}
          </div>
          <a href="tel:+17742916846" className="text-white text-sm font-bold tracking-wide hover:underline whitespace-nowrap">
            ☎ (774) 291-6846
          </a>
        </div>
      </section>

      {/* ── ABOUT ───────────────────────────────────────────── */}
      <section className="section-pad bg-cream">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images collage */}
          <div className="relative h-[520px]">
            <div className="absolute inset-0 right-16 overflow-hidden shadow-2xl">
              <Image src={IMG.about1} alt="Landscaping work" fill className="object-cover" />
            </div>
            <div className="absolute bottom-0 right-0 w-48 h-52 overflow-hidden shadow-xl border-4 border-cream">
              <Image src={IMG.about2} alt="Hardscaping project" fill className="object-cover" />
            </div>
            {/* Stat badge */}
            <div className="absolute top-6 -right-4 bg-pine-900 text-white px-6 py-4 shadow-lg">
              <p className="font-display text-4xl font-bold text-gold-400 leading-none">10+</p>
              <p className="text-xs text-gray-300 mt-1 tracking-wide uppercase">Years of Excellence</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="gold-line" />
            <p className="eyebrow mb-3">About A Cut Above</p>
            <h2 className="display-md text-charcoal mb-6">
              Dedicated to <span className="italic text-pine-800">Transforming</span> Outdoor Spaces
            </h2>
            <p className="body-lg mb-4">
              At A Cut Above Landscaping & Excavation, we&apos;re dedicated to transforming outdoor spaces into stunning landscapes — serving both residential and commercial clients across Massachusetts.
            </p>
            <p className="body-md mb-8">
              With more than a decade of industry experience, our skilled team collaborates closely with you from conceptual design through final installation, guaranteeing a seamless blend of beauty and functionality in every project.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-10">
              {stats.map(s => (
                <div key={s.label} className="bg-white p-5 border border-gray-100">
                  <p className="font-display text-3xl font-bold text-gold-500">{s.n}</p>
                  <p className="text-xs text-gray-500 tracking-wide uppercase mt-1">{s.label}</p>
                </div>
              ))}
            </div>
            <Link href="/contact" className="btn-pine">Start Your Project</Link>
          </div>
        </div>
      </section>

      {/* ── RESIDENTIAL SERVICES ────────────────────────────── */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="gold-line" />
              <p className="eyebrow mb-3">For Homeowners</p>
              <h2 className="display-md text-charcoal">Residential <span className="italic text-pine-800">Services</span></h2>
            </div>
            <Link href="/residential" className="btn-outline-dark self-start md:self-auto">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {residentialServices.map(s => (
              <Link key={s.href} href={s.href} className="service-card group">
                <div className="relative h-60 overflow-hidden">
                  <Image src={s.img} alt={s.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="img-overlay" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="font-display text-xl text-white">{s.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                  <span className="text-gold-500 text-xs font-semibold tracking-widest uppercase group-hover:text-gold-600 transition-colors">Learn More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMERCIAL SERVICES (dark) ───────────────────────── */}
      <section className="section-pad bg-pine-950">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="gold-line" />
              <p className="eyebrow text-gold-400 mb-3">For Businesses</p>
              <h2 className="display-md text-white">Commercial <span className="italic text-gold-400">Services</span></h2>
            </div>
            <Link href="/commercial" className="btn-outline-white self-start md:self-auto">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {commercialServices.map(s => (
              <Link key={s.href} href={s.href} className="group relative overflow-hidden">
                <div className="relative h-72 overflow-hidden">
                  <Image src={s.img} alt={s.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-pine-950/60 group-hover:bg-pine-950/40 transition-colors" />
                  <div className="absolute inset-0 flex flex-col justify-end p-7">
                    <h3 className="font-display text-xl text-white mb-2">{s.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">{s.desc}</p>
                    <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase">Learn More →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ROW ─────────────────────────────────────── */}
      <section className="section-pad bg-cream">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="gold-line mx-auto" />
            <p className="eyebrow mb-3">Our Work</p>
            <h2 className="display-md text-charcoal">Results That <span className="italic text-pine-800">Speak</span> for Themselves</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[IMG.gallery1, IMG.gallery2, IMG.gallery3, IMG.hardscape, IMG.about2, IMG.comMaint].map((src, i) => (
              <div key={i} className="relative h-52 md:h-72 overflow-hidden group">
                <Image src={src} alt={`Project ${i+1}`} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-pine-950/0 group-hover:bg-pine-950/20 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────── */}
      <WhyChooseUs />

      {/* ── CTA BANNER ───────────────────────────────────────── */}
      <section className="relative py-32 overflow-hidden">
        <Image src={IMG.cta} alt="CTA background" fill className="object-cover" />
        <div className="absolute inset-0 bg-pine-950/80" />
        <div className="relative z-10 container-narrow text-center">
          <span className="gold-line mx-auto" />
          <p className="eyebrow text-gold-400 mb-4">Ready to Begin?</p>
          <h2 className="display-lg text-white mb-6">
            Let&apos;s Create Your <span className="italic text-gold-400">Dream Landscape</span>
          </h2>
          <p className="text-gray-300 text-lg mb-10">
            Contact us today for a free, no-obligation estimate. We serve communities throughout Massachusetts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold">Get Your Free Estimate</Link>
            <a href="tel:+17742916846" className="btn-outline-white">Call (774) 291-6846</a>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ─────────────────────────────────────── */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="container-wide text-center">
          <p className="text-[10px] text-gray-400 tracking-[0.3em] uppercase mb-3">Proudly Serving</p>
          <p className="text-gray-500 text-sm">
            Mendon · Milford · Needham · Norfolk · Hopedale · Sherborn · Wrentham · Holliston · Bellingham · Dover · Medway · Millis · Franklin · Medfield · Blackstone
          </p>
        </div>
      </section>
    </>
  );
}
