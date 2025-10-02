import React from 'react';

const FAQSection = () => {
  return (
    <section id="faq" className="py-10 sm:py-12 md:py-16 px-4 md:px-6 w-full transition-colors duration-300">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-gray-900 dark:text-white transition-colors duration-300 px-4">
          Frequently Asked <span className="gold-text">Questions</span>
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-4 sm:gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6 transition-colors duration-300">
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-white transition-colors duration-300">What is Hextech?</h3>
            <p className="text-sm sm:text-base text-[#19235d] dark:text-gray-300 transition-colors duration-300">
              Hextech is a smart trading tool. It helps you see market signals, news impact, and analysis in one place. We do not trade for you. You use our tools to make your own trading choices.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6 transition-colors duration-300">
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-white transition-colors duration-300">On which email id i will receive the alerts?</h3>
            <p className="text-sm sm:text-base text-[#19235d] dark:text-gray-300 transition-colors duration-300">
              You will receive the alerts to the registered mail id
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6 transition-colors duration-300">
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-white transition-colors duration-300">How can I start using Hextech?</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 transition-colors duration-300">
              Just sign up on our website, choose a plan (Free, Quarterly, or Yearly), and pay online. After payment, you will get login details by email.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6 transition-colors duration-300">
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-white transition-colors duration-300">Can I use Hextech on my phone?</h3>
            <p className="text-sm sm:text-base text-[#19235d] dark:text-gray-300 transition-colors duration-300">
              Yes. Hextech works on mobile, tablet, and computer. You only need internet and a browser to use it.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6 transition-colors duration-300">
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-white transition-colors duration-300">What if my payment fails?</h3>
            <p className="text-sm sm:text-base text-[#19235d] dark:text-gray-300 transition-colors duration-300">
              If payment fails, you will not get access. Try again or use another card/bank method. If money was taken but no access is given, contact our support team.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6 transition-colors duration-300">
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-white transition-colors duration-300">Do you give refunds?</h3>
            <p className="text-sm sm:text-base text-[#19235d] dark:text-gray-300 transition-colors duration-300">
              No refunds for normal use. Refunds are only given if:
              <br /><br />
              1.You paid twice by mistake.
              <br /><br />
              2.There was a system error and you could not use the service.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6 transition-colors duration-300">
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-white transition-colors duration-300">Is my data safe with Hextech?</h3>
            <p className="text-sm sm:text-base text-[#19235d] dark:text-gray-300 transition-colors duration-300">
              Yes. We use strong security, encryption, and do not sell your data. Your info is safe and private.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6 transition-colors duration-300">
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-white transition-colors duration-300">What happens if I cancel my plan?</h3>
            <p className="text-sm sm:text-base text-[#19235d] dark:text-gray-300 transition-colors duration-300">
              If you cancel, your plan will stop auto-renew. You can still use it until the end of the period you paid for, but no money will be returned.
            </p>
          </div>
        </div>
        
        <div className="mt-6 sm:mt-8 md:mt-12 text-center px-4">
          <p className="text-base sm:text-lg md:text-xl mb-3 sm:mb-4 md:mb-6 text-gray-900 dark:text-white transition-colors duration-300">Still have questions?</p>
          <a 
            href="https://t.me/+NgzWiBMfEj02YTM1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-green-500 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-green-600 transition duration-300 text-sm sm:text-base"
          >
            <i className="fab fa-telegram mr-2 text-lg sm:text-xl"></i> Ask on Telegram
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
