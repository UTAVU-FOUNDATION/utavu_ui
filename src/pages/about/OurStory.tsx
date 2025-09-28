import React from 'react';
import { Users, Award, Globe, Heart } from 'lucide-react';

const OurStory: React.FC = () => {
  const milestones = [
    {
      year: '2018',
      title: 'Foundation Established',
      description: 'Utavu Foundation was founded with a vision to enable ideas to grow and create sustainable impact.'
    },
    {
      year: '2019',
      title: 'First Innovation Lab',
      description: 'Opened our first innovation lab in Nairobi, providing space and resources for local innovators.'
    },
    {
      year: '2020',
      title: 'Regional Expansion',
      description: 'Expanded operations to Uganda and Tanzania, establishing partnerships with local universities.'
    },
    {
      year: '2021',
      title: 'Digital Health Initiative',
      description: 'Launched major digital health program, reaching over 10,000 patients in rural communities.'
    },
    {
      year: '2022',
      title: 'Agricultural Innovation Hub',
      description: 'Established specialized hub for agricultural innovation, training 5,000+ farmers.'
    },
    {
      year: '2023',
      title: 'International Recognition',
      description: 'Received UN recognition for outstanding contribution to sustainable development goals.'
    },
    {
      year: '2024',
      title: 'Scale and Impact',
      description: 'Reached milestone of supporting 100+ innovations across 15 countries in Africa.'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Impact First',
      description: 'We prioritize solutions that create meaningful, measurable impact in communities.'
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: 'We believe in the power of partnerships and collective action to solve complex challenges.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in research, innovation, and program delivery.'
    },
    {
      icon: Globe,
      title: 'Inclusive',
      description: 'We ensure our work benefits all communities, especially the most marginalized.'
    }
  ];

  return (
    <div className="pt-32 pb-16">
      {/* Hero Section */}
  <section className="bg-gradient-to-br from-blue-50 to-white section-padding" data-reveal data-reveal-from="bottom" data-reveal-stagger>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Our Story
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              From a small idea to a continental movement, discover how Utavu Foundation 
              has grown to become a leading force in social innovation across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story */}
  <section className="section-padding bg-white" data-reveal data-reveal-from="left" data-reveal-delay="100">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Where It All Began
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  In 2018, a group of researchers, innovators, and development practitioners 
                  came together with a shared vision: to create an ecosystem where innovative 
                  ideas could flourish and create lasting impact in African communities.
                </p>
                <p>
                  We recognized that while Africa was rich in innovative ideas and entrepreneurial 
                  spirit, many promising solutions never reached the communities that needed them most. 
                  There was a gap between innovation and implementation, between research and real-world impact.
                </p>
                <p>
                  Utavu Foundation was born from the Swahili word "utavu," meaning "to enable" or 
                  "to make possible." Our mission became clear: to enable ideas to grow by providing 
                  the research, resources, and partnerships needed to transform concepts into 
                  sustainable solutions.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-surface rounded-2xl p-8 lg:p-12">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-accent/20 rounded-xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                      <Heart className="w-12 h-12 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-gray-900">Our Foundation</h3>
                      <p className="text-gray-600">Built on passion for impact</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
  <section className="section-padding bg-surface" data-reveal data-reveal-from="bottom" data-reveal-delay="160">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones that have shaped our growth and impact over the years.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full hidden lg:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                            {milestone.year}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden lg:flex w-2/12 justify-center">
                    <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="hidden lg:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
  <section className="section-padding bg-white" data-reveal data-reveal-from="bottom" data-reveal-delay="220">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The core principles that guide our work and define our approach to social innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Summary */}
  <section className="section-padding bg-surface" data-reveal data-reveal-from="bottom" data-reveal-delay="280">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12 text-white">
            <div className="text-center space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Our Impact Today
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Six years later, we've grown into a continental network of innovators, 
                researchers, and change-makers working together to solve Africa's most pressing challenges.
              </p>
              
              <div className="grid md:grid-cols-4 gap-8">
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-bold">100+</div>
                  <div className="text-blue-100">Innovations Supported</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-bold">15</div>
                  <div className="text-blue-100">Countries</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-bold">500,000+</div>
                  <div className="text-blue-100">Lives Impacted</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-bold">50+</div>
                  <div className="text-blue-100">Partners</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
  <section className="section-padding bg-white" data-reveal data-reveal-from="bottom" data-reveal-delay="340">
        <div className="container-custom">
          <div className="text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Be Part of Our Story
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our story continues to unfold with every innovation we support, every partnership 
              we forge, and every life we impact. Join us in writing the next chapter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Partner with Us
              </button>
              <button className="btn-secondary">
                Explore Opportunities
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;