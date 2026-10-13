import testimonialAmina from '../assets/testimonial-amina.jpeg'
import testimonialTunde from '../assets/testimonial-tunde.jpeg'
import testimonialFatima from '../assets/testimonial-fatima.jpeg'

const QUOTES = [
  {
    text: 'I wore Ambre d’Or to a wedding in December. Three people asked, one wrote it down.',
    name: 'Amina S.',
    place: 'Abuja',
    img: testimonialAmina,
  },
  {
    text: 'Most ouds shout. This one speaks quietly and everyone still leans in.',
    name: 'Tunde O.',
    place: 'Lagos',
    img: testimonialTunde,
  },
  {
    text: 'It smells like it took a long time to make. That is the whole review.',
    name: 'Fatima B.',
    place: 'Kano',
    img: testimonialFatima,
  },
]

function Star() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="m12 2.5 2.9 6.3 6.9.7-5.2 4.8 1.5 6.8L12 17.6l-6.1 3.5 1.5-6.8L2.2 9.5l6.9-.7L12 2.5Z" />
    </svg>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-blush py-24 md:py-32">
      <div className="mx-auto max-w-page px-5 md:px-10">
        <h2 className="reveal text-center text-4xl font-semibold md:text-6xl">
          Everyone is <span className="font-bold italic">enchanted</span> by us.
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {QUOTES.map((q, i) => (
            <article
              key={q.name}
              className={`reveal reveal-delay-${i % 4} rounded-[28px] bg-white p-7 shadow-[0_20px_45px_-25px_rgba(33,23,17,0.25)]`}
            >
              <div className="flex gap-1 text-ink/70" aria-hidden="true">
                <Star /><Star /><Star /><Star /><Star />
              </div>
              <p className="mt-4 leading-relaxed text-ink/75">&ldquo;{q.text}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={q.img}
                  alt=""
                  aria-hidden="true"
                  className="h-11 w-11 rounded-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <p className="font-serif text-lg font-semibold leading-tight">{q.name}</p>
                  <p className="text-[11px] font-bold uppercase tracking-wide2 text-ink/50">{q.place}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* only one page of testimonials for now — arrows shown for the pattern, disabled */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            disabled
            aria-label="Previous testimonials"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink/30 shadow-[0_10px_25px_-15px_rgba(33,23,17,0.3)]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M15 5l-7 7 7 7" /></svg>
          </button>
          <button
            disabled
            aria-label="Next testimonials"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink/30 shadow-[0_10px_25px_-15px_rgba(33,23,17,0.3)]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </section>
  )
}
