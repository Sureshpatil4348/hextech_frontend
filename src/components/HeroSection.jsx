import { ArrowRight, BellRing, CalendarRange, LayoutDashboard, Sparkles } from 'lucide-react'
import React from 'react'

const heroStats = [
  {
    icon: LayoutDashboard,
    title: 'Unified Trading Workspace',
    description: 'TradingView charts, strength meters, sessions and analytics in one glassy dashboard.'
  },
  {
    icon: BellRing,
    title: 'Instant Intelligence',
    description: 'Email alerts for indicators, high-impact news and multi-timeframe conditions 24/7.'
  },
  {
    icon: CalendarRange,
    title: 'Global Market Coverage',
    description: 'Follow forex, crypto and commodities with tailored calculators and live session tracking.'
  }
]

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:pt-40 sm:pb-24 md:px-6 w-full transition-colors duration-300">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-6">
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-white/60 dark:bg-gray-800/60 backdrop-blur border border-white/40 dark:border-gray-700/50 shadow-lg text-sm font-medium text-[#19235d] dark:text-gray-200 transition-colors duration-300">
              <Sparkles className="w-4 h-4 mr-2 text-emerald-500" />
              Dubai-born all-in-one trading platform
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-[#19235d] dark:text-white transition-colors duration-300" style={{ fontFamily: 'Pier Sans, sans-serif' }}>
              Trade smarter with <span className="bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 dark:from-emerald-400 dark:via-green-400 dark:to-emerald-500 bg-clip-text text-transparent">HASHTAG</span> — your glassy command center for the markets
            </h1>

            <p className="text-base md:text-lg text-[#19235d]/80 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 transition-colors duration-300" style={{ fontFamily: 'Pier Sans, sans-serif' }}>
              Unlock TradingView-powered execution, institutional news feeds, currency strength analytics, deep indicator confluence and automated notifications inside one premium workspace. Pay once, log in from anywhere and stay ahead of every move.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#packages"
                className="group inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5"
                style={{ fontFamily: 'Pier Sans, sans-serif' }}
              >
                Explore Pricing
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#suite-overview"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-[#19235d]/20 dark:border-gray-600 bg-white/50 dark:bg-gray-900/40 backdrop-blur text-[#19235d] dark:text-gray-100 text-lg font-medium hover:bg-white/70 dark:hover:bg-gray-900/70 transition-all duration-300 shadow-lg"
                style={{ fontFamily: 'Pier Sans, sans-serif' }}
              >
                See the toolkit
              </a>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 pt-6">
              {heroStats.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="bg-white/50 dark:bg-gray-900/40 backdrop-blur rounded-2xl border border-white/40 dark:border-gray-700/50 shadow-lg px-4 py-5 text-left transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/30 flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-base font-semibold text-[#19235d] dark:text-white" style={{ fontFamily: 'Pier Sans, sans-serif' }}>{title}</h3>
                  <p className="text-sm text-[#19235d]/70 dark:text-gray-300 leading-relaxed" style={{ fontFamily: 'Pier Sans, sans-serif' }}>{description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-blue-500/10 blur-3xl rounded-full"></div>
            <div className="relative bg-white/20 dark:bg-gray-900/20 backdrop-blur-xl border border-white/40 dark:border-gray-700/40 rounded-3xl p-6 sm:p-8 shadow-2xl">
              <div className="flex flex-col gap-6">
                <div className="rounded-2xl bg-gradient-to-br from-[#19235d] via-[#1f2b6d] to-[#23307a] dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 text-white p-6 shadow-xl">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="uppercase text-xs tracking-[0.3em] text-white/60">Realtime Pulse</span>
                      <h3 className="text-2xl font-semibold">Market Command</h3>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <BellRing className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-sm">
                    <div className="bg-white/10 rounded-xl px-3 py-2">
                      <span className="block text-xs text-white/60">FX Heat</span>
                      <span className="text-lg font-semibold">+87%</span>
                    </div>
                    <div className="bg-white/10 rounded-xl px-3 py-2">
                      <span className="block text-xs text-white/60">Crypto Flow</span>
                      <span className="text-lg font-semibold">Bullish</span>
                    </div>
                    <div className="bg-white/10 rounded-xl px-3 py-2">
                      <span className="block text-xs text-white/60">Session</span>
                      <span className="text-lg font-semibold">London</span>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-white/70 leading-relaxed">
                    Currency strength, cross-asset sentiment and live session timers align in one glance.
                  </p>
                </div>

                <div className="bg-white/70 dark:bg-gray-900/60 rounded-2xl border border-white/40 dark:border-gray-700/50 p-5 shadow-xl">
                  <h4 className="text-[#19235d] dark:text-white font-semibold text-lg" style={{ fontFamily: 'Pier Sans, sans-serif' }}>Auto-alert pipeline</h4>
                  <div className="mt-4 space-y-3 text-sm" style={{ fontFamily: 'Pier Sans, sans-serif' }}>
                    <div className="flex items-center justify-between">
                      <span className="text-[#19235d]/80 dark:text-gray-200">Indicator alignment detected</span>
                      <span className="text-emerald-500 font-medium">Email sent</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#19235d]/80 dark:text-gray-200">High impact news in 30 min</span>
                      <span className="text-emerald-500 font-medium">SMS queued</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#19235d]/80 dark:text-gray-200">GBPUSD session overlap</span>
                      <span className="text-emerald-500 font-medium">Desktop push</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm" style={{ fontFamily: 'Pier Sans, sans-serif' }}>
                  <div className="bg-white/60 dark:bg-gray-900/50 rounded-xl border border-white/40 dark:border-gray-700/40 px-4 py-3 shadow-lg">
                    <span className="block text-xs text-[#19235d]/60 dark:text-gray-400">Stop-loss calculator</span>
                    <span className="text-lg font-semibold text-[#19235d] dark:text-white">FX · Crypto · Metals</span>
                  </div>
                  <div className="bg-white/60 dark:bg-gray-900/50 rounded-xl border border-white/40 dark:border-gray-700/40 px-4 py-3 shadow-lg">
                    <span className="block text-xs text-[#19235d]/60 dark:text-gray-400">Multi-timeframe core</span>
                    <span className="text-lg font-semibold text-[#19235d] dark:text-white">7 indicators synced</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
