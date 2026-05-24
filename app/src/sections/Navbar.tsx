import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useLanguage } from '../contexts/LanguageContext'

export default function Navbar() {
  const { t } = useTranslation()
  const { language, toggleLanguage } = useLanguage()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navLinks = [
    { label: t('nav.home'), href: '#home', key: 'home' },
    { label: t('nav.about'), href: '#about', key: 'about' },
    { label: t('nav.services'), href: '#services', key: 'services' },
    { label: t('nav.contact'), href: '#contact', key: 'contact' },
  ]

  useEffect(() => {
    const sections = ['home', 'about', 'services', 'contact']
    const observers: IntersectionObserver[] = []

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setActiveSection(id)
          }
        },
        { threshold: 0.3 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => {
      observers.forEach((o) => o.disconnect())
    }
  }, [])

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`sticky top-0 z-50 h-[56px] sm:h-[72px] border-b-2 border-orange-500 bg-gradient-to-b from-white to-orange-50 transition-all duration-300 shadow-[0_2px_12px_rgba(234,126,53,0.1)]`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-8">
        {/* Logo - Visible on all sizes */}
        <a href="#home" onClick={() => scrollTo('#home')} className="flex items-center shrink-0">
          <img src="/logo.png" alt="AH Repairing" className="h-7 sm:h-12 w-auto" />
        </a>

        {/* Logo + Nav Group - Desktop only */}
        <div className="hidden lg:flex items-center gap-12 flex-1">
          {/* Desktop Nav */}
          <div className="flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                scrollTo(link.href)
              }}
              className={`text-sm font-medium transition-colors ${
                activeSection === link.key
                  ? 'text-orange-500 border-b-2 border-orange-500 pb-0.5'
                  : 'text-gray-700 hover:text-orange-500'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
        </div>

        {/* Right side: Language Switcher + CTA */}
        <div className="flex lg:hidden items-center gap-3 ml-auto">
          {/* Mobile Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center justify-center gap-1 px-2 py-1 rounded-lg border-2 border-orange-500 hover:bg-orange-50 transition-all duration-300"
            title={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
          >
            {language === 'ar' ? (
              <>
                <img src="/united-kingdom.png" alt="English" className="w-4 h-4 object-contain" />
                <span className="text-orange-500 font-bold text-xs">EN</span>
              </>
            ) : (
              <>
                <img src="/saudi-flag.png" alt="Arabic" className="w-4 h-4 object-contain" />
                <span className="text-orange-500 font-bold text-xs">AR</span>
              </>
            )}
          </button>
        </div>

        {/* Right side: Language Switcher + CTA - Desktop */}
        <div className="hidden lg:flex items-center gap-4 ml-auto">
          {/* Language Switcher with Flag Icons */}
          <button
            onClick={toggleLanguage}
            className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border-2 border-orange-500 hover:bg-orange-50 transition-all duration-300 hover:border-orange-600"
            title={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
          >
            {language === 'ar' ? (
              <>
                <img src="/united-kingdom.png" alt="English" className="w-5 h-5 object-contain" />
                <span className="text-orange-500 font-bold text-xs">EN</span>
              </>
            ) : (
              <>
                <img src="/saudi-flag.png" alt="العربية" className="w-5 h-5 object-contain" />
                <span className="text-orange-500 font-bold text-xs">AR</span>
              </>
            )}
          </button>

          {/* CTA */}
          <a
            href="tel:+966541638686"
            className="text-orange-500 px-7 py-3 rounded-lg text-[18px] font-semibold transition-all duration-300 hover:text-orange-600 inline-flex items-center gap-2"
          >
            <Phone size={22} />
            {t('nav.phone')}
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} className="text-gray-700" /> : <Menu size={24} className="text-gray-700" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-[56px] sm:top-[72px] left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollTo(link.href)
                }}
                className="text-sm font-medium text-gray-700 hover:text-orange-500 py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
            
            <a
              href="tel:+966541638686"
              className="bg-orange-500 text-white px-7 py-3 rounded-lg text-sm font-semibold text-center mt-2 transition-all duration-300 hover:bg-orange-600"
            >
              {t('nav.phone')}
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
