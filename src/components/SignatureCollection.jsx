import signatureDuo from '../assets/signature-duo.jpeg'

const PIECES = [
  {
    no: 'I',
    name: 'Black Amber',
    desc: 'The house original. Deep amber resin warmed by a whisper of smoke.',
  },
  {
    no: 'II',
    name: 'Oud Afrique',
    desc: 'Whims of the desert — aged oud settled into honeyed musk. Made for evenings that run long.',
  },
  {
    no: 'III',
    name: 'Éclat Bleu',
    desc: 'A bright, mineral accord over sheer musk — cool water on warm skin.',
  },
]

export default function SignatureCollection() {
  return (
    <section id="collection" className="bg-blush py-24 md:py-32">
      <div className="mx-auto max-w-page px-5 md:px-10">
        <div className="grid gap-14 md:grid-cols-[1fr_1.1fr] md:gap-20">
          {/* sticky campaign image on desktop */}
          <div className="md:sticky md:top-28 md:self-start">
            <figure className="reveal img-zoom relative overflow-hidden rounded-[28px] shadow-[0_20px_45px_-25px_rgba(33,23,17,0.35)]">
              <img
                src={signatureDuo}
                alt="Black Amber and Oud Afrique eau de parfum bottles"
                className="aspect-[3/4] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="absolute left-5 top-5 rounded-full bg-oud/80 px-4 py-2 text-[11px] uppercase tracking-luxe text-parchment">
                Signature Collection
              </figcaption>
            </figure>
          </div>

          <div className="flex flex-col justify-center">
            <p className="reveal text-[12px] font-semibold uppercase tracking-luxe text-amber">The Collection</p>
            <h2 className="reveal reveal-delay-1 mt-4 text-4xl font-semibold md:text-6xl">
              Three chapters, <br className="hidden md:block" />
              <span className="font-bold italic">one signature</span>
            </h2>

            <div className="mt-12">
              {PIECES.map((p, i) => (
                <article
                  key={p.no}
                  className={`reveal group border-t border-ink/10 py-8 transition-colors duration-500 hover:bg-white/60 md:px-6 ${i === PIECES.length - 1 ? 'border-b' : ''}`}
                >
                  <div className="flex items-start gap-6">
                    <span className="pt-1 text-sm font-semibold text-amber">{p.no}</span>
                    <div className="flex-1">
                      <h3 className="text-3xl font-semibold transition-transform duration-500 group-hover:translate-x-1">
                        {p.name}
                      </h3>
                      <p className="mt-2 max-w-md text-ink/60">{p.desc}</p>
                    </div>
                    <span className="mt-2 hidden text-2xl text-amber transition-transform duration-500 group-hover:translate-x-1 md:block" aria-hidden="true">
                      →
                    </span>
                  </div>
                </article>
              ))}
            </div>

            <a
              href="#newsletter"
              className="reveal mt-10 inline-block self-start rounded-full bg-ink px-10 py-4 text-[13px] font-semibold uppercase tracking-wide2 text-parchment transition-colors duration-300 hover:bg-olive-deep"
            >
              Request the full catalogue
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
