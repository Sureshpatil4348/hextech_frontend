import React, { useState } from 'react'

const SubscriptionSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const pricingPlans = [
    {
      id: 'free',
      name: 'Free Trial',
      duration: '1 Month',
      price: '0',
      period: 'Free for 1 month',
      popular: false,
      description: 'Experience the full power of our platform',
      features: [
        'TradingView Integration',
        'RSI Analysis & Tracking',
        'Currency Strength Meter',
        'Lot Size Calculator',
        'All-in-One Indicator Analysis',
        'Market Session Tracker',
        'Live Email Notifications',
        'News & Market Alerts',
        'Multi-Timeframe Analysis',
        'Professional Dashboard'
      ]
    },
    {
      id: 'quarterly',
      name: 'Quarterly Plan',
      duration: '3 Months',
      price: '49',
      period: 'per quarter',
      popular: false,
      description: 'Best value for serious traders',
      features: [
        'TradingView Integration',
        'RSI Analysis & Tracking',
        'Currency Strength Meter',
        'Lot Size Calculator',
        'All-in-One Indicator Analysis',
        'Market Session Tracker',
        'Live Email Notifications',
        'News & Market Alerts',
        'Multi-Timeframe Analysis',
        'Professional Dashboard'
      ]
    },
    {
      id: 'yearly',
      name: 'Yearly Plan',
      duration: '12 Months',
      price: '299',
      period: 'per year',
      popular: true,
      badge: 'MOST POPULAR',
      description: 'Maximum savings for committed traders',
      features: [
        'TradingView Integration',
        'RSI Analysis & Tracking',
        'Currency Strength Meter',
        'Lot Size Calculator',
        'All-in-One Indicator Analysis',
        'Market Session Tracker',
        'Live Email Notifications',
        'News & Market Alerts',
        'Multi-Timeframe Analysis',
        'Professional Dashboard'
      ]
    }
  ]

  return (
    <section className="py-12 md:py-16 px-4 md:px-6 w-full transition-colors duration-300">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Premium Badge */}
          <div className="inline-flex items-center justify-center px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-700/50 rounded-full shadow-sm mb-6">
            <i className="fas fa-crown text-emerald-500 mr-2"></i>
            <span className="text-emerald-700 dark:text-emerald-300 font-semibold text-sm tracking-wide">Get Your AI Trading Edge</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Choose Your <span className="bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 dark:from-emerald-400 dark:via-green-400 dark:to-emerald-500 bg-clip-text text-transparent">Trading Plan</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            All plans include every feature. Choose based on your commitment level and save more with longer subscriptions.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6 items-center">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative transition-all duration-500 ${plan.popular ? 'md:scale-[1.08] md:-translate-y-4' : 'md:scale-[0.95]'}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 text-white px-6 py-2 rounded-full text-xs font-bold tracking-wider shadow-lg">
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Card Container with Gradient Border Effect */}
              <div className={`relative rounded-3xl transition-all duration-300 h-full ${
                plan.popular 
                  ? 'p-[3px] bg-gradient-to-br from-emerald-400 via-green-500 to-emerald-600 shadow-[0_20px_60px_-15px_rgba(16,185,129,0.4)] hover:shadow-[0_25px_70px_-15px_rgba(16,185,129,0.5)]' 
                  : 'p-[2px] bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 shadow-lg hover:shadow-xl hover:-translate-y-1'
              }`}>
                <div className={`relative rounded-3xl p-6 h-full backdrop-blur-xl transition-all duration-300 flex flex-col ${
                  plan.popular
                    ? 'bg-white dark:bg-gray-900'
                    : 'bg-white/90 dark:bg-gray-800/90'
                }`}>
                  
                  {/* Plan Name & Badge */}
                  <div className="text-center mb-4">
                    {!plan.popular && plan.badge && (
                      <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-400/20 dark:to-purple-400/20 rounded-full mb-2">
                        <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">{plan.badge}</span>
                      </div>
                    )}
                    
                    <h3 className={`text-xl font-bold mb-1 ${
                      plan.popular 
                        ? 'text-gray-900 dark:text-white' 
                        : 'text-gray-800 dark:text-gray-100'
                    }`}>
                      {plan.name}
                    </h3>
                    
                    <p className="text-xs text-gray-600 dark:text-gray-400">{plan.description}</p>
                  </div>

                  {/* Price Display */}
                  <div className="text-center mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-start justify-center gap-1 mb-1">
                      <span className={`text-2xl font-bold mt-1 ${
                        plan.popular 
                          ? 'text-gray-900 dark:text-white' 
                          : 'text-gray-700 dark:text-gray-200'
                      }`}>$</span>
                      <span className={`text-5xl font-bold ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent' 
                          : 'text-gray-900 dark:text-white'
                      }`}>{plan.price}</span>
                    </div>
                    
                    <div className="text-gray-600 dark:text-gray-400 text-xs font-medium mb-0.5">{plan.period}</div>
                    <div className={`text-base font-semibold ${
                      plan.popular 
                        ? 'text-emerald-600 dark:text-emerald-400' 
                        : 'text-gray-700 dark:text-gray-300'
                    }`}>
                      {plan.duration}
                    </div>
                    
                    {plan.savings && (
                      <div className="mt-2 inline-flex items-center px-3 py-1 bg-emerald-500/10 dark:bg-emerald-400/20 rounded-full">
                        <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-300">{plan.savings}</span>
                      </div>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-6 flex-grow">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2.5">
                        <div className={`flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-0.5 ${
                          plan.popular 
                            ? 'bg-gradient-to-br from-emerald-500 to-green-600' 
                            : 'bg-gradient-to-br from-gray-400 to-gray-500 dark:from-gray-500 dark:to-gray-600'
                        }`}>
                          <i className="fas fa-check text-white text-[9px]"></i>
                        </div>
                        <span className={`text-xs leading-relaxed ${
                          plan.popular 
                            ? 'text-gray-700 dark:text-gray-200 font-medium' 
                            : 'text-gray-600 dark:text-gray-300'
                        }`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => plan.id === 'free' && setIsModalOpen(true)}
                    className={`w-full py-3 px-6 rounded-xl font-semibold text-base transition-all duration-300 transform hover:-translate-y-1 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-600 hover:via-green-600 hover:to-emerald-700 text-white shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40'
                        : 'bg-white dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:border-emerald-500 dark:hover:border-emerald-400 hover:bg-gray-50 dark:hover:bg-gray-600 shadow-md'
                    }`}
                  >
                    {plan.id === 'free' ? 'Start My Trial' : 'Get Started Now'}
                  </button>

                  {/* Money Back Guarantee */}
                  {plan.id !== 'free' && (
                    <div className="text-center mt-3">
                      <p className="text-[10px] text-gray-500 dark:text-gray-400 flex items-center justify-center gap-1.5">
                        <i className="fas fa-shield-alt text-emerald-500"></i>
                        propiority support Via Email and Telegram
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trial Modal */}
      {isModalOpen && (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <div 
          onClick={() => setIsModalOpen(false)}
          onKeyDown={(e) => e.key === 'Escape' && setIsModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        >
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
          <div 
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
            className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-md w-full p-8 animate-fade-in"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
            >
              <i className="fas fa-times text-xl"></i>
            </button>

            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center">
                <i className="fas fa-rocket text-white text-2xl"></i>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-center mb-3 text-gray-900 dark:text-white">
              Get Your Free Trial of <span className="text-emerald-500">HexTexh Algo</span>
            </h3>

            {/* Subtitle */}
            <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
              Unlock premium trading insights with just a quick registration.
            </p>

            {/* Registration Options */}
            <div className="space-y-3 mb-6">
              <a
                href="https://cmsprime.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              >
                <i className="fas fa-link text-emerald-500 text-lg"></i>
                <span className="font-medium text-gray-900 dark:text-white">CMSPrime Registration</span>
              </a>

              <a
                href="https://www.exness.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              >
                <i className="fas fa-link text-emerald-500 text-lg"></i>
                <span className="font-medium text-gray-900 dark:text-white">Exness Registration</span>
              </a>
            </div>

            {/* Trial Benefits */}
            <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-5 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <i className="fas fa-gift text-emerald-500 text-lg"></i>
                <h4 className="font-semibold text-gray-900 dark:text-white">Trial Benefits</h4>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">$1,000+</span> Deposit → <span className="font-medium">1 Month Free Trial</span>
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">$5,000+</span> Deposit → <span className="font-medium">3 Months Free Trial</span>
                </p>
              </div>
            </div>

            {/* Telegram Button */}
            <a
              href="https://t.me/+NgzWiBMfEj02YTM1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              <i className="fas fa-paper-plane"></i>
              Message Us on Telegram
            </a>

            {/* Telegram Contact */}
            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
              Telegram: Hextech_algo
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

export default SubscriptionSection;

