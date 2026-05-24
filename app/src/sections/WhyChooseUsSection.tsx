import { Settings, Clock, Award, DollarSign } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface Feature {
  icon: LucideIcon
  titleKey: string
  descKey: string
}

export default function WhyChooseUsSection() {
  const { t } = useTranslation()

  const features: Feature[] = [
    {
      icon: Settings,
      titleKey: 'why.feature1Title',
      descKey: 'why.feature1Desc',
    },
    {
      icon: Clock,
      titleKey: 'why.feature2Title',
      descKey: 'why.feature2Desc',
    },
    {
      icon: Award,
      titleKey: 'why.feature3Title',
      descKey: 'why.feature3Desc',
    },
    {
      icon: DollarSign,
      titleKey: 'why.feature4Title',
      descKey: 'why.feature4Desc',
    },
  ]

  return (
    <section className="bg-gray-50 py-24 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="rounded-[30px] border-2 border-orange-500 p-1 shadow-lg">
            <img
              src="/get_your_quote.png"
              alt="Technician showing repaired device"
              className="w-full rounded-[26px] object-cover aspect-[4/3]"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div>
            <span className="section-label">{t('why.title').toUpperCase()}</span>
            <h2 className="mt-4 text-[clamp(28px,3.5vw,42px)] font-bold text-gray-900 leading-tight">
              {t('why.subtitle')}
            </h2>
            <p className="mt-4 text-base text-gray-500 leading-relaxed">
              {t('why.description')}
            </p>

            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="mt-6 inline-block bg-orange-500 text-white px-5 py-2.5 sm:px-8 sm:py-3.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 hover:bg-orange-600"
            >
              {t('why.button')}
            </a>

            {/* Features grid */}
            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <div
                    key={feature.titleKey}
                    className="bg-white rounded-xl p-6 border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <Icon size={32} className="text-orange-500" />
                    <h4 className="mt-3 text-base font-semibold text-gray-900">{t(feature.titleKey)}</h4>
                    <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">{t(feature.descKey)}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
