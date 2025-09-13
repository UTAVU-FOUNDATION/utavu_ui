import React from 'react';
import { Heart, GraduationCap, Sprout, Leaf, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const FocusAreas: React.FC = () => {
  const focusAreas = [
    {
      icon: Heart,
      title: 'Health Innovation',
      description: 'Digital health solutions, medical research, and healthcare accessibility initiatives that improve community wellbeing and save lives.',
      color: 'from-red-500 to-red-600',
      path: '/focus-areas/health-innovation',
      stats: { projects: '25+', beneficiaries: '50,000+', countries: '8' }
    },
    {
      icon: GraduationCap,
      title: 'Education Technology',
      description: 'Learning platforms, educational tools, and capacity building programs that enhance knowledge transfer and educational outcomes.',
      color: 'from-blue-500 to-blue-600',
      path: '/focus-areas/education-technology',
      stats: { projects: '30+', beneficiaries: '75,000+', countries: '12' }
    },
    {
      icon: Sprout,
      title: 'Agricultural Innovation',
      description: 'Smart farming solutions, food security initiatives, and sustainable agriculture practices that increase productivity.',
      color: 'from-green-500 to-green-600',
      path: '/focus-areas/agricultural-innovation',
      stats: { projects: '20+', beneficiaries: '25,000+', countries: '10' }
    },
    {
      icon: Leaf,
      title: 'Environmental Solutions',
      description: 'Climate change mitigation, sustainability projects, and environmental conservation technologies that protect our planet.',
      color: 'from-emerald-500 to-emerald-600',
      path: '/focus-areas/environmental-solutions',
      stats: { projects: '15+', beneficiaries: '100,000+', countries: '15' }
    },
    {
      icon: Users,
      title: 'Social Innovation',
      description: 'Community development, social entrepreneurship, and inclusive innovation for marginalized populations.',
      color: 'from-purple-500 to-purple-600',
      path: '/focus-areas/social-innovation',
      stats: { projects: '35+', beneficiaries: '200,000+', countries: '18' }
    },
    {
      icon: Zap,
      title: 'Technology Access',
      description: 'Digital inclusion, infrastructure development, and technology adoption in underserved communities.',
      color: 'from-yellow-500 to-yellow-600',
      path: '/focus-areas/technology-access',
      stats: { projects: '18+', beneficiaries: '80,000+', countries: '14' }
    }
  ];

  return (
    <div className="pt-32 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Our Focus Areas
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We concentrate our efforts on key sectors where innovation can create the most significant 
              and sustainable impact for communities worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Focus Areas Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="relative p-8 space-y-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <area.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {area.description}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">{area.stats.projects}</div>
                      <div className="text-xs text-gray-500">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">{area.stats.beneficiaries}</div>
                      <div className="text-xs text-gray-500">Beneficiaries</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">{area.stats.countries}</div>
                      <div className="text-xs text-gray-500">Countries</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-4">
                    <Link 
                      to={area.path}
                      className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium group-hover:space-x-3 transition-all"
                    >
                      <span>Learn more</span>
                      <span className="text-lg">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partner with us to develop and implement innovative solutions that create 
              lasting positive change in your area of expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Partner with Us
              </Link>
              <Link to="/insights" className="btn-secondary">
                Explore Our Research
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FocusAreas;