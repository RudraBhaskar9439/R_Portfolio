import React, { useState } from 'react';
import { Calendar, Clock, Tag, ArrowUpRight } from 'lucide-react';
import { articles } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ArticlesSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest'>('newest');

  // Get all unique tags
  const allTags = ['All', ...Array.from(new Set(articles.flatMap(article => article.tags)))];

  // Filter and sort articles
  const filteredAndSortedArticles = articles
    .filter(article => selectedTag === 'All' || article.tags.includes(selectedTag))
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortBy === 'newest' ? dateB - dateA : dateA - dateB;
    });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="articles" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold font-display text-center mb-8 text-gray-900 dark:text-white">
            Latest Articles
          </h2>
          
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            I love sharing my knowledge and insights about blockchain technology, AI, and software development 
            through technical writing and tutorials.
          </p>

          {/* Filter and Sort Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0">
            <div className="flex flex-wrap gap-2">
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedTag === tag
                      ? 'bg-primary-600 text-white'
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'newest' | 'oldest')}
              className="px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredAndSortedArticles.map((article, index) => (
              <a
                key={article.id}
                href={article.mediumLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block group hover:no-underline"
              >
                <article
                  className={`bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Article Thumbnail */}
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={article.thumbnail}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex flex-wrap gap-1">
                        {article.tags.slice(0, 2).map(tag => (
                          <span
                            key={tag}
                            className="inline-flex items-center space-x-1 px-2 py-1 bg-primary-600/80 backdrop-blur-sm text-white text-xs rounded-full"
                          >
                            <Tag className="h-3 w-3" />
                            <span>{tag}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {article.preview}
                    </p>

                    {/* Read on Medium Button */}
                    <div className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 mb-4 group-hover:underline">
                      <span>Read on Medium</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(article.date)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </article>
              </a>
            ))}
          </div>
          
          {filteredAndSortedArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">
                No articles found with the selected tag.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;