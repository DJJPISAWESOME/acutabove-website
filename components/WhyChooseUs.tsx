const reasons = [
  { icon: "🛡️", title: "Fully Licensed & Insured", desc: "Complete peace of mind on every job — we carry full liability insurance and proper licensing." },
  { icon: "❄️", title: "Winter Ready", desc: "24/7 snow and ice management ensures your property stays safe and operational year-round." },
  { icon: "🌿", title: "Expert Landscape Designers", desc: "Work with qualified professionals who transform your vision into a stunning reality." },
  { icon: "📋", title: "Transparent Estimates", desc: "Honest quotes, clear communication, and no surprises — just straightforward service." },
  { icon: "⏱️", title: "On Time & On Budget", desc: "Our projects are completed on schedule and stay within the agreed budget, every time." },
  { icon: "📍", title: "Locally Rooted", desc: "A proudly local Massachusetts business with a deep understanding of the regional landscape." },
];

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-pine-950 text-white">
      <div className="container-wide">
        <div className="text-center mb-14">
          <span className="gold-line mx-auto" />
          <p className="eyebrow text-gold-400 mb-3">Why A Cut Above</p>
          <h2 className="display-md text-white">The Difference You Can See & Feel</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className="bg-white/5 hover:bg-white/10 transition-colors p-8 border border-white/10">
              <span className="text-3xl block mb-4">{r.icon}</span>
              <h3 className="font-display text-lg text-white mb-2">{r.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
