"use client";

import { useState } from "react";
import Image from "next/image";

const navItems = [
  { label: "The Problem", href: "#problem" },
  { label: "Why Us", href: "#why" },
  { label: "Programme", href: "#programme" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Training & CPD", href: "/cpd" },
  { label: "School Support", href: "/schools" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#F7F7F4]/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-3 md:px-8">
        <div className="flex items-center justify-between gap-3">
          <a href="/" className="flex min-w-0 items-center gap-3">
            <Image
              src="/logo.png"
              alt="Warren Dodd Education"
              width={72}
              height={72}
              className="h-14 w-14 flex-none object-contain sm:h-16 sm:w-16"
              priority
            />

            <div className="min-w-0">
              <p className="truncate text-[1.45rem] font-semibold leading-none tracking-[-0.04em] text-[#12284C] sm:text-[1.85rem]">
                Warren Dodd Education
              </p>
              <p className="hidden text-[0.72rem] uppercase tracking-[0.18em] text-slate-500 md:block">
                Bespoke daytime tutoring • training &amp; CPD • home &amp; hybrid education
              </p>
            </div>
          </a>

          <div className="hidden xl:flex items-center gap-4">
            <nav className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 text-sm font-medium text-slate-700">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="transition hover:text-[#12284C]"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href="/contact"
              className="rounded-full bg-[#12284C] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              Make an Enquiry
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-[#12284C] xl:hidden"
          >
            <span className="text-2xl leading-none">{open ? "×" : "☰"}</span>
          </button>
        </div>

        {open && (
          <div className="mt-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-lg xl:hidden">
            <nav className="grid gap-2 text-base font-medium text-slate-800">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-2 py-2 transition hover:bg-slate-50 hover:text-[#12284C]"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#12284C] px-6 py-4 text-center font-semibold text-white"
            >
              Make an Enquiry
            </a>
          </div>
        )}
      </div>
    </header>
  );
}