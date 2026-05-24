import { useState } from 'react'
import { MapPin, Mail, Clock, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function FooterSection() {
  const { t } = useTranslation()
  const [email, setEmail] = useState('')
  const [showComingSoon, setShowComingSoon] = useState(false)
  const [comingSoonPlatform, setComingSoonPlatform] = useState('')

  const handleComingSoon = (platform: string, e: React.MouseEvent) => {
    e.preventDefault()
    setComingSoonPlatform(platform)
    setShowComingSoon(true)
  }

  const serviceLinks = [
    { label: t('services.acRepair'), titleKey: 'services.acRepair' },
    { label: t('services.washingMachineRepair'), titleKey: 'services.washingMachineRepair' },
    { label: t('services.ovenRepair'), titleKey: 'services.ovenRepair' },
    { label: t('services.fridgeRepair'), titleKey: 'services.fridgeRepair' },
    { label: t('services.tvRepair'), titleKey: 'services.tvRepair' },
    { label: t('services.dishwasherRepair'), titleKey: 'services.dishwasherRepair' },
  ]

  const companyLinks = [
    { label: t('footer.about'), href: '#about' },
    { label: t('footer.services'), href: '#services' },
    { label: t('footer.contact'), href: '#contact' },
  ]

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      alert(`Thank you for subscribing with: ${email}`)
      setEmail('')
    }
  }

  const scrollTo = (href: string) => {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
    <footer id="contact" className="bg-[#1A1A2E]">
      {/* Newsletter bar */}
      <div className="border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <img src="/logo.png" alt="AH Repairing" className="h-10 sm:h-14 w-auto" />
            </div>
            <div className="flex items-center gap-4 w-full lg:w-auto">
              <span className="text-white font-semibold whitespace-nowrap hidden sm:block">{t('footer.subscribeNewsletter')}</span>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full lg:w-auto">
                <input
                  type="email"
                  placeholder={t('footer.emailPlaceholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full sm:flex-1 lg:w-64 bg-white rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-orange-500 text-white px-5 py-2 sm:px-6 sm:py-3 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 hover:bg-orange-600 whitespace-nowrap"
                >
                  {t('footer.subscribe')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand column */}
          <div>
            <div className="mb-5">
              <img src="/logo.png" alt="AH Repairing" className="h-12 w-auto" />
            </div>
            <div className="space-y-3">
              <a
                href="https://www.google.com/maps/place/Jeddah,+Saudi Arabia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-orange-500 transition-colors"
              >
                <MapPin size={16} className="shrink-0" />
                Jeddah, Saudi Arabia
              </a>
              <a
                href="https://www.google.com/maps/place/Jeddah,+Saudi Arabia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm text-orange-500 hover:underline"
              >
                {t('footer.googleMap')}
              </a>
              <a
                href="mailto:ahrepairing10@gmail.com"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-orange-500 transition-colors"
              >
                <Mail size={16} className="shrink-0" />
                ahrepairing10@gmail.com
              </a>
              <span className="flex items-center gap-2 text-sm text-white/60">
                <Clock size={16} className="shrink-0" />
                {t('footer.openHours')}
              </span>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-5">
              <a href="https://wa.me/+966541638686" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-white/50 hover:text-orange-500 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a href="#" onClick={(e) => handleComingSoon('Facebook', e)} aria-label="Facebook" className="text-white/50 hover:text-orange-500 transition-colors cursor-pointer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" onClick={(e) => handleComingSoon('Instagram', e)} aria-label="Instagram" className="text-white/50 hover:text-orange-500 transition-colors cursor-pointer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* About column */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">{t('footer.about')}</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollTo(link.href)
                    }}
                    className="text-sm text-white/60 hover:text-orange-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services column */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">{t('footer.services')}</h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service.label}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="text-sm text-white/60 hover:text-orange-500 transition-colors"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Estimate column */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              {t('footer.estimateTitle')}
            </h4>
            <p className="text-sm text-white/60 mb-4">{t('footer.estimateSubtitle')}</p>
            <a
              href="tel:+966541638686"
              className="block text-lg sm:text-2xl font-bold text-white hover:text-orange-500 transition-colors mb-5"
            >
              +966541638686
            </a>
            <a
              href="https://wa.me/+966541638686"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 hover:bg-orange-600"
            >
              {t('footer.requestEstimate')}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[13px] text-white/40">
            &copy; 2025 AH Repairing. {t('footer.copyright')}
          </p>
          <div className="flex gap-4 text-[13px] text-white/40">
            <a href="#" className="hover:text-orange-500 transition-colors">{t('footer.privacy')}</a>
            <span>&middot;</span>
            <a href="#" className="hover:text-orange-500 transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>

      {/* Coming Soon Modal */}
      {showComingSoon && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowComingSoon(false)}>
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Coming Soon!</h2>
              <button onClick={() => setShowComingSoon(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                <X size={24} />
              </button>
            </div>
            <div className="mb-6">
              <div className="text-5xl mb-4 text-center">🚀</div>
              <p className="text-gray-600 text-center mb-2">
                We're launching our <span className="font-bold text-orange-500">{comingSoonPlatform}</span> page soon!
              </p>
              <p className="text-gray-500 text-sm text-center">Stay tuned for updates and exciting content.</p>
            </div>
            <button
              onClick={() => setShowComingSoon(false)}
              className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Got It!
            </button>
          </div>
        </div>
      )}
    </>
  )
}
