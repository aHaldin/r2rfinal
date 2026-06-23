import { Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#1B2D50] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-gray-300 text-lg">We&apos;ll reply within one business day.</p>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact details */}
          <div>
            <h2 className="text-2xl font-bold text-[#1B2D50] mb-6">Contact details</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-[#7C35BE] shrink-0" size={20} />
                <a href="mailto:info@road2resolve.digital" className="text-[#374151] hover:text-[#7C35BE] transition-colors">
                  info@road2resolve.digital
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-[#7C35BE] shrink-0" size={20} />
                <span className="text-[#374151]">Folkestone, Kent</span>
              </div>
            </div>
            <p className="text-[#6B7280] text-sm mt-6">
              We work with clients across the UK, remotely and in person.
            </p>
          </div>

          {/* Form */}
          <div>
            <form
              action="https://formsubmit.co/info@road2resolve.digital"
              method="POST"
              className="space-y-4"
            >
              {/* FormSubmit config */}
              <input type="hidden" name="_subject" value="New enquiry — Road2Resolve website" />
              <input type="hidden" name="_next" value="https://road2resolve.digital/thank-you" />
              <input type="hidden" name="_captcha" value="false" />

              <div>
                <label className="block text-sm font-semibold text-[#1B2D50] mb-1">Name</label>
                <input name="name" required className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-[#7C35BE]" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1B2D50] mb-1">Email</label>
                <input name="email" type="email" required className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-[#7C35BE]" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1B2D50] mb-1">
                  Company <span className="text-[#6B7280] font-normal">(optional)</span>
                </label>
                <input name="company" className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-[#7C35BE]" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1B2D50] mb-1">Message</label>
                <textarea name="message" required rows={5} className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-[#7C35BE] resize-none" />
              </div>
              <button type="submit" className="w-full bg-[#7C35BE] text-white font-semibold py-3 rounded-md hover:bg-[#6a2da0] transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
