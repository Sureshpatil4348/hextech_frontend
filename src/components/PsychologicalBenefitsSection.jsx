import { Heart, Target, Trophy } from 'lucide-react';
import React from 'react';

const PsychologicalBenefitsSection = () => {
  return (
    <section className="py-10 sm:py-12 md:py-14 lg:py-16 px-4 md:px-6 w-full transition-colors duration-300">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-gray-900 dark:text-white transition-colors duration-300 px-4">
          Built with <span className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-green-500 to-emerald-600 dark:from-green-400 dark:to-emerald-500 bg-clip-text text-transparent">Trader Psychology</span> in Mind
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8 justify-items-center">
          <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-6 md:p-7 feature-card transition-colors duration-300 w-full max-w-sm">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4 sm:mb-6 mx-auto transition-colors duration-300">
              <Heart className="text-green-600 dark:text-green-400 w-7 h-7 sm:w-8 sm:h-8 transition-colors duration-300" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-center mb-3 sm:mb-4 text-[#19235d] dark:text-white transition-colors duration-300">Reduce Emotional Trading</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center text-xs sm:text-sm md:text-base transition-colors duration-300 leading-relaxed">
              Automation removes impulsive decisions and emotional responses that often lead to trading losses.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-6 md:p-7 feature-card transition-colors duration-300 w-full max-w-sm">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4 sm:mb-6 mx-auto transition-colors duration-300">
              <Target className="text-green-600 dark:text-green-400 w-7 h-7 sm:w-8 sm:h-8 transition-colors duration-300" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-center mb-3 sm:mb-4 text-[#19235d] dark:text-white transition-colors duration-300">Enhance Discipline</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center text-xs sm:text-sm md:text-base transition-colors duration-300 leading-relaxed">
              Predefined strategies enforce consistent trading behavior and keep you aligned with your long-term goals.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-6 md:p-7 feature-card transition-colors duration-300 w-full max-w-sm">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4 sm:mb-6 mx-auto transition-colors duration-300">
              <Trophy className="text-green-600 dark:text-green-400 w-7 h-7 sm:w-8 sm:h-8 transition-colors duration-300" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-center mb-3 sm:mb-4 text-[#19235d] dark:text-white transition-colors duration-300">Build Confidence</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center text-xs sm:text-sm md:text-base transition-colors duration-300 leading-relaxed">
              Transparent operations and real-time data foster trust in the system and your trading approach.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PsychologicalBenefitsSection;
