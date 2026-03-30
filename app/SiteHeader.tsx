
import Image from "next/image";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-[#F7F7F4]/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-3 md:px-10">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
          <a href="/" className="flex min-w-0 items-center gap-4">
            <Image
              src="/logo.png"
              alt="Warren Dodd Education"
              width={260}
              height={260}
              className="h-[118px] w-[118px] flex-none object-contain md:h-[138px] md:w-[138px]"
              priority
            />
            <div className="min-w-0">
              <p className="truncate text-[1.7rem] font-semibold tracking-[-0.03em] text-[#12284C] md:text-[2rem]">
                Warren Dodd Education
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-slate-500 md:text-[12px]">
                Bespoke daytime tutoring • Training &amp; CPD • Home &amp; hybrid education
              </p>
            </div>
          </a>

          <div className="flex flex-col gap-4 xl:items-end">
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-slate-700">
              <a href="/#problem" className="transition hover:text-[#12284C]">
                The Problem
              </a>
              <a href="/#why" className="transition hover:text-[#12284C]">
                Why Us
              </a>
              <a href="/#programme" className="transition hover:text-[#12284C]">
                Programme
              </a>
              <a href="/cpd" className="transition hover:text-[#12284C]">
                Training &amp; CPD
              </a>
              <a href="/schools" className="transition hover:text-[#12284C]">
                School Support
              </a>
              <a href="/#testimonials" className="transition hover:text-[#12284C]">
                Testimonials
              </a>
              <a href="/contact" className="transition hover:text-[#12284C]">
                Contact
              </a>
            </nav>

            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#12284C] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-300/40 transition hover:-translate-y-0.5"
            >
              Make an Enquiry
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
