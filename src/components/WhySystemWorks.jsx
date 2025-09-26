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
    <section id="features" className="relative py-16 md:py-20 px-4 md:px-6 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-900 w-full transition-colors duration-300" style={{fontFamily: 'Pier Sans, sans-serif'}}>
      {/* Professional Trading Background Elements */}
      <div className="absolute inset-0">
        
        {/* Subtle Geometric Grid - Dark Mode */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}></div>
        </div>
        
        {/* Subtle Geometric Grid - Light Mode */}
        <div className="absolute inset-0 opacity-[0.05] dark:opacity-0">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}></div>
        </div>
        
        {/* Professional Gradient Overlays - Dark Mode */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-slate-800/20 via-transparent to-transparent dark:block hidden"></div>
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-slate-800/20 via-transparent to-transparent dark:block hidden"></div>
        
        {/* Professional Gradient Overlays - Light Mode */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/30 via-transparent to-transparent block dark:hidden"></div>
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-white/30 via-transparent to-transparent block dark:hidden"></div>
        
        {/* Subtle Trading Pattern - Dark Mode */}
        <div className="absolute inset-0 opacity-[0.02] dark:block hidden">
          <div className="w-full h-full" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(34, 197, 94, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 60%, rgba(107, 114, 128, 0.1) 0%, transparent 50%)
            `,
            backgroundSize: '400px 400px, 600px 600px, 500px 500px',
            backgroundPosition: '0% 0%, 100% 100%, 50% 50%'
          }}></div>
        </div>
        
        {/* Subtle Trading Pattern - Light Mode */}
        <div className="absolute inset-0 opacity-[0.03] block dark:hidden">
          <div className="w-full h-full" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(34, 197, 94, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 40% 60%, rgba(107, 114, 128, 0.05) 0%, transparent 50%)
            `,
            backgroundSize: '400px 400px, 600px 600px, 500px 500px',
            backgroundPosition: '0% 0%, 100% 100%, 50% 50%'
          }}></div>
        </div>
        
        {/* Professional Corner Accents - Dark Mode */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-emerald-500/5 via-transparent to-transparent dark:block hidden"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/5 via-transparent to-transparent dark:block hidden"></div>
        
        {/* Professional Corner Accents - Light Mode */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-emerald-500/10 via-transparent to-transparent block dark:hidden"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/10 via-transparent to-transparent block dark:hidden"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
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
