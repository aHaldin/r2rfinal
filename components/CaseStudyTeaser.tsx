import Button from "./Button";

export default function CaseStudyTeaser() {
  return (
    <section className="hero-glow text-white py-24 md:py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <p className="text-xs font-bold section-label text-[#B8F7E4] uppercase mb-4">Who we&apos;ve helped</p>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-16">Two businesses. Same problem. Both fixed.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="card-lift bg-white/[0.07] backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <p className="text-xs font-bold section-label text-[#B8F7E4] uppercase mb-3">Commercial Services · South East England</p>
            <p className="font-bold text-white text-xl mb-4 tracking-tight">Sales-to-ops pipeline, fully automated</p>
            <p className="text-gray-300 text-[15px] leading-relaxed">
              Five-stage monday.com system covering leads, bids, and client onboarding. One status change moves a deal through the entire process — no manual handovers.
            </p>
          </div>
          <div className="card-lift bg-white/[0.07] backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <p className="text-xs font-bold section-label text-[#B8F7E4] uppercase mb-3">UK Children&apos;s Charity · Non-profit</p>
            <p className="font-bold text-white text-xl mb-4 tracking-tight">100+ freelancers managed in one system</p>
            <p className="text-gray-300 text-[15px] leading-relaxed">
              Built from scratch to handle freelancer onboarding, event sign-ups, availability, and booking confirmations — replacing a sprawl of spreadsheets.
            </p>
          </div>
        </div>
        <Button href="/case-studies" variant="outline" className="!border-white/80 !text-white hover:!bg-white hover:!text-[#25272C] !border-2">
          See the full case studies
        </Button>
      </div>
    </section>
  );
}
