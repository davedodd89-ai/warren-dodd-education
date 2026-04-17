import Link from "next/link";
import SiteHeader from "../SiteHeader";

export default function WhyPage() {
  const fitCards = [
    {
      title: "Home education and flexi schooling",
      text: "This is especially well suited to children who are home educated, or who attend school for most of the week but would benefit from spending part of their week in a more personalised small-group setting. It offers a calm, purposeful and carefully structured space for children who need something more bespoke alongside, or instead of, the usual model.",
    },
    {
      title: "Neurodivergent children who need to feel understood",
      text: "This can be a particularly strong fit for neurodivergent children who benefit from adults taking the time to understand how they think, feel, communicate and engage. Many children do better when they feel properly known, when expectations are clear, and when the environment is calm, relational and responsive rather than rushed or overwhelming.",
    },
    {
      title: "Children who benefit from small-group learning",
      text: "Some children thrive when learning feels more personal. In a smaller group, they are often more willing to speak, ask questions, build confidence and take part fully. The environment allows children to feel known, supported and included, while still benefiting from the motivation and social development that comes from learning alongside others.",
    },
    {
      title: "Confidence, self-belief and emotional wellbeing",
      text: "This can be particularly valuable for children whose confidence has dipped, who doubt themselves as learners, or who carry social and emotional worries that affect how they engage. A calm, kind and compassionate approach can help children feel emotionally safe enough to take risks, persevere and begin to believe in themselves again.",
    },
    {
      title: "Children who need understanding first",
      text: "Some children do not need more pressure. They need to feel understood properly. They benefit from a professional who is calm, patient and experienced, who takes the time to build trust, understand what motivates them and create the conditions in which they can engage positively with learning again.",
    },
  ];

  const homeEducationSupport = [
    {
      title: "Reduced daily pressure",
      text: "Bring calm and structure back into home learning with a rhythm that reduces conflict, decision fatigue and the sense that learning never truly ends.",
    },
    {
      title: "Confidence for parents",
      text: "Know exactly what matters most each day through clear priorities in reading, writing, maths and wider enrichment, without trying to recreate a full school timetable at home.",
    },
    {
      title: "Less resistance, more engagement",
      text: "Sessions are built around your child’s attention span, interests and emotional needs so learning feels purposeful rather than a daily battle.",
    },
    {
      title: "Expert guidance without the overwhelm",
      text: "You do not need to carry every subject, every routine and every decision alone. I help create a sustainable plan that works for real family life.",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F7F7F4] text-slate-900">
      <SiteHeader />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-18 lg:py-20">
          <div className="max-w-5xl">
            <p className="text-sm uppercase tracking-[0.22em] text-slate-500">
              Why Warren Dodd Education?
            </p>

            <h1 className="mt-4 text-[2.3rem] font-semibold leading-[0.95] tracking-[-0.04em] text-[#12284C] md:text-6xl">
              A better fit for children who benefit from a calmer, more
              personal way of learning.
            </h1>

            <div className="mt-6 space-y-5 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              <p>
                Warren Dodd Education is designed for children who are more
                likely to thrive when learning feels{" "}
                <span className="font-semibold text-[#12284C]">
                  calm, personal
                </span>{" "}
                and properly responsive to who they are.
              </p>

              <p>
                For{" "}
                <span className="font-semibold text-[#12284C]">
                  home educated families
                </span>
                , this provides a consistent,{" "}
                <span className="font-semibold text-[#12284C]">
                  structured part of the week
                </span>{" "}
                where children can learn alongside others in a{" "}
                <span className="font-semibold text-[#12284C]">
                  small, carefully guided group
                </span>
                . It brings structure, routine and a sense of shared learning,
                without losing the flexibility and individuality that home
                education allows.
              </p>

              <p>
                For{" "}
                <span className="font-semibold text-[#12284C]">
                  flexi-schooled children
                </span>
                , it offers a more thoughtful, relationship-led alternative to
                traditional tutoring - a setting where they can slow down,
                rebuild{" "}
                <span className="font-semibold text-[#12284C]">
                  confidence
                </span>{" "}
                and engage more positively with learning alongside their time in
                school.
              </p>

              <p>
                The aim is not simply to cover content. It is to create the kind
                of environment in which children feel secure enough to engage,
                build confidence and make meaningful progress over time.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-[#12284C] px-7 py-3.5 font-semibold text-white shadow-xl transition hover:-translate-y-0.5"
              >
                Make an Enquiry
              </Link>

              <Link
                href="/approach"
                className="inline-flex rounded-full border border-slate-300 bg-white px-7 py-3.5 font-semibold text-[#12284C] transition hover:bg-slate-50"
              >
                Read about the approach
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-14">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.22em] text-slate-500">
              Who this is for
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#12284C] md:text-5xl">
              Children who benefit from a calmer, more personal way of learning.
            </h2>

            <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              Some children make stronger progress when learning feels more
              personal, more predictable and more responsive to their needs.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {fitCards.map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-slate-200 bg-[#FBFBF9] p-8 shadow-sm"
              >
                <h3 className="text-2xl font-semibold text-[#12284C]">
                  {item.title}
                </h3>
                <p className="mt-4 leading-8 text-slate-700">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/testimonials"
              className="text-sm font-semibold text-[#12284C] underline underline-offset-4"
            >
              Read what families say
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-14">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <p className="text-sm uppercase tracking-[0.22em] text-slate-500">
            For home-educating families
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#12284C] md:text-5xl">
            Calm, structured support for families carrying the weight of home
            education.
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-700">
            When home learning begins to feel exhausting, the issue is rarely
            effort alone. More often, it is the emotional load, the constant
            decision-making and the challenge of sustaining a rhythm that works
            for both child and parent.
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
            Next step
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Explore whether this feels like the right fit for your child.
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-200">
            If you are considering a more bespoke, relationship-led and
            thoughtfully structured option for your child, the next step is a
            simple conversation.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-white px-7 py-4 font-semibold text-[#12284C] transition hover:-translate-y-0.5"
            >
              Make an Enquiry
            </Link>

            <Link
              href="/approach"
              className="inline-flex rounded-full border border-white/20 bg-white/10 px-7 py-4 font-semibold text-white transition hover:bg-white/15"
            >
              Read about the approach
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}