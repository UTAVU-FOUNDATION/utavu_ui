import React from 'react';
import { TrendingUp, Users, Award, Calendar, MapPin, ArrowRight } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Digital Health Platform for Rural Communities',
      category: 'Health Innovation',
      location: 'Kenya, Uganda, Tanzania',
      duration: '2022-2024',
      description: 'Developed a comprehensive telemedicine platform that connects rural patients with healthcare providers, improving access to medical care in underserved areas.',
      challenge: 'Limited access to healthcare in rural areas with over 2 million people lacking basic medical services.',
      solution: 'Created a mobile-first telemedicine platform with offline capabilities, training local health workers, and establishing satellite clinics.',
      impact: {
        patients: '15,000+',
        providers: '200+',
        satisfaction: '94%',
        costReduction: '60%'
      },
      outcomes: [
        'Reduced travel time to healthcare by 80%',
        'Increased early diagnosis rates by 45%',
        'Trained 200+ community health workers',
        'Established 25 satellite clinics'
      ],
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-red-500 to-red-600'
    },
    {
      id: 2,
      title: 'Agricultural Innovation Hub',
      category: 'Agricultural Innovation',
      location: 'Ghana, Nigeria, Senegal',
      duration: '2021-2023',
      description: 'Established a research and training center that develops climate-smart farming techniques for smallholder farmers.',
      challenge: 'Climate change threatening food security for 5 million smallholder farmers across West Africa.',
      solution: 'Built innovation hubs with research facilities, developed drought-resistant crops, and created farmer training programs.',
      impact: {
        farmers: '5,000+',
        yieldIncrease: '35%',
        technologies: '12',
        countries: '3'
      },
      outcomes: [
        'Developed 12 climate-smart technologies',
        'Increased crop yields by 35%',
        'Reduced water usage by 40%',
        'Created 500+ jobs in rural areas'
      ],
      image: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 3,
      title: 'Education Technology Initiative',
      category: 'Education Technology',
      location: 'Rwanda, Burundi, DRC',
      duration: '2020-2022',
      description: 'Created an offline-capable learning management system for schools in areas with limited internet connectivity.',
      challenge: 'Over 100,000 students lacking access to quality educational resources due to poor internet infrastructure.',
      solution: 'Developed offline-first learning platform with solar-powered tablets and trained teachers in digital pedagogy.',
      impact: {
        students: '25,000+',
        schools: '150+',
        improvement: '42%',
        teachers: '800+'
      },
      outcomes: [
        'Improved learning outcomes by 42%',
        'Reduced dropout rates by 25%',
        'Trained 800+ teachers in digital skills',
        'Deployed 5,000 solar-powered tablets'
      ],
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 4,
      title: 'Clean Water Access Project',
      category: 'Environmental Solutions',
      location: 'Ethiopia, Somalia, South Sudan',
      duration: '2021-2024',
      description: 'Implemented solar-powered water purification systems in remote communities lacking access to clean water.',
      challenge: '3 million people in the Horn of Africa without access to clean drinking water.',
      solution: 'Installed solar-powered water purification systems and trained local technicians for maintenance.',
      impact: {
        beneficiaries: '50,000+',
        systems: '100+',
        waterQuality: '99.9%',
        maintenance: '95%'
      },
      outcomes: [
        'Provided clean water to 50,000+ people',
        'Reduced waterborne diseases by 80%',
        'Created 200+ local jobs',
        'Achieved 95% system uptime'
      ],
      image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-blue-400 to-blue-500'
    },
    {
      id: 5,
      title: 'Women Entrepreneurs Network',
      category: 'Social Innovation',
      location: 'Zambia, Malawi, Zimbabwe',
      duration: '2022-2024',
      description: 'Created a support network for women entrepreneurs with access to funding, mentorship, and markets.',
      challenge: 'Women entrepreneurs facing barriers to accessing capital and business support services.',
      solution: 'Established entrepreneur hubs, created micro-lending programs, and built market linkage platforms.',
      impact: {
        entrepreneurs: '2,000+',
        businesses: '1,500+',
        funding: '$5M+',
        jobs: '3,000+'
      },
      outcomes: [
        'Supported 2,000+ women entrepreneurs',
        'Facilitated $5M+ in funding',
        'Created 3,000+ jobs',
        'Achieved 85% business survival rate'
      ],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 6,
      title: 'Digital Skills Training Program',
      category: 'Technology Access',
      location: 'Morocco, Tunisia, Algeria',
      duration: '2020-2023',
      description: 'Comprehensive digital literacy program targeting youth in underserved communities across North Africa.',
      challenge: 'High youth unemployment and lack of digital skills limiting economic opportunities.',
      solution: 'Established digital training centers, developed curriculum, and created job placement programs.',
      impact: {
        trainees: '10,000+',
        employment: '75%',
        centers: '50+',
        partnerships: '100+'
      },
      outcomes: [
        'Trained 10,000+ young people',
        'Achieved 75% employment rate',
        'Partnered with 100+ employers',
        'Established 50+ training centers'
      ],
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const categories = ['All Categories', 'Health Innovation', 'Agricultural Innovation', 'Education Technology', 'Environmental Solutions', 'Social Innovation', 'Technology Access'];

  return (
    <div className="pt-32 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Case Studies
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Explore real-world examples of how our innovations are creating measurable 
              impact and transforming communities across Africa and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <button 
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Case Studies Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div 
                key={study.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${study.color} opacity-20`}></div>
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {study.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  {/* Header */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {study.title}
                    </h3>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{study.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{study.duration}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {study.description}
                    </p>
                  </div>

                  {/* Impact Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(study.impact).map(([key, value], metricIndex) => (
                      <div key={metricIndex} className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-xl font-bold text-blue-600">{value}</div>
                        <div className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      </div>
                    ))}
                  </div>

                  {/* Key Outcomes */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Key Outcomes:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {study.outcomes.slice(0, 2).map((outcome, outcomeIndex) => (
                        <div key={outcomeIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-4 border-t border-gray-100">
                    <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium group-hover:space-x-3 transition-all">
                      <span>Read Full Case Study</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Summary */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12 text-white">
            <div className="text-center space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Collective Impact
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Our case studies represent just a fraction of the impact we've created 
                through partnerships and innovation across multiple sectors.
              </p>
              
              <div className="grid md:grid-cols-4 gap-8">
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-bold">500,000+</div>
                  <div className="text-blue-100">Lives Impacted</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-bold">100+</div>
                  <div className="text-blue-100">Projects Completed</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-bold">25+</div>
                  <div className="text-blue-100">Countries</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-bold">$50M+</div>
                  <div className="text-blue-100">Value Created</div>
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
              Ready to Create Your Own Success Story?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partner with us to develop and implement innovative solutions that create 
              measurable impact in your community or sector.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Start a Project
              </button>
              <button className="btn-secondary">
                Download Case Study Report
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;