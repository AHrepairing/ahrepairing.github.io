import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface FAQItem {
  questionKey: string
  answerKey: string
}

const faqItems: FAQItem[] = [
  { questionKey: 'faq.q1', answerKey: 'faq.a1' },
  { questionKey: 'faq.q2', answerKey: 'faq.a2' },
  { questionKey: 'faq.q3', answerKey: 'faq.a3' },
  { questionKey: 'faq.q4', answerKey: 'faq.a4' },
  { questionKey: 'faq.q5', answerKey: 'faq.a5' },
  { questionKey: 'faq.q6', answerKey: 'faq.a6' },
  { questionKey: 'faq.q7', answerKey: 'faq.a7' },
]

export default function FAQSection() {
  const { t } = useTranslation()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="bg-white py-24 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-label">{t('faq.label')}</span>
          <h2 className="mt-4 text-[clamp(28px,3.5vw,42px)] font-bold text-gray-900 leading-tight">
            {t('faq.title')}
          </h2>
          <p className="mt-3 text-base text-gray-500 max-w-[600px] mx-auto">
            {t('faq.subtitle')}
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-[800px] mx-auto space-y-3">
          {faqItems.map((item, index) => (
            <div
              key={item.questionKey}
              className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
                aria-expanded={openIndex === index}
              >
                <span className="text-base font-semibold text-gray-900">
                  {t(item.questionKey)}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-orange-500 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-5 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {t(item.answerKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
