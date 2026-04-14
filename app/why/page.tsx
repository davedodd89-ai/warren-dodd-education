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
    {
      title: "Relationship-led experience",
      text: "With experience across mainstream and SEND, my approach is built around understanding the child in front of me properly. When children feel known, respected and safe with the adult leading them, they are far more likely to engage, trust the process and begin to grow in confidence.",
    },
  ];

  const approachCards = [
    {
      title: "Understanding comes first",
      text: "Before strong learning can happen, children need to feel known. That means taking the time to understand their personality, interests, confidence, learning profile, barriers and motivators rather than rushing straight into content.",
    },
    {
      title: "Calm structure matters",
      text: "Children often do better when the session has a clear rhythm, calm expectations and a sense of emotional safety. That structure helps reduce pressure, uncertainty and resistance, making engagement more likely.",
    },
    {
      title: "Challenge is carefully pitched",
      text: "Work needs to be demanding enough to build progress, but not so poorly pitched that it creates avoidance or self-doubt. The aim is to help children experience success, stretch and pride at the right level.",
    },
    {
      title: "Reflection builds ownership",
      text: "Children make stronger progress when they start to understand themselves as learners. Reflection helps them notice what is working, where they are growing and how they can take more ownership over the process.",
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

  const investmentPoints = [
    "3-hour bespoke daytime session",
    "£195 per daytime session",
    "Maximum 4 children",
    "Relationship-led and psychology-informed",
    "Built to grow confidence, resilience and independence",
  ];

  return (
    <div className="min-h-screen bg-[#F7F7F4] text-slate-900">
      <SiteHeader />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-18 lg:py-20">
          <div className="max-w-5xl">
            <p className="text-sm uppercase tracking-[0.22em] text-slate-500">
              Why Warren Dodd Education?
            </p>

            <h1 className="mt-4 text-[2.3rem] font-semibold leading-[0.95] tracking-[-0.04em] text-[#12284C] md:text-6xl">
              A more personal, thoughtful approach for children who benefit from
              being understood properly.
            </h1>

            <div className="mt-6 space-y-5 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              <p>
                Warren Dodd Education is built around a simple belief: children
                make their strongest progress when they feel safe, understood
                and genuinely part of the learning process.
              </p>

              <p>
                This is not standard tutoring built around moving quickly
                through content. It is a more thoughtful, relationship-led and
                carefully tailored approach that gives equal importance to how a
                child feels, how they engage and how they begin to see
                themselves as a learner.
              </p>

              <p>
                For some children, that means rebuilding confidence. For some,
                it means finding the right level of challenge. For others, it
                means finally learning in an environment that feels calmer, more
                personal and more responsive to who they are.
              </p>

              <p>
                The approach is shaped by years of teaching experience, a
                background in Psychology, work across mainstream and SEND, and a
                deep understanding of motivation, trust, communication and
                emotional safety.
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
                href="/testimonials"
                className="inline-flex rounded-full border border-slate-300 bg-white px-7 py-3.5 font-semibold text-[#12284C] transition hover:bg-slate-50"
              >
                Read Testimonials
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-[#F7F7F4]">
        <div className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
              <p className="text-sm uppercase tracking-[0.22em] text-slate-500">
                The approach
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#12284C] md:text-5xl">
                A calmer, more personal way for children to learn.
              </h2>

              <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                Every part of the session is built around the child in front of
                me - how they think, what motivates them, where confidence
                currently sits and what helps them feel safe enough to engage
                fully.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                From there, the structure, level of challenge and group dynamic
                can be shaped carefully so that progress feels purposeful,
                confidence grows and children begin to take real ownership over
                learning.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#D8B35B]/40 bg-[#FBFBF9] p-8 shadow-sm md:p-10">
              <p className="text-sm uppercase tracking-[0.22em] text-slate-500">
                Investment
              </p>

              <p className="mt-3 text-4xl font-semibold text-[#12284C] md:text-5xl">
                £195
              </p>

              <p className="mt-2 text-base text-slate-700 md:text-lg">
                Per daytime session
              </p>

              <p className="mt-3 text-lg font-medium text-[#12284C]">
                A specialised learning experience
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {investmentPoints.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-300 bg-white px-3.5 py-2 text-xs text-slate-700 md:text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-sm leading-6 text-slate-700 md:text-base md:leading-7">
                A 3-hour small-group daytime session designed to build
                confidence, independence and meaningful academic progress in a
                calm, highly personalised environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-14">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.22em] text-slate-500">
            How the approach works
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#12284C] md:text-5xl">
            A calm, deliberate process that helps children engage more deeply.
          </h2>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {approachCards.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-[#12284C]">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-slate-700 md:text-base md:leading-7">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-14">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.22em] text-slate-500">
              Who this is for
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#12284C] md:text-5xl">
              Children who benefit from a calmer, more personal way of learning.
            </h2>

            <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              Some children make stronger progress when learning feels calmer,
              more personal and more responsive to who they are.
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
            Calm, structured support for parents carrying the weight of home
            education.
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-700">
            When home learning begins to feel exhausting, the issue is rarely
            effort - it is usually structure, pace and emotional load. My
            support helps parents simplify the day, reduce pressure and rebuild
            confidence so learning becomes sustainable again.
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

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-white px-7 py-4 font-semibold text-[#12284C] transition hover:-translate-y-0.5"
            >
              Make an Enquiry
            </Link>

            <Link
              href="/"
              className="inline-flex rounded-full border border-white/20 bg-white/10 px-7 py-4 font-semibold text-white transition hover:bg-white/15"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}