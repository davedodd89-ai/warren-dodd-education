import Image from "next/image";

export default function CpdPage() {
  const trainingAreas = [
    {
      title: "Macro trends",
      text: "Societal data, wider cultural shifts, and the macro patterns shaping boys’ behaviour, attitudes and emotional development in schools.",
    },
    {
      title: "Biology & psychology",
      text: "The biological and psychological science of male and female brain and hormone development, and what this means for behaviour, regulation, relationships and learning.",
    },
    {
      title: "PSHE connections",
      text: "How these issues connect meaningfully with PSHE curriculum content, particularly in upper Key Stage 2 and beyond.",
    },
    {
      title: "Practical strategies",
      text: "Classroom and school-based approaches with a strong track record of supporting both boys and girls successfully in education.",
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
            Training & CPD for schools
          </p>
          <h1 className="mt-4 text-[2.4rem] font-semibold leading-[0.98] tracking-[-0.05em] text-[#12284C] md:text-[3.5rem] xl:text-[4rem]">
            Understanding Behaviour & Masculinity
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Whole-staff CPD built around the realities schools are facing now —
            particularly around boys’ behaviour, emotional literacy, online
            influence, relationships, classroom culture and the practical
            strategies schools can use to respond well.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-[#F8F8F6]">
              <Image
                src="/training-behaviour.jpg"
                alt="Understanding Behaviour and Masculinity training visual"
                width={1200}
                height={900}
                className="h-auto w-full object-cover"
              />
            </div>

            <div className="mt-6 rounded-[1.5rem] bg-[#12284C] p-6 text-white">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-300">
                Led by David Warren Dodd
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-200">
                Lead Teacher at Crab Lane Primary School and senior Teaching and
                Learning Coach across the North Manchester Primary Federation.
              </p>
            </div>
          </div>

          <div>
            <p className="text-lg leading-8 text-slate-700">
              I have developed and delivered a whole-staff CPD programme
              entitled{" "}
              <span className="font-semibold text-[#12284C]">
                Understanding Behaviour & Masculinity
              </span>
              .
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-700">
              The training addresses a number of issues that are increasingly
              prevalent in primary and secondary schools: the growing influence
              of online culture on boys’ attitudes and behaviour, the widening
              emotional literacy gap, the rising attainment gap, increasing
              suspension and exclusion rates, the rising frequency of
              fight-or-flight responses in school settings, and misogynistic
              viewpoints and behaviours.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-700">
              Over the past two years, I have also developed a highly
              successful Year 5 and Year 6 PSHE curriculum designed to address
              many of these factors in a practical, age-appropriate and
              evidence-informed way.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {trainingAreas.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#12284C]">
                    {item.title}
                  </p>
                  <p className="mt-3 leading-7 text-slate-700">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[1.75rem] border border-[#D8B35B] bg-[#F8F3E7] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8B6B1F]">
                Designed for all staff
              </p>
              <p className="mt-3 text-lg leading-8 text-slate-700">
                The training is designed for all staff — teachers, teaching
                assistants, lunchtime supervisors, support teams and office
                staff — because the approaches apply to every adult-child
                interaction within a school.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
                <p className="text-lg font-semibold text-[#12284C]">Twilight</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Focused staff session
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
                <p className="text-lg font-semibold text-[#12284C]">Half-day</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Deeper training and discussion
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
                <p className="text-lg font-semibold text-[#12284C]">Full day</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Tailored whole-school delivery
                </p>
              </div>
            </div>

            <p className="mt-8 text-lg leading-8 text-slate-700">
              Parent workshops are also available, and all training can be
              tailored to reflect your school’s priorities and context.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-700">
              Recent delivery across the North Manchester Primary Federation
              has been received extremely well. I am also in contact with One
              Education Psychology Services in Manchester, Thrive in Education,
              Manchester Metropolitan University, and a growing number of
              primary and secondary schools interested in similar work within
              their own settings.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/contact"
                className="rounded-full bg-[#12284C] px-7 py-4 text-center font-semibold text-white transition hover:-translate-y-0.5"
              >
                Enquire About CPD
              </a>
              <a
                href="/schools"
                className="rounded-full border border-slate-300 bg-white px-7 py-4 text-center font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                View School Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}