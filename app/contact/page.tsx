"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const serviceTypes = [
  "Landscape Maintenance",
  "Hardscaping & Design",
  "Light Excavation",
  "Commercial Property Maintenance",
  "Commercial Sitework & Excavation",
  "Snow & Ice Management",
  "General Inquiry",
];

const contactTimes = [
  "Morning (8am – 12pm)",
  "Afternoon (12pm – 4pm)",
  "Evening (4pm – 6pm)",
  "Anytime",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "",
    email: "", phone: "",
    address: "", city: "",
    serviceType: "", contactTime: "",
    projectDescription: "",
    howDidYouHear: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[360px] flex items-end">
        <Image
          src="https://static.wixstatic.com/media/3403b0_b86eb3805c674dc3b08dd7d7d26a1c92~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/patio.jpg"
          alt="Contact A Cut Above"
          fill className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-transparent" />
        <div className="relative container-wide pb-12">
          <p className="eyebrow text-gold-400 mb-3">Get in Touch</p>
          <h1 className="display-lg text-white">Contact Us</h1>
          <p className="body-lg text-gray-200 max-w-xl mt-3">
            Request a free estimate, ask a question, or tell us about your project. We'll be in touch within one business day.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="section-pad bg-cream">
        <div className="container-wide grid lg:grid-cols-3 gap-12">

          {/* Contact Info sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <span className="gold-line" />
              <p className="eyebrow text-gold-600 mb-3 mt-6">Reach Us Directly</p>
              <h2 className="display-sm text-charcoal mb-6">We'd Love to Hear From You</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                Our team is ready to help with your landscaping, hardscaping, excavation, or snow management needs. Fill out the form or reach us directly using the information below.
              </p>
            </div>

            <div className="space-y-5">
              <a href="tel:+17742916846" className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-gold-400 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-pine-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-0.5">Phone</p>
                  <p className="text-charcoal font-semibold group-hover:text-gold-600 transition-colors">(774) 291-6846</p>
                </div>
              </a>

              <a href="mailto:info@acutabovema.com" className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-gold-400 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-pine-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-0.5">Email</p>
                  <p className="text-charcoal font-semibold group-hover:text-gold-600 transition-colors">info@acutabovema.com</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold-400 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-pine-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-0.5">Business Hours</p>
                  <p className="text-charcoal font-semibold">Mon–Fri: 8:00 AM – 5:00 PM</p>
                  <p className="text-gray-500 text-sm">Weekends: Closed</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold-400 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-pine-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-0.5">Service Area</p>
                  <p className="text-charcoal font-semibold">Mendon, Milford & Surrounding</p>
                  <p className="text-gray-500 text-sm">15+ Massachusetts communities</p>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-pine-950 p-6">
              <h3 className="font-display text-white text-base mb-4 pb-3 border-b border-white/10">Communities We Serve</h3>
              <p className="text-gray-400 text-sm leading-loose">
                Mendon · Milford · Needham · Norfolk · Hopedale · Sherborn · Wrentham · Holliston · Bellingham · Dover · Medway · Millis · Franklin · Medfield · Blackstone
              </p>
              <p className="text-gray-500 text-xs mt-3">Not sure if we serve your area? Give us a call — we may still be able to help.</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-white border border-gray-200 p-12 text-center h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-gold-400 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-pine-950" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-display text-charcoal text-2xl mb-3">Message Received!</h3>
                <p className="text-gray-600 max-w-md">
                  Thank you for reaching out to A Cut Above. We've received your inquiry and will follow up within one business day. For urgent matters, call us at <a href="tel:+17742916846" className="text-gold-600 font-semibold">(774) 291-6846</a>.
                </p>
                <button onClick={() => { setSubmitted(false); setForm({ firstName: "", lastName: "", email: "", phone: "", address: "", city: "", serviceType: "", contactTime: "", projectDescription: "", howDidYouHear: "" }); }}
                  className="mt-8 btn-outline-dark py-3 px-7 text-sm">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white border border-gray-200 p-8 space-y-6">
                <h3 className="font-display text-charcoal text-xl mb-2">Request a Free Estimate</h3>
                <p className="text-gray-500 text-sm mb-6">Fill out the form below and we'll get back to you within one business day.</p>

                {/* Name */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="form-label">First Name *</label>
                    <input required name="firstName" value={form.firstName} onChange={handleChange}
                      className="form-input" placeholder="John" />
                  </div>
                  <div>
                    <label className="form-label">Last Name *</label>
                    <input required name="lastName" value={form.lastName} onChange={handleChange}
                      className="form-input" placeholder="Smith" />
                  </div>
                </div>

                {/* Contact */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="form-label">Email Address *</label>
                    <input required type="email" name="email" value={form.email} onChange={handleChange}
                      className="form-input" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="form-label">Phone Number *</label>
                    <input required type="tel" name="phone" value={form.phone} onChange={handleChange}
                      className="form-input" placeholder="(508) 000-0000" />
                  </div>
                </div>

                {/* Address */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="form-label">Property Address</label>
                    <input name="address" value={form.address} onChange={handleChange}
                      className="form-input" placeholder="123 Main St" />
                  </div>
                  <div>
                    <label className="form-label">City / Town *</label>
                    <input required name="city" value={form.city} onChange={handleChange}
                      className="form-input" placeholder="Mendon" />
                  </div>
                </div>

                {/* Service & Contact Time */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="form-label">Service Interested In *</label>
                    <select required name="serviceType" value={form.serviceType} onChange={handleChange} className="form-input">
                      <option value="">Select a service...</option>
                      {serviceTypes.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="form-label">Preferred Contact Time</label>
                    <select name="contactTime" value={form.contactTime} onChange={handleChange} className="form-input">
                      <option value="">Select a time...</option>
                      {contactTimes.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                {/* Project description */}
                <div>
                  <label className="form-label">Tell Us About Your Project *</label>
                  <textarea required name="projectDescription" value={form.projectDescription} onChange={handleChange}
                    rows={5} className="form-input resize-none"
                    placeholder="Describe your project or what services you're looking for. Include any relevant details about your property, timeline, or budget." />
                </div>

                {/* How did you hear */}
                <div>
                  <label className="form-label">How Did You Hear About Us?</label>
                  <select name="howDidYouHear" value={form.howDidYouHear} onChange={handleChange} className="form-input">
                    <option value="">Select...</option>
                    <option value="google">Google Search</option>
                    <option value="referral">Friend or Neighbor Referral</option>
                    <option value="social">Social Media</option>
                    <option value="signage">Truck / Yard Sign</option>
                    <option value="repeat">Returning Customer</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <button type="submit" className="btn-gold w-full py-4 text-base">
                  Submit Estimate Request
                </button>
                <p className="text-gray-400 text-xs text-center">
                  We respect your privacy and will never share your information. By submitting, you agree to be contacted by A Cut Above regarding your inquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map / CTA strip */}
      <section className="bg-pine-950 py-12">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-display text-xl">Prefer to call?</p>
            <p className="text-gray-400 text-sm mt-1">Our team is available Monday through Friday, 8am to 5pm.</p>
          </div>
          <a href="tel:+17742916846" className="btn-gold py-4 px-8 text-base">
            Call (774) 291-6846
          </a>
        </div>
      </section>
    </>
  );
}
