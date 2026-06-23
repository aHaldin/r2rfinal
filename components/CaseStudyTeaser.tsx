import Button from "./Button";

export default function CaseStudyTeaser() {
  return (
    <section className="bg-[#1B2D50] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold tracking-widest text-[#7C35BE] uppercase mb-3">Who we&apos;ve helped</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Two businesses. Same problem. Both fixed.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white/10 rounded-lg p-6">
            <p className="text-xs font-semibold tracking-widest text-[#7C35BE] uppercase mb-2">Commercial Services · South East England</p>
            <p className="font-bold text-white text-lg mb-3">Sales-to-ops pipeline, fully automated</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Five-stage monday.com system covering leads, bids, and client onboarding. One status change moves a deal through the entire process — no manual handovers.
            </p>
          </div>
          <div className="bg-white/10 rounded-lg p-6">
            <p className="text-xs font-semibold tracking-widest text-[#7C35BE] uppercase mb-2">UK Children&apos;s Charity · Non-profit</p>
            <p className="font-bold text-white text-lg mb-3">100+ freelancers managed in one system</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Built from scratch to handle freelancer onboarding, event sign-ups, availability, and booking confirmations — replacing a sprawl of spreadsheets.
            </p>
          </div>
        </div>
        <Button href="/case-studies" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1B2D50]">
          See the full case studies
        </Button>
      </div>
    </section>
  );
}
