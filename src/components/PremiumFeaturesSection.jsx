import React from 'react'
import { 
  TrendingUp, 
  Newspaper, 
  Gauge, 
  Bell, 
  BarChart3, 
  Calculator,
  Globe,
  Mail
} from 'lucide-react'

const PremiumFeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: TrendingUp,
      title: "Advanced TradingView Integration",
      description: "Access professional-grade charting tools with no software installation required. Trade directly from your browser with real-time data.",
      color: "from-blue-500 to-blue-600",
      iconBg: "bg-blue-500/10 dark:bg-blue-500/20",
      iconColor: "text-blue-600 dark:text-blue-400"
    },
    {
      id: 2,
      icon: Newspaper,
      title: "Live News Updates",
      description: "Stay ahead of market movements with real-time financial news aggregated from trusted sources worldwide.",
      color: "from-emerald-500 to-emerald-600",
      iconBg: "bg-emerald-500/10 dark:bg-emerald-500/20",
      iconColor: "text-emerald-600 dark:text-emerald-400"
    },
    {
      id: 3,
      icon: Gauge,
      title: "Currency Strength Meter",
      description: "Identify the strongest and weakest currencies in real-time to make informed trading decisions.",
      color: "from-purple-500 to-purple-600",
      iconBg: "bg-purple-500/10 dark:bg-purple-500/20",
      iconColor: "text-purple-600 dark:text-purple-400"
    },
    {
      id: 4,
      icon: Bell,
      title: "Smart News Alerts",
      description: "Get instant notifications for high-impact news events and indicator signals directly via email.",
      color: "from-orange-500 to-orange-600",
      iconBg: "bg-orange-500/10 dark:bg-orange-500/20",
      iconColor: "text-orange-600 dark:text-orange-400"
    },
    {
      id: 5,
      icon: BarChart3,
      title: "Multi-Indicator Analysis",
      description: "6-7 powerful indicators analyzed across multiple timeframes for comprehensive market insights.",
      color: "from-pink-500 to-pink-600",
      iconBg: "bg-pink-500/10 dark:bg-pink-500/20",
      iconColor: "text-pink-600 dark:text-pink-400"
    },
    {
      id: 6,
      icon: Calculator,
      title: "Trading Calculators",
      description: "Professional tools to calculate position size, stop loss, and risk for Forex, Crypto, and Commodities.",
      color: "from-cyan-500 to-cyan-600",
      iconBg: "bg-cyan-500/10 dark:bg-cyan-500/20",
      iconColor: "text-cyan-600 dark:text-cyan-400"
    },
    {
      id: 7,
      icon: Globe,
      title: "Global Market Sessions",
      description: "Track all major market sessions worldwide - London, New York, Tokyo, and Sydney in real-time.",
      color: "from-indigo-500 to-indigo-600",
      iconBg: "bg-indigo-500/10 dark:bg-indigo-500/20",
      iconColor: "text-indigo-600 dark:text-indigo-400"
    },
    {
      id: 8,
      icon: Mail,
      title: "Email Notifications",
      description: "Receive all important alerts, news, and signals directly to your inbox - never miss an opportunity.",
      color: "from-green-500 to-green-600",
      iconBg: "bg-green-500/10 dark:bg-green-500/20",
      iconColor: "text-green-600 dark:text-green-400"
    }
  ]

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 w-full transition-colors duration-300">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header with Glassy Effect */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-full px-6 py-3 shadow-lg">
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider">
                All-in-One Trading Platform
              </span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Everything You Need in{' '}
            <span className="bg-gradient-to-r from-emerald-600 via-green-500 to-emerald-600 dark:from-emerald-400 dark:via-green-400 dark:to-emerald-500 bg-clip-text text-transparent">
              One Place
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive trading platform designed for traders in Dubai and worldwide. 
            Access professional tools, real-time data, and intelligent alerts - all from a single dashboard.
          </p>
        </div>

        {/* Features Grid with Enhanced Glassy Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.id}
              className="group relative"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Glassy Card with Premium Effects */}
              <div className="relative h-full bg-white/40 dark:bg-gray-800/40 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                
                {/* Gradient Border Glow on Hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}></div>
                
                {/* Icon Container with Glassy Effect */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-2xl ${feature.iconBg} backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <feature.icon className={`w-8 h-8 ${feature.iconColor} transition-colors duration-300`} />
                  </div>
                  
                  {/* Decorative Glow */}
                  <div className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-500`}></div>
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-green-600 dark:group-hover:from-emerald-400 dark:group-hover:to-green-400 group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>

                {/* Decorative Bottom Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-3xl`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA with Glassy Effect */}
        <div className="mt-16 text-center">
          <div className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-3xl p-8 md:p-12 shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Ready to Transform Your Trading?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
              Join hundreds of successful traders using our all-in-one platform
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#subscription"
                className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Get Started Now</span>
                <TrendingUp className="w-5 h-5" />
              </a>
              <a 
                href="#video-explanation"
                className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 text-gray-900 dark:text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Watch Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PremiumFeaturesSection
