import {
  Bot,
  Monitor,
  Shield,
  TrendingUp
} from 'lucide-react'
import React from 'react'

const WhySystemWorks = () => {
  const systemFeatures = [
    {
      id: 1,
      icon: Bot,
      title: "AI First Approach",
      description: "Have an AI first approach to trading to maximize your profits"
    },
    {
      id: 2,
      icon: TrendingUp,
      title: "Adapts to All Markets",
      description: "Uses AI to adapt to all markets and identify trends and opportunities"
    },
    {
      id: 3,
      icon: Shield,
      title: "All in one trading platform",
      description: "All in one trading platform to maximize your profits"
    },
    {
      id: 4,
      icon: Monitor,
      title: "Signal Alerts",
      description: "Get instant notifications for high-impact news events and indicator signals directly via email"
    }
  ]

  return (
    <section id="features" className="py-10 sm:py-12 md:py-14 lg:py-16 px-4 md:px-6 w-full transition-colors duration-300 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center mb-4 sm:mb-6">
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg">
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent font-semibold text-xs sm:text-sm uppercase tracking-wider">
                Why Choose Us
              </span>
            </div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-6 text-gray-900 dark:text-white transition-colors duration-300 px-4">
            Why Our <span className="bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent">Trading Platform</span> Works
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Built by traders, for traders - with features that actually matter
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {systemFeatures.map((feature, index) => (
            <div
              key={feature.id}
              className="group bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-xl dark:shadow-gray-900/50 p-5 sm:p-6 md:p-7 feature-card hover:shadow-2xl dark:hover:shadow-gray-900/70 transition-all duration-500 ease-in-out border border-white/30 dark:border-gray-700/30 transform hover:scale-105 hover:-translate-y-2"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 dark:from-emerald-500/30 dark:to-green-500/30 flex items-center justify-center mb-3 sm:mb-4 md:mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-500">
                <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-center mb-2 sm:mb-3 md:mb-4 text-gray-900 dark:text-white transition-all duration-300">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 text-center leading-relaxed transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhySystemWorks
