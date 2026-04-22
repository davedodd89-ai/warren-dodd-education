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

                  <div className="mt-3 min-w-0 overflow-hidden">
                    <a
                      href="mailto:warrendoddeducation@outlook.com"
                      aria-label="Email warrendoddeducation@outlook.com"
                      className="block w-full min-w-0 break-words text-[0.92rem] font-semibold leading-6 text-[#12284C] underline underline-offset-4 sm:text-xl sm:leading-8"
                    >
                      warrendoddeducation@
                      <wbr />
                      outlook.com
                    </a>
                  </div>
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
                      className="inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-xl bg-[#12284C] px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4 shrink-0"
                        aria-hidden="true"
                      >
                        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.5 0 .16 5.34.16 11.91c0 2.1.55 4.16 1.6 5.97L0 24l6.3-1.65a11.86 11.86 0 0 0 5.77 1.47h.01c6.57 0 11.91-5.34 11.91-11.91 0-3.18-1.24-6.16-3.47-8.43ZM12.08 21.8h-.01a9.85 9.85 0 0 1-5.02-1.38l-.36-.21-3.74.98 1-3.65-.24-.38a9.83 9.83 0 0 1-1.5-5.25C2.2 6.46 6.63 2.03 12.08 2.03c2.63 0 5.1 1.02 6.96 2.89a9.78 9.78 0 0 1 2.87 6.97c0 5.45-4.43 9.9-9.83 9.9Zm5.39-7.36c-.29-.14-1.7-.84-1.97-.93-.26-.1-.45-.14-.65.14-.19.29-.74.93-.9 1.12-.17.19-.33.22-.62.07-.29-.14-1.2-.44-2.29-1.4-.85-.76-1.42-1.7-1.58-1.98-.17-.29-.02-.44.12-.58.12-.12.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.65-1.56-.89-2.13-.23-.56-.47-.48-.65-.49h-.55c-.19 0-.5.07-.77.36-.26.29-1 1-.99 2.44 0 1.44 1.05 2.84 1.19 3.03.14.19 2.06 3.15 4.99 4.42.7.3 1.24.48 1.66.61.7.22 1.33.19 1.83.12.56-.08 1.7-.69 1.94-1.35.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33Z" />
                      </svg>
                      <span>Message on WhatsApp</span>
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
                <p>Tuesday afternoons</p>
                <p>1:00pm - 4:00pm</p>
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
                <p>Tuesday afternoons</p>
                <p>1:00pm - 4:00pm</p>
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