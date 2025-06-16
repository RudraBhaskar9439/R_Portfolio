import React, { useEffect, useState } from 'react';
import { Download, Github, Twitter, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import AnimatedBackground from './AnimatedBackground';

const HeroSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900">
      <AnimatedBackground />
      
      {/* 3D Blockchain Animation */}
      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-2000 ${isLoaded ? 'opacity-20 scale-150' : 'opacity-100 scale-100'}`}>
        <div className="relative w-64 h-64">
          {/* Outer rotating ring */}
          <div className="absolute inset-0 border-4 border-primary-500/30 rounded-full animate-spin-slow">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary-500 rounded-full animate-pulse"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-purple-500 rounded-full animate-pulse"></div>
            <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-pink-500 rounded-full animate-pulse"></div>
          </div>
          
          {/* Middle rotating ring */}
          <div className="absolute inset-8 border-4 border-purple-500/30 rounded-full animate-spin-reverse">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
          </div>
          
          {/* Inner cube */}
          <div className="absolute inset-16 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-lg animate-pulse-glow backdrop-blur-sm border border-white/10">
            <div className="absolute inset-2 bg-gradient-to-tr from-blue-500/30 to-pink-500/30 rounded-md animate-float"></div>
          </div>
          
          {/* Connecting lines */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary-500 to-transparent animate-pulse"></div>
            <div className="absolute left-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent animate-pulse"></div>
          </div>
        </div>
      </div>

      <div className={`relative z-10 max-w-4xl mx-auto px-4 text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-slide-down">
            Hi, I'm {personalInfo.name}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-slide-up">
            {personalInfo.title}
          </p>
          
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in">
            Building AI solutions and decentralized applications with a focus on innovation and impact. Passionate about blockchain, DeFi, and creating user-centric experiences.
          </p>

          <a
  href={personalInfo.cv}
  download
  className="group px-8 py-3 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-full font-medium hover:from-primary-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-xl animate-slide-left"
>
  <div className="flex items-center space-x-2">
    <Download className="h-5 w-5 group-hover:animate-bounce" />
    <span>Download CV</span>
  </div>
</a>
            
            <div className="flex items-center space-x-4 animate-slide-right">
              <a
                href={personalInfo.social.github}
                className="p-3 bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-full border border-white/20 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-300 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href={personalInfo.social.twitter}
                className="p-3 bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-full border border-white/20 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:text-blue-500 hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-300 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href={personalInfo.social.linkedin}
                className="p-3 bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-full border border-white/20 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-300 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-full border border-white/20 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:text-red-500 hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-2 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors animate-bounce"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
};

export default HeroSection;