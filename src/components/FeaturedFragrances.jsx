import oudAfrique from '../assets/oud-afrique.jpeg'
import ambitionFlatlay from '../assets/ambition-flatlay.jpeg'
import ivoryWoods from '../assets/ivory-woods.jpeg'
import eclatBleuSea from '../assets/eclat-bleu-sea.jpeg'

const FRAGRANCES = [
  {
    name: 'Oud Afrique',
    kind: 'Aged & Woody',
    price: '₦85,000',
    badge: 'Bestseller',
    img: oudAfrique,
  },
  {
    name: 'Ambition',
    kind: 'Bold & Radiant',
    price: '₦75,000',
    img: ambitionFlatlay,
  },
  {
    name: 'Ivory Woods',
    kind: 'Soft & Cedared',
    price: '₦60,000',
    badge: 'Limited Batch',
    img: ivoryWoods,
  },
  {
    name: 'Éclat Bleu',
    kind: 'Fresh & Aquatic',
    price: '₦68,000',
    img: eclatBleuSea,
  },
]

export default function FeaturedFragrances() {
  return (
    <section id="featured" className="bg-blush py-24 md:py-32">
      <div className="mx-auto max-w-page px-5 md:px-10">
        <div className="reveal text-center">
          <p className="text-[12px] font-semibold uppercase tracking-luxe text-amber">Featured</p>
          <h2 className="mt-4 text-4xl font-semibold md:text-6xl">
            Fragrances of <span className="font-bold italic">the season</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FRAGRANCES.map((f, i) => (
            <article
              key={f.name}
              className={`reveal reveal-delay-${i % 4} group overflow-hidden rounded-[28px] bg-white shadow-[0_20px_45px_-25px_rgba(33,23,17,0.35)] transition-transform duration-500 hover:-translate-y-1.5`}
            >
              <div className="img-zoom relative overflow-hidden rounded-t-[28px]">
                <img
                  src={f.img}
                  alt={`${f.name} eau de parfum`}
                  className="aspect-[4/5] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                {f.badge && (
                  <span className="absolute right-4 top-4 rounded-full bg-gold px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wide2 text-ink">
                    {f.badge}
                  </span>
                )}
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold">{f.name}</h3>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide2 text-olive-deep">{f.kind}</p>
                <p className="mt-2 text-lg text-ink/70">{f.price}</p>
                <a
                  href="#collection"
                  className="mt-5 inline-block rounded-full bg-olive px-8 py-3 text-[12px] font-semibold uppercase tracking-wide2 text-ink transition-colors duration-300 hover:bg-ink hover:text-parchment"
                >
                  Shop Now
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
