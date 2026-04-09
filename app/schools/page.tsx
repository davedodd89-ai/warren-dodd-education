import Link from "next/link";
import SiteHeader from "../SiteHeader";

export default function SchoolsPage() {
  const supportAreas = [
    {
      title: "Training & CPD",
      text: "Whole-staff training and CPD designed to strengthen understanding, improve classroom practice and support a more relational approach across school.",
    },
    {
      title: "Behaviour support",
      text: "Support for schools looking to build calmer, clearer and more consistent behaviour systems rooted in relationships, emotional understanding and strong adult practice.",
    },
    {
      title: "Mentoring and outreach",
      text: "Tailored mentoring, pupil support and wider outreach work for schools wanting more personalised input for children, staff and families.",
    },
    {
      title: "In-class guidance",
      text: "Practical support within the classroom to help strengthen routines, relationships, regulation and the quality of day-to-day teaching practice.",
    },
  ];

  const cpdTopics = [
    "Understanding behaviour through a relational lens",
    "Masculinity, boys and engagement in school",
    "Emotional literacy and the factors shaping behaviour",
    "Online culture, influence and how it affects children",
    "Practical classroom strategies that staff can use immediately",
    "Building calmer, more inclusive classroom practice",
  ];

  const staffReflections = [
    "This was one of the most insightful and up-to-date reflections of the world boys are growing up in.",
    "This has opened my eyes and made me reflect deeply on my practice.",
    "The non-humiliation response section was brilliant and actually quite moving.",
    "Very high standard training. Engaging, passionate and highly relevant.",
    "The statistics were powerful and the role play made the strategies easy to apply.",
    "Very informative and extremely relevant to what is happening in society now.",
  ];

  return (
    <div className="min-h-screen bg-[#F7F7F4] text-slate-900">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-20">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.22em] text-slate-500">
            Support for schools
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#12284C] md:text-6xl">
            Training, CPD, behaviour support, mentoring and outreach for
            schools.
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            Warren Dodd Education works with schools to strengthen classroom
            practice, deepen understanding and support children more effectively
            through training, CPD, behaviour support, mentoring and outreach.
          </p>

          <p className="mt-4 text-lg leading-8 text-slate-700">
            The work is rooted in relationships, behaviour understanding,
            inclusion, emotional literacy and the practical realities of school
            life. The aim is always to make things clearer, calmer and more
            effective for staff and pupils.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <img
            src="/training-cpd.png"
            alt="Understanding Behaviour and Masculinity training presentation"
            className="w-full object-cover"
          />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {supportAreas.map((item) => (
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

        <div className="mt-12 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm uppercase tracking-[0.22em] text-slate-500">
            Training &amp; CPD focus
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#12284C] md:text-5xl">
            Whole-staff training designed to connect understanding with
            practical action.
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-700">
            Training can be shaped around your school’s context and priorities,
            with particular strengths in behaviour, boys’ engagement,
            masculinity, emotional literacy, online culture, relational
            practice and practical classroom strategies.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {cpdTopics.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-[#FBFBF9] px-5 py-4 text-slate-800 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] bg-[#12284C] p-8 text-white shadow-sm">
            <p className="text-sm uppercase tracking-[0.22em] text-slate-300">
              Training impact
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              What staff took from the training
            </h2>

            <div className="mt-6 space-y-6 text-base leading-8 text-slate-200">
              <p>
                Staff repeatedly said the training gave them a clearer lens for
                understanding boys’ behaviour, shame responses, emotional
                literacy and online influence.
              </p>

              <p>
                The most frequently cited learning point was that humiliation is
                often a core factor behind challenging behaviour, and that many
                incidents are driven by shame and defence rather than simple
                defiance.
              </p>

              <p>
                The statistical evidence was described as surprising, shocking
                and powerful, helping connect classroom experience with wider
                social and developmental patterns.
              </p>

              <p>
                Staff identified immediate next steps including calmer behaviour
                responses, stronger relationship-building and more explicit
                teaching of emotional vocabulary.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.22em] text-slate-500">
              Staff reflections
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#12284C] md:text-4xl">
              What staff said after the training
            </h2>

            <div className="mt-8 grid gap-4">
              {staffReflections.map((quote) => (
                <div
                  key={quote}
                  className="rounded-[1.4rem] border border-slate-200 bg-[#FBFBF9] px-5 py-5 shadow-sm"
                >
                  <p className="text-base italic leading-8 text-slate-700">
                    “{quote}”
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-[2rem] border border-slate-200 bg-[#12284C] p-8 text-white shadow-sm">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Looking for training or support in school?
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-200">
            Whether you are looking for whole-staff CPD, behaviour support,
            mentoring, outreach or practical classroom guidance, the first step
            is a conversation about what your school needs most.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-white px-7 py-4 font-semibold text-[#12284C] transition hover:-translate-y-0.5"
            >
              Make an Enquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
