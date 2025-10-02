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
    <section id="features" className="py-14 md:py-16 px-4 md:px-6 w-full transition-colors duration-300 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-full px-6 py-3 shadow-lg">
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider">
                Why Choose Us
              </span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900 dark:text-white transition-colors duration-300">
            Why Our <span className="bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent">Trading Platform</span> Works
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Built by traders, for traders - with features that actually matter
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
          {systemFeatures.map((feature, index) => (
            <div
              key={feature.id}
              className="group bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-3xl shadow-xl dark:shadow-gray-900/50 p-6 sm:p-7 feature-card hover:shadow-2xl dark:hover:shadow-gray-900/70 transition-all duration-500 ease-in-out border border-white/30 dark:border-gray-700/30 transform hover:scale-105 hover:-translate-y-2"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 dark:from-emerald-500/30 dark:to-green-500/30 flex items-center justify-center mb-4 sm:mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-500">
                <feature.icon className="w-8 h-8 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-gray-900 dark:text-white transition-all duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed transition-colors duration-300">
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
