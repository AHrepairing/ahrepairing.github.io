import { useTranslation } from 'react-i18next'
import type { LucideIcon } from 'lucide-react'
import { Wind, Flame, UtensilsCrossed, Refrigerator } from 'lucide-react'

interface Service {
  icon: LucideIcon
  category: string
  image: string
  titleKey: string
  descKey: string
}

export default function ServicesSection() {
  const { t } = useTranslation()

  const services: Service[] = [
    {
      icon: Wind,
      category: 'AC',
      image: '/Benefits_of_AC.png',
      titleKey: 'services.acRepair',
      descKey: 'services.acDesc',
    },
    {
      icon: Refrigerator,
      category: 'Washing',
      image: '/washing_machine.jpg',
      titleKey: 'services.washingMachineRepair',
      descKey: 'services.washingMachineDesc',
    },
    {
      icon: Flame,
      category: 'Oven',
      image: '/oven2.jpg',
      titleKey: 'services.ovenRepair',
      descKey: 'services.ovenDesc',
    },
    {
      icon: Refrigerator,
      category: 'Fridge',
      image: '/refrigenerator.jpg',
      titleKey: 'services.fridgeRepair',
      descKey: 'services.fridgeDesc',
    },
    {
      icon: Refrigerator,
      category: 'Dishwasher',
      image: '/dishwasher2.jpg',
      titleKey: 'services.dishwasherRepair',
      descKey: 'services.dishwasherDesc',
    },
    {
      icon: UtensilsCrossed,
      category: 'Kitchen',
      image: '/kitchen-appliances.jpg',
      titleKey: 'services.kitchenRepair',
      descKey: 'services.kitchenDesc',
    },
  ]

  return (
    <section id="services" className="bg-gray-50 py-24 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <span className="section-label">{t('services.subtitle')}</span>
          <h2 className="mt-4 text-[clamp(28px,3.5vw,42px)] font-bold text-gray-900 leading-tight">
            {t('services.title')}
          </h2>
          <p className="mt-3 text-base text-gray-500 max-w-[600px] mx-auto">
            {t('services.description')}
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            return (
              <div
                key={service.titleKey}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_20px_64px_rgba(0,0,0,0.12)] hover:border-transparent group"
              >
                {/* Image Container */}
                <div className="relative w-full h-48 overflow-hidden bg-gray-300">
                  <img
                    src={service.image}
                    alt={t(service.titleKey)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-orange-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                      {service.category}
                    </span>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900">{t(service.titleKey)}</h3>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-3 leading-relaxed">{t(service.descKey)}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
