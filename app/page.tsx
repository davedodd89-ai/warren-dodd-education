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

  const featuredTestimonial = {
    quote:
      "David is a consistently outstanding teacher in terms of both his delivery and the outcomes his children achieve. He has taught across the primary age range and has worked extensively in Year 6 in recent years. He is exceptionally skilled at meeting the needs of children through tailored learning experiences and adapting his teaching where needed.",
    source: "Executive Headteacher",
  };

  const enquiryPoints = [
    "Home education support",
    "Flexi schooling support",
    "Daytime education",
    "A more personal alternative to traditional tutoring",
  ];

  const venueHighlights = [
    "Tuesday mornings",
    "9:30am - 12:30pm",
    "Alderley Edge, Cheshire",
    "Maximum 4 children",
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
        <div className="grid items-start gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
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
                      poster="/logo-new.png"
                    >
                      <source src="/hero-video.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>

              <div className="hidden rounded-[1.7rem] border border-[#D8B35B]/50 bg-[#FBFBF9] p-6 shadow-sm lg:block">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                  Launching soon
                </p>

                <h2 className="mt-3 text-[2rem] font-semibold leading-tight text-[#12284C]">
                  Daytime sessions
                </h2>

                <p className="mt-2 text-lg font-medium text-slate-700">
                  Cheshire
                </p>

                <p className="mt-5 text-base leading-8 text-slate-700">
                  A calm, personalised small-group approach, with a no-obligation
                  home visit before joining so we can make sure it feels like the
                  right fit for your child.
                </p>

                <div className="mt-6 space-y-2">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#12284C]">
                    Tuesday mornings. Weekly from September 2026.
                  </p>
                  <p className="text-base font-medium text-slate-700">
                    9:30am - 12:30pm
                  </p>
                  <p className="text-base font-medium text-slate-700">
                    Alderley Edge, Cheshire
                  </p>
                </div>

                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#12284C]">
                  Maximum 4 children per session
                </p>

                <p className="mt-3 text-base font-medium text-slate-700">
                  Enquiries now open for September 2026
                </p>
              </div>

              <div className="hidden flex-wrap gap-2.5 lg:flex">
                <span className="rounded-full border border-amber-300 bg-amber-50 px-3.5 py-2 text-xs text-amber-800 md:text-sm">
                  Maximum 4 children
                </span>
                <span className="rounded-full border border-sky-300 bg-sky-50 px-3.5 py-2 text-xs text-sky-800 md:text-sm">
                  Tuesday 9:30am - 12:30pm
                </span>
                <span className="rounded-full border border-emerald-300 bg-emerald-50 px-3.5 py-2 text-xs text-emerald-800 md:text-sm">
                  Alderley Edge, Cheshire
                </span>
                <span className="rounded-full border border-rose-300 bg-rose-50 px-3.5 py-2 text-xs text-rose-800 md:text-sm">
                  September 2026 enquiries open
                </span>
              </div>
            </div>
          </div>

          <div className="order-2 max-w-3xl lg:order-1 lg:max-w-[720px]">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500 md:text-sm">
              What we offer
            </p>

            <h1 className="mt-4 max-w-4xl text-[1.75rem] font-semibold leading-[0.95] tracking-[-0.04em] text-[#12284C] sm:text-[2.4rem] md:text-[3.5rem] lg:max-w-[780px] lg:text-[4.2rem]">
              Bespoke weekly daytime education for home-educated children and
              flexi-schoolers.
            </h1>

            <p className="mt-5 max-w-3xl text-lg font-medium leading-8 text-[#12284C] md:text-xl md:leading-9">
              A calm, welcoming and personalised approach that helps children
              feel understood, supported and ready to learn.
            </p>

            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              Warren Dodd Education provides bespoke, premium daytime education
              in English, Maths and the wider curriculum for children aged 8-11
              within Cheshire and Stockport.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              Our teaching is relationship-led at its core, built on human
              trust, mutual respect and empathy - because children learn best
              when they feel genuinely known, understood and valued. Social and
              emotional development sits alongside academic progress in
              everything we do, and creating a calm, safe and enjoyable learning
              environment is central to our approach.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              Every child is understood as an individual - their interests,
              strengths, learning style and the emotional factors that shape how
              they engage. Alongside subject teaching, we provide high quality
              mentorship, supporting children to grow in confidence,
              self-belief and resilience, and to develop a stronger sense of
              ownership over their own learning.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              This is a specialised learning experience designed for children
              who benefit from a calmer, more personal and more thoughtfully
              tailored way of learning.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              Open, regular communication with parents and carers is central to
              everything we do - because meaningful progress is strongest when
              the adults around a child work together with clarity, care and
              shared understanding.
            </p>

            <div className="mt-6 space-y-5 lg:hidden">
              <div className="rounded-[1.6rem] border border-[#D8B35B]/50 bg-[#FBFBF9] p-5 shadow-sm">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500 md:text-sm">
                  Launching soon
                </p>

                <p className="mt-2 text-xl font-semibold text-[#12284C] md:text-2xl">
                  Daytime sessions
                </p>

                <p className="mt-2 text-base font-medium text-slate-700 md:text-lg">
                  Cheshire
                </p>

                <p className="mt-4 text-sm leading-6 text-slate-700 md:text-base md:leading-7">
                  A calm, personalised small-group approach, with a no-obligation
                  home visit before joining so we can make sure it feels like the
                  right fit for your child.
                </p>

                <div className="mt-5 space-y-1">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#12284C]">
                    Tuesday mornings
                  </p>
                  <p className="text-sm font-medium text-slate-700 md:text-base">
                    9:30am - 12:30pm
                  </p>
                  <p className="text-sm font-medium text-slate-700 md:text-base">
                    Alderley Edge, Cheshire
                  </p>
                </div>

                <p className="mt-5 text-sm font-medium uppercase tracking-[0.16em] text-[#12284C]">
                  Maximum 4 children per session
                </p>

                <p className="mt-3 text-sm font-medium text-slate-700 md:text-base">
                  Enquiries now open for September 2026
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5">
                <span className="rounded-full border border-amber-300 bg-amber-50 px-3.5 py-2 text-xs text-amber-800 md:text-sm">
                  Maximum 4 children
                </span>
                <span className="rounded-full border border-sky-300 bg-sky-50 px-3.5 py-2 text-xs text-sky-800 md:text-sm">
                  Tuesday 9:30am - 12:30pm
                </span>
                <span className="rounded-full border border-emerald-300 bg-emerald-50 px-3.5 py-2 text-xs text-emerald-800 md:text-sm">
                  Alderley Edge, Cheshire
                </span>
                <span className="rounded-full border border-rose-300 bg-rose-50 px-3.5 py-2 text-xs text-rose-800 md:text-sm">
                  September 2026 enquiries open
                </span>
              </div>
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
        <div className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            <div>
              <div className="overflow-hidden rounded-[1.8rem] border border-slate-200 bg-slate-100 shadow-sm">
                <img
                  src="/venue.jpg"
                  alt="Venue for Warren Dodd Education daytime sessions in Cheshire"
                  className="h-[260px] w-full object-cover sm:h-[320px] lg:h-[420px]"
                />
              </div>
            </div>

            <div className="flex h-full flex-col justify-center rounded-[1.8rem] border border-[#D8B35B]/40 bg-[#FBFBF9] p-6 shadow-sm md:p-8">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500 md:text-sm">
                New venue confirmed
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#12284C] md:text-4xl">
                Tuesday morning sessions now have a home.
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                I am pleased to now be able to offer a dedicated venue space in
                Alderley Edge, Cheshire for daytime sessions starting in
                September 2026.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                This gives families a clear, consistent setting for calm,
                focused learning each week, while keeping the small-group,
                relationship-led approach at the heart of the provision.
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {venueHighlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-300 bg-white px-3.5 py-2 text-xs text-slate-700 md:text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-7">
                <Link
                  href="/contact"
                  className="inline-flex rounded-full bg-[#12284C] px-7 py-3.5 font-semibold text-white shadow-xl transition hover:-translate-y-0.5"
                >
                  Register your interest
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-12">
          <div className="flex items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500 md:text-sm">
                What people say
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#12284C] md:text-3xl">
                Families and professionals speak about trust, confidence and
                real change.
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

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {testimonialSnippets.map((item) => (
              <div
                key={item.quote}
                className="flex h-full flex-col justify-between rounded-[1.5rem] border border-slate-200 bg-[#FBFBF9] p-5 shadow-sm"
              >
                <p className="text-sm leading-6 text-slate-800 md:text-base md:leading-7">
                  "{item.quote}"
                </p>

                <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500 md:text-xs">
                  {item.source}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <div className="rounded-[1.6rem] border border-[#D8B35B]/40 bg-[#FBFBF9] p-6 shadow-sm md:p-7">
              <p className="text-base leading-7 text-slate-800 md:text-lg md:leading-8">
                "{featuredTestimonial.quote}"
              </p>

              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#12284C] md:text-xs">
                {featuredTestimonial.source}
              </p>
            </div>
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
                  alt="David Dodd"
                  className="h-full w-full object-cover"
                />
              </div>

              <h2 className="mt-5 text-center text-2xl font-semibold md:text-3xl">
                David Dodd
              </h2>

              <p className="mt-2 text-center text-xs uppercase tracking-[0.18em] text-slate-300 md:text-sm">
                BSc (Hons) Psychology - Primary PGCE - QTS
              </p>

              <p className="mt-3 text-center text-sm font-medium tracking-[0.08em] text-[#D8B35B] md:text-base">
                Enhanced DBS Checked - First Aid Trained
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
                About me
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#12284C] md:text-4xl">
                David Dodd, Founder
              </h2>

              <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                I have always had a passion for developing a genuine, deep
                understanding of how children think, learn and behave - and for
                building the kind of powerful, trusting relationships that help
                them thrive. In fifteen years of teaching, I have found that
                this understanding, and these relationships, are what truly make
                the difference. That's why I started Warren Dodd Education: to
                make that approach available to home educated children and
                flexi-schoolers, and to develop it further in schools too.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                With a background in Psychology and extensive experience
                teaching across every year group in KS1 and KS2, including
                significant work with SEND and neurodivergent children, I have
                spent my career learning what truly motivates children - and
                using that understanding to help them feel safe, capable and
                ready to engage. That work has taken me beyond the classroom
                too: leading staff development on behaviour and coaching
                colleagues on relationship-led teaching within the North
                Manchester Primary Federation, alongside Oracy development work
                with Cambridge University and contributing to school improvement
                at a senior level.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                What I bring into every session is warmth, calm, humour and care
                - because I know that children learn best when they feel known.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                That understanding - of child development, motivation and
                relationship - is the foundation Warren Dodd Education is built
                on.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                Working closely with parents and carers is something I value
                deeply - open, regular communication has been one of the most
                powerful tools in my extensive experience in helping children
                make progress socially, emotionally and educationally, and in
                supporting them as they prepare for the next stage - whether
                that is high school or continued home education.
              </p>
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
                £195
              </p>

              <p className="mt-2 text-base text-slate-700 md:text-lg">
                Per daytime session
              </p>

              <p className="mt-3 text-lg font-medium text-[#12284C]">
                A specialised learning experience
              </p>

              <p className="mt-3 text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
                Maximum 4 children per group
              </p>

              <div className="mt-5 space-y-2.5 text-sm text-slate-700 md:text-base">
                <p>3-hour bespoke, weekly daytime session</p>
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
            support or daytime education, the first step is a simple
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