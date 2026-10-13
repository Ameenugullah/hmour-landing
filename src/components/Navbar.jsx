import { useEffect, useState } from 'react'

const LEFT_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Collections', href: '#collection' },
]
const RIGHT_LINKS = [
  { label: 'Notes', href: '#notes' },
  { label: 'Journal', href: '#experience' },
]
const ALL_LINKS = [...LEFT_LINKS, { label: 'Our Story', href: '#story' }, ...RIGHT_LINKS]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [announceOpen, setAnnounceOpen] = useState(true)

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* announcement bar */}
      {announceOpen && (
        <div className="relative flex items-center justify-center bg-olive px-10 py-2.5 text-center text-[11px] font-semibold uppercase tracking-wide text-ink md:tracking-wide2">
          <p>
            <span className="md:hidden">Just Restocked — Shop Now</span>
            <span className="hidden md:inline">Just Restocked — Shop the Signature Collection</span>
          </p>
          <button
            onClick={() => setAnnounceOpen(false)}
            aria-label="Dismiss announcement"
            className="absolute right-4 text-ink/70 hover:text-ink"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
      )}

      <nav
        className="mx-auto flex h-20 max-w-page items-center justify-between rounded-b-[28px] bg-parchment px-5 shadow-[0_8px_30px_-12px_rgba(33,23,17,0.15)] md:px-10"
        aria-label="Main"
      >
        {/* left links, desktop only */}
        <ul className="hidden flex-1 items-center gap-8 lg:flex">
          {LEFT_LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="link-line text-[13px] font-medium uppercase tracking-wide2 text-ink/80 hover:text-ink transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* logo container — reserved for the brand logo asset, left intentionally empty */}
        <a href="#home" className="flex h-12 w-32 shrink-0 items-center justify-center gap-3 md:h-14" aria-label="H'MOUR home" />

        {/* right links + bag, desktop only */}
        <div className="hidden flex-1 items-center justify-end gap-8 lg:flex">
          <ul className="flex items-center gap-8">
            {RIGHT_LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="link-line text-[13px] font-medium uppercase tracking-wide2 text-ink/80 hover:text-ink transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <button aria-label="Shopping bag" className="relative text-ink/70 hover:text-ink transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d="M6 8h12l-1 12H7L6 8Z" />
              <path d="M9 8V6a3 3 0 0 1 6 0v2" />
            </svg>
            <span className="absolute -right-2 -top-1.5 text-[10px] text-amber-deep">0</span>
          </button>
          <a
            href="#collection"
            className="rounded-full bg-ink px-6 py-2.5 text-[12px] font-semibold uppercase tracking-wide2 text-parchment transition-colors duration-300 hover:bg-olive-deep"
          >
            Discover
          </a>
        </div>

        {/* mobile toggle */}
        <button
          className="lg:hidden flex h-10 w-10 flex-col items-center justify-center gap-[6px]"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <span className={`h-px w-6 bg-ink transition-transform duration-300 ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`h-px w-6 bg-ink transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`h-px w-6 bg-ink transition-transform duration-300 ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </nav>

      {/* mobile overlay menu */}
      <div
        className={`lg:hidden fixed inset-0 top-20 bg-parchment transition-all duration-500 ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <ul className="flex flex-col gap-2 px-8 pt-10">
          {ALL_LINKS.map((l, i) => (
            <li key={l.label} style={{ transitionDelay: `${i * 60}ms` }}
              className={`border-b border-ink/10 transition-all duration-500 ${open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            >
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-5 text-3xl font-medium italic text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-8">
            <a
              href="#collection"
              onClick={() => setOpen(false)}
              className="inline-block rounded-full bg-ink px-10 py-4 text-sm font-semibold uppercase tracking-wide2 text-parchment"
            >
              Discover
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
