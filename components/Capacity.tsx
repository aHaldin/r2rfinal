import Button from "./Button";
import { capacity } from "@/lib/config";

export default function Capacity() {
  return (
    <section className="bg-white py-20 md:py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs font-bold section-label text-[#0FA284] uppercase mb-4">Working with us</p>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#25272C] mb-6">
          We take on {capacity.newClientsPerMonth} new clients a month.
        </h2>
        <p className="text-[#374151] text-lg leading-relaxed mb-6">
          Deliberately. Every client works directly with the people building their systems — no account managers, no juniors, nothing outsourced. That only works if we keep the number small.
        </p>
        <p className="text-[#25272C] text-lg font-bold mb-8">
          {capacity.spotsOpenThisMonth} {capacity.spotsOpenThisMonth === 1 ? "spot is" : "spots are"} open {capacity.month}.
        </p>
        <Button href="/contact" variant="primary">Book a Free Automation Audit</Button>
      </div>
    </section>
  );
}
