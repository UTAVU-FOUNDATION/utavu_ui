import React from 'react';
import { Target, Eye, Compass, ArrowRight } from 'lucide-react';

const MissionVision: React.FC = () => {
  const principles = [
    {
      title: 'Evidence-Based Approach',
      description: 'All our work is grounded in rigorous research and data-driven insights.'
    },
    {
      title: 'Community-Centered Design',
      description: 'We prioritize solutions that are developed with and for the communities they serve.'
    },
    {
      title: 'Sustainable Impact',
      description: 'We focus on creating lasting change that continues beyond our direct involvement.'
    },
    {
      title: 'Collaborative Partnerships',
      description: 'We believe in the power of working together to achieve greater impact.'
    },
    {
      title: 'Innovation Excellence',
      description: 'We maintain the highest standards in innovation development and implementation.'
    },
    {
      title: 'Inclusive Growth',
      description: 'We ensure our work benefits all members of society, especially the marginalized.'
    }
  ];

  return (
    <div className="pt-32 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Mission & Vision
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our mission and vision guide everything we do, from the partnerships we forge 
              to the innovations we support and the impact we create.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center">
                <Target className="w-10 h-10 text-blue-600" />
              </div>
              
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Our Mission
                </h2>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                  <p className="text-xl text-gray-800 leading-relaxed font-medium">
                    To accelerate social innovation through research, capacity building, and 
                    strategic partnerships that create lasting impact in communities worldwide.
                  </p>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We exist to bridge the gap between innovative ideas and real-world implementation. 
                  By providing research expertise, building local capacity, and fostering strategic 
                  partnerships, we enable solutions to reach the communities that need them most.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">How We Fulfill Our Mission</h3>
              <div className="space-y-4">
                {[
                  'Conducting rigorous research to inform innovation development',
                  'Building capacity of local innovators and organizations',
                  'Facilitating partnerships between stakeholders',
                  'Providing technical and financial support for promising solutions',
                  'Measuring and documenting impact to inform future work'
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2 space-y-8">
              <div className="w-20 h-20 bg-accent/20 rounded-2xl flex items-center justify-center">
                <Eye className="w-10 h-10 text-accent" />
              </div>
              
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Our Vision
                </h2>
                <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg">
                  <p className="text-xl text-gray-800 leading-relaxed font-medium">
                    A world where innovative solutions to local challenges are accessible, 
                    scalable, and sustainable for all communities.
                  </p>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We envision a future where every community has access to the innovations 
                  they need to thrive, where local solutions are supported to scale globally, 
                  and where sustainable development is achieved through collaborative innovation.
                </p>
              </div>
            </div>
            
            <div className="lg:order-1 space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Our Vision in Action</h3>
              <div className="space-y-4">
                {[
                  'Communities have access to locally-relevant innovations',
                  'Successful solutions scale across regions and contexts',
                  'Innovation ecosystems are self-sustaining and thriving',
                  'Global challenges are addressed through local solutions',
                  'Sustainable development goals are achieved through innovation'
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto">
              <Compass className="w-10 h-10 text-purple-600" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Guiding Principles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The fundamental principles that shape our approach to work and guide 
              our decision-making in pursuit of our mission and vision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className="card group hover:shadow-lg transition-all duration-300">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {principle.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Alignment */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-blue-600 to-accent rounded-2xl p-8 lg:p-12 text-white">
            <div className="text-center space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Aligned with Global Goals
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Our mission and vision directly contribute to achieving the United Nations 
                Sustainable Development Goals through innovative, locally-relevant solutions.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-3">
                  <div className="text-2xl font-bold">SDG 3</div>
                  <div className="text-blue-100">Good Health and Well-being</div>
                </div>
                <div className="space-y-3">
                  <div className="text-2xl font-bold">SDG 4</div>
                  <div className="text-blue-100">Quality Education</div>
                </div>
                <div className="space-y-3">
                  <div className="text-2xl font-bold">SDG 17</div>
                  <div className="text-blue-100">Partnerships for the Goals</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Share Our Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us in working toward a world where innovation creates lasting positive 
              change for all communities. Together, we can turn vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary flex items-center space-x-2">
                <span>Partner with Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="btn-secondary">
                Learn About Our Work
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionVision;