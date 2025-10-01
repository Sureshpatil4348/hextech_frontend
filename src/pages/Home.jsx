import React from 'react'

import { useAuth } from '../auth/AuthProvider'
import FAQSection from '../components/FAQSection'
import HeroSection from '../components/HeroSection'
import InteractiveFooter from '../components/InteractiveFooter'
import Navbar from '../components/Navbar'
import PsychologicalBenefitsSection from '../components/PsychologicalBenefitsSection'
import SubscriptionSection from '../components/SubscriptionSection'
import VideoExplanationSection from '../components/VideoExplanationSection'
import WhySystemWorks from '../components/WhySystemWorks'
import TradingToolsShowcase from '../components/TradingToolsShowcase'
import PremiumFeaturesSection from '../components/PremiumFeaturesSection'


const Home = () => {
  const { user: _user } = useAuth()

  // Allow users to access home page even when logged in

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-900 transition-colors duration-300">
      {/* Professional Trading Background Elements */}
      <div className="absolute inset-0">
        
        {/* Subtle Geometric Grid - Dark Mode */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}></div>
        </div>
        
        {/* Subtle Geometric Grid - Light Mode */}
        <div className="absolute inset-0 opacity-[0.05] dark:opacity-0">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}></div>
        </div>
        
        {/* Professional Gradient Overlays - Dark Mode */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-slate-800/20 via-transparent to-transparent dark:block hidden"></div>
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-slate-800/20 via-transparent to-transparent dark:block hidden"></div>
        
        {/* Professional Gradient Overlays - Light Mode */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/30 via-transparent to-transparent block dark:hidden"></div>
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-white/30 via-transparent to-transparent block dark:hidden"></div>
        
        {/* Subtle Trading Pattern - Dark Mode */}
        <div className="absolute inset-0 opacity-[0.02] dark:block hidden">
          <div className="w-full h-full" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(34, 197, 94, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 60%, rgba(107, 114, 128, 0.1) 0%, transparent 50%)
            `,
            backgroundSize: '400px 400px, 600px 600px, 500px 500px',
            backgroundPosition: '0% 0%, 100% 100%, 50% 50%'
          }}></div>
        </div>
        
        {/* Subtle Trading Pattern - Light Mode */}
        <div className="absolute inset-0 opacity-[0.03] block dark:hidden">
          <div className="w-full h-full" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(34, 197, 94, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 40% 60%, rgba(107, 114, 128, 0.05) 0%, transparent 50%)
            `,
            backgroundSize: '400px 400px, 600px 600px, 500px 500px',
            backgroundPosition: '0% 0%, 100% 100%, 50% 50%'
          }}></div>
        </div>
        
        {/* Professional Corner Accents - Dark Mode */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-emerald-500/5 via-transparent to-transparent dark:block hidden"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/5 via-transparent to-transparent dark:block hidden"></div>
        
        {/* Professional Corner Accents - Light Mode */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-emerald-500/10 via-transparent to-transparent block dark:hidden"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/10 via-transparent to-transparent block dark:hidden"></div>
      </div>

      <div className="relative z-10 w-full">
        <Navbar />
        
        {/* Hero Section */}
        <div id="hero">
          <HeroSection />
        </div>

        {/* Premium Features Highlight */}
        <div id="premium-features">
          <PremiumFeaturesSection />
        </div>

        {/* Trading Tools Showcase */}
        <div id="trading-tools">
          <TradingToolsShowcase />
        </div>

        {/* Why Our Trading System Works Section */}
        <div id="why-system-works">
          <WhySystemWorks />
        </div>

        {/* Video Explanation Section */}
        <div id="video-explanation">
          <VideoExplanationSection />
        </div>

        {/* Psychological Benefits Section */}
        <div id="psychological-benefits">
          <PsychologicalBenefitsSection />
        </div>

        {/* Subscription Section */}
        <div id="subscription">
          <SubscriptionSection />
        </div>

        {/* FAQ Section */}
        <div id="faq">
          <FAQSection />
        </div>

        {/* Interactive Footer */}
        <InteractiveFooter />
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-100 dark:from-gray-900 to-transparent transition-colors duration-300"></div>
      
    </div>
  )
}

export default Home
