import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube, Send } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = {
    'About': [
      { name: 'Our Story', href: '/about/our-story' },
      { name: 'Mission & Vision', href: '/about/mission-vision' },
      { name: 'Goals & Objectives', href: '/about/goals-objectives' },
      { name: 'Team', href: '/about/our-story#team' },
      { name: 'Careers', href: '/careers' }
    ],
    'Services': [
      { name: 'Research & Evaluation', href: '/services/research-evaluation' },
      { name: 'Capacity Building', href: '/services/capacity-building' },
      { name: 'Prototyping & Incubation', href: '/services/prototyping-incubation' },
      { name: 'Consulting', href: '/contact' }
    ],
    'Focus Areas': [
      { name: 'Health Innovation', href: '/focus-areas/health-innovation' },
      { name: 'Education Technology', href: '/focus-areas/education-technology' },
      { name: 'Agricultural Innovation', href: '/focus-areas/agricultural-innovation' },
      { name: 'Environmental Solutions', href: '/focus-areas/environmental-solutions' }
    ],
    'Resources': [
      { name: 'Research Reports', href: '/library' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Policy Briefs', href: '/insights' },
      { name: 'Events', href: '/events' },
      { name: 'Newsletter', href: '/insights' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' }
  ];

  return (
  <footer className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <img 
                src="/Screenshot from 2025-09-13 09-59-58.png" 
                alt="Utavu Foundation" 
                className="h-12 w-auto"
              />
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Enabling ideas to grow through research, innovation, and strategic partnerships 
                that create sustainable impact in communities worldwide.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-utavuPurple" />
                <span className="text-gray-700 dark:text-gray-300">info@utavufoundation.co.ke</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-utavuGreen" />
                <span className="text-gray-700 dark:text-gray-300">+254 700 123 456</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-1" />
                <span className="text-gray-700 dark:text-gray-300">
                  Lake Basin Mall, Kisumu Kakamega Road<br />
                  Kisumu
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`w-10 h-10 bg-white/10 dark:bg-white/5 rounded-lg flex items-center justify-center ${
                    social.name === 'Facebook' || social.name === 'Twitter' ? 'hover:bg-utavuPurple' : 
                    social.name === 'LinkedIn' || social.name === 'YouTube' ? 'hover:bg-utavuGreen' : 'hover:bg-accent'
                  } transition-colors`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-white dark:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Stay Updated</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Get the latest insights, research findings, and event updates delivered to your inbox.
            </p>
            <form className="flex space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 dark:bg-gray-800/40 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
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
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-600 dark:text-gray-400 text-sm">© 2024 Utavu Foundation. All rights reserved.</div>
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;