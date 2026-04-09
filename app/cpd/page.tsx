import Link from "next/link";
import SiteHeader from "../SiteHeader";

export default function CpdPage() {
  return (
    <div className="min-h-screen bg-[#F7F7F4] text-slate-900">
      <SiteHeader />

      <section className="mx-auto max-w-5xl px-6 py-16 text-center md:px-10 lg:py-20">
        <p className="text-sm uppercase tracking-[0.22em] text-slate-500">
          Training & CPD
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#12284C] md:text-6xl">
          Training and CPD now sit within the Schools page.
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-700">
          To keep the offer clearer and simpler, training, CPD, behaviour
          support, mentoring and outreach are now combined in one place.
        </p>

        <div className="mt-10 flex justify-center">
          <Link
            href="/schools"
            className="inline-flex rounded-full bg-[#12284C] px-8 py-4 font-semibold text-white shadow-xl transition hover:-translate-y-0.5"
          >
            View Schools Page
          </Link>
        </div>
      </section>
    </div>
  );
}
