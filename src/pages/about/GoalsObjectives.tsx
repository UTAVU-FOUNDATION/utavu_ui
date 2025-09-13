import React from 'react';
import { Target, CheckCircle, TrendingUp, Users, Globe, Award } from 'lucide-react';

const GoalsObjectives: React.FC = () => {
  const goals2025 = [
    {
      icon: Users,
      title: 'Support 100+ Research Projects',
      description: 'Fund and support over 100 research projects across our focus areas',
      progress: 75,
      status: 'On Track'
    },
    {
      icon: TrendingUp,
      title: 'Build Capacity for 500+ Innovators',
      description: 'Train and mentor 500+ innovators annually through our programs',
      progress: 60,
      status: 'In Progress'
    },
    {
      icon: Globe,
      title: 'Establish Partnerships in 20+ Countries',
      description: 'Create strategic partnerships across 20+ countries in Africa',
      progress: 80,
      status: 'Ahead of Schedule'
    },
    {
      icon: Award,
      title: 'Create Sustainable Funding Models',
      description: 'Develop and implement sustainable funding mechanisms for innovation',
      progress: 45,
      status: 'In Development'
    }
  ];

  const strategicObjectives = [
    {
      category: 'Research Excellence',
      objectives: [
        'Conduct high-quality, impactful research that informs policy and practice',
        'Develop innovative research methodologies for complex development challenges',
        'Build research capacity in partner institutions across Africa',
        'Publish findings in peer-reviewed journals and policy briefs'
      ]
    },
    {
      category: 'Innovation Support',
      objectives: [
        'Identify and support promising innovations with high impact potential',
        'Provide technical assistance and mentorship to innovators',
        'Facilitate access to funding and investment opportunities',
        'Create platforms for knowledge sharing and collaboration'
      ]
    },
    {
      category: 'Partnership Development',
      objectives: [
        'Build strategic partnerships with universities, governments, and NGOs',
        'Develop long-term relationships with funding partners',
        'Create networks of innovators and researchers across regions',
        'Facilitate South-South knowledge exchange and collaboration'
      ]
    },
    {
      category: 'Capacity Building',
      objectives: [
        'Design and deliver comprehensive training programs',
        'Develop local expertise in research and innovation management',
        'Create mentorship networks for emerging leaders',
        'Build organizational capacity in partner institutions'
      ]
    },
    {
      category: 'Impact Measurement',
      objectives: [
        'Develop robust monitoring and evaluation frameworks',
        'Track and measure the impact of supported innovations',
        'Document lessons learned and best practices',
        'Use evidence to continuously improve our programs'
      ]
    },
    {
      category: 'Sustainability',
      objectives: [
        'Develop diversified funding strategies',
        'Build local ownership of programs and initiatives',
        'Create self-sustaining innovation ecosystems',
        'Ensure long-term viability of supported solutions'
      ]
    }
  ];

  const impactTargets = [
    { metric: 'Lives Impacted', target: '1M+', current: '500K+', icon: Users },
    { metric: 'Innovations Supported', target: '200+', current: '100+', icon: Award },
    { metric: 'Research Publications', target: '100+', current: '45+', icon: Target },
    { metric: 'Partner Organizations', target: '100+', current: '50+', icon: Globe }
  ];

  return (
    <div className="pt-32 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Goals & Objectives
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our strategic goals and objectives provide a roadmap for creating sustainable 
              impact through research, innovation, and partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* 2025 Goals */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Our 2025 Goals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ambitious yet achievable goals that will significantly expand our impact 
              and strengthen the innovation ecosystem across Africa.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {goals2025.map((goal, index) => (
              <div key={index} className="card group hover:shadow-lg transition-all duration-300">
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <goal.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      goal.status === 'On Track' ? 'bg-green-100 text-green-700' :
                      goal.status === 'Ahead of Schedule' ? 'bg-blue-100 text-blue-700' :
                      goal.status === 'In Progress' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {goal.status}
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {goal.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {goal.description}
                    </p>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Progress</span>
                      <span className="font-medium text-gray-900">{goal.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${goal.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Objectives */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Strategic Objectives
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed objectives that guide our work across key areas of focus, 
              ensuring comprehensive and coordinated efforts toward our goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {strategicObjectives.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
                  <div className="space-y-4">
                    {category.objectives.map((objective, objIndex) => (
                      <div key={objIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700">{objective}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Targets */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Impact Targets
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable targets that demonstrate our commitment to creating 
              significant and lasting impact across our areas of work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactTargets.map((target, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto">
                  <target.icon className="w-8 h-8 text-accent" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900">{target.metric}</h3>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-accent">{target.target}</div>
                    <div className="text-sm text-gray-500">Target by 2025</div>
                    <div className="text-lg font-semibold text-gray-700">{target.current}</div>
                    <div className="text-sm text-gray-500">Current</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accountability */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12 text-white">
            <div className="text-center space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Accountability & Transparency
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                We are committed to transparency in our progress and accountability 
                to our partners, beneficiaries, and stakeholders.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-3">
                  <div className="text-2xl font-bold">Quarterly</div>
                  <div className="text-blue-100">Progress Reports</div>
                </div>
                <div className="space-y-3">
                  <div className="text-2xl font-bold">Annual</div>
                  <div className="text-blue-100">Impact Assessment</div>
                </div>
                <div className="space-y-3">
                  <div className="text-2xl font-bold">Public</div>
                  <div className="text-blue-100">Data Dashboard</div>
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
              Help Us Achieve Our Goals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our goals are ambitious, but achievable with the right partnerships and support. 
              Join us in creating lasting impact through innovation and collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Become a Partner
              </button>
              <button className="btn-secondary">
                Track Our Progress
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GoalsObjectives;