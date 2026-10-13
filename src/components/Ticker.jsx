const ITEM = "Crafted in small batches."

export default function Ticker() {
  // duplicated twice for a seamless 200%-wide loop
  const items = Array.from({ length: 8 })

  return (
    <div className="overflow-hidden bg-gold py-4" aria-hidden="true">
      <div className="ticker-track flex w-max items-center gap-6 whitespace-nowrap">
        {[...items, ...items].map((_, i) => (
          <span key={i} className="flex items-center gap-6">
            <span className="font-serif text-xl font-medium text-ink md:text-2xl">
              {ITEM.replace('batches.', '')}<span className="italic">batches.</span>
            </span>
            <span className="text-lg text-ink/70">✻</span>
          </span>
        ))}
      </div>
    </div>
  )
}
