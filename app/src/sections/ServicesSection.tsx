import { useTranslation } from 'react-i18next'
import type { LucideIcon } from 'lucide-react'
import { Wrench } from 'lucide-react'

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
      icon: Wrench,
      category: 'Washing Machine',
      image: '/washing_machine.jpg',
      titleKey: 'services.washingMachineRepair',
      descKey: 'services.washingMachineDesc',
    },
    {
      icon: Wrench,
      category: 'Dishwasher',
      image: '/dishwasher2.jpg',
      titleKey: 'services.dishwasherRepair',
      descKey: 'services.dishwasherDesc',
    },
  ]

  const brands = [
    { name: 'Samsung', image: '/samsung.png' },
    { name: 'LG', image: '/LG_image.png' },
    { name: 'Whirlpool', image: '/whirlpool.png' },
    { name: 'Bosch', image: '/Bosch_image.png' },
    { name: 'Electrolux', image: '/Electrolux.png' },
    { name: 'Siemens', image: '/siemens_image.png' },
  ]

  return (
    <section id="services" className="bg-gray-50 py-24 lg:py-28">
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="section-label">{t('services.subtitle')}</span>
          <h2 className="mt-4 text-[clamp(28px,3.5vw,42px)] font-bold text-gray-900 leading-tight">
            {t('services.title')}
          </h2>
          <p className="mt-3 text-base text-gray-500 max-w-[700px] mx-auto">
            {t('services.description')}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {['Fast diagnosis', 'Same-day support', 'Genuine parts'].map((item) => (
            <div
              key={item}
              className="rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-10">
          {services.map((service) => {
            return (
              <div
                key={service.titleKey}
                className="group overflow-hidden rounded-[24px] border border-gray-200 bg-white shadow-[0_10px_40px_rgba(15,23,42,0.06)] transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_22px_70px_rgba(15,23,42,0.14)]"
              >
                <div className="relative h-56 w-full overflow-hidden bg-gray-300">
                  <img
                    src={service.image}
                    alt={t(service.titleKey)}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block rounded-full bg-orange-500 px-3 py-1.5 text-xs font-semibold text-white">
                      {service.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900">{t(service.titleKey)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{t(service.descKey)}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16 rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm sm:p-10 lg:p-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900">{t('services.supportedBrandsTitle')}</h3>
            <p className="mt-2 text-sm text-gray-600">{t('services.supportedBrandsDescription')}</p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {brands.map((brand) => (
              <div key={brand.name} className="rounded-2xl border border-gray-200 bg-gray-50 p-6 text-center">
                <div className="flex h-24 items-center justify-center rounded-xl border border-gray-200 bg-white p-4">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <p className="mt-3 text-sm font-semibold text-gray-700">{brand.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
