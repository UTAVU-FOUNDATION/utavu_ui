import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, HandHeart, Calendar } from 'lucide-react';

const HomeHighlights: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Focus Areas Card */}
          <div className="bg-white/70 backdrop-blur rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Lightbulb className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Focus Areas</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Driving innovation in health, education, agriculture, and environmental solutions.
            </p>
            <Link 
              to="/focus-areas"
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <span>Explore Our Impact</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Services Card */}
          <div className="bg-white/70 backdrop-blur rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <HandHeart className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Our Services</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Research, capacity building, and innovation support for sustainable development.
            </p>
            <Link 
              to="/services/research-evaluation"
              className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 font-medium"
            >
              <span>View Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Events Card */}
          <div className="bg-white/70 backdrop-blur rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Events</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Join our workshops, conferences, and community programs.
            </p>
            <Link 
              to="/events"
              className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-medium"
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