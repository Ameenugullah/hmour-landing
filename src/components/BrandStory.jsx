import eclatBleuRock from '../assets/eclat-bleu-rock.jpeg'

export default function BrandStory() {
  return (
    <section id="story" className="bg-oud py-24 text-parchment md:py-36">
      <div className="mx-auto grid max-w-page items-center gap-14 px-5 md:grid-cols-2 md:gap-20 md:px-10">
        {/* the original brand card, framed like a print */}
        <figure className="reveal img-zoom relative mx-auto max-w-sm overflow-hidden rounded-[28px] border border-parchment/10 md:max-w-md">
          <img
            src={eclatBleuRock}
            alt="Éclat Bleu resting on a coastal rock"
            className="aspect-[4/5] w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </figure>

        <div>
          <p className="reveal text-[12px] font-semibold uppercase tracking-luxe text-amber-light">Our Story</p>
          <h2 className="reveal reveal-delay-1 mt-5 text-4xl font-semibold leading-tight md:text-6xl">
            Perfume as <span className="font-bold italic text-amber-light">memory</span>,
            bottled slowly.
          </h2>
          <div className="reveal reveal-delay-2 mt-8 space-y-5 text-lg leading-relaxed text-parchment/70">
            <p>
              H'MOUR began with a single accord — amber warmed on the skin — and a
              refusal to hurry it. Each composition rests for weeks before it is
              bottled, the way a good story rests before it is told.
            </p>
            <p>
              We work with a short list of materials we trust: golden amber, aged oud,
              soft musk, and florals picked at their quietest hour. Nothing is added
              to fill space. Everything earns its place.
            </p>
          </div>
          <div className="reveal reveal-delay-3 mt-10 flex items-center gap-10">
            <div>
              <p className="text-4xl font-bold text-amber-light">72h</p>
              <p className="mt-1 text-[11px] uppercase tracking-wide2 text-parchment/50">Maceration minimum</p>
            </div>
            <span className="h-12 w-px bg-parchment/15" />
            <div>
              <p className="text-4xl font-bold text-amber-light">1</p>
              <p className="mt-1 text-[11px] uppercase tracking-wide2 text-parchment/50">Signature accord</p>
            </div>
            <span className="hidden h-12 w-px bg-parchment/15 sm:block" />
            <div className="hidden sm:block">
              <p className="text-4xl font-bold text-amber-light">Small</p>
              <p className="mt-1 text-[11px] uppercase tracking-wide2 text-parchment/50">Batch, always</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
