import Image from "next/image";
import { clientLogos } from "@/lib/trust";

export default function ClientLogos() {
  if (clientLogos.length === 0) return null;

  return (
    <section className="bg-white py-14 px-6 border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm text-[#6B7280] mb-8">Trusted by growing UK businesses</p>
        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
          {clientLogos.map((l) => (
            <Image
              key={l.name}
              src={l.src}
              alt={l.name}
              width={140}
              height={44}
              className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
