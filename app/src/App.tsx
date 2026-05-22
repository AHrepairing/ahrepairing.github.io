import TopBar from './sections/TopBar'
import Navbar from './sections/Navbar'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import ServicesSection from './sections/ServicesSection'
import ServiceMarquee from './sections/ServiceMarquee'
import HowWeWorkSection from './sections/HowWeWorkSection'
import StatsSection from './sections/StatsSection'
import WhyChooseUsSection from './sections/WhyChooseUsSection'
import TestimonialsSection from './sections/TestimonialsSection'
import CTABannerSection from './sections/CTABannerSection'
import FooterSection from './sections/FooterSection'
import FloatingButtons from './sections/FloatingButtons'
import TermsNotificationModal from './components/TermsNotificationModal'

export default function App() {
  return (
    <div className="min-h-screen">
      <TermsNotificationModal />
      <TopBar />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ServiceMarquee />
      <HowWeWorkSection />
      <StatsSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CTABannerSection />
      <FooterSection />
      <FloatingButtons />
    </div>
  )
}
