import Link from "next/link";
import SiteHeader from "../SiteHeader";

const policies = [
  {
    title: "Safeguarding Policy",
    description:
      "How children are kept safe, supported and protected at all times.",
    href: "/policies/01_Safeguarding_Policy.pdf",
  },
  {
    title: "Privacy Notice",
    description:
      "How personal information is collected, stored and used responsibly.",
    href: "/policies/02_Privacy_Notice.pdf",
  },
  {
    title: "Complaints Policy",
    description:
      "A clear and fair process for raising and resolving concerns.",
    href: "/policies/05_Complaints_Policy.pdf",
  },
];

export default function PoliciesPage() {
  return (
    <div className="min-h-screen bg-[#F7F7F4] text-slate-900">
      <SiteHeader />

      <main className="mx-auto max-w-5xl px-6 py-12 md:px-10 md:py-16">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.22em] text-slate-500 md:text-sm">
            Policies and safeguarding
          </p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#12284C] md:text-5xl">
            Policies
          </h1>

          <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
            Key policy documents for Warren Dodd Education are available below.
          </p>
        </div>

        <div className="mt-10 space-y-5">
          {policies.map((policy) => (
            <div
              key={policy.title}
              className="flex flex-col justify-between gap-4 rounded-[1.5rem] border border-slate-200 bg-white px-6 py-6 shadow-sm md:flex-row md:items-center md:px-8"
            >
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-[#12284C]">
                  {policy.title}
                </h2>
                <p className="mt-2 text-base leading-7 text-slate-600">
                  {policy.description}
                </p>
              </div>

              <Link
                href={policy.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center font-semibold text-[#12284C] transition hover:opacity-70"
              >
                View
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-slate-500 md:text-base">
          If you have any questions about any of these documents, please feel
          free to get in touch.
        </p>
      </main>
    </div>
  );
}