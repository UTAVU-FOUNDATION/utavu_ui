import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, Lightbulb, ArrowRight } from 'lucide-react';

interface QuickIntroProps {
  onScheduleConsultation: () => void;
}

const QuickIntro: React.FC<QuickIntroProps> = ({ onScheduleConsultation }) => {
  const highlights = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To accelerate social innovation through research, capacity building, and strategic partnerships that create lasting impact in communities.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'A world where innovative solutions to local challenges are accessible, scalable, and sustainable for all communities.'
    },
    {
      icon: Lightbulb,
      title: 'Our Approach',
      description: 'Evidence-based research, collaborative partnerships, and community-centered innovation that addresses real-world problems.'
    }
  ];

  const goals = [
    'Support 100+ research projects by 2025',
    'Build capacity for 500+ innovators annually',
    'Establish partnerships across 20+ countries',
    'Create sustainable funding models for innovation',
    'Develop scalable solutions for community challenges'
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Mission, Vision, Approach */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Driving Innovation for Social Impact
              </h2>
              <p className="text-lg text-gray-600">
                The Utavu Foundation bridges the gap between innovative ideas and real-world implementation, 
                fostering an ecosystem where research meets practical solutions.
              </p>
            </div>

            <div className="space-y-6">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 ${index === 2 ? 'bg-utavuGreen/20' : 'bg-blue-100'} rounded-lg flex items-center justify-center`}>
                    <item.icon className={`w-6 h-6 ${index === 2 ? 'text-utavuGreen' : 'text-blue-600'}`} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link 
                to="/about/our-story" 
                className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium group"
              >
                <span>Learn more about our story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column - Goals */}
          <div className="bg-surface rounded-2xl p-8 lg:p-10">
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-gray-900">Our 2025 Goals</h3>
                <p className="text-gray-600">
                  Measurable objectives that guide our mission to enable ideas to grow.
                </p>
              </div>

              <div className="space-y-4">
                {goals.map((goal, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`flex-shrink-0 w-6 h-6 ${index % 2 === 0 ? 'bg-accent' : 'bg-utavuPurple'} rounded-full flex items-center justify-center mt-0.5`}>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-gray-700 font-medium">{goal}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Progress tracking</span>
                  <span className="text-blue-600 font-medium">Updated quarterly</span>
                </div>
                <button 
                  onClick={onScheduleConsultation}
                  className="mt-4 w-full bg-blue-50 hover:bg-blue-100 text-blue-600 py-2 px-4 rounded-lg font-medium transition-colors"
                >
                  Schedule Progress Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickIntro;