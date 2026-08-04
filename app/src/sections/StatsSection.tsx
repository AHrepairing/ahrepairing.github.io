import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

interface Stat {
  value: string
  numericValue: number
  suffix: string
  label: string
  isDecimal?: boolean
}

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4)
}

function AnimatedNumber({ value, suffix, isDecimal }: { value: number; suffix: string; isDecimal?: boolean }) {
  const [display, setDisplay] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 2000
          const start = performance.now()

          const animate = (now: number) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = easeOutQuart(progress)
            setDisplay(eased * value)

            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [value, hasAnimated])

  const formatted = isDecimal
    ? display.toFixed(1)
    : Math.floor(display).toLocaleString()

  return (
    <div ref={ref} className="text-3xl sm:text-4xl lg:text-[56px] font-bold text-white">
      {formatted}
      {suffix}
    </div>
  )
}

export default function StatsSection() {
  const { t } = useTranslation()

  const stats: Stat[] = [
    { value: '900+', numericValue: 900, suffix: '+', label: t('stats.servicesCompleted') },
    { value: '4.9/5', numericValue: 4.9, suffix: '/5', label: t('stats.customerRating'), isDecimal: true },
    { value: '850+', numericValue: 850, suffix: '+', label: t('stats.happyCustomers') },
    { value: '5+', numericValue: 5, suffix: '+', label: t('stats.yearsExperience') },
  ]

  return (
    <section className="bg-[#1A1A2E] py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {stats.map((stat, index) => (
            <div key={stat.label} className={`text-center ${index < stats.length - 1 ? 'lg:border-r lg:border-white/15' : ''}`}>
              <AnimatedNumber
                value={stat.numericValue}
                suffix={stat.suffix}
                isDecimal={stat.isDecimal}
              />
              <p className="mt-2 text-sm font-medium uppercase tracking-[0.1em] text-white/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
