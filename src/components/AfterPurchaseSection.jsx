import { Download, MessageCircle, Rocket, Settings } from 'lucide-react';
import React from 'react';

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
    <section className="py-14 md:py-16 px-4 md:px-6 w-full">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center p-8 sm:p-10 text-white text-center">
            <div>

              <h3 className="text-2xl font-bold">What Happens Next?</h3>
            </div>
          </div>
          <div className="p-8 md:p-10 md:w-2/3">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center md:text-left">After You Purchase:</h3>
            <ol className="space-y-4">
              {steps.map((step, index) => (
                <li key={index} className="flex flex-col sm:flex-row sm:items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center mx-auto sm:mx-0 sm:mt-1 sm:mr-4 shadow-md">
                    <step.icon className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mt-3 sm:mt-0 text-center sm:text-left">
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
