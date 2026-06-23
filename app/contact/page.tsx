"use client";
import { useState } from "react";
import { Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
    });
    setSubmitted(true);
  }

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
            {submitted ? (
              <div className="bg-[#F4F6FA] rounded-lg p-8 text-center">
                <p className="text-xl font-bold text-[#1B2D50] mb-2">Thanks — we&apos;ll be in touch soon.</p>
                <p className="text-[#6B7280] text-sm">We aim to reply within one business day.</p>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div>
                  <label className="block text-sm font-semibold text-[#1B2D50] mb-1">Name</label>
                  <input name="name" required className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-[#7C35BE]" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1B2D50] mb-1">Email</label>
                  <input name="email" type="email" required className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-[#7C35BE]" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1B2D50] mb-1">Company</label>
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
            )}
          </div>
        </div>
      </section>
    </>
  );
}
