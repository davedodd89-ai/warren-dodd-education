"use client";

import { useState } from "react";
import Image from "next/image";

const navItems = [
  { label: "The Challenge", href: "#challenge" },
  { label: "Why Us", href: "#why" },
  { label: "Programme", href: "#programme" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Enquiry", href: "#enquiry" },
  { label: "Training & CPD", href: "/cpd" },
  { label: "School Support", href: "/schools" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-[#F7F7F4]/90 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 py-3 md:px-8">
        <div className="flex items-center justify-between gap-4">
          <a href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Warren Dodd Education"
              width={220}
              height={220}
              className="h-16 w-auto object-contain sm:h-20"
              priority
            />
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
            aria-expanded={open}
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