import React from 'react';
import { Rocket, Lightbulb, Cog, ArrowRight } from 'lucide-react';

const PrototypingIncubation: React.FC = () => {
  const services = [
    {
      icon: Lightbulb,
      title: 'Innovation Labs',
      description: 'State-of-the-art facilities and resources for developing and testing innovations',
      features: ['Co-working spaces', 'Prototyping equipment', 'Testing facilities', 'Collaboration areas']
    },
    {
      icon: Cog,
      title: 'Prototype Development',
      description: 'Technical support and resources for building and refining prototypes',
      features: ['Technical mentorship', 'Design thinking workshops', 'Rapid prototyping', 'User testing']
    },
    {
      icon: Rocket,
      title: 'Startup Incubation',
      description: 'Comprehensive support for early-stage startups and social enterprises',
      features: ['Business model development', 'Funding support', 'Market validation', 'Scaling strategies']
    }
  ];

  const incubationPrograms = [
    {
      name: 'Health Innovation Accelerator',
      duration: '6 months',
      focus: 'Digital health solutions',
      cohortSize: '10-15 startups',
      stage: 'Early stage to growth'
    },
    {
      name: 'AgriTech Incubator',
      duration: '12 months',
      focus: 'Agricultural technology',
      cohortSize: '8-12 startups',
      stage: 'Prototype to market'
    },
    {
      name: 'Social Impact Accelerator',
      duration: '9 months',
      focus: 'Social enterprises',
      cohortSize: '12-18 startups',
      stage: 'Concept to scale'
    }
  ];

  const successStories = [
    {
      title: 'MediConnect Platform',
      sector: 'Health Technology',
      description: 'Telemedicine platform connecting rural patients with urban specialists',
      achievements: ['$2M funding raised', '50,000+ patients served', 'Expanded to 5 countries'],
      currentStatus: 'Series A funded'
    },
    {
      title: 'SmartFarm Solutions',
      sector: 'Agricultural Technology',
      description: 'IoT-based crop monitoring and irrigation management system',
      achievements: ['10,000+ farmers using platform', '30% water savings achieved', 'Partnership with major NGO'],
      currentStatus: 'Scaling operations'
    }
  ];

  return (
    <div className="pt-32 pb-16 bg-gradient-to-br from-purple-50 via-white to-purple-50/50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="w-20 h-20 bg-purple-100/80 backdrop-blur-sm dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-purple-100 dark:shadow-purple-900/20">
              <Rocket className="w-10 h-10 text-purple-600 dark:text-purple-400" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100">
              Prototyping & Incubation
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Innovation labs, startup support, and prototype development that transforms 
              ideas into viable solutions with real-world impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Apply to Program
              </button>
              <button className="btn-secondary">
                Tour Innovation Lab
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white dark:bg-gray-900 backdrop-blur-sm">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100">
              Innovation Support Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive support ecosystem that guides innovations from concept 
              to market-ready solutions with sustainable impact.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card group bg-white dark:bg-gray-800 hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-purple-900/10 transition-all duration-300">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incubation Programs */}
      <section className="section-padding backdrop-blur-sm">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100">
              Incubation Programs
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Sector-specific incubation programs designed to accelerate innovation 
              and support entrepreneurs in bringing solutions to market.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {incubationPrograms.map((program, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-lg dark:shadow-xl dark:hover:shadow-2xl dark:shadow-purple-900/10 transition-all duration-300 group">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {program.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">{program.focus}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Duration</div>
                      <div className="font-semibold text-gray-900 dark:text-gray-100">{program.duration}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Cohort Size</div>
                      <div className="font-semibold text-gray-900 dark:text-gray-100">{program.cohortSize}</div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Target Stage</div>
                    <div className="font-semibold text-purple-600 dark:text-purple-400">{program.stage}</div>
                  </div>

                  <button className="w-full bg-purple-50 dark:bg-purple-900/30 hover:bg-purple-100 dark:hover:bg-purple-900/50 text-purple-600 dark:text-purple-400 py-3 rounded-lg font-medium transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding bg-white dark:bg-gray-900 backdrop-blur-sm">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Examples of innovations that have graduated from our programs and 
              are creating meaningful impact in their respective sectors.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="card group bg-white dark:bg-gray-800 hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-purple-900/10 transition-all duration-300">
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{story.title}</h3>
                      <p className="text-purple-600 dark:text-purple-400 font-medium">{story.sector}</p>
                    </div>
                    <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 px-3 py-1 rounded-full text-sm font-medium">
                      {story.currentStatus}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {story.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">Key Achievements:</h4>
                    {story.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>

                  <button className="flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium group-hover:space-x-3 transition-all">
                    <span>Read Full Story</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Process */}
      <section className="section-padding backdrop-blur-sm">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100">
              Innovation Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our structured approach to innovation development, from initial concept 
              to market-ready solution and sustainable scaling.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: '01', title: 'Ideate', description: 'Generate and validate innovative concepts' },
              { step: '02', title: 'Prototype', description: 'Build and test minimum viable products' },
              { step: '03', title: 'Validate', description: 'Test with users and gather feedback' },
              { step: '04', title: 'Scale', description: 'Develop business model and growth strategy' },
              { step: '05', title: 'Impact', description: 'Measure and optimize for sustainable impact' }
            ].map((phase, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-purple-600 dark:bg-purple-700 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold shadow-lg shadow-purple-200 dark:shadow-purple-900/20">
                  {phase.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{phase.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="section-padding bg-white dark:bg-gray-900 backdrop-blur-sm">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-700 dark:to-purple-800 rounded-2xl p-8 lg:p-12 text-white shadow-lg shadow-purple-200 dark:shadow-purple-900/20">
            <div className="text-center space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Innovation Impact
              </h2>
              
              <div className="grid md:grid-cols-4 gap-8">
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-bold">150+</div>
                  <div className="text-purple-100">Startups Supported</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-bold">$25M+</div>
                  <div className="text-purple-100">Funding Raised</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-bold">80%</div>
                  <div className="text-purple-100">Graduation Rate</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-bold">500+</div>
                  <div className="text-purple-100">Jobs Created</div>
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
              Turn Your Idea into Impact
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Join our innovation ecosystem and get the support you need to develop, 
              test, and scale solutions that create meaningful change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary shadow-lg shadow-purple-200/50 dark:shadow-purple-900/30">
                Apply to Incubator
              </button>
              <button className="btn-secondary bg-white/95 backdrop-blur-sm shadow-md hover:shadow-lg dark:bg-gray-800 dark:shadow-purple-900/10">
                Schedule Lab Tour
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrototypingIncubation;