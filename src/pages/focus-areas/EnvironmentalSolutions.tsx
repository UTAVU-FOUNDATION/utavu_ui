import React from 'react';
import { Leaf, Users, TrendingUp, Award, ArrowRight } from 'lucide-react';

const EnvironmentalSolutions: React.FC = () => {
  const initiatives = [
    {
      title: 'Climate Change Mitigation',
      description: 'Developing technologies and strategies to reduce carbon emissions',
      impact: '50,000 tons CO2 reduced',
      status: 'Active'
    },
    {
      title: 'Renewable Energy Projects',
      description: 'Solar and wind energy solutions for rural communities',
      impact: '100+ communities powered',
      status: 'Expanding'
    },
    {
      title: 'Environmental Monitoring',
      description: 'IoT-based systems for tracking environmental health indicators',
      impact: '15 monitoring stations',
      status: 'Ongoing'
    }
  ];

  const caseStudies = [
    {
      title: 'Solar Microgrid Network',
      description: 'Deployed solar microgrids providing clean energy to remote villages',
      metrics: { communities: '80+', households: '5,000+', emissions: '60%' },
      image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Waste Management System',
      description: 'Smart waste collection and recycling system for urban areas',
      metrics: { waste: '70%', recycling: '85%', cities: '12' },
      image: 'https://images.pexels.com/photos/2800833/pexels-photo-2800833.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div className="pt-32 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto">
              <Leaf className="w-10 h-10 text-emerald-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Environmental Solutions
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Creating innovative solutions for climate change mitigation, sustainability projects, 
              and environmental conservation technologies that protect our planet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Partner with Us
              </button>
              <button className="btn-secondary">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Current Initiatives */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Current Initiatives
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our environmental solutions are addressing critical challenges in climate change, 
              renewable energy, and environmental conservation.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <div key={index} className="card group hover:shadow-lg transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                      {initiative.status}
                    </span>
                    <Leaf className="w-6 h-6 text-emerald-600" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {initiative.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {initiative.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">Impact</div>
                      <div className="font-semibold text-emerald-600">{initiative.impact}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world examples of how our environmental solutions are creating 
              positive impact for communities and the planet.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6 space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900">{study.title}</h3>
                    <p className="text-gray-600">{study.description}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald-600">{study.metrics.communities}</div>
                      <div className="text-sm text-gray-600">Communities</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald-600">{study.metrics.households}</div>
                      <div className="text-sm text-gray-600">Households</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald-600">{study.metrics.emissions}</div>
                      <div className="text-sm text-gray-600">Emissions Cut</div>
                    </div>
                  </div>

                  <button className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 font-medium">
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-8 lg:p-12 text-white">
            <div className="text-center space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Environmental Impact
              </h2>
              
              <div className="grid md:grid-cols-4 gap-8">
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-bold">100,000+</div>
                  <div className="text-emerald-100">Tons CO2 Reduced</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-bold">200+</div>
                  <div className="text-emerald-100">Communities Served</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-bold">30+</div>
                  <div className="text-emerald-100">Green Technologies</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-bold">15</div>
                  <div className="text-emerald-100">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Build a Sustainable Future
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our mission to develop and implement environmental solutions that 
              create lasting positive impact for our planet and future generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Become a Partner
              </button>
              <button className="btn-secondary">
                Submit a Proposal
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnvironmentalSolutions;