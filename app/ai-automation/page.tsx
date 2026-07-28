import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FinalCTA from "@/components/FinalCTA";
import Button from "@/components/Button";
import FAQ, { type QA } from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/config";

export const metadata: Metadata = {
  title: "AI Business Automation | AI Consultant UK",
  description:
    "AI business automation for UK companies. AI assistants, knowledge bases, document search, lead qualification and reporting — built into the systems your team already uses.",
  alternates: { canonical: "/ai-automation" },
};

const useCases = [
  { title: "AI email drafting", who: "Sales & client services", body: "Replies, follow-ups and quotes drafted in your tone of voice from the context already in your CRM. Your team reviews and sends instead of writing from scratch." },
  { title: "AI proposal generation", who: "Sales", body: "A scoping call becomes a first-draft proposal in minutes, pulling in the right case studies, scope and pricing automatically." },
  { title: "AI meeting summaries", who: "Everyone", body: "Calls summarised with decisions and action points pushed straight into your project system, assigned to the right person." },
  { title: "AI customer support", who: "Support & operations", body: "Routine questions answered instantly and accurately from your own documentation, with anything genuinely complex escalated to a human." },
  { title: "AI knowledge bases", who: "Whole business", body: "One place your team asks a question and gets the right answer from your procedures, contracts and history — instead of asking a colleague." },
  { title: "AI document search", who: "Professional services", body: "Find the clause, the quote or the file across thousands of documents by describing what you need in plain English." },
  { title: "AI lead qualification", who: "Sales & marketing", body: "Every enquiry scored, enriched and routed automatically so your team spends its time on the ones worth having." },
  { title: "AI reporting", who: "Leadership", body: "A plain-English summary of what changed this week, what is at risk and what needs a decision — delivered automatically." },
  { title: "AI workflow generation", who: "Operations", body: "Describe a process and get a working automation drafted, tested and deployed far faster than building it by hand." },
  { title: "AI task creation", who: "Delivery teams", body: "Emails, forms and calls turned into properly structured tasks with owners and deadlines, without anyone retyping anything." },
];

const principles = [
  { title: "Your data stays yours", body: "We build AI into your own systems with proper controls, rather than having staff paste company information into public chatbots." },
  { title: "A human stays in the loop", body: "For anything client-facing or high-stakes, AI drafts and a person approves. Speed without handing over judgement." },
  { title: "Start where it pays back", body: "We automate the task costing you the most hours first. You should see the return before the second phase begins." },
];

const faqs: QA[] = [
  { q: "Is our business too small for AI automation?", a: "Almost certainly not. Most of our work is with businesses between 5 and 100 employees. Smaller teams often see the fastest return, because there is less slack to absorb repetitive admin and every hour saved is immediately noticeable." },
  { q: "Is our data safe?", a: "We build AI into your own environment with appropriate access controls and data handling, rather than encouraging staff to paste company information into public tools. We will walk you through exactly where data goes before anything is built." },
  { q: "Will this replace our staff?", a: "In our experience it removes the work people dislike rather than the people. The usual outcome is a team that stops doing admin and starts doing the work you actually hired them for — and a business that grows without hiring another administrator." },
  { q: "How quickly will we see a return?", a: "We deliberately start with the task costing you the most time, so the first phase usually pays for itself quickly. During the free automation audit we will give you an honest view of where the return is and how long it should take." },
  { q: "What does AI automation cost?", a: "Projects typically start from £2,500, quoted fixed after a free discovery session. Ongoing support and continuous improvement starts from £750/month." },
  { q: "What if we do not know what to automate?", a: "That is exactly what the free automation audit is for. We map how your business runs, show you where the hours are going, and give you a prioritised list — including the things that are not worth automating." },
];

export default function AIAutomationPage() {
  return (
    <>
      <PageHero
        eyebrow="AI Business Automation"
        title="Put AI to work on the jobs nobody should be doing by hand."
        sub="Practical AI built into the systems your team already uses — drafting, summarising, answering, qualifying and reporting, with a human still in control."
      />

      <section className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#25272C] mb-6">
              Ten things we build most often.
            </h2>
            <p className="text-[#374151] text-lg leading-relaxed">
              Each one removes a specific job somebody in your business currently does manually. No jargon, no pilots that go nowhere.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((u) => (
              <div key={u.title} className="card-lift bg-gradient-to-b from-[#F5F7F6] to-white border border-gray-200/80 rounded-2xl p-7">
                <p className="text-xs font-bold text-[#0FA284] mb-3">{u.who}</p>
                <h3 className="font-bold text-[#25272C] text-lg mb-3 tracking-tight">{u.title}</h3>
                <p className="text-[#374151] text-[15px] leading-relaxed">{u.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hero-glow text-white py-20 md:py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <p className="text-xs font-bold section-label text-[#B8F7E4] uppercase mb-4">How we approach it</p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-14 max-w-3xl">
            Sensible AI, not science projects.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {principles.map((p) => (
              <div key={p.title} className="card-lift glass rounded-2xl p-8">
                <h3 className="font-bold text-white text-xl mb-3 tracking-tight">{p.title}</h3>
                <p className="text-gray-300 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
          <Button href="/contact" variant="white">Discover automation opportunities</Button>
        </div>
      </section>

      <FAQ items={faqs} heading="AI automation — FAQs" />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "AI Business Automation",
          provider: { "@type": "Organization", name: site.name, url: site.url },
          areaServed: { "@type": "Country", name: "United Kingdom" },
          description:
            "AI business automation consultancy: AI assistants, knowledge bases, document search, lead qualification, reporting and workflow automation for UK businesses.",
          offers: { "@type": "Offer", priceCurrency: "GBP", price: "2500", description: "AI automation projects from £2,500" },
        }}
      />

      <FinalCTA />
    </>
  );
}
