export default function HomeschoolParentSupportSection() {
  const benefits = [
    {
      title: "Reduced daily pressure",
      text: "Bring calm and structure back into home learning with a rhythm that reduces conflict, decision fatigue, and the sense that learning never truly ends.",
    },
    {
      title: "Confidence for parents",
      text: "Know exactly what matters most each day through clear priorities in reading, writing, maths, and wider enrichment—without trying to recreate a full school timetable at home.",
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

  return (
    <section className="bg-[#F7F7F4] px-6 py-20 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            For Home-Educating Families
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            Calm, structured support for parents carrying the weight of home education.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            When home learning begins to feel exhausting, the issue is rarely effort—it
            is usually structure, pace, and emotional load. My support helps parents
            simplify the day, reduce pressure, and rebuild confidence so learning
            becomes sustainable again.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}