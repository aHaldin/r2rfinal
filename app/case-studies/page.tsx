import FinalCTA from "@/components/FinalCTA";

export const metadata = {
  title: "Case Studies | Road2Resolve",
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="hero-glow text-white py-24 md:py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-5 animate-fade-up">Case Studies</h1>
          <p className="text-gray-300 text-lg md:text-xl animate-fade-up-1">Real problems. Real systems. Real results.</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-10">

        {/* Case study 1 */}
        <div className="card-lift bg-white border border-gray-200/80 rounded-3xl overflow-hidden shadow-md shadow-gray-200/60">
          <div className="bg-gradient-to-r from-[#F5F7F6] to-white px-8 md:px-10 py-7 border-b border-gray-200">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#25272C]">Commercial Cleaning Company</h2>
            <p className="text-[#0FA284] text-sm font-semibold mt-1">South East England · Operations Build</p>
          </div>
          <div className="px-8 md:px-10 py-10 space-y-10">
            <div>
              <p className="text-xs font-semibold tracking-widest text-[#0FA284] uppercase mb-3">The Challenge</p>
              <p className="text-[#374151] leading-relaxed">
                Leads, appointments, bids, and new client onboarding were tracked across spreadsheets and email. Sales and ops worked in silos. The business was growing but the operational infrastructure wasn&apos;t keeping up. Things were being missed.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest text-[#0FA284] uppercase mb-3">What We Built</p>
              <p className="text-[#374151] leading-relaxed">
                A five-stage monday.com pipeline covering the full customer journey — from first call through qualification, site survey, bid submission, and contract won, through to full ops handover. Each stage is automated: status changes trigger notifications, move items between boards, and prompt the next team to act. No manual copying, no WhatsApp handovers.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest text-[#0FA284] uppercase mb-3">The Result</p>
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
                <div key={s.label} className="text-center py-8 bg-gradient-to-b from-[#F5F7F6] to-white border border-gray-100 rounded-2xl">
                  <p className="text-5xl md:text-6xl font-extrabold bg-gradient-to-br from-[#0FA284] to-[#B8F7E4] bg-clip-text text-transparent mb-3">{s.n}</p>
                  <p className="text-sm text-[#374151]">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Case study 2 */}
        <div className="card-lift bg-white border border-gray-200/80 rounded-3xl overflow-hidden shadow-md shadow-gray-200/60">
          <div className="bg-gradient-to-r from-[#F5F7F6] to-white px-8 md:px-10 py-7 border-b border-gray-200">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#25272C]">UK Children&apos;s Charity</h2>
            <p className="text-[#0FA284] text-sm font-semibold mt-1">Non-profit · Full Operations Build</p>
          </div>
          <div className="px-8 md:px-10 py-10 space-y-10">
            <div>
              <p className="text-xs font-semibold tracking-widest text-[#0FA284] uppercase mb-3">The Challenge</p>
              <p className="text-[#374151] leading-relaxed">
                A charity bringing entertainers to seriously ill children in hospitals was running its entire operation through spreadsheets. Booking over 100 freelance entertainers, coordinating hospital visits, managing event sign-ups, and tracking availability — all of it stitched together manually. As the charity grew, the cracks became impossible to ignore. Things were being missed, double-booked, or simply lost in the noise.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest text-[#0FA284] uppercase mb-3">What We Built</p>
              <p className="text-[#374151] leading-relaxed">
                A monday.com system built from scratch to manage the full operational picture. Freelancer onboarding and profiles, event creation and sign-up workflows, availability tracking, and booking confirmations — all in one place. Automations handle the routine communications so the team can focus on the work that matters. No more spreadsheets, no more chasing people manually.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest text-[#0FA284] uppercase mb-3">The Result</p>
              <p className="text-[#374151] leading-relaxed">
                The charity now has a single system that manages everything from freelancer sign-up to event delivery. The team has full visibility of who&apos;s confirmed for what, when, and where — across all events and all entertainers. What used to take hours of manual coordination now happens in minutes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-gray-200">
              {[
                { n: "100+", label: "Freelancers managed in one system" },
                { n: "0", label: "Manual processes remaining" },
                { n: "1", label: "System for bookings, events & ops" },
              ].map((s) => (
                <div key={s.label} className="text-center py-8 bg-gradient-to-b from-[#F5F7F6] to-white border border-gray-100 rounded-2xl">
                  <p className="text-5xl md:text-6xl font-extrabold bg-gradient-to-br from-[#0FA284] to-[#B8F7E4] bg-clip-text text-transparent mb-3">{s.n}</p>
                  <p className="text-sm text-[#374151]">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <FinalCTA />
    </>
  );
}
