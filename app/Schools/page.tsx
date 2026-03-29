import Image from "next/image";

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
      <section className="relative mx-auto max-w-7xl overflow-hidden px-6 pb-16 pt-10 md:px-10 lg:pb-20 lg:pt-12">
        <div className="pointer-events-none absolute inset-0 -z-10 flex items-start justify-end">
          <Image
            src="/logo.png"
            alt=""
            width={1400}
            height={1400}
            className="mt-[-140px] mr-[-90px] h-auto w-[720px] object-contain opacity-[0.04] md:w-[860px] xl:w-[1040px]"
            priority
          />
        </div>

        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
            School support
          </p>
          <h1 className="mt-4 text-[2.4rem] font-semibold leading-[0.98] tracking-[-0.05em] text-[#12284C] md:text-[3.5rem] xl:text-[4rem]">
            Teaching and learning mentoring, behaviour support and outreach for schools.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Warren Dodd Education provides tailored support to schools through
            mentoring, in-class support, staff coaching, behaviour guidance,
            bespoke interventions and outreach work focused on helping schools
            build calm, inclusive and relational learning environments.
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

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
              What this can include
            </p>
            <div className="mt-6 space-y-4 text-slate-700">
              <p>In-class modelling and support for teachers</p>
              <p>Behaviour systems and relationship-based guidance</p>
              <p>Targeted work around SEMH and high-need behaviour</p>
              <p>Support for inclusive classroom culture and routines</p>
              <p>Mentoring and coaching for staff teams</p>
              <p>Practical outreach support tailored to school context</p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-[#12284C] p-8 text-white shadow-sm">
            <p className="text-sm uppercase tracking-[0.18em] text-slate-300">
              Why this matters
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-200">
              After speaking with parents at schools where I currently tutor,
              it is clear that understanding how boys think, feel and learn is
              more important than ever.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-200">
              Over many years, my theory, practice and processes have supported
              both boys and girls to achieve more strongly in school through
              better relationships, stronger self-belief and clearer systems of
              support.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-200">
              This work is designed to help schools move beyond reactive
              behaviour management and towards approaches that are relational,
              practical and sustainable.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-slate-200 bg-[#F8F3E7] p-8 shadow-sm">
          <p className="text-sm uppercase tracking-[0.18em] text-[#8B6B1F]">
            Flexible support
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            Support can be tailored to school needs, whether that is a focused
            short-term piece of work, a wider mentoring role, behaviour support
            across a phase, or a broader piece of outreach and development
            work with staff.
          </p>
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
            View Training & CPD
          </a>
        </div>
      </section>
    </main>
  );
}