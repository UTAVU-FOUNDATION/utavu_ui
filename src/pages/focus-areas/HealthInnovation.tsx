import React from 'react';
import { Heart, Users, TrendingUp, Award, ArrowRight } from 'lucide-react';

const HealthInnovation: React.FC = () => {
  const initiatives = [
    {
      title: 'Digital Health Platforms',
      description: 'Developing telemedicine and digital health solutions for remote communities',
      impact: '15,000+ patients served',
      status: 'Active'
    },
    {
      title: 'Medical Research Programs',
      description: 'Supporting clinical research and evidence-based healthcare innovations',
      impact: '25+ research studies',
      status: 'Ongoing'
    },
    {
      title: 'Healthcare Accessibility',
      description: 'Improving access to quality healthcare in underserved areas',
      impact: '200+ healthcare providers',
      status: 'Expanding'
    }
  ];

  const caseStudies = [
    {
      title: 'Rural Telemedicine Network',
      description: 'Connected 50+ rural clinics with specialist doctors in urban centers',
      metrics: { patients: '8,000+', providers: '120+', satisfaction: '94%' },
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Mobile Health Screening',
      description: 'Deployed mobile units for preventive health screening in remote areas',
      metrics: { screenings: '12,000+', conditions: '500+', followups: '85%' },
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div className="pt-32 pb-16 bg-gradient-to-br from-red-50 via-white to-red-50/50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="w-20 h-20 bg-red-100/80 backdrop-blur-sm dark:bg-red-900/30 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-red-100 dark:shadow-red-900/20">
              <Heart className="w-10 h-10 text-red-600 dark:text-red-400" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100">
              Health Innovation
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Advancing digital health solutions, medical research, and healthcare accessibility 
              initiatives that improve community wellbeing and save lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary shadow-lg shadow-red-200/50 dark:shadow-red-900/30">
                Partner with Us
              </button>
              <button className="btn-secondary bg-white/95 backdrop-blur-sm shadow-md hover:shadow-lg dark:bg-gray-800 dark:shadow-red-900/10">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Current Initiatives */}
      <section className="section-padding backdrop-blur-sm">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100">
              Current Initiatives
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our active health innovation projects are creating measurable impact 
              across communities and healthcare systems.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <div key={index} className="card group bg-white dark:bg-gray-800 hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-red-900/10 transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 px-3 py-1 rounded-full text-sm font-medium">
                      {initiative.status}
                    </span>
                    <Heart className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                      {initiative.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {initiative.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500 dark:text-gray-400">Impact</div>
                      <div className="font-semibold text-red-600 dark:text-red-400">{initiative.impact}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding backdrop-blur-sm">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Real-world examples of how our health innovation initiatives are 
              transforming healthcare delivery and outcomes.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg dark:shadow-xl dark:hover:shadow-2xl dark:shadow-red-900/10 transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6 space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{study.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{study.description}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600 dark:text-red-400">{study.metrics.patients}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Patients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600 dark:text-red-400">{study.metrics.providers}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Providers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600 dark:text-red-400">{study.metrics.satisfaction}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Satisfaction</div>
                    </div>
                  </div>

                  <button className="flex items-center space-x-2 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 font-medium">
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
      <section className="section-padding backdrop-blur-sm">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-red-500 to-red-600 dark:from-red-700 dark:to-red-800 rounded-2xl p-8 lg:p-12 text-white">
            <div className="text-center space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Health Innovation Impact
              </h2>
              
              <div className="grid md:grid-cols-4 gap-8">
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-bold">25,000+</div>
                  <div className="text-red-100">Lives Impacted</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-bold">15+</div>
                  <div className="text-red-100">Active Projects</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-bold">300+</div>
                  <div className="text-red-100">Healthcare Partners</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-bold">8</div>
                  <div className="text-red-100">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding backdrop-blur-sm">
        <div className="container-custom">
          <div className="text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100">
              Join Our Health Innovation Network
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Partner with us to develop, implement, and scale health innovations 
              that create lasting impact in communities worldwide.
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

export default HealthInnovation;