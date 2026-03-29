import SiteHeader from "../SiteHeader";

export default function SchoolsPage() {
  const schoolSupport = [
    {
      title: "Teaching & Learning Mentor",
      text: "Coaching and support for teachers and staff looking to strengthen classroom relationships, learning culture and pupil engagement.",
    },
    {
      title: "Behaviour Management Specialist",
      text: "Bespoke behaviour support focused on practical systems, relational consistency and approaches that improve outcomes for children and staff.",
    },
    {
      title: "Outreach & In-Class Support",
      text: "In-class modelling, staff guidance and targeted intervention work to support complex, SEMH and high-need behaviour profiles.",
    },
    {
      title: "Whole-School Development",
      text: "Support with inclusive culture, environmental thinking, positive behaviour development and adult-child interactions across the school.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F7F7F4] text-slate-900">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-20">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
            School support
          </p>
          <h1 className="mt-4 text-[2.4rem] font-semibold leading-[0.98] tracking-[-0.05em] text-[#12284C] md:text-[3.5rem] xl:text-[4rem]">
            Teaching and learning mentoring, behaviour support and outreach for schools.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Warren Dodd Education provides tailored support to schools through mentoring, in-class support, staff coaching, behaviour guidance, bespoke interventions and outreach work focused on helping schools build calm, inclusive and relational learning environments.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {schoolSupport.map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
            >
              <h2 className="text-2xl font-semibold text-[#12284C]">
                {item.title}
              </h2>
              <p className="mt-4 leading-8 text-slate-700">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="/contact"
            className="rounded-full bg-[#12284C] px-7 py-4 text-center font-semibold text-white transition hover:-translate-y-0.5"
          >
            Enquire About School Support
          </a>
          <a
            href="/cpd"
            className="rounded-full border border-slate-300 bg-white px-7 py-4 text-center font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            View Training &amp; CPD
          </a>
        </div>
      </section>
    </main>
  );
}