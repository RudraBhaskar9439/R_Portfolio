import React from 'react';
import { personalInfo, skills } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import profileImage from '../../public/images/projects/RudraNew.jpeg';

const AboutSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold font-display text-center mb-16 text-gray-900 dark:text-white">
            About Me
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div className="relative">
                <img
  src={profileImage} 

  alt="Rudra Bhaskar"
  className="w-80 h-80 object-cover rounded-2xl shadow-2xl mx-auto lg:mx-0"
/>
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-purple-500/20 rounded-2xl"></div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Hi there! I'm Rudra
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {personalInfo.bio}
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
               Aspiring B.Tech undergraduate student in Electronics and Communication Engineering with a keen interest in blockchain and DeFi. Skilled in problem-solving, frontend development, and smart contract concepts. Eager to contribute to innovative fintech solutions with a strong work ethic and passion for technology.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring the latest developments in AI, contributing to open-source 
                projects, or sharing my knowledge through technical writing and conference talks.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-3xl font-bold font-display text-center text-gray-900 dark:text-white mb-12">
              Skills & Expertise
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((category, categoryIndex) => (
                <div key={category.category} className="space-y-4">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category.category}
                  </h4>
                  <div className="space-y-3">
                    {category.items.map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-primary-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: isVisible ? `${skill.level}%` : '0%',
                              transitionDelay: `${(categoryIndex * 100) + (skillIndex * 100)}ms`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;