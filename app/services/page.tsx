import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FinalCTA from "@/components/FinalCTA";
import Button from "@/components/Button";
import { pricing } from "@/lib/config";

export const metadata: Metadata = {
  title: "AI & Automation Services | Business Automation Consultant UK",
  description:
    "AI business automation, workflow optimisation, process mapping, operations consulting, CRM implementation and dashboards. Automation consultancy for UK businesses. Projects from £2,500.",
  alternates: { canonical: "/services" },
};

type Service = { id?: string; title: string; outcome: string; detail: string };

const groups: { heading: string; blurb: string; services: Service[] }[] = [
  {
    heading: "AI & Automation",
    blurb: "Removing the repetitive work your team should not still be doing by hand.",
    services: [
      { id: "ai", title: "AI Business Automation", outcome: "Hours back every week", detail: "We identify the tasks eating your team's time and put AI to work on them — drafting, summarising, classifying and answering, inside the tools you already use." },
      { id: "assistants", title: "AI Assistants", outcome: "Instant answers, no chasing", detail: "Internal assistants trained on your own processes and documents, so staff stop interrupting each other to find things out." },
      { id: "knowledge", title: "AI Knowledge Systems", outcome: "Your knowledge, searchable", detail: "Turn years of documents, contracts and procedures into something anyone can query in plain English and trust the answer." },
      { id: "reporting", title: "AI Reporting", outcome: "Know what changed without asking", detail: "Automated plain-English summaries of performance, pipeline and exceptions, delivered where your team already works." },
      { id: "strategy", title: "Automation Strategy", outcome: "A plan, not a shopping list", detail: "A prioritised roadmap of what to automate first for the biggest return — and, just as importantly, what to leave alone." },
    ],
  },
  {
    heading: "Operations & Process",
    blurb: "Fixing how the business runs before layering technology on top of it.",
    services: [
      { id: "workflow", title: "Workflow Optimisation", outcome: "Fewer steps, fewer mistakes", detail: "We strip out the handoffs, duplicate entry and approval bottlenecks that slow every job down." },
      { id: "mapping", title: "Business Process Mapping", outcome: "See where the time actually goes", detail: "A clear map of how work really moves through your business, with the manual steps and their cost made visible." },
      { id: "consulting", title: "Operations Consulting", outcome: "Scale without adding admin", detail: "Practical advice on structuring your operations so growth does not mean hiring another administrator every time." },
      { id: "dashboards", title: "Business Dashboards", outcome: "One version of the truth", detail: "Live dashboards that show pipeline, capacity, delivery and performance without anyone building a spreadsheet." },
      { id: "training", title: "Team Training", outcome: "Systems that actually get used", detail: "Your team shown how everything works in plain English, so the investment does not quietly go unused." },
      { id: "support", title: "Automation Support", outcome: "It keeps working as you change", detail: "Ongoing maintenance, monitoring and improvement as your business, your team and your tools evolve." },
    ],
  },
  {
    heading: "Platforms & Integrations",
    blurb: "We are tool-agnostic. These are the platforms we build with most often.",
    services: [
      { id: "monday", title: "monday.com Implementation", outcome: "Your operations in one place", detail: "Full monday.com builds — boards, automations, dashboards and integrations — designed around how your business actually works. See our dedicated monday.com consultancy page." },
      { id: "make", title: "Make.com Automation", outcome: "Complex processes, fully automated", detail: "Advanced multi-step scenarios connecting the systems that were never designed to talk to each other." },
      { id: "zapier", title: "Zapier Integrations", outcome: "Quick wins, live in days", detail: "Fast, reliable connections between your everyday apps — often the cheapest hours you will ever buy back." },
      { id: "openai", title: "OpenAI Integration", outcome: "AI inside your own systems", detail: "Custom AI built into your workflows and data, rather than staff pasting company information into a public chatbot." },
      { id: "crm", title: "CRM Implementation", outcome: "No lead falls through", detail: "CRM selected, configured and integrated so your pipeline is accurate and follow-up happens automatically." },
      { id: "workspace", title: "Google Workspace & Microsoft 365 Automation", outcome: "Your inbox stops being the system", detail: "Documents, approvals, forms and email workflows automated inside the productivity suite you already pay for." },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Business outcomes first. Software second."
        sub="We are an AI and business automation consultancy. Below is what we do — described by the problem it solves, not the product it uses."
      />

      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 space-y-24">
        {groups.map((g) => (
          <div key={g.heading}>
            <div className="border-l-4 border-[#0FA284] pl-5 mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#25272C]">{g.heading}</h2>
              <p className="text-[#6B7280] mt-2">{g.blurb}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {g.services.map((s) => (
                <div key={s.title} id={s.id} className="card-lift scroll-mt-28 bg-white border border-gray-200/80 rounded-2xl p-7 shadow-sm">
                  <p className="text-xs font-bold text-[#0FA284] mb-3">{s.outcome}</p>
                  <h3 className="font-bold text-[#25272C] text-lg mb-3 tracking-tight">{s.title}</h3>
                  <p className="text-[#374151] text-[15px] leading-relaxed">{s.detail}</p>
                  {s.id === "monday" && (
                    <Link href="/monday-com-consultant" className="text-[#0FA284] text-sm font-bold mt-4 inline-flex items-center gap-1 hover:gap-2 transition-all">
                      monday.com consultancy <span aria-hidden="true">→</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Pricing */}
        <div id="pricing" className="scroll-mt-28">
          <div className="border-l-4 border-[#0FA284] pl-5 mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#25272C]">Pricing</h2>
            <p className="text-[#6B7280] mt-2">No hidden numbers. Here is exactly how working with us costs.</p>
          </div>

          {/* Audit + projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            <div className="card-lift bg-white border-2 border-[#0FA284]/40 shadow-lg shadow-teal-500/10 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0FA284] to-[#B8F7E4]" />
              <p className="text-xs font-bold text-[#0FA284] mb-3">Start here</p>
              <h3 className="font-bold text-[#25272C] text-xl mb-1 tracking-tight">Automation Audit</h3>
              <p className="text-4xl font-extrabold text-[#0FA284] mb-4">{pricing.audit}</p>
              <p className="text-[#374151] text-[15px] leading-relaxed mb-6">
                A 30-minute conversation about how your business runs today, followed by an honest view of where your hours are going and what is worth automating first. No cost, no obligation, and you keep the thinking either way.
              </p>
              <Button href="/contact" variant="primary">Book your free audit</Button>
            </div>

            <div className="card-lift bg-white border border-gray-200 shadow-sm rounded-2xl p-8">
              <p className="text-xs font-bold text-[#0FA284] mb-3">Build</p>
              <h3 className="font-bold text-[#25272C] text-xl mb-1 tracking-tight">Implementation Projects</h3>
              <p className="text-4xl font-extrabold text-[#25272C] mb-4">from {pricing.projectsFrom}</p>
              <p className="text-[#374151] text-[15px] leading-relaxed mb-4">
                Fixed-scope builds: AI workflows, automations, integrations, dashboards and systems. Quoted as a fixed price after the audit, so you know the number before anything starts.
              </p>
              <p className="text-[#6B7280] text-sm">
                Most projects land between £2,500 and £6,500 depending on how many teams and systems are involved.
              </p>
            </div>
          </div>

          {/* Retainers */}
          <div className="mb-8">
            <h3 className="text-xl font-extrabold tracking-tight text-[#25272C] mb-2">Monthly Support</h3>
            <p className="text-[#6B7280] mb-8 max-w-2xl">
              Most clients move onto a retainer after their build, so the system keeps evolving with the business instead of slowly going stale.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricing.retainers.map((r) => (
                <div
                  key={r.name}
                  className={
                    "card-lift rounded-2xl p-8 relative overflow-hidden bg-white " +
                    (r.recommended
                      ? "border-2 border-[#0FA284]/40 shadow-lg shadow-teal-500/10"
                      : "border border-gray-200 shadow-sm")
                  }
                >
                  {r.recommended && (
                    <>
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0FA284] to-[#B8F7E4]" />
                      <span className="inline-block bg-gradient-to-r from-[#0FA284] to-[#35c9a3] text-white text-xs font-bold px-3.5 py-1.5 rounded-full mb-3 shadow-md shadow-teal-500/25">
                        Recommended
                      </span>
                    </>
                  )}
                  <h4 className="font-bold text-[#25272C] text-lg tracking-tight">{r.name}</h4>
                  <p className="mb-3">
                    <span className="text-4xl font-extrabold text-[#25272C]">{r.price}</span>
                    <span className="text-[#6B7280] font-semibold">{r.per}</span>
                  </p>
                  <p className="text-[#6B7280] text-sm leading-relaxed mb-5">{r.for}</p>
                  <ul className="space-y-2.5">
                    {r.includes.map((inc) => (
                      <li key={inc} className="flex gap-2.5 text-[#374151] text-[15px] leading-relaxed">
                        <span className="text-[#0FA284] font-bold shrink-0 mt-0.5" aria-hidden="true">✓</span>
                        {inc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#F5F7F6] border border-gray-200/80 rounded-2xl p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="font-bold text-[#25272C] text-lg mb-1">Not sure which you need?</p>
              <p className="text-[#374151] text-[15px]">
                That is what the free audit is for. We will tell you honestly — including if the answer is that you do not need us yet.
              </p>
            </div>
            <Button href="/contact" variant="primary" className="shrink-0">Book a Free Automation Audit</Button>
          </div>
        </div>
      </div>

      <FinalCTA />
    </>
  );
}
