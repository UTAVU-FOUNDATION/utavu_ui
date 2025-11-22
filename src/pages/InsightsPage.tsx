import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Download, BookOpen, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const InsightsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    'All Categories',
    'Health Innovation',
    'Agricultural Innovation',
    'Education Technology',
    'Environmental Solutions',
    'Policy & Governance',
    'Research Methodology'
  ];

  const insights = [
    {
      id: 1,
      type: 'Research Report',
      title: 'Digital Health Adoption in Sub-Saharan Africa: Barriers and Opportunities',
      excerpt: 'Comprehensive analysis of digital health technology adoption patterns across 12 countries, identifying key barriers and strategic opportunities for scale.',
      author: 'Dr. Sarah Kimani',
      date: '2024-02-15',
      readTime: '15 min read',
      category: 'Health Innovation',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600',
      downloadable: true,
      featured: true
    },
    {
      id: 2,
      type: 'Case Study',
      title: 'Scaling Agricultural Innovation: Lessons from the Climate-Smart Farming Initiative',
      excerpt: 'In-depth case study examining how technology transfer and capacity building enabled 5,000+ farmers to adopt climate-resilient farming practices.',
      author: 'James Mwangi',
      date: '2024-02-08',
      readTime: '12 min read',
      category: 'Agricultural Innovation',
      image: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=600',
      downloadable: false,
      featured: true
    },
    {
      id: 3,
      type: 'Policy Brief',
      title: 'Innovation Ecosystem Development: Policy Recommendations for African Governments',
      excerpt: 'Strategic policy recommendations for creating enabling environments that foster innovation and entrepreneurship in emerging markets.',
      author: 'Prof. Amina Hassan',
      date: '2024-01-28',
      readTime: '8 min read',
      category: 'Policy & Governance',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600',
      downloadable: true,
      featured: false
    },
    {
      id: 4,
      type: 'White Paper',
      title: 'Renewable Energy Access Models for Rural Communities',
      excerpt: 'Comprehensive analysis of sustainable energy access models and their implementation in remote African communities.',
      author: 'Dr. Grace Wanjiku',
      date: '2024-01-20',
      readTime: '18 min read',
      category: 'Environmental Solutions',
      image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=600',
      downloadable: true,
      featured: false
    },
    {
      id: 5,
      type: 'Research Report',
      title: 'Education Technology Impact Assessment: Multi-Country Study',
      excerpt: 'Evaluation of education technology interventions across 8 countries, measuring learning outcomes and digital literacy improvements.',
      author: 'Dr. Michael Ochieng',
      date: '2024-01-15',
      readTime: '14 min read',
      category: 'Education Technology',
      image: 'https://images.pexels.com/photos/5212347/pexels-photo-5212347.jpeg?auto=compress&cs=tinysrgb&w=600',
      downloadable: true,
      featured: false
    },
    {
      id: 6,
      type: 'Best Practices',
      title: 'Participatory Research Methods in Development Contexts',
      excerpt: 'Practical guide to implementing participatory research approaches that engage communities as partners in knowledge creation.',
      author: 'Prof. David Kiprotich',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'Research Methodology',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600',
      downloadable: false,
      featured: false
    }
  ];

  const filteredInsights = insights.filter(insight => {
    const matchesCategory = selectedCategory === 'All Categories' || insight.category === selectedCategory;
    const matchesSearch = insight.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         insight.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         insight.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredInsights = insights.filter(insight => insight.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <div className="pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-blue-50/50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100">
              Insights & Research
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Access our latest research findings, case studies, policy briefs, and thought leadership 
              content that drives evidence-based innovation and decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-12">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Search */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search insights and research..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Featured Insights */}
          {searchTerm === '' && selectedCategory === 'All Categories' && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Insights</h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {featuredInsights.map((insight) => (
                      <article 
                        key={insight.id}
                        className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl dark:shadow-xl dark:hover:shadow-2xl transition-all duration-300 group border border-gray-100 dark:border-gray-700"
                      >
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={insight.image} 
                        alt={insight.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4 flex items-center space-x-2">
                        <span className="bg-white/90 dark:bg-gray-900/60 backdrop-blur-sm text-gray-700 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium">
                          {insight.type}
                        </span>
                        {insight.downloadable && (
                          <span className="bg-blue-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                            <Download className="w-3 h-3" />
                            <span>PDF</span>
                          </span>
                        )}
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-yellow-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                      <div className="p-8 space-y-6">
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200 px-2 py-1 rounded text-xs font-medium">
                            {insight.category}
                          </span>
                          <span>•</span>
                          <span>{insight.readTime}</span>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 transition-colors">
                          {insight.title}
                        </h3>
                        
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {insight.excerpt}
                        </p>
                      </div>

                      {/* Meta */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-gray-500" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900 dark:text-gray-100">{insight.author}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center space-x-1">
                              <Calendar className="w-3 h-3" />
                              <span>{formatDate(insight.date)}</span>
                            </div>
                          </div>
                        </div>
                        
                        <button className="flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium group-hover:space-x-2 transition-all">
                          <span>Read</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* All Insights */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                {searchTerm || selectedCategory !== 'All Categories' ? 'Search Results' : 'Latest Insights'}
              </h2>
              <p className="text-gray-600">
                {filteredInsights.length} {filteredInsights.length === 1 ? 'result' : 'results'}
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {filteredInsights.map((insight) => (
                <article 
                  key={insight.id}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg dark:shadow-xl dark:hover:shadow-2xl transition-all duration-300 group border border-gray-100 dark:border-gray-700"
                >
                  {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                    <img 
                      src={insight.image} 
                      alt={insight.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 flex items-center space-x-2">
                      <span className="bg-white/90 dark:bg-gray-900/60 backdrop-blur-sm text-gray-700 dark:text-gray-200 px-2 py-1 rounded-full text-xs font-medium">
                        {insight.type}
                      </span>
                      {insight.downloadable && (
                        <span className="bg-blue-600/90 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                          <Download className="w-3 h-3" />
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                    <div className="p-6 space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200 px-2 py-1 rounded text-xs font-medium">
                          {insight.category}
                        </span>
                        <span>•</span>
                        <span>{insight.readTime}</span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {insight.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3 text-sm">
                        {insight.excerpt}
                      </p>
                    </div>

                    {/* Meta */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                          <User className="w-3 h-3 text-gray-500 dark:text-gray-300" />
                        </div>
                        <div>
                          <div className="text-xs font-medium text-gray-900 dark:text-gray-100">{insight.author}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{formatDate(insight.date)}</div>
                        </div>
                      </div>
                      
                      <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 p-1 rounded hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-colors">
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* No Results */}
          {filteredInsights.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400 dark:text-gray-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">No insights found</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Try adjusting your search terms or category filter</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All Categories');
                }}
                className="btn-secondary"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Resource Categories */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Explore by Category</h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
              {categories.slice(1).map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`p-4 rounded-xl text-center transition-all duration-300 hover:scale-105 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200'
                  }`}
                >
                  <div className="w-12 h-12 bg-white/20 dark:bg-white/5 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <BookOpen className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                  </div>
                  <div className="text-sm font-medium">{category}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100">
              Stay Updated with Latest Research
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Subscribe to our newsletter to receive the latest insights, research findings, 
              and thought leadership content directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/library" className="btn-primary shadow-lg shadow-blue-200/50 dark:shadow-blue-900/30">
                Access Full Library
              </Link>
              <button className="btn-secondary bg-white/95 backdrop-blur-sm shadow-md hover:shadow-lg dark:bg-gray-800 dark:shadow-blue-900/10">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InsightsPage;