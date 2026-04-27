"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const NAV = [
  { label: "Roofing", href: "/services#roofing" },
  { label: "Storm Damage", href: "/services#storm" },
  { label: "Exteriors", href: "/services#exteriors" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/#reviews" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-black/80 text-steel-300 text-xs">
        <div className="container-x py-2 flex items-center justify-between gap-4">
          <div className="flex items-center gap-5 min-w-0">
            <span className="whitespace-nowrap">
              <span className="text-rope-400">★★★★★</span>{" "}
              <span className="text-white font-semibold">300+</span> 5-star reviews
            </span>
            <span className="hidden md:inline text-steel-400">
              15+ years protecting Calgary homes
            </span>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <span className="hidden lg:inline text-steel-400">
              Lifetime workmanship warranty
            </span>
            <a
              href="tel:18449917663"
              className="text-white font-semibold hover:text-rope-400 transition"
            >
              (844) 991-ROOF
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-30 bg-steel-950/95 backdrop-blur supports-[backdrop-filter]:bg-steel-950/80 border-b border-white/5">
        <div className="container-x h-24 sm:h-28 flex items-center justify-between">
          <Link
            href="/"
            aria-label="Cowboys Roofing, Siding & Gutters — Calgary, AB · Home"
            className="flex items-center shrink-0"
          >
            <Image
              src="/cowboys-logo.png"
              alt="Cowboys Roofing, Siding & Gutters — Calgary, AB"
              width={1920}
              height={640}
              priority
              sizes="(min-width: 640px) 280px, 220px"
              className="h-16 sm:h-20 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold uppercase tracking-wider text-steel-300">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-white transition relative group"
              >
                {item.label}
                <span className="absolute left-0 right-0 -bottom-1.5 h-px bg-rope-500 scale-x-0 group-hover:scale-x-100 origin-left transition" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 bg-rope-600 hover:bg-rope-700 text-white text-sm font-bold uppercase tracking-wider px-5 py-3 rounded-md transition"
            >
              Free Inspection
              <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
            </Link>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="md:hidden w-11 h-11 inline-flex items-center justify-center rounded-md text-white hover:bg-white/5"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                {open ? (
                  <>
                    <line x1="6" y1="6" x2="18" y2="18" />
                    <line x1="6" y1="18" x2="18" y2="6" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="7" x2="20" y2="7" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="17" x2="20" y2="17" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden border-t border-white/5"
            >
              <div className="container-x py-4 flex flex-col">
                {NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="py-3 text-base font-semibold uppercase tracking-wider text-steel-200 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex items-center justify-center gap-2 bg-rope-600 hover:bg-rope-700 text-white text-sm font-bold uppercase tracking-wider px-5 py-3.5 rounded-md"
                >
                  Free Inspection
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
