import Link from "next/link";
import SiteHeader from "./SiteHeader";

export default function Page() {
  const testimonialSnippets = [
    {
      quote:
        "Mr Dodd is an exceptional teacher. His passion for the psychology of how boys learn has enabled him to truly understand our son’s learning style and engage his full potential in a fun, nurturing way.",
      source: "Parent of boy aged 8",
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

  const whoIAmPoints = [
    "15 years in primary education",
    "BSc (Hons) Psychology, Primary PGCE and QTS",
    "Experience across mainstream and SEND",
    "Teaching shaped around the child, not just the curriculum",
  ];

  const programmePoints = [
    "A calm, safe start that helps your child feel settled and ready to learn",
    "Personalised English and Maths teaching matched to their needs and confidence level",
    "Movement and regulation breaks that reduce overwhelm and improve focus",
    "Problem-solving and guided challenge that rebuild resilience and independence",
    "Positive reflection so they leave feeling proud, successful and ready for tomorrow",
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

  const enquiryPoints = [
    "Home education support",
    "Flexi schooling support",
    "Daytime tutoring",
    "A more personal alternative to traditional tutoring",
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#F7F7F4] text-slate-900">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[460px] bg-[radial-gradient(circle_at_top,rgba(18,40,76,0.06),transparent_42%),radial-gradient(circle_at_right,rgba(18,40,76,0.04),transparent_34%)]" />

      <SiteHeader />

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center md:px-10">
          <p className="text-xl font-medium leading-9 text-[#12284C] md:text-2xl">
            It’s not <span className="font-semibold text-[#D8B35B]">what</span>{" "}
            we learn.
            <br />
            It’s <span className="font-semibold text-[#D8B35B]">how</span> we
            learn.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10 pt-6 md:px-10 md:pb-12 md:pt-8">
        <div className="grid items-start gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-10">
          <div className="order-1 mx-auto w-full max-w-[360px] lg:order-2 lg:max-w-[390px]">
            <div className="relative">
              <div className="absolute -inset-2 rounded-[1.6rem] bg-slate-200/15 blur-2xl" />

              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/80 bg-white/95 p-2 shadow-[0_16px_50px_rgba(15,23,42,0.10)]">
                <div className="overflow-hidden rounded-[1.15rem] bg-slate-100">
                  <video
                    className="h-[180px] w-full object-cover object-center md:h-[220px] lg:h-[260px]"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/logo.png"
                  >
                    <source src="/hero-video.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>

          <div className="order-2 max-w-3xl lg:order-1">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500 md:text-sm">
              What we offer
            </p>

            <h1 className="mt-4 max-w-4xl text-[2.2rem] font-semibold leading-[0.95] tracking-[-0.05em] text-[#12284C] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[4.2rem]">
              Bespoke daytime education for home-educated children and
              flexi-schoolers.
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              Our work is relationship-led at its core, built on human trust,
              mutual respect and empathy - because children learn best when they
              feel genuinely known, understood, and valued. Social and emotional
              support matters deeply, and creating a calm, friendly and safe
              learning environment is a central part of what we do.
              Understanding what truly motivates each child is where our
              strengths lie.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              Warren Dodd Education is personal, thoughtful, and built around
              knowing each child well: their interests, strengths, learning
              style, and the emotional factors that shape how they engage.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              The work is driven by a genuine passion for helping children grow
              in confidence, self-belief and resilience, while giving them a
              stronger sense of ownership over their learning journey.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <span className="rounded-full border border-amber-300 bg-amber-50 px-3.5 py-2 text-xs text-amber-800 md:text-sm">
                Maximum 4 children
              </span>
              <span className="rounded-full border border-sky-300 bg-sky-50 px-3.5 py-2 text-xs text-sky-800 md:text-sm">
                3-hour daytime sessions
              </span>
              <span className="rounded-full border border-emerald-300 bg-emerald-50 px-3.5 py-2 text-xs text-emerald-800 md:text-sm">
                Home education &amp; flexi schooling
              </span>
              <span className="rounded-full border border-rose-300 bg-rose-50 px-3.5 py-2 text-xs text-rose-800 md:text-sm">
                Limited places available
              </span>
            </div>

            <div className="mt-6 rounded-[1.6rem] border border-[#D8B35B]/50 bg-[#FBFBF9] p-5 shadow-sm">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500 md:text-sm">
                Launching now
              </p>

              <p className="mt-2 text-xl font-semibold text-[#12284C] md:text-2xl">
                Tuesday mornings · 9:30-12:30
              </p>

              <p className="mt-2 text-base font-medium text-slate-700 md:text-lg">
                Alderley Edge, Cheshire
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-700 md:text-base md:leading-7">
                Includes break time, snacks, refreshments and a calm social
                learning environment.
              </p>

              <p className="mt-3 text-sm font-medium uppercase tracking-[0.16em] text-[#12284C]">
                Maximum 4 children · limited launch places
              </p>

              <p className="mt-3 text-sm font-medium text-slate-700 md:text-base">
                Now taking enquiries for September 2026
              </p>
            </div>

            <div className="mt-7">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-[#12284C] px-7 py-3.5 font-semibold text-white shadow-xl transition hover:-translate-y-0.5"
              >
                Make an Enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-12">
          <div className="flex items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500 md:text-sm">
                What families say
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#12284C] md:text-3xl">
                Families talk about trust, confidence and real change.
              </h2>
            </div>

            <div className="hidden md:block">
              <Link
                href="/testimonials"
                className="text-sm font-semibold text-[#12284C] underline underline-offset-4"
              >
                Read more
              </Link>
            </div>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {testimonialSnippets.map((item) => (
              <div
                key={item.quote}
                className="flex h-full flex-col justify-between rounded-[1.5rem] border border-slate-200 bg-[#FBFBF9] p-5 shadow-sm"
              >
                <p className="text-sm leading-6 text-slate-800 md:text-base md:leading-7">
                  “{item.quote}”
                </p>

                <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500 md:text-xs">
                  {item.source}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 md:hidden">
            <Link
              href="/testimonials"
              className="text-sm font-semibold text-[#12284C] underline underline-offset-4"
            >
              Read more
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#F7F7F4]">
        <div className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-14">
          <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <div className="rounded-[1.7rem] bg-[#12284C] p-7 text-white shadow-sm">
              <div className="mx-auto h-32 w-32 overflow-hidden rounded-full border-4 border-white/10 shadow-lg md:h-36 md:w-36">
                <img
                  src="/hero.jpg"
                  alt="David Warren Dodd"
                  className="h-full w-full object-cover"
                />
              </div>

              <h2 className="mt-5 text-center text-2xl font-semibold md:text-3xl">
                David Warren Dodd
              </h2>

              <p className="mt-2 text-center text-xs uppercase tracking-[0.18em] text-slate-300 md:text-sm">
                BSc (Hons) • Primary PGCE • QTS
              </p>

              <p className="mt-5 text-center text-base leading-7 text-slate-200 md:text-lg md:leading-8">
                Relationship-led, psychology-informed education built around the
                whole child.
              </p>

              <div className="mt-6 text-center">
                <Link
                  href="/why"
                  className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  Read more about the approach
                </Link>
              </div>
            </div>

            <div className="rounded-[1.7rem] border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500 md:text-sm">
                Who I am
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#12284C] md:text-4xl">
                Built on trusted relationships and a deep understanding of how
                children learn.
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                I started Warren Dodd Education because too many children begin
                to lose confidence in themselves as learners. My work is built
                on relationship-based teaching, a strong understanding of child
                development, and a belief that progress is strongest when
                children feel understood, respected and emotionally secure.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                With 15 years of experience across mainstream and SEND,
                alongside a degree in Psychology and a Primary PGCE, I have
                developed a deep understanding of how children learn, what
                motivates them, and how trust, clarity and connection can
                transform engagement.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                I make every effort to understand the child in front of me -
                their strengths, their interests, their barriers, and the way
                they learn best. This is why the work is not just about
                tutoring. It is about creating the kind of environment where
                children can feel capable again and begin to thrive.
              </p>

              <div className="mt-6 grid gap-3">
                {whoIAmPoints.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-[#FBFBF9] px-4 py-3.5 text-sm text-slate-800 shadow-sm md:text-base"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F7F4]">
        <div className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-14">
          <div className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
            <div className="rounded-[1.7rem] border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500 md:text-sm">
                Investment
              </p>

              <p className="mt-3 text-4xl font-semibold text-[#12284C] md:text-5xl">
                £65
              </p>

              <p className="mt-2 text-base text-slate-700 md:text-lg">
                Per hour · 3-hour sessions
              </p>

              <p className="mt-3 text-lg font-medium text-[#12284C]">
                £195 per daytime session
              </p>

              <p className="mt-3 text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
                Maximum 4 children per group
              </p>

              <div className="mt-5 space-y-2.5 text-sm text-slate-700 md:text-base">
                <p>Bespoke daytime education</p>
                <p>Relationship-led and psychology-informed</p>
                <p>Home education and flexi-school families</p>
                <p>Built to grow confidence and independence</p>
              </div>

              <div className="mt-7">
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#12284C] px-6 py-3.5 text-center font-semibold text-white transition hover:-translate-y-0.5"
                >
                  Make an Enquiry
                </Link>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="rounded-[1.7rem] border border-slate-200 bg-white p-7 shadow-sm">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-500 md:text-sm">
                  The bespoke daytime programme
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#12284C] md:text-4xl">
                  Built around your child and their needs.
                </h2>

                <p className="mt-5 max-w-3xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                  This is not an after-school one-hour slot. It is carefully
                  designed daytime provision for children aged 8 to 11 who need
                  a more personal, energising and confidence-building way to
                  learn - especially those in home education and flexi
                  schooling.
                </p>

                <div className="mt-6 grid gap-3">
                  {programmePoints.map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.3rem] border border-[#e9cfcf] bg-[#f3dddd] px-4 py-4 text-sm leading-6 text-[#4b2230] shadow-sm md:text-base md:leading-7"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.7rem] border border-slate-200 bg-white p-7 shadow-sm">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-500 md:text-sm">
                  For home-educating families
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#12284C] md:text-4xl">
                  Calm, structured support for parents carrying the weight of
                  home education.
                </h2>

                <p className="mt-5 max-w-3xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                  When home learning begins to feel exhausting, the issue is
                  rarely effort - it is usually structure, pace, and emotional
                  load. My support helps parents simplify the day, reduce
                  pressure, and rebuild confidence so learning becomes
                  sustainable again.
                </p>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
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
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-10 text-center md:px-10 md:py-14">
          <p className="text-xs uppercase tracking-[0.22em] text-slate-500 md:text-sm">
            Enquiry
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#12284C] md:text-4xl">
            Make an enquiry to see if this feels like the right fit.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
            Whether you are exploring home education support, flexi schooling
            support or daytime tutoring, the first step is a simple
            conversation.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-2.5">
            {enquiryPoints.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-300 bg-[#FBFBF9] px-3.5 py-2 text-xs text-slate-700 md:text-sm"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-[#12284C] px-8 py-3.5 font-semibold text-white shadow-xl transition hover:-translate-y-0.5"
            >
              Make an Enquiry
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-7 text-center md:px-10">
          <img
            src="/logo.svg"
            alt="Warren Dodd Education"
            className="mb-3 h-auto w-[110px] opacity-80"
          />
          <p className="text-sm text-slate-500">Warren Dodd Education</p>
        </div>
      </footer>
    </div>
  );
}
