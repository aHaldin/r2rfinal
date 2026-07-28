import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Case Studies | Business Automation Results",
  description:
    "Real automation projects: a five-stage sales-to-operations pipeline for a commercial services business, and a booking system coordinating 100+ freelancers for a UK children's charity.",
  alternates: { canonical: "/case-studies" },
};

type CaseStudy = {
  client: string;
  meta: string;
  headline: string;
  challenge: string;
  solution: string;
  result: string;
  tools: string[];
  stats: { n: string; label: string }[];
  impact: string[];
};

const studies: CaseStudy[] = [
  {
    client: "Commercial Cleaning Company",
    meta: "South East England · Operations Build",
    headline: "From first enquiry to operational handover, without a single manual step",
    challenge:
      "Leads, appointments, bids and new client onboarding were tracked across spreadsheets and email. Sales and operations worked in silos — a contract could be won on Monday and reach the delivery team on Thursday, in a WhatsApp message. The business was growing, but the operational infrastructure was not keeping up, and things were being missed.",
    solution:
      "We mapped the full customer journey first, then built a five-stage pipeline covering first call, qualification, site survey, bid submission and contract won, through to complete operations handover. Each stage is automated: status changes trigger notifications, move items between boards and prompt the next team to act, so work moves through the business without anyone copying information from one place to another.",
    result:
      "Sales, operations and management now work from the same live system. New contracts reach the operations team the moment they are won, with the full history attached. The business has visibility of every live lead and active client in one place, and the handover that used to be the weakest point in the process now happens on its own.",
    tools: ["monday.com", "Cross-board automations", "Status-driven workflows", "Automated notifications"],
    stats: [
      { n: "5", label: "Pipeline stages fully automated" },
      { n: "0", label: "Manual handovers required" },
      { n: "1", label: "System for sales, ops & management" },
    ],
    impact: [
      "Contracts reach operations instantly instead of days later",
      "No re-keying between sales, bidding and delivery",
      "Management can see every live deal without asking anyone",
    ],
  },
  {
    client: "UK Children's Charity",
    meta: "Non-profit · Full Operations Build",
    headline: "100+ freelance entertainers coordinated in one system instead of a spreadsheet sprawl",
    challenge:
      "A charity that brings entertainers to seriously ill children in hospitals was running its entire operation on spreadsheets. Booking over 100 freelance entertainers, coordinating hospital visits, managing event sign-ups and tracking availability were all stitched together by hand. As the charity grew, the cracks became impossible to ignore — things were missed, double-booked, or simply lost in the noise.",
    solution:
      "We built a complete operational system from scratch: freelancer onboarding and profiles, event creation and sign-up workflows, availability tracking and booking confirmations, all in one place. Automations handle the routine communications — sign-up confirmations, reminders and status updates — so the team stopped chasing people manually and could focus on the work that actually matters.",
    result:
      "The charity now runs everything from freelancer sign-up through to event delivery in a single system. The team has full visibility of who is confirmed for what, when and where, across every event and every entertainer. Coordination that used to take hours of manual work now happens in minutes, and the system scales as the charity grows rather than straining against it.",
    tools: ["monday.com", "Automated workflows", "Forms & sign-ups", "Availability tracking"],
    stats: [
      { n: "100+", label: "Freelancers managed in one system" },
      { n: "0", label: "Manual processes remaining" },
      { n: "1", label: "System for bookings, events & ops" },
    ],
    impact: [
      "No more double-bookings or lost sign-ups",
      "Event coordination reduced from hours to minutes",
      "Volunteer-facing communication runs automatically",
    ],
  },
];

type Example = {
  sector: string;
  headline: string;
  situation: string;
  approach: string[];
  outcome: string;
  tools: string[];
};

