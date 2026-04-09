import Link from "next/link";
import SiteHeader from "../SiteHeader";

export default function WhyPage() {
  const whyPoints = [
    {
      title: "Relationship-led by design",
      text: "At the heart of the approach is a real commitment to building trusted relationships with each child. When children feel understood, respected and genuinely known, they are far more likely to engage positively with learning.",
    },
    {
      title: "Built around what motivates the child",
      text: "The work is shaped around each child’s interests, strengths, learning styles, passions and the emotional factors that influence how they engage. That makes learning feel more personal, relevant and meaningful.",
    },
    {
      title: "Psychology-informed",
      text: "With a background in Psychology and years of classroom practice, the approach recognises that confidence, self-belief, resilience and emotional security are not extras. They are central to strong progress.",
    },
    {
      title: "Ownership and independence",
      text: "By designing experiences where children feel part of the process, they begin to develop a stronger sense of ownership over their learning journey. This helps them re-engage and thrive in a meaningful way.",
    },
  ];

  const whoItsFor = [
    "have lost confidence in learning",
    "struggle in busy classroom settings",
    "avoid or resist schoolwork",
    "benefit from smaller, calmer and more structured teaching",
    "need closer support, clearer routines and stronger relationships",
    "are in home education or flexi schooling and need more than standard tutoring",
  ];

  return (
    <div className="min-h-screen bg-[#F7F7F4] text-slate-900">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-20">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.22em] text-slate-500">
            Why Warren Dodd Education
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#12284C] md:text-6xl">
            Why this approach works.
          </h1>

          <div className="mt-6 space-y-5 text-lg leading-8 text-slate-700">
            <p>
              The difference is not simply smaller groups or daytime sessions. It
              is the depth of understanding behind how each child experiences
              learning.
            </p>

            <p>
              My background in Psychology, behaviour, motivation and classroom
              practice means the work goes far beyond delivering English and
              Maths. It focuses on confidence, trust, emotional safety and the
              conditions children need in order to re-engage.
            </p>

            <p>
              When children feel understood, respected and successful, their
              willingness to think, speak, persevere and take ownership begins to
              change. That is where meaningful progress starts.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {whyPoints.map((item) => (
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
            Who this is for
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#12284C] md:text-5xl">
            This is for children who need more than standard tutoring.
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {whoItsFor.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-[#FBFBF9] px-5 py-4 text-slate-800 shadow-sm"
              >
                This is for children who {item}.
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-[2rem] border border-slate-200 bg-[#12284C] p-8 text-white shadow-sm">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Confidence, self-belief, resilience and ownership matter.
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-200">
            Confidence, self-belief, resilience, independence and a growing
            sense of ownership over the learning journey are central to the work
            of Warren Dodd Education. By creating experiences where children
            feel part of the process, they begin to re-engage with learning and
            thrive in a more meaningful way.
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