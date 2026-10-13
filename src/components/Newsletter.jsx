import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const handleSubmit = () => {
    // TODO: wire to PocketBase / mailing provider when backend is ready
    if (!email.includes('@')) return
    setDone(true)
  }

  return (
    <section id="newsletter" className="py-24 md:py-32">
      <div className="reveal mx-auto max-w-3xl px-5 text-center md:px-10">
        <p className="text-[12px] font-semibold uppercase tracking-luxe text-amber">The private list</p>
        <h2 className="mt-4 text-4xl font-semibold md:text-6xl">
          First to know, <span className="font-bold italic">first to wear</span>
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-lg text-ink/60">
          New batches are announced to the list before anywhere else. No noise —
          one letter per release.
        </p>

        {done ? (
          <p className="mt-10 text-xl italic text-amber-deep">
            You're on the list. The next letter finds you first.
          </p>
        ) : (
          <div className="mx-auto mt-10 flex max-w-xl flex-col gap-3 rounded-full border border-ink/25 bg-white p-2 sm:flex-row sm:gap-0">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
              placeholder="Your email address"
              aria-label="Email address"
              className="flex-1 rounded-full bg-transparent px-6 py-3 text-lg placeholder:text-ink/35 focus:outline-none"
            />
            <button
              onClick={handleSubmit}
              className="rounded-full bg-ink px-10 py-3 text-[13px] font-semibold uppercase tracking-wide2 text-parchment transition-colors duration-300 hover:bg-olive-deep"
            >
              Join
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
