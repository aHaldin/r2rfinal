import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FinalCTA from "@/components/FinalCTA";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Industries We Automate | Recruitment, Agencies, Construction & More",
  description:
    "AI and business automation for recruitment, marketing agencies, professional services, construction, healthcare, finance, property, hospitality, media and e-commerce businesses across the UK.",
  alternates: { canonical: "/industries" },
};

const industries = [
  { name: "Recruitment", pain: "Consultants spending more time updating records than talking to candidates.", build: "Candidate and client pipelines, automated screening and shortlisting, interview scheduling, placement tracking and automatic compliance chasing." },
  { name: "Marketing Agencies", pain: "Client onboarding, approvals and monthly reporting eating the delivery team alive.", build: "Automated onboarding, campaign and approval workflows, resource planning, and reporting packs that assemble and send themselves." },
  { name: "Professional Services", pain: "Matter admin, document production and billing handoffs done by hand.", build: "Matter and project workflows, AI document drafting and search, time capture, and clean handoffs into finance." },
  { name: "Construction", pain: "Enquiries, bids, site paperwork and job handovers scattered across email and spreadsheets.", build: "Bid tracking from first enquiry to award, site documentation, subcontractor coordination and automated job-to-invoice handover." },
  { name: "Healthcare", pain: "Referrals, bookings and patient administration repeated across multiple systems.", build: "Referral intake, appointment and reminder workflows, secure document handling and reporting — built with data protection front of mind." },
  { name: "Finance", pain: "Client onboarding and compliance checks that are manual, slow and hard to evidence.", build: "Automated onboarding and KYC chasing, document collection, approval workflows and reporting with a complete audit trail." },
  { name: "Property", pain: "Enquiries, viewings, tenancy paperwork and maintenance jobs living in different places.", build: "One connected pipeline from enquiry through viewing, offer, tenancy setup and ongoing maintenance requests." },
  { name: "Hospitality", pain: "Bookings, rotas and supplier admin duplicated across sites.", build: "Booking and enquiry automation, staff scheduling, supplier and stock workflows, and multi-site reporting in one dashboard." },
  { name: "Media & Podcast Production", pain: "Guest booking, freelancer coordination and publishing schedules run on memory and spreadsheets.", build: "Guest and freelancer booking systems, production pipelines, availability tracking, AI summaries and publishing workflows." },
  { name: "E-commerce", pain: "Orders, stock, supplier comms and customer service handled manually as volume grows.", build: "Order and fulfilment automation, stock and supplier alerts, AI-assisted customer service and consolidated performance reporting." },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Different sectors. The same bottlenecks."
        sub="The admin slowing down a recruitment firm is not far off the admin slowing down a construction company. Here is how automation lands in each."
      />

      <section className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto space-y-5">
          {industries.map((i) => (
            <div key={i.name} className="card-lift bg-gradient-to-r from-[#F5F7F6] to-white border border-gray-200/80 rounded-2xl p-8 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
              <h2 className="text-2xl font-extrabold tracking-tight text-[#25272C]">{i.name}</h2>
              <div>
                <p className="text-xs font-bold section-label uppercase text-[#0FA284] mb-2">The bottleneck</p>
                <p className="text-[#374151] leading-relaxed">{i.pain}</p>
              </div>
              <div>
                <p className="text-xs font-bold section-label uppercase text-[#0FA284] mb-2">What we build</p>
                <p className="text-[#374151] leading-relaxed">{i.build}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F5F7F6] py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#25272C] mb-4">
            Not on the list?
          </h2>
          <p className="text-[#374151] text-lg leading-relaxed mb-8">
            The sector matters less than the symptoms. If your business runs on spreadsheets, email chains and people remembering things, we can almost certainly help.
          </p>
          <Button href="/contact" variant="primary">Talk to an automation expert</Button>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
