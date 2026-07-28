import Image from "next/image";
import Button from "./Button";
import { founder } from "@/lib/trust";

export default function FounderSection() {
  return (
    <section className="bg-[#F5F7F6] py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-14 items-center">
        <div className="lg:col-span-3">
          <p className="text-xs font-bold section-label text-[#0FA284] uppercase mb-4">Who you will be working with</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#25272C] mb-6">
            You get the people who build it. Every time.
          </h2>
          <div className="space-y-5 text-[#374151] text-lg leading-relaxed">
            <p>
              Road2Resolve is a boutique consultancy, not an agency. There is no account manager between you and the work, and nothing gets handed to a junior or sent offshore.
            </p>
            <p>
              We started it because we kept seeing the same thing: capable, profitable businesses quietly held back by admin nobody should still be doing by hand. The technology to fix it already exists and costs less than another hire — what most businesses lack is someone to decide what to automate first and build it properly.
            </p>
            <p>
              That is the whole job. We come from operations, not software sales, so we start with how your business actually runs rather than a product we are trying to place.
            </p>
          </div>
          <div className="mt-8">
            <Button href="/about" variant="outline">More about how we work</Button>
          </div>
        </div>

        <div className="lg:col-span-2">
          {founder.photo ? (
            <Image
              src={founder.photo}
              alt={founder.name ? founder.name + ", " + founder.role : "Road2Resolve"}
              width={640}
              height={800}
              className="rounded-3xl w-full h-auto object-cover shadow-2xl shadow-black/20"
            />
          ) : (
            <div className="hero-glow rounded-3xl aspect-[4/5] flex items-center justify-center relative overflow-hidden shadow-2xl shadow-black/25">
              <div className="absolute inset-0 grid-pattern pointer-events-none" />
              <div className="text-center px-8 relative">
                <p className="text-7xl font-extrabold text-white mb-3 tracking-tight">R²</p>
                <p className="text-xs text-gray-300 section-label uppercase mb-1">Road2Resolve</p>
                <p className="text-xs text-gray-400">Folkestone, Kent · Working UK-wide</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
