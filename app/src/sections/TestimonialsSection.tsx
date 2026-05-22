import { useState, useEffect, useCallback } from 'react'
import { Star } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface Testimonial {
  quote: string
  name: string
  location: string
}

export default function TestimonialsSection() {
  const { t } = useTranslation()

  const testimonials: Testimonial[] = [
    {
      quote: t('testimonials.quote1'),
      name: t('testimonials.name1'),
      location: t('testimonials.location1'),
    },
    {
      quote: t('testimonials.quote2'),
      name: t('testimonials.name2'),
      location: t('testimonials.location2'),
    },
    {
      quote: t('testimonials.quote3'),
      name: t('testimonials.name3'),
      location: t('testimonials.location3'),
    },
  ]
  const [active, setActive] = useState(0)

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [next])

  return (
    <section className="bg-white py-24 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[40%_60%] gap-10 lg:gap-12 items-center">
          {/* Image */}
          <div>
            <img
              src="/feedback.png"
              alt="Happy customer with technician"
              className="w-full rounded-xl object-cover aspect-[4/3] shadow-lg"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div>
            <span className="section-label">{t('testimonials.label')}</span>
            <h2 className="mt-4 text-[clamp(28px,3.5vw,42px)] font-bold text-gray-900 leading-tight">
              {t('testimonials.title')}
            </h2>
            <p className="mt-3 text-base text-gray-500">
              {t('testimonials.subtitle')}
            </p>

            {/* Carousel */}
            <div className="mt-10 relative" aria-live="polite">
              <div className="border-l-[3px] border-orange-500 pl-6">
                {/* Stars */}
                <div className="flex gap-1">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="mt-4 text-lg text-gray-700 leading-relaxed italic transition-opacity duration-400">
                  &ldquo;{testimonials[active].quote}&rdquo;
                </p>

                {/* Customer */}
                <div className="mt-5">
                  <p className="text-base font-semibold text-gray-900">{testimonials[active].name}</p>
                  <p className="text-sm text-gray-500">{testimonials[active].location}</p>
                </div>
              </div>

              {/* Dots */}
              <div className="flex gap-2 mt-8">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === active ? 'bg-orange-500 w-6' : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
