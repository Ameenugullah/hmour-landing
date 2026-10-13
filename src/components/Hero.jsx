import obsessionHands from '../assets/obsession-hands.jpeg'

// Full-bleed photographic hero — a single campaign still fills the frame,
// with the headline and CTA centred over a soft dark wash for legibility.
export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[560px] items-center overflow-hidden pt-32 pb-20 md:min-h-[720px] md:pt-40 md:pb-28">
      <div className="absolute inset-0">
        <img
          src={obsessionHands}
          alt="Obsession eau de parfum cradled between two hands"
          className="h-full w-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-oud/70 via-oud/35 to-oud/60" />
      </div>

      <div className="relative mx-auto max-w-page px-5 md:px-10">
        {/* eyebrow */}
        <p className="reveal text-center text-[12px] font-semibold uppercase tracking-luxe text-amber-light">
          Maison H'mour — Eau de Parfum
        </p>

        {/* headline: mixed regular / italic, centred over the photo */}
        <h1 className="reveal reveal-delay-1 mx-auto mt-6 max-w-3xl text-center text-4xl font-medium leading-tight text-parchment md:text-6xl lg:text-7xl">
          Elevate <span className="font-semibold italic text-amber-light">everyday</span> moments
          into lasting <span className="font-semibold italic text-amber-light">memory</span>.
        </h1>

        {/* CTA */}
        <div className="reveal reveal-delay-2 mt-10 flex justify-center">
          <a
            href="#collection"
            className="rounded-full bg-parchment px-10 py-4 text-[13px] font-semibold uppercase tracking-wide2 text-ink transition-colors duration-300 hover:bg-amber-light"
          >
            Shop Our Fragrances
          </a>
        </div>
      </div>
    </section>
  )
}
