import Button from "./Button";
import { capacity } from "@/lib/config";

export default function Hero() {
  return (
    <section className="hero-glow text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-36 relative">
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8 animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-[#B8F7E4] animate-pulse" />
          <span className="text-xs font-semibold tracking-wide text-gray-200">
            Taking on {capacity.spotsOpenThisMonth} new clients {capacity.month}
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight max-w-4xl mb-8 animate-fade-up-1">
          Make your business run{" "}
          <span className="gradient-text">smarter, not harder.</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed animate-fade-up-2">
          We remove the repetitive admin slowing your team down — using AI, automation and joined-up business systems. Fewer spreadsheets, fewer dropped balls, more time to grow.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 items-start animate-fade-up-3">
          <Button href="/contact" variant="white" className="!px-8 !py-4 !text-base shadow-xl shadow-black/30">
            Book a Free Automation Audit
          </Button>
          <span className="text-gray-400 text-sm pt-4">
            30 minutes · No pitch · Leave with a plan either way
          </span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-14 md:h-20" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,50 C360,95 1080,0 1440,50 L1440,80 L0,80 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
