import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube, Send } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = {
    'About': [
      { name: 'Our Story', href: '#about' },
      { name: 'Mission & Vision', href: '#mission' },
      { name: 'Goals & Objectives', href: '#goals' },
      { name: 'Team', href: '#team' },
      { name: 'Careers', href: '#careers' }
    ],
    'Services': [
      { name: 'Research & Evaluation', href: '#research' },
      { name: 'Capacity Building', href: '#capacity' },
      { name: 'Prototyping & Incubation', href: '#prototyping' },
      { name: 'Consulting', href: '#consulting' }
    ],
    'Focus Areas': [
      { name: 'Health Innovation', href: '#health' },
      { name: 'Education Technology', href: '#education' },
      { name: 'Agricultural Innovation', href: '#agriculture' },
      { name: 'Environmental Solutions', href: '#environment' }
    ],
    'Resources': [
      { name: 'Research Reports', href: '#reports' },
      { name: 'Case Studies', href: '#cases' },
      { name: 'Policy Briefs', href: '#policy' },
      { name: 'Events', href: '#events' },
      { name: 'Newsletter', href: '#newsletter' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <img 
                src="/public/Screenshot from 2025-09-13 09-59-58.png" 
                alt="Utavu Foundation" 
                className="h-12 w-auto"
              />
              <p className="text-gray-300 leading-relaxed">
                Enabling ideas to grow through research, innovation, and strategic partnerships 
                that create sustainable impact in communities worldwide.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-utavuPurple" />
                <span className="text-gray-300">info@utavu.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-utavuGreen" />
                <span className="text-gray-300">+254 700 123 456</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-1" />
                <span className="text-gray-300">
                  Innovation Hub, University Way<br />
                  Nairobi, Kenya
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center ${
                    social.name === 'Facebook' || social.name === 'Twitter' ? 'hover:bg-utavuPurple' : 
                    social.name === 'LinkedIn' || social.name === 'YouTube' ? 'hover:bg-utavuGreen' : 'hover:bg-accent'
                  } transition-colors`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-lg font-semibold">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Get the latest insights, research findings, and event updates delivered to your inbox.
            </p>
            <form className="flex space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-utavuPurple hover:bg-utavuPurple/90 text-white px-6 py-3 rounded-lg transition-colors flex items-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span className="hidden sm:inline">Subscribe</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Utavu Foundation. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;