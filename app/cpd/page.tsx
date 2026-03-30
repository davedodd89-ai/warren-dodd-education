import Image from "next/image";
import SiteHeader from "../SiteHeader";

export default function CPDPage() {
  const offers = [
    {
      title: "Whole-staff CPD",
      text: "Training designed to deepen staff understanding of behaviour, relationships, masculinity, emotional literacy and practical classroom responses.",
    },
    {
      title: "Behaviour support",
      text: "Support for schools looking to strengthen calm, consistent, relationship-led practice across classrooms and wider school culture.",
    },
    {
      title: "Mentoring and outreach",
      text: "Targeted work with pupils through mentoring, relationship-building and tailored support that helps children re-engage and feel understood.",
    },
  ];

  const focusAreas = [
    "Understanding behaviour through a relational lens",
    "Masculinity, boys’ identity and school engagement",
    "Emotional literacy and communication",
    "Online culture, influence and PSHE links",
    "Practical classroom strategies for calm and clarity",
    "Support approaches that strengthen inclusion",
  ];

  const impactPoints = [
    "Staff repeatedly said the training gave them a clearer lens for understanding boys’ behaviour, shame responses, emotional literacy and online influence.",
    "The most frequently cited learning point was the understanding that humiliation is often a core fear behind challenging behaviour, and that many incidents are driven by shame and defence rather than simple defiance.",
    "The statistical evidence was described as surprising, shocking and powerful, helping connect classroom experience with wider social and developmental patterns.",
    "Staff committed to immediate changes in practice, including calmer behaviour responses, stronger relationship-building and more explicit emotional vocabulary teaching.",
  ];

  const testimonials = [
    "This was one of the most insightful and up-to-date reflections of the world boys are growing up in.",
    "This has opened my eyes and made me reflect deeply on my practice.",
    "The non-humiliation response section was brilliant and actually quite moving.",
    "Very high standard training. Engaging, passionate and highly relevant.",
    "The statistics were powerful and the role play made the strategies easy to apply.",
    "Very informative and extremely relevant to what is happening in society now.",
  ];

  const outcomes = [
    "Greater staff understanding and confidence",
    "Stronger relational practice across school",
    "Improved consistency in behaviour responses",
    "More thoughtful support for boys and vulnerable pupils",
    "A calmer, more inclusive learning culture",
  ];

  return (
    <main className="min-h-screen bg-[#F7F7F4] text-slate-900">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-20">
        <div className="max-w-5xl">
          <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
            Training &amp; CPD for schools
          </p>
          <h1 className="mt-4 text-[2.5rem] font-semibold leading-[0.96] tracking-[-0.05em] text-[#12284C] md:text-[3.6rem] xl:text-[4.3rem]">
            Training, CPD and behaviour support for schools.
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-700 md:text-xl">
            Whole-staff CPD, behaviour support, mentoring and outreach designed to strengthen relationships, understanding, inclusion and calm classroom practice.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <Image
            src="/training-behaviour.jpg"
            alt="Understanding Behaviour and Masculinity training"
            width={1600}
            height={900}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-20">
          <div className="grid gap-6 lg:grid-cols-3">
            {offers.map((item) => (
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
              Signature training
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#12284C] md:text-5xl">
              Understanding Behaviour &amp; Masculinity
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              A whole-staff CPD offer that explores behaviour through the lenses of relationships, masculinity, emotional development, online culture, PSHE links and practical classroom strategy.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#D8C28A] bg-[#F8F3E7] p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.18em] text-[#8B6B1F]">
              Focus areas
            </p>
            <div className="mt-6 grid gap-3">
              {focusAreas.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white bg-white px-5 py-4 text-slate-800 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#F4F7FB]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] bg-[#12284C] p-8 text-white">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-300">
                Training impact
              </p>
              <div className="mt-6 space-y-5 text-slate-200">
                {impactPoints.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                Staff reflections
              </p>
              <div className="mt-6 space-y-4">
                {testimonials.map((quote) => (
                  <div
                    key={quote}
                    className="rounded-2xl border border-slate-200 bg-[#F8F8F6] p-5"
                  >
                    <p className="italic leading-7 text-slate-700">“{quote}”</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-20">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
            Outcomes for schools
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#12284C] md:text-5xl">
            Practical support grounded in relationships, understanding and real school context.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {outcomes.map((item) => (
            <div
              key={item}
              className="rounded-[1.8rem] border border-slate-200 bg-white px-6 py-5 shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center md:px-10 lg:py-20">
          <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
            Next step
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#12284C] md:text-5xl">
            Enquire about CPD, behaviour support or school partnership work.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            If your school is exploring staff training, behaviour support, mentoring or outreach, I would be pleased to discuss what Warren Dodd Education could offer in your setting.
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