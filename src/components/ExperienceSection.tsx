import React from 'react';
import { experiences, education } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ExperienceSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold font-display text-center mb-16 text-gray-900 dark:text-white">
            Experience & Education
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Professional Experience */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
                Professional Experience
              </h3>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-purple-500"></div>
                
                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <div
                      key={index}
                      className={`relative flex items-start space-x-6 transition-all duration-700 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                      }`}
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      {/* Timeline dot */}
                      <div className="flex-shrink-0 w-16 h-16 bg-white dark:bg-gray-900 rounded-full border-4 border-primary-500 flex items-center justify-center text-2xl shadow-lg">
                        {exp.icon}
                      </div>
                      
                      <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {exp.title}
                          </h4>
                          <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                            {exp.duration}
                          </span>
                        </div>
                        <h5 className="text-md text-gray-700 dark:text-gray-300 mb-3">
                          {exp.company}
                        </h5>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
                Education
              </h3>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>
                
                <div className="space-y-8">
                  {education.map((edu, index) => (
                    <div
                      key={index}
                      className={`relative flex items-start space-x-6 transition-all duration-700 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                      }`}
                      style={{ transitionDelay: `${(experiences.length + index) * 200}ms` }}
                    >
                      {/* Timeline dot */}
                      <div className="flex-shrink-0 w-16 h-16 bg-white dark:bg-gray-900 rounded-full border-4 border-purple-500 flex items-center justify-center text-2xl shadow-lg">
                        {edu.icon}
                      </div>
                      
                      <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {edu.degree}
                          </h4>
                          <span className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                            {edu.duration}
                          </span>
                        </div>
                        <h5 className="text-md text-gray-700 dark:text-gray-300 mb-3">
                          {edu.institution}
                        </h5>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;