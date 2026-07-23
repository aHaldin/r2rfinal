import Button from "./Button";
import { capacity } from "@/lib/config";

export default function FinalCTA() {
  return (
    <section
      className="py-24 md:py-28 px-6 text-white text-center relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 700px 400px at 50% -10%, rgba(184, 247, 228, 0.18), transparent 60%), linear-gradient(160deg, #1f2126 0%, #25272C 55%, #2c2f36 100%)",
      }}
    >
      <div className="absolute inset-0 grid-pattern pointer-events-none" />
      <div className="max-w-2xl mx-auto relative">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-5">Ready to sort your operations out?</h2>
        <p className="text-[#d9fbf1] mb-4 text-lg leading-relaxed">
          No pitch, no pressure — just a straight conversation about where your business is and whether we can help.
        </p>
        <p className="text-[#B8F7E4] font-bold mb-10">
          {capacity.open} of {capacity.total} client spots currently open. When they&apos;re filled, they&apos;re filled.
        </p>
        <Button href="/contact" variant="white" className="!px-8 !py-4 !text-base">Get in Touch</Button>
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
