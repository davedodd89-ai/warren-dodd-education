﻿"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Who is this for?", href: "/why" },
  { label: "Our Approach", href: "/approach" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Support for Schools", href: "/schools" },
  { label: "Policies", href: "/policies" }, // ← LAST = far right
];

export default function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-[#F7F7F4]/95 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 py-3 md:px-8">
        {/* Desktop */}
        <div className="hidden xl:flex xl:items-center xl:justify-between xl:gap-8">
          <Link href="/" className="shrink-0">
            <img
              src="/logo.svg"
              alt="Warren Dodd Education"
              className={`h-auto object-contain ${
                isHome ? "w-[260px]" : "w-[220px]"
              }`}
            />
          </Link>

          <nav className="flex items-center gap-6 text-sm font-medium text-slate-700">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-[#D8B35B]/25 bg-[#FBFBF9] px-4 py-2 text-sm font-semibold text-[#12284C] shadow-[0_6px_18px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5 hover:border-[#D8B35B]/40"
            >
              Home
            </Link>

            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`transition hover:text-[#12284C] ${
                  pathname === item.href ? "text-[#12284C]" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="rounded-full bg-[#12284C] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
          >
            Make an Enquiry
          </Link>
        </div>

        {/* Mobile / Tablet */}
        <div className="xl:hidden">
          <div className="relative grid min-h-[88px] grid-cols-[1fr_auto_1fr] items-center">
            <div className="justify-self-start">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-[#D8B35B]/25 bg-[#FBFBF9] px-4 py-2 text-sm font-semibold text-[#12284C] shadow-[0_6px_18px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5 hover:border-[#D8B35B]/40"
              >
                Home
              </Link>
            </div>

            <div className="justify-self-center">
              <Link href="/" className="flex justify-center">
                <img
                  src="/logo.svg"
                  alt="Warren Dodd Education"
                  className="h-auto w-[170px] object-contain sm:w-[190px]"
                />
              </Link>
            </div>

            <div className="justify-self-end">
              <button
                type="button"
                aria-label="Toggle menu"
                aria-expanded={open}
                onClick={() => setOpen((prev) => !prev)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-[#12284C]"
              >
                <span className="text-2xl leading-none">
                  {open ? "×" : "☰"}
                </span>
              </button>
            </div>
          </div>

          {open && (
            <div className="mt-3 rounded-3xl border border-slate-200 bg-white p-5 shadow-lg">
              <nav className="grid gap-2 text-base font-medium text-slate-800">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-xl px-2 py-2 transition hover:bg-slate-50 hover:text-[#12284C] ${
                      pathname === item.href ? "text-[#12284C]" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#12284C] px-6 py-4 text-center font-semibold text-white"
              >
                Make an Enquiry
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}