import Button from "@/components/Button";
import FinalCTA from "@/components/FinalCTA";

export const metadata = {
  title: "Services & Pricing | Road2Resolve",
};

function Badge({ text }: { text: string }) {
  return (
    <span className="inline-block bg-[#7C35BE] text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
      {text}
    </span>
  );
}

function ServiceCard({ title, price, duration, body, badge }: { title: string; price: string; duration?: string; body: string; badge?: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm relative">
      {badge && <Badge text={badge} />}
      <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
        <h3 className="font-bold text-[#1B2D50] text-lg">{title}</h3>
        <span className="font-bold text-[#7C35BE] text-lg">{price}</span>
      </div>
      <p className="text-[#374151] text-sm leading-relaxed mb-2">{body}</p>
      {duration && <p className="text-[#6B7280] text-xs">{duration}</p>}
    </div>
  );
}

const addons = [
  { name: "Third-party integration setup (Zapier/Make)", price: "£450–£850" },
  { name: "Custom dashboard build", price: "£650" },
  { name: "Team training session (up to 6 people, 90 mins)", price: "£295" },
  { name: "monday.com account setup & configuration", price: "£199" },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1B2D50] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Services &amp; Pricing</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Three ways to work with us — from a single audit to a fully embedded operations partner.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {/* Tier 1 */}
        <div>
          <div className="border-l-4 border-[#7C35BE] pl-4 mb-8">
            <h2 className="text-2xl font-bold text-[#1B2D50]">Systems Consulting</h2>
            <p className="text-[#6B7280] text-sm mt-1">Entry point — low commitment, high clarity</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ServiceCard
              title="monday.com Health Check"
              price="£349"
              body="For businesses already using monday.com but suspect it's not set up well. We review your boards, automations, and workflows and deliver a written report with prioritised recommendations."
              duration="Typical duration: 2–3 hours of our time."
            />
            <ServiceCard
              title="Operations Discovery Session"
              price="£599"
              badge="Best starting point"
              body="A structured workshop where we map your current workflow, identify gaps, and produce a written roadmap. If you go on to a build, the £599 comes off the project cost."
              duration="Typical duration: 2-hour session + written output."
            />
          </div>
        </div>

        {/* Tier 2 */}
        <div>
          <div className="border-l-4 border-[#7C35BE] pl-4 mb-8">
            <h2 className="text-2xl font-bold text-[#1B2D50]">Operations Build</h2>
            <p className="text-[#6B7280] text-sm mt-1">Fixed-fee project work — built to your business</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
            <ServiceCard
              title="Starter Build"
              price="£1,500"
              body="One or two boards, basic automations. Good for micro businesses or a single department new to monday.com."
            />
            <ServiceCard
              title="Growth Build"
              price="£2,800"
              badge="Most popular"
              body="Multi-board system with cross-board automations, status-driven workflows, and a basic dashboard. Our most popular package."
            />
            <ServiceCard
              title="Full Operations Build"
              price="£4,500–£6,500"
              body="Complex multi-board architecture, third-party integrations (Zapier/Make), custom dashboards, and team training included. Scoped individually after a discovery session."
            />
          </div>
          <p className="text-sm text-[#6B7280] italic">
            All builds include one round of revisions and a 30-day support window after go-live.
          </p>
        </div>

        {/* Tier 3 */}
        <div>
          <div className="border-l-4 border-[#7C35BE] pl-4 mb-8">
            <h2 className="text-2xl font-bold text-[#1B2D50]">Embedded Operations Partner</h2>
            <p className="text-[#6B7280] text-sm mt-1">Monthly retainer — ongoing support as your business grows</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard
              title="Essential"
              price="£595/month"
              body="Up to 4 hours/month. Covers maintenance, minor tweaks, and one small automation per month."
            />
            <ServiceCard
              title="Growth"
              price="£995/month"
              body="Up to 8 hours/month. Ongoing builds, new automations, integrations, and priority response."
            />
            <ServiceCard
              title="Partner"
              price="£1,750/month"
              body="Up to 16 hours/month. Fully embedded — strategic input, multiple boards, integrations, reporting."
            />
          </div>
        </div>

        {/* Add-ons */}
        <div>
          <h2 className="text-2xl font-bold text-[#1B2D50] mb-6">Add-ons</h2>
          <div className="bg-[#F4F6FA] rounded-lg overflow-hidden">
            {addons.map((a, i) => (
              <div key={a.name} className={`flex items-center justify-between px-6 py-4 ${i !== addons.length - 1 ? "border-b border-gray-200" : ""}`}>
                <span className="text-[#374151] text-sm">{a.name}</span>
                <span className="font-semibold text-[#7C35BE] text-sm whitespace-nowrap ml-4">{a.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <FinalCTA />
    </>
  );
}
