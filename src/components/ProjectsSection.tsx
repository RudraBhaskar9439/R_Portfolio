import React, { useState } from 'react';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';
import { projects } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ProjectsSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  // Get all unique tech stacks
  const allTechs = Array.from(new Set(projects.flatMap(project => project.techStack)));

  const toggleTech = (tech: string) => {
    setSelectedTechs(prev => 
      prev.includes(tech) 
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
  };

  const filteredProjects = selectedTechs.length === 0 
    ? projects 
    : projects.filter(project => 
        selectedTechs.every(tech => project.techStack.includes(tech))
      );

  return (
    <section id="projects" ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold font-display text-center mb-8 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Here are some of my favorite projects that showcase my skills in blockchain development, 
            AI integration, and full-stack web development.
          </p>

          {/* Enhanced Filter Controls */}
          <div className="mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center justify-center space-x-3 w-full px-6 py-3 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-lg hover:from-primary-700 hover:to-purple-700 transition-all duration-300 font-medium"
              >
                <span className="text-lg">Filter by Tech Stack</span>
                {showFilters ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </button>
              
              {showFilters && (
                <div className="mt-6 space-y-4">
                  <div className="text-center">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Available Technologies: <span className="font-semibold">{allTechs.join(', ')}</span>
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-3">
                    {allTechs.map(tech => (
                      <button
                        key={tech}
                        onClick={() => toggleTech(tech)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                          selectedTechs.includes(tech)
                            ? 'bg-primary-600 text-white shadow-lg'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                      >
                        {tech}
                      </button>
                    ))}
                  </div>
                  
                  {selectedTechs.length > 0 && (
                    <div className="flex justify-center">
                      <button
                        onClick={() => setSelectedTechs([])}
                        className="px-4 py-2 rounded-full text-sm font-medium bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900 dark:text-red-300 dark:hover:bg-red-800 transition-colors"
                      >
                        Clear All Filters ({selectedTechs.length})
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map(tech => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No projects found with the selected tech stack. Try removing some filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;