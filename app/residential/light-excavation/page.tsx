import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Light Excavation",
  description: "Residential light excavation services in Massachusetts. Grading, site preparation, trenching, land clearing, and drainage solutions.",
};

const services = [
  {
    icon: "📐",
    title: "Grading & Leveling",
    desc: "Proper grading ensures water drains away from your home and creates a stable, level surface for any construction or landscaping project.",
  },
  {
    icon: "🏗️",
    title: "Site Preparation",
    desc: "Get your property ready for new construction, additions, pools, or major landscaping. We clear, grade, and prep so your project can start right.",
  },
  {
    icon: "🪚",
    title: "Trenching",
    desc: "Precise trenching for drainage pipes, irrigation systems, utility lines, and landscape borders — cut cleanly and backfilled properly.",
  },
  {
    icon: "🌊",
    title: "Drainage Solutions",
    desc: "Solve wet yard problems and prevent water intrusion with proper drainage installation including French drains, catch basins, and swales.",
  },
  {
    icon: "🌲",
    title: "Land Clearing",
    desc: "Clear brush, stumps, and vegetation to open up space for new landscaping, structures, or driveways. Debris hauled away clean.",
  },
  {
    icon: "🏠",
    title: "Foundation Prep",
    desc: "Excavation for shed bases, small additions, retaining walls, and other structures requiring a solid, properly graded foundation.",
  },
];

const equipment = [
  "Mini Excavator",
  "Skid Steer Loader",
  "Compact Track Loader",
  "Dump Trailer",
  "Vibratory Plate Compactor",
  "Laser Level System",
];

export default function LightExcavationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[440px] flex items-end">
        <Image
          src="https://static.wixstatic.com/media/3403b0_76c8f0a0de4a46298428e1c6d79e1f8e~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/excavation.jpg"
          alt="Light Excavation"
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
            <span className="text-gold-400">Light Excavation</span>
          </nav>
          <p className="eyebrow text-gold-400 mb-3">Residential Services</p>
          <h1 className="display-lg text-white max-w-2xl">Light Excavation</h1>
          <p className="body-lg text-gray-200 max-w-xl mt-4">
            Precision earthwork for residential properties. Grading, drainage, site prep, and more — done right the first time.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-pad bg-white">
        <div className="container-wide grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="gold-line" />
            <p className="eyebrow text-gold-600 mb-3">The Right Foundation</p>
            <h2 className="display-md text-charcoal mb-6">Every Great Landscape Starts Below Grade</h2>
            <p className="body-md text-gray-600 mb-4">
              Before any stone is laid, any lawn is seeded, or any structure is built — the ground beneath needs to be properly prepared. Our light excavation team provides the essential groundwork that makes every project perform the way it should.
            </p>
            <p className="body-md text-gray-600 mb-4">
              Whether you're dealing with poor drainage, an uneven yard, or need a cleared site for a new project, we bring the right equipment and expertise to get the job done cleanly and efficiently.
            </p>
            <p className="body-md text-gray-600 mb-8">
              We operate compact, residential-friendly equipment that can access tight yards without causing unnecessary damage to existing landscaping.
            </p>
            <Link href="/contact" className="btn-gold py-4 px-8">Get a Free Estimate</Link>
          </div>
          <div className="relative h-[480px]">
            <Image
              src="https://static.wixstatic.com/media/3403b0_76c8f0a0de4a46298428e1c6d79e1f8e~mv2.jpg/v1/fill/w_900,h_900,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/excavation.jpg"
              alt="Excavation work"
              fill className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad bg-cream">
        <div className="container-wide">
          <div className="text-center mb-14">
            <span className="gold-line mx-auto" />
            <p className="eyebrow text-gold-600 mb-3">What We Offer</p>
            <h2 className="display-md text-charcoal">Excavation Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-white p-8 border border-gray-100">
                <span className="text-3xl block mb-4">{s.icon}</span>
                <h3 className="font-display text-lg text-charcoal mb-3">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why professional excavation */}
      <section className="section-pad bg-pine-950">
        <div className="container-wide grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[400px]">
            <Image
              src="https://static.wixstatic.com/media/3403b0_76c8f0a0de4a46298428e1c6d79e1f8e~mv2.jpg/v1/fill/w_900,h_700,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/excavation.jpg"
              alt="Excavation equipment"
              fill className="object-cover"
            />
          </div>
          <div>
            <span className="gold-line" />
            <p className="eyebrow text-gold-400 mb-3">Why It Matters</p>
            <h2 className="display-md text-white mb-6">Don't Skip the Groundwork</h2>
            <div className="space-y-5">
              {[
                { title: "Proper Drainage", desc: "Incorrect grading causes water pooling, lawn damage, and can lead to foundation issues over time." },
                { title: "Structural Integrity", desc: "Hardscaping and structures built on improperly prepared ground settle, shift, and fail prematurely." },
                { title: "Licensed & Insured", desc: "We carry full liability coverage and adhere to MA Dig Safe requirements before any excavation begins." },
                { title: "Minimal Property Impact", desc: "Our compact equipment is chosen specifically for residential use — protecting your existing lawn and landscape." },
              ].map(item => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-gold-400 flex-shrink-0 mt-2" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="gold-line mx-auto" />
            <p className="eyebrow text-gold-600 mb-3">Our Equipment</p>
            <h2 className="display-md text-charcoal">The Right Tools for the Job</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {equipment.map(eq => (
              <div key={eq} className="bg-cream border border-gray-200 py-5 px-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-gold-400 flex-shrink-0" />
                <p className="text-charcoal font-medium text-sm">{eq}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-gold-500">
        <div className="container-narrow text-center">
          <h2 className="display-md text-pine-950 mb-4">Start Your Project Right</h2>
          <p className="body-lg text-pine-900 mb-8">Contact us for a free site evaluation and estimate. We'll walk the property, assess the scope, and give you a clear, honest plan.</p>
          <Link href="/contact" className="btn-pine py-4 px-10 text-base">Get Your Free Estimate</Link>
        </div>
      </section>
    </>
  );
}
