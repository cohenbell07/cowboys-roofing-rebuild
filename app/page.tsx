import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

const SERVICES = [
  {
    id: "roofing",
    title: "Residential Roofing",
    short: "Replacement, repair, and new installation built for Alberta winters.",
    image: "/photos/aerial-1.webp",
  },
  {
    id: "storm",
    title: "Storm & Hail Damage",
    short: "Fast inspections, insurance-claim help, and full storm restoration.",
    image: "/photos/aerial-2.webp",
  },
  {
    id: "siding",
    title: "Siding",
    short: "Vinyl, Hardie board, and modern profiles that handle Calgary weather.",
    image: "/photos/finished-navy.webp",
  },
  {
    id: "gutters",
    title: "Gutters",
    short: "Seamless installation and repair to keep water away from your foundation.",
    image: "/photos/aerial-3.webp",
  },
  {
    id: "commercial",
    title: "Commercial Roofing",
    short: "Flat-roof installation, repair, and replacement for Calgary businesses.",
    image: "/photos/aerial-grid.webp",
  },
  {
    id: "windows",
    title: "Windows",
    short: "Energy-efficient replacement windows that pay you back every winter.",
    image: "/photos/siding-4up.webp",
  },
];

const STATS = [
  { num: "15+", label: "Years on Calgary roofs" },
  { num: "3,284", label: "Projects completed" },
  { num: "1,324+", label: "Satisfied clients" },
  { num: "300+", label: "5-star reviews" },
];

const REVIEWS = [
  {
    name: "Jenna M.",
    where: "Mahogany, SE Calgary",
    body: "After the August hail we had every roofer in the city in our driveway. Cowboys was the only crew that walked the roof, gave us a real number, and didn't pressure us. Job was done in two days. Cleanup was perfect.",
  },
  {
    name: "Derek W.",
    where: "Cranston",
    body: "Honest pricing and they actually showed up when they said they would — twice. Lifetime warranty seals it. Our roof looks better than the neighbour's brand new build.",
  },
  {
    name: "Priya S.",
    where: "Tuscany",
    body: "Insurance claim was painless because the Cowboys team handled the photos and the report. We just signed. Professional from start to finish.",
  },
];

