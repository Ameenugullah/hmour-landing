import fatima from '../assets/testimonial-fatima.jpeg'

export default function DreamPromo() {
  return (
    <section className="bg-blush py-24 md:py-32">
      <div className="mx-auto grid max-w-page items-center gap-14 px-5 md:grid-cols-2 md:gap-20 md:px-10">
        <figure className="reveal img-zoom order-2 overflow-hidden rounded-[28px] shadow-[0_20px_45px_-25px_rgba(33,23,17,0.35)] md:order-1">
          <img
            src={fatima}
            alt="Ivory Woods eau de parfum, held close in warm evening light"
            className="aspect-[4/5] w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </figure>

        <div className="order-1 text-center md:order-2 md:text-left">
          <h2 className="reveal text-4xl font-semibold md:text-6xl">
            Smell like a <span className="font-bold italic">dream</span>.
          </h2>
          <p className="reveal reveal-delay-1 mx-auto mt-6 max-w-md text-lg leading-relaxed text-ink/60 md:mx-0">
            Golden amber, aged oud, soft musk — each accord rests for weeks
            before it's bottled. What reaches your skin is unhurried, the way
            a memory you want to keep is never rushed.
          </p>
          <a
            href="#collection"
            className="reveal reveal-delay-2 mt-8 inline-block rounded-full bg-olive px-10 py-4 text-[13px] font-semibold uppercase tracking-wide2 text-ink transition-colors duration-300 hover:bg-ink hover:text-parchment"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  )
}
