import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import Ribbons from './Ribbons';

const Hero: React.FC = () => {
  const trustedLogos = [
    'University of Nairobi',
    'USAID',
    'World Bank',
    'Gates Foundation',
    'African Development Bank',
    'Google.org'
  ];

  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 z-[1]">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      {/* S-curved Animated Ribbons - positioned after the background patterns but before content */}
      <div className="absolute inset-0 z-[2]" style={{ pointerEvents: 'none' }}>
        <Ribbons className="z-[2]" />
      </div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-[5]">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6 relative">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Utavu Foundation
                <span className="block">
                  <span className="text-utavuGreen">Research</span> & 
                  <span className="text-utavuPurple"> Innovation</span>
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                Supporting research, prototyping and social innovation that solves local problems at scale.
              </p>
              
              <p className="text-lg text-gray-500 italic">
                Utavu: enabling ideas to grow
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary flex items-center justify-center space-x-2 group relative z-10">
                <span>Partner with Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link to="/focus-areas" className="btn-secondary flex items-center justify-center space-x-2 relative z-10">
                <span>Explore Focus Areas</span>
                <Play className="w-4 h-4" />
              </Link>
            </div>

            {/* Trusted Partners */}
            <div className="pt-8 relative z-10">
              <p className="text-sm text-gray-500 mb-4 font-medium">Trusted by leading organizations</p>
              <div className="flex flex-wrap items-center gap-6 opacity-60">
                {trustedLogos.map((logo, index) => (
                  <div 
                    key={index}
                    className="text-sm font-medium text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                  >
                    {logo}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-subtle p-8 lg:p-12">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-accent/20 rounded-xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-900">Innovation Hub</h3>
                    <p className="text-gray-600">Where ideas transform into solutions</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-lg">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-600 rounded-full shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;