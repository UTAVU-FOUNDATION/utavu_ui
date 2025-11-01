import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, Clock, ArrowRight } from 'lucide-react';

interface EventsProps {
  onRegisterEvent: (eventTitle: string) => void;
}

const Events: React.FC<EventsProps> = ({ onRegisterEvent }) => {
  const upcomingEvents = [
    {
      title: 'Innovation Summit 2024',
      date: '2024-03-15',
      time: '09:00 - 17:00',
      location: 'Nairobi, Kenya',
      type: 'Conference',
      description: 'Annual gathering of innovators, researchers, and funders to showcase breakthrough solutions and forge new partnerships.',
      attendees: '500+',
      status: 'Registration Open',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Health Tech Incubator Program',
      date: '2024-04-01',
      time: '6 months program',
      location: 'Virtual & Kampala',
      type: 'Program',
      description: 'Intensive incubation program for health technology startups focusing on digital health solutions for African markets.',
      attendees: '20 startups',
      status: 'Applications Open',
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'Agricultural Innovation Workshop',
      date: '2024-04-20',
      time: '10:00 - 16:00',
      location: 'Kigali, Rwanda',
      type: 'Workshop',
      description: 'Hands-on workshop on climate-smart agriculture technologies and sustainable farming practices.',
      attendees: '100+',
      status: 'Early Bird',
      color: 'from-utavuGreen to-green-600'
    },
    {
      title: 'Research Methodology Masterclass',
      date: '2024-05-10',
      time: '3 days intensive',
      location: 'Accra, Ghana',
      type: 'Training',
      description: 'Advanced training on research design, data collection, and impact evaluation for development practitioners.',
      attendees: '50',
      status: 'Limited Seats',
      color: 'from-purple-500 to-utavuPurple'
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <section id="events" className="section-padding bg-surface dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100">
            Events & Programs
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join our community of innovators through conferences, workshops, training programs, 
            and networking events designed to accelerate social impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {upcomingEvents.map((event, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg dark:shadow-xl dark:hover:shadow-2xl transition-all duration-300 group border border-gray-100 dark:border-gray-700"
            >
              {/* Header with gradient */}
              <div className={`bg-gradient-to-r ${event.color} p-6 text-white`}>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                        {event.type}
                      </span>
                      <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                        {event.status}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold">{event.title}</h3>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Event Details */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-gray-400 dark:text-gray-300" />
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Date</div>
                      <div className="font-medium text-gray-900 dark:text-gray-100">{formatDate(event.date)}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-gray-400 dark:text-gray-300" />
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Duration</div>
                      <div className="font-medium text-gray-900 dark:text-gray-100">{event.time}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-gray-400 dark:text-gray-300" />
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Location</div>
                      <div className="font-medium text-gray-900 dark:text-gray-100">{event.location}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-gray-400 dark:text-gray-300" />
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Capacity</div>
                      <div className="font-medium text-gray-900 dark:text-gray-100">{event.attendees}</div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {event.description}
                </p>

                {/* CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Registration deadline: {formatDate(event.date)}
                  </div>
                  <button 
                    onClick={() => onRegisterEvent(event.title)}
                    className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium group-hover:space-x-3 transition-all"
                  >
                    <span>Register Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Past Events & Programs */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Past Events Highlights</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-blue-600">2,500+</div>
              <div className="text-gray-600 dark:text-gray-300">Total Participants</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-accent">50+</div>
              <div className="text-gray-600 dark:text-gray-300">Events Hosted</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-utavuPurple">15</div>
              <div className="text-gray-600 dark:text-gray-300">Countries Reached</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/events" className="btn-primary mr-4 shadow-lg shadow-blue-200/50 dark:shadow-blue-900/30">
            View All Events
          </Link>
          <button onClick={() => onRegisterEvent('Newsletter Updates')} className="btn-secondary bg-white/95 dark:bg-gray-800 dark:shadow-blue-900/10">
            Subscribe to Updates
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;