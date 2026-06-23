import Link from "next/link";

export const metadata = {
  title: "Message Sent | Road2Resolve",
};

export default function ThankYouPage() {
  return (
    <section className="bg-white py-32 px-6 text-center">
      <div className="max-w-xl mx-auto">
        <div className="w-16 h-16 rounded-full bg-[#F4F6FA] flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7C35BE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-[#1B2D50] mb-3">Message received.</h1>
        <p className="text-[#374151] mb-8">
          Thanks for getting in touch. We&apos;ll reply within one business day.
        </p>
        <Link href="/" className="inline-block bg-[#7C35BE] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#6a2da0] transition-colors">
          Back to home
        </Link>
      </div>
    </section>
  );
}
