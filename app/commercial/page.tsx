import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import WhyChooseUs from "@/components/WhyChooseUs";

export const metadata: Metadata = {
  title: "Commercial Landscaping Services",
  description: "Professional commercial landscaping, property maintenance, sitework, excavation, and snow & ice management across Massachusetts.",
};

const services = [
  {
    href: "/commercial/property-maintenance",
    title: "Property Maintenance",
    desc: "Comprehensive year-round grounds maintenance programs for commercial properties. We keep your business looking sharp in every season with reliable, consistent service.",
    img: "https://static.wixstatic.com/media/3403b0_12a9965e10864beba8e58ce8c95dd5e1~mv2.jpg/v1/fill/w_1200,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/landscaping.jpg",
    features: ["Lawn Care & Mowing", "Seasonal Color Installations", "Mulching & Bed Programs", "Pruning & Ornamental Trimming", "Fertilization Programs"],
  },
  {
    href: "/commercial/sitework-excavation",
    title: "Sitework & Excavation",
    desc: "Full-scale commercial sitework from utility installation to mass grading. We handle large and complex excavation projects with the equipment and expertise to get it done right.",
    img: "https://static.wixstatic.com/media/3403b0_76c8f0a0de4a46298428e1c6d79e1f8e~mv2.jpg/v1/fill/w_1200,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/excavation.jpg",
    features: ["Grading & Earthwork", "Utility Trench Installation", "Stormwater Management", "Foundation Excavation", "Parking Lot Prep"],
  },
  {
    href: "/commercial/snow-ice-management",
    title: "Snow & Ice Management",
    desc: "Keep your business open and your liability low all winter long. Our 24/7 snow and ice management program ensures your property is safe and clear no matter what the forecast says.",
    img: "https://static.wixstatic.com/media/3403b0_f1e2d3c4b5a6f7e8d9c0b1a2f3e4d5c6~mv2.jpg/v1/fill/w_1200,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/snow.jpg",
    features: ["24/7 Snow Plowing", "Salting & De-Icing", "Sidewalk Shoveling", "Pre-Treatment Programs", "Ice Management Plans"],
  },
];

const industries = [
  { icon: "🏢", label: "Office Parks" },
  { icon: "🏬", label: "Retail Centers" },
  { icon: "🏭", label: "Industrial Properties" },
  { icon: "🏥", label: "Medical Facilities" },
  { icon: "🏘️", label: "HOA Communities" },
  { icon: "🏫", label: "Educational Campuses" },
];

export default function CommercialPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[460px] flex items-end">
        <Image
          src="https://static.wixstatic.com/media/3403b0_76c8f0a0de4a46298428e1c6d79e1f8e~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/excavation.jpg"
          alt="Commercial Landscaping"
          fill className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/40 to-transparent" />
        <div className="relative container-wide pb-16">
          <p className="eyebrow text-gold-400 mb-3">Commercial Services</p>
          <h1 className="display-lg text-white max-w-2xl">Commercial Landscaping</h1>
          <p className="body-lg text-gray-200 max-w-xl mt-4">
            Professional grounds management programs for businesses, institutions, and commercial properties across Massachusetts.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-pad bg-white">
        <div className="container-wide grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="gold-line" />
            <p className="eyebrow text-gold-600 mb-3">Your Commercial Partner</p>
            <h2 className="display-md text-charcoal mb-6">First Impressions Start at the Curb</h2>
            <p className="body-md text-gray-600 mb-4">
              Your property's exterior is the first thing clients, tenants, and employees see. A well-maintained commercial landscape communicates professionalism, attention to detail, and organizational pride.
            </p>
            <p className="body-md text-gray-600 mb-4">
              A Cut Above partners with property managers, facility directors, and business owners across Massachusetts to deliver reliable, high-quality commercial grounds services — on time, on budget, and without the headaches.
            </p>
            <p className="body-md text-gray-600 mb-8">
              We manage everything from weekly lawn maintenance programs to multi-phase commercial excavation projects, backed by full licensing, insurance, and over a decade of experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-gold py-4 px-8">Request a Commercial Proposal</Link>
              <Link href="/contact" className="btn-outline-dark py-4 px-8">Call (774) 291-6846</Link>
            </div>
          </div>
          <div className="relative h-[440px]">
            <Image
              src="https://static.wixstatic.com/media/3403b0_12a9965e10864beba8e58ce8c95dd5e1~mv2.jpg/v1/fill/w_900,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/landscaping.jpg"
              alt="Commercial property"
              fill className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-14 bg-cream">
        <div className="container-wide">
          <div className="text-center mb-10">
            <p className="eyebrow text-gold-600 mb-3">Industries We Serve</p>
            <h2 className="display-sm text-charcoal">Built for Your Business Type</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map(ind => (
              <div key={ind.label} className="bg-white border border-gray-200 p-6 text-center">
                <span className="text-3xl block mb-3">{ind.icon}</span>
                <p className="text-charcoal text-sm font-medium">{ind.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <div className="text-center mb-14">
            <span className="gold-line mx-auto" />
            <p className="eyebrow text-gold-600 mb-3">Our Services</p>
            <h2 className="display-md text-charcoal">Complete Commercial Solutions</h2>
          </div>
          <div className="space-y-16">
            {services.map((svc, i) => (
              <div key={svc.href} className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={`relative h-[380px] ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image src={svc.img} alt={svc.title} fill className="object-cover" />
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <h3 className="display-sm text-charcoal mb-4">{svc.title}</h3>
                  <p className="body-md text-gray-600 mb-6">{svc.desc}</p>
                  <ul className="space-y-2 mb-8">
                    {svc.features.map(f => (
                      <li key={f} className="flex items-center gap-3 text-gray-700 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href={svc.href} className="btn-pine py-3 px-7">Learn More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-pad bg-pine-950">
        <div className="container-wide grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { value: "10+", label: "Years Serving Businesses" },
            { value: "500+", label: "Commercial Projects" },
            { value: "15+", label: "MA Communities" },
            { value: "24/7", label: "Winter Emergency Response" },
          ].map(stat => (
            <div key={stat.label}>
              <p className="font-display text-4xl text-gold-400 mb-2">{stat.value}</p>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <WhyChooseUs />

      {/* CTA */}
      <section className="section-pad bg-gold-500">
        <div className="container-narrow text-center">
          <h2 className="display-md text-pine-950 mb-4">Ready for a Commercial Partner You Can Trust?</h2>
          <p className="body-lg text-pine-900 mb-8">Request a free commercial proposal. We'll assess your property and put together a custom maintenance or project plan that fits your needs and budget.</p>
          <Link href="/contact" className="btn-pine py-4 px-10 text-base">Get Your Commercial Proposal</Link>
        </div>
      </section>
    </>
  );
}
