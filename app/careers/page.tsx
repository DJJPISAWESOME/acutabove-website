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
    location: "Mendon, MA (Field-Based)",
    desc: "Join our residential and commercial landscape maintenance crews. You'll be responsible for mowing, edging, mulching, pruning, and general grounds care across a variety of properties throughout the season.",
    responsibilities: [
      "Operate mowers, trimmers, blowers, and other landscape equipment",
      "Maintain residential and commercial landscapes to company standards",
      "Apply mulch, edge beds, and perform pruning tasks",
      "Complete spring and fall cleanups",
      "Communicate professionally with customers when on-site",
      "Keep equipment clean and in good working condition",
    ],
    requirements: [
      "Valid driver's license (required)",
      "Reliable transportation to our yard in Mendon",
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
    location: "Mendon, MA (Field-Based)",
    desc: "Work alongside our hardscape team to build patios, retaining walls, walkways, fire pits, and outdoor living spaces. This is hands-on construction work with opportunity to grow your skills and income over time.",
    responsibilities: [
      "Install pavers, natural stone, retaining wall blocks, and related materials",
      "Prep and compact base materials to spec",
      "Assist with layout, grading, and drainage during installations",
      "Operate small equipment including plate compactors, mini excavators",
      "Maintain clean and organized job sites",
    ],
    requirements: [
      "Valid driver's license (required)",
      "1+ year of hardscape or construction experience preferred",
      "Ability to lift 75+ lbs and perform physical labor",
      "Comfortable operating small equipment or willingness to be trained",
      "Detail-oriented with a pride in quality workmanship",
    ],
  },
  {
    id: "snow-crew",
    title: "Snow Removal Crew Member",
    type: "Seasonal (Winter)",
    pay: "$18 – $26/hr",
    location: "Mendon, MA (Field-Based)",
    desc: "Winter crew positions available for snow plowing, salting, and shoveling at commercial properties. This is early morning, on-call work during storm events with great hourly pay.",
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
  { icon: "🌟", title: "Be Proud of Your Work", desc: "Create results you can see and be proud of every day" },
];

