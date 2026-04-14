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
    "How the 3-hour daytime sessions work",
    "What kind of support would be most helpful",
    "How confidence, motivation and engagement are currently affecting learning",
    "What a strong next step would look like for your family",
  ];

  const venueHighlights = [
    "Tuesday mornings",
    "9:30am - 12:30pm",
    "Alderley Edge, Cheshire",
    "Maximum 4 children",
    "September 2026 start",
  ];

  return (
    <div className="min-h-screen w-full overflow-x-clip bg-[#F7F7F4] text-slate-900">
      <SiteHeader />

      <section className="mx-auto w-full max-w-6xl overflow-x-clip px-4 py-14 sm:px-6 md:px-10 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.22em] text-slate-500">
            Enquiry
          </p>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[#12284C] sm:text-4xl md:text-6xl">
            Register your interest for Tuesday morning daytime sessions.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            If you are exploring bespoke daytime education, home education
            support or flexi schooling support, the simplest next step is to get
            in touch directly.
          </p>
        </div>

        <div className="mt-8 rounded-[1.5rem] border border-[#D8B35B]/50 bg-white p-6 shadow-sm sm:rounded-[2rem] sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="min-w-0">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                New venue confirmed
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#12284C] sm:text-3xl md:text-4xl">
                Tuesday mornings in Alderley Edge from September 2026.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
                A dedicated venue is now in place for calm, small-group daytime
                sessions. Places will remain very limited so that the provision
                stays personal, focused and relationship-led.
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {venueHighlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-300 bg-[#FBFBF9] px-3.5 py-2 text-xs text-slate-700 sm:text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="min-w-0 rounded-[1.25rem] border border-slate-200 bg-[#FBFBF9] p-5 sm:rounded-[1.5rem] sm:p-6">
              <p className="text-sm uppercase tracking-[0.16em] text-slate-500">
                What happens next
              </p>

              <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
                <p>1. You get in touch with a few details about your child.</p>
                <p>2. We arrange an initial conversation.</p>
                <p>
                  3. A no-obligation home visit helps us decide whether it feels
                  like the right fit.
                </p>
                <p>
                  4. If it does, we discuss the best next step for September
                  2026.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid w-full gap-6 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="min-w-0 space-y-6">
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm sm:rounded-[2rem] sm:p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                Investment
              </p>

              <p className="mt-3 text-4xl font-semibold text-[#12284C] sm:text-5xl">
                £195
              </p>

              <p className="mt-2 text-base text-slate-700 sm:text-lg">
                Per daytime session
              </p>

              <p className="mt-3 text-lg font-medium text-[#12284C]">
                A specialised learning experience
              </p>

              <p className="mt-3 text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
                3-hour session · maximum 4 children
              </p>

              <div className="mt-8 space-y-3 text-sm text-slate-700 sm:text-base">
                <p>Bespoke daytime education</p>
                <p>Relationship-led and psychology-informed</p>
                <p>Home education and flexi-school families</p>
                <p>Designed to build confidence and independence</p>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm sm:rounded-[2rem] sm:p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                Why enquire now
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
                Because this is a small, carefully designed provision rather than
                a high-volume tutoring model. With only four children per
                session, early enquiries make sense for families who want to
                explore whether this could be the right fit for September.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
                The approach is built around calm structure, tailored challenge,
                genuine trust and close understanding of each child. That is the
                value families are investing in.
              </p>
            </div>
          </div>

          <div className="min-w-0 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm sm:rounded-[2rem] sm:p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
              Contact details
            </p>

            <div className="mt-6 space-y-8">
              <div className="min-w-0">
                <p className="text-sm font-medium uppercase tracking-[0.14em] text-slate-500">
                  Email
                </p>
                <a
                  href="mailto:warrendoddeducation@outlook.com"
                  className="mt-2 block min-w-0 break-words text-lg font-semibold text-[#12284C] underline underline-offset-4 sm:text-xl"
                >
                  warrendoddeducation@outlook.com
                </a>
              </div>

              <div className="min-w-0">
                <p className="text-sm font-medium uppercase tracking-[0.14em] text-slate-500">
                  Mobile
                </p>

                <div className="mt-3 grid gap-3">
                  <a
                    href="https://wa.me/447512341730"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-[#12284C] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
                  >
                    Message on WhatsApp
                  </a>

                  <a
                    href="sms:07512341730"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-[#12284C] transition hover:bg-slate-50"
                  >
                    Send a text message
                  </a>

                  <a
                    href="tel:07512341730"
                    className="text-center text-lg font-semibold text-[#12284C] sm:text-xl"
                  >
                    Or call 07512 341730
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-[1.25rem] border border-slate-200 bg-[#FBFBF9] p-4 sm:rounded-[1.5rem] sm:p-5">
              <p className="text-base font-semibold text-[#12284C]">
                What to include in your enquiry
              </p>

              <div className="mt-4 grid gap-3">
                {enquiryPrompts.map((item) => (
                  <div
                    key={item}
                    className="min-w-0 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 w-full min-w-0 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm sm:rounded-[2rem] sm:p-8">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
            Discussion starting points
          </p>

          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[#12284C] sm:text-3xl md:text-4xl">
            Useful things we can discuss together.
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            You do not need to have everything worked out before getting in
            touch. An initial conversation can simply help clarify whether the
            sessions feel right, what your child needs most, and what the best
            next step might be.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {discussionPoints.map((item) => (
              <div
                key={item}
                className="min-w-0 rounded-[1.2rem] border border-slate-200 bg-[#FBFBF9] px-5 py-4 text-sm text-slate-800 shadow-sm sm:rounded-[1.4rem] sm:text-base"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}