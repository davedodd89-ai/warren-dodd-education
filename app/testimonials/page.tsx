import Link from "next/link";
import SiteHeader from "../SiteHeader";

export default function TestimonialsPage() {
  const featuredTestimonial = {
    quote:
      "David is a consistently outstanding teacher in terms of both his delivery and the outcomes his children achieve. He has taught across the primary age range and has worked extensively in Year 6 in recent years. He is exceptionally skilled at meeting the needs of children through tailored learning experiences and adapting his teaching where needed.",
    source: "Executive Headteacher",
  };

  const coreTestimonials = [
    {
      quote:
        "Mr Dodd is an exceptional teacher. His passion for the psychology of how boys learn has enabled him to truly understand our son’s learning style and engage his full potential in a fun, nurturing way.",
      source: "Parent of boy aged 8",
    },
    {
      quote:
        "He has worked closely with us to tailor the tutoring to each child’s needs, and we consistently feel real value in every session.",
      source: "Parent of girl aged 9",
    },
    {
      quote:
        "From day one, our son felt that Mr Dodd was on his side, that they were a team, and this created a strong sense of mutual respect that has been invaluable.",
      source: "Parent of boy aged 9",
    },
    {
      quote:
        "From the outset, Mr Dodd took the time to fully understand our son: his struggles, his interests, what motivates him, and what holds him back. Connection and understanding come first, and the teaching follows naturally.",
      source: "Parent of boy aged 8",
    },
  ];

  const additionalTestimonials = [
    {
      quote:
        "Very friendly and engaging with my son in Year 6, making sessions enjoyable rather than feeling like more school. It is still early days, but progress is already clearly visible, which is fantastic. I would highly recommend him.",
      source: "Parent of boy in Year 6",
    },
    {
      quote:
        "From the very first session, David was extremely friendly, polite and understanding of the children's needs. He created a positive impression straight away, and we felt confident we had chosen the right person.",
      source: "Parent testimonial",
    },
  ];

  const trustPoints = [
    "Trust and mutual respect",
    "Children feeling understood",
    "Tailored support",
    "Confidence growing alongside progress",
  ];

  return (
    <div className="min-h-screen bg-[#F7F7F4] text-slate-900">
      <SiteHeader />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14 text-center md:px-10 md:py-20">
          <p className="text-sm uppercase tracking-[0.22em] text-slate-500">
            Testimonials
          </p>

          <h1 className="mx-auto mt-4 max-w-4xl text-3xl font-semibold tracking-tight text-[#12284C] sm:text-4xl md:text-6xl">
            Families and school leaders speak about trust, understanding and
            real progress.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            The strongest feedback is rarely just about academic outcomes. It is
            about children feeling understood, relationships being built well
            and confidence growing alongside progress.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {trustPoints.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-300 bg-[#FBFBF9] px-3.5 py-2 text-xs text-slate-700 md:text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 md:px-10 md:py-14">
        <div className="rounded-[1.7rem] border border-[#D8B35B]/40 bg-white p-7 shadow-sm md:p-9">
          <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
            School leadership perspective
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#12284C] md:text-4xl">
            Professional confidence in the approach.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-800 md:text-[1.35rem] md:leading-9">
            "{featuredTestimonial.quote}"
          </p>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#12284C] md:text-sm">
            {featuredTestimonial.source}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-10 md:px-10 md:pb-14">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.22em] text-slate-500">
              Parent testimonials
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#12284C] md:text-4xl">
              What families notice most.
            </h2>
          </div>

          <div className="hidden md:block">
            <Link
              href="/why"
              className="text-sm font-semibold text-[#12284C] underline underline-offset-4"
            >
              Read more about the approach
            </Link>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {coreTestimonials.map((item) => (
            <div
              key={item.quote}
              className="flex h-full flex-col justify-between rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-sm md:p-7"
            >
              <p className="text-base leading-8 text-slate-800 md:text-lg md:leading-9">
                "{item.quote}"
              </p>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 md:text-sm">
                {item.source}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-5 md:hidden">
          <Link
            href="/why"
            className="text-sm font-semibold text-[#12284C] underline underline-offset-4"
          >
            Read more about the approach
          </Link>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10 md:px-10 md:py-14">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.22em] text-slate-500">
              More feedback
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#12284C] md:text-4xl">
              Further reflections from parents.
            </h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {additionalTestimonials.map((item) => (
              <div
                key={item.quote}
                className="flex h-full flex-col justify-between rounded-[1.6rem] border border-slate-200 bg-[#FBFBF9] p-6 shadow-sm md:p-7"
              >
                <p className="text-base leading-8 text-slate-800 md:text-lg md:leading-9">
                  "{item.quote}"
                </p>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 md:text-sm">
                  {item.source}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 text-center md:px-10 md:py-16">
        <p className="text-sm uppercase tracking-[0.22em] text-slate-500">
          Next step
        </p>

        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#12284C] md:text-4xl">
          Explore whether this feels like the right fit for your child.
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
          If you are considering daytime education, home education support or
          flexi-schooling support, the simplest next step is to make an enquiry
          and start a conversation.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-[#12284C] px-8 py-3.5 font-semibold text-white shadow-xl transition hover:-translate-y-0.5"
          >
            Make an Enquiry
          </Link>

          <Link
            href="/why"
            className="inline-flex rounded-full border border-slate-300 bg-white px-8 py-3.5 font-semibold text-[#12284C] transition hover:bg-slate-50"
          >
            Read more about the approach
          </Link>
        </div>
      </section>
    </div>
  );
}