import { Crown, Gem, Rocket } from 'lucide-react'
import React from 'react'

const plans = [
  {
    name: 'Launch',
    icon: Rocket,
    price: '$79',
    cadence: 'per month',
    summary: 'Solo traders getting started with institutional workflows.',
    highlights: ['TradingView + indicator suite access', 'Currency strength meter & session map', 'Email alerts for high-impact news'],
    cta: 'Start Launch',
    badge: 'New to HASHTAG'
  },
  {
    name: 'Growth',
    icon: Crown,
    price: '$129',
    cadence: 'per month',
    summary: 'Professional traders scaling across forex, crypto and metals.',
    highlights: ['Everything in Launch', 'Multi-asset calculators & automation workflows', 'Priority alert routing (email + SMS)'],
    cta: 'Choose Growth',
    featured: true,
    badge: 'Most popular'
  },
  {
    name: 'Empire',
    icon: Gem,
    price: '$199',
    cadence: 'per month',
    summary: 'Desks and prop teams needing tailored dashboards and delivery.',
    highlights: ['All Growth features', 'Team seats & custom branding', 'Dedicated success manager & API webhooks'],
    cta: 'Scale with Empire',
    badge: 'For teams'
  }
]

const SubscriptionSection = () => {
  return (
    <section id="packages" className="py-24 px-4 md:px-6 w-full transition-colors duration-300" style={{ fontFamily: 'Pier Sans, sans-serif' }}>
      <div className="container mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#19235d] dark:text-white">
            Pick the plan that fuels your <span className="text-emerald-500 dark:text-emerald-400">trading advantage</span>
          </h2>
          <p className="text-lg text-[#19235d]/80 dark:text-gray-300">
            Flexible memberships to unlock HASHTAG’s complete glassy trading suite, live intelligence and alert automation.
          </p>
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-white/40 dark:bg-gray-900/40 backdrop-blur border border-white/50 dark:border-gray-700/50 text-sm text-[#19235d] dark:text-gray-200 shadow-lg">
            <span className="font-medium">Pay monthly · Cancel anytime · Dubai-based support</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map(({ name, icon: Icon, price, cadence, summary, highlights, cta, featured, badge }) => (
            <div
              key={name}
              className={`relative rounded-3xl p-8 backdrop-blur-xl border shadow-2xl transition-all duration-300 ${
                featured
                  ? 'bg-white/70 dark:bg-gray-900/70 border-emerald-400/70 dark:border-emerald-500/70 scale-105'
                  : 'bg-white/40 dark:bg-gray-900/40 border-white/50 dark:border-gray-700/50'
              }`}
            >
              {badge && (
                <span className={`absolute -top-3 left-8 px-3 py-1 rounded-full text-xs font-semibold tracking-wide shadow-md ${
                  featured ? 'bg-emerald-500 text-white' : 'bg-white/80 text-[#19235d] dark:text-gray-900'
                }`}>
                  {badge}
                </span>
              )}

              <div className="space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-100 to-green-200 dark:from-emerald-900/40 dark:to-green-900/30 flex items-center justify-center shadow-lg">
                  <Icon className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-[#19235d] dark:text-white">{name}</h3>
                  <p className="text-[#19235d]/70 dark:text-gray-300 mt-2 leading-relaxed">{summary}</p>
                </div>
                <div>
                  <div className="flex items-end space-x-2 text-[#19235d] dark:text-white">
                    <span className="text-4xl font-semibold">{price}</span>
                    <span className="text-sm text-[#19235d]/70 dark:text-gray-300">{cadence}</span>
                  </div>
                </div>
                <ul className="space-y-3 text-[#19235d]/80 dark:text-gray-200 text-sm">
                  {highlights.map(item => (
                    <li key={item} className="flex items-start">
                      <span className="mt-1 mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-400/40 text-emerald-500">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/login"
                  className={`block text-center w-full px-4 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg ${
                    featured
                      ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:shadow-emerald-500/40'
                      : 'bg-white/80 dark:bg-gray-800/70 text-[#19235d] dark:text-white hover:bg-white'
                  }`}
                >
                  {cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SubscriptionSection
