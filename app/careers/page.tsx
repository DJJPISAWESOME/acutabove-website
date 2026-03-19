"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const openings = [
  {
    id: "landscape-tech",
    title: "Landscape Maintenance Technician",
    type: "Full-Time / Seasonal",
    pay: "$17 – $25/hr",
    location: "Franklin, MA (Field-Based)",
    desc: "Join our residential and commercial landscape maintenance crews. You'll be responsible for mowing, edging, mulching, pruning, and general grounds care across a variety of properties.",
    responsibilities: [
      "Operate mowers, trimmers, blowers, and other landscape equipment",
      "Maintain residential and commercial landscapes to company standards",
      "Apply mulch, edge beds, and perform pruning tasks",
      "Complete spring and fall cleanups",
      "Communicate professionally with customers when on-site",
    ],
    requirements: [
      "Valid driver's license (required)",
      "Reliable transportation to our yard in Franklin",
      "Physical ability to perform outdoor labor in all weather conditions",
      "Prior landscaping experience preferred but not required — we will train",
      "Strong work ethic and positive team attitude",
    ],
  },
  {
    id: "hardscape-installer",
    title: "Hardscape Installer",
    type: "Full-Time",
    pay: "$22 – $30/hr",
    location: "Franklin, MA (Field-Based)",
    desc: "Work alongside our hardscape team to build patios, retaining walls, walkways, fire pits, and outdoor living spaces. Hands-on construction work with real opportunities to grow.",
    responsibilities: [
      "Install pavers, natural stone, retaining wall blocks, and related materials",
      "Prep and compact base materials to spec",
      "Assist with layout, grading, and drainage during installations",
      "Operate small equipment including plate compactors and mini excavators",
      "Maintain clean and organized job sites",
    ],
    requirements: [
      "Valid driver's license (required)",
      "1+ year of hardscape or construction experience preferred",
      "Ability to lift 75+ lbs and perform physical labor",
      "Comfortable operating small equipment or willingness to be trained",
      "Detail-oriented with pride in quality workmanship",
    ],
  },
  {
    id: "snow-crew",
    title: "Snow Removal Crew Member",
    type: "Seasonal (Winter)",
    pay: "$18 – $26/hr",
    location: "Franklin, MA (Field-Based)",
    desc: "Winter crew positions available for snow plowing, salting, and shoveling at commercial properties. Early morning, on-call work during storm events with competitive hourly pay.",
    responsibilities: [
      "Operate snow plow trucks on assigned routes",
      "Apply sand/salt treatments to parking lots and walkways",
      "Hand shovel and snow blow sidewalks, stairs, and entrances",
      "Monitor storm conditions and respond as directed",
      "Complete accurate service logs after each event",
    ],
    requirements: [
      "Valid driver's license — CDL a plus but not required",
      "Availability for early morning and overnight storm response",
      "Prior plowing or snow removal experience preferred",
      "Reliable and able to work independently",
    ],
  },
];

const perks = [
  { icon: "💰", title: "Competitive Pay", desc: "$17–$30/hr based on role and experience" },
  { icon: "📈", title: "Growth Opportunities", desc: "We promote from within — many crew leads started in entry-level roles" },
  { icon: "🛠️", title: "Company Equipment", desc: "All tools, equipment, and uniforms provided" },
  { icon: "🤝", title: "Supportive Team", desc: "Work alongside experienced professionals who want you to succeed" },
  { icon: "📍", title: "Local Work", desc: "Work close to home in Massachusetts communities" },
  { icon: "🌟", title: "Pride in Your Work", desc: "Create real, visible results every single day" },
];