export default function CareersPage() {
  const [openJob, setOpenJob] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    position: "", experience: "", message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[420px] flex items-end">
        <Image
          src="https://static.wixstatic.com/media/3403b0_12a9965e10864beba8e58ce8c95dd5e1~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/landscaping.jpg"
          alt="Careers at A Cut Above"
          fill className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/40 to-transparent" />
        <div className="relative container-wide pb-16">
          <p className="eyebrow text-gold-400 mb-3">Join Our Team</p>
          <h1 className="display-lg text-white max-w-2xl">Careers at A Cut Above</h1>
          <p className="body-lg text-gray-200 max-w-xl mt-4">
            We're looking for hardworking, dedicated people to join our growing team. Competitive pay, great culture, and real opportunities to grow.
          </p>
        </div>
      </section>

      {/* Culture */}
      <section className="section-pad bg-white">
        <div className="container-wide grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="gold-line" />
            <p className="eyebrow text-gold-600 mb-3">Why A Cut Above</p>
            <h2 className="display-md text-charcoal mb-6">More Than a Job — A Career You Can Be Proud Of</h2>
            <p className="body-md text-gray-600 mb-4">
              At A Cut Above, we believe that great work starts with great people. We're a team of professionals who take pride in our craft, look out for one another, and show up every day ready to deliver the best possible results for our customers.
            </p>
            <p className="body-md text-gray-600 mb-4">
              Whether you're just starting out in landscaping or you're an experienced operator looking for a better fit, we offer competitive pay, consistent work, and a team that genuinely has your back.
            </p>
            <p className="body-md text-gray-600 mb-8">
              We're a locally rooted Massachusetts company with over a decade of experience — and we're growing. That means real opportunities to advance, take on more responsibility, and build a long-term career.
            </p>
          </div>
          <div className="relative h-[420px]">
            <Image
              src="https://static.wixstatic.com/media/3403b0_76c8f0a0de4a46298428e1c6d79e1f8e~mv2.jpg/v1/fill/w_900,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/excavation.jpg"
              alt="Team working"
              fill className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="section-pad bg-cream">
        <div className="container-wide">
          <div className="text-center mb-14">
            <span className="gold-line mx-auto" />
            <p className="eyebrow text-gold-600 mb-3">Employee Benefits</p>
            <h2 className="display-md text-charcoal">What We Offer</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map(p => (
              <div key={p.title} className="bg-white p-7 border border-gray-100">
                <span className="text-3xl block mb-4">{p.icon}</span>
                <h3 className="font-display text-charcoal text-lg mb-2">{p.title}</h3>
                <p className="text-gray-600 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <div className="text-center mb-14">
            <span className="gold-line mx-auto" />
            <p className="eyebrow text-gold-600 mb-3">Now Hiring</p>
            <h2 className="display-md text-charcoal">Open Positions</h2>
          </div>
          <div className="space-y-4">
            {openings.map(job => (
              <div key={job.id} className="border border-gray-200">
                <button
                  className="w-full p-6 text-left flex items-start justify-between gap-4 hover:bg-cream transition-colors"
                  onClick={() => setOpenJob(openJob === job.id ? null : job.id)}
                >
                  <div>
                    <h3 className="font-display text-charcoal text-lg">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 mt-2">
                      <span className="text-xs bg-pine-950 text-white px-3 py-1">{job.type}</span>
                      <span className="text-xs bg-gold-100 text-gold-800 px-3 py-1 font-semibold">{job.pay}</span>
                      <span className="text-xs text-gray-500">{job.location}</span>
                    </div>
                  </div>
                  <svg className={`w-5 h-5 text-gold-500 flex-shrink-0 mt-1 transition-transform ${openJob === job.id ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openJob === job.id && (
                  <div className="p-6 pt-0 border-t border-gray-100">
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">{job.desc}</p>
                    <div className="grid md:grid-cols-2 gap-8 mb-6">
                      <div>
                        <h4 className="font-display text-charcoal mb-3">Responsibilities</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map(r => (
                            <li key={r} className="flex items-start gap-2.5 text-sm text-gray-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0 mt-1.5" />{r}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-display text-charcoal mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {job.requirements.map(r => (
                            <li key={r} className="flex items-start gap-2.5 text-sm text-gray-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-pine-500 flex-shrink-0 mt-1.5" />{r}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <a href="#apply" className="btn-gold py-3 px-7 inline-flex">Apply for This Position</a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Form */}
      <section id="apply" className="section-pad bg-pine-950">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <span className="gold-line mx-auto" />
            <p className="eyebrow text-gold-400 mb-3">Apply Now</p>
            <h2 className="display-md text-white">Send Us Your Application</h2>
            <p className="text-gray-400 mt-4">Fill out the form below and we'll be in touch. We review all applications and respond promptly.</p>
          </div>

          {submitted ? (
            <div className="bg-white/5 border border-gold-400/30 p-10 text-center">
              <span className="text-5xl block mb-6">🌿</span>
              <h3 className="font-display text-white text-2xl mb-3">Application Received!</h3>
              <p className="text-gray-400">Thank you for your interest in joining the A Cut Above team. We'll review your application and reach out within 2–3 business days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="form-label text-gray-300">First Name *</label>
                  <input required name="firstName" value={formData.firstName} onChange={handleChange}
                    className="form-input bg-white/10 border-white/20 text-white placeholder-gray-500 focus:border-gold-400"
                    placeholder="John" />
                </div>
                <div>
                  <label className="form-label text-gray-300">Last Name *</label>
                  <input required name="lastName" value={formData.lastName} onChange={handleChange}
                    className="form-input bg-white/10 border-white/20 text-white placeholder-gray-500 focus:border-gold-400"
                    placeholder="Smith" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="form-label text-gray-300">Email Address *</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange}
                    className="form-input bg-white/10 border-white/20 text-white placeholder-gray-500 focus:border-gold-400"
                    placeholder="john@example.com" />
                </div>
                <div>
                  <label className="form-label text-gray-300">Phone Number *</label>
                  <input required type="tel" name="phone" value={formData.phone} onChange={handleChange}
                    className="form-input bg-white/10 border-white/20 text-white placeholder-gray-500 focus:border-gold-400"
                    placeholder="(508) 000-0000" />
                </div>
              </div>
              <div>
                <label className="form-label text-gray-300">Position Applying For *</label>
                <select required name="position" value={formData.position} onChange={handleChange}
                  className="form-input bg-white/10 border-white/20 text-white focus:border-gold-400">
                  <option value="" className="text-charcoal">Select a position...</option>
                  <option value="landscape-tech" className="text-charcoal">Landscape Maintenance Technician</option>
                  <option value="hardscape-installer" className="text-charcoal">Hardscape Installer</option>
                  <option value="snow-crew" className="text-charcoal">Snow Removal Crew Member</option>
                  <option value="other" className="text-charcoal">Other / General Interest</option>
                </select>
              </div>
              <div>
                <label className="form-label text-gray-300">Years of Relevant Experience</label>
                <select name="experience" value={formData.experience} onChange={handleChange}
                  className="form-input bg-white/10 border-white/20 text-white focus:border-gold-400">
                  <option value="" className="text-charcoal">Select...</option>
                  <option value="none" className="text-charcoal">No experience — willing to learn</option>
                  <option value="1" className="text-charcoal">Less than 1 year</option>
                  <option value="1-3" className="text-charcoal">1–3 years</option>
                  <option value="3-5" className="text-charcoal">3–5 years</option>
                  <option value="5+" className="text-charcoal">5+ years</option>
                </select>
              </div>
              <div>
                <label className="form-label text-gray-300">Tell Us About Yourself</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={5}
                  className="form-input bg-white/10 border-white/20 text-white placeholder-gray-500 focus:border-gold-400 resize-none"
                  placeholder="Share a bit about your background, availability, and why you're interested in joining the team..." />
              </div>
              <button type="submit" className="btn-gold w-full py-4 text-base">
                Submit Application
              </button>
              <p className="text-gray-500 text-xs text-center">We respond to all applications within 2–3 business days. For urgent inquiries, call <a href="tel:+17742916846" className="text-gold-400 hover:underline">(774) 291-6846</a>.</p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
