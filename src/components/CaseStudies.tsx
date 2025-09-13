import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, Award } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      title: 'Digital Health Platform for Rural Communities',
      category: 'Health Innovation',
      description: 'Developed a telemedicine platform that connects rural patients with healthcare providers, improving access to medical care.',
      metrics: [
        { label: 'Patients Served', value: '15,000+', icon: Users },
        { label: 'Healthcare Providers', value: '200+', icon: Award },
        { label: 'Consultation Success Rate', value: '94%', icon: TrendingUp }
      ],
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Agricultural Innovation Hub',
      category: 'Agricultural Innovation',
      description: 'Established a research and training center that develops climate-smart farming techniques for smallholder farmers.',
      metrics: [
        { label: 'Farmers Trained', value: '5,000+', icon: Users },
        { label: 'Crop Yield Increase', value: '35%', icon: TrendingUp },
        { label: 'Technologies Developed', value: '12', icon: Award }
      ],
      image: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Education Technology Initiative',
      category: 'Education Technology',
      description: 'Created an offline-capable learning management system for schools in areas with limited internet connectivity.',
      metrics: [
        { label: 'Students Reached', value: '25,000+', icon: Users },
        { label: 'Schools Connected', value: '150+', icon: Award },
        { label: 'Learning Improvement', value: '42%', icon: TrendingUp }
      ],
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section className="section-padding bg-surface">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Impact Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world examples of how our research and innovation initiatives are creating 
            measurable impact in communities across different sectors.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${study.color} opacity-20`}></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                    {study.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {study.description}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-1 gap-4">
                  {study.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${study.color} flex items-center justify-center`}>
                        <metric.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                        <div className="text-sm text-gray-600">{metric.label}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center space-x-1 group-hover:space-x-2 transition-all">
                    <span>Read full case study</span>
                    <span className="text-lg">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/case-studies" className="btn-secondary">
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;