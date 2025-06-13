import React from 'react';
import { journey } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const JourneySection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="journey" ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold font-display text-center mb-8 text-gray-900 dark:text-white">
            My Journey
          </h2>
          
          <p className="text-center text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto">
            A timeline of my professional growth, key milestones, and significant achievements 
            in the world of technology and blockchain development.
          </p>

          <div className="relative">
            {/* Journey tree/timeline */}
            <div className="space-y-8">
              {journey.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-start space-x-6 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  }`}
                  style={{ transitionDelay: `${index * 300}ms` }}
                >
                  {/* Year bubble */}
                  <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {milestone.year}
                  </div>
                  
                  {/* Content card */}
                  <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                    {/* Icon */}
                    <div className="absolute -top-3 -right-3 w-12 h-12 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center text-2xl shadow-lg border-4 border-gray-50 dark:border-gray-800">
                      {milestone.icon}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {milestone.description}
                    </p>
                    
                    {milestone.achievements && (
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Key Achievements
                        </h4>
                        <ul className="space-y-1">
                          {milestone.achievements.map((achievement, achievementIndex) => (
                            <li
                              key={achievementIndex}
                              className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300"
                            >
                              <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  
                  {/* Connecting line */}
                  {index < journey.length - 1 && (
                    <div className="absolute left-10 top-20 w-0.5 h-8 bg-gradient-to-b from-primary-500 to-purple-600 opacity-30"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;