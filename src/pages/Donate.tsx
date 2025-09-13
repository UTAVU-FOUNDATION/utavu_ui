import React from 'react';
import { Heart, Users, Award, TrendingUp, ArrowRight } from 'lucide-react';

const Donate: React.FC = () => {
  const impactAreas = [
    {
      icon: Heart,
      title: 'Health Innovation',
      description: 'Support digital health solutions that improve access to healthcare in underserved communities',
      impact: '$100 can fund health screening for 50 people'
    },
    {
      icon: Users,
      title: 'Capacity Building',
      description: 'Fund training programs that build skills and knowledge in local communities',
      impact: '$250 can train 5 innovators in research methods'
    },
    {
      icon: Award,
      title: 'Research Projects',
      description: 'Support evidence-based research that informs policy and drives innovation',
      impact: '$500 can fund a community research project'
    },
    {
      icon: TrendingUp,
      title: 'Innovation Incubation',
      description: 'Help promising startups and social enterprises scale their impact',
      impact: '$1,000 can support an innovation through prototype development'
    }
  ];

  const donationLevels = [
    {
      amount: '$50',
      title: 'Supporter',
      description: 'Help fund basic research materials and community outreach',
      benefits: ['Quarterly impact updates', 'Access to research reports']
    },
    {
      amount: '$150',
      title: 'Advocate',
      description: 'Support training workshops and capacity building programs',
      benefits: ['Monthly newsletters', 'Invitation to virtual events', 'Impact dashboard access']
    },
    {
      amount: '$500',
      title: 'Champion',
      description: 'Fund a complete research project or innovation prototype',
      benefits: ['Personalized impact reports', 'Direct updates from beneficiaries', 'Annual partner meeting invitation']
    },
    {
      amount: '$1,500',
      title: 'Partner',
      description: 'Support comprehensive programs with lasting community impact',
      benefits: ['Quarterly strategy calls', 'Site visit opportunities', 'Co-branding opportunities', 'Advisory role in program design']
    }
  ];

  const corporateOptions = [
    {
      title: 'Corporate Sponsorship',
      description: 'Partner with us to sponsor specific programs or events',
      benefits: ['Brand visibility', 'Employee engagement opportunities', 'CSR impact reporting']
    },
    {
      title: 'Innovation Challenges',
      description: 'Fund innovation challenges in your area of expertise',
      benefits: ['Access to innovative solutions', 'Talent pipeline development', 'Market insights']
    },
    {
      title: 'Research Partnerships',
      description: 'Co-fund research projects relevant to your industry',
      benefits: ['Exclusive research insights', 'Publication opportunities', 'Policy influence']
    }
  ];

  return (
    <div className="pt-32 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mx-auto">
              <Heart className="w-10 h-10 text-red-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Support Our Mission
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Your donation helps us support innovators, fund critical research, and scale 
              solutions that create lasting impact in communities across Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-medium transition-colors flex items-center space-x-2">
                <Heart className="w-5 h-5" />
                <span>Donate Now</span>
              </button>
              <button className="btn-secondary">
                Learn About Impact
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Where Your Donation Makes Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every dollar you contribute directly supports our work in creating 
              sustainable solutions for communities in need.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {impactAreas.map((area, index) => (
              <div key={index} className="card group hover:shadow-lg transition-all duration-300">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <area.icon className="w-8 h-8 text-red-600" />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {area.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {area.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm font-medium text-red-600">{area.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Levels */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Donation Levels
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose a donation level that works for you. Every contribution, 
              no matter the size, makes a meaningful difference.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {donationLevels.map((level, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-bold text-red-600">{level.amount}</div>
                    <div className="text-xl font-semibold text-gray-900">{level.title}</div>
                  </div>
                  
                  <p className="text-gray-600 text-center">
                    {level.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Benefits:</h4>
                    {level.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-red-50 hover:bg-red-100 text-red-600 py-3 rounded-lg font-medium transition-colors group-hover:bg-red-600 group-hover:text-white">
                    Choose This Level
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Giving */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Corporate Giving
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partner with us through corporate giving programs that align with 
              your business objectives while creating social impact.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {corporateOptions.map((option, index) => (
              <div key={index} className="card group hover:shadow-lg transition-all duration-300">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {option.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Benefits:</h4>
                    {option.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium group-hover:space-x-3 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 lg:p-12 text-white">
            <div className="text-center space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Your Impact in Numbers
              </h2>
              <p className="text-xl text-red-100 max-w-3xl mx-auto">
                See how donations like yours have created measurable impact 
                across our programs and initiatives.
              </p>
              
              <div className="grid md:grid-cols-4 gap-8">
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-bold">500,000+</div>
                  <div className="text-red-100">Lives Impacted</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-bold">100+</div>
                  <div className="text-red-100">Innovations Funded</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-bold">2,500+</div>
                  <div className="text-red-100">People Trained</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-bold">15</div>
                  <div className="text-red-100">Countries Reached</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Other Ways to Support Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond financial contributions, there are many ways you can 
              support our mission and amplify our impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Volunteer</h3>
              <p className="text-gray-600">
                Share your skills and expertise by volunteering with our programs and initiatives.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">In-Kind Donations</h3>
              <p className="text-gray-600">
                Donate equipment, software, or services that support our research and innovation work.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Spread the Word</h3>
              <p className="text-gray-600">
                Help us reach more people by sharing our work and mission with your networks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of supporters who are helping us create lasting change 
              through innovation and research. Every contribution matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-medium transition-colors flex items-center space-x-2">
                <Heart className="w-5 h-5" />
                <span>Donate Now</span>
              </button>
              <button className="btn-secondary">
                Contact Us
              </button>
            </div>
            <div className="text-sm text-gray-500">
              Secure donation processing • Tax-deductible receipts available • 100% of donations go to programs
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;