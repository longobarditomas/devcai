import Link from "next/link";

const highlights = [
  {
    title: "AI-native workflows",
    description:
      "Automate the busywork with Devcai copilots embedded directly into your product, pipeline, and documentation.",
  },
  {
    title: "Open developer fabric",
    description:
      "Bring your existing stack. Devcai integrates with GitHub, Slack, Linear, and custom tools out of the box.",
  },
  {
    title: "Proof before production",
    description:
      "Spin up staging environments with synthetic data, run AI evaluations, and ship safe iterations faster.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        aria-hidden
      >
        <div className="absolute -left-40 top-10 h-72 w-72 rounded-full bg-purple-600/40 blur-3xl" />
        <div className="absolute right-[-120px] top-40 h-80 w-80 rounded-full bg-cyan-500/30 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-black" />
      </div>

      <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-24 px-6 py-24 sm:px-12">
        <header className="flex flex-col gap-10">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-medium backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Live preview · Devcai OS Alpha
          </div>

          <div className="flex flex-col gap-6">
            <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Build with confidence using{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-purple-300 bg-clip-text text-transparent">
                Devcai
              </span>
              .
            </h1>
            <p className="max-w-2xl text-pretty text-lg text-white/70 sm:text-xl">
              Devcai is the developer co-pilot platform that transforms product
              teams into high-velocity creators. Orchestrate AI-powered
              workflows, manage knowledge, and validate every release without
              leaving your flow.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="#get-started"
              className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-base font-semibold text-black transition hover:bg-emerald-300"
            >
              Explore the platform
            </Link>
            <Link
              href="#waitlist"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
            >
              Join the early access waitlist
            </Link>
          </div>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-white/30 hover:bg-white/10"
            >
              <div className="absolute -top-10 right-6 h-24 w-24 rounded-full bg-white/10 blur-2xl transition group-hover:bg-white/20" />
              <h2 className="text-xl font-semibold text-white">
                {item.title}
              </h2>
              <p className="mt-3 text-sm text-white/70">{item.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300">
                See what&apos;s possible
                <svg
                  aria-hidden
                  className="h-4 w-4 transition group-hover:translate-x-1"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 10h10m0 0-4-4m4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </article>
          ))}
        </section>

        <section
          id="get-started"
          className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-gradient-to-r from-white/10 via-white/5 to-transparent p-8 sm:p-12"
        >
          <h2 className="text-2xl font-semibold text-white">Why Devcai?</h2>
          <p className="max-w-3xl text-white/70">
            Devcai keeps product, engineering, and AI research in lockstep.
            Every idea becomes a programmable workflow, every workflow learns
            from production signals, and every release is validated by automated
            QA copilots. The result: fewer handoffs, faster iteration, and a
            shared source of truth for customer impact.
          </p>

          <div
            id="waitlist"
            className="flex flex-col gap-4 rounded-2xl border border-dashed border-white/20 bg-black/60 p-6 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="text-lg font-medium text-white">
                Ready to build with Devcai?
              </p>
              <p className="text-sm text-white/60">
                Tell us about your team and we&apos;ll share the private beta.
              </p>
            </div>
            <Link
              href="mailto:hello@devcai.com"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-zinc-100"
            >
              Contact the Devcai team
            </Link>
          </div>
        </section>

        <footer className="pb-12 text-sm text-white/50">
          Crafted with Next.js · Inspired by teams shipping with Devcai
        </footer>
      </main>
    </div>
  );
}
