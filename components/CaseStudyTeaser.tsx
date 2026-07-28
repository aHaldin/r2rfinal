import Button from "./Button";

export default function CaseStudyTeaser() {
  return (
    <section className="bg-[#F5F7F6] py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-bold section-label text-[#0FA284] uppercase mb-4">Client work</p>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#25272C] mb-16">
          Two businesses. Same problem. Both fixed.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="card-lift bg-white border border-gray-200/80 rounded-2xl p-8">
            <p className="text-xs font-bold section-label text-[#0FA284] uppercase mb-3">Commercial Services · South East England</p>
            <p className="font-bold text-[#25272C] text-xl mb-4 tracking-tight">From enquiry to delivery, without a single manual handover</p>
            <p className="text-[#374151] text-[15px] leading-relaxed mb-5">
              A five-stage pipeline covering leads, site surveys, bids and client onboarding. One status change now moves a deal through the whole business — sales, operations and management all working from the same live picture.
            </p>
            <div className="flex flex-wrap gap-2">
              {["monday.com", "Cross-board automations", "Status workflows"].map((t) => (
                <span key={t} className="text-xs font-semibold text-[#25272C] bg-[#F5F7F6] border border-gray-200 rounded-lg px-2.5 py-1">{t}</span>
              ))}
            </div>
          </div>
          <div className="card-lift bg-white border border-gray-200/80 rounded-2xl p-8">
            <p className="text-xs font-bold section-label text-[#0FA284] uppercase mb-3">UK Children&apos;s Charity · Non-profit</p>
            <p className="font-bold text-[#25272C] text-xl mb-4 tracking-tight">100+ freelancers coordinated in one system</p>
            <p className="text-[#374151] text-[15px] leading-relaxed mb-5">
              Freelancer onboarding, event sign-ups, availability and booking confirmations rebuilt from scratch — replacing a sprawl of spreadsheets that was quietly breaking as the charity grew.
            </p>
            <div className="flex flex-wrap gap-2">
              {["monday.com", "Automations", "Forms"].map((t) => (
                <span key={t} className="text-xs font-semibold text-[#25272C] bg-[#F5F7F6] border border-gray-200 rounded-lg px-2.5 py-1">{t}</span>
              ))}
            </div>
          </div>
        </div>
        <Button href="/case-studies" variant="outline">Read the full case studies</Button>
      </div>
    </section>
  );
}
