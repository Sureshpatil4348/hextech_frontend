import { ChevronDown, HelpCircle } from 'lucide-react';
import React, { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "How does the HEXTECH ALGO trading system work?",
      answer: "Our AI-powered system continuously monitors market conditions across multiple currency pairs and commodities. It uses advanced algorithms to identify high-probability trading opportunities and sends real-time alerts to your device. The system is designed to work 24/7, capturing opportunities even while you sleep."
    },
    {
      id: 2,
      question: "What trading instruments are supported?",
      answer: "The system supports major forex pairs (EURUSD, GBPUSD, AUDUSD, USDJPY) and commodities like Gold. Different packages offer different instrument coverage - Silver package includes EURUSD and Gold, while Gold and Diamond packages include all major pairs and unlimited instruments respectively."
    },
    {
      id: 3,
      question: "Do I need trading experience to use this system?",
      answer: "No prior trading experience is required. Our system is designed for both beginners and experienced traders. We provide comprehensive setup guides, video tutorials, and personal support to help you get started. The AI handles the complex analysis, so you just need to follow the alerts."
    },
    {
      id: 4,
      question: "What broker do you recommend?",
      answer: "The system works with most major forex brokers including MT4 and MT5 platforms. We have tested compatibility with brokers like IC Markets, XM, FXCM, and many others. Our support team can help you choose the best broker based on your location and preferences."
    },
    {
      id: 5,
      question: "How much can I expect to make?",
      answer: "While we can't guarantee specific returns, our community has generated over $230k+ in verified profits. Results vary based on market conditions, risk management, and individual trading discipline. We recommend starting with small position sizes and gradually increasing as you gain confidence."
    },
    {
      id: 6,
      question: "Is there ongoing support after purchase?",
      answer: "Yes! All packages include email support, and Gold/Diamond packages include priority support. You'll also get access to our private Telegram community where you can interact with other traders, get market updates, and receive ongoing guidance from our team."
    },
    {
      id: 7,
      question: "Can I customize the trading parameters?",
      answer: "Yes, customization options vary by package. Silver package offers basic settings, Gold package includes bi-directional trading options, and Diamond package provides full customization including custom trading hours, price ranges, and position sizing controls."
    },
    {
      id: 8,
      question: "What if I'm not satisfied with the system?",
      answer: "We're confident in our system's performance, but if you're not satisfied within the first 30 days, we offer a full refund. Our goal is your success, and we stand behind our product with this guarantee."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-16 md:py-20" style={{fontFamily: 'Pier Sans, sans-serif'}}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-6 py-2 text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-6" style={{fontFamily: 'Pier Sans, sans-serif'}}>
            <HelpCircle className="w-4 h-4" />
            <span>FREQUENTLY ASKED</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 dark:text-white mb-6" style={{fontFamily: 'Pier Sans, sans-serif'}}>
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 dark:from-emerald-400 dark:to-blue-400 bg-clip-text text-transparent">
              Got Questions?
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Find answers to the most common questions about our AI trading system
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="group" style={{animationDelay: `${index * 0.1}s`}}>
              <div 
                className={`bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out cursor-pointer transform hover:scale-[1.02] ${openIndex === index ? 'shadow-2xl border-emerald-200/70 dark:border-emerald-700/70' : ''}`}
                onClick={() => toggleFAQ(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleFAQ(index);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${faq.id}`}
              >
                {/* Question */}
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-lg md:text-xl font-medium pr-8 transition-all duration-500 ease-in-out ${openIndex === index ? 'text-emerald-600 dark:text-emerald-400' : 'text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400'}`} style={{fontFamily: 'Pier Sans, sans-serif'}}>
                      {faq.question}
                    </h3>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center transition-all duration-500 ease-in-out ${openIndex === index ? 'bg-emerald-500/20 scale-110' : 'hover:bg-emerald-500/15 hover:scale-105'}`}>
                      <ChevronDown className={`w-5 h-5 text-emerald-600 dark:text-emerald-400 transition-all duration-500 ease-in-out ${openIndex === index ? 'rotate-180' : 'rotate-0'}`} />
                    </div>
                  </div>
                </div>

                {/* Answer */}
                <div 
                  id={`faq-answer-${faq.id}`}
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                  aria-hidden={openIndex !== index}
                  style={{
                    transition: 'max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease-in-out, padding 0.3s ease-in-out'
                  }}
                >
                  <div className={`px-6 md:px-8 transition-all duration-300 ease-in-out ${openIndex === index ? 'pb-6 md:pb-8 pt-0' : 'pb-0 pt-0'}`}>
                    <div className="border-t border-gray-200/50 dark:border-gray-700/50 pt-6">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-all duration-300 ease-in-out">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-200/50 dark:border-emerald-700/50 rounded-full px-8 py-4">
            <p className="text-sm text-gray-700 dark:text-gray-300 font-medium" style={{fontFamily: 'Pier Sans, sans-serif'}}>
              Still have questions? <span className="text-emerald-600 dark:text-emerald-400 font-medium" style={{fontFamily: 'Pier Sans, sans-serif'}}>Contact our support team</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;