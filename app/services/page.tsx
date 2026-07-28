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
            <p className="text-[#6B7280] mt-2">Every business is different, but here is where things typically start.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { name: "Automation Audit", price: pricing.discovery, body: "A conversation and a review of how your business runs, ending with an honest view of what is worth automating. No cost, no obligation.", cta: "Book your audit", featured: true },
              { name: "Projects", price: "from " + pricing.projectsFrom, body: "Fixed-scope builds — AI, automations, integrations, dashboards and systems. Quoted after discovery so you know the number before we start.", cta: "Discuss a project" },
              { name: "Ongoing Support", price: "from " + pricing.supportFrom, body: "Monthly partnership. We maintain, extend and improve your systems as the business changes. Most clients move onto this after a build.", cta: "Talk about support" },
            ].map((p) => (
              <div key={p.name} className={"card-lift rounded-2xl p-8 relative overflow-hidden " + (p.featured ? "bg-white border-2 border-[#0FA284]/40 shadow-lg shadow-teal-500/10" : "bg-white border border-gray-200 shadow-sm")}>
                {p.featured && <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0FA284] to-[#B8F7E4]" />}
                <h3 className="font-bold text-[#25272C] text-lg mb-1 tracking-tight">{p.name}</h3>
                <p className="text-3xl font-extrabold text-[#0FA284] mb-4">{p.price}</p>
                <p className="text-[#374151] text-[15px] leading-relaxed mb-6">{p.body}</p>
                <Link href="/contact" className="text-[#0FA284] text-sm font-bold inline-flex items-center gap-1 hover:gap-2 transition-all">
                  {p.cta} <span aria-hidden="true">→</span>
                </Link>
              </div>
            ))}
          </div>
          <div className="bg-[#F5F7F6] border border-gray-200/80 rounded-2xl p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="font-bold text-[#25272C] text-lg mb-1">Larger or multi-site business?</p>
              <p className="text-[#374151] text-[15px]">Enterprise pricing available for complex, multi-department automation programmes.</p>
            </div>
            <Button href="/contact" variant="primary" className="shrink-0">Talk to an automation expert</Button>
          </div>
        </div>
      </div>

      <FinalCTA />
    </>
  );
}
