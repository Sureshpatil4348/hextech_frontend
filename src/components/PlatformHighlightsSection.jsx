import { Activity, Globe2, LayoutTemplate, ShieldCheck } from 'lucide-react'
import React from 'react'

const highlights = [
  {
    icon: LayoutTemplate,
    title: 'One login, every tool',
    description: 'Launch TradingView, currency strength meters, market sessions and indicator dashboards inside one curated workspace.',
    pills: ['TradingView embedded', 'Session map', 'Cross-asset watchlists']
  },
  {
    icon: Activity,
    title: 'Core analysis engine',
    description: 'Seven institutional indicators sync across multiple timeframes to reveal clean buy & sell consensus instantly.',
    pills: ['Multi-timeframe logic', 'Volatility aware', 'Actionable sentiment']
  },
  {
    icon: ShieldCheck,
    title: 'Risk mastered in minutes',
    description: 'FX, crypto and commodity calculators transform lot sizes, stop-losses and exposure into crystal clear decisions.',
    pills: ['Lot & risk calculators', 'Position sizing automation', 'P&L projections']
  },
  {
    icon: Globe2,
    title: 'Global intelligence feed',
    description: 'Live economic news, geo alerts and indicator triggers sent straight to your inbox or device before the move happens.',
    pills: ['High-impact news alerts', 'Email + push notifications', 'Localized updates']
  }
]

const PlatformHighlightsSection = () => {
  return (
    <section id="suite-overview" className="py-20 px-4 md:px-6 w-full transition-colors duration-300">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#19235d] dark:text-white" style={{ fontFamily: 'Pier Sans, sans-serif' }}>
            Everything your trading desk needs in one <span className="text-emerald-500 dark:text-emerald-400">glassy control room</span>
          </h2>
          <p className="text-lg text-[#19235d]/80 dark:text-gray-300" style={{ fontFamily: 'Pier Sans, sans-serif' }}>
            HASHTAG unifies premium data, execution readiness and automation so you can react in seconds and plan with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {highlights.map(({ icon: Icon, title, description, pills }) => (
            <div
              key={title}
              className="relative overflow-hidden rounded-3xl bg-white/20 dark:bg-gray-900/20 backdrop-blur-xl border border-white/40 dark:border-gray-700/40 shadow-2xl p-8 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-emerald-200/20 dark:from-gray-800/40 dark:to-emerald-500/10" aria-hidden="true"></div>
              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-100 to-green-200 dark:from-emerald-900/40 dark:to-green-900/20 flex items-center justify-center shadow-lg">
                  <Icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-2xl font-semibold text-[#19235d] dark:text-white" style={{ fontFamily: 'Pier Sans, sans-serif' }}>{title}</h3>
                <p className="text-[#19235d]/70 dark:text-gray-300 leading-relaxed" style={{ fontFamily: 'Pier Sans, sans-serif' }}>{description}</p>
                <div className="flex flex-wrap gap-2">
                  {pills.map(pill => (
                    <span
                      key={pill}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-white/60 dark:bg-gray-800/50 border border-white/40 dark:border-gray-700/50 text-[#19235d] dark:text-gray-100"
                      style={{ fontFamily: 'Pier Sans, sans-serif' }}
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PlatformHighlightsSection
