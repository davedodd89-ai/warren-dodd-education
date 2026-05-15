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
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const staggerParent = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
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

  const processSteps = [
    {
      title: "1. Enquiry",
      text: "You get in touch and share a little about your child, your situation and what you are looking for.",
    },
    {
      title: "2. Initial consultation",
      text: "We arrange a free home visit, video call or phone consultation to talk about your child, their needs and whether the group feels like the right fit.",
    },
    {
      title: "3. First session",
      text: "Your child attends a first session so we can see whether the setting, group and approach feel right.",
    },
    {
      title: "4. Reserved weekly place",
      text: "If it feels like a strong fit, your child has a consistent weekly place from September 2026.",
    },
  ];

  const practicePoints = [
    {
      title: "Motivation",
      text: "I look for what gives a child energy, pride and buy-in, then use that as a route into learning.",
    },
    {
      title: "Interests",
      text: "A child’s interests are not treated as distractions. They are often the doorway into deeper engagement.",
    },
    {
      title: "Confidence",
      text: "Some children need success to feel possible again before they can take risks in English, Maths or wider learning.",
    },
    {
      title: "Pace and structure",
      text: "I adjust the level of support, challenge, movement, talk and independence so learning feels manageable and purposeful.",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#F7F7F4] text-slate-900">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[460px] bg-[radial-gradient(circle_at_top,rgba(18,40,76,0.06),transparent_42%),radial-gradient(circle_at_right,rgba(18,40,76,0.04),transparent_34%)]" />

      <SiteHeader />

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-3 text-center md:px-10 md:py-5">
          <p className="text-base font-medium leading-7 text-[#12284C] md:text-2xl md:leading-8">
            It’s not just{" "}
            <span className="font-semibold text-[#D8B35B]">what</span> we
            learn, it’s{" "}
            <span className="font-semibold text-[#D8B35B]">how</span> we learn.
          </p>
        </div>
      </section>

      <motion.section
        className="mx-auto max-w-7xl px-5 pb-10 pt-6 md:px-10 md:pb-12 md:pt-8"
        initial="hidden"
        animate="show"
        variants={sectionVariant}
      >
        <div className="grid items-start gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
          <motion.div
            className="order-2 max-w-3xl lg:order-1 lg:max-w-[720px]"
            variants={staggerParent}
            initial="hidden"
            animate="show"
          >
            <motion.p
              variants={itemVariant}
              className="text-xs uppercase tracking-[0.2em] text-slate-500 md:text-sm md:tracking-[0.22em]"
            >
              Small-group daytime learning for home-educated and flexi-schooled
              children aged 8-11
            </motion.p>

            <motion.h1
              variants={itemVariant}
              className={`${playfair.className} mt-3 max-w-4xl text-[2.25rem] font-semibold leading-[1.02] tracking-[0em] text-[#12284C] sm:text-[2.85rem] md:mt-4 md:text-[3.45rem] lg:max-w-[16ch] lg:text-[3.85rem]`}
            >
              Some children do not need more pressure. They need someone who
              actually sees them.
            </motion.h1>

            <motion.p
              variants={itemVariant}
              className="mt-5 max-w-3xl text-lg font-medium leading-8 text-[#12284C] md:text-xl md:leading-9"
            >
              Small-group daytime learning led by a current primary teacher,
              Teaching and Learning Coach and psychology graduate - someone who
              understands how children think, learn and what helps them engage.
            </motion.p>

            <motion.p
              variants={itemVariant}
              className="mt-4 max-w-3xl text-base font-semibold leading-7 text-[#12284C] md:text-lg md:leading-8"
            >
              Structure without recreating school: calm enough to feel
              different, skilled enough to move learning forward.
            </motion.p>

            <motion.div
              variants={itemVariant}
              className="mt-7 flex flex-wrap gap-3"
            >
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
                Tuesday 1:00pm - 4:00pm
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

          <motion.div
            className="order-1 mx-auto w-full max-w-[300px] sm:max-w-[350px] md:max-w-[430px] lg:order-2 lg:mx-0 lg:max-w-none"
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
                      className="h-[170px] w-full object-cover object-center sm:h-[200px] md:h-[240px] lg:h-[320px]"
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
        </div>

        <motion.div
          className="mt-8 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]"
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
                A calm, structured and personal small-group approach, with a
                free consultation before joining so we can make sure it feels
                like the right fit for your child.
              </p>

              <div className="mt-6 space-y-2">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#12284C]">
                  Tuesday afternoons. Weekly from September 2026.
                </p>
                <p className="text-base font-medium text-slate-700">
                  1:00pm - 4:00pm
                </p>
              </div>

              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#12284C]">
                Maximum 4 children per session
              </p>
            </div>
          </div>

          <div className="flex h-full flex-col justify-between rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-sm md:p-7">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                What families notice
              </p>

              <p className="mt-4 max-w-[32ch] text-lg leading-8 text-slate-800 md:text-[1.45rem] md:leading-[1.8]">
                "From day one, our son felt that Mr Dodd was on his side, that
                they were a team, and this created a strong sense of mutual
                respect that has been invaluable."
              </p>

              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#12284C] md:text-xs">
                Parent of boy aged 9
              </p>
            </div>

            <div className="mt-6 rounded-[1.3rem] bg-[#12284C] px-5 py-4 text-white">
              <p className="text-sm font-medium leading-6 md:text-base md:leading-7">
                Children learn best when they feel safe, understood and
                genuinely cared for.
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
        <div className="mx-auto max-w-7xl px-5 py-10 md:px-10 md:py-14">
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
                Current primary school teacher
              </p>

              <p className="mt-2 text-center text-sm font-medium tracking-[0.08em] text-[#D8B35B] md:text-base">
                Teaching and Learning Coach within the North Manchester Primary
                Federation
              </p>

              <p className="mt-2 text-center text-sm font-medium tracking-[0.08em] text-[#D8B35B] md:text-base">
                Significant SEND and neurodivergent experience
              </p>

              <p className="mt-2 text-center text-sm font-medium tracking-[0.08em] text-[#D8B35B] md:text-base">
                Enhanced DBS Checked - Level 3 Safeguarding Trained - First Aid
                Trained
              </p>

              <div className="mt-6 flex flex-col items-center gap-3">
                <Link
                  href="/approach"
                  className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  Read more about the approach
                </Link>

                <Link
                  href="/testimonials"
                  className="inline-flex rounded-full border border-[#D8B35B]/40 bg-[#D8B35B]/10 px-5 py-3 text-sm font-semibold text-[#F7F7F4] transition hover:bg-[#D8B35B]/20"
                >
                  Read family testimonials
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-sm md:p-7"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.06 }}
            >
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500 md:text-sm">
                Professional trust
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#12284C] md:text-4xl">
                Trusted to teach children and support other teachers.
              </h2>

              <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                Many of the children I work with benefit from a calmer, more
                personal approach to learning. Some have found busy learning
                environments difficult, some feel anxious or overwhelmed, and
                others may have needs linked to ADHD, autism, dyslexia,
                dyspraxia and wider SEND needs. Often, they do not need more
                pressure. They need trust, structure, warmth and someone who
                takes time to understand how they learn.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                My experience includes mainstream teaching, specialist SEND
                settings, autism youth club work and many years supporting
                children who need learning to feel safer, calmer and more
                carefully adapted. That matters because this is not generic
                tutoring. It is teaching shaped by real classroom experience,
                psychology, behaviour understanding and professional judgement.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                I am a{" "}
                <span className="font-semibold text-[#12284C]">
                  current primary school teacher and Teaching and Learning Coach
                  within the North Manchester Primary Federation
                </span>
                , with a{" "}
                <span className="font-semibold text-[#12284C]">
                  degree in Psychology
                </span>
                ,{" "}
                <span className="font-semibold text-[#12284C]">
                  fifteen years of experience across KS1 and KS2
                </span>
                , and significant work with{" "}
                <span className="font-semibold text-[#12284C]">
                  SEND and neurodivergent children
                </span>
                .
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                I work in education every day, and my wider role includes
                coaching teachers, staff development, behaviour-focused CPD and
                supporting relationship-led practice across classrooms.
              </p>

              <p className="mt-4 text-base font-semibold leading-7 text-[#12284C] md:text-lg md:leading-8">
                I teach children every day, while also supporting and coaching
                other teachers across classrooms.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                That experience helps me respond thoughtfully when a child needs
                more confidence, a different starting point, sensory awareness,
                clearer structure, or a gentler way back into learning.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#D8B35B]/40 bg-[#FBFBF9] p-4">
                  <p className="text-sm font-semibold text-[#12284C]">
                    Teacher expertise
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Current classroom practice, not outdated theory.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#D8B35B]/40 bg-[#FBFBF9] p-4">
                  <p className="text-sm font-semibold text-[#12284C]">
                    Psychology-informed
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Understanding behaviour, motivation and confidence.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#D8B35B]/40 bg-[#FBFBF9] p-4">
                  <p className="text-sm font-semibold text-[#12284C]">
                    Relationship-led
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Trust and connection before real engagement.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#D8B35B]/40 bg-[#FBFBF9] p-4">
                  <p className="text-sm font-semibold text-[#12284C]">
                    SEND experience
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Thoughtful support for different needs, sensory demands and
                    learning styles.
                  </p>
                </div>
              </div>

              <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                Children are far more likely to engage, communicate and take
                risks in learning when they feel respected, understood and
                genuinely known. Strong relationships, mutual respect and
                carefully supported success can have a powerful impact on
                confidence, self-belief and a child’s willingness to keep trying
                when learning feels difficult.
              </p>

              <p className="mt-6 text-base font-semibold leading-7 text-[#12284C] md:text-lg md:leading-8">
                When children feel safe, understood and capable, they are more
                likely to engage, take risks and begin to make meaningful
                progress.
              </p>
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
        <div className="mx-auto max-w-7xl px-5 py-10 md:px-10 md:py-14">
          <div className="rounded-[1.8rem] border border-[#D8B35B]/40 bg-white p-6 shadow-sm md:p-9">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500 md:text-sm">
              For home-educating families balancing freedom, learning and family
              life
            </p>

            <h2 className="mt-3 max-w-4xl text-2xl font-semibold tracking-tight text-[#12284C] md:text-4xl">
              Freedom, flexibility and calm - without having to do every part of
              it alone.
            </h2>

            <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <p className="text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                  Many parents choose home education because they want something
                  calmer, more personal and more responsive for their child. But
                  it can also feel like carrying everything alone - balancing
                  learning, structure, social opportunities and family life at
                  the same time.
                </p>

                <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                  Many home-educating families already provide rich, meaningful
                  experiences for their children through everyday life,
                  conversations, walks, creative projects, trips, reading,
                  outdoor learning and time together. This is not about
                  replacing what you already do. It is about complementing it -
                  adding a calm, carefully taught space where your child can
                  build confidence alongside others, learn to talk and listen in
                  a group, and continue moving forward in learning.
                </p>

                <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                  Your child gets structured learning, carefully supported peer
                  interaction and social confidence-building, while you get a
                  reliable three-hour block each week to work, rest, plan or
                  focus on other responsibilities.
                </p>

                <p className="mt-4 text-base font-semibold leading-7 text-[#12284C] md:text-lg md:leading-8">
                  It is not just about what your child learns. It is about what
                  your whole family gains.
                </p>
              </div>

              <div className="rounded-[1.5rem] bg-[#12284C] p-6 text-white">
                <p className="text-lg font-semibold leading-7">
                  A warm, safe and engaging place where children are taught with
                  skill, humour and care.
                </p>

                <div className="mt-5 grid gap-2 text-sm text-slate-100">
                  <p>• A reliable 3-hour weekly learning block</p>
                  <p>• Maximum 4 children per session</p>
                  <p>• Calm, structured and nurturing environment</p>
                  <p>• Carefully supported peer interaction</p>
                  <p>
                    • Reading, writing, Maths, oracy and wider curriculum
                    learning
                  </p>
                  <p>• Structure without recreating school</p>
                </div>
              </div>
            </div>
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
        <div className="mx-auto max-w-7xl px-5 py-10 md:px-10 md:py-14">
          <div className="rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-sm md:p-9">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500 md:text-sm">
              What this looks like in practice
            </p>

            <h2 className="mt-3 max-w-4xl text-2xl font-semibold tracking-tight text-[#12284C] md:text-4xl">
              Understanding the child is not a slogan. It shapes how the
              learning is planned, taught and adjusted.
            </h2>

            <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {practicePoints.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.4rem] border border-[#D8B35B]/40 bg-[#FBFBF9] p-5 shadow-sm"
                >
                  <p className="text-base font-semibold text-[#12284C]">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-[1.4rem] bg-[#12284C] p-6 text-white">
              <p className="text-base font-semibold leading-7 md:text-lg">
                For example, a child who appears reluctant may not need more
                pressure. They may need a different starting point, a stronger
                relationship, a clearer sense of success, a calmer environment,
                or learning connected to something that genuinely interests them.
              </p>
            </div>
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
        <div className="mx-auto max-w-7xl px-5 py-10 md:px-10 md:py-12">
          <motion.div
            className="rounded-[1.6rem] border border-[#D8B35B]/40 bg-[#FBFBF9] p-6 shadow-sm md:p-8"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500 md:text-sm">
              Professional endorsement
            </p>

            <p className="mt-4 text-base leading-7 text-slate-800 md:text-xl md:leading-9">
              "{featuredTestimonial.quote}"
            </p>

            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#12284C] md:text-xs">
              {featuredTestimonial.source}
            </p>
          </motion.div>

          <div className="mt-10 flex items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500 md:text-sm">
                What families say
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#12284C] md:text-3xl">
                Families speak about trust, confidence and real change.
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
        className="border-y border-slate-200 bg-[#F7F7F4]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={sectionVariant}
      >
        <div className="mx-auto max-w-7xl px-5 py-10 md:px-10 md:py-14">
          <div className="rounded-[1.8rem] border border-[#D8B35B]/40 bg-white p-6 shadow-sm md:p-9">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500 md:text-sm">
              Free consultation before joining
            </p>

            <div className="mt-3 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-[#12284C] md:text-4xl">
                  Before your child joins, we make sure it feels right.
                </h2>
              </div>

              <div>
                <p className="text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                  Before you commit to anything, we begin with either a free
                  home visit, video call or phone consultation. We talk about
                  your child, their needs, what they enjoy, what helps them feel
                  confident, and whether this approach feels like the right fit
                  for your family.
                </p>

                <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                  This also gives us time to think carefully about the group
                  dynamic, the learning environment and whether your child would
                  feel safe, comfortable and ready to engage.
                </p>

                <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                  If it does not feel like the right fit, I will say so. I would
                  rather be honest than place a child somewhere that is not
                  right for them.
                </p>

                <p className="mt-4 text-base font-semibold leading-7 text-[#12284C] md:text-lg md:leading-8">
                  The right fit matters more than filling a place.
                </p>
              </div>
            </div>
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
        <div className="mx-auto max-w-7xl px-5 py-10 md:px-10 md:py-14">
          <div className="rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-sm md:p-9">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500 md:text-sm">
              How it works
            </p>

            <h2 className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight text-[#12284C] md:text-4xl">
              A clear process before any weekly place is agreed.
            </h2>

            <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step) => (
                <div
                  key={step.title}
                  className="rounded-[1.4rem] border border-[#D8B35B]/40 bg-[#FBFBF9] p-5 shadow-sm"
                >
                  <p className="text-base font-semibold text-[#12284C]">
                    {step.title}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-base font-semibold text-[#12284C]">
              Places are limited to four children per session. When full, I
              operate a waiting list &mdash; I do not expand group size.
            </p>

            <div className="mt-7">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-[#12284C] px-7 py-3.5 font-semibold text-white shadow-xl transition hover:-translate-y-0.5"
              >
                Start an Enquiry
              </Link>
            </div>
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
        <div className="mx-auto max-w-5xl px-5 py-10 md:px-10 md:py-14">
          <motion.div
            className="rounded-[1.8rem] border border-[#D8B35B]/40 bg-white p-6 shadow-sm md:p-9"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500 md:text-sm">
              Weekly place
            </p>

            <h2 className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight text-[#12284C] md:text-4xl">
              A reserved weekly place is £180 for each 3-hour session.
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              This reserves your child’s place in a consistent small group of no
              more than four children, with careful planning, skilled teaching,
              supported social learning and a strong focus on confidence,
              engagement and progress across reading, writing, Maths, oracy and
              wider curriculum learning.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              The value is not only in the teaching time. It is in the
              consistency, the relationship, the careful group dynamic and the
              confidence children build through learning alongside others.
              Parents receive regular communication about how their child is
              settling, engaging, building confidence and progressing across
              learning.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              The free consultation comes before any commitment, so we can make
              sure this is the right fit for your child and your family.
            </p>

            <p className="mt-4 max-w-3xl text-base font-semibold leading-7 text-[#12284C] md:text-lg md:leading-8">
              It is a committed weekly place, built around relationship, trust
              and purposeful learning.
            </p>

            <div className="mt-7">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-[#12284C] px-7 py-3.5 font-semibold text-white shadow-xl transition hover:-translate-y-0.5"
              >
                Make an Enquiry
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="border-y border-slate-200 bg-white"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={sectionVariant}
      >
        <div className="mx-auto max-w-7xl px-5 py-10 md:px-10 md:py-14">
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
                Tuesday sessions now have a home.
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                I am pleased to offer a dedicated venue space in Alderley Edge,
                Cheshire for daytime sessions starting in September 2026.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                This gives families a clear, consistent place for focused
                learning each week, while keeping the small-group,
                relationship-led approach at the heart of everything.
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