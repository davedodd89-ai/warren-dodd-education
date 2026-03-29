import Image from "next/image";

export default function Page() {
  const trustPoints = [
    "Bespoke daytime tutoring for children aged 8–11",
    "Designed for home education and hybrid education families",
    "Maximum 4 children per session for close support",
    "Psychology-informed, relationship-led teaching",
  ];

  const expertise = [
    "15 years of teaching experience across Key Stage 2 in both mainstream and SEND environments",
    "BSc (Hons) Psychology and Primary PGCE",
    "Qualified Teacher (QTS) with deep KS2 English and Maths expertise",
    "Current Teacher and senior Teaching and Learning Coach across the North Manchester Primary Federation",
    "Lead Teacher at Crab Lane Primary School",
    "Led federation-wide CPD on behaviour, masculinity and boys’ engagement",
    "Specialist in relationship-based teaching, motivation, self-esteem and confidence-building",
    "Experienced in Year 6 to Year 7 transition, SEND support, behaviour, oracy and wellbeing",
  ];

  const outcomes = [
    "A child who feels more confident in themselves",
    "A child who feels understood rather than judged",
    "A child who enjoys learning again",
    "A child who grows in self-esteem, resilience and belief",
  ];

  const programme = [
    "Warm arrival, emotional check-in and calm start",
    "Focused English and Maths teaching tailored to the child",
    "Movement, conversation and regulation during active break",
    "Collaborative problem-solving and resilience building",
    "Reflection, praise, next steps and a sense of success",
  ];

  const testimonials = [
    {
      child: "Current pupil, aged 8",
      quotes: [
        "We have seen outstanding progress in our 8-year-old boy over the past year, and a huge part of that is down to David’s exceptional approach to tutoring.",
        "From the outset, David took the time to fully understand our son: his struggles, his interests, what motivates him, and what holds him back. Connection and understanding the child clearly come first, and the teaching follows naturally. This is why he is so successful.",
        "Every session feels tailored specifically to our son, and he genuinely looks forward to their time together, which speaks volumes.",
        "David brings wonderful variety to each session, weaving our son’s interests into the learning in creative and meaningful ways.",
        "Perhaps most importantly, David has built our son’s confidence enormously. It has been a joy to watch him approach new topics with such positivity and belief in himself.",
        "From day one, our son felt that David was on his side, that they were a team, and this created a strong sense of mutual respect that has been invaluable.",
        "David is an absolute credit to the teaching profession. We feel incredibly lucky to have found him and cannot recommend him highly enough.",
      ],
    },
    {
      child: "Past pupil ‘D’",
      quotes: [
        "We are hugely grateful for your work with ‘D’. You are his best teacher he has ever had and have somehow instilled a love for his learning.",
        "He genuinely looks forward to the sessions and wants to go. You have become so popular in our house we have made up a tongue twister about you, Mr Dodd!",
      ],
    },
    {
      child: "Current pupil ‘B’",
      quotes: [
        "Mr Dodd has been tutoring ‘B’ for over two years and has consistently outdone himself. He engages ‘B’ in every lesson and makes learning as fun as possible.",
        "Not only has he helped ‘B’ tackle difficult topics in Maths and English, we have also seen a real positive change in ‘B’s confidence.",
        "Mr Dodd is so much more than just a tutor. He is also a brilliant role model. We highly recommend him to anyone considering a tutor for their child.",
      ],
    },
  ];

  const transformationCards = [
    {
      title: "Confidence",
      text: "A child who no longer doubts themselves first, but begins to think, “I can do this.”",
    },
    {
      title: "Self-esteem",
      text: "A child who feels valued, respected and proud of who they are — not compared, labelled or overlooked.",
    },
    {
      title: "Resilience",
      text: "A child who keeps going when learning feels demanding, rather than stepping back from it.",
    },
    {
      title: "Engagement",
      text: "A child who becomes interested, involved and willing to try, because learning feels relevant and achievable.",
    },
    {
      title: "Understanding",
      text: "A child who feels deeply understood, because teaching is built around how they think, feel and learn.",
    },
    {
      title: "Belonging",
      text: "A child who feels safe, supported and on the same team as the adult teaching them.",
    },
  ];

  const faqs = [
    {
      question: "What exactly is Warren Dodd Education?",
      answer:
        "A premium bespoke daytime tutoring programme for children aged 8 to 11, especially those in home education or hybrid education. It combines English and Maths with confidence-building, resilience, communication and emotional development.",
    },
    {
      question: "Who is it for?",
      answer:
        "It is designed for children who need more than generic tutoring, especially those who benefit from a more personalised, closely supported and relationship-based approach.",
    },
    {
      question: "When does it run?",
      answer:
        "This is daytime provision, not an after-school one-hour slot. It is designed to fit families using home education and hybrid education arrangements.",
    },
    {
      question: "Why are places limited?",
      answer:
        "Because this is bespoke by design. With a maximum of four children per session, every child can be deeply known, properly supported and carefully challenged.",
    },
  ];

  const trainingAreas = [
    {
      title: "Macro trends",
      text: "Societal data, wider cultural shifts, and the macro patterns shaping boys’ behaviour and attitudes in schools.",
    },
    {
      title: "Biology & psychology",
      text: "The biological and psychological science of male and female brain and hormone development.",
    },
    {
      title: "PSHE connections",
      text: "How these issues connect meaningfully with PSHE curriculum content, particularly in upper Key Stage 2.",
    },
    {
      title: "Practical strategies",
      text: "Classroom and school-based approaches with a proven track record of supporting both boys and girls successfully.",
    },
  ];

  const schoolSupport = [
    {
      title: "Teaching & Learning Mentor",
      text: "Coaching and support for teachers and staff looking to strengthen classroom relationships, learning culture and pupil engagement.",
    },
    {
      title: "Behaviour Management Specialist",
      text: "Bespoke behaviour support focused on practical systems, relational consistency and approaches that improve outcomes for children and staff.",
    },
    {
      title: "Outreach & In-Class Support",
      text: "In-class modelling, staff guidance and targeted intervention work to support complex, SEMH and high-need behaviour profiles.",
    },
    {
      title: "Whole-School Development",
      text: "Support with inclusive culture, environmental thinking, positive behaviour development and adult-child interactions across the school.",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#F7F7F4] text-slate-900">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[680px] bg-[radial-gradient(circle_at_top,rgba(18,40,76,0.06),transparent_42%),radial-gradient(circle_at_right,rgba(18,40,76,0.04),transparent_34%)]" />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-[#F7F7F4]/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-3 md:px-10">
          <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex min-w-0 items-center gap-4">
              <Image
                src="/logo.png"
                alt="Warren Dodd Education"
                width={260}
                height={260}
                className="h-[118px] w-[118px] flex-none object-contain md:h-[138px] md:w-[138px]"
                priority
              />
              <div className="min-w-0">
                <p className="truncate text-[1.7rem] font-semibold tracking-[-0.03em] text-[#12284C] md:text-[2rem]">
                  Warren Dodd Education
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-slate-500 md:text-[12px]">
                  Bespoke daytime tutoring • Training & CPD • Home & hybrid education
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 xl:items-end">
              <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-slate-700">
                <a href="#problem" className="transition hover:text-[#12284C]">
                  The Problem
                </a>
                <a href="#why" className="transition hover:text-[#12284C]">
                  Why Us
                </a>
                <a href="#expertise" className="transition hover:text-[#12284C]">
                  Expertise
                </a>
                <a href="#programme" className="transition hover:text-[#12284C]">
                  Programme
                </a>
                <a href="#training-cpd" className="transition hover:text-[#12284C]">
                  Training & CPD
                </a>
                <a href="#testimonials" className="transition hover:text-[#12284C]">
                  Testimonials
                </a>
                <a href="/contact" className="transition hover:text-[#12284C]">
                  Contact
                </a>
              </nav>

              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#12284C] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-300/40 transition hover:-translate-y-0.5"
              >
                Make an Enquiry
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl overflow-hidden px-6 pb-12 pt-2 md:px-10 lg:pb-16 lg:pt-3">
        <div className="pointer-events-none absolute inset-0 -z-10 flex items-start justify-end">
          <Image
            src="/logo.png"
            alt=""
            width={1500}
            height={1500}
            className="mt-[-150px] mr-[-120px] h-auto w-[760px] object-contain opacity-[0.05] md:w-[920px] xl:w-[1120px]"
            priority
          />
        </div>

        <div className="grid items-end gap-8 lg:grid-cols-[1.28fr_0.72fr] lg:gap-10">
          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex flex-wrap items-center rounded-full border border-slate-200 bg-white/94 px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm">
              <span>Bespoke daytime tutoring for children aged 8–11</span>
              <span className="mx-2 text-slate-300">•</span>
              <span>Home education and hybrid education families</span>
            </div>

            <h1 className="mt-5 max-w-5xl text-[2.3rem] font-semibold leading-[0.98] tracking-[-0.05em] text-[#12284C] md:text-[3.3rem] lg:text-[4rem] xl:text-[4.35rem]">
              Bespoke daytime tutoring that builds confidence, self-belief and resilience.
            </h1>

            <p className="mt-4 max-w-3xl text-[1.15rem] font-medium leading-8 text-slate-700 md:text-[1.35rem]">
              Built around your child and their needs.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-700 md:text-[1.02rem]">
              A premium, relationship-led approach to daytime tutoring that helps children feel more secure, more capable and more engaged in learning — while building foundations that matter far beyond the lesson itself.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
              <span className="rounded-full border border-emerald-300 bg-emerald-50 px-4 py-2 text-emerald-800">
                Maximum 4 children
              </span>
              <span className="rounded-full border border-amber-300 bg-amber-50 px-4 py-2 text-amber-800">
                Bespoke by design
              </span>
              <span className="rounded-full border border-sky-300 bg-sky-50 px-4 py-2 text-sky-800">
                Daytime only
              </span>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a
                href="/contact"
                className="rounded-full bg-[#12284C] px-7 py-4 text-center font-semibold text-white shadow-xl transition hover:-translate-y-0.5"
              >
                Book a Consultation
              </a>
              <a
                href="#training-cpd"
                className="rounded-full border border-slate-300 bg-white px-7 py-4 text-center font-medium text-slate-900 transition hover:bg-slate-100"
              >
                Explore Training & CPD
              </a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[300px] md:max-w-[340px] lg:max-w-[360px]">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.2rem] bg-slate-200/15 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/95 p-3 shadow-[0_16px_50px_rgba(15,23,42,0.10)]">
                <div className="overflow-hidden rounded-[1.4rem] bg-slate-100">
                  <video
                    className="h-[250px] w-full object-cover object-center md:h-[290px]"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/logo.png"
                  >
                    <source src="/hero-video.mp4" type="video/mp4" />
                  </video>
                </div>

                <div className="px-4 pb-4 pt-4">
                  <p className="text-sm font-medium text-slate-900 md:text-base">
                    Calm, personal, premium support for children aged 8–11.
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Designed for families seeking depth, care and real progress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 py-9 text-center md:grid-cols-4 md:px-10">
          {trustPoints.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-[#FBFBF9] px-4 py-5 text-sm text-slate-800 shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Problem */}
      <section id="problem" className="mx-auto max-w-7xl px-6 py-18 md:px-10 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
              The challenge many families are facing
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#12284C] md:text-5xl">
              For many children, the issue is not ability — it is confidence, self-esteem and how they experience learning.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              When children lose belief in themselves, learning can begin to feel heavy, frustrating or distant.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Many benefit from smaller groups, closer guidance and an approach that understands how they learn best.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              For boys in particular, confidence and engagement are often shaped by whether they feel understood, respected and genuinely connected to the adult teaching them.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#D8C28A] bg-[#F8F3E7] p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.2em] text-[#8B6B1F]">
              What this builds
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#12284C] md:text-5xl">
              A child who feels safe, known, engaged and ready to grow.
            </h2>
            <div className="mt-8 grid gap-4">
              {outcomes.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white bg-white px-5 py-4 text-slate-800 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#12284C]">Confidence</h3>
            <p className="mt-2 text-slate-600">
              Helping children rebuild belief in themselves as learners.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#12284C]">Engagement</h3>
            <p className="mt-2 text-slate-600">
              Reconnecting children with learning in a way that feels meaningful and motivating.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#12284C]">Understanding</h3>
            <p className="mt-2 text-slate-600">
              Built around how your child actually learns — not a generic model.
            </p>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why" className="mx-auto max-w-7xl px-6 py-18 md:px-10 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-between rounded-[2rem] bg-[#12284C] p-10 text-white">
            <div>
              <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
                Why Warren Dodd Education?
              </h2>

              <p className="mt-8 text-lg leading-8 text-slate-300">
                It’s not <span className="font-semibold text-[#D8B35B]">what</span> we learn.
                <br />
                It’s <span className="font-semibold text-[#D8B35B]">how</span> we learn.
              </p>
            </div>

            <p className="mt-10 text-xs tracking-[0.3em] text-slate-400">
              CONFIDENCE. SELF-BELIEF. RESILIENCE. GROWTH.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
            <h3 className="text-3xl font-semibold text-[#12284C] md:text-4xl">
              Education is more than English and Maths.
            </h3>

            <div className="mt-4 h-[3px] w-16 bg-[#D8B35B]" />

            <p className="mt-6 text-lg leading-8 text-slate-700">
              The qualities that shape a child’s future — confidence, resilience, self-belief, emotional literacy and communication — are often recognised, but not always given the time and care they deserve.
            </p>

            <p className="mt-4 text-xl font-semibold text-[#12284C]">
              Warren Dodd Education exists to change that.
            </p>

            <div className="mt-8 space-y-6 text-slate-700">
              <div>
                <p className="font-semibold text-[#12284C]">Led by a specialist</p>
                <p className="mt-1">
                  15+ years’ experience across mainstream and SEND. Teacher, coach, and behaviour specialist. A service built around who your child is, not just what they need to learn.
                </p>
              </div>

              <div>
                <p className="font-semibold text-[#12284C]">Driving change in education</p>
                <p className="mt-1">
                  Delivering CPD on behaviour, masculinity, and boys’ engagement. Supporting schools to rethink how they connect with young learners.
                </p>
              </div>

              <div>
                <p className="font-semibold text-[#12284C]">High-trust, not high-pressure</p>
                <p className="mt-1">
                  Children take ownership of learning in an environment built on respect and trust — not pressure or fear.
                </p>
              </div>

              <div>
                <p className="font-semibold text-[#12284C]">What we build</p>
                <p className="mt-1">
                  Confidence, self-esteem, resilience and growth — woven into every session, not bolted on. Small groups. Relationship-based. Progress that lasts.
                </p>
              </div>
            </div>

            <p className="mt-10 text-lg font-semibold text-[#12284C]">
              Academic progress matters. But it is strongest when built on foundations that last far beyond school.
            </p>
          </div>
        </div>
      </section>

      {/* Why I started */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-18 md:px-10 lg:py-22">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-[2rem] bg-[#12284C] p-8 text-white">
              <video
                className="mx-auto h-36 w-36 rounded-full object-cover object-center"
                autoPlay
                muted
                loop
                playsInline
                poster="/logo.png"
              >
                <source src="/hero-video.mp4" type="video/mp4" />
              </video>
              <h3 className="mt-6 text-center text-3xl font-semibold">David Dodd</h3>
              <p className="mt-2 text-center text-sm uppercase tracking-[0.18em] text-slate-300">
                BSc (Hons) • QTS • Psychology-led
              </p>

              <p className="mt-8 text-center text-xl italic leading-9 text-[#C9E77D]">
                “I started Warren Dodd Education because I truly believe I can offer something unique and inviting for all children.”
              </p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                Why I started Warren Dodd Education
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#12284C] md:text-5xl">
                Built on relationship-based teaching and a deep understanding of how children learn.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">
                I started Warren Dodd Education because too many children begin to lose confidence in themselves as learners. My work is built on understanding how children learn, what motivates them, and how the right relationship can help them re-engage, grow and thrive.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                With 15 years of experience across mainstream and SEND, I have seen first-hand how confidence, self-esteem and engagement shape academic progress. I make every effort to understand the child in front of me — their strengths, their interests, their barriers, and the way they learn best.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                This is why Warren Dodd Education is not just about tutoring. It is about creating the kind of environment where children feel respected, understood and capable again.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="border-y border-slate-200 bg-[#12284C] text-white">
        <div className="mx-auto max-w-7xl px-6 py-18 md:px-10 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                About David
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Led by an experienced teacher and behaviour specialist.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                This is not generic tutoring. It is premium, relationship-based teaching built on respect, fairness, empathy and a deep understanding of what motivates children. The goal is not simply to push content. It is to rebuild the child underneath the learning and deliver a level of bespoke support that families can genuinely feel.
              </p>
              <div className="mt-8 rounded-[1.75rem] border border-[#D8B35B]/20 bg-[#D8B35B]/10 p-6 text-slate-100">
                <p className="text-sm uppercase tracking-[0.2em] text-[#E7C87A]">
                  Why families and schools invest
                </p>
                <p className="mt-3 text-lg leading-8">
                  Because this is expert-led, highly personalised support. Children are deeply known, carefully challenged, and taught in a way that builds confidence, engagement and real long-term progress. Schools benefit from the same depth through training, mentoring and behaviour support.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {expertise.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-5 text-slate-100"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transformation */}
      <section className="mx-auto max-w-7xl px-6 py-18 md:px-10 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
            What changes
          </p>

          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-[#12284C] md:text-6xl">
            Confidence. Self-esteem. Resilience. Engagement.
            <span className="mt-2 block">A child who finally feels understood.</span>
          </h2>

          <p className="mt-6 text-xl leading-9 text-slate-600">
            This is not just academic progress. It is a shift in how a child sees themselves, how they approach learning, and how they feel every day.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {transformationCards.map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-2xl font-semibold text-[#12284C]">{item.title}</h3>
              <p className="mt-4 leading-7 text-slate-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Programme */}
      <section id="programme" className="border-y border-slate-200 bg-[#F4F7FB]">
        <div className="mx-auto max-w-7xl px-6 py-18 md:px-10 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                The bespoke daytime programme
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-[#12284C] md:text-5xl">
                Built around your child and their needs.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
                This is not an after-school one-hour slot. It is carefully designed daytime provision for children aged 8 to 11 who need a more personal, energising and confidence-building way to learn — especially those in home education and hybrid education.
              </p>

              <div className="mt-10 grid gap-4">
                {programme.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-white px-6 py-5 text-slate-800 shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-300/20">
              <div className="border-b border-slate-200 px-8 py-8">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                  Investment
                </p>
                <p className="mt-3 text-5xl font-semibold text-[#12284C]">£195</p>
                <p className="mt-2 text-lg text-slate-700">
                  Per child, per 3-hour session
                </p>
              </div>
              <div className="space-y-4 px-8 py-8 text-slate-700">
                <p>Premium small-group teaching</p>
                <p>Maximum four children</p>
                <p>Daytime provision in Cheshire</p>
                <p>Designed for home and hybrid education</p>
                <p>Limited places available</p>
              </div>
              <div className="px-8 pb-8">
                <a
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#12284C] px-6 py-4 text-center font-semibold text-white transition hover:-translate-y-0.5"
                >
                  Enquire About a Place
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training & CPD */}
      <section id="training-cpd" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-18 md:px-10 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
              Training & CPD for schools
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#12284C] md:text-5xl">
              Understanding Behaviour & Masculinity
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Warren Dodd Education also provides whole-staff CPD, behaviour support, and school outreach built around the realities schools are facing now — particularly around boys’ behaviour, emotional literacy, online influence, relationships, and classroom engagement.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="rounded-[2rem] border border-slate-200 bg-[#F8F8F6] p-6 shadow-sm">
              <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white">
                <Image
                  src="/training-behaviour.jpg"
                  alt="Understanding Behaviour and Masculinity training visual"
                  width={1200}
                  height={900}
                  className="h-auto w-full object-cover"
                />
              </div>

              <div className="mt-6 rounded-[1.5rem] bg-[#12284C] p-6 text-white">
                <p className="text-sm uppercase tracking-[0.18em] text-slate-300">
                  Led by David Warren Dodd
                </p>
                <p className="mt-4 text-lg leading-8 text-slate-200">
                  Lead Teacher at Crab Lane Primary School and senior Teaching and Learning Coach across the North Manchester Primary Federation.
                </p>
              </div>
            </div>

            <div>
              <p className="text-lg leading-8 text-slate-700">
                I have developed and delivered a whole-staff CPD programme entitled <span className="font-semibold text-[#12284C]">Understanding Behaviour & Masculinity</span>.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-700">
                The training addresses a number of issues that are increasingly prevalent in primary and secondary schools: the growing influence of online culture on boys’ attitudes and behaviour, the widening emotional literacy gap, the rising attainment gap, the increasing suspension and exclusion rates in schools, the rising frequency of fight-or-flight responses in school settings, and misogynistic viewpoints and behaviours.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-700">
                Over the past two years, I have also developed a highly successful Year 5 and Year 6 PSHE curriculum designed to address many of these factors in a practical, age-appropriate and evidence-informed way.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {trainingAreas.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#12284C]">
                      {item.title}
                    </p>
                    <p className="mt-3 leading-7 text-slate-700">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[1.75rem] border border-[#D8B35B] bg-[#F8F3E7] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8B6B1F]">
                  Designed for all staff
                </p>
                <p className="mt-3 text-lg leading-8 text-slate-700">
                  The training is designed for all staff — teachers, teaching assistants, lunchtime supervisors, support teams and office staff — because the approaches apply to every adult-child interaction within a school.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
                  <p className="text-lg font-semibold text-[#12284C]">Twilight</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Focused staff session
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
                  <p className="text-lg font-semibold text-[#12284C]">Half-day</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Deeper training and discussion
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
                  <p className="text-lg font-semibold text-[#12284C]">Full day</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Tailored whole-school delivery
                  </p>
                </div>
              </div>

              <p className="mt-8 text-lg leading-8 text-slate-700">
                Parent workshops are also available, and all training can be tailored to reflect your school’s priorities.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-700">
                Recent delivery across the North Manchester Primary Federation has been received extremely well. I am also in contact with One Education Psychology Services in Manchester, Thrive in Education, Manchester Metropolitan University, and a growing number of primary and secondary schools interested in similar work within their own settings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* School Support & Outreach */}
      <section className="bg-[#F4F7FB]">
        <div className="mx-auto max-w-7xl px-6 py-18 md:px-10 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
              School support, mentoring and outreach
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#12284C] md:text-5xl">
              Teaching and learning mentoring, behaviour support and outreach services for schools.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Warren Dodd Education also provides tailored support to schools through behaviour mentoring, in-class support, staff coaching, bespoke interventions, and wider outreach work focused on helping schools build calm, inclusive and relational learning environments.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {schoolSupport.map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h3 className="text-2xl font-semibold text-[#12284C]">
                  {item.title}
                </h3>
                <p className="mt-4 leading-8 text-slate-700">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-lg leading-8 text-slate-700">
              After speaking with parents at schools where I currently tutor, it is clear that understanding how boys think, feel and learn is more important than ever. Over many years, my theory, practice and processes have supported both boys and girls to achieve more strongly in school through better relationships, stronger self-belief and clearer systems of support.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="mx-auto max-w-7xl px-6 py-18 md:px-10 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
            What families say
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#12284C] md:text-5xl">
            Parents talk about deep understanding, confidence, motivation and genuine change.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            The strongest feedback is not just that children improve academically. It is that they feel different in themselves.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.child}
              className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#12284C]">
                {item.child}
              </p>

              <div className="mt-6 space-y-5">
                {item.quotes.map((quote) => (
                  <div key={quote} className="border-l-2 border-slate-200 pl-4">
                    <p className="text-base leading-7 text-slate-800">“{quote}”</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-slate-200 bg-[#12284C] text-white">
        <div className="mx-auto max-w-7xl px-6 py-18 md:px-10 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                Questions parents often have
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Clearer, simpler, easier to understand.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Families should know exactly what this is, who it is for, and why the small-group model matters.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((item) => (
                <div
                  key={item.question}
                  className="rounded-[2rem] border border-white/10 bg-white/5 p-6"
                >
                  <h3 className="text-xl font-semibold">{item.question}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-18 text-center md:px-10 lg:py-24">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
            Next step
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#12284C] md:text-5xl">
            Start with a simple conversation.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Whether you are a parent exploring bespoke daytime tutoring, or a school interested in CPD, behaviour support, mentoring or outreach, I would be pleased to discuss what Warren Dodd Education could offer.
          </p>
          <div className="mt-10">
            <a
              href="/contact"
              className="inline-flex rounded-full bg-[#12284C] px-8 py-4 font-semibold text-white shadow-xl transition hover:-translate-y-0.5"
            >
              Go to Contact Page
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white py-6 text-center text-sm text-slate-500">
        Warren Dodd Education
      </footer>
    </div>
  );
}