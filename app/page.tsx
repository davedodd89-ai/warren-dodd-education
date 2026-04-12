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
        <div className="mx-auto max-w-7xl px-6 py-3 text-center md:px-10 md:py-5">
          <p className="text-lg font-medium leading-8 text-[#12284C] md:text-2xl">
            It’s not just <span className="font-semibold text-[#D8B35B]">what</span>{" "}
            we learn, it’s <span className="font-semibold text-[#D8B35B]">how</span>{" "}
            we learn.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10 pt-6 md:px-10 md:pb-12 md:pt-8">
        <div className="grid items-start gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start lg:gap-12">
          <div className="order-1 mx-auto w-full max-w-[280px] sm:max-w-[300px] md:max-w-[430px] lg:order-2 lg:mx-0 lg:max-w-none">
            <div className="lg:sticky lg:top-28 lg:space-y-6">
              <div className="relative">
                <div className="absolute -inset-3 rounded-[1.8rem] bg-slate-200/20 blur-3xl" />

                <div className="relative overflow-hidden rounded-[1.35rem] border border-white/80 bg-white/95 p-2 shadow-[0_16px_50px_rgba(15,23,42,0.10)]">
                  <div className="overflow-hidden rounded-[1rem] bg-slate-100">
                    <video
                      className="h-[130px] w-full object-cover object-center sm:h-[150px] md:h-[220px] lg:h-[320px]"
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

              <div className="rounded-[1.6rem] border border-[#D8B35B]/50 bg-[#FBFBF9] p-5 shadow-sm lg:p-6">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500 md:text-sm">
                  Launching soon
                </p>

                <p className="mt-2 text-xl font-semibold text-[#12284C] md:text-2xl">
                  Morning daytime sessions
                </p>

                <p className="mt-2 text-base font-medium text-slate-700 md:text-lg">
                  Cheshire venue being finalised
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-700 md:text-base md:leading-7">
                  Includes movement and regulation breaks, snacks, refreshments
                  and a calm social learning environment to enhance engagement
                  and learning.
                </p>

                <p className="mt-3 text-sm font-medium uppercase tracking-[0.16em] text-[#12284C]">
                  Maximum 4 children per session
                </p>

                <p className="mt-3 text-sm font-medium text-slate-700 md:text-base">
                  Now taking enquiries for September 2026
                </p>
              </div>
            </div>
          </div>

          <div className="order-2 max-w-3xl lg:order-1 lg:max-w-[720px]">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500 md:text-sm">
              What we offer
            </p>

            <h1 className="mt-4 max-w-4xl text-[1.75rem] font-semibold leading-[0.95] tracking-[-0.04em] text-[#12284C] sm:text-[2.4rem] md:text-[3.5rem] lg:max-w-[780px] lg:text-[4.2rem]">
              Bespoke daytime education for home-educated children and
              flexi-schoolers.
            </h1>

            <p className="mt-5 max-w-3xl text-lg font-medium leading-8 text-[#12284C] md:text-xl md:leading-9">
              A calm, welcoming and personalised approach that helps children feel
              understood, supported and ready to learn.
            </p>

            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              Warren Dodd Education provides bespoke, premium daytime tutoring in
              English and Maths and the wider curriculum, for children aged
              8-11 within Cheshire and Stockport.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              Our teaching is relationship-led at its core, built on human
              trust, mutual respect and empathy - because children learn best
              when they feel genuinely known, understood, and valued. Social
              and emotional support matters deeply, and creating a calm, fun and
              safe learning environment is a central part of what we do.
              Understanding what truly motivates each child is where our
              strengths lie.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              Our approach is personal, thoughtful, and built around knowing
              each child well: their interests, strengths, learning style, and
              the emotional factors that shape how they engage. Alongside the
              teaching of subjects, we’re offering high quality mentorship to
              the children with us, remaining kind and compassionate. We truly
              value strong communication and trusted relationships with parents
              and carers too, because meaningful progress is strongest when the
              adults around a child work together with clarity, care and shared
              understanding.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              We are driven by a genuine passion for helping children grow in
              confidence, self-belief and resilience, while giving them a
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
                BSc (Hons) Psychology • Primary PGCE • QTS
              </p>

              <p className="mt-3 text-center text-sm font-medium tracking-[0.08em] text-[#D8B35B] md:text-base">
                Enhanced DBS Checked • First Aid Trained
              </p>

              <ul className="mt-5 space-y-3 text-center text-base leading-7 text-slate-200 md:text-lg md:leading-8">
                <li>Current Primary School Teacher in Manchester</li>
                <li>Lead Teaching and Learning Coach.</li>
                <li>Relationship-led, psychology-informed education built around the whole child.</li>
                <li>Highly experienced and skilled practitioner.</li>
              </ul>

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
          <div className="mx-auto max-w-2xl">
            <div className="rounded-[1.7rem] border border-slate-200 bg-white p-7 shadow-sm md:p-8">
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