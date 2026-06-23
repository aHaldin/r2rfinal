import FinalCTA from "@/components/FinalCTA";

export const metadata = {
  title: "Case Studies | Road2Resolve",
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="bg-[#1B2D50] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Case Studies</h1>
          <p className="text-gray-300 text-lg">Real problems. Real systems. Real results.</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <div className="bg-[#F4F6FA] px-8 py-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-[#1B2D50]">Commercial Cleaning Company</h2>
            <p className="text-[#7C35BE] text-sm font-semibold mt-1">South East England · Operations Build</p>
          </div>
          <div className="px-8 py-8 space-y-10">
            <div>
              <p className="text-xs font-semibold tracking-widest text-[#7C35BE] uppercase mb-3">The Challenge</p>
              <p className="text-[#374151] leading-relaxed">
                Leads, appointments, bids, and new client onboarding were tracked across spreadsheets and email. Sales and ops worked in silos. The business was growing but the operational infrastructure wasn&apos;t keeping up. Things were being missed.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest text-[#7C35BE] uppercase mb-3">What We Built</p>
              <p className="text-[#374151] leading-relaxed">
                A five-stage monday.com pipeline covering the full customer journey — from first call through qualification, site survey, bid submission, and contract won, through to full ops handover. Each stage is automated: status changes trigger notifications, move items between boards, and prompt the next team to act. No manual copying, no WhatsApp handovers.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest text-[#7C35BE] uppercase mb-3">The Result</p>
              <p className="text-[#374151] leading-relaxed">
                Sales, operations, and management all work from the same system. New contracts reach the ops team the moment they&apos;re won. The business has full visibility of every live lead and active client in one place.
              </p>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-gray-200">
              {[
                { n: "5", label: "Pipeline stages automated" },
                { n: "0", label: "Manual handovers required" },
                { n: "1", label: "System for sales, ops & management" },
              ].map((s) => (
                <div key={s.label} className="text-center py-6 bg-[#F4F6FA] rounded-lg">
                  <p className="text-5xl font-bold text-[#7C35BE] mb-2">{s.n}</p>
                  <p className="text-sm text-[#374151]">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="bg-[#1B2D50] py-20 px-6 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Want results like this?</h2>
          <p className="text-gray-300 mb-8">Get in touch and we&apos;ll talk through what&apos;s possible for your business.</p>
          <a href="/contact" className="inline-block bg-white text-[#1B2D50] font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition-colors">
            Get in Touch
          </a>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
