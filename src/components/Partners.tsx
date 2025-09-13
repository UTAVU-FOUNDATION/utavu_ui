import React from 'react';
import { Link } from 'react-router-dom';

interface PartnersProps {
  onBecomePartner: () => void;
}

const Partners: React.FC<PartnersProps> = ({ onBecomePartner }) => {
  const partners = [
    { name: 'University of Nairobi', category: 'Academic' },
    { name: 'USAID', category: 'Development' },
    { name: 'World Bank', category: 'Financial' },
    { name: 'Gates Foundation', category: 'Philanthropic' },
    { name: 'African Development Bank', category: 'Financial' },
    { name: 'Google.org', category: 'Technology' },
    { name: 'Mastercard Foundation', category: 'Philanthropic' },
    { name: 'UNICEF', category: 'Development' },
    { name: 'WHO', category: 'Health' },
    { name: 'UNESCO', category: 'Education' },
    { name: 'UNDP', category: 'Development' },
    { name: 'Rockefeller Foundation', category: 'Philanthropic' }
  ];

  const categories = [
    { name: 'Academic Partners', color: 'bg-blue-100 text-blue-700' },
    { name: 'Development Organizations', color: 'bg-green-100 text-green-700' },
    { name: 'Financial Institutions', color: 'bg-purple-100 text-purple-700' },
    { name: 'Philanthropic Foundations', color: 'bg-orange-100 text-orange-700' },
    { name: 'Technology Partners', color: 'bg-cyan-100 text-cyan-700' },
    { name: 'Health Organizations', color: 'bg-red-100 text-red-700' }
  ];

  return (
    <section id="partnerships" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Our Partners & Funders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We collaborate with leading organizations worldwide to amplify our impact and 
            create sustainable solutions for global challenges.
          </p>
        </div>

        {/* Partner Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <span 
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium ${category.color}`}
            >
              {category.name}
            </span>
          ))}
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 mb-16">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="group flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-200 rounded-lg mb-3 mx-auto flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <span className="text-2xl font-bold text-gray-400 group-hover:text-blue-600">
                    {partner.name.charAt(0)}
                  </span>
                </div>
                <div className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                  {partner.name}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {partner.category}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Stats */}
        <div className="bg-surface rounded-2xl p-8 lg:p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600">50+</div>
              <div className="text-gray-600">Active Partners</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-accent">20+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-purple-600">$50M+</div>
              <div className="text-gray-600">Funding Mobilized</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-orange-600">100+</div>
              <div className="text-gray-600">Joint Projects</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button onClick={onBecomePartner} className="btn-primary mr-4">
            Become a Partner
          </button>
          <Link to="/partnerships" className="btn-secondary">
            View Partnership Opportunities
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Partners;