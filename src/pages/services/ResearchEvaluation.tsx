import React from 'react';
import { Search, BarChart, FileText, ArrowRight } from 'lucide-react';

const ResearchEvaluation: React.FC = () => {
  const services = [
    {
      icon: BarChart,
      title: 'Impact Assessment',
      description: 'Comprehensive evaluation of program outcomes and social impact',
      features: ['Baseline and endline studies', 'Theory of change development', 'Impact measurement frameworks', 'Cost-effectiveness analysis']
    },
    {
      icon: FileText,
      title: 'Policy Research',
      description: 'Evidence-based research to inform policy decisions and advocacy',
      features: ['Policy analysis and review', 'Stakeholder consultation', 'Recommendation development', 'Implementation guidance']
    },
    {
      icon: Search,
      title: 'Data Collection & Analysis',
      description: 'Rigorous data collection and statistical analysis services',
      features: ['Survey design and implementation', 'Qualitative research methods', 'Statistical analysis', 'Data visualization']
    }
  ];

  const methodologies = [
    'Randomized Controlled Trials (RCTs)',
    'Quasi-experimental designs',
    'Mixed-methods approaches',
    'Participatory evaluation',
    'Theory-based evaluation',
    'Developmental evaluation'
  ];

  const caseStudies = [
    {
      title: 'Health Program Impact Evaluation',
      client: 'Ministry of Health, Kenya',
      description: 'Comprehensive evaluation of a national maternal health program across 47 counties',
      outcomes: ['40% reduction in maternal mortality', '60% increase in skilled birth attendance', 'Policy recommendations adopted'],
      duration: '18 months'
    },
    {
      title: 'Education Technology Assessment',
      client: 'World Bank',
      description: 'Multi-country evaluation of digital learning platforms in Sub-Saharan Africa',
      outcomes: ['25% improvement in learning outcomes', 'Cost-effectiveness demonstrated', 'Scaling strategy developed'],
      duration: '24 months'
    }
  ];

  return (
    <div className="pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-blue-50/50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="w-20 h-20 bg-blue-100/80 backdrop-blur-sm dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-blue-100 dark:shadow-blue-900/20">
              <Search className="w-10 h-10 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100">
              Research & Evaluation
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Evidence-based research, impact assessment, and data-driven insights that inform 
              decision-making, measure success, and drive continuous improvement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Request Consultation
              </button>
              <button className="btn-secondary">
                View Case Studies
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
              Our Research Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive research and evaluation services designed to generate actionable 
              insights and demonstrate impact across diverse sectors and contexts.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card group bg-white dark:bg-gray-800 hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-blue-900/10 transition-all duration-300">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
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
                        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full flex-shrink-0"></div>
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

      {/* Methodologies */}
      <section className="section-padding backdrop-blur-sm">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100">
              Research Methodologies
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We employ rigorous, internationally recognized research methodologies 
              to ensure the highest quality and credibility of our findings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {methodologies.map((methodology, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md dark:shadow-xl dark:hover:shadow-2xl dark:shadow-blue-900/10 transition-shadow">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                  <span className="font-medium text-gray-900 dark:text-gray-100">{methodology}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-white dark:bg-gray-900 backdrop-blur-sm">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100">
              Featured Case Studies
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Examples of our research and evaluation work that has informed policy, 
              improved programs, and demonstrated measurable impact.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="card group bg-white dark:bg-gray-800 hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-blue-900/10 transition-all duration-300">
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{study.title}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">{study.client}</p>
                    </div>
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                      {study.duration}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {study.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">Key Outcomes:</h4>
                    {study.outcomes.map((outcome, outcomeIndex) => (
                      <div key={outcomeIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{outcome}</span>
                      </div>
                    ))}
                  </div>

                  <button className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium group-hover:space-x-3 transition-all">
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding backdrop-blur-sm">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100">
              Our Research Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A systematic approach that ensures rigorous, ethical, and actionable research outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Design', description: 'Develop research questions, methodology, and data collection plan' },
              { step: '02', title: 'Collect', description: 'Implement data collection using appropriate methods and tools' },
              { step: '03', title: 'Analyze', description: 'Apply statistical and qualitative analysis techniques' },
              { step: '04', title: 'Report', description: 'Present findings with actionable recommendations' }
            ].map((phase, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-600 dark:bg-blue-700 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold shadow-lg shadow-blue-200 dark:shadow-blue-900/20">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{phase.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-white dark:bg-gray-900 backdrop-blur-sm">
        <div className="container-custom">
          <div className="text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100">
              Ready to Generate Evidence?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Partner with us to design and implement research that provides the evidence 
              you need to make informed decisions and demonstrate impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary shadow-lg shadow-blue-200/50 dark:shadow-blue-900/30">
                Schedule Consultation
              </button>
              <button className="btn-secondary bg-white/95 backdrop-blur-sm shadow-md hover:shadow-lg dark:bg-gray-800 dark:shadow-blue-900/10">
                Download Service Brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResearchEvaluation;