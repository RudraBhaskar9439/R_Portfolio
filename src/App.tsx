import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ArticlesSection from './components/ArticlesSection';
import JourneySection from './components/JourneySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import StatisticsSection from './components/StatisticsSection';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navigation />
        <ThemeToggle />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ArticlesSection />
        <JourneySection />
        <StatisticsSection />
        <ContactSection />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;