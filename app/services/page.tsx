import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Roofing, Storm Damage, Siding, Gutters, Windows",
  description:
    "Complete exterior services for Calgary homes — roofing, hail & storm damage, siding, gutters, windows, and commercial flat roofs.",
};

const SERVICES = [
  {
    id: "roofing",
    eyebrow: "Our flagship",
    title: "Residential Roofing",
    image: "/photos/aerial-1.webp",
    body: [
      "Asphalt shingle, metal, and synthetic roofing — installed by a crew that's done thousands of Calgary homes.",
      "Every roof we install is backed by a lifetime workmanship warranty. No fine print, no sunset clause. If it ever fails because of how we installed it, we make it right.",
    ],
    bullets: [
      "Full roof replacement",
      "Targeted repair & re-shingling",
      "New construction roofing",
      "GAF / IKO / Malarkey shingle systems",
    ],
  },
  {
    id: "storm",
    eyebrow: "Calgary specialty",
    title: "Storm & Hail Damage",
    image: "/photos/aerial-2.webp",
    body: [
      "Calgary leads Canada in hail. We've seen it all — from light dimpling to total deck replacements.",
      "We handle the full insurance claim process: photos, documentation, supplements, and the back-and-forth with your adjuster. Most clients sign a single piece of paper and we take it from there.",
    ],
    bullets: [
      "Free post-storm inspections",
      "Insurance claim support",
      "Emergency tarping & water mitigation",
      "Full storm restoration",
    ],
  },
  {
    id: "siding",
    eyebrow: "Curb appeal",
    title: "Siding",
    image: "/photos/finished-navy.webp",
    body: [
      "Vinyl, Hardie board, and modern engineered profiles. We install siding that's built for Alberta — engineered to handle 60° temperature swings without warping, fading, or pulling away from your home.",
      "The same crew that does your roof handles your siding. Same warranty. Same standard.",
    ],
    bullets: [
      "Full home re-siding",
      "James Hardie certified installs",
      "Soffit, fascia & trim packages",
      "Stone & manufactured veneer accents",
    ],
  },
  {
    id: "gutters",
    eyebrow: "Foundation protection",
    title: "Gutters & Eavestroughs",
    image: "/photos/aerial-3.webp",
    body: [
      "Seamless 5\" and 6\" eavestroughs, professionally installed and properly pitched so water actually goes where it should.",
      "Bad gutters = water in your basement. We design every gutter system for the actual roof we're working on, not a one-size template.",
    ],
    bullets: [
      "Seamless eavestrough installation",
      "Downspout & extension fitting",
      "Gutter guards & leaf protection",
      "Repair & re-pitching",
    ],
  },
  {
    id: "commercial",
    eyebrow: "For Calgary businesses",
    title: "Commercial Roofing",
    image: "/photos/aerial-grid.webp",
    body: [
      "TPO, EPDM, and modified bitumen for Calgary commercial properties. We work with property managers and building owners on flat-roof installation, repair, and full replacement.",
      "Quotes turned around in 48 hours, work scheduled around your operating hours.",
    ],
    bullets: [
      "Flat roof installation & replacement",
      "Roof inspections for property managers",
      "Maintenance contracts",
      "Insurance & warranty work",
    ],
  },
  {
    id: "windows",
    eyebrow: "Year-round savings",
    title: "Windows",
    image: "/photos/siding-4up.webp",
    body: [
      "Energy-efficient triple-pane window replacement. Calgary winters are brutal on inefficient windows — most homes recover the cost of new windows in heating savings within 6–8 years.",
      "We handle the full install, including capping and finish work. Done in a day for most homes.",
    ],
    bullets: [
      "Triple-pane window replacement",
      "Patio & sliding doors",
      "Custom shapes & sizes",
      "Energy Star rated systems",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-steel-950 pt-20 pb-12 lg:pt-28 lg:pb-16 border-b border-white/5">
        <div className="container-x max-w-3xl">
          <Reveal>
            <div className="text-rope-500 text-xs font-bold uppercase tracking-[0.25em] mb-4">
              Services
            </div>
            <h1 className="display text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              One crew.<br />
              <span className="text-rope-500">Everything outside.</span>
            </h1>
            <p className="text-steel-400 text-lg max-w-xl">
              Six services. One warranty. One number to call — for every part of
              your home&apos;s exterior.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services list */}
      <div className="bg-steel-950">
        {SERVICES.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            className={`py-20 lg:py-28 ${i % 2 === 1 ? "bg-steel-900/40" : ""} border-b border-white/5 scroll-mt-24`}
          >
            <div className="container-x">
              <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <Reveal className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-white/10">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </Reveal>
                <Reveal delay={0.1}>
                  <div className="text-rope-500 text-xs font-bold uppercase tracking-[0.25em] mb-3">
                    {s.eyebrow}
                  </div>
                  <h2 className="display text-white text-4xl md:text-5xl mb-5">
                    {s.title}
                  </h2>
                  <div className="space-y-4 text-steel-300 text-[15px] leading-relaxed mb-8">
                    {s.body.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-8">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-steel-200">
                        <svg className="w-4 h-4 mt-0.5 text-rope-500 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" clipRule="evenodd" />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-rope-600 hover:bg-rope-700 text-white text-sm font-bold uppercase tracking-wider px-6 py-3.5 rounded-md transition"
                  >
                    Free quote on {s.title.toLowerCase()}
                    <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </Reveal>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-steel-900 py-20">
        <div className="container-x text-center">
          <h2 className="display text-white text-4xl md:text-5xl mb-4">
            Don&apos;t see what you need?
          </h2>
          <p className="text-steel-400 mb-8 max-w-md mx-auto">
            If it&apos;s outside your home, we probably do it. Call us — we&apos;ll tell you straight.
          </p>
          <a
            href="tel:18449917663"
            className="inline-flex items-center gap-2 bg-rope-600 hover:bg-rope-700 text-white text-sm font-bold uppercase tracking-wider px-7 py-4 rounded-md transition"
          >
            (844) 991-ROOF
          </a>
        </div>
      </section>
    </>
  );
}
