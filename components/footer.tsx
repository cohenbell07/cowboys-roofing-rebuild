import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/5">
      <div className="container-x py-16 grid gap-10 lg:grid-cols-4">
        <div className="lg:col-span-2 max-w-md">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-md bg-white text-steel-950 flex items-center justify-center display text-2xl">
              C
            </div>
            <div className="leading-tight">
              <div className="display text-2xl text-white tracking-wide">COWBOYS</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-rope-500 -mt-1">
                Roofing &amp; Exteriors
              </div>
            </div>
          </div>
          <p className="text-steel-400 text-sm leading-relaxed mb-6">
            Calgary&apos;s #1 5-star rated roofing &amp; exteriors company.
            Family-owned, locally operated, and backed by a lifetime workmanship warranty.
          </p>
          <a
            href="tel:18449917663"
            className="inline-flex items-center gap-2 text-white font-semibold hover:text-rope-400"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            (844) 991-ROOF
          </a>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-steel-500 mb-4">Services</h4>
          <ul className="space-y-2.5 text-sm text-steel-300">
            <li><Link href="/services#roofing" className="hover:text-white">Residential roofing</Link></li>
            <li><Link href="/services#commercial" className="hover:text-white">Commercial roofing</Link></li>
            <li><Link href="/services#storm" className="hover:text-white">Storm &amp; hail damage</Link></li>
            <li><Link href="/services#siding" className="hover:text-white">Siding</Link></li>
            <li><Link href="/services#gutters" className="hover:text-white">Gutters</Link></li>
            <li><Link href="/services#windows" className="hover:text-white">Windows</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-steel-500 mb-4">Company</h4>
          <ul className="space-y-2.5 text-sm text-steel-300">
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/#reviews" className="hover:text-white">Reviews</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/contact" className="hover:text-white">Book free inspection</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-x py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-steel-500">
          <div>© {new Date().getFullYear()} Cowboys Roofing &amp; Exteriors Inc. · Calgary, Alberta</div>
          <div className="flex items-center gap-5">
            <span>Alberta licensed &amp; insured</span>
            <span>BBB Accredited</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
