import Link from "next/link";
import SiteHeader from "../SiteHeader";

export default function WhyPage() {
  const fitCards = [
    {
      title: "Home education and flexi schooling",
      text: "This is especially well suited to children who are home educated, or who attend school for most of the week but would benefit from spending part of their week in a more personalised tutoring group. It offers a calm, purposeful and carefully structured space for children who need something more bespoke alongside, or instead of, the usual model.",
    },
    {
      title: "Children who benefit from small-group learning",
      text: "Some children thrive when learning feels more personal. In a smaller group, they are often more willing to speak, ask questions, build confidence and take part fully. The environment allows children to feel known, supported and included, while still benefiting from the motivation and social development that comes from learning alongside others.",
    },
    {
      title: "Confidence, self-esteem and emotional wellbeing",
      text: "This can be particularly valuable for children whose confidence has dipped, who doubt themselves as learners, or who carry social and emotional worries that affect how they engage. A calm, kind and compassionate approach can help children feel emotionally safe enough to take risks, persevere and begin to believe in themselves again.",
    },
    {
      title: "A more bespoke curriculum",
      text: "Some children benefit from learning that is shaped more closely around their needs, strengths, interests and stage of development. Rather than forcing a child through a one-size-fits-all model, the work is designed to feel purposeful, relevant and appropriately pitched, helping children make stronger progress in a way that feels more natural to them.",
    },
    {
      title: "Children who need understanding first",
      text: "Some children do not need more pressure. They need to feel understood properly. They benefit from a professional who is calm, patient and experienced, who takes the time to build trust, understand what motivates them and create the conditions in which they can engage positively with learning again.",
    },
    {
      title: "Children who simply need the right environment",
      text: "This is not only for children who are struggling. It is also for children who would flourish with a more thoughtful, relationship-led and personalised approach. For some families, it is about giving their child a setting where they can feel calmer, happier, more confident and more fully themselves as a learner.",
    },
  ];

  const homeEducationSupport = [
    {
      title: "Reduced daily pressure",
      text: "Bring calm and structure back into home learning with a rhythm that reduces conflict, decision fatigue, and the sense that learning never truly ends.",
    },
    {
      title: "Confidence for parents",
      text: "Know exactly what matters most each day through clear priorities in reading, writing, maths, and wider enrichment - without trying to recreate a full school timetable at home.",
    },
    {
      title: "Less resistance, more engagement",
      text: "Sessions are built around your child’s attention span, interests, and emotional needs so learning feels purposeful rather than a daily battle.",
    },
    {
      title: "Expert guidance without the overwhelm",
      text: "You do not need to carry every subject, every routine, and every decision alone. I help create a sustainable plan that works for real family life.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F7F4] text-slate-900">
      <SiteHeader />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-18 lg:py-20">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.22em] text-slate-500">
              Who is this for?
            </p>

            <h1 className="mt-4 text-[2.3rem] font-semibold leading-[0.95] tracking-[-0.04em] text-[#12284C] md:text-6xl">
              A personalised, welcoming approach for children who benefit from learning differently.
            </h1>

            <div className="mt-6 space-y-5 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              <p>
                Warren Dodd Education is for all children, but it is especially
                valuable for those who benefit from a more personal,
                relationship-led and carefully tailored approach to learning.
              </p>

              <p>
                This includes children who are home educated, children who are
                flexi schooling and attending school for most of the week, and
                children whose families want part of their week to include a
                calm, bespoke tutoring group that feels more personal and more
                responsive to their needs.
              </p>

              <p>
                It can also be a strong fit for children who need help rebuilding
                confidence, developing self-belief, navigating social and
                emotional challenges, or simply learning in a smaller group where
                they feel more understood, more settled and more willing to
                engage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-14">
        <div className="grid gap-6 md:grid-cols-2">
          {fitCards.map((item) => (
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

        <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <p className="text-sm uppercase tracking-[0.22em] text-slate-500">
            For home-educating families
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#12284C] md:text-5xl">
            Calm, structured support for parents carrying the weight of home education.
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-700">
            When home learning begins to feel exhausting, the issue is rarely effort -
            it is usually structure, pace, and emotional load. My support helps parents
            simplify the day, reduce pressure, and rebuild confidence so learning
            becomes sustainable again.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {homeEducationSupport.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.4rem] border border-slate-200 bg-[#FBFBF9] p-5 shadow-sm"
              >
                <h3 className="text-base font-semibold text-[#12284C] md:text-lg">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-700 md:text-base md:leading-7">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-[2rem] border border-slate-200 bg-[#12284C] p-8 text-white shadow-sm md:p-10">
          <p className="text-sm uppercase tracking-[0.22em] text-slate-300">
            The aim
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            The goal is to help children feel safe, confident and ready to grow.
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-200">
            Whether a child needs a more bespoke curriculum, a smaller and more
            nurturing learning environment, or simply the guidance of a calm,
            kind and compassionate professional who understands them well, the
            purpose is the same: to help them feel more capable, more confident
            and more positive about learning.
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