const PILLARS = [
  {
    title: "Lifetime Workmanship Warranty",
    body: "If we install it, we stand behind it — for as long as you own the home. No fine print.",
  },
  {
    title: "Price-Match Guarantee",
    body: "Bring us a comparable quote from a licensed Alberta roofer with 5+ years in business and we&apos;ll beat it. No questions.",
  },
  {
    title: "Local. Family-Run. Insured.",
    body: "Calgary-based since 2010. Fully Alberta licensed, WCB covered, and liability insured. Your home is treated like ours.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-steel-950">
        <div className="absolute inset-0">
          <Image
            src="/photos/truck-hero.webp"
            alt="Cowboys Roofing branded truck on a Calgary residential street"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-steel-950 via-steel-950/85 to-steel-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-steel-950 via-transparent to-transparent" />
        </div>

        <div className="relative container-x pt-16 pb-20 lg:pt-24 lg:pb-28">
          <div className="max-w-2xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="bg-flag-500/15 text-flag-500 text-[10px] uppercase tracking-[0.25em] font-bold px-3 py-1.5 rounded-sm border border-flag-500/30">
                  Calgary&apos;s #1
                </span>
                <span className="text-steel-300 text-xs uppercase tracking-wider">
                  5-star rated · since 2010
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="display text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] mb-6">
                Anything<br />
                Exteriors.<br />
                <span className="text-rope-500">No Short</span> Cuts.
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-steel-300 text-lg leading-relaxed mb-10 max-w-lg">
                Roof replacement, hail &amp; storm damage, siding, gutters &amp; windows
                — built to handle Alberta. Backed by a{" "}
                <span className="text-white font-semibold">lifetime workmanship warranty</span>{" "}
                and a price-match guarantee.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="flex flex-wrap items-center gap-4 mb-12">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-rope-600 hover:bg-rope-700 text-white text-base font-bold uppercase tracking-wider px-7 py-4 rounded-md shadow-2xl shadow-rope-600/30 transition"
                >
                  Book your free inspection
                  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
                <a
                  href="tel:18449917663"
                  className="inline-flex items-center gap-3 text-white font-semibold hover:text-rope-400 group"
                >
                  <span className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-white/15 flex items-center justify-center transition">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </span>
                  (844) 991-ROOF
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-4 pt-8 border-t border-white/10 max-w-2xl">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <div className="display text-3xl sm:text-4xl text-white">
                      {s.num}
                    </div>
                    <div className="text-[11px] uppercase tracking-wider text-steel-300 mt-1">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Bottom credibility bar */}
        <div className="relative border-t border-white/10 bg-black/40 backdrop-blur">
          <div className="container-x py-4 flex items-center justify-between text-xs text-steel-300 flex-wrap gap-3">
            <div className="flex items-center gap-6 flex-wrap">
              <span>Google ★ 4.8 · 306 reviews</span>
              <span className="hidden md:inline">BBB Accredited</span>
              <span className="hidden lg:inline">Alberta licensed &amp; insured</span>
              <span className="hidden xl:inline">WCB covered</span>
            </div>
            <Link
              href="/#reviews"
              className="text-rope-400 font-semibold uppercase tracking-wider hover:text-white"
            >
              View 5-star reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-steel-950 py-24 lg:py-32">
        <div className="container-x">
          <Reveal className="max-w-2xl mb-14">
            <div className="text-rope-500 text-xs font-bold uppercase tracking-[0.25em] mb-4">
              What we do
            </div>
            <h2 className="display text-white text-5xl md:text-6xl leading-tight mb-4">
              One crew. Everything outside.
            </h2>
            <p className="text-steel-400 text-lg max-w-xl">
              Roofing leads our reputation, but we handle every part of your home&apos;s
              exterior. One crew. One warranty. One number to call.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.06}>
                <Link
                  href={`/services#${s.id}`}
                  className="group block relative aspect-[4/5] rounded-xl overflow-hidden ring-1 ring-white/5 hover:ring-rope-500/50 transition"
                >
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-steel-950 via-steel-950/40 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h3 className="display text-3xl text-white mb-2">{s.title}</h3>
                    <p className="text-steel-300 text-sm leading-relaxed mb-4 max-w-xs">
                      {s.short}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-rope-400 text-xs font-bold uppercase tracking-wider">
                      Learn more
                      <svg className="w-3 h-3 group-hover:translate-x-1 transition" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS / WHY */}
      <section className="bg-gradient-to-b from-steel-950 via-steel-900 to-steel-950 py-24 lg:py-32 border-y border-white/5">
        <div className="container-x">
          <Reveal className="max-w-2xl mb-14">
            <div className="text-rope-500 text-xs font-bold uppercase tracking-[0.25em] mb-4">
              Why Cowboys
            </div>
            <h2 className="display text-white text-5xl md:text-6xl leading-tight">
              Built on trust. Backed for life.
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="border-t-2 border-rope-500 pt-6">
                  <h3 className="display text-2xl text-white mb-3">{p.title}</h3>
                  <p
                    className="text-steel-400 text-[15px] leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: p.body }}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WORK GALLERY */}
      <section className="bg-steel-950 py-24 lg:py-32">
        <div className="container-x">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <div className="text-rope-500 text-xs font-bold uppercase tracking-[0.25em] mb-4">
                See the quality
              </div>
              <h2 className="display text-white text-5xl md:text-6xl leading-tight">
                Recent Calgary projects.
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-rope-400 font-bold uppercase tracking-wider text-sm hover:text-white shrink-0"
            >
              Get a quote on yours →
            </Link>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { src: "/photos/aerial-1.webp", alt: "Drone shot of completed Calgary roof", w: "lg:row-span-2 aspect-[3/4] lg:aspect-auto" },
              { src: "/photos/aerial-2.webp", alt: "Aerial of large home roof replacement", w: "aspect-square" },
              { src: "/photos/aerial-3.webp", alt: "Close-up of installed shingles", w: "aspect-square" },
              { src: "/photos/finished-navy.webp", alt: "Completed navy siding installation", w: "lg:col-span-2 aspect-[3/2] lg:aspect-[2/1]" },
              { src: "/photos/aerial-grid.webp", alt: "Four completed roof projects", w: "aspect-square" },
              { src: "/photos/siding-4up.webp", alt: "Siding before and after", w: "aspect-square" },
            ].map((p, i) => (
              <Reveal key={p.src} delay={i * 0.04} className={`relative ${p.w} rounded-lg overflow-hidden ring-1 ring-white/5 group`}>
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover group-hover:scale-105 transition duration-700"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="bg-steel-950 py-24 lg:py-32 border-t border-white/5">
        <div className="container-x">
          <Reveal className="max-w-2xl mb-14">
            <div className="text-rope-500 text-xs font-bold uppercase tracking-[0.25em] mb-4">
              ★★★★★ 300+ five-star reviews
            </div>
            <h2 className="display text-white text-5xl md:text-6xl leading-tight">
              Calgary trusts the Cowboys.
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.08}>
                <figure className="h-full bg-steel-900 rounded-xl p-7 ring-1 ring-white/5 flex flex-col">
                  <div className="text-rope-400 mb-4 tracking-widest">★★★★★</div>
                  <blockquote className="text-steel-200 text-[15px] leading-relaxed mb-6 flex-1">
                    &ldquo;{r.body}&rdquo;
                  </blockquote>
                  <figcaption className="text-sm">
                    <div className="text-white font-semibold">{r.name}</div>
                    <div className="text-steel-500 text-xs uppercase tracking-wider mt-0.5">{r.where}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 text-center">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Cowboys+Roofing&query_place_id=ChIJl175hsg1HSARr3Wfjwab_OE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-rope-400 font-bold uppercase tracking-wider text-sm hover:text-white"
            >
              Read all 306 Google reviews →
            </a>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative bg-steel-900 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/photos/aerial-grid.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-r from-steel-950 via-steel-950/90 to-steel-950/70" />
        </div>
        <div className="relative container-x py-20 lg:py-28">
          <div className="max-w-2xl">
            <Reveal>
              <h2 className="display text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
                Free roof inspection.<br />
                <span className="text-rope-500">No pressure.</span>
              </h2>
              <p className="text-steel-300 text-lg mb-10 max-w-lg">
                We&apos;ll walk the roof, send you a clear written report, and only
                quote what actually needs doing. Most inspections take 30 minutes.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-rope-600 hover:bg-rope-700 text-white text-base font-bold uppercase tracking-wider px-7 py-4 rounded-md shadow-2xl shadow-rope-600/30 transition"
                >
                  Book your inspection
                  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
                <a
                  href="tel:18449917663"
                  className="text-white font-semibold hover:text-rope-400"
                >
                  Or call (844) 991-ROOF
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
