import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Calgary's #1 5-Star Roofing & Exteriors Crew",
  description:
    "Family-owned, Calgary-based, and on Alberta roofs since 2010. Meet the Cowboys crew protecting Calgary homes through 60° temperature swings, hail seasons, and chinook winds.",
};

const PRINCIPLES = [
  {
    title: "Treat every home like it&apos;s ours.",
    body: "If we wouldn&apos;t put it on our own house, it doesn&apos;t go on yours. Same materials, same care, same finish.",
  },
  {
    title: "Honest numbers, even when it costs us a job.",
    body: "We&apos;ll tell you when a repair beats a replacement. We&apos;ll tell you when our quote is higher than the other guy&apos;s, and why. We&apos;d rather lose a job than burn a name.",
  },
  {
    title: "Show up when we said we would.",
    body: "If we&apos;re running late, you get a call — not silence. The hardest part of being a Calgary homeowner shouldn&apos;t be wondering whether your contractor is coming.",
  },
];

const ABOUT_STATS = [
  { num: "15+", label: "Years on Calgary roofs" },
  { num: "3,284", label: "Projects completed" },
  { num: "1,324+", label: "Satisfied clients" },
  { num: "★ 4.8", label: "300+ five-star reviews" },
];

const CREDENTIALS: Array<[string, string]> = [
  ["Alberta licensed roofing contractor", "Our license is current and verifiable through the province."],
  ["WCB covered", "Every crew member is covered. If something happens on your property, you&apos;re not on the hook."],
  ["Liability insured", "$2M general liability coverage on every project."],
  ["BBB Accredited", "Calgary BBB accredited business in good standing."],
  ["Lifetime workmanship warranty", "On every install. Documented in writing."],
  ["Price-match guarantee", "We&apos;ll beat any comparable quote from a 5+ year licensed Alberta competitor."],
];

export default function AboutPage() {
  return (
    <>
      {/* Hero — image-led with overlap card */}
      <section className="relative bg-steel-950 pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-white/5">
        <div className="container-x grid lg:grid-cols-12 gap-10 items-center">
          <Reveal className="lg:col-span-7 order-2 lg:order-1">
            <div className="text-rope-500 text-xs font-bold uppercase tracking-[0.25em] mb-4">
              About Cowboys
            </div>
            <h1 className="display text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              Calgary craftsmen.<br />
              <span className="text-rope-500">Since 2010.</span>
            </h1>
            <p className="text-steel-300 text-lg leading-relaxed max-w-xl">
              We started as one truck and a roof patch in NE Calgary. Fifteen
              years later we&apos;ve done over three thousand projects — and we
              still pick up the phone ourselves.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-white/10">
              <Image
                src="/photos/finished-navy.webp"
                alt="A Calgary home recently finished by Cowboys Roofing & Exteriors"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                priority
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/55 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-md">
                A finished Cowboys job, just outside Calgary.
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="bg-steel-950 py-24 lg:py-28">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5">
            <div className="text-rope-500 text-xs font-bold uppercase tracking-[0.25em] mb-3">
              Our story
            </div>
            <h2 className="display text-white text-4xl md:text-5xl leading-tight">
              Built by Albertans, for Alberta homes.
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-7 space-y-5 text-steel-300 text-[16px] leading-relaxed">
            <p>
              Cowboys Roofing &amp; Exteriors started in 2010 with a simple idea: do
              the work right, charge fairly, and answer the phone. Fifteen years on,
              that&apos;s still the playbook.
            </p>
            <p>
              We&apos;re Calgary based and family run. Our crews live in the same
              neighbourhoods we work in. When a job goes sideways at 4pm — and on
              roofs, jobs go sideways — the owner is twenty minutes away, not in a
              corporate office in another province.
            </p>
            <p>
              Calgary doesn&apos;t make life easy on a roof. Hail in summer, ice damming
              in winter, chinook winds yanking shingles every other week. We&apos;ve
              built our entire system — materials, install standards, warranty —
              around what Alberta actually does to a house. Not what works in
              Florida or Ontario.
            </p>
            <p>
              That&apos;s why we back every install for life. If it ever fails because
              of how we installed it, we make it right. Period.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stat band — visual moment */}
      <section className="relative overflow-hidden border-y border-white/5">
        <div className="absolute inset-0">
          <Image
            src="/photos/aerial-grid.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-r from-steel-950 via-steel-950/95 to-steel-950/75" />
        </div>
        <div className="relative container-x py-16 lg:py-20">
          <Reveal className="text-rope-500 text-xs font-bold uppercase tracking-[0.25em] mb-8">
            By the numbers
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
            {ABOUT_STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.05}>
                <div className="display text-5xl md:text-6xl text-white">
                  {s.num}
                </div>
                <div className="text-[11px] uppercase tracking-wider text-steel-300 mt-2">
                  {s.label}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-steel-950 py-24 lg:py-32">
        <div className="container-x">
          <Reveal className="max-w-2xl mb-14">
            <div className="text-rope-500 text-xs font-bold uppercase tracking-[0.25em] mb-4">
              How we work
            </div>
            <h2 className="display text-white text-5xl md:text-6xl leading-tight">
              Three rules. We don&apos;t break them.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="border-t-2 border-rope-500 pt-6">
                  <h3
                    className="display text-2xl text-white mb-3"
                    dangerouslySetInnerHTML={{ __html: p.title }}
                  />
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

      {/* Credentials */}
      <section className="bg-gradient-to-b from-steel-950 via-steel-900 to-steel-950 py-24 lg:py-32 border-y border-white/5">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <Reveal className="relative aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-white/10">
            <Image
              src="/photos/aerial-3.webp"
              alt="Close-up of shingles installed on a Calgary roof — craftsmanship detail"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="text-rope-500 text-xs font-bold uppercase tracking-[0.25em] mb-3">
              Credentials
            </div>
            <h2 className="display text-white text-4xl md:text-5xl mb-6">
              Licensed, insured, accredited.
            </h2>
            <ul className="space-y-3.5 text-steel-300">
              {CREDENTIALS.map(([title, body]) => (
                <li key={title} className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 text-rope-500 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" clipRule="evenodd" />
                  </svg>
                  <span>
                    <span className="text-white font-semibold">{title}.</span>{" "}
                    <span className="text-steel-400" dangerouslySetInnerHTML={{ __html: body }} />
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-rope-600 hover:bg-rope-700 text-white text-sm font-bold uppercase tracking-wider px-6 py-3.5 rounded-md transition"
            >
              Talk to us
              <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
