// Prototype pairs the hero with an "as seen in" press-logo row. We have no
// real press mentions to show, so the same wordmark treatment carries
// honest brand values instead of fabricated endorsements.
const VALUES = ['Small Batch', 'Hand-Numbered', '72h Maceration', 'Cruelty-Free', 'Parfum Strength']

export default function TrustRow() {
  return (
    <div className="bg-blush py-14">
      <div className="mx-auto max-w-page px-5 md:px-10">
        <p className="reveal text-center text-[11px] font-semibold uppercase tracking-luxe text-ink/50">
          Why H'MOUR
        </p>
        <ul className="reveal reveal-delay-1 mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {VALUES.map((v) => (
            <li key={v} className="font-serif text-xl font-semibold italic text-ink/80 md:text-2xl">
              {v}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
