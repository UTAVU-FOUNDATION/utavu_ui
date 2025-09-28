import React, { useState } from 'react';
import Hero from '../components/Hero';
import QuickIntro from '../components/QuickIntro';
import FocusAreas from '../components/FocusAreas';
import Services from '../components/Services';
import CaseStudies from '../components/CaseStudies';
import Partners from '../components/Partners';
import Testimonials from '../components/Testimonials';
import Events from '../components/Events';
import Insights from '../components/Insights';
import ContactDonate from '../components/ContactDonate';
import Modal from '../components/Modal';

const Home: React.FC = () => {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  const [currentEventTitle, setCurrentEventTitle] = useState('');

  const openRegistrationModal = (eventTitle: string) => {
    setCurrentEventTitle(eventTitle);
    setIsRegistrationModalOpen(true);
  };

  return (
    <>
      <Hero />
      <div data-reveal data-reveal-from="bottom" data-reveal-stagger>
        <QuickIntro onScheduleConsultation={() => setIsConsultationModalOpen(true)} />
      </div>
      <div data-reveal data-reveal-from="bottom" data-reveal-stagger data-reveal-delay="80">
        <FocusAreas />
      </div>
      <div data-reveal data-reveal-from="bottom" data-reveal-delay="120">
        <Services onScheduleConsultation={() => setIsConsultationModalOpen(true)} />
      </div>
      <div data-reveal data-reveal-from="bottom" data-reveal-delay="160">
        <CaseStudies />
      </div>
      <div data-reveal data-reveal-from="bottom" data-reveal-delay="200" data-reveal-stagger>
        <Partners onBecomePartner={() => setIsPartnerModalOpen(true)} />
      </div>
      <div data-reveal data-reveal-from="bottom" data-reveal-delay="240">
        <Testimonials />
      </div>
      <div data-reveal data-reveal-from="bottom" data-reveal-delay="280">
        <Events onRegisterEvent={openRegistrationModal} />
      </div>
      <div data-reveal data-reveal-from="bottom" data-reveal-delay="320">
        <Insights onSubscribe={() => setIsSubscriptionModalOpen(true)} />
      </div>
      <div data-reveal data-reveal-from="bottom" data-reveal-delay="360">
        <ContactDonate />
      </div>
      
      {/* Modals */}
      <Modal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        title="Schedule a Consultation"
      >
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Organization</label>
            <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Consultation Type</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Research & Evaluation</option>
              <option>Capacity Building</option>
              <option>Innovation Support</option>
              <option>Partnership Development</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
          </div>
          <button type="submit" className="w-full btn-primary">Send Request</button>
        </form>
      </Modal>

      <Modal
        isOpen={isPartnerModalOpen}
        onClose={() => setIsPartnerModalOpen(false)}
        title="Become a Partner"
      >
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Organization</label>
            <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Partnership Type</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Funding Partner</option>
              <option>Implementation Partner</option>
              <option>Research Collaboration</option>
              <option>Technology Partner</option>
              <option>Academic Partnership</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">How can we collaborate?</label>
            <textarea rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
          </div>
          <button type="submit" className="w-full btn-primary">Submit Request</button>
        </form>
      </Modal>

      <Modal
        isOpen={isSubscriptionModalOpen}
        onClose={() => setIsSubscriptionModalOpen(false)}
        title="Subscribe to Updates"
      >
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="your@email.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Name (Optional)</label>
            <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Interests</label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Research Updates</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Event Notifications</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Partnership Opportunities</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Innovation Insights</span>
              </label>
            </div>
          </div>
          <button type="submit" className="w-full btn-primary">Subscribe</button>
        </form>
      </Modal>

      <Modal
        isOpen={isRegistrationModalOpen}
        onClose={() => setIsRegistrationModalOpen(false)}
        title={`Register for ${currentEventTitle}`}
      >
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Organization</label>
            <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Role/Title</label>
            <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Dietary Requirements (Optional)</label>
            <textarea rows={2} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
          </div>
          <button type="submit" className="w-full btn-primary">Complete Registration</button>
        </form>
      </Modal>
    </>
  );
};

export default Home;