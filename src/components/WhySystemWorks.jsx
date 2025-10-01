import { 
  Bot, 
  TrendingUp, 
  Shield, 
  Monitor
} from 'lucide-react'
import React from 'react'

const WhySystemWorks = () => {
  const systemFeatures = [
    {
      id: 1,
      icon: Bot,
      title: "Fully Automated",
      description: "Set it once and let it work 24/7. No need to watch charts all day."
    },
    {
      id: 2,
      icon: TrendingUp,
      title: "Adapts to All Markets",
      description: "Uses ATR (Average True Range) to adjust to market volatility automatically."
    },
    {
      id: 3,
      icon: Shield,
      title: "Built-in Protection",
      description: "Smart stop-loss and take-profit settings protect your capital."
    },
    {
      id: 4,
      icon: Monitor,
      title: "Easy Setup",
      description: "Install in 5 minutes with our step-by-step video guide."
    }
  ]

  return (
    <section id="features" className="py-16 md:py-24 px-4 md:px-6 w-full transition-colors duration-300 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {systemFeatures.map((feature, index) => (
            <div 
              key={feature.id} 
              className="group bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-3xl shadow-xl dark:shadow-gray-900/50 p-8 feature-card hover:shadow-2xl dark:hover:shadow-gray-900/70 transition-all duration-500 ease-in-out border border-white/30 dark:border-gray-700/30 transform hover:scale-105 hover:-translate-y-2"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Gradient Glow on Hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-500 to-green-500 opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10"></div>
              
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 dark:from-emerald-500/30 dark:to-green-500/30 flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-500">
                <feature.icon className="w-8 h-8 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-green-600 dark:group-hover:from-emerald-400 dark:group-hover:to-green-400 group-hover:bg-clip-text transition-all duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed transition-colors duration-300">
                {feature.description}
              </p>

              {/* Decorative Bottom Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-3xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhySystemWorks
