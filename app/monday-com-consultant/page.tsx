import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FinalCTA from "@/components/FinalCTA";
import Button from "@/components/Button";
import FAQ, { type QA } from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/config";

export const metadata: Metadata = {
  title: "monday.com Consultant UK | Implementation, Setup & Automation",
  description:
    "monday.com consultants for UK businesses. Implementation, setup, board architecture, automations, integrations and training. Get a monday.com system your team will actually use.",
  alternates: { canonical: "/monday-com-consultant" },
};

const services = [
  { title: "monday.com Implementation", body: "A full build from scratch — board architecture, workflows, permissions and automations designed around how your business actually operates." },
  { title: "monday.com Setup & Configuration", body: "Account structure, workspaces, item types, columns and views configured properly from day one, so it scales instead of sprawling." },
  { title: "monday.com Automations", body: "Status-driven automations that move work between teams, trigger notifications and remove the copying, chasing and forgetting." },
  { title: "Integrations", body: "monday.com connected to your CRM, email, forms, finance tools and booking systems using native integrations, Make.com or Zapier." },
  { title: "Dashboards & Reporting", body: "Executive and team dashboards that show pipeline, workload and delivery live, without anyone exporting to a spreadsheet." },
  { title: "Rescue & Health Check", body: "Already on monday.com but it is a mess? We audit what you have, tell you what is wrong, and rebuild what needs rebuilding." },
  { title: "AI on top of monday.com", body: "AI drafting, summarising and qualification wired into your boards — where most monday.com consultancies stop, we keep going." },
  { title: "Team Training & Adoption", body: "Plain-English training so the system gets used properly, plus documentation your team can actually follow." },
];

const signs = [
  "Your boards were set up by whoever had time, and nobody fully trusts them now",
  "Work still gets copied between monday.com and spreadsheets",
  "Automations exist but keep breaking or nobody knows what they do",
  "monday.com is not connected to your CRM, inbox or finance tools",
  "Your team has quietly gone back to email and WhatsApp",
  "You are paying for seats on a system that is only half used",
];

const faqs: QA[] = [
  { q: "Are you a monday.com partner?", a: "We are an independent AI and business automation consultancy that builds extensively on monday.com. That independence matters: we recommend monday.com when it is genuinely the right tool, and something else when it is not." },
  { q: "How much does a monday.com implementation cost?", a: "Projects typically start from £2,500 depending on complexity — number of boards, integrations, automations and how many teams are involved. We quote a fixed price after a free discovery session, so you know the number before any work begins." },
  { q: "How long does a monday.com build take?", a: "A focused build for one department is usually two to three weeks. A full multi-team operations system with integrations typically takes four to eight weeks, including training and a period of refinement after go-live." },
  { q: "We already use monday.com but it is not working. Can you fix it?", a: "Yes, and it is one of the most common things we are asked to do. We audit your existing setup, identify what is structurally wrong, and rebuild the parts that need it rather than starting over unnecessarily." },
  { q: "Do you only work with monday.com?", a: "No. monday.com is one of several platforms we build with, alongside Make.com, Zapier, OpenAI, Google Workspace and Microsoft 365. We start with your business problem and choose the tools afterwards." },
  { q: "Do you provide ongoing support after the build?", a: "Yes. Most clients move onto a monthly support arrangement from £750/month, where we maintain the system, add automations and extend it as the business changes." },
  { q: "Where are you based and do you work remotely?", a: "We are based in Folkestone, Kent, and work with clients across the UK both remotely and in person." },
];

export default function MondayPage() {
  return (
    <>
      <PageHero
        eyebrow="monday.com Consultancy"
        title="monday.com consultants who build systems your team actually uses."
        sub="Implementation, setup, automations, integrations and training — delivered by an automation consultancy, not a reseller."
      />

      <section className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#25272C] mb-6">
              Most monday.com problems are not monday.com problems.
            </h2>
            <div className="space-y-4 text-[#374151] text-lg leading-relaxed">
              <p>
                monday.com is an excellent platform. But a tool configured around a broken process just makes the broken process faster.
              </p>
              <p>
                We start by mapping how your business actually runs — the handoffs, the duplicate entry, the bits held together by someone&apos;s memory. Then we build monday.com around the process that should exist, connect it to your other systems, and automate what should never have been manual.
              </p>
              <p>
                That is the difference between a monday.com setup and a monday.com system.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/contact" variant="primary">Book a free monday.com review</Button>
            </div>
          </div>
          <div className="bg-[#F5F7F6] border border-gray-200/80 rounded-3xl p-8 md:p-10">
            <p className="text-xs font-bold section-label uppercase text-[#0FA284] mb-6">Sound familiar?</p>
            <ul className="space-y-4">
              {signs.map((s) => (
                <li key={s} className="flex gap-3 text-[#374151] leading-relaxed">
                  <span className="text-[#0FA284] font-bold shrink-0 mt-0.5" aria-hidden="true">→</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F7F6] py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold section-label text-[#0FA284] uppercase mb-4">What we do</p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#25272C] mb-14 max-w-3xl">
            Everything monday.com, done properly.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="card-lift bg-white border border-gray-200/80 rounded-2xl p-7 shadow-sm">
                <h3 className="font-bold text-[#25272C] text-lg mb-3 tracking-tight">{s.title}</h3>
                <p className="text-[#374151] text-[15px] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold section-label text-[#0FA284] uppercase mb-4">Proof</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#25272C] mb-12 max-w-3xl">
            monday.com systems we have built.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/case-studies" className="card-lift bg-gradient-to-b from-[#F5F7F6] to-white border border-gray-200/80 rounded-2xl p-8 block group">
              <p className="text-xs font-bold section-label text-[#0FA284] uppercase mb-3">Commercial Services</p>
              <p className="font-bold text-[#25272C] text-xl mb-3 tracking-tight group-hover:text-[#0FA284] transition-colors">Five-stage sales-to-operations pipeline</p>
              <p className="text-[#374151] text-[15px] leading-relaxed">Leads, site surveys, bids and onboarding automated end to end, with each stage prompting the next team to act.</p>
            </Link>
            <Link href="/case-studies" className="card-lift bg-gradient-to-b from-[#F5F7F6] to-white border border-gray-200/80 rounded-2xl p-8 block group">
              <p className="text-xs font-bold section-label text-[#0FA284] uppercase mb-3">UK Children&apos;s Charity</p>
              <p className="font-bold text-[#25272C] text-xl mb-3 tracking-tight group-hover:text-[#0FA284] transition-colors">100+ freelancers, one booking system</p>
              <p className="text-[#374151] text-[15px] leading-relaxed">Freelancer onboarding, event sign-ups and availability rebuilt on monday.com, replacing a spreadsheet sprawl.</p>
            </Link>
          </div>
        </div>
      </section>

      <FAQ items={faqs} heading="monday.com consultancy — FAQs" />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "monday.com Implementation and Consultancy",
          provider: { "@type": "Organization", name: site.name, url: site.url },
          areaServed: { "@type": "Country", name: "United Kingdom" },
          description:
            "monday.com consultancy for UK businesses: implementation, setup, board architecture, automations, integrations, dashboards and training.",
          offers: { "@type": "Offer", priceCurrency: "GBP", price: "2500", description: "monday.com implementation projects from £2,500" },
        }}
      />

      <FinalCTA />
    </>
  );
}
