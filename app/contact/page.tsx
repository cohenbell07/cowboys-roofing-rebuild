import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Free Inspection — Cowboys Roofing & Exteriors",
  description:
    "Book your free Calgary roof inspection or get a quote on roofing, siding, gutters, or windows. Most inspections take 30 minutes.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-steel-950 pt-20 pb-12 lg:pt-28 lg:pb-16 border-b border-white/5">
        <div className="container-x max-w-3xl">
          <Reveal>
            <div className="text-rope-500 text-xs font-bold uppercase tracking-[0.25em] mb-4">
              Get in touch
            </div>
            <h1 className="display text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              Free inspection.<br />
              <span className="text-rope-500">Honest quote.</span>
            </h1>
            <p className="text-steel-300 text-lg max-w-xl">
              Tell us what&apos;s going on with your home and we&apos;ll be in touch within
              one business day. Most inspections happen within the week.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-steel-950 py-16 lg:py-20">
        <div className="container-x grid lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-7">
            <ContactForm />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="bg-steel-900 rounded-2xl p-8 ring-1 ring-white/5 space-y-7">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-steel-500 mb-2">
                  Call us
                </div>
                <a
                  href="tel:18449917663"
                  className="display text-white text-3xl hover:text-rope-400 transition"
                >
                  (844) 991-ROOF
                </a>
                <div className="text-steel-400 text-sm mt-1">
                  Monday–Saturday · 7am–7pm
                </div>
              </div>

              <div className="border-t border-white/5 pt-7">
                <div className="text-xs uppercase tracking-[0.2em] text-steel-500 mb-2">
                  Service area
                </div>
                <p className="text-steel-300 text-sm leading-relaxed">
                  Calgary &amp; surrounding areas including Airdrie, Cochrane,
                  Okotoks, Chestermere, and Strathmore.
                </p>
              </div>

              <div className="border-t border-white/5 pt-7">
                <div className="text-xs uppercase tracking-[0.2em] text-steel-500 mb-2">
                  Storm or emergency?
                </div>
                <p className="text-steel-300 text-sm leading-relaxed">
                  Active leak or storm damage? Call us first — we&apos;ll get someone
                  on a tarp before paperwork starts.
                </p>
              </div>

              <div className="border-t border-white/5 pt-7">
                <div className="text-xs uppercase tracking-[0.2em] text-steel-500 mb-2">
                  Find us
                </div>
                <div className="flex flex-col gap-2 text-sm">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Cowboys+Roofing&query_place_id=ChIJl175hsg1HSARr3Wfjwab_OE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-rope-400 hover:text-white"
                  >
                    Google Maps →
                  </a>
                  <a
                    href="https://www.instagram.com/cowboysroofingandexteriors"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-rope-400 hover:text-white"
                  >
                    Instagram →
                  </a>
                  <a
                    href="https://www.facebook.com/CowboysRoofingandExteriorsALTA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-rope-400 hover:text-white"
                  >
                    Facebook →
                  </a>
                  <a
                    href="https://www.tiktok.com/@cowboysroofingcalgary"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-rope-400 hover:text-white"
                  >
                    TikTok →
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
