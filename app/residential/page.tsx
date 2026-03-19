import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Residential Landscaping Services",
  description: "Expert residential landscaping, hardscaping & excavation in Massachusetts.",
};

const services = [
  { href: "/residential/landscape-maintenance", title: "Landscape Maintenance", img: "/images/lawn-mower.jpg", desc: "Year-round grounds care that keeps your property pristine. Mowing, mulching, pruning, seasonal cleanups, and more." },
  { href: "/residential/hardscaping-design", title: "Hardscaping & Design", img: "/images/hardscaping-hero.jpg", desc: "Custom patios, fire pits, retaining walls, walkways and outdoor kitchens built to last for decades." },
  { href: "/residential/light-excavation", title: "Light Excavation", img: "/images/light-excav.jpg", desc: "Site preparation, grading, drainage, and land clearing to lay the right foundation for every project." },
];

export default function ResidentialPage() {
  return (
    <>
      <section className="relative h-[65vh] min-h-[500px] flex items-end bg-ink-950">
        <Image src="/images/residential-hero.jpeg" alt="Residential Landscaping" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/40 to-transparent" />
        <div className="relative wrap pb-16">
          <p className="label text-copper-400 mb-3 flex items-center gap-3"><span className="w-8 h-px bg-copper-400"/>Services</p>
          <h1 className="section-title text-white mb-4">Residential<br/>Landscaping.</h1>
          <p className="body-lg text-white/60 max-w-xl">Exceptional outdoor living starts with exceptional craftsmanship.</p>
        </div>
      </section>

      <section className="section-pad bg-parchment">
        <div className="wrap">
          <div className="grid lg:grid-cols-3 gap-1">
            {services.map((svc) => (
              <div key={svc.href} className="group bg-white overflow-hidden">
                <div className="relative h-60 overflow-hidden">
                  <Image src={svc.img} alt={svc.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <h2 className="card-title text-ink-900 mb-3">{svc.title}</h2>
                  <p className="text-ink-500 text-sm leading-relaxed mb-6">{svc.desc}</p>
                  <Link href={svc.href} className="btn-primary py-3 px-6 text-xs">Learn More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-ink-900">
        <div className="wrap-narrow text-center">
          <span className="copper-line mx-auto mb-6" />
          <h2 className="section-title text-white mb-5">Ready to Transform<br/>Your Property?</h2>
          <p className="body-md text-white/50 mb-8">Free estimates with no pressure. We will walk your property and provide an honest, detailed plan.</p>
          <Link href="/contact" className="btn-primary py-4 px-10">Get Your Free Estimate</Link>
        </div>
      </section>
    </>
  );
}
