import React from 'react';
import { FiWifi, FiMonitor, FiShield, FiClock, FiCoffee } from 'react-icons/fi';
import { MdLocalLaundryService, MdRoomService, MdLocalParking, MdElevator } from 'react-icons/md';
import { FaHotjar, FaBed } from 'react-icons/fa';
import SEO from '../components/SEO';

const FacilitiesPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Facilities at Amrutham Lodge & Residency",
    "description": "Complete list of amenities and facilities available at Amrutham Lodge & Residency",
    "itemListElement": [
      {
        "@type": "Thing",
        "position": 1,
        "name": "Free Wi-Fi",
        "description": "High-speed internet connectivity throughout the premises"
      },
      {
        "@type": "Thing",
        "position": 2,
        "name": "Free Parking",
        "description": "Secure parking space for cars and two-wheelers"
      },
      {
        "@type": "Thing",
        "position": 3,
        "name": "24/7 Hot Water",
        "description": "Round-the-clock hot water supply in all rooms"
      },
      {
        "@type": "Thing",
        "position": 4,
        "name": "CCTV Surveillance",
        "description": "24/7 security monitoring for guest safety"
      }
    ]
  };

  const facilities = [
    {
      icon: <FiWifi className="text-3xl text-teal-600" />,
      title: 'Free Wi-Fi',
      description: 'High-speed internet connectivity throughout the premises'
    },
    {
      icon: <MdLocalParking className="text-3xl text-teal-600" />,
      title: 'Free Parking',
      description: 'Secure parking space for cars and two-wheelers'
    },
    {
      icon: <FaHotjar className="text-3xl text-teal-600" />,
      title: 'Hot Water',
      description: '24/7 hot water supply in all rooms'
    },
    {
      icon: <FiShield className="text-3xl text-teal-600" />,
      title: 'CCTV Surveillance',
      description: 'Round-the-clock security monitoring'
    },
    {
      icon: <FiMonitor className="text-3xl text-teal-600" />,
      title: 'Television',
      description: 'Cable TV with multiple channels in all rooms'
    },
    {
      icon: <MdElevator className="text-3xl text-teal-600" />,
      title: 'Lift Access',
      description: 'Convenient elevator service to all floors'
    },
    {
      icon: <MdRoomService className="text-3xl text-teal-600" />,
      title: 'Room Service',
      description: '24/7 room service for your convenience'
    },
    {
      icon: <MdLocalLaundryService className="text-3xl text-teal-600" />,
      title: 'Housekeeping',
      description: 'Daily housekeeping and maintenance service'
    },
    {
      icon: <FiClock className="text-3xl text-teal-600" />,
      title: 'Early Check-in',
      description: 'Flexible check-in times based on availability'
    },
    {
      icon: <FaBed className="text-3xl text-teal-600" />,
      title: 'Extra Bedding',
      description: 'Additional bedding available on request'
    }
  ];

  return (
    <>
      <SEO 
        title="Facilities" 
        description="Discover comprehensive facilities at Amrutham Lodge & Residency Badvel. Free Wi-Fi, parking, 24/7 hot water, CCTV surveillance, room service, housekeeping, lift access, and more amenities for your comfort."
        keywords="hotel facilities badvel, lodge amenities, wifi badvel, parking, cctv, room service, housekeeping, lift access, hot water, tv facilities"
        structuredData={structuredData}
      />
      
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Facilities & Amenities</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive facilities to ensure your stay is comfortable, 
              convenient, and memorable. Every amenity is designed with your comfort in mind.
            </p>
          </div>

          {/* Facilities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group hover:transform hover:scale-105"
              >
                <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {facility.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{facility.title}</h3>
                <p className="text-gray-600 leading-relaxed">{facility.description}</p>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 bg-white p-8 rounded-xl shadow-lg">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">More About Our Services</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                At Amrutham Lodge & Residency, we go beyond just providing a place to stay. 
                Our dedicated staff ensures that every guest receives personalized attention and 
                all your needs are met promptly. We maintain the highest standards of cleanliness 
                and hygiene throughout our property.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:8884400400"
                  className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200 transform hover:scale-105"
                >
                  Call for More Info
                </a>
                <a
                  href="https://wa.me/918884400400"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 transform hover:scale-105"
                >
                  WhatsApp Query
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FacilitiesPage;