import { Mail, MapPin } from "lucide-react";
import { capacity } from "@/lib/config";

export default function ContactPage() {
  return (
    <>
      <section className="hero-glow text-white py-24 md:py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-5 animate-fade-up">Book your free automation audit</h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed animate-fade-up-1">Tell us how your business runs today. We will come back with an honest view of where your hours are going and what is worth automating first. We reply within one business day.</p>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact details */}
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-[#25272C] mb-6">Contact details</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-[#0FA284] shrink-0" size={20} />
                <a href="mailto:info@road2resolve.digital" className="text-[#374151] hover:text-[#0FA284] transition-colors">
                  info@road2resolve.digital
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-[#0FA284] shrink-0" size={20} />
                <span className="text-[#374151]">Folkestone, Kent</span>
              </div>
            </div>
            <p className="text-[#6B7280] text-sm mt-6">
              We work with clients across the UK, remotely and in person.
            </p>
          </div>

          {/* Form */}
          <div className="bg-[#F5F7F6] border border-gray-200/80 rounded-3xl p-8 md:p-10 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#0FA284] animate-pulse" />
              <p className="text-sm font-bold text-[#25272C]">
                {capacity.open} of {capacity.total} client spots currently open
              </p>
            </div>
            <form
              action="https://formsubmit.co/info@road2resolve.digital"
              method="POST"
              className="space-y-4"
            >
              {/* FormSubmit config */}
              <input type="hidden" name="_subject" value="New automation audit enquiry — Road2Resolve website" />
              <input type="hidden" name="_next" value="https://road2resolve.digital/thank-you" />
              <input type="hidden" name="_captcha" value="false" />

              <div>
                <label className="block text-sm font-semibold text-[#25272C] mb-1">Name</label>
                <input name="name" required className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#0FA284] focus:ring-4 focus:ring-teal-500/10 transition-all bg-white" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#25272C] mb-1">Email</label>
                <input name="email" type="email" required className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#0FA284] focus:ring-4 focus:ring-teal-500/10 transition-all bg-white" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#25272C] mb-1">
                  Company <span className="text-[#6B7280] font-normal">(optional)</span>
                </label>
                <input name="company" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#0FA284] focus:ring-4 focus:ring-teal-500/10 transition-all bg-white" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#25272C] mb-1">Message</label>
                <textarea name="message" required rows={5} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#0FA284] focus:ring-4 focus:ring-teal-500/10 transition-all bg-white resize-none" />
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-[#0FA284] to-[#35c9a3] text-white font-bold py-4 rounded-lg hover:from-[#0c8a70] hover:to-[#0FA284] shadow-lg shadow-teal-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
