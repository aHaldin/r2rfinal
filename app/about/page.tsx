import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FinalCTA from "@/components/FinalCTA";
import WhyFive from "@/components/WhyFive";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "About Us | AI & Automation Consultancy in Kent",
  description:
    "Road2Resolve is an AI and business automation consultancy based in Folkestone, Kent, working with growing businesses across the UK. Small team, senior people, five clients at a time.",
  alternates: { canonical: "/about" },
};

const values = [
  { title: "Straight talking", body: "We tell you what you need, not what sounds impressive. If automating something is not worth it, we will say so." },
  { title: "Business first, software second", body: "We start with the problem and the numbers. The platform is chosen afterwards, and never because it suits us." },
  { title: "Built to last", body: "We do not build systems and disappear. We build things your team will still be using, and trusting, in two years." },
  { title: "Senior people only", body: "Every client works directly with the people doing the work. Nothing is outsourced or handed to a junior." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="We fix the way businesses run."
        sub="An AI and business automation consultancy based in Folkestone, Kent, working with growing businesses across the UK."
      />

      <section className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-14 items-start">
          <div className="lg:col-span-3">
            <p className="text-xs font-bold section-label text-[#0FA284] uppercase mb-4">Our story</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#25272C] mb-6">
              Why Road2Resolve exists
            </h2>
            <div className="space-y-5 text-[#374151] text-lg leading-relaxed">
              <p>
                We kept seeing the same thing. Good businesses — profitable, growing, well run by capable people — quietly held back by admin that nobody should still be doing by hand.
              </p>
              <p>
                Leads going cold because nobody was sure whose job the follow-up was. The same information typed into three systems. Teams working in silos because the software they used could not talk to each other. And spreadsheets. Always spreadsheets, holding together processes that had outgrown them years earlier.
              </p>
              <p>
                The frustrating part is that the technology to fix all of this already exists, and it costs less than hiring another administrator. What most businesses do not have is someone to work out what to automate first, build it properly, and make sure the team actually uses it.
              </p>
              <p>
                That is what we do. We come from operations, not from software sales — so we start with how your business runs, not with a product we are trying to place.
              </p>
            </div>

            <div className="mt-10 bg-[#F5F7F6] border border-gray-200/80 rounded-2xl p-8">
              <p className="text-xs font-bold section-label text-[#0FA284] uppercase mb-3">Our mission</p>
              <p className="text-[#25272C] text-xl font-bold leading-snug tracking-tight">
                To give growing businesses their time back — so the people in them can do the work they were actually hired to do.
              </p>
            </div>

            <div className="mt-10">
              <Button href="/contact" variant="primary">Book a free automation audit</Button>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="hero-glow rounded-3xl aspect-[4/5] flex items-center justify-center relative overflow-hidden shadow-2xl shadow-black/25">
              <div className="absolute inset-0 grid-pattern pointer-events-none" />
              <div className="text-center px-8 relative">
                <p className="text-7xl font-extrabold text-white mb-3 tracking-tight">R²</p>
                <p className="text-xs text-gray-300 section-label uppercase mb-1">Road2Resolve</p>
                <p className="text-xs text-gray-400">Folkestone, Kent · Working UK-wide</p>
              </div>
            </div>
            <dl className="grid grid-cols-2 gap-4 mt-6">
              {[
                { k: "Based in", v: "Folkestone, Kent" },
                { k: "Working", v: "UK-wide" },
                { k: "Clients at a time", v: "Five, maximum" },
                { k: "Delivered by", v: "Senior people only" },
              ].map((d) => (
                <div key={d.k} className="bg-[#F5F7F6] border border-gray-200/80 rounded-2xl p-5">
                  <dt className="text-xs text-[#6B7280] mb-1">{d.k}</dt>
                  <dd className="font-bold text-[#25272C]">{d.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F7F6] py-20 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold section-label text-[#0FA284] uppercase mb-4">How we work</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#25272C] mb-12">
            Four things we will not compromise on.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card-lift bg-white rounded-2xl p-8 border border-gray-200/80 shadow-sm">
                <h3 className="font-bold text-[#25272C] text-xl mb-3 tracking-tight">{v.title}</h3>
                <p className="text-[#374151] text-[15px] leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyFive />
      <FinalCTA />
    </>
  );
}
