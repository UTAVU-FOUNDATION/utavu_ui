import React from 'react';
import { Sprout, Users, TrendingUp, Award, ArrowRight } from 'lucide-react';

const AgriculturalInnovation: React.FC = () => {
  const initiatives = [
    {
      title: 'Climate-Smart Farming',
      description: 'Developing resilient farming techniques adapted to climate change',
      impact: '5,000+ farmers trained',
      status: 'Active'
    },
    {
      title: 'Agricultural Technology Hub',
      description: 'Research and training center for innovative farming solutions',
      impact: '35% yield increase',
      status: 'Expanding'
    },
    {
      title: 'Food Security Programs',
      description: 'Sustainable agriculture practices for improved food security',
      impact: '12 technologies developed',
      status: 'Ongoing'
    }
  ];

  const caseStudies = [
    {
      title: 'Smart Irrigation System',
      description: 'IoT-based irrigation system that reduces water usage by 40%',
      metrics: { farmers: '2,000+', water: '40%', yield: '25%' },
      image: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Crop Disease Detection',
      description: 'AI-powered mobile app for early detection of crop diseases',
      metrics: { downloads: '10,000+', accuracy: '92%', savings: '30%' },
      image: 'https://images.pexels.com/photos/2132228/pexels-photo-2132228.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div className="pt-32 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto">
              <Sprout className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Agricultural Innovation
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Advancing smart farming solutions, food security initiatives, and sustainable 
              agriculture practices that increase productivity and resilience.
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
              Our agricultural innovation projects are helping farmers increase productivity 
              while building resilience against climate change.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <div key={index} className="card group hover:shadow-lg transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      {initiative.status}
                    </span>
                    <Sprout className="w-6 h-6 text-green-600" />
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
                      <div className="font-semibold text-green-600">{initiative.impact}</div>
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
              Real-world examples of how our agricultural innovations are transforming 
              farming practices and improving livelihoods.
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
                      <div className="text-2xl font-bold text-green-600">{study.metrics.farmers}</div>
                      <div className="text-sm text-gray-600">Farmers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{study.metrics.water}</div>
                      <div className="text-sm text-gray-600">Water Saved</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{study.metrics.yield}</div>
                      <div className="text-sm text-gray-600">Yield Increase</div>
                    </div>
                  </div>

                  <button className="flex items-center space-x-2 text-green-600 hover:text-green-700 font-medium">
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
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 lg:p-12 text-white">
            <div className="text-center space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Agricultural Innovation Impact
              </h2>
              
              <div className="grid md:grid-cols-4 gap-8">
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-bold">15,000+</div>
                  <div className="text-green-100">Farmers Supported</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-bold">40%</div>
                  <div className="text-green-100">Yield Improvement</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-bold">25+</div>
                  <div className="text-green-100">Technologies</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-bold">10</div>
                  <div className="text-green-100">Countries</div>
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
              Revolutionize Agriculture Together
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partner with us to develop and scale agricultural innovations that feed 
              the world while protecting our planet for future generations.
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

export default AgriculturalInnovation;