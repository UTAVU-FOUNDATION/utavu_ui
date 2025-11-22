import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Download, BookOpen } from 'lucide-react';

interface InsightsProps {
  onSubscribe: () => void;
}

const Insights: React.FC<InsightsProps> = ({ onSubscribe }) => {
  const insights = [
    {
      type: 'Research Report',
      title: 'Digital Health Adoption in Sub-Saharan Africa: Barriers and Opportunities',
      excerpt: 'Comprehensive analysis of digital health technology adoption patterns across 12 countries, identifying key barriers and strategic opportunities for scale.',
      author: 'Dr. Sarah Kimani',
      date: '2024-02-15',
      readTime: '15 min read',
      category: 'Health Innovation',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600',
      downloadable: true
    },
    {
      type: 'Case Study',
      title: 'Scaling Agricultural Innovation: Lessons from the Climate-Smart Farming Initiative',
      excerpt: 'In-depth case study examining how technology transfer and capacity building enabled 5,000+ farmers to adopt climate-resilient farming practices.',
      author: 'James Mwangi',
      date: '2024-02-08',
      readTime: '12 min read',
      category: 'Agricultural Innovation',
      image: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=600',
      downloadable: false
    },
    {
      type: 'Policy Brief',
      title: 'Innovation Ecosystem Development: Policy Recommendations for African Governments',
      excerpt: 'Strategic policy recommendations for creating enabling environments that foster innovation and entrepreneurship in emerging markets.',
      author: 'Prof. Amina Hassan',
      date: '2024-01-28',
      readTime: '8 min read',
      category: 'Policy & Governance',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600',
      downloadable: true
    }
  ];

  const categories = [
    'All Categories',
    'Health Innovation',
    'Agricultural Innovation',
    'Education Technology',
    'Policy & Governance',
    'Research Methodology'
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <section id="insights" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100">
            Insights & Resources
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Access our latest research findings, case studies, policy briefs, and thought leadership 
            content that drives evidence-based innovation and decision-making.
          </p>
        </div>

        {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button 
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                index === 0 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Insights */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {insights.map((insight, index) => (
            <article 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group border border-gray-100 dark:border-gray-700"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={insight.image} 
                  alt={insight.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-700 dark:bg-white/10 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium">
                    {insight.type}
                  </span>
                  {insight.downloadable && (
                    <span className="bg-blue-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Download className="w-3 h-3" />
                      <span>PDF</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
                <div className="p-6 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-200 px-2 py-1 rounded text-xs font-medium">
                      {insight.category}
                    </span>
                    <span>•</span>
                    <span>{insight.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {insight.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
                    {insight.excerpt}
                  </p>
                </div>

                {/* Meta */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-gray-500 dark:text-gray-300" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-gray-100">{insight.author}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{formatDate(insight.date)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-medium group-hover:space-x-2 transition-all">
                    <span>Read</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Resource Categories */}
        <div className="bg-surface dark:bg-gray-900 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Resource Library</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">25+</div>
                <div className="text-gray-600 dark:text-gray-300">Research Reports</div>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto">
                <Download className="w-8 h-8 text-green-600" />
              </div>
                <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">40+</div>
                <div className="text-gray-600 dark:text-gray-300">Case Studies</div>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto">
                <User className="w-8 h-8 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">15+</div>
                <div className="text-gray-600 dark:text-gray-300">Policy Briefs</div>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto">
                <Calendar className="w-8 h-8 text-orange-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">Monthly</div>
                <div className="text-gray-600 dark:text-gray-300">New Content</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/insights" className="btn-primary mr-4">
            Access Full Library
          </Link>
          <button onClick={onSubscribe} className="btn-secondary">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </section>
  );
};

export default Insights;