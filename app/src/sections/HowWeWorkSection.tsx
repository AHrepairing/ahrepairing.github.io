import { MessageCircle, Search, Wrench, CheckCircle } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface Step {
  number: number
  icon: LucideIcon
  titleKey: string
  descKey: string
}

export default function HowWeWorkSection() {
  const { t } = useTranslation()

  const steps: Step[] = [
    {
      number: 1,
      icon: MessageCircle,
      titleKey: 'howWeWork.step1',
      descKey: 'howWeWork.step1Desc',
    },
    {
      number: 2,
      icon: Search,
      titleKey: 'howWeWork.step2',
      descKey: 'howWeWork.step2Desc',
    },
    {
      number: 3,
      icon: Wrench,
      titleKey: 'howWeWork.step3',
      descKey: 'howWeWork.step3Desc',
    },
    {
      number: 4,
      icon: CheckCircle,
      titleKey: 'howWeWork.step4',
      descKey: 'howWeWork.step4Desc',
    },
  ]

  return (
    <section id="how-it-works" className="bg-white py-24 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <span className="section-label">{t('howWeWork.subtitle')}</span>
          <h2 className="mt-4 text-[clamp(28px,3.5vw,42px)] font-bold text-gray-900 leading-tight">
            {t('howWeWork.title')}
          </h2>
          <p className="mt-3 text-base text-gray-500 max-w-[600px] mx-auto">
            {t('howWeWork.description')}
          </p>
        </div>

        {/* Steps */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 relative">
          {/* Connecting line - desktop only */}
          <div className="hidden lg:block absolute top-6 left-[12.5%] right-[12.5%] h-px border-t border-dashed border-gray-300" />

          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="relative text-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto text-white text-xl font-bold">
                  {step.number}
                </div>
                <Icon size={40} className="mx-auto mt-5 text-[#1A1A2E]" />
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{t(step.titleKey)}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{t(step.descKey)}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
