import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export default function TermsNotificationModal() {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check if user has already seen the modal in this session
    const hasSeenModal = sessionStorage.getItem('termsNotificationSeen')
    if (!hasSeenModal) {
      // Show modal on first visit of the session
      setIsOpen(true)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    // Mark that user has seen the modal in this session (resets when browser closes)
    sessionStorage.setItem('termsNotificationSeen', 'true')
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm" onClick={handleClose} />

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-sm sm:max-w-md md:max-w-lg px-4">
        <div className="bg-white rounded-xl shadow-2xl border-2 border-orange-500 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-4 sm:px-6 py-3 sm:py-4">
            <h2 className="text-lg sm:text-xl font-bold text-white">{t('modal.title')}</h2>
          </div>

          {/* Content */}
          <div className="px-4 sm:px-6 py-4 sm:py-5 max-h-[55vh] sm:max-h-[50vh] overflow-y-auto">
            <div className="space-y-2 sm:space-y-3 text-gray-700 leading-relaxed">
              <p className="text-sm sm:text-base font-semibold text-gray-900">
                {t('modal.welcome')}
              </p>

              <div className="bg-orange-100 border-l-4 border-orange-500 rounded-lg p-2 sm:p-3">
                <p className="text-xs sm:text-sm font-bold text-orange-700">
                  {t('modal.chargeTitle')}
                </p>
                <p className="text-[11px] sm:text-xs text-orange-700 mt-1">
                  {t('modal.chargeDesc')}
                </p>
              </div>

              <div className="space-y-1.5 sm:space-y-2 text-[11px] sm:text-xs">
                <p>
                  <strong>{t('modal.privacyTitle')}</strong> {t('modal.privacyDesc')}
                </p>
                <p>
                  <strong>{t('modal.warrantyTitle')}</strong> {t('modal.warrantyDesc')}
                </p>
                <p>
                  <strong>{t('modal.liabilityTitle')}</strong> {t('modal.liabilityDesc')}
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-4 sm:px-6 py-2.5 sm:py-3 border-t border-gray-200 flex gap-2">
            <button
              onClick={handleClose}
              className="flex-1 bg-orange-500 text-white px-3 sm:px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 hover:bg-orange-600 active:scale-95"
            >
              {t('modal.agree')}
            </button>
            <button
              onClick={handleClose}
              className="px-3 sm:px-4 py-2 text-gray-700 border-2 border-gray-300 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 hover:border-gray-400"
            >
              {t('modal.close')}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
