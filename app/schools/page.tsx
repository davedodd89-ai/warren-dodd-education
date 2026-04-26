import Link from "next/link";
import SiteHeader from "../SiteHeader";

export default function SchoolsPage() {
  const trainingAreas = [
    "Whole-staff training and CPD",
    "Inset days, twilight sessions and keynote-style delivery",
    "Practical, evidence-informed content rooted in real school experience",
    "Training that helps staff reflect, reframe and strengthen practice",
  ];

  const coachingAreas = [
    "Sequenced coaching for ECTs, developing teachers and experienced staff",
    "Behaviour support rooted in relationships, consistency and emotional understanding",
    "Practical guidance on routines, classroom climate and adult response",
    "Support that builds teacher ownership rather than simply telling staff what to do",
  ];

  const trainingTopics = [
    "Understanding behaviour through a relational lens",
    "Humiliation-free responses to behaviour",
    "Masculinity, boys and engagement in school",
    "Emotional literacy and the factors shaping behaviour",
    "Online culture, influence and how it affects children",
    "Practical strategies for building trust, motivation and stronger relationships",
    "Why children disengage from learning and how schools can respond",
  ];

  const coachingSupport = [
    "Coaching ECTs, developing teachers and experienced staff through a clear sequenced model",
    "Strengthening relationship-led teaching, classroom presence and adult consistency",
    "Helping staff feel part of the development process rather than simply being told what to do",
    "Coaching teachers to strengthen relationships, routines and classroom climate",
    "Supporting staff to respond to behaviour with greater clarity and confidence",
    "Helping staff understand the emotional drivers behind behaviour",
    "Developing more consistent adult approaches across classrooms or teams",
    "Improving the way children experience boundaries, support and challenge",
    "Strengthening teacher confidence around pupils who are disengaged or hard to reach",
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

      <main className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16">
        <section className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
            School support
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#12284C] md:text-6xl">
            Training, coaching and behaviour support for schools.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 md:text-xl md:leading-9">
            Support for schools that want to strengthen staff understanding,
            improve classroom practice and build a more relational, thoughtful
            approach to behaviour, engagement and learning.
          </p>

          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
            My work with schools is grounded in current classroom experience,
            psychology-informed thinking and a strong understanding of how adult
            approaches shape children&apos;s behaviour, confidence and engagement.
          </p>
        </section>

        <section className="mt-8 max-w-5xl">
          <div className="rounded-[1.7rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6 md:p-7">
            <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-center sm:text-left">
              <div className="h-24 w-24 shrink-0 overflow-hidden rounded-full border-4 border-[#12284C]/10 shadow-sm sm:h-28 sm:w-28">
                <img
                  src="/hero.jpg"
                  alt="David Dodd"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="min-w-0">
                <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                  Delivered by
                </p>

                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#12284C] sm:text-3xl">
                  David Dodd
                </h2>

                <p className="mt-2 text-sm uppercase tracking-[0.14em] text-slate-500 sm:text-[0.95rem]">
                  Current Primary School Teacher · Teaching and Learning Coach
                </p>

                <p className="mt-3 text-base leading-7 text-slate-700">
                  BSc (Hons) Psychology · Primary PGCE · QTS · Extensive
                  experience across{" "}
                  <span className="font-semibold text-[#12284C]">
                    KS1 and KS2
                  </span>
                </p>

                <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">
                  Experience working within both{" "}
                  <span className="font-semibold text-[#12284C]">
                    mainstream and SEND school environments
                  </span>
                  , alongside wider work supporting staff development, behaviour
                  understanding and relationship-led practice.
                </p>

                <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">
                  Integral to the integration of{" "}
                  <span className="font-semibold text-[#12284C]">oracy</span>{" "}
                  across the North Manchester Primary Federation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div className="overflow-hidden rounded-[1.6rem] border border-slate-200 bg-slate-100 shadow-sm">
            <img
              src="/training-cpd.png"
              alt="Staff training and CPD delivery"
              className="h-[170px] w-full object-cover object-center sm:h-[210px] lg:h-[250px]"
            />
          </div>

          <div className="rounded-[1.6rem] border border-[#D8B35B]/40 bg-white p-6 shadow-sm md:p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
              Staff training &amp; CPD
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#12284C] md:text-4xl">
              Training that is thoughtful, practical and rooted in real school
              experience.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              Training sessions are designed to help staff reflect more deeply on
              behaviour, relationships, motivation and the wider experiences
              shaping children in school.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              The aim is always to offer something credible, useful and
              professionally grounded, not abstract theory detached from the
              realities of classrooms and school life.
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[1.8rem] border border-slate-200 bg-white p-7 shadow-sm md:p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
              Staff training &amp; CPD
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#12284C] md:text-4xl">
              Whole-staff training designed to deepen understanding and sharpen
              practice.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              This strand is about helping staff step back, think clearly and
              strengthen the way they understand behaviour, relationships,
              motivation and the wider forces shaping children&apos;s experiences
              in school.
            </p>

            <div className="mt-6 grid gap-3">
              {trainingAreas.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-[#FBFBF9] px-4 py-3 text-sm leading-6 text-slate-700 md:text-base"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.8rem] bg-[#12284C] p-7 text-white shadow-sm md:p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-slate-300">
              Coaching, behaviour support &amp; teacher development
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
              Sequenced coaching that builds teacher ownership, confidence and
              stronger classroom practice.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-100 md:text-lg md:leading-8">
              This strand is more hands-on. It focuses on helping staff improve
              day-to-day practice through coaching, reflection, behaviour
              support and clearer adult responses in the classroom.
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-100 md:text-lg md:leading-8">
              Coaching is centred on relationship-led teaching. It can support
              ECTs, developing teachers and more experienced staff who want to
              strengthen classroom presence, relationships, routines and adult
              responses.
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-100 md:text-lg md:leading-8">
              The approach is built around a sequenced coaching model, so staff
              feel part of the development process rather than simply being told
              what to do. The aim is to build ownership, confidence and
              sustainable change in everyday practice.
            </p>

            <div className="mt-6 grid gap-3">
              {coachingAreas.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm leading-6 text-white md:text-base"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[1.8rem] border border-slate-200 bg-white p-7 shadow-sm md:p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
              Staff training &amp; CPD
            </p>

            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[#12284C] md:text-3xl">
              What this can include
            </h3>

            <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              Training sessions are designed to be thoughtful, grounded and
              immediately useful for staff. They can be tailored to the needs of
              your setting, team or school priorities.
            </p>

            <div className="mt-6 grid gap-3">
              {trainingTopics.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-200 bg-[#FBFBF9] px-4 py-3 text-sm leading-6 text-slate-700 md:text-base"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-[#12284C]/15 bg-[#12284C] p-7 text-white shadow-sm md:p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-slate-300">
              Coaching, behaviour support &amp; teacher development
            </p>

            <h3 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
              What this can include
            </h3>

            <p className="mt-4 text-base leading-7 text-slate-100 md:text-lg md:leading-8">
              This support is designed for schools that want more than a single
              training session. It allows staff to develop practice over time,
              with reflection, guidance and practical next steps.
            </p>

            <div className="mt-6 grid gap-3">
              {coachingSupport.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm leading-6 text-white md:text-base"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-[1.9rem] border border-slate-200 bg-white p-7 shadow-sm md:p-9">
          <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
            How the support differs
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#12284C] md:text-4xl">
            Clearer separation between training and ongoing staff development.
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-[#FBFBF9] p-5">
              <p className="text-base font-semibold text-[#12284C]">
                Staff training &amp; CPD
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-700 md:text-base">
                Best for whole-staff understanding, inset days, twilight
                sessions and schools that want to introduce or deepen shared
                thinking across a team.
              </p>
            </div>

            <div className="rounded-2xl bg-[#FBFBF9] p-5">
              <p className="text-base font-semibold text-[#12284C]">
                Coaching &amp; behaviour support
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-700 md:text-base">
                Best for schools that want more targeted support for ECTs,
                developing teachers or experienced staff through sequenced,
                relationship-led coaching that builds ownership, classroom
                confidence and sustainable change.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-[1.9rem] border border-slate-200 bg-white p-7 shadow-sm md:p-9">
          <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
            Staff reflections
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#12284C] md:text-4xl">
            What staff said after the training
          </h2>

          <div className="mt-8 grid gap-4">
            {staffReflections.map((quote) => (
              <div
                key={quote}
                className="rounded-[1.4rem] border border-slate-200 bg-[#FBFBF9] p-5 shadow-sm"
              >
                <p className="text-lg italic leading-8 text-slate-800">
                  “{quote}”
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-[1.9rem] bg-[#12284C] p-8 text-white shadow-sm md:p-10">
          <p className="text-sm uppercase tracking-[0.18em] text-slate-300">
            Direct contact
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight md:text-4xl">
            If your school is exploring training, coaching or behaviour support,
            I&apos;d be very happy to discuss what might be most useful.
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-100 md:text-lg md:leading-8">
            Support can be shaped around your context, whether you are looking
            for a one-off staff training session, targeted teacher development,
            behaviour support, or a broader conversation about how children are
            experiencing school.
          </p>

          <div className="mt-6 grid max-w-3xl grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 md:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
                Email
              </p>
              <a
                href="mailto:warrendoddeducation@outlook.com"
                className="mt-2 block text-base font-semibold text-white underline underline-offset-4 md:text-lg"
              >
                warrendoddeducation@
                <br />
                outlook.com
              </a>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
                Phone
              </p>
              <a
                href="tel:07404510082"
                className="mt-2 block text-base font-semibold text-white underline underline-offset-4 md:text-lg"
              >
                07404 510082
              </a>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
                WhatsApp
              </p>
              <a
                href="https://wa.me/447404510082"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex w-full items-center gap-2 break-words text-base font-semibold text-white underline underline-offset-4 md:text-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4 shrink-0"
                  aria-hidden="true"
                >
                  <path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.5 0 .16 5.34.16 11.91c0 2.1.55 4.16 1.6 5.97L0 24l6.3-1.65a11.86 11.86 0 0 0 5.77 1.47h.01c6.57 0 11.91-5.34 11.91-11.91 0-3.18-1.24-6.16-3.47-8.43ZM12.08 21.8h-.01a9.85 9.85 0 0 1-5.02-1.38l-.36-.21-3.74.98 1-3.65-.24-.38a9.83 9.83 0 0 1-1.5-5.25C2.2 6.46 6.63 2.03 12.08 2.03c2.63 0 5.1 1.02 6.96 2.89a9.78 9.78 0 0 1 2.87 6.97c0 5.45-4.43 9.9-9.83 9.9Zm5.39-7.36c-.29-.14-1.7-.84-1.97-.93-.26-.1-.45-.14-.65.14-.19.29-.74.93-.9 1.12-.17.19-.33.22-.62.07-.29-.14-1.2-.44-2.29-1.4-.85-.76-1.42-1.7-1.58-1.98-.17-.29-.02-.44.12-.58.12-.12.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.65-1.56-.89-2.13-.23-.56-.47-.48-.65-.49h-.55c-.19 0-.5.07-.77.36-.26.29-1 1-.99 2.44 0 1.44 1.05 2.84 1.19 3.03.14.19 2.06 3.15 4.99 4.42.7.3 1.24.48 1.66.61.7.22 1.33.19 1.83.12.56-.08 1.7-.69 1.94-1.35.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33Z" />
                </svg>
                <span>Message directly</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}