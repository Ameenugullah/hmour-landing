import { useEffect, useRef } from 'react'
import experienceLoop from '../assets/obsession-ritual-loop.mp4'
import experienceLifestyle from '../assets/experience-lifestyle.jpeg'

export default function LuxuryExperience() {
  const videoRef = useRef(null)

  // only spend CPU/battery decoding the loop while the section is actually on screen
  useEffect(() => {
    const video = videoRef.current
    if (!video || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {})
        else video.pause()
      },
      { threshold: 0.25 },
    )
    io.observe(video)
    return () => io.disconnect()
  }, [])

  return (
    <section id="experience" className="relative overflow-hidden">
      {/* looping ritual footage with a dark amber wash for legibility — the
          source clip is pillarboxed with black bands top and bottom, so it's
          scaled up and recentred to crop those bands out of view */}
      <div className="absolute inset-0 min-h-[460px] overflow-hidden bg-oud md:min-h-[600px] lg:min-h-[720px]">
        <video
          ref={videoRef}
          src={experienceLoop}
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="h-full w-full scale-[1.65] object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-oud/95 via-oud/75 to-amber-deep/50" />
      </div>

      <div className="relative mx-auto max-w-page px-5 py-28 md:px-10 md:py-40">
        <div className="max-w-xl text-parchment">
          <p className="reveal text-[12px] font-semibold uppercase tracking-luxe text-amber-light">
            The Luxury Experience
          </p>
          <h2 className="reveal reveal-delay-1 mt-5 text-4xl font-semibold leading-tight md:text-6xl">
            Unbox it the way <br />
            <span className="font-bold italic text-amber-light">we sealed it</span>
          </h2>
          <p className="reveal reveal-delay-2 mt-6 text-lg leading-relaxed text-parchment/75">
            Wax-sealed cartons, hand-numbered batch cards, and a sample vial of the
            next release tucked inside. Every order ships with white-glove care —
            because the experience begins before the first spray.
          </p>
          <a
            href="#newsletter"
            className="reveal reveal-delay-3 mt-10 inline-block rounded-full border border-parchment/70 px-10 py-4 text-[13px] font-semibold uppercase tracking-wide2 text-parchment transition-colors duration-300 hover:bg-parchment hover:text-oud"
          >
            Reserve your bottle
          </a>
        </div>
      </div>

      {/* floating still, desktop only — the unboxing ritual described alongside */}
      <figure className="reveal reveal-delay-3 img-zoom absolute bottom-10 right-6 hidden w-56 overflow-hidden rounded-[28px] shadow-[0_30px_60px_-20px_rgba(23,16,11,0.6)] lg:right-14 lg:block lg:w-64">
        <img
          src={experienceLifestyle}
          alt="Ambition eau de parfum styled for an evening out"
          className="aspect-[4/5] w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </figure>
    </section>
  )
}
