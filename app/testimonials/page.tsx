import Link from "next/link";
import SiteHeader from "../SiteHeader";

export default function TestimonialsPage() {
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

  return (
    <div className="min-h-screen bg-[#F7F7F4] text-slate-900">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-20">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.22em] text-slate-500">
            Testimonials
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#12284C] md:text-6xl">
            What families say about trust, confidence and real change.
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            The strongest feedback is not simply that children improve
            academically. It is that they feel more confident, more understood
            and more positive about learning.
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
                    <p className="text-base leading-7 text-slate-800">
                      “{quote}”
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-[#12284C] px-8 py-4 font-semibold text-white shadow-xl transition hover:-translate-y-0.5"
          >
            Make an Enquiry
          </Link>
        </div>
      </section>
    </div>
  );
}
