import Button from "./Button";

export default function FinalCTA() {
  return (
    <section className="bg-[#7C35BE] py-20 px-6 text-white text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to sort your operations out?</h2>
        <p className="text-purple-200 mb-8 text-lg">
          No pitch, no pressure — just a straight conversation about where your business is and whether we can help.
        </p>
        <Button href="/contact" variant="white">Get in Touch</Button>
        <p className="mt-4 text-sm text-purple-200">
          Or email us directly:{" "}
          <a href="mailto:info@road2resolve.digital" className="underline hover:text-white transition-colors">
            info@road2resolve.digital
          </a>
        </p>
      </div>
    </section>
  );
}
