import Image from "next/image";
import SiteHeader from "../SiteHeader";

export default function CPDPage() {
  return (
    <main className="min-h-screen bg-[#F7F7F4] text-slate-900">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:py-20">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
            Training &amp; CPD
          </p>
          <h1 className="mt-4 text-[2.4rem] font-semibold leading-[0.98] tracking-[-0.05em] text-[#12284C] md:text-[3.5rem] xl:text-[4rem]">
            Understanding Behaviour &amp; Masculinity
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Whole-staff CPD for schools exploring behaviour, masculinity, emotional literacy, online culture, PSHE links and practical classroom strategies.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <Image
            src="/training-behaviour.jpg"
            alt="Understanding Behaviour and Masculinity training"
            width={1600}
            height={900}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </section>
    </main>
  );
}