import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "Contact Us", description: "Request a free estimate or quote from A Cut Above in Massachusetts." };

export default function Page() {
  return (
    <>
      <section className="relative h-[45vh] min-h-[360px] flex items-end bg-ink-950">
        <Image src="/images/commercial-2.jpg" alt="Contact" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/92 via-ink-950/50 to-transparent" />
        <div className="relative wrap pb-14">
          <nav className="flex gap-2 text-xs text-white/40 mb-5">
            <Link href="/" className="hover:text-copper-400 transition-colors">Home</Link><span>/</span>
            <span className="text-copper-400">Contact</span>
          </nav>
          <h1 className="section-title text-white">Get In<br/>Touch.</h1>
          <p className="body-lg text-white/60 max-w-xl mt-4">Request a free estimate, ask a question, or get started with a service agreement.</p>
        </div>
      </section>

      <section className="section-pad bg-parchment">
        <div className="wrap grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div>
              <span className="copper-line mb-5" />
              <h2 className="section-title text-ink-900 mb-4">Let&apos;s Talk.</h2>
              <p className="body-md text-ink-500">Fill out the form and we&apos;ll get back to you within one business day. For urgent winter requests, call us directly.</p>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-copper-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <p className="font-heading font-semibold text-ink-900 text-sm">Phone</p>
                  <a href="tel:+17742916846" className="text-ink-500 text-sm hover:text-copper-500 transition-colors">(774) 291-6846</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-copper-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="font-heading font-semibold text-ink-900 text-sm">Email</p>
                  <a href="mailto:info@acutabovema.com" className="text-ink-500 text-sm hover:text-copper-500 transition-colors">info@acutabovema.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-copper-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <p className="font-heading font-semibold text-ink-900 text-sm">Service Area</p>
                  <p className="text-ink-500 text-sm">MetroWest &amp; Central Massachusetts</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-copper-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <p className="font-heading font-semibold text-ink-900 text-sm">Office Hours</p>
                  <p className="text-ink-500 text-sm">Mon–Fri: 7am – 6pm</p>
                  <p className="text-ink-500 text-sm">Sat: 8am – 2pm</p>
                  <p className="text-copper-500 text-xs font-semibold mt-1">24/7 Winter Emergency Response</p>
                </div>
              </div>
            </div>

            <div className="bg-ink-950 p-6">
              <p className="font-heading text-white font-semibold mb-2">Already a client?</p>
              <p className="text-white/50 text-sm mb-4">Log in to your client portal to view invoices, approve estimates, and manage your account.</p>
              <a href="https://clienthub.getjobber.com/client_hubs/642fdd6d-d859-4d28-83c3-314377e6f47d/login/new?source=share_login" target="_blank" rel="noopener noreferrer" className="btn-primary py-2 px-5 text-xs">Client Login</a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white shadow-sm">
              <div className="bg-ink-950 px-8 py-5">
                <h3 className="font-heading text-white font-semibold text-lg">Request a Free Estimate</h3>
                <p className="text-white/50 text-sm mt-1">Complete the form below and we&apos;ll prepare a custom proposal for your property.</p>
              </div>
              <div className="p-2">
                <iframe
                  src="https://clienthub.getjobber.com/client_hubs/642fdd6d-d859-4d28-83c3-314377e6f47d/public/work_request/new?source=social_media"
                  width="100%"
                  height="900"
                  frameBorder="0"
                  title="Request a Quote"
                  style={{ display: "block" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-ink-950">
        <div className="wrap">
          <div className="text-center mb-12">
            <span className="copper-line mx-auto mb-5" />
            <h2 className="section-title text-white mb-3">Our Service Areas</h2>
            <p className="body-md text-white/50">Proudly serving communities across MetroWest and Central Massachusetts</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {["Grafton", "Northborough", "Southborough", "Westborough", "Shrewsbury", "Milford", "Hopkinton", "Upton", "Franklin", "Northbridge", "Uxbridge", "Douglas", "Worcester", "Framingham", "Natick", "Millis"].map(town => (
              <span key={town} className="text-white/60 font-heading text-sm border border-white/10 px-4 py-2 hover:border-copper-500 hover:text-copper-400 transition-colors">{town}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
