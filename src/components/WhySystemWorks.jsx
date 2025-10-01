import {
  BarChart4,
  Compass,
  LayoutGrid,
  RadioTower
} from 'lucide-react'
import React from 'react'

const WhySystemWorks = () => {
  const systemFeatures = [
    {
      id: 1,
      icon: LayoutGrid,
      title: 'Unified trading command center',
      description: 'TradingView charts, market sessions, news feeds and calculators live inside one synchronized interface.'
    },
    {
      id: 2,
      icon: BarChart4,
      title: 'Institutional-grade analysis',
      description: 'Seven indicators across multiple timeframes produce clean buy/sell consensus for confident decisions.'
    },
    {
      id: 3,
      icon: Compass,
      title: 'Precision risk framework',
      description: 'Automated stop-loss, lot size and exposure calculations for forex, crypto and commodities in seconds.'
    },
    {
      id: 4,
      icon: RadioTower,
      title: 'Always-on intelligence',
      description: 'High-impact news, indicator alignment and session overlaps trigger proactive alerts to your inbox.'
    }
  ]

  return (
    <section id="features" className="py-16 md:py-20 px-4 md:px-6 w-full transition-colors duration-300" style={{fontFamily: 'Pier Sans, sans-serif'}}>
      
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-medium text-center mb-10 md:mb-16 text-gray-900 dark:text-white transition-colors duration-300" style={{fontFamily: 'Pier Sans, sans-serif'}}>
          Why Our <span className="text-green-500 dark:text-green-400">Trading System</span> Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center">
          {systemFeatures.map((feature) => (
            <div key={feature.id} className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-lg dark:shadow-gray-900/50 p-6 feature-card hover:shadow-xl dark:hover:shadow-gray-900/70 transition-all duration-500 ease-in-out border border-gray-200/50 dark:border-gray-700/50 transform hover:scale-105">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/30 flex items-center justify-center mb-6 mx-auto shadow-md">
                <feature.icon className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-medium text-center mb-4 text-gray-900 dark:text-white transition-colors duration-300" style={{fontFamily: 'Pier Sans, sans-serif'}}>{feature.title}</h3>
              <p className="text-[#19235d] dark:text-gray-300 text-center leading-relaxed transition-colors duration-300">
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
