import Button from "./Button";
import { capacity } from "@/lib/config";

export default function FinalCTA() {
  return (
    <section
      className="py-24 md:py-28 px-6 text-white text-center relative overflow-hidden"
      style={{
        background: "radial-gradient(ellipse 700px 400px at 50% -10%, rgba(184, 247, 228, 0.18), transparent 60%), linear-gradient(160deg, #1f2126 0%, #25272C 55%, #2c2f36 100%)",
      }}
    >
      <div className="absolute inset-0 grid-pattern pointer-events-none" />
      <div className="max-w-2xl mx-auto relative">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-5">
          Find out what is slowing your business down.
        </h2>
        <p className="text-[#d9fbf1] mb-4 text-lg leading-relaxed">
          Book a free automation audit. We will look at how your business runs, show you where the hours are going, and tell you honestly what is worth automating.
        </p>
        <p className="text-[#B8F7E4] font-bold mb-10">
          {capacity.open} of {capacity.total} client spots currently open. When they are filled, they are filled.
        </p>
        <Button href="/contact" variant="white" className="!px-8 !py-4 !text-base">Book Your Free Automation Audit</Button>
        <p className="mt-6 text-sm text-[#B8F7E4]/80">
          Or email us directly:{" "}
          <a href="mailto:info@road2resolve.digital" className="underline underline-offset-4 hover:text-white transition-colors font-semibold">
            info@road2resolve.digital
          </a>
        </p>
      </div>
    </section>
  );
}
