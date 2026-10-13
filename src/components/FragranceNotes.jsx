const NOTES = [
  {
    stage: 'Top',
    time: 'The first 15 minutes',
    notes: ['Bergamot', 'Saffron', 'Pink pepper'],
    copy: 'Bright and brief — the handshake before the conversation.',
  },
  {
    stage: 'Heart',
    time: 'Hours one to four',
    notes: ['Golden amber', 'Damask rose', 'Vanilla smoke'],
    copy: 'Where H\u2019MOUR lives. The amber blooms and settles in.',
  },
  {
    stage: 'Base',
    time: 'Through the evening',
    notes: ['Aged oud', 'Warm musk', 'Dry cedar'],
    copy: 'What stays on the collar the next morning.',
  },
]

export default function FragranceNotes() {
  return (
    <section id="notes" className="bg-blush py-24 md:py-32">
      <div className="mx-auto max-w-page px-5 md:px-10">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-[12px] font-semibold uppercase tracking-luxe text-amber">Anatomy of the scent</p>
          <h2 className="mt-4 text-4xl font-semibold md:text-6xl">
            Fragrance <span className="font-bold italic">notes</span>
          </h2>
          <p className="mt-5 text-lg text-ink/60">
            A perfume unfolds in movements. This is how ours is written.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {NOTES.map((n, i) => (
            <article key={n.stage} className={`reveal reveal-delay-${i} rounded-[28px] bg-white p-8 shadow-[0_20px_45px_-25px_rgba(33,23,17,0.25)] md:p-10`}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-3xl font-bold">{n.stage}</h3>
                <span className="text-[11px] uppercase tracking-wide2 text-ink/45">{n.time}</span>
              </div>
              <ul className="mt-8 space-y-3">
                {n.notes.map((note) => (
                  <li key={note} className="flex items-center gap-3 text-lg text-ink/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-olive-deep" aria-hidden="true" />
                    {note}
                  </li>
                ))}
              </ul>
              <p className="mt-8 border-t border-ink/10 pt-6 italic text-ink/55">{n.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
