import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, HandHeart, Calendar } from 'lucide-react';

const HomeHighlights: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Focus Areas Card */}
          <div className="bg-white/70 dark:bg-gray-800/40 backdrop-blur rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                <Lightbulb className="w-6 h-6 text-blue-600 dark:text-blue-200" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Focus Areas</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Driving innovation in health, education, agriculture, and environmental solutions.
            </p>
            <Link 
              to="/focus-areas"
              className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-200 font-medium"
            >
              <span>Explore Our Impact</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Services Card */}
          <div className="bg-white/70 dark:bg-gray-800/40 backdrop-blur rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
                <HandHeart className="w-6 h-6 text-green-600 dark:text-green-200" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Our Services</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Research, capacity building, and innovation support for sustainable development.
            </p>
            <Link 
              to="/services/research-evaluation"
              className="inline-flex items-center space-x-2 text-green-600 dark:text-green-300 hover:text-green-700 dark:hover:text-green-200 font-medium"
            >
              <span>View Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Events Card */}
          <div className="bg-white/70 dark:bg-gray-800/40 backdrop-blur rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                <Calendar className="w-6 h-6 text-purple-600 dark:text-purple-200" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Events</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Join our workshops, conferences, and community programs.
            </p>
            <Link 
              to="/events"
              className="inline-flex items-center space-x-2 text-purple-600 dark:text-purple-300 hover:text-purple-700 dark:hover:text-purple-200 font-medium"
            >
              <span>See Upcoming Events</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHighlights;