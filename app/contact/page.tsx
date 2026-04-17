import SiteHeader from "../SiteHeader";

export default function ContactPage() {
  const enquiryPrompts = [
    "Your child’s age and year group",
    "Whether you are home educating or using flexi schooling",
    "What kind of support you are looking for",
    "Any current barriers around confidence, motivation or engagement",
    "What you would like your child to gain from the sessions",
  ];

  const discussionPoints = [
    "Whether the sessions feel like the right fit for your child",
    "How the regular weekly group sessions work",
    "What kind of support would be most helpful",
    "How confidence, motivation and engagement are currently affecting learning",
    "What a strong next step would look like for your family",
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#F7F7F4] text-slate-900">
      <SiteHeader />

      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 md:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-3xl px-1 text-center">
          <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
            Contact
          </p>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[#12284C] sm:text-4xl md:text-5xl lg:text-6xl">
            Get in touch to discuss whether this feels like the right fit.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            If you are exploring bespoke daytime education, home education
            support or flexi schooling support, the simplest next step is a
            direct conversation.
          </p>
        </div>

        <div className="mt-8 min-w-0 rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm sm:rounded-[2rem] sm:p-7 md:p-8">
          <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-center sm:text-left">
            <div className="h-24 w-24 shrink-0 overflow-hidden rounded-full border-4 border-[#12284C]/10 shadow-sm sm:h-28 sm:w-28">
              <img
                src="/hero.jpg"
                alt="David Dodd"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="min-w-0">
              <h2 className="text-2xl font-semibold tracking-tight text-[#12284C] sm:text-3xl">
                David Dodd
              </h2>

              <p className="mt-2 text-sm uppercase tracking-[0.14em] text-slate-500 sm:text-[0.95rem]">
                BSc (Hons) Psychology · Primary PGCE · QTS
              </p>

              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-700">
                I take the time to understand each child properly, so they feel
                confident, supported and ready to learn.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 grid min-w-0 gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="order-1 min-w-0 space-y-6">
            <div className="min-w-0 rounded-[1.5rem] border border-[#D8B35B]/50 bg-white p-5 shadow-sm sm:rounded-[2rem] sm:p-7 md:p-8">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                Contact details
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#12284C] sm:text-3xl md:text-4xl">
                Email, call or message directly.
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
                You do not need to send a perfect enquiry. A simple message with
                a few key details is enough to begin the conversation.
              </p>

              <div className="mt-8 grid min-w-0 gap-4">
                <div className="min-w-0 rounded-[1.25rem] border border-slate-200 bg-[#FBFBF9] p-4 sm:rounded-[1.5rem] sm:p-6">
                  <p className="text-sm font-medium uppercase tracking-[0.14em] text-slate-500">
                    Email
                  </p>
                  <a
                    href="mailto:warrendoddeducation@outlook.com"
                    className="mt-3 block min-w-0 break-all text-lg font-semibold text-[#12284C] underline underline-offset-4 sm:text-2xl"
                  >
                    warrendoddeducation@outlook.com
                  </a>
                </div>

                <div className="min-w-0 rounded-[1.25rem] border border-slate-200 bg-[#FBFBF9] p-4 sm:rounded-[1.5rem] sm:p-6">
                  <p className="text-sm font-medium uppercase tracking-[0.14em] text-slate-500">
                    Mobile
                  </p>

                  <a
                    href="tel:07404510082"
                    className="mt-3 block min-w-0 break-words text-lg font-semibold text-[#12284C] sm:text-2xl"
                  >
                    07404 510082
                  </a>

                  <div className="mt-5 grid min-w-0 gap-3">
                    <a
                      href="https://wa.me/447404510082"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full min-w-0 items-center justify-center rounded-xl bg-[#12284C] px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
                    >
                      Message on WhatsApp
                    </a>

                    <a
                      href="sms:07404510082"
                      className="inline-flex w-full min-w-0 items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-3 text-center text-sm font-semibold text-[#12284C] transition hover:bg-slate-50"
                    >
                      Send a text message
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="min-w-0 rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm sm:rounded-[2rem] sm:p-7 md:p-8 lg:hidden">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                Weekly place
              </p>

              <p className="mt-3 text-4xl font-semibold text-[#12284C] sm:text-5xl">
                £180
              </p>

              <p className="mt-2 text-base text-slate-700 sm:text-lg">
                Per weekly daytime session
              </p>

              <p className="mt-3 text-lg font-semibold text-[#12284C]">
                A reserved weekly group place
              </p>

              <p className="mt-3 text-sm font-medium uppercase tracking-[0.14em] text-slate-500">
                3-hour session · maximum 4 children
              </p>

              <div className="mt-8 space-y-3 text-sm text-slate-700 sm:text-base">
                <p>Tuesday mornings</p>
                <p>9:30am - 12:30pm</p>
                <p>Alderley Edge, Cheshire</p>
                <p>Beginning September 2026</p>
              </div>
            </div>

            <div className="min-w-0 rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm sm:rounded-[2rem] sm:p-7 md:p-8">
              <p className="text-sm uppercase tracking-[0.16em] text-slate-500">
                What happens next
              </p>

              <div className="mt-4 space-y-4 text-sm leading-6 text-slate-700 sm:text-base">
                <p>1. You get in touch with a few details about your child.</p>
                <p>2. We arrange an initial conversation.</p>
                <p>
                  3. A no-obligation free home visit helps us decide whether it
                  feels like the right fit.
                </p>
                <p>
                  4. If it does, we discuss a regular weekly place from
                  September 2026.
                </p>
              </div>
            </div>
          </div>

          <div className="order-2 hidden min-w-0 space-y-6 lg:block">
            <div className="min-w-0 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm sm:rounded-[2rem] sm:p-8">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                Weekly place
              </p>

              <p className="mt-3 text-4xl font-semibold text-[#12284C] sm:text-5xl">
                £180
              </p>

              <p className="mt-2 text-base text-slate-700 sm:text-lg">
                Per weekly daytime session
              </p>

              <p className="mt-3 text-lg font-semibold text-[#12284C]">
                A reserved weekly group place
              </p>

              <p className="mt-3 text-sm font-medium uppercase tracking-[0.14em] text-slate-500">
                3-hour session · maximum 4 children
              </p>

              <div className="mt-8 space-y-3 text-sm text-slate-700 sm:text-base">
                <p>Tuesday mornings</p>
                <p>9:30am - 12:30pm</p>
                <p>Alderley Edge, Cheshire</p>
                <p>Beginning September 2026</p>
              </div>
            </div>

            <div className="min-w-0 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm sm:rounded-[2rem] sm:p-8">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                Important to know
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
                This provision is built around a regular weekly group structure,
                rather than drop-in support. Each child joins the same small
                group each week so that trust, confidence and meaningful
                progress can build steadily over time.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
                Families are encouraged to get in touch early if they are
                seriously exploring whether a reserved weekly place could be the
                right fit from September 2026.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 min-w-0 rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm sm:rounded-[2rem] sm:p-7 md:p-8">
          <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
            What to include in your enquiry
          </p>

          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[#12284C] sm:text-3xl md:text-4xl">
            Useful details and helpful starting points.
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            You do not need to have everything worked out before getting in
            touch. A few simple details are enough to begin the conversation,
            and we can talk through anything else together.
          </p>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="min-w-0">
              <p className="text-base font-semibold text-[#12284C]">
                It helps to include
              </p>

              <div className="mt-4 grid gap-3">
                {enquiryPrompts.map((item) => (
                  <div
                    key={item}
                    className="min-w-0 rounded-xl border border-slate-200 bg-[#FBFBF9] px-4 py-3 text-sm leading-6 text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="min-w-0">
              <p className="text-base font-semibold text-[#12284C]">
                Things we can discuss
              </p>

              <div className="mt-4 grid gap-3">
                {discussionPoints.map((item) => (
                  <div
                    key={item}
                    className="min-w-0 rounded-xl border border-slate-200 bg-[#FBFBF9] px-4 py-3 text-sm leading-6 text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}