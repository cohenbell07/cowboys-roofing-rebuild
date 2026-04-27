import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-white text-steel-700">
      {/* Brand accent strip */}
      <div className="h-1 bg-gradient-to-r from-rope-700 via-rope-500 to-rope-700" />
      <div className="container-x pt-12 pb-10 lg:pt-20 lg:pb-14 grid gap-8 lg:gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5 max-w-md">
          <Link href="/" aria-label="Home" className="inline-flex mb-6">
            <Image
              src="/cowboys-logo.png"
              alt="Cowboys Roofing, Siding & Gutters — Calgary, AB"
              width={1920}
              height={640}
              sizes="360px"
              className="h-24 w-auto"
            />
          </Link>
          <p className="text-steel-600 text-[15px] leading-relaxed mb-7 max-w-sm">
            Calgary&apos;s #1 5-star rated roofing &amp; exteriors company.
            Family-owned, locally operated, and backed by a lifetime
            workmanship warranty.
          </p>
          <div className="flex flex-col gap-3 text-sm">
            <a
              href="tel:18449917663"
              className="inline-flex items-center gap-2.5 text-steel-900 font-bold hover:text-rope-600 transition"
            >
              <span className="w-8 h-8 rounded-full bg-rope-50 text-rope-600 flex items-center justify-center" style={{ backgroundColor: "#dbeafe" }}>
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </span>
              (844) 991-ROOF
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-1 self-start bg-rope-600 hover:bg-rope-700 text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-md transition"
            >
              Book free inspection
              <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="lg:col-span-3 lg:col-start-7">
          <h4 className="text-[11px] uppercase tracking-[0.25em] text-steel-500 mb-5 font-bold">Services</h4>
          <ul className="space-y-3 text-[15px] text-steel-700">
            <li><Link href="/services#roofing" className="hover:text-rope-600 transition">Residential roofing</Link></li>
            <li><Link href="/services#commercial" className="hover:text-rope-600 transition">Commercial roofing</Link></li>
            <li><Link href="/services#storm" className="hover:text-rope-600 transition">Storm &amp; hail damage</Link></li>
            <li><Link href="/services#siding" className="hover:text-rope-600 transition">Siding</Link></li>
            <li><Link href="/services#gutters" className="hover:text-rope-600 transition">Gutters</Link></li>
            <li><Link href="/services#windows" className="hover:text-rope-600 transition">Windows</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-[11px] uppercase tracking-[0.25em] text-steel-500 mb-5 font-bold">Company</h4>
          <ul className="space-y-3 text-[15px] text-steel-700">
            <li><Link href="/about" className="hover:text-rope-600 transition">About us</Link></li>
            <li><Link href="/#reviews" className="hover:text-rope-600 transition">Reviews</Link></li>
            <li><Link href="/contact" className="hover:text-rope-600 transition">Contact</Link></li>
            <li><Link href="/contact" className="hover:text-rope-600 transition">Service area</Link></li>
          </ul>
        </div>

        {/* Follow strip — full width below columns on mobile, separate column on desktop */}
        <div className="lg:hidden flex items-center justify-between gap-4 pt-6 border-t border-steel-200">
          <h4 className="text-[11px] uppercase tracking-[0.25em] text-steel-500 font-bold">Follow</h4>
          <div className="flex items-center gap-2">
            {[
              { label: "Instagram", href: "https://www.instagram.com/cowboysroofingandexteriors", path: "M12 2.2c3.2 0 3.6 0 4.85.07 3.25.15 4.77 1.7 4.92 4.92.06 1.25.07 1.62.07 4.81s-.01 3.56-.07 4.81c-.15 3.21-1.66 4.77-4.92 4.92-1.25.06-1.62.07-4.85.07s-3.6-.01-4.85-.07c-3.27-.15-4.77-1.72-4.92-4.92-.06-1.25-.07-1.62-.07-4.81s.01-3.56.07-4.81C2.38 3.97 3.89 2.42 7.15 2.27 8.4 2.21 8.77 2.2 12 2.2zm0 1.8c-3.17 0-3.55.01-4.78.07-2.34.11-3.39 1.18-3.5 3.5-.06 1.23-.07 1.6-.07 4.73s.01 3.5.07 4.73c.11 2.32 1.16 3.39 3.5 3.5 1.23.06 1.6.07 4.78.07s3.55-.01 4.78-.07c2.34-.11 3.39-1.18 3.5-3.5.06-1.23.07-1.6.07-4.73s-.01-3.5-.07-4.73c-.11-2.32-1.16-3.39-3.5-3.5C15.55 4.01 15.17 4 12 4zm0 3.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 7.4a2.9 2.9 0 100-5.8 2.9 2.9 0 000 5.8zm5.7-7.6a1.05 1.05 0 11-2.1 0 1.05 1.05 0 012.1 0z" },
              { label: "Facebook", href: "https://www.facebook.com/CowboysRoofingandExteriorsALTA", path: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" },
              { label: "TikTok", href: "https://www.tiktok.com/@cowboysroofingcalgary", path: "M19.6 7.4a6.16 6.16 0 01-3.6-1.15v8.5a5.4 5.4 0 11-5.4-5.4c.31 0 .61.03.9.08v2.5a2.92 2.92 0 102.04 2.78V2h2.46c0 .19.02.38.05.56a3.6 3.6 0 003.55 3.04v1.8z" },
              { label: "YouTube", href: "https://www.youtube.com/channel/UC-IDYwsC_E0vQr-wYqNqQTw", path: "M21.58 7.19c-.23-.86-.9-1.54-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.82.42c-.86.23-1.54.91-1.76 1.77C2 8.76 2 12 2 12s0 3.24.42 4.81c.22.86.9 1.54 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.82-.42c.86-.23 1.54-.91 1.76-1.77C22 15.24 22 12 22 12s0-3.24-.42-4.81zM10 15V9l5.2 3-5.2 3z" },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="w-9 h-9 rounded-full border border-steel-300 text-steel-600 hover:border-rope-500 hover:text-rope-600 inline-flex items-center justify-center transition">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d={s.path} /></svg>
              </a>
            ))}
          </div>
        </div>

        {/* Desktop-only follow stack inside the last column */}
        <div className="hidden lg:block lg:col-span-3 lg:col-start-10">
          <h4 className="text-[11px] uppercase tracking-[0.25em] text-steel-500 mb-4 font-bold">Follow</h4>
          <div className="flex items-center gap-2">
            {[
              { label: "Instagram", href: "https://www.instagram.com/cowboysroofingandexteriors", path: "M12 2.2c3.2 0 3.6 0 4.85.07 3.25.15 4.77 1.7 4.92 4.92.06 1.25.07 1.62.07 4.81s-.01 3.56-.07 4.81c-.15 3.21-1.66 4.77-4.92 4.92-1.25.06-1.62.07-4.85.07s-3.6-.01-4.85-.07c-3.27-.15-4.77-1.72-4.92-4.92-.06-1.25-.07-1.62-.07-4.81s.01-3.56.07-4.81C2.38 3.97 3.89 2.42 7.15 2.27 8.4 2.21 8.77 2.2 12 2.2zm0 1.8c-3.17 0-3.55.01-4.78.07-2.34.11-3.39 1.18-3.5 3.5-.06 1.23-.07 1.6-.07 4.73s.01 3.5.07 4.73c.11 2.32 1.16 3.39 3.5 3.5 1.23.06 1.6.07 4.78.07s3.55-.01 4.78-.07c2.34-.11 3.39-1.18 3.5-3.5.06-1.23.07-1.6.07-4.73s-.01-3.5-.07-4.73c-.11-2.32-1.16-3.39-3.5-3.5C15.55 4.01 15.17 4 12 4zm0 3.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 7.4a2.9 2.9 0 100-5.8 2.9 2.9 0 000 5.8zm5.7-7.6a1.05 1.05 0 11-2.1 0 1.05 1.05 0 012.1 0z" },
              { label: "Facebook", href: "https://www.facebook.com/CowboysRoofingandExteriorsALTA", path: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" },
              { label: "TikTok", href: "https://www.tiktok.com/@cowboysroofingcalgary", path: "M19.6 7.4a6.16 6.16 0 01-3.6-1.15v8.5a5.4 5.4 0 11-5.4-5.4c.31 0 .61.03.9.08v2.5a2.92 2.92 0 102.04 2.78V2h2.46c0 .19.02.38.05.56a3.6 3.6 0 003.55 3.04v1.8z" },
              { label: "YouTube", href: "https://www.youtube.com/channel/UC-IDYwsC_E0vQr-wYqNqQTw", path: "M21.58 7.19c-.23-.86-.9-1.54-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.82.42c-.86.23-1.54.91-1.76 1.77C2 8.76 2 12 2 12s0 3.24.42 4.81c.22.86.9 1.54 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.82-.42c.86-.23 1.54-.91 1.76-1.77C22 15.24 22 12 22 12s0-3.24-.42-4.81zM10 15V9l5.2 3-5.2 3z" },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="w-9 h-9 rounded-full border border-steel-300 text-steel-600 hover:border-rope-500 hover:text-rope-600 inline-flex items-center justify-center transition">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d={s.path} /></svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-steel-200">
        <div className="container-x py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 text-xs text-steel-500">
          <div>© {new Date().getFullYear()} Cowboys Roofing &amp; Exteriors Inc. · Calgary, Alberta</div>
          <div className="flex items-center gap-5">
            <span>Alberta licensed &amp; insured</span>
            <span>BBB Accredited</span>
            <span className="text-steel-400">★ 4.8 / 306 reviews</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
