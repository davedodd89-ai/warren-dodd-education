
import SiteHeader from "../SiteHeader";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F7F7F4] text-slate-900">
      <SiteHeader />

      <section className="mx-auto max-w-5xl px-6 py-16 md:px-10 lg:py-20">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
            Contact Warren Dodd Education
          </p>
          <h1 className="mt-4 text-[2.4rem] font-semibold leading-[0.98] tracking-[-0.05em] text-[#12284C] md:text-[3.5rem] xl:text-[4rem]">
            Start with a simple conversation.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Whether you are a parent exploring bespoke daytime tutoring, or a school interested in training, CPD, mentoring or behaviour support, I would be pleased to hear from you.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#12284C]">
              Get in touch
            </h2>

            <div className="mt-8 space-y-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Email
                </p>
                <a
                  href="mailto:Warrendoddeducation@outlook.com"
                  className="mt-2 inline-block text-lg font-medium text-[#12284C] underline decoration-slate-300 underline-offset-4"
                >
                  Warrendoddeducation@outlook.com
                </a>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Phone
                </p>
                <a
                  href="tel:07512341730"
                  className="mt-2 inline-block text-lg font-medium text-[#12284C] underline decoration-slate-300 underline-offset-4"
                >
                  07512 341730
                </a>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Areas of enquiry
                </p>
                <div className="mt-3 flex flex-wrap gap-3 text-sm">
                  <span className="rounded-full border border-slate-200 bg-[#F7F7F4] px-4 py-2 text-slate-700">
                    Bespoke daytime tutoring
                  </span>
                  <span className="rounded-full border border-slate-200 bg-[#F7F7F4] px-4 py-2 text-slate-700">
                    Home education
                  </span>
                  <span className="rounded-full border border-slate-200 bg-[#F7F7F4] px-4 py-2 text-slate-700">
                    Hybrid education
                  </span>
                  <span className="rounded-full border border-slate-200 bg-[#F7F7F4] px-4 py-2 text-slate-700">
                    Training &amp; CPD
                  </span>
                  <span className="rounded-full border border-slate-200 bg-[#F7F7F4] px-4 py-2 text-slate-700">
                    Behaviour support
                  </span>
                  <span className="rounded-full border border-slate-200 bg-[#F7F7F4] px-4 py-2 text-slate-700">
                    School outreach
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-[#12284C] p-8 text-white shadow-sm">
            <h2 className="text-2xl font-semibold">
              What to include in your enquiry
            </h2>

            <div className="mt-8 space-y-5 text-slate-200">
              <div>
                <p className="font-semibold text-white">For parents</p>
                <p className="mt-1 leading-7">
                  Share your child’s age, current educational arrangement, and what you would most like support with.
                </p>
              </div>

              <div>
                <p className="font-semibold text-white">For schools</p>
                <p className="mt-1 leading-7">
                  Share your role, school context, and whether you are enquiring about CPD, behaviour support, mentoring, outreach, or parent workshops.
                </p>
              </div>

              <div>
                <p className="font-semibold text-white">Availability</p>
                <p className="mt-1 leading-7">
                  Include any preferred days or times for a conversation and I will respond as soon as possible.
                </p>
              </div>
            </div>

            <div className="mt-10 rounded-[1.5rem] bg-white/10 p-6">
              <p className="text-sm uppercase tracking-[0.16em] text-slate-300">
                Location
              </p>
              <p className="mt-2 text-lg leading-8 text-white">
                Cheshire • In person • Home education and hybrid education • Training &amp; CPD
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
