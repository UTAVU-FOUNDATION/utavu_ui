import React from 'react';
import { GraduationCap, Users, TrendingUp, Award, ArrowRight } from 'lucide-react';

const EducationTechnology: React.FC = () => {
  const initiatives = [
    {
      title: 'Learning Management Systems',
      description: 'Developing offline-capable platforms for schools with limited connectivity',
      impact: '25,000+ students reached',
      status: 'Active'
    },
    {
      title: 'Digital Literacy Programs',
      description: 'Training educators and students in digital skills and technology use',
      impact: '500+ teachers trained',
      status: 'Expanding'
    },
    {
      title: 'Educational Content Creation',
      description: 'Developing localized educational content and interactive learning materials',
      impact: '150+ schools connected',
      status: 'Ongoing'
    }
  ];

  const caseStudies = [
    {
      title: 'Offline Learning Platform',
      description: 'Deployed learning management system that works without internet connectivity',
      metrics: { students: '15,000+', schools: '80+', improvement: '42%' },
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Teacher Training Initiative',
      description: 'Comprehensive digital literacy program for rural educators',
      metrics: { teachers: '300+', schools: '60+', retention: '88%' },
      image: 'https://images.pexels.com/photos/5212347/pexels-photo-5212347.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div className="pt-32 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto">
              <GraduationCap className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Education Technology
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Creating innovative learning platforms, educational tools, and capacity building 
              programs that enhance knowledge transfer and educational outcomes.
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
              Our education technology projects are transforming learning experiences 
              and improving educational access across communities.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <div key={index} className="card group hover:shadow-lg transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {initiative.status}
                    </span>
                    <GraduationCap className="w-6 h-6 text-blue-600" />
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
                      <div className="font-semibold text-blue-600">{initiative.impact}</div>
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
              Real-world examples of how our education technology initiatives are 
              improving learning outcomes and educational access.
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
                      <div className="text-2xl font-bold text-blue-600">{study.metrics.students}</div>
                      <div className="text-sm text-gray-600">Students</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{study.metrics.schools}</div>
                      <div className="text-sm text-gray-600">Schools</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{study.metrics.improvement}</div>
                      <div className="text-sm text-gray-600">Improvement</div>
                    </div>
                  </div>

                  <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium">
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
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 lg:p-12 text-white">
            <div className="text-center space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Education Technology Impact
              </h2>
              
              <div className="grid md:grid-cols-4 gap-8">
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-bold">50,000+</div>
                  <div className="text-blue-100">Students Reached</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-bold">200+</div>
                  <div className="text-blue-100">Schools Connected</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-bold">800+</div>
                  <div className="text-blue-100">Teachers Trained</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-bold">12</div>
                  <div className="text-blue-100">Countries</div>
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
              Transform Education with Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our mission to make quality education accessible to all through 
              innovative technology solutions and strategic partnerships.
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

export default EducationTechnology;