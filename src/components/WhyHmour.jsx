const REASONS = [
  {
    title: 'Slow composition',
    copy: 'Every blend macerates for a minimum of 72 hours before bottling. Most rest far longer.',
  },
  {
    title: 'Honest materials',
    copy: 'A short list of ingredients we can name and stand behind — no filler accords.',
  },
  {
    title: 'Made to last',
    copy: 'Parfum-strength concentration built for warm climates. Morning spray, evening trail.',
  },
  {
    title: 'Small batches',
    copy: 'Numbered runs. When a batch is gone, we make the next one properly, not quickly.',
  },
]

export default function WhyHmour() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-page px-5 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-20">
          <div className="reveal md:sticky md:top-28 md:self-start">
            <p className="text-[12px] font-semibold uppercase tracking-luxe text-amber">Why H'MOUR</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              Chosen for the way it <span className="font-bold italic">stays</span>
            </h2>
          </div>

          <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {REASONS.map((r, i) => (
              <div key={r.title} className={`reveal reveal-delay-${i % 2}`}>
                <div className="mb-5 h-px w-full bg-olive/40" />
                <h3 className="text-2xl font-semibold">{r.title}</h3>
                <p className="mt-3 leading-relaxed text-ink/60">{r.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
