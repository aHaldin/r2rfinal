import Button from "./Button";

export default function Hero() {
  return (
    <section className="bg-[#1B2D50] text-white relative">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl mb-6">
          Your business runs on people. It shouldn&apos;t run on spreadsheets.
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10">
          We build monday.com systems that connect your teams, automate the handoffs, and give you visibility of everything — without the chaos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <Button href="/contact" variant="white">Get in Touch</Button>
          <a href="#how-it-works" className="text-[#7C35BE] font-semibold text-sm flex items-center gap-1 hover:text-purple-300 transition-colors pt-3">
            See how it works ↓
          </a>
        </div>
      </div>
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full h-12 md:h-16">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
