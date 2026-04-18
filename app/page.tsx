"use client";

import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";
import SiteHeader from "./SiteHeader";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const sectionVariant = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

const staggerParent = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut" as const,
    },
  },
};

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

  const uspPoints = [
    "Psychology-informed and relationship-led",
    "Built around each child’s strengths, interests and learning style",
    "Confidence, emotional security and readiness to learn",
    "Carefully structured to help children engage, learn and thrive over time",
  ];

  const understandingPoints = [
    "WHAT CAPTURES A CHILD'S INTEREST AND ATTENTION",
    "HOW THEY RESPOND BEST TO SUPPORT, CHALLENGE AND ENCOURAGEMENT",
    "THE PACE, STRUCTURE AND STYLE THAT HELPS THEM LEARN WELL",
    "HOW TO BUILD CONFIDENCE SO ENGAGEMENT FEELS NATURAL AND LASTING",
  ];

  const weeklySessionPoints = [
    "Reserved weekly group place",
    "3-hour daytime session",
    "Calm, consistent small-group environment",
    "Built for consistency, not drop-in support",
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

      <motion.section
        className="mx-auto max-w-7xl px-6 pb-10 pt-6 md:px-10 md:pb-12 md:pt-8"
        initial="hidden"
        animate="show"
        variants={sectionVariant}
      >
        <div className="grid items-start gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
          <motion.div
            className="order-1 mx-auto w-full max-w-[280px] sm:max-w-[320px] md:max-w-[430px] lg:order-2 lg:mx-0 lg:max-w-none"
            initial={{ opacity: 0, y: 24, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.12 }}
          >
            <div className="lg:sticky lg:top-28">
              <div className="relative">
                <div className="absolute -inset-3 rounded-[1.8rem] bg-slate-200/20 blur-3xl" />

                <div className="relative overflow-hidden rounded-[1.35rem] border border-white/80 bg-white/95 p-2 shadow-[0_16px_50px_rgba(15,23,42,0.10)]">
                  <div className="overflow-hidden rounded-[1rem] bg-slate-100">
                    <video
                      className="h-[150px] w-full object-cover object-center sm:h-[180px] md:h-[240px] lg:h-[320px]"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src="/hero-video.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="order-2 max-w-3xl lg:order-1 lg:max-w-[720px]"
            variants={staggerParent}
            initial="hidden"
            animate="show"
          >
            <motion.p
              variants={itemVariant}
              className="text-xs uppercase tracking-[0.22em] text-slate-500 md:text-sm"
            >
              Bespoke daytime education
            </motion.p>

            <motion.h1
              variants={itemVariant}
              className={`${playfair.className} mt-3 max-w-4xl text-[1.16rem] font-semibold leading-[0.98] tracking-[0em] text-[#12284C] sm:text-[1.5rem] md:mt-4 md:text-[2.35rem] lg:max-w-[16ch] lg:text-[3.2rem]`}
            >
              Bespoke weekly daytime education for home-educated children and
              flexi-schoolers.
            </motion.h1>

            <motion.p
              variants={itemVariant}
              className="mt-5 max-w-3xl text-lg font-medium leading-8 text-[#12284C] md:text-xl md:leading-9"
            >
              A calm, welcoming and personalised approach that helps children
              feel understood, supported and ready to learn.
            </motion.p>

            <motion.p
              variants={itemVariant}
              className="mt-6 max-w-3xl text-base leading-7 text-slate-700 md:text-lg md:leading-8"
            >
              Warren Dodd Education provides{" "}
              <span className="font-semibold text-[#12284C]">
                bespoke, premium daytime education
              </span>{" "}
              in English, Maths and the wider curriculum for children aged 8-11
              across Cheshire and Stockport.
            </motion.p>

            <motion.p
              variants={itemVariant}
              className="mt-4 max-w-3xl text-base leading-7 text-slate-700 md:text-lg md:leading-8"
            >
              Designed for children who benefit from a calmer, more personal and
              more thoughtfully tailored way of learning, this is a{" "}
              <span className="font-semibold text-[#12284C]">
                weekly small-group provision
              </span>{" "}
              where academic progress is built through trust, confidence and
              strong relationships.
            </motion.p>

            <motion.div variants={itemVariant} className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-[#12284C] px-7 py-3.5 font-semibold text-white shadow-xl transition hover:-translate-y-0.5"
              >
                Make an Enquiry
              </Link>

              <Link
                href="/approach"
                className="inline-flex rounded-full border border-slate-300 bg-white px-7 py-3.5 font-semibold text-[#12284C] transition hover:-translate-y-0.5"
              >
                Explore the Approach
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariant}
              className="mt-8 flex flex-wrap gap-2.5"
            >
              <span className="rounded-full border border-sky-300 bg-sky-50 px-3.5 py-2 text-xs text-sky-800 md:text-sm">
                Tuesday 9:30am - 12:30pm
              </span>
              <span className="rounded-full border border-emerald-300 bg-emerald-50 px-3.5 py-2 text-xs text-emerald-800 md:text-sm">
                Alderley Edge, Cheshire
              </span>
              <span className="rounded-full border border-amber-300 bg-amber-50 px-3.5 py-2 text-xs text-amber-800 md:text-sm">
                Maximum 4 children
              </span>
              <span className="rounded-full border border-rose-300 bg-rose-50 px-3.5 py-2 text-xs text-rose-800 md:text-sm">
                Weekly from September 2026
              </span>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 max-w-[720px] lg:max-w-[760px]"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <div className="relative overflow-hidden rounded-[1.7rem] border border-[#D8B35B]/50 bg-[#FBFBF9] p-6 shadow-sm">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-[0.36]"
              style={{ backgroundImage: "url('/venue.jpg')" }}
            />
            <div className="absolute inset-0 bg-[#FBFBF9]/72" />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                Beginning September 2026
              </p>

              <h2 className="mt-3 text-[2rem] font-semibold leading-tight text-[#12284C]">
                Daytime sessions
              </h2>

              <p className="mt-2 text-lg font-medium text-slate-700">
                Alderley Edge, Cheshire
              </p>

              <p className="mt-5 text-base leading-8 text-slate-700">
                A calm, engaging and personalised small-group approach, with a
                no-obligation free home visit before joining so we can make sure
                it feels like the right fit for your child.
              </p>

              <div className="mt-6 space-y-2">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#12284C]">
                  Tuesday mornings. Weekly from September 2026.
                </p>
                <p className="text-base font-medium text-slate-700">
                  9:30am - 12:30pm
                </p>
              </div>

              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#12284C]">
                Maximum 4 children per session
              </p>
            </div>
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        className="border-y border-slate-200 bg-white"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={sectionVariant}
      >
        <div className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-14">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-8">
            <motion.div
              className="rounded-[1.8rem] bg-[#12284C] p-7 text-white shadow-sm md:p-8"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="text-xs uppercase tracking-[0.22em] text-slate-300 md:text-sm">
                What makes this different
              </p>

              <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight md:text-[2.6rem]">
                This is designed to change how a child experiences learning, not
                just what they learn.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-100 md:text-lg md:leading-8">
                Strong progress begins with how a child feels about learning.
                When children feel understood, respected, secure and capable,
                they are far more likely to engage positively and make
                meaningful progress.
              </p>
            </motion.div>

            <motion.div
              className="rounded-[1.8rem] border border-slate-200 bg-[#FBFBF9] p-7 shadow-sm md:p-8"
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.18 }}
            >
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500 md:text-sm">
                At the heart of the Warren Dodd Method
              </p>

              <div className="mt-5 grid gap-3">
                {uspPoints.map((item) => (
                  <motion.div
                    key={item}
                    variants={itemVariant}
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-700 md:text-base"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="border-y border-slate-200 bg-[#F7F7F4]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={sectionVariant}
      >
        <div className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-14">
          <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <motion.div
              className="rounded-[1.7rem] bg-[#12284C] p-7 text-white shadow-sm"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
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
                Current Teacher - Enhanced DBS Checked - Level 3 Safeguarding
                Trained - First Aid Trained
              </p>

              <div className="mt-6 text-center">
                <Link
                  href="/approach"
                  className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  Read more about the approach
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="rounded-[1.7rem] border border-slate-200 bg-white p-7 shadow-sm"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.06 }}
            >
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500 md:text-sm">
                Why this approach works
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#12284C] md:text-4xl">
                Built on understanding what helps each child feel motivated,
                confident and ready to learn.
              </h2>

              <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                I am a{" "}
                <span className="font-semibold text-[#12284C]">
                  current teacher
                </span>{" "}
                with a degree in{" "}
                <span className="font-semibold text-[#12284C]">Psychology</span>{" "}
                and extensive experience across primary education, including
                significant work with{" "}
                <span className="font-semibold text-[#12284C]">
                  SEND and neurodivergent children
                </span>
                .
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                A central part of my work is understanding what helps each child
                engage well: what captures their interest, what builds their
                confidence, how they respond best to challenge and what kind of
                teaching helps them thrive.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                That understanding has been shaped not only through classroom
                teaching, but also through staff development in behaviour,
                coaching colleagues in{" "}
                <span className="font-semibold text-[#12284C]">
                  relationship-led practice
                </span>
                , and work connected to{" "}
                <span className="font-semibold text-[#12284C]">
                  Voice21 / Cambridge-linked oracy practice
                </span>
                .
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                What I bring into sessions is{" "}
                <span className="font-semibold text-[#12284C]">
                  warmth, calm, humour and care
                </span>
                , alongside clear professional judgement. Children are understood
                properly, taught thoughtfully and supported in a way that feels
                personal, motivating and achievable.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="border-y border-slate-200 bg-white"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={sectionVariant}
      >
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

          <motion.div
            className="mt-6 grid gap-4 md:grid-cols-2"
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            {testimonialSnippets.map((item) => (
              <motion.div
                key={item.quote}
                variants={itemVariant}
                className="flex h-full flex-col justify-between rounded-[1.5rem] border border-slate-200 bg-[#FBFBF9] p-5 shadow-sm"
              >
                <p className="text-sm leading-6 text-slate-800 md:text-base md:leading-7">
                  "{item.quote}"
                </p>

                <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500 md:text-xs">
                  {item.source}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-4"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="rounded-[1.6rem] border border-[#D8B35B]/40 bg-[#FBFBF9] p-6 shadow-sm md:p-7">
              <p className="text-base leading-7 text-slate-800 md:text-lg md:leading-8">
                "{featuredTestimonial.quote}"
              </p>

              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#12284C] md:text-xs">
                {featuredTestimonial.source}
              </p>
            </div>
          </motion.div>

          <div className="mt-5 md:hidden">
            <Link
              href="/testimonials"
              className="text-sm font-semibold text-[#12284C] underline underline-offset-4"
            >
              Read more
            </Link>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="border-y border-slate-200 bg-white"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={sectionVariant}
      >
        <div className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-14">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <motion.div
              className="rounded-[1.7rem] border border-[#D8B35B]/40 bg-[#FBFBF9] p-7 shadow-sm"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500 md:text-sm">
                Understanding the child
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#12284C] md:text-4xl">
                Skilled at building learning around the individual.
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                Every child is understood as an individual - their interests,
                strengths, learning style, confidence level and the emotional
                factors that shape how they respond.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                This allows learning to be shaped in a way that feels more
                relevant, more motivating and more achievable, rather than
                something generic that is simply delivered in the same way to
                everyone.
              </p>
            </motion.div>

            <motion.div
              className="rounded-[1.7rem] border border-slate-200 bg-white p-7 shadow-sm"
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.18 }}
            >
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500 md:text-sm">
                In practice, this means understanding:
              </p>

              <div className="mt-5 grid gap-3">
                {understandingPoints.map((item) => (
                  <motion.div
                    key={item}
                    variants={itemVariant}
                    className="rounded-2xl border border-slate-200 bg-[#FBFBF9] px-4 py-3 text-sm font-medium uppercase tracking-[0.08em] leading-6 text-slate-700 md:text-base"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>

              <div className="mt-7">
                <Link
                  href="/approach"
                  className="inline-flex rounded-full border border-[#12284C]/15 bg-[#12284C] px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5"
                >
                  Explore the Warren Dodd Method
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="border-y border-slate-200 bg-white"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={sectionVariant}
      >
        <div className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="overflow-hidden rounded-[1.8rem] border border-slate-200 bg-slate-100 shadow-sm">
                <img
                  src="/venue.jpg"
                  alt="Venue for Warren Dodd Education daytime sessions in Cheshire"
                  className="h-[260px] w-full object-cover sm:h-[320px] lg:h-[420px]"
                />
              </div>
            </motion.div>

            <motion.div
              className="flex h-full flex-col justify-center rounded-[1.8rem] border border-[#D8B35B]/40 bg-[#FBFBF9] p-6 shadow-sm md:p-8"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.06 }}
            >
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500 md:text-sm">
                Venue confirmed
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

              <div className="mt-7">
                <Link
                  href="/contact"
                  className="inline-flex rounded-full bg-[#12284C] px-7 py-3.5 font-semibold text-white shadow-xl transition hover:-translate-y-0.5"
                >
                  Register your interest
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="bg-[#F7F7F4]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={sectionVariant}
      >
        <div className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-14">
          <div className="mx-auto max-w-2xl">
            <motion.div
              className="rounded-[1.7rem] border border-slate-200 bg-white p-7 shadow-sm md:p-8"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500 md:text-sm">
                Regular weekly group sessions
              </p>

              <p className="mt-3 text-2xl font-semibold text-[#12284C] md:text-3xl">
                A reserved weekly place, designed for consistency.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                Sessions run weekly. Each child joins the same small, consistent
                group every week - a calm, welcoming environment where trust
                builds, relationships develop, and progress follows.
              </p>

              <motion.div
                className="mt-6 flex flex-wrap gap-2.5"
                variants={staggerParent}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.18 }}
              >
                {weeklySessionPoints.map((item) => (
                  <motion.span
                    key={item}
                    variants={itemVariant}
                    className="rounded-full border border-slate-300 bg-[#FBFBF9] px-3.5 py-2 text-xs text-slate-700 md:text-sm"
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>

              <div className="mt-7">
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#12284C] px-6 py-3.5 text-center font-semibold text-white transition hover:-translate-y-0.5"
                >
                  Enquire now
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

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