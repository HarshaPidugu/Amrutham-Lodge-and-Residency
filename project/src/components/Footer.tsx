import React from 'react';
import { Link } from 'react-router-dom';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FiMapPin className="text-teal-400 mt-1" />
                <p className="text-sm">
                  4-1-920, Nellore Road, Sivanagar,<br />
                  Police Station Area, Badvel, AP
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <FiPhone className="text-teal-400" />
                <a href="tel:8884400400" className="text-sm hover:text-teal-400 transition-colors">
                  8884400400
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaWhatsapp className="text-teal-400" />
                <a 
                  href="https://wa.me/918884400400" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm hover:text-teal-400 transition-colors"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-sm hover:text-teal-400 transition-colors">Home</Link>
              <Link to="/rooms" className="block text-sm hover:text-teal-400 transition-colors">Rooms</Link>
              <Link to="/facilities" className="block text-sm hover:text-teal-400 transition-colors">Facilities</Link>
              <Link to="/about" className="block text-sm hover:text-teal-400 transition-colors">About Us</Link>
              <Link to="/contact" className="block text-sm hover:text-teal-400 transition-colors">Contact</Link>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Amrutham Lodge & Residency</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Your comfortable stay in Badvel. Clean rooms, modern amenities, and warm hospitality 
              just 1 km from the bus stand.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2025 Amrutham Lodge & Residency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;