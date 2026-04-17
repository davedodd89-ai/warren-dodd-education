import SiteHeader from "../SiteHeader";

const policyDocuments = [
  {
    title: "Safeguarding Policy",
    description: "How children are kept safe, supported and protected at all times.",
    href: "/policies/01_Safeguarding_Policy.pdf",
  },
  {
    title: "Privacy Notice",
    description: "How personal information is collected, stored and used responsibly.",
    href: "/policies/02_Privacy_Notice.pdf",
  },
  {
    title: "Code of Conduct",
    description: "Clear expectations around behaviour, respect and professional standards.",
    href: "/policies/03_Code_of_Conduct.pdf",
  },
  {
    title: "Health and Safety Policy",
    description: "How a safe and secure learning environment is maintained.",
    href: "/policies/04_Health_and_Safety_Policy.pdf",
  },
  {
    title: "Complaints Policy",
    description: "A clear and fair process for raising and resolving concerns.",
    href: "/policies/05_Complaints_Policy.pdf",
  },
];

export default function PoliciesPage() {
  return (
    <main className="min-h-screen bg-[#F7F7F4] text-slate-900">
      <SiteHeader />

      <section className="mx-auto max-w-4xl px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#D8B35B]">
            Warren Dodd Education
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#12284C] sm:text-5xl">
            Policies &amp; Safeguarding
          </h1>

          <div className="mx-auto mt-6 h-px w-16 bg-slate-300" />

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Clear, transparent policies are an important part of creating a safe,
            calm and professional environment for every child.
          </p>

          <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-slate-600">
            All key documents are available below.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {policyDocuments.map((doc) => (
            <a
              key={doc.title}
              href={doc.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm transition hover:border-[#D8B35B] hover:shadow-md"
            >
              <div className="max-w-[75%]">
                <h2 className="text-lg font-medium text-[#12284C]">
                  {doc.title}
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  {doc.description}
                </p>
              </div>

              <div className="shrink-0 text-sm font-semibold text-[#12284C] transition group-hover:text-[#0f5c6e]">
                View
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-slate-500">
          If you have any questions about any of these documents, please feel
          free to get in touch.
        </div>
      </section>
    </main>
  );
}