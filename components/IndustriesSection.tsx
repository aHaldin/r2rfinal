import Link from "next/link";

export const industries = [
  { name: "Recruitment", outcome: "Candidate pipelines, automated screening and placement tracking that keeps consultants selling instead of updating records." },
  { name: "Marketing Agencies", outcome: "Client onboarding, campaign approvals and reporting packs that build themselves." },
  { name: "Professional Services", outcome: "Matter and project workflows, automated document generation and clean billing handoffs." },
  { name: "Construction", outcome: "Bid tracking, site paperwork and job handovers connected from first enquiry to final invoice." },
  { name: "Healthcare", outcome: "Referrals, bookings and patient administration handled with fewer manual touchpoints." },
  { name: "Finance", outcome: "Client onboarding, compliance checks and reporting automated with a full audit trail." },
  { name: "Property", outcome: "Enquiries, viewings, tenancy paperwork and maintenance jobs in one connected pipeline." },
  { name: "Hospitality", outcome: "Bookings, staff scheduling and supplier admin joined up across sites." },
  { name: "Media & Podcast Production", outcome: "Guest booking, production schedules, freelancer coordination and publishing workflows." },
  { name: "E-commerce", outcome: "Orders, stock, supplier comms and customer service connected and largely hands-off." },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="bg-[#F5F7F6] py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-bold section-label text-[#0FA284] uppercase mb-4">Industries</p>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#25272C] max-w-3xl mb-6">
          Different sectors. The same bottlenecks.
        </h2>
        <p className="text-[#374151] text-lg max-w-2xl mb-16 leading-relaxed">
          The admin that slows a recruitment firm down is not far off the admin slowing down a construction company. We have built for both.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((i) => (
            <Link
              key={i.name}
              href="/industries"
              className="card-lift group bg-gradient-to-b from-[#F5F7F6] to-white border border-gray-200/80 rounded-2xl p-7 block"
            >
              <h3 className="font-bold text-[#25272C] text-lg mb-2.5 tracking-tight group-hover:text-[#0FA284] transition-colors">{i.name}</h3>
              <p className="text-[#374151] text-[15px] leading-relaxed">{i.outcome}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
