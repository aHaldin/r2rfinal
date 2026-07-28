import Button from "./Button";
import { capacity } from "@/lib/config";

export default function Hero() {
  return (
    <section className="hero-glow text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 py-28 md:py-40 relative">
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8 animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-[#B8F7E4] animate-pulse" />
          <span className="text-xs font-semibold tracking-wide text-gray-200">
            {capacity.open} of {capacity.total} client spots open
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight max-w-4xl mb-8 animate-fade-up-1">
          Automate your business.{" "}
          <span className="gradient-text">Save time. Grow faster.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-12 leading-relaxed animate-fade-up-2">
          We help growing businesses eliminate repetitive work using AI, automation and smart business systems — saving hours every week while improving productivity.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 items-start animate-fade-up-3">
          <Button href="/contact" variant="white" className="!px-8 !py-4 !text-base shadow-xl shadow-black/30">
            Book a Free Automation Audit
          </Button>
          <a href="#how-we-work" className="text-white font-semibold text-base inline-flex items-center gap-2 hover:gap-3 transition-all pt-3.5 group">
            See how we work
            <span className="text-[#B8F7E4] group-hover:translate-x-0.5 transition-transform">→</span>
          </a>
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
