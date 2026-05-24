import { MapPin } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const areas = [
  'Al Rawdah', 'Al Salamah', 'Al Hamra', 'Al Nuzha', 'Al Aziziyah',
  'Al Faisaliyah', 'Al Zahra', 'Al Rabwah', 'Al Safa', 'Al Bawadi',
  'Obhur', 'Corniche', 'Al Shati', 'Al Andalus', 'Al Naeem',
  'Al Worood', 'Al Rehab', 'Al Ruwais', 'Al Balad', 'Al Murjan',
]

export default function ServiceAreaSection() {
  const { t } = useTranslation()

  return (
    <section className="bg-[#1A1A2E] py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-orange-500 mb-4">
            {t('area.label')}
          </span>
          <h2 className="text-[clamp(24px,3vw,36px)] font-bold text-white leading-tight">
            {t('area.title')}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/70 max-w-[600px] mx-auto">
            {t('area.subtitle')}
          </p>
        </div>

        {/* Area tags */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {areas.map((area) => (
            <div
              key={area}
              className="flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 rounded-full px-4 py-2 text-sm font-medium hover:bg-orange-500/20 hover:border-orange-500/50 transition-colors duration-200"
            >
              <MapPin size={13} className="text-orange-400 flex-shrink-0" />
              <span>{area}</span>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <p className="text-center mt-8 text-white/50 text-sm">
          {t('area.note')}
        </p>
      </div>
    </section>
  )
}
