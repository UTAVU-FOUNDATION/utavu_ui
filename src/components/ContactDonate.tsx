import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Heart } from 'lucide-react';

const ContactDonate: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    partnershipType: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const partnershipTypes = [
    'Research Collaboration',
    'Funding Partnership',
    'Implementation Partner',
    'Technology Partner',
    'Academic Partnership',
    'Other'
  ];

  return (
    <section id="contact" className="section-padding bg-gray-900 text-white">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Partner with Us
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to create meaningful impact together? Let's discuss how we can collaborate
            to drive innovation and solve challenges in your community.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Start a Conversation</h3>
              <p className="text-gray-300">
                Tell us about your organization and how you'd like to partner with us.
                We'll get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-300 mb-2">
                  Organization *
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="Your organization name"
                />
              </div>

              <div>
                <label htmlFor="partnershipType" className="block text-sm font-medium text-gray-300 mb-2">
                  Partnership Interest *
                </label>
                <select
                  id="partnershipType"
                  name="partnershipType"
                  value={formData.partnershipType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                >
                  <option value="">Select partnership type</option>
                  {partnershipTypes.map((type) => (
                    <option key={type} value={type} className="bg-gray-800">
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                  placeholder="Tell us about your project, goals, and how you'd like to collaborate..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Info & Donate */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-gray-300">info@utavufoundation.co.ke</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-gray-300">+254 700 123 456</div>
                    <div className="text-sm text-gray-400">Mon–Fri 8:00–17:00 EAT</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <div className="font-medium">Office</div>
                    <div className="text-gray-300">
                      Lake Basin Mall, Kisumu Kakamega Road<br />
                      Kisumu
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Donate Section */}
            <div className="bg-gradient-to-br from-accent/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-white" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">Support Our Mission</h3>
                  <p className="text-gray-300">
                    Your donation helps us support more innovators, fund critical research,
                    and scale solutions that create lasting impact in communities.
                  </p>
                </div>

                <div className="space-y-4">
                  <button className="w-full bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-medium transition-colors">
                    Donate Now
                  </button>

                  <div className="text-sm text-gray-400">
                    Secure donation processing • Tax-deductible receipts available
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="text-sm text-gray-300">
                    <strong>Other ways to support:</strong><br />
                    Corporate sponsorship • In-kind donations • Volunteer opportunities
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDonate;