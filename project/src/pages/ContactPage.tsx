import React, { useState } from 'react';
import { FiPhone, FiMapPin, FiClock, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import SEO from '../components/SEO';

const ContactPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "LodgingBusiness",
      "name": "Amrutham Lodge & Residency",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "4-1-920, Nellore Road, Sivanagar, Police Station Area",
        "addressLocality": "Badvel",
        "addressRegion": "Andhra Pradesh",
        "postalCode": "516227",
        "addressCountry": "IN"
      },
      "telephone": "+91-8884400400",
      "url": "https://wa.me/918884400400",
      "openingHours": "Mo-Su 00:00-23:59",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "14.7421",
        "longitude": "79.0641"
      }
    }
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    const whatsappMessage = `Hello! I'm interested in booking a room at Amrutham Lodge & Residency.%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/918884400400?text=${whatsappMessage}`, '_blank');
  };

  const contactInfo = [
    {
      icon: <FiMapPin className="text-2xl text-teal-600" />,
      title: 'Address',
      details: '4-1-920, Nellore Road, Sivanagar, Police Station Area, Badvel, AP',
      action: null
    },
    {
      icon: <FiPhone className="text-2xl text-teal-600" />,
      title: 'Phone',
      details: '8884400400',
      action: 'tel:8884400400'
    },
    {
      icon: <FaWhatsapp className="text-2xl text-teal-600" />,
      title: 'WhatsApp',
      details: 'Chat with us on WhatsApp',
      action: 'https://wa.me/918884400400'
    },
    {
      icon: <FiClock className="text-2xl text-teal-600" />,
      title: 'Reception Hours',
      details: '24/7 Available',
      action: null
    }
  ];

  return (
    <>
      <SEO 
        title="Contact" 
        description="Contact Amrutham Lodge & Residency in Badvel, Andhra Pradesh. Call +91-8884400400 or WhatsApp us for bookings and inquiries. Located at 4-1-920, Nellore Road, Sivanagar, just 1 km from bus stand."
        keywords="contact amrutham lodge, badvel hotel contact, phone number, address, whatsapp booking, lodge booking badvel, hotel reservation"
        structuredData={structuredData}
      />
      
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're here to help you with your reservation and answer any questions you may have. 
              Get in touch with us today!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-8">Get in Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {info.icon}
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{info.title}</h3>
                        {info.action ? (
                          <a
                            href={info.action}
                            target={info.action.startsWith('https') ? '_blank' : '_self'}
                            rel={info.action.startsWith('https') ? 'noopener noreferrer' : ''}
                            className="text-gray-600 hover:text-teal-600 transition-colors duration-200"
                          >
                            {info.details}
                          </a>
                        ) : (
                          <p className="text-gray-600">{info.details}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="mt-8 bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:8884400400"
                    className="flex items-center justify-center space-x-2 bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200 transform hover:scale-105"
                  >
                    <FiPhone />
                    <span>Call Now</span>
                  </a>
                  <a
                    href="https://wa.me/918884400400"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 transform hover:scale-105"
                  >
                    <FaWhatsapp />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200"
                    placeholder="Tell us about your booking requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200 transform hover:scale-105"
                >
                  Send Message via WhatsApp
                </button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16 bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Find Us on Map</h2>
            <div className="aspect-video w-full bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.1234567890123!2d79.1234567890123!3d14.1234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBadvel%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Amrutham Lodge & Residency Location"
              />
            </div>
            <div className="mt-4 text-sm text-gray-600">
              <p><strong>Location:</strong> 4-1-920, Nellore Road, Sivanagar, Police Station Area, Badvel, AP</p>
              <p><strong>Landmark:</strong> Just 1 km from Badvel Bus Stand</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;