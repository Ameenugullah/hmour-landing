import { useState } from 'react'

const COLS = [
  {
    head: 'Company',
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Collections', href: '#collection' },
      { label: 'Our Story', href: '#story' },
      { label: 'Journal', href: '#experience' },
    ],
  },
  {
    head: 'Social',
    links: [
      { label: 'Instagram', href: '#' },
      { label: 'TikTok', href: '#' },
      { label: 'Facebook', href: '#' },
      { label: 'Pinterest', href: '#' },
    ],
  },
  {
    head: 'Care',
    links: [
      { label: 'Shipping', href: '#' },
      { label: 'Returns', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
]

function FlowerIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <g>
        {Array.from({ length: 8 }).map((_, i) => (
          <ellipse key={i} cx="12" cy="6" rx="2" ry="4" transform={`rotate(${i * 45} 12 12)`} />
        ))}
      </g>
    </svg>
  )
}

export default function Footer() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const handleSubmit = () => {
    if (!email.includes('@')) return
    setDone(true)
  }

  return (
    <footer className="bg-terracotta pt-20 text-parchment">
      <div className="mx-auto max-w-page px-5 md:px-10">
        <div className="grid gap-14 pb-16 md:grid-cols-[1.3fr_2fr]">
          <div>
            <span className="text-amber-light"><FlowerIcon /></span>
            <p className="mt-5 text-3xl font-semibold md:text-4xl">
              We send <span className="italic">great</span> emails.
            </p>

            {done ? (
              <p className="mt-6 italic text-parchment/85">You're on the list.</p>
            ) : (
              <div className="mt-6 flex max-w-md flex-col gap-3 rounded-full bg-parchment p-1.5 sm:flex-row sm:gap-0">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                  placeholder="Enter your email"
                  aria-label="Email address"
                  className="flex-1 rounded-full bg-transparent px-5 py-2.5 text-ink placeholder:text-ink/40 focus:outline-none"
                />
                <button
                  onClick={handleSubmit}
                  className="rounded-full bg-parchment px-6 py-2.5 text-[12px] font-semibold uppercase tracking-wide2 text-ink ring-1 ring-inset ring-ink/15 transition-colors duration-300 hover:bg-ink hover:text-parchment"
                >
                  Subscribe
                </button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {COLS.map((col) => (
              <div key={col.head}>
                <h3 className="text-lg font-semibold">{col.head}</h3>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="link-line text-parchment/80 hover:text-parchment transition-colors">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* oversized wordmark */}
        <p className="select-none text-center text-[16vw] font-bold leading-[0.85] text-parchment md:text-[9rem] lg:text-[10rem]">
          H'MOUR
        </p>

        <div className="flex flex-col items-center justify-between gap-2 py-8 text-[12px] uppercase tracking-wide2 text-parchment/70 md:flex-row">
          <p>© {new Date().getFullYear()} H'MOUR. All rights reserved.</p>
          <p>Composed with patience.</p>
        </div>
      </div>
    </footer>
  )
}
