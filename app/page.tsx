import SiteHeader from "./SiteHeader";
import HomeschoolParentSupportSection from "./HomeschoolParentSupportSection";

export default function Page() {
  const trustPoints = [
    "Bespoke daytime tutoring for children aged 8–11",
    "Designed for home education and hybrid education families",
    "Maximum 4 children per session for close support",
    "Psychology-informed, relationship-led teaching",
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

  const whoItsFor = [
    "have lost confidence in learning",
    "struggle in busy classroom settings",
    "avoid or resist schoolwork",
    "benefit from smaller, calmer and more structured teaching",
    "need closer support, clearer routines and stronger relationships",
    "are in home education or hybrid education and need more than standard tutoring",
  ];

  const testimonials = [
    {
      child: "Parent of boy aged 8",
      quotes: [
        "Mr Dodd is an exceptional teacher. His passion for the psychology of how boys learn has enabled him to truly understand our son’s learning style and engage his full potential in a fun, nurturing way.",
        "We feel very fortunate to have found Mr Dodd and look forward to the journey ahead.",
      ],
    },
    {
      child: "Parent of girl aged 10",
      quotes: [
        "Mr Dodd has been tutoring our son and daughter for the past 18 months, and they have both genuinely enjoyed the sessions. He’s taken the time to get to know them as individuals, which has helped build trust and keep them engaged.",
        "He also makes a point of ending each lesson on a positive note, often with something light and fun.",
        "He’s worked closely with us to tailor the tutoring to each child’s needs, so we’re consistently getting real value from the time.",
        "Beyond the sessions themselves, Mr Dodd has also supported us as parents by helping us frame the right questions for their class teachers, which has made it easier to stay aligned and reinforce learning at home.",
      ],
    },
    {
      child: "Parent of boy aged 8",
      quotes: [
        "We have seen outstanding progress in our 8-year-old boy over the past year, and a huge part of that is down to Mr Dodd’s exceptional approach to tutoring.",
        "From the outset, Mr Dodd took the time to fully understand our son: his struggles, his interests, what motivates him, and what holds him back. Connection and understanding the child clearly come first, and the teaching follows naturally. This is why he is so successful.",
        "Every session feels tailored specifically to our son, and he genuinely looks forward to their time together, which speaks volumes.",
        "Mr Dodd brings wonderful variety to each session, weaving our son’s interests into the learning in creative and meaningful ways.",
      ],
    },
    {
      child: "Parent of boy aged 9",
      quotes: [
        "Perhaps most importantly, Mr Dodd has built our son’s confidence enormously. It has been a joy to watch him approach new topics with such positivity and belief in himself.",
        "From day one, our son felt that Mr Dodd was on his side, that they were a team, and this created a strong sense of mutual respect that has been invaluable.",
        "Mr Dodd is an absolute credit to the teaching profession. We feel incredibly lucky to have found him and cannot recommend him highly enough.",
      ],
    },
    {
      child: "Parent of past pupil ‘D’",
      quotes: [
        "We are hugely grateful for your work with D. You are his best teacher he’s ever had and have somehow instilled a love for his learning.",
        "You must have superpowers! He genuinely looks forward to the sessions and wants to go.",
        "You are unique and thank you for being who you are and what you do, helping D.",
        "He holds you in the highest regards, so passionately.",
        "You have become so popular in our house we have made up a tongue twister about you, Mr Dodd!",
        "You help D thrive and you are a favourite in the house and in the family. You are fab.",
      ],
    },
    {
      child: "Parent of boy aged 10",
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
        "Sessions run in the daytime for families using home education or hybrid education. This is not a one-hour after-school tutor slot.",
    },
    {
      question: "Why are places limited?",
      answer:
        "Because this is bespoke by design. With a maximum of four children per session, every child can be deeply known, properly supported and carefully challenged.",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#F7F7F4] text-slate-900">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[680px] bg-[radial-gradient(circle_at_top,rgba(18,40,76,0.06),transparent_42%),radial-gradient(circle_at_right,rgba(18,40,76,0.04),transparent_34%)]" />

      <SiteHeader />

      <section className="mx-auto max-w-7xl px-6 pb-12 pt-6 md:px-10 lg:pb-16 lg:pt-8">
        <div className="grid items-end gap-10 lg:grid-cols-[1.28fr_0.72fr] lg:gap-10">
          <div className="relative z-10 mx-auto max-w-4xl text-center lg:mx-0 lg:text-left">
            <div className="mb-8 overflow-hidden rounded-[2rem] border border-white/80 bg-white/95 p-3 shadow-[0_16px_50px_rgba(15,23,42,0.10)] lg:hidden">
              <div className="overflow-hidden rounded-[1.4rem] bg-slate-100">
                <video
                  className="h-[220px] w-full object-cover object-center"
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

            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
              Bespoke daytime tutoring • Training &amp; CPD • Home &amp; hybrid education
            </p>

            <p className="mt-6 text-xl font-medium leading-9 text-[#12284C] md:text-2xl">
              It’s not <span className="font-semibold text-[#D8B35B]">what</span> we learn.
              <br className="hidden sm:block" />
              It’s <span className="font-semibold text-[#D8B35B]">how</span> we learn.
            </p>

            <h1 className="mt-5 max-w-5xl text-[2.15rem] font-semibold leading-[0.98] tracking-[-0.05em] text-[#12284C] sm:text-[2.7rem] md:text-[3.3rem] lg:text-[4rem] xl:text-[4.35rem]">
              Bespoke daytime tutoring that builds confidence, self-belief and resilience.
            </h1>

            <p className="mt-4 max-w-3xl text-[1.1rem] font-medium leading-8 text-slate-700 md:text-[1.3rem]">
              Built around your child and their needs.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-700 md:text-[1.02rem]">
              A premium, relationship-led and psychology-informed approach to daytime tutoring that helps children feel more secure, more capable and more engaged in learning. Built on 15 years of teaching experience, a degree in Psychology, and a deep understanding of how children learn, connect and grow in confidence.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm lg:justify-start">
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

            <div className="mt-8 max-w-5xl space-y-4">
              <div className="rounded-[1.75rem] border border-slate-200 bg-white/95 px-6 py-5 text-left shadow-sm">
                <p className="text-[1rem] leading-7 text-slate-800">
                  “Mr Dodd is an exceptional teacher. His passion for the psychology of how boys learn has enabled him to truly understand our son’s learning style and engage his full potential in a fun, nurturing way. We feel very fortunate to have found Mr Dodd and look forward to the journey ahead.”
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Parent of boy aged 8
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-slate-200 bg-white/95 px-5 py-4 text-left shadow-sm">
                  <p className="text-sm leading-6 text-slate-800">
                    “Mr Dodd has been tutoring our son and daughter for the past 18 months, and they have both genuinely enjoyed the sessions. He’s taken the time to get to know them as individuals, which has helped build trust and keep them engaged.”
                  </p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Parent of girl aged 10
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-slate-200 bg-white/95 px-5 py-4 text-left shadow-sm">
                  <p className="text-sm leading-6 text-slate-800">
                    “From the outset, Mr Dodd took the time to fully understand our son: his struggles, his interests, what motivates him, and what holds him back. Connection and understanding the child clearly come first, and the teaching follows naturally.”
                  </p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Parent of boy aged 8
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-slate-200 bg-white/95 px-5 py-4 text-left shadow-sm">
                  <p className="text-sm leading-6 text-slate-800">
                    “From day one, our son felt that Mr Dodd was on his side, that they were a team, and this created a strong sense of mutual respect that has been invaluable.”
                  </p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Parent of boy aged 9
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-slate-200 bg-white/95 px-5 py-4 text-left shadow-sm">
                  <p className="text-sm leading-6 text-slate-800">
                    “We are hugely grateful for your work with D. You are his best teacher he’s ever had and have somehow instilled a love for his learning. You must have superpowers! He genuinely looks forward to the sessions and wants to go.”
                  </p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Parent of past pupil ‘D’
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="/contact"
                className="rounded-full bg-[#12284C] px-7 py-4 text-center font-semibold text-white shadow-xl transition hover:-translate-y-0.5"
              >
                Book a Consultation
              </a>
              <a
                href="/cpd"
                className="rounded-full border border-slate-300 bg-white px-7 py-4 text-center font-medium text-slate-900 transition hover:bg-slate-100"
              >
                Explore Training &amp; CPD
              </a>
            </div>
          </div>

          <div className="mx-auto hidden w-full max-w-[300px] md:max-w-[340px] lg:block lg:max-w-[360px]">
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

      <section id="challenge" className="scroll-mt-32 mx-auto max-w-7xl px-6 py-20 md:px-10 lg:py-24">
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
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10 lg:pb-24">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
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
      </section>

      <section id="why" className="scroll-mt-32 mx-auto max-w-7xl px-6 py-20 md:px-10 lg:py-24">
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
                  15+ years’ experience across mainstream and SEND. Teacher, coach, behaviour specialist, and Psychology graduate. A service built around who your child is, not just what they need to learn.
                </p>
              </div>

              <div>
                <p className="font-semibold text-[#12284C]">Relationship-led by design</p>
                <p className="mt-1">
                  Children work best when they feel known, respected and supported. That sits at the centre of the offer.
                </p>
              </div>

              <div>
                <p className="font-semibold text-[#12284C]">Psychology-informed teaching</p>
                <p className="mt-1">
                  Teaching is shaped by a deep understanding of child development, motivation, emotional security and how confidence affects learning.
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

      <section id="testimonials" className="scroll-mt-32 mx-auto max-w-7xl px-6 py-20 md:px-10 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
            What families say
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#12284C] md:text-5xl">
            Families speak about confidence, trust, motivation and real change.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            The strongest feedback is not just that children improve academically. It is that they feel different in themselves.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <div
              key={`${item.child}-${index}`}
              className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#12284C]">
                {item.child}
              </p>

              <div className="mt-6 space-y-5">
                {item.quotes.map((quote, quoteIndex) => (
                  <div
                    key={`${item.child}-${index}-quote-${quoteIndex}`}
                    className="border-l-2 border-slate-200 pl-4"
                  >
                    <p className="text-base leading-7 text-slate-800">“{quote}”</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:py-24">
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
              <h3 className="mt-6 text-center text-3xl font-semibold">Warren Dodd</h3>
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
                I started Warren Dodd Education because too many children begin to lose confidence in themselves as learners. My work is built on relationship-based teaching, a strong understanding of child development, and a belief that progress is strongest when children feel understood, respected and emotionally secure.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                With 15 years of experience across mainstream and SEND, alongside a degree in Psychology and a Primary PGCE, I have developed a deep understanding of how children learn, what motivates them, and how trust, clarity and connection can transform engagement.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                I make every effort to understand the child in front of me — their strengths, their interests, their barriers, and the way they learn best. This is why Warren Dodd Education is not just about tutoring. It is about creating the kind of environment where children can feel capable again and begin to thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:py-24">
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

      <HomeschoolParentSupportSection />

      <section id="programme" className="scroll-mt-32 border-y border-slate-200 bg-[#F4F7FB]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:py-24">
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
                  Per child for a structured 3-hour daytime session
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

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
              Support for schools
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#12284C] md:text-5xl">
              Training, CPD and behaviour support for schools.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Warren Dodd Education also provides whole-staff CPD, behaviour support, mentoring and outreach for schools looking to strengthen relationships, understanding, inclusion and classroom practice.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-[#F8F8F6] p-8 shadow-sm">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                Training &amp; CPD
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-[#12284C]">
                Understanding Behaviour &amp; Masculinity
              </h3>
              <p className="mt-4 leading-8 text-slate-700">
                Whole-staff CPD for schools exploring behaviour, masculinity, emotional literacy, online culture, PSHE links and practical classroom strategies.
              </p>
              <div className="mt-6">
                <a
                  href="/cpd"
                  className="inline-flex rounded-full bg-[#12284C] px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5"
                >
                  View CPD Page
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-[#F8F8F6] p-8 shadow-sm">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                School support
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-[#12284C]">
                Mentoring, outreach and behaviour support
              </h3>
              <p className="mt-4 leading-8 text-slate-700">
                Tailored support for schools through mentoring, in-class guidance, behaviour support and wider outreach work focused on calm, inclusive and relational practice.
              </p>
              <div className="mt-6">
                <a
                  href="/schools"
                  className="inline-flex rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  View School Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#12284C] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:py-24">
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

      <section id="enquiry" className="scroll-mt-32 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center md:px-10 lg:py-24">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
            Enquiry
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#12284C] md:text-5xl">
            Book a consultation to see if this is the right fit for your child.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Maximum 4 children per session. Limited places available. If you are exploring bespoke daytime tutoring, home education support, or hybrid education provision, start with a simple conversation.
          </p>
          <div className="mt-10 flex justify-center">
            <a
              href="/contact"
              className="inline-flex rounded-full bg-[#12284C] px-8 py-4 font-semibold text-white shadow-xl transition hover:-translate-y-0.5"
            >
              Book a Consultation
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