export default function CareersPage() {
  const [openJob, setOpenJob] = useState<string | null>(null);

  return (
    <>
      <section className="relative h-[55vh] min-h-[440px] flex items-end bg-ink-900">
        <Image src="/images/careers-hero.jpg" alt="Careers at A Cut Above" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/88 via-ink-950/45 to-transparent" />
        <div className="relative wrap pb-16">
          <nav className="flex gap-2 text-xs text-white/40 mb-5">
            <Link href="/" className="hover:text-copper-400 transition-colors">Home</Link><span>/</span>
            <span className="text-copper-400">Careers</span>
          </nav>
          <h1 className="section-title text-white">Join Our<br/>Team.</h1>
          <p className="body-lg text-white/60 max-w-xl mt-4">We&apos;re hiring hardworking people who take pride in their craft. Competitive pay, real growth, and a team that has your back.</p>
        </div>
      </section>

      <div className="bg-ink-800 border-b border-white/10 py-4">
        <div className="wrap flex flex-wrap justify-center gap-6">
          <span className="text-sm text-white/75 font-heading font-medium">Now hiring for spring — positions filling fast.</span>
          <a href="#apply" className="text-xs font-heading font-semibold text-white bg-copper-500 px-4 py-2 hover:bg-copper-600 transition-colors rounded-sm">Apply Today</a>
        </div>
      </div>

      <section className="section-pad bg-parchment">
        <div className="wrap grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="copper-line mb-5" />
            <h2 className="section-title text-ink-900 mb-6">More Than a Job —<br/>A Career to Be Proud Of.</h2>
            <p className="body-md text-ink-500 mb-4">At A Cut Above, great work starts with great people. We&apos;re a team of professionals who take pride in our craft, look out for one another, and show up every day ready to deliver results.</p>
            <p className="body-md text-ink-500 mb-8">Whether you&apos;re just starting out or you&apos;re an experienced operator looking for a better fit, we offer competitive pay, consistent work, and real opportunities to advance.</p>
          </div>
          <div className="relative h-[420px]">
            <Image src="/images/about-1.jpg" alt="Team at work" fill className="object-cover" />
            <div className="absolute bottom-6 right-6 bg-copper-500 p-5">
              <p className="font-display text-4xl text-white leading-none">10+</p>
              <p className="text-xs font-heading text-white/80 tracking-widest uppercase mt-1">Years in Business</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-ink-900">
        <div className="wrap">
          <div className="text-center mb-14">
            <span className="copper-line mx-auto mb-5" />
            <h2 className="section-title text-white">What We Offer.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {perks.map(p => (
              <div key={p.title} className="bg-ink-900 hover:bg-ink-800 transition-colors p-8">
                <span className="text-3xl block mb-4">{p.icon}</span>
                <h3 className="font-heading text-white text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-parchment">
        <div className="wrap">
          <div className="text-center mb-14">
            <span className="copper-line mx-auto mb-5" />
            <p className="label text-copper-500 mb-3">Now Hiring</p>
            <h2 className="section-title text-ink-900">Open Positions.</h2>
          </div>
          <div className="space-y-3">
            {openings.map(job => (
              <div key={job.id} className="bg-white border border-stone">
                <button
                  className="w-full p-6 text-left flex items-start justify-between gap-4 hover:bg-parchment transition-colors"
                  onClick={() => setOpenJob(openJob === job.id ? null : job.id)}
                >
                  <div>
                    <h3 className="font-heading text-ink-900 font-semibold text-lg">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 mt-2">
                      <span className="text-xs bg-ink-950 text-white px-3 py-1 font-heading">{job.type}</span>
                      <span className="text-xs bg-copper-500 text-white px-3 py-1 font-heading font-semibold">{job.pay}</span>
                      <span className="text-xs text-ink-500 font-heading">{job.location}</span>
                    </div>
                  </div>
                  <svg className={`w-5 h-5 text-copper-500 flex-shrink-0 mt-1 transition-transform ${openJob === job.id ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openJob === job.id && (
                  <div className="px-6 pb-6 border-t border-stone">
                    <p className="text-ink-500 text-sm leading-relaxed mt-5 mb-6">{job.desc}</p>
                    <div className="grid md:grid-cols-2 gap-8 mb-6">
                      <div>
                        <h4 className="font-heading text-ink-900 font-semibold mb-3 text-sm uppercase tracking-wider">Responsibilities</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map(r => (
                            <li key={r} className="flex items-start gap-2.5 text-sm text-ink-500">
                              <span className="w-1.5 h-1.5 rounded-full bg-copper-500 flex-shrink-0 mt-1.5" />{r}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-heading text-ink-900 font-semibold mb-3 text-sm uppercase tracking-wider">Requirements</h4>
                        <ul className="space-y-2">
                          {job.requirements.map(r => (
                            <li key={r} className="flex items-start gap-2.5 text-sm text-ink-500">
                              <span className="w-1.5 h-1.5 rounded-full bg-ink-900 flex-shrink-0 mt-1.5" />{r}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <a href="#apply" className="btn-primary py-3 px-7 inline-flex">Apply for This Position</a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="section-pad bg-ink-900">
        <div className="wrap-narrow">
          <div className="text-center mb-12">
            <span className="copper-line mx-auto mb-5" />
            <p className="label text-copper-400 mb-3">Apply Now</p>
            <h2 className="section-title text-white mb-4">Send Us Your Application.</h2>
            <p className="body-md text-white/50">Complete the form below and our team will be in touch within 2–3 business days.</p>
          </div>
          <div className="bg-white">
            <div className="bg-copper-500 px-8 py-5">
              <h3 className="font-heading text-white font-semibold text-lg">Job Application Form</h3>
              <p className="text-white/80 text-sm mt-1">We review every application and respond promptly.</p>
            </div>
            <div className="p-2">
              <iframe
                src="https://clienthub.getjobber.com/client_hubs/642fdd6d-d859-4d28-83c3-314377e6f47d/public/work_request/new?source=social_media"
                width="100%"
                height="900"
                frameBorder="0"
                title="Job Application"
                style={{ display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
