import { Trophy, Headphones } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function AboutSection() {
  const { t } = useTranslation()
  
  return (
    <section id="about" className="bg-white py-24 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="/about-image.png"
              alt="Technician repairing a smartphone"
              className="w-full rounded-xl object-contain shadow-lg"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div>
            <span className="section-label">{t('about.title')}</span>
            <h2 className="mt-4 text-[clamp(28px,3.5vw,42px)] font-bold text-gray-900 leading-tight">
              {t('about.title')}
            </h2>
            <p className="mt-5 text-base text-gray-600 leading-relaxed">
              {t('about.description')}
            </p>

            {/* Feature cards */}
            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <Trophy size={32} className="text-orange-500" />
                <h4 className="mt-3 text-base font-semibold text-gray-900">{t('about.expertise')}</h4>
                <p className="mt-1.5 text-sm text-gray-500">
                  {t('about.expertise')}
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <Headphones size={32} className="text-orange-500" />
                <h4 className="mt-3 text-base font-semibold text-gray-900">{t('about.quality')}</h4>
                <p className="mt-1.5 text-sm text-gray-500">
                  {t('about.quality')}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
