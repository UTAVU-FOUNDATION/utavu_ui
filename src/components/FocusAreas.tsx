import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, GraduationCap, Sprout, Leaf, Users, Zap } from 'lucide-react';

const FocusAreas: React.FC = () => {
  const focusAreas = [
    {
      icon: Heart,
      title: 'Health Innovation',
      description: 'Digital health solutions, medical research, and healthcare accessibility initiatives that improve community wellbeing.',
      color: 'bg-red-100 text-red-600',
      path: '/focus-areas/health-innovation'
    },
    {
      icon: GraduationCap,
      title: 'Education Technology',
      description: 'Learning platforms, educational tools, and capacity building programs that enhance knowledge transfer.',
      color: 'bg-blue-100 text-blue-600',
      path: '/focus-areas/education-technology'
    },
    {
      icon: Sprout,
      title: 'Agricultural Innovation',
      description: 'Smart farming solutions, food security initiatives, and sustainable agriculture practices.',
      color: 'bg-green-100 text-utavuGreen',
      path: '/focus-areas/agricultural-innovation'
    },
    {
      icon: Leaf,
      title: 'Environmental Solutions',
      description: 'Climate change mitigation, sustainability projects, and environmental conservation technologies.',
      color: 'bg-emerald-100 text-emerald-600',
      path: '/focus-areas/environmental-solutions'
    },
    {
      icon: Users,
      title: 'Social Innovation',
      description: 'Community development, social entrepreneurship, and inclusive innovation for marginalized populations.',
      color: 'bg-purple-100 text-utavuPurple',
      path: '/focus-areas/social-innovation'
    },
    {
      icon: Zap,
      title: 'Technology Access',
      description: 'Digital inclusion, infrastructure development, and technology adoption in underserved communities.',
      color: 'bg-yellow-100 text-yellow-600',
      path: '/focus-areas/technology-access'
    }
  ];

  return (
    <section id="focus-areas" className="section-padding bg-surface">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Our Focus Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We concentrate our efforts on key sectors where innovation can create the most significant 
            and sustainable impact for communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => (
            <div 
              key={index}
              className="card group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className={`w-16 h-16 rounded-xl ${area.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <area.icon className="w-8 h-8" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <div className="pt-4">
                  <Link to={area.path} className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center space-x-1 group-hover:space-x-2 transition-all">
                    <span>Learn more</span>
                    <span className="text-lg">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/focus-areas" className="btn-secondary">
            View All Focus Areas
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;