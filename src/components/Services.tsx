import React from 'react';
import { Search, Users, Rocket, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServicesProps {
  onScheduleConsultation: () => void;
}

const Services: React.FC<ServicesProps> = ({ onScheduleConsultation }) => {
  const services = [
    {
      icon: Search,
      title: 'Research & Evaluation',
      description: 'Evidence-based research, impact assessment, and data-driven insights that inform decision-making and measure success.',
      features: [
        'Baseline and endline studies',
        'Impact evaluation frameworks',
        'Policy research and analysis',
        'Data collection and analysis'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Capacity Building',
      description: 'Training programs, skill development, and knowledge transfer initiatives that empower individuals and organizations.',
      features: [
        'Leadership development programs',
        'Technical skills training',
        'Organizational development',
        'Mentorship and coaching'
      ],
      color: 'from-accent to-green-500'
    },
    {
      icon: Rocket,
      title: 'Prototyping & Incubation',
      description: 'Innovation labs, startup support, and prototype development that transforms ideas into viable solutions.',
      features: [
        'Innovation lab facilities',
        'Prototype development support',
        'Startup incubation programs',
        'Technology transfer services'
      ],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive support services that guide innovations from concept to implementation, 
            ensuring sustainable impact and scalable solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="relative p-8 space-y-6">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <Link to={service.path} className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium group-hover:space-x-3 transition-all">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button onClick={onScheduleConsultation} className="btn-primary">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;