const examples: Example[] = [
  {
    sector: "Recruitment agency · 20–40 consultants",
    headline: "Consultants back to selling instead of updating records",
    situation:
      "A recruitment business where every consultant keeps their own version of the truth. Candidates tracked in personal spreadsheets, CVs buried in inboxes, and compliance documents chased by hand. Nobody can answer a simple question — how many candidates are at offer stage this week — without asking five people.",
    approach: [
      "Map the full candidate and client journey, from first enquiry through placement and aftercare",
      "Build a single pipeline covering both sides — vacancies and candidates — with automated stage progression",
      "Add AI screening that reads incoming CVs, extracts skills and experience, and shortlists against the live vacancy",
      "Automate compliance chasing: right-to-work, references and documents requested and followed up without a human",
      "Live dashboards showing pipeline value, consultant activity and time-to-placement",
    ],
    outcome:
      "Consultants stop administering and start billing. Leadership sees pipeline and activity in real time rather than at month end. Compliance stops being the thing that delays a placement.",
    tools: ["monday.com or CRM", "OpenAI", "Make.com", "Automated document collection"],
  },
  {
    sector: "Marketing agency · 10–30 staff",
    headline: "Onboarding, approvals and reporting that run themselves",
    situation:
      "An agency winning good work but losing margin to admin. Every new client onboarded manually from a checklist someone wrote two years ago. Approvals chased over email. And the monthly reporting pack — the thing clients judge them on — assembled by hand by the account team, every month, for every client.",
    approach: [
      "Map onboarding, delivery and reporting as one connected process rather than three disconnected habits",
      "Automated client onboarding: contract signed triggers workspace setup, kickoff scheduling and welcome sequence",
      "Approval workflows with automatic reminders, so feedback lands without anyone chasing it",
      "Reporting packs generated automatically from live campaign data, with AI writing the plain-English commentary",
      "Capacity and profitability dashboards so overservicing is visible before it eats the margin",
    ],
    outcome:
      "New clients live faster and more consistently. Reporting stops consuming the last week of every month. The agency can take on more clients without proportionally more account management.",
    tools: ["monday.com", "OpenAI", "Zapier or Make.com", "Google Workspace"],
  },
];

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs font-bold section-label text-[#0FA284] uppercase mb-3">{label}</p>
      <p className="text-[#374151] leading-relaxed">{children}</p>
    </div>
  );
}

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Real businesses. Real bottlenecks. Real systems."
        sub="Two client projects in detail, plus worked examples of how we approach common situations — so you can see exactly how we think before we ever speak."
      />

      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 space-y-12">
        {studies.map((cs) => (
          <article key={cs.client} className="bg-white border border-gray-200/80 rounded-3xl overflow-hidden shadow-md shadow-gray-200/60">
            <div className="bg-gradient-to-r from-[#F5F7F6] to-white px-8 md:px-12 py-8 border-b border-gray-200">
              <p className="text-[#0FA284] text-sm font-bold mb-2">{cs.meta}</p>
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-[#25272C] mb-3">{cs.client}</h2>
              <p className="text-[#374151] text-lg">{cs.headline}</p>
            </div>
            <div className="px-8 md:px-12 py-10 space-y-10">
              <Section label="The challenge">{cs.challenge}</Section>
              <Section label="What we built">{cs.solution}</Section>
              <Section label="The result">{cs.result}</Section>

              <div>
                <p className="text-xs font-bold section-label text-[#0FA284] uppercase mb-4">Tools used</p>
                <div className="flex flex-wrap gap-2">
                  {cs.tools.map((t) => (
                    <span key={t} className="text-sm font-semibold text-[#25272C] bg-[#F5F7F6] border border-gray-200 rounded-lg px-3.5 py-2">{t}</span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-bold section-label text-[#0FA284] uppercase mb-4">Business impact</p>
                <ul className="space-y-3">
                  {cs.impact.map((i) => (
                    <li key={i} className="flex gap-3 text-[#374151] leading-relaxed">
                      <span className="text-[#0FA284] font-bold shrink-0 mt-0.5" aria-hidden="true">✓</span>
                      {i}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-gray-200">
                {cs.stats.map((s) => (
                  <div key={s.label} className="text-center py-8 bg-gradient-to-b from-[#F5F7F6] to-white border border-gray-100 rounded-2xl">
                    <p className="text-5xl md:text-6xl font-extrabold bg-gradient-to-br from-[#0FA284] to-[#5ce0bd] bg-clip-text text-transparent mb-3">{s.n}</p>
                    <p className="text-sm text-[#374151] px-4">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}

        {/* Example engagements — illustrative, not past client work */}
        <div className="pt-4">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <p className="text-xs font-bold section-label text-[#0FA284] uppercase">Example engagements</p>
            <span className="text-xs font-bold uppercase tracking-wide text-[#6B7280] border border-gray-300 rounded-full px-3 py-1">
              Illustrative
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#25272C] mb-4 max-w-3xl">
            What a typical engagement looks like.
          </h2>
          <p className="text-[#374151] text-lg leading-relaxed max-w-3xl mb-10">
            These are not past clients. They are worked examples of how we approach two common situations — included so you can see the thinking, the sequence and the tools before you ever get on a call with us.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {examples.map((ex) => (
              <div key={ex.sector} className="bg-white border-2 border-dashed border-gray-300 rounded-3xl p-8 md:p-10">
                <p className="text-[#0FA284] text-sm font-bold mb-2">{ex.sector}</p>
                <h3 className="text-xl md:text-2xl font-extrabold tracking-tight text-[#25272C] mb-6">{ex.headline}</h3>

                <p className="text-xs font-bold section-label text-[#6B7280] uppercase mb-3">The situation</p>
                <p className="text-[#374151] leading-relaxed mb-7">{ex.situation}</p>

                <p className="text-xs font-bold section-label text-[#6B7280] uppercase mb-3">How we would approach it</p>
                <ol className="space-y-3 mb-7">
                  {ex.approach.map((a, idx) => (
                    <li key={a} className="flex gap-3 text-[#374151] leading-relaxed">
                      <span className="shrink-0 w-6 h-6 rounded-lg bg-[#25272C] text-[#B8F7E4] text-xs font-bold flex items-center justify-center mt-0.5">
                        {idx + 1}
                      </span>
                      {a}
                    </li>
                  ))}
                </ol>

                <p className="text-xs font-bold section-label text-[#6B7280] uppercase mb-3">The outcome we would be aiming for</p>
                <p className="text-[#374151] leading-relaxed mb-7">{ex.outcome}</p>

                <div className="flex flex-wrap gap-2">
                  {ex.tools.map((t) => (
                    <span key={t} className="text-sm font-semibold text-[#25272C] bg-[#F5F7F6] border border-gray-200 rounded-lg px-3.5 py-2">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#F5F7F6] border border-gray-200/80 rounded-3xl p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#25272C] mb-4">
            Want to see what this would look like for your business?
          </h2>
          <p className="text-[#374151] text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            The free automation audit ends with a clear picture of where your hours are going and what is worth fixing first.
          </p>
          <Link href="/contact" className="inline-block bg-[#B8F7E4] text-[#25272C] font-bold px-8 py-4 rounded-lg hover:bg-[#a2f0d8] shadow-lg hover:-translate-y-0.5 transition-all">
            Book Your Free Automation Audit
          </Link>
        </div>
      </div>

      <FinalCTA />
    </>
  );
}
