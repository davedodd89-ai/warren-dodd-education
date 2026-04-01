"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import SiteHeader from "../SiteHeader";

export default function ContactPage() {
  const [parentName, setParentName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [childAge, setChildAge] = useState("");
  const [supportType, setSupportType] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const subject = "New Warren Dodd Education enquiry";
    const body = [
      `Parent name: ${parentName}`,
      `Email: ${email}`,
      `Mobile number: ${phone || "Not provided"}`,
      `Child age: ${childAge}`,
      `Support type: ${supportType}`,
      "",
      "Tell me about your child:",
      message,
    ].join("\n");

    window.location.href = `mailto:warrendoddeducation@outlook.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="min-h-screen bg-[#F7F7F4] text-slate-900">
      <SiteHeader />

      <main className="mx-auto max-w-7xl px-6 pb-20 pt-10 md:px-10 lg:pb-24 lg:pt-14">
        <section className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
              Contact Warren Dodd Education
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[0.95] tracking-tight text-[#12284C] md:text-6xl">
              Start with a simple conversation about your child.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              Tell me where things currently feel difficult, what you would like
              to improve, and whether you are exploring bespoke daytime tutoring,
              hybrid education, home education support, or confidence-led
              provision.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-slate-200 bg-white px-5 py-5 shadow-sm">
                <p className="text-sm uppercase tracking-[0.16em] text-slate-500">
                  Personal response
                </p>
                <p className="mt-2 leading-7 text-slate-800">
                  Every enquiry is read and responded to personally by David
                  Warren Dodd.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-slate-200 bg-white px-5 py-5 shadow-sm">
                <p className="text-sm uppercase tracking-[0.16em] text-slate-500">
                  Typical reply time
                </p>
                <p className="mt-2 leading-7 text-slate-800">
                  Usually within 24 hours.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_16px_50px_rgba(15,23,42,0.08)] md:p-8">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                Book a consultation
              </p>

              <h2 className="mt-3 text-2xl font-semibold text-[#12284C] md:text-3xl">
                Enquiry form
              </h2>

              <p className="mt-3 max-w-2xl text-slate-700">
                Complete the form below and your email app will open with a
                ready-written enquiry.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Parent name
                  </label>
                  <input
                    type="text"
                    required
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Email address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Mobile number (optional)
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Child age
                  </label>
                  <input
                    type="text"
                    required
                    value={childAge}
                    onChange={(e) => setChildAge(e.target.value)}
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    What support are you looking for?
                  </label>
                  <select
                    required
                    value={supportType}
                    onChange={(e) => setSupportType(e.target.value)}
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3"
                  >
                    <option value="">Select one</option>
                    <option>Daytime tutoring</option>
                    <option>Home education support</option>
                    <option>Hybrid education</option>
                    <option>Confidence and engagement support</option>
                    <option>Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Tell me about your child
                  </label>
                  <textarea
                    rows={6}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#12284C] px-6 py-4 font-semibold text-white"
                >
                  Continue to email
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] bg-[#12284C] p-8 text-white shadow-[0_16px_50px_rgba(15,23,42,0.14)]">
              <div className="mx-auto h-40 w-40 overflow-hidden rounded-full border-4 border-white/10 shadow-lg">
                <img
                  src="/hero.jpg"
                  alt="David Warren Dodd"
                  className="h-full w-full object-cover"
                />
              </div>

              <h2 className="mt-6 text-center text-3xl font-semibold">
                David Warren Dodd
              </h2>

              <p className="mt-2 text-center text-sm uppercase tracking-[0.18em] text-slate-300">
                BSc (Hons) • QTS • Psychology-led
              </p>

              <p className="mt-8 text-center text-lg leading-8 text-slate-200">
                If you are unsure whether this is the right fit, start with a
                simple message and I will personally help you think through the
                best next step.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.16em] text-slate-500">
                Direct contact
              </p>

              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-sm font-medium text-slate-500">Email</p>
                  <a
                    href="mailto:warrendoddeducation@outlook.com"
                    className="mt-1 inline-block text-lg font-medium text-[#12284C] underline"
                  >
                    warrendoddeducation@outlook.com
                  </a>
                </div>

                <div>
                  <p className="text-sm font-medium text-slate-500">
                    WhatsApp / mobile
                  </p>
                  <a
                    href="https://wa.me/447512341730"
                    className="mt-1 inline-block text-lg font-medium text-[#12284C] underline"
                  >
                    07512 341730
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-[#F8F8F6] p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.16em] text-slate-500">
                Helpful to include
              </p>

              <div className="mt-4 space-y-3 text-slate-800">
                <p>• Your child’s age</p>
                <p>• What support you are looking for</p>
                <p>• Confidence or engagement concerns</p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.16em] text-slate-500">
                Explore first
              </p>

              <p className="mt-3 leading-7 text-slate-700">
                You can also read more about the bespoke programme before
                getting in touch.
              </p>

              <div className="mt-5">
                <Link
                  href="/#programme"
                  className="inline-flex rounded-full border border-slate-300 bg-white px-6 py-3 font-medium text-slate-900"
                >
                  View the programme
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}