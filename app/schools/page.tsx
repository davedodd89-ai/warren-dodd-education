import SiteHeader from "../SiteHeader";

export default function SchoolsPage() {
  const supportAreas = [
    {
      title: "Mentoring",
      text: "Relationship-led support for pupils who need greater trust, consistency, encouragement and emotional safety in order to re-engage with school.",
    },
    {
      title: "Behaviour support",
      text: "Practical support for schools seeking calmer, clearer and more relational responses to behaviour across classrooms and wider school life.",
    },
    {
      title: "Outreach",
      text: "Targeted work with children, families and staff to strengthen understanding, communication and inclusion around specific needs or concerns.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F7F7F4] text-slate-900">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-20">
        <div className="max-w-5xl">
          <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
            School support
          </p>
          <h1 className="mt-4 text-[2.5rem] font-semibold leading-[0.96] tracking-[-0.05em] text-[#12284C] md:text-[3.6rem] xl:text-[4.3rem]">
            Mentoring, outreach and behaviour support for schools.
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-700 md:text-xl">
            Warren Dodd Education offers school support built around relationships,
            understanding, calm practice and meaningful engagement for children who
            need something more tailored and relational.
          </p>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-20">
          <div className="grid gap-6 lg:grid-cols-3">
            {supportAreas.map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-slate-200 bg-[#F8F8F6] p-8 shadow-sm"
              >
                <h2 className="text-2xl font-semibold text-[#12284C]">
                  {item.title}
                </h2>
                <p className="mt-4 leading-8 text-slate-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
              What this support is built on
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#12284C] md:text-5xl">
              Calm, relational and deeply child-centred practice.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              This work is designed for children who may be struggling with
              behaviour, engagement, emotional regulation, relationships or
              belonging in school.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              The focus is not simply on stopping behaviours in the moment, but
              on understanding the child more deeply and helping schools respond
              in ways that build trust, clarity, confidence and long-term change.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#D8C28A] bg-[#F8F3E7] p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.18em] text-[#8B6B1F]">
              Examples of support
            </p>
            <div className="mt-6 space-y-4 text-slate-800">
              <div className="rounded-2xl border border-white bg-white px-5 py-4 shadow-sm">
                In-school mentoring for identified pupils
              </div>
              <div className="rounded-2xl border border-white bg-white px-5 py-4 shadow-sm">
                Behaviour support around specific children or classes
              </div>
              <div className="rounded-2xl border border-white bg-white px-5 py-4 shadow-sm">
                Outreach and relationship-building support
              </div>
              <div className="rounded-2xl border border-white bg-white px-5 py-4 shadow-sm">
                Guidance for staff around regulation, trust and engagement
              </div>
              <div className="rounded-2xl border border-white bg-white px-5 py-4 shadow-sm">
                Follow-up work linked to wider CPD and behaviour priorities
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center md:px-10 lg:py-20">
          <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
            Next step
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#12284C] md:text-5xl">
            Discuss support for your school.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            If your school is exploring mentoring, outreach, behaviour support
            or a wider relational approach to inclusion and engagement, I would
            be pleased to discuss what Warren Dodd Education could offer.
          </p>
          <div className="mt-10">
            <a
              href="/contact"
              className="inline-flex rounded-full bg-[#12284C] px-8 py-4 font-semibold text-white shadow-xl transition hover:-translate-y-0.5"
            >
              Contact Warren Dodd Education
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}