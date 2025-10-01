import { Calculator, LineChart, Radar, TimerReset } from 'lucide-react'
import React from 'react'

const toolColumns = [
  {
    title: 'Pro charting stack',
    description: 'TradingView, multi-timeframe indicators and depth analysis curated for forex, crypto and commodities.',
    items: [
      'Institutional templates ready to load',
      'Indicator confluence heatmaps',
      'Core analysis across 6+ timeframes'
    ],
    accent: 'from-[#19235d] via-[#1f2b6d] to-[#23307a]'
  },
  {
    title: 'Market timing intelligence',
    description: 'Plan every entry with live session overlays, liquidity windows and currency strength rotations.',
    items: [
      'Dynamic global session clock',
      'Currency strength meter 24/5',
      'Real-time news wall & impact filters'
    ],
    accent: 'from-emerald-500 via-green-500 to-emerald-600'
  },
  {
    title: 'Risk & automation lab',
    description: 'Automated calculators, trigger-based alerts and workflows that email you before conditions align.',
    items: [
      'Lot size, stop-loss & risk-per-trade calculators',
      'Indicator + news alert routing to email and SMS',
      'Custom rule builder for indicator stacks'
    ],
    accent: 'from-blue-500 via-sky-500 to-cyan-500'
  }
]

const iconMap = {
  'Pro charting stack': LineChart,
  'Market timing intelligence': TimerReset,
  'Risk & automation lab': Calculator
}

const ToolsetShowcaseSection = () => {
  return (
    <section className="py-20 px-4 md:px-6 w-full transition-colors duration-300">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {toolColumns.map(({ title, description, items, accent }) => {
            const Icon = iconMap[title] || Radar

            return (
              <div key={title} className="flex flex-col h-full">
                <div className={`rounded-3xl p-8 shadow-2xl bg-gradient-to-br ${accent} text-white relative overflow-hidden`}> 
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.6)_0,_transparent_60%)]" aria-hidden="true"></div>
                  <div className="relative z-10 space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-semibold" style={{ fontFamily: 'Pier Sans, sans-serif' }}>{title}</h3>
                    <p className="text-white/80 leading-relaxed" style={{ fontFamily: 'Pier Sans, sans-serif' }}>{description}</p>
                  </div>
                </div>

                <div className="mt-4 flex-1 rounded-3xl bg-white/70 dark:bg-gray-900/60 backdrop-blur border border-white/40 dark:border-gray-700/40 p-6 shadow-xl" style={{ fontFamily: 'Pier Sans, sans-serif' }}>
                  <ul className="space-y-3 text-[#19235d]/80 dark:text-gray-200">
                    {items.map(item => (
                      <li key={item} className="flex items-start">
                        <Radar className="w-4 h-4 mt-1 mr-3 text-emerald-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ToolsetShowcaseSection
