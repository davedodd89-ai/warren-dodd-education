import Link from "next/link";
import SiteHeader from "../SiteHeader";

export default function SchoolsPage() {
  const supportItems = [
    "In-class modelling and support for teachers",
    "Behaviour systems and relationship-based guidance",
    "Targeted work around SEMH and high-need behaviour",
    "Support for inclusive classroom culture and routines",
    "Mentoring and coaching for staff teams",
    "Practical outreach support tailored to school context",
  ];

  return (
    <div className="min-h-screen bg-[#F7F7F4] text-slate-900">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-20">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
          School support
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-[#12284C] md:text-6xl">
          Mentoring, outreach and behaviour support for schools.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
          Tailored support for schools wanting calmer classrooms, stronger relationships and more sustainable practice.
        </p>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:px-10 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
              What this can include
            </p>
            <div className="mt-6 space-y-4 text-slate-700">
              {supportItems.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-[#12284C] p-8 text-white shadow-sm">
            <p className="text-sm uppercase tracking-[0.18em] text-slate-300">
              Why this matters
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-200">
              This work is designed to help schools move beyond reactive behaviour management and towards approaches that are relational, practical and sustainable.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-20">
        <div className="rounded-[2rem] border border-slate-200 bg-[#F8F3E7] p-8 shadow-sm">
          <p className="text-sm uppercase tracking-[0.18em] text-[#8B6B1F]">
            Flexible support
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            Support can be shaped around your school’s needs, whether that is a short-term piece of work, mentoring, behaviour support across a phase or a wider piece of development work with staff.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-[#12284C] px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5"
          >
            Enquire About School Support
          </Link>
          <Link
            href="/cpd"
            className="inline-flex rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            View CPD
          </Link>
        </div>
      </section>
    </div>
  );
}