import SiteHeader from "../SiteHeader";
import Link from "next/link";

export default function WhyPage() {
  const methodPhases = [
    {
      title: "1. Engage",
      text: "Built through trust, emotional safety and strong relationships. Children begin to feel understood, more settled and more willing to take part.",
    },
    {
      title: "2. Learn",
      text: "Driven by confidence, the right level of challenge and thoughtful teaching. As engagement grows, children become more open to learning, thinking and making progress.",
    },
    {
      title: "3. Thrive",
      text: "Developing independence, resilience and a stronger sense of self as a learner. Over time, children take greater ownership and engage more positively with learning.",
    },
  ];

  const principles = [
    {
      title: "Psychology-informed",
      text: "With a background in Psychology and extensive classroom experience, the approach recognises that confidence, motivation and emotional security are central to strong progress.",
    },
    {
      title: "Relationship-led",
      text: "Trusted relationships are not an added extra. They are deliberately built, because children engage more positively with learning when they feel understood, respected and genuinely known.",
    },
    {
      title: "Built around the individual",
      text: "Learning is shaped around each child’s strengths, interests, learning style and emotional experience. This makes the work feel more relevant and increases the likelihood of meaningful engagement.",
    },
    {
      title: "Designed for lasting growth",
      text: "The aim is not only to help children learn more in the moment, but to help them grow in confidence, independence and ownership over time.",
    },
  ];

  const understandingPoints = [
    "what naturally captures a child’s interest and attention",
    "how they respond best to challenge, support and encouragement",
    "the learning style, pace and structure that helps them flourish",
    "how to build confidence so engagement feels natural, not forced",
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F7F7F4] text-slate-900">
      <SiteHeader />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-18 lg:py-20">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.22em] text-slate-500">
              The Warren Dodd Method
            </p>

            <h1 className="mt-4 text-[2.3rem] font-semibold leading-[0.95] tracking-[-0.04em] text-[#12284C] md:text-6xl">
              A psychology-informed, relationship-led approach that reshapes how
              children experience learning.
            </h1>

            <div className="mt-6 space-y-5 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              <p>
                This is designed to change how a child experiences learning, not
                just what they learn.
              </p>

              <p>
                What makes this different is that engagement is not forced. It is
                built through trust, relationships and a deeper understanding of
                how each child feels, thinks and learns.
              </p>

              <p>
                When children feel more secure, more understood and more capable,
                they become more willing to engage, more open to learning and
                more likely to grow in confidence and independence over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.22em] text-slate-500">
              How the method works
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#12284C] md:text-5xl">
              A clear process for helping children engage, learn and thrive.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              The language is simple, but the thinking behind it is not. Each
              stage is shaped by psychology, relationships and careful teaching
              so that progress feels meaningful and lasting.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3 md:items-center">
            {methodPhases.map((phase, index) => (
              <div
                key={phase.title}
                className="relative rounded-[1.6rem] border border-slate-200 bg-[#FBFBF9] p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Step {index + 1}
                </p>
                <p className="mt-2 text-lg font-semibold text-[#12284C]">
                  {phase.title.replace(/^\d+\.\s*/, "")}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  {phase.text}
                </p>

                {index < methodPhases.length - 1 && (
                  <div className="absolute right-[-18px] top-1/2 hidden -translate-y-1/2 text-slate-300 md:block">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16">
          <div className="grid gap-6 lg:grid-cols-[0.98fr_1.02fr] lg:items-start">
            <div className="rounded-[2rem] border border-[#D8B35B]/40 bg-[#FBFBF9] p-8 shadow-sm md:p-10">
              <p className="text-sm uppercase tracking-[0.22em] text-slate-500">
                Understanding the child
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#12284C] md:text-4xl">
                Skilled at understanding what helps each child engage and learn well.
              </h2>

              <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                Before strong progress can happen, it is important to understand
                the individual child in front of you. That means noticing what
                helps them feel confident, what captures their interest and what
                kind of teaching allows them to engage positively.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                This is where much of the skill lies. It is not about applying a
                fixed formula. It is about carefully understanding how each child
                learns best, and then shaping the experience around them with
                thought, precision and care.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
              <p className="text-sm uppercase tracking-[0.22em] text-slate-500">
                In practice, that means understanding
              </p>

              <div className="mt-6 grid gap-3">
                {understandingPoints.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-[#FBFBF9] px-4 py-3 text-sm leading-6 text-slate-700 md:text-base"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.22em] text-slate-500">
              Underpinning the approach
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#12284C] md:text-5xl">
              Built on clear principles, not guesswork.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {principles.map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-slate-200 bg-[#FBFBF9] p-8 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-[#12284C]">
                  {item.title}
                </h3>
                <p className="mt-4 leading-8 text-slate-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16">
        <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="rounded-[2rem] border border-[#D8B35B]/40 bg-[#FBFBF9] p-8 shadow-sm md:p-10">
            <p className="text-sm uppercase tracking-[0.22em] text-slate-500">
              Why this matters
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#12284C] md:text-4xl">
              This is not simply about covering content.
            </h2>

            <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              The aim is to create the conditions in which children feel secure
              enough to engage, confident enough to learn and supported enough
              to thrive.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              When children feel calmer, more capable and more involved, they
              begin to think more deeply, persevere for longer and take greater
              ownership of their learning. That shift often leads to stronger,
              more meaningful and more lasting progress over time.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-[#12284C] p-8 text-white shadow-sm md:p-10">
            <p className="text-sm uppercase tracking-[0.22em] text-slate-300">
              In practice
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Children engage more, learn more effectively and grow in confidence over time.
            </h2>

            <p className="mt-6 text-base leading-7 text-slate-200 md:text-lg md:leading-8">
              That is why the method matters. It helps explain not only what is
              being taught, but why the experience feels different and why that
              difference can have such a strong impact.
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
        </div>
      </section>
    </div>
  );
}