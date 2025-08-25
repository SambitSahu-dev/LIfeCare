import React, { useState } from 'react';
import { Menu, X, Phone, Clock, MapPin } from 'lucide-react';
import logo from '../assets/Life Care Logo_1.png';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'doctors', label: 'Our Doctors' },
    { id: 'conditions', label: 'Conditions We Treat' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleMenuClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-blue-900 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-2 md:mb-0">
          <div className="flex items-center">
            <Phone className="w-4 h-4 mr-1 text-white" />
            <a href="tel:8093909684" className="text-white hover:text-blue-300">
              8093909684
            </a>
          </div>

            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>Mon-Sat: 9AM-9PM</span>
            </div>
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1 text-white" />
            <a 
              href="https://www.google.com/maps?q=Life+Care+Physiotherapy+Clinic+Bhubaneswar+Odisha" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm text-white hover:text-blue-300"
            >
              Bhubaneswar, Odisha
            </a>
          </div>

        </div>
      </div>

      {/* Main header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            
            {/* Logo (clickable) */}
            <button
              onClick={() => handleMenuClick('home')}
              className="flex items-center space-x-3 focus:outline-none"
            >
              <img src={logo} alt="Life Care Logo" className="h-12 w-auto" />
              <div className="text-left">
                {/*<h1 className="text-2xl font-bold text-gray-900">Life Care</h1>
                <p className="text-sm text-blue-600">Physiotherapy Clinic</p>*/}
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleMenuClick(item.id)}
                  className={`text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id ? 'text-blue-600 bg-blue-50' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Book Appointment Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="https://forms.gle/6DwCUEpJGZzWqpUp8"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Book Appointment
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleMenuClick(item.id)}
                    className={`text-left text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      activeSection === item.id ? 'text-blue-600 bg-blue-50' : ''
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <a
                  href="https://forms.gle/6DwCUEpJGZzWqpUp8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors text-center mt-4"
                >
                  Book Appointment
                </a>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;