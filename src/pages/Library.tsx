import React, { useState } from 'react';
import { Search, Filter, Download, Calendar, User, BookOpen, FileText, Award, TrendingUp } from 'lucide-react';

const Library: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedType, setSelectedType] = useState('All Types');

  const categories = [
    'All Categories',
    'Health Innovation',
    'Agricultural Innovation', 
    'Education Technology',
    'Environmental Solutions',
    'Policy & Governance',
    'Research Methodology'
  ];

  const resourceTypes = [
    'All Types',
    'Research Report',
    'Case Study',
    'Policy Brief',
    'White Paper',
    'Technical Guide',
    'Best Practices'
  ];

  const resources = [
    {
      id: 1,
      title: 'Digital Health Adoption in Sub-Saharan Africa: Barriers and Opportunities',
      type: 'Research Report',
      category: 'Health Innovation',
      author: 'Dr. Sarah Kimani',
      date: '2024-02-15',
      description: 'Comprehensive analysis of digital health technology adoption patterns across 12 countries, identifying key barriers and strategic opportunities for scale.',
      downloadUrl: '#',
      readTime: '15 min',
      featured: true
    },
    {
      id: 2,
      title: 'Climate-Smart Agriculture Implementation Guide',
      type: 'Technical Guide',
      category: 'Agricultural Innovation',
      author: 'James Mwangi',
      date: '2024-02-10',
      description: 'Step-by-step guide for implementing climate-smart farming techniques in smallholder agricultural systems.',
      downloadUrl: '#',
      readTime: '12 min',
      featured: false
    },
    {
      id: 3,
      title: 'Innovation Ecosystem Development: Policy Recommendations',
      type: 'Policy Brief',
      category: 'Policy & Governance',
      author: 'Prof. Amina Hassan',
      date: '2024-01-28',
      description: 'Strategic policy recommendations for creating enabling environments that foster innovation and entrepreneurship.',
      downloadUrl: '#',
      readTime: '8 min',
      featured: true
    },
    {
      id: 4,
      title: 'Rural Education Technology Case Study: Kenya',
      type: 'Case Study',
      category: 'Education Technology',
      author: 'Dr. Michael Ochieng',
      date: '2024-01-20',
      description: 'In-depth analysis of offline learning platform deployment in rural Kenyan schools.',
      downloadUrl: '#',
      readTime: '10 min',
      featured: false
    },
    {
      id: 5,
      title: 'Renewable Energy Access in Remote Communities',
      type: 'White Paper',
      category: 'Environmental Solutions',
      author: 'Dr. Grace Wanjiku',
      date: '2024-01-15',
      description: 'Comprehensive study on solar microgrid implementation and community energy access models.',
      downloadUrl: '#',
      readTime: '18 min',
      featured: false
    },
    {
      id: 6,
      title: 'Participatory Research Methods in Development',
      type: 'Research Report',
      category: 'Research Methodology',
      author: 'Prof. David Kiprotich',
      date: '2024-01-10',
      description: 'Best practices for conducting participatory research in development contexts.',
      downloadUrl: '#',
      readTime: '14 min',
      featured: false
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All Categories' || resource.category === selectedCategory;
    const matchesType = selectedType === 'All Types' || resource.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const featuredResources = resources.filter(resource => resource.featured);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Research Report': return BookOpen;
      case 'Case Study': return FileText;
      case 'Policy Brief': return Award;
      case 'White Paper': return TrendingUp;
      case 'Technical Guide': return BookOpen;
      case 'Best Practices': return Award;
      default: return FileText;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <div className="pt-32 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Resource Library
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Access our comprehensive collection of research reports, case studies, policy briefs, 
              and technical guides that drive evidence-based innovation and decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-surface rounded-2xl p-8 mb-12">
            <div className="grid lg:grid-cols-4 gap-6">
              {/* Search */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search resources..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Type Filter */}
              <div>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {resourceTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {filteredResources.length} of {resources.length} resources
            </p>
          </div>

          {/* Featured Resources */}
          {searchTerm === '' && selectedCategory === 'All Categories' && selectedType === 'All Types' && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Resources</h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {featuredResources.map((resource) => {
                  const IconComponent = getTypeIcon(resource.type);
                  return (
                    <div key={resource.id} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                      <div className="space-y-6">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                              <IconComponent className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                                {resource.type}
                              </span>
                              <div className="text-sm text-gray-500 mt-1">{resource.category}</div>
                            </div>
                          </div>
                          <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
                            Featured
                          </span>
                        </div>

                        <div className="space-y-3">
                          <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                            {resource.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {resource.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                              <User className="w-4 h-4 text-gray-400" />
                              <span className="text-sm text-gray-600">{resource.author}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-4 h-4 text-gray-400" />
                              <span className="text-sm text-gray-600">{formatDate(resource.date)}</span>
                            </div>
                          </div>
                          <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium">
                            <Download className="w-4 h-4" />
                            <span>Download</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* All Resources */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              {searchTerm || selectedCategory !== 'All Categories' || selectedType !== 'All Types' ? 'Search Results' : 'All Resources'}
            </h2>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredResources.map((resource) => {
                const IconComponent = getTypeIcon(resource.type);
                return (
                  <div key={resource.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-gray-600" />
                        </div>
                        <div>
                          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm font-medium">
                            {resource.type}
                          </span>
                          <div className="text-xs text-gray-500 mt-1">{resource.category}</div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors line-clamp-2">
                          {resource.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                          {resource.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <div className="space-y-1">
                          <div className="text-sm font-medium text-gray-900">{resource.author}</div>
                          <div className="text-xs text-gray-500">{formatDate(resource.date)} • {resource.readTime}</div>
                        </div>
                        <button className="text-blue-600 hover:text-blue-700 p-2 rounded-lg hover:bg-blue-50 transition-colors">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* No Results */}
          {filteredResources.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No resources found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search terms or filters</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All Categories');
                  setSelectedType('All Types');
                }}
                className="btn-secondary"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Statistics */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12 text-white">
            <div className="text-center space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Knowledge Repository
              </h2>
              
              <div className="grid md:grid-cols-4 gap-8">
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-bold">150+</div>
                  <div className="text-blue-100">Total Resources</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-bold">25+</div>
                  <div className="text-blue-100">Research Reports</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-bold">40+</div>
                  <div className="text-blue-100">Case Studies</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-bold">Monthly</div>
                  <div className="text-blue-100">New Content</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Library;