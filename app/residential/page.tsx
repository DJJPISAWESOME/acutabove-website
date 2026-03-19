import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import WhyChooseUs from "@/components/WhyChooseUs";

export const metadata: Metadata = {
  title: "Residential Landscaping Services",
  description: "Expert residential landscaping, hardscaping, and excavation services across Massachusetts. Landscape maintenance, custom hardscaping, and light excavation.",
};

const services = [
  {
    href: "/residential/landscape-maintenance",
    title: "Landscape Maintenance",
    desc: "Year-round care to keep your property looking pristine every season. From lawn mowing and edging to mulching, pruning, and seasonal cleanups — we handle every detail.",
    img: "https://static.wixstatic.com/media/3403b0_12a9965e10864beba8e58ce8c95dd5e1~mv2.jpg/v1/fill/w_1200,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/landscaping.jpg",
    features: ["Lawn Mowing & Edging", "Mulching & Bed Maintenance", "Pruning & Trimming", "Spring & Fall Cleanups", "Leaf Removal"],
  },
  {
    href: "/residential/hardscaping-design",
    title: "Hardscaping & Design",
    desc: "Transform your outdoor living space with beautiful, lasting structures. Fire pits, patios, retaining walls, walkways, and outdoor kitchens built to stand the test of time.",
    img: "https://static.wixstatic.com/media/3403b0_b86eb3805c674dc3b08dd7d7d26a1c92~mv2.jpg/v1/fill/w_1200,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/patio.jpg",
    features: ["Patios & Walkways", "Retaining Walls", "Fire Pits & Fireplaces", "Outdoor Kitchens", "Custom Steps & Borders"],
  },
  {
    href: "/residential/light-excavation",
    title: "Light Excavation",
    desc: "Precision excavation services for residential properties — site preparation, grading, trenching, and more. The right foundation for every project.",
    img: "https://static.wixstatic.com/media/3403b0_76c8f0a0de4a46298428e1c6d79e1f8e~mv2.jpg/v1/fill/w_1200,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/excavation.jpg",
    features: ["Site Preparation", "Grading & Leveling", "Trenching", "Drainage Solutions", "Land Clearing"],
  },
];

export default function ResidentialPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[420px] flex items-end">
        <Image
          src="https://static.wixstatic.com/media/3403b0_12a9965e10864beba8e58ce8c95dd5e1~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/landscaping.jpg"
          alt="Residential Landscaping"
          fill className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />
        <div className="relative container-wide pb-16">
          <p className="eyebrow text-gold-400 mb-3">Services</p>
          <h1 className="display-lg text-white max-w-2xl">Residential Landscaping</h1>
          <p className="body-lg text-gray-200 max-w-xl mt-4">
            Exceptional outdoor living starts here. We combine design expertise with meticulous craftsmanship to create spaces you'll love for years.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-pad bg-cream">
        <div className="container-wide grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="gold-line" />
            <p className="eyebrow text-gold-600 mb-3">What We Do</p>
            <h2 className="display-md text-charcoal mb-6">Your Home Deserves the Best</h2>
            <p className="body-md text-gray-600 mb-4">
              At A Cut Above, we believe your yard is an extension of your home. Whether you need reliable weekly maintenance, a stunning new patio, or excavation work to prep a new addition — our team brings the same attention to detail and professionalism to every residential project.
            </p>
            <p className="body-md text-gray-600 mb-8">
              We serve homeowners across 15+ Massachusetts communities, with a deep knowledge of local landscapes, climate, and soil conditions that allows us to deliver superior results season after season.
            </p>
            <Link href="/contact" className="btn-gold py-4 px-8">
              Request a Free Estimate
            </Link>
          </div>
          <div className="relative h-[420px]">
            <Image
              src="https://static.wixstatic.com/media/3403b0_b86eb3805c674dc3b08dd7d7d26a1c92~mv2.jpg/v1/fill/w_900,h_700,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/patio.jpg"
              alt="Beautiful residential landscape"
              fill className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <div className="text-center mb-14">
            <span className="gold-line mx-auto" />
            <p className="eyebrow text-gold-600 mb-3">Our Services</p>
            <h2 className="display-md text-charcoal">Everything Your Property Needs</h2>
          </div>
          <div className="space-y-16">
            {services.map((svc, i) => (
              <div key={svc.href} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
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
                  <Link href={svc.href} className="btn-pine py-3 px-7">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />

      {/* CTA */}
      <section className="section-pad bg-gold-500">
        <div className="container-narrow text-center">
          <h2 className="display-md text-pine-950 mb-4">Ready to Transform Your Property?</h2>
          <p className="body-lg text-pine-900 mb-8">Get a free, no-obligation estimate from our team. We'll assess your needs and build a plan that fits your vision and budget.</p>
          <Link href="/contact" className="btn-pine py-4 px-10 text-base">
            Get Your Free Estimate
          </Link>
        </div>
      </section>
    </>
  );
}
