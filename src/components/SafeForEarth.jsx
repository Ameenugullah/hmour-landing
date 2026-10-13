import ambitionPortrait from '../assets/ambition-portrait.jpeg'

const VALUES = [
  {
    title: 'Sustainable Sourcing',
    copy: 'We meticulously source our materials from trusted, sustainable suppliers, keeping the balance of nature intact.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 21s-7-4.5-7-10a7 7 0 0 1 14 0c0 5.5-7 10-7 10Z" />
        <path d="M12 8v7" />
      </svg>
    ),
  },
  {
    title: 'Clean Formulations',
    copy: 'Every fragrance is composed with clean, non-toxic ingredients — nothing that compromises your health.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3" />
      </svg>
    ),
  },
  {
    title: 'Minimalist Packaging',
    copy: 'Bottles and cartons are designed to minimise waste, using materials that are as sustainable as they are beautiful.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M21 8 12 3 3 8l9 5 9-5Z" />
        <path d="M3 8v8l9 5 9-5V8" />
        <path d="M12 13v8" />
      </svg>
    ),
  },
  {
    title: 'Cruelty-Free Practices',
    copy: "We're proud to be a cruelty-free house, never testing on animals — our care extends to every creature.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 21s-8-4.9-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6.1-8 11-8 11Z" />
      </svg>
    ),
  },
]

export default function SafeForEarth() {
  return (
    <section className="bg-blush py-24 md:py-32">
      <div className="mx-auto grid max-w-page items-center gap-14 px-5 md:grid-cols-2 md:gap-20 md:px-10">
        <div>
          <h2 className="reveal text-4xl font-semibold leading-tight md:text-5xl">
            Safe for you, safe for the <span className="font-bold italic">earth</span>.
          </h2>

          <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {VALUES.map((v, i) => (
              <div key={v.title} className={`reveal reveal-delay-${i % 4}`}>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold text-ink">
                  {v.icon}
                </span>
                <h3 className="mt-4 text-[12px] font-bold uppercase tracking-wide2">{v.title}</h3>
                <p className="mt-2 text-ink/60">{v.copy}</p>
              </div>
            ))}
          </div>
        </div>

        <figure className="reveal reveal-delay-2 img-zoom overflow-hidden rounded-[28px] shadow-[0_20px_45px_-25px_rgba(33,23,17,0.35)]">
          <img
            src={ambitionPortrait}
            alt="H'MOUR Ambition eau de parfum, held close"
            className="aspect-[4/5] w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>
    </section>
  )
}
