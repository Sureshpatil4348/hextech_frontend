import React from 'react';
import { Download, MessageCircle, Settings, Rocket, CheckCircle } from 'lucide-react';

const AfterPurchaseSection = () => {
  const steps = [
    {
      icon: Download,
      title: 'Instant Access',
      description: "You'll receive login details to start using your system immediately",
    },
    {
      icon: MessageCircle,
      title: 'Telegram Support',
      description: "you will receive the link to join our private community group",
    },
    {
      icon: Settings,
      title: 'Setup Assistance',
      description: 'Follow our step-by-step guide or get personal help',
    },
    {
      icon: Rocket,
      title: 'Start Trading',
      description: 'Be up and running within 2 minutes on your preferred Device',
    },
  ];

  return (
    <section className="py-12 md:py-16 px-4 md:px-6 w-full bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden md:flex">
          <div className="md:w-1/3 bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center p-8 text-white text-center">
            <div>
              
              <h3 className="text-2xl font-bold">What Happens Next?</h3>
            </div>
          </div>
          <div className="p-8 md:p-10 md:w-2/3">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">After You Purchase:</h3>
            <ol className="space-y-4">
              {steps.map((step, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center mt-1 mr-4 shadow-md">
                    <step.icon className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong className="text-gray-900 dark:text-white">{step.title}:</strong> {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfterPurchaseSection;
