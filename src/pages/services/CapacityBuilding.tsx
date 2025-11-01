import React from 'react';
import { Users, BookOpen, Award, TrendingUp, ArrowRight } from 'lucide-react';

const CapacityBuilding: React.FC = () => {
  const programs = [
    {
      icon: BookOpen,
      title: 'Leadership Development',
      description: 'Comprehensive programs to develop effective leaders in social innovation',
      features: ['Executive coaching', 'Leadership assessments', 'Strategic planning workshops', 'Peer learning networks']
    },
    {
      icon: Award,
      title: 'Technical Skills Training',
      description: 'Specialized training in research methods, project management, and technology',
      features: ['Research methodology', 'Data analysis tools', 'Project management', 'Digital literacy']
    },
    {
      icon: TrendingUp,
      title: 'Organizational Development',
      description: 'Building stronger, more effective organizations and institutions',
      features: ['Organizational assessments', 'Systems strengthening', 'Change management', 'Performance improvement']
    }
  ];

  const trainingAreas = [
    'Research Design & Methodology',
    'Data Collection & Analysis',
    'Project Management',
    'Monitoring & Evaluation',
    'Grant Writing & Fundraising',
    'Digital Tools & Technology',
    'Leadership & Management',
    'Strategic Planning',
    'Partnership Development',
    'Communication & Advocacy'
  ];

  const successStories = [
    {
      title: 'Research Capacity Building Program',
      organization: 'East African Universities Consortium',
      description: 'Trained 200+ researchers across 15 universities in advanced research methodologies',
      outcomes: ['50% increase in research publications', '30+ new research partnerships', '85% participant satisfaction'],
      participants: '200+ researchers'
    },
    {
      title: 'NGO Leadership Development',
      organization: 'Civil Society Network',
      description: 'Comprehensive leadership program for NGO executives and emerging leaders',
      outcomes: ['40 leaders trained', '90% promotion rate', 'Improved organizational performance'],
      participants: '40 leaders'
    }
  ];

  return (
    <div className="pt-32 pb-16 bg-gradient-to-br from-green-50 via-white to-green-50/50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="w-20 h-20 bg-green-100/80 backdrop-blur-sm dark:bg-green-900/30 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-green-100 dark:shadow-green-900/20">
              <Users className="w-10 h-10 text-green-600 dark:text-green-400" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100">
              Capacity Building
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Training programs, skill development, and knowledge transfer initiatives that 
              empower individuals and organizations to achieve greater impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Request Training
              </button>
              <button className="btn-secondary">
                View Programs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="section-padding bg-white dark:bg-gray-900 backdrop-blur-sm">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100">
              Our Training Programs
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive capacity building programs designed to strengthen skills, 
              knowledge, and organizational effectiveness across sectors.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="card group bg-white dark:bg-gray-800 hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-green-900/10 transition-all duration-300">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <program.icon className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {program.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full flex-shrink-0"></div>
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

      {/* Training Areas */}
      <section className="section-padding backdrop-blur-sm">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100">
              Training Areas
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We offer specialized training across a wide range of topics relevant 
              to social innovation and organizational development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingAreas.map((area, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md dark:shadow-xl dark:hover:shadow-2xl dark:shadow-green-900/10 transition-shadow group">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-600 dark:bg-green-400 rounded-full group-hover:scale-125 transition-transform"></div>
                  <span className="font-medium text-gray-900 dark:text-gray-100">{area}</span>
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
              Examples of how our capacity building programs have strengthened 
              organizations and empowered individuals to create greater impact.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="card group bg-white dark:bg-gray-800 hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-green-900/10 transition-all duration-300">
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{story.title}</h3>
                      <p className="text-green-600 dark:text-green-400 font-medium">{story.organization}</p>
                    </div>
                    <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                      {story.participants}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {story.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">Key Outcomes:</h4>
                    {story.outcomes.map((outcome, outcomeIndex) => (
                      <div key={outcomeIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{outcome}</span>
                      </div>
                    ))}
                  </div>

                  <button className="flex items-center space-x-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium group-hover:space-x-3 transition-all">
                    <span>Read Full Story</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Approach */}
      <section className="section-padding backdrop-blur-sm">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100">
              Our Training Approach
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We use adult learning principles and participatory methods to ensure 
              effective knowledge transfer and skill development.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Assess', description: 'Identify capacity gaps and training needs through comprehensive assessment' },
              { step: '02', title: 'Design', description: 'Develop customized training programs tailored to specific contexts' },
              { step: '03', title: 'Deliver', description: 'Implement interactive, hands-on training using proven methodologies' },
              { step: '04', title: 'Support', description: 'Provide ongoing mentorship and follow-up support for sustained impact' }
            ].map((phase, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-600 dark:bg-green-700 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold shadow-lg shadow-green-200 dark:shadow-green-900/20">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{phase.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="section-padding bg-white dark:bg-gray-900 backdrop-blur-sm">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-green-500 to-green-600 dark:from-green-700 dark:to-green-800 rounded-2xl p-8 lg:p-12 text-white shadow-lg shadow-green-200 dark:shadow-green-900/20">
            <div className="text-center space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Capacity Building Impact
              </h2>
              
              <div className="grid md:grid-cols-4 gap-8">
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-bold">2,500+</div>
                  <div className="text-green-100">Individuals Trained</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-bold">150+</div>
                  <div className="text-green-100">Organizations</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-bold">50+</div>
                  <div className="text-green-100">Training Programs</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-bold">92%</div>
                  <div className="text-green-100">Satisfaction Rate</div>
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
              Invest in Your Team's Growth
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Partner with us to design and deliver capacity building programs that 
              strengthen your organization and empower your team to achieve greater impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary shadow-lg shadow-green-200/50 dark:shadow-green-900/30">
                Request Training Proposal
              </button>
              <button className="btn-secondary bg-white/95 backdrop-blur-sm shadow-md hover:shadow-lg dark:bg-gray-800 dark:shadow-green-900/10">
                Download Training Catalog
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CapacityBuilding;