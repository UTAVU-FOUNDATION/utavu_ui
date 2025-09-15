import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, Clock } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const focusAreas = [
    { name: 'Health Innovation', description: 'Digital health solutions and medical research', path: '/focus-areas/health-innovation' },
    { name: 'Education Technology', description: 'Learning platforms and educational tools', path: '/focus-areas/education-technology' },
    { name: 'Agricultural Innovation', description: 'Smart farming and food security solutions', path: '/focus-areas/agricultural-innovation' },
    { name: 'Environmental Solutions', description: 'Climate change and sustainability projects', path: '/focus-areas/environmental-solutions' },
  ];

  const services = [
    { name: 'Research & Evaluation', description: 'Evidence-based research and impact assessment', path: '/services/research-evaluation' },
    { name: 'Capacity Building', description: 'Training and skill development programs', path: '/services/capacity-building' },
    { name: 'Prototyping & Incubation', description: 'Innovation labs and startup support', path: '/services/prototyping-incubation' },
  ];

  return (
    <>
      {/* Top Contact Strip - Desktop Only */}
      <div className="hidden lg:block bg-gray-50 border-b border-gray-200">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-2 text-sm text-gray-600">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@utavu.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Mon–Fri 8:00–17:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'glass-effect shadow-xl' 
            : 'bg-transparent'
        }`}
        style={{ top: isScrolled ? '0' : '40px' }}
      >
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/">
                <img 
                  src="/public/Screenshot from 2025-09-13 09-59-58.png" 
                  alt="Utavu Foundation" 
                  className="h-14 w-auto hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {/* Focus Areas Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('focus')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="nav-link flex items-center space-x-1">
                  <span>Focus Areas</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === 'focus' && (
                  <div className="absolute top-full left-0 mt-2 w-96 glass-dropdown rounded-xl p-6 grid grid-cols-2 gap-4">
                    {focusAreas.map((area) => (
                      <Link
                        key={area.name}
                        to={area.path}
                        className="block p-4 rounded-xl hover:bg-white/30 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                      >
                        <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{area.name}</div>
                        <div className="text-sm text-gray-600 mt-2 group-hover:text-gray-700 transition-colors">{area.description}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="nav-link flex items-center space-x-1">
                  <span>Our Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === 'services' && (
                  <div className="absolute top-full left-0 mt-2 w-96 glass-dropdown rounded-xl p-6 grid grid-cols-1 gap-3">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="block p-4 rounded-xl hover:bg-white/30 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                      >
                        <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{service.name}</div>
                        <div className="text-sm text-gray-600 mt-2 group-hover:text-gray-700 transition-colors">{service.description}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/insights" className="nav-link">Insights</Link>
              <Link to="/events" className="nav-link">Events / Programs</Link>
              <Link to="/partnerships" className="nav-link">Partnerships</Link>
              <Link to="/testimonials" className="nav-link">Testimonials</Link>
              
              {/* About Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('about')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="nav-link flex items-center space-x-1">
                  <span>About Us</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === 'about' && (
                  <div className="absolute top-full right-0 mt-2 w-56 glass-dropdown rounded-xl p-4">
                    <Link to="/about/our-story" className="block px-4 py-3 rounded-lg hover:bg-white/30 transition-all duration-300 hover:scale-105 font-medium text-gray-900 hover:text-blue-600">Our Story</Link>
                    <Link to="/about/mission-vision" className="block px-4 py-3 rounded-lg hover:bg-white/30 transition-all duration-300 hover:scale-105 font-medium text-gray-900 hover:text-blue-600">Mission & Vision</Link>
                    <Link to="/about/goals-objectives" className="block px-4 py-3 rounded-lg hover:bg-white/30 transition-all duration-300 hover:scale-105 font-medium text-gray-900 hover:text-blue-600">Goals & Objectives</Link>
                  </div>
                )}
              </div>

              <Link to="/donate" className="nav-link">Donate</Link>
              <Link to="/contact" className="nav-link">Contact Us</Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link to="/contact" className="bg-gradient-to-r from-utavuGreen to-utavuPurple text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg">
                Partner with Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu - Outside Header */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-y-0 right-0 w-80 glass-modal shadow-2xl z-[9999] overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <Link to="/">
                <img 
                  src="/public/Screenshot from 2025-09-13 09-59-58.png" 
                  alt="Utavu Foundation" 
                  className="h-12 w-auto"
                />
              </Link>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X className="w-6 h-6 text-gray-600 hover:text-gray-900 transition-colors" />
              </button>
            </div>

            <nav className="space-y-4">
              <div className="space-y-2">
                <div className="font-medium text-gray-900">Focus Areas</div>
                {focusAreas.map((area) => (
                  <Link key={area.name} to={area.path} className="block py-3 pl-4 text-gray-700 hover:text-blue-600 hover:bg-white/30 rounded-lg transition-all duration-300 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                    {area.name}
                  </Link>
                ))}
              </div>
              
              <div className="space-y-2">
                <div className="font-medium text-gray-900">Our Services</div>
                {services.map((service) => (
                  <Link key={service.name} to={service.path} className="block py-3 pl-4 text-gray-700 hover:text-blue-600 hover:bg-white/30 rounded-lg transition-all duration-300 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                    {service.name}
                  </Link>
                ))}
              </div>
              
              <Link to="/insights" className="block py-3 text-gray-700 hover:text-blue-600 hover:bg-white/30 rounded-lg transition-all duration-300 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Insights</Link>
              <Link to="/events" className="block py-3 text-gray-700 hover:text-blue-600 hover:bg-white/30 rounded-lg transition-all duration-300 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Events / Programs</Link>
              <Link to="/partnerships" className="block py-3 text-gray-700 hover:text-blue-600 hover:bg-white/30 rounded-lg transition-all duration-300 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Partnerships</Link>
              <Link to="/testimonials" className="block py-3 text-gray-700 hover:text-blue-600 hover:bg-white/30 rounded-lg transition-all duration-300 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</Link>
              
              <div className="space-y-2">
                <div className="font-medium text-gray-900">About Us</div>
                <Link to="/about/our-story" className="block py-3 pl-4 text-gray-700 hover:text-blue-600 hover:bg-white/30 rounded-lg transition-all duration-300 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Our Story</Link>
                <Link to="/about/mission-vision" className="block py-3 pl-4 text-gray-700 hover:text-blue-600 hover:bg-white/30 rounded-lg transition-all duration-300 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Mission & Vision</Link>
                <Link to="/about/goals-objectives" className="block py-3 pl-4 text-gray-700 hover:text-blue-600 hover:bg-white/30 rounded-lg transition-all duration-300 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Goals & Objectives</Link>
              </div>
              
              <Link to="/donate" className="block py-3 text-gray-700 hover:text-blue-600 hover:bg-white/30 rounded-lg transition-all duration-300 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Donate</Link>
              <Link to="/contact" className="block py-3 text-gray-700 hover:text-blue-600 hover:bg-white/30 rounded-lg transition-all duration-300 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
            </nav>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <Link to="/contact" className="btn-primary w-full mb-6 text-center block" onClick={() => setIsMobileMenuOpen(false)}>
                Partner with Us
              </Link>
              <div className="text-sm text-gray-600 space-y-2">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@utavu.org</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Mon–Fri 8:00–17:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-[9998]"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;