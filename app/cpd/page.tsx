import Link from "next/link";
import SiteHeader from "../SiteHeader";

export default function CpdPage() {
  const offerItems = [
    "Understanding behaviour through a relational lens",
    "Masculinity, boys and emotional literacy",
    "Practical classroom strategies that staff can use straight away",
    "Behaviour, inclusion and consistency across the school day",
  ];

  const formats = ["Twilight", "Half-day", "Full day"];

  return (
    <div className="min-h-screen bg-[#F7F7F4] text-slate-900">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-20">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
          Training &amp; CPD
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-[#12284C] md:text-6xl">
          CPD that helps staff understand behaviour, relationships and children more deeply.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
          Whole-staff training shaped by lived classroom experience, psychology and practical school realities.
        </p>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-12 md:grid-cols-2 md:px-10">
          <div className="rounded-[2rem] border border-slate-200 bg-[#F8F8F6] p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
              What this can cover
            </p>
            <div className="mt-6 space-y-4 text-slate-700">
              {offerItems.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#D8B35B] bg-[#F8F3E7] p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.18em] text-[#8B6B1F]">
              Designed for all staff
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              The training is designed for teachers, teaching assistants, support staff, lunchtime supervisors and leaders because relationships and behaviour are shaped by every adult-child interaction.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-20">
        <h2 className="text-3xl font-semibold text-[#12284C] md:text-4xl">
          Delivery formats
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {formats.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm"
            >
              <p className="text-lg font-semibold text-[#12284C]">{item}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-700">
          Parent workshops are also available, and all training can be tailored to your school’s priorities, staff team and context.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-[#12284C] px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5"
          >
            Enquire About CPD
          </Link>
          <Link
            href="/schools"
            className="inline-flex rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            View School Support
          </Link>
        </div>
      </section>
    </div>
  );
}