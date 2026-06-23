import Button from "./Button";

export default function CaseStudyTeaser() {
  return (
    <section className="bg-[#1B2D50] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold tracking-widest text-[#7C35BE] uppercase mb-3">Recent Work</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Commercial Cleaning Company — South East England
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <div>
            <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3">The Challenge</p>
            <p className="text-gray-300 leading-relaxed">
              Leads, appointments, bids, and new client onboarding were tracked across spreadsheets and email. Sales and ops worked in silos. Nothing moved automatically.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3">What We Built & The Result</p>
            <p className="text-gray-300 leading-relaxed">
              A five-stage monday.com pipeline — from first call to ops handover — fully automated. One status change moves a lead through the entire process without anyone copying and pasting a thing. Sales, operations, and management now work from the same system.
            </p>
          </div>
        </div>
        <Button href="/case-studies" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1B2D50]">
          Read the full case study
        </Button>
      </div>
    </section>
  );
}
