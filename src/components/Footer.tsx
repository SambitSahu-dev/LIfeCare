import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, MessageSquare, ExternalLink, Heart, Clock } from 'lucide-react';
import logo from '../assets/Life Care Logo_1.png';
import sahnarLogo from '../assets/sahnar_logo_1.png';
import { FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => {
  const handleMenuClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Top Row - Company Info (left) + Address (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <button
                onClick={() => handleMenuClick('home')}
                className="flex items-center space-x-3 focus:outline-none"
              >
                <img src={logo} alt="Life Care Logo" className="h-12 w-auto" />
              </button>
              <div>
                <h2 className="text-2xl font-bold">Life Care</h2>
                <p className="text-blue-400">Physiotherapy Clinic</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 max-w-md">
              Leading physiotherapy clinic in Bhubaneswar specializing in advanced treatment for back pain, arthritis, sports injuries, neurological conditions, and post-surgical rehabilitation.
            </p>

            {/* Quick Contact */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-2 text-blue-400" />
                <a href="tel:8093909684" className="hover:text-blue-400">8093909684</a>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-2 text-blue-400" />
                <a href="mailto:lifecarephysios@gmail.com" className="hover:text-blue-400">lifecarephysios@gmail.com</a>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 mt-4 justify-center md:justify-start">
              <a
                href="https://www.instagram.com/drphysiocare01/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="bg-gray-800 hover:bg-pink-600 p-2 rounded-lg transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61579179634196"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="bg-gray-800 hover:bg-blue-600 p-2 rounded-lg transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/918093909684?text=Hello Team Life Care Physiotherapy Clinic, I would like to inquire about your services. Please contact me at your earliest convenience. "
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="bg-gray-800 hover:bg-green-600 p-2 rounded-lg transition-colors"
              >
                <FaWhatsapp size={22} />
              </a>
            </div>

            {/* Book Appointment Button */}
            <div className="mt-4 flex justify-center md:justify-start">
              <a
                href="https://forms.gle/6DwCUEpJGZzWqpUp8"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-2xl shadow-md transition"
              >
                Book Appointment
              </a>
            </div>
          </div>

          {/* Address + Map */}
          <div className="flex flex-col lg:flex-row items-start">
            <div className="flex items-start mr-6">
              <MapPin className="w-5 h-5 text-blue-400 mt-1 mr-3 flex-shrink-0" />
              <div className="text-gray-300">
                <p className="font-semibold mb-1">Visit Our Clinic</p>
                <p className="text-sm">
                  
                  Lifecare Physiotherapy Clinic<br />
                  Infront of Gate No.2, 7th Battalion,<br />
                  MIG 23 Samant Vihar, NALCO Square, Chandrasekharpur,<br />                  
                  Bhubaneswar, Odisha – 751016
                </p>

                <div className="mt-3">
                  <a
                    href="https://www.google.com/maps/place/Lifecare+Physiotherapy+Clinic/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-xs font-medium transition-colors"
                  >
                    View on Map
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>

                {/* Working Hours just below View on Map */}
                <div className="mt-4 flex items-start">
                  <Clock className="w-4 h-5 text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Working Hours</p>
                    <p className="text-sm">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                    <p className="text-sm">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 lg:mt-0 w-full lg:w-[350px] h-[220px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                //src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.646674453694!2d85.81806749678954!3d20.314886899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909c0d3ce24e5%3A0x19e28de7e96e39d7!2sLife%20Care%20Neuro%20Clinic!5e0!3m2!1sen!2sin!4v1756137497114!5m2!1sen!2sin"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.6452891673475!2d85.822771!3d20.3149442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19097a23bc811b%3A0x5438ecae41594977!2sLifecare%20Physiotherapy%20Clinic!5e0!3m2!1sen!2sin!4v1756141877570!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <p className="text-gray-400 text-sm mb-2 sm:mb-0">
              © 2025 Life Care Physiotherapy Clinic. All rights reserved.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-between w-full sm:w-auto space-y-2 sm:space-y-0 sm:space-x-6">
              <div className="flex justify-center items-center text-gray-400 text-sm space-x-2">
                <span>Made By</span>
                <a href="https://www.sahnar.in" target="_blank" rel="noopener noreferrer">
                  <img 
                    src={sahnarLogo}
                    alt="Sahnar Technologies Logo"
                    className="h-5 w-auto object-contain"
                  />
                </a>
                <span>SAHNAR TECHNOLOGIES Pvt. Ltd.</span>
                <span>with</span>
                <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" />
                <span>for better health</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
