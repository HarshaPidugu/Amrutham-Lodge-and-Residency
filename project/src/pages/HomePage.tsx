import React from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiMapPin, FiWifi, FiShield, FiClock } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { MdLocalLaundryService } from 'react-icons/md';
import SEO from '../components/SEO';

const HomePage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": "Amrutham Lodge & Residency",
    "description": "Comfortable and affordable accommodation in Badvel, Andhra Pradesh with modern amenities and warm hospitality.",
    "url": "https://amruthamlodge.com",
    "telephone": "+91-8884400400",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4-1-920, Nellore Road, Sivanagar, Police Station Area",
      "addressLocality": "Badvel",
      "addressRegion": "Andhra Pradesh",
      "postalCode": "516227",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "14.7421",
      "longitude": "79.0641"
    },
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Free WiFi",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Air Conditioning",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Parking",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "24/7 Hot Water",
        "value": true
      }
    ],
    "priceRange": "₹₹",
    "starRating": {
      "@type": "Rating",
      "ratingValue": "4.5"
    },
    "image": [
      "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ]
  };

  const highlights = [
    {
      icon: <MdLocalLaundryService className="text-2xl text-teal-600" />,
      title: 'Clean Rooms',
      description: 'Spotlessly clean and well-maintained rooms'
    },
    {
      icon: <FiClock className="text-2xl text-teal-600" />,
      title: '24x7 Water Supply',
      description: 'Round-the-clock water availability'
    },
    {
      icon: <FiMapPin className="text-2xl text-teal-600" />,
      title: 'Near Bus Stand',
      description: 'Just 1 km from Badvel bus stand'
    },
    {
      icon: <FiWifi className="text-2xl text-teal-600" />,
      title: 'Free Wi-Fi',
      description: 'Complimentary high-speed internet'
    },
    {
      icon: <FiShield className="text-2xl text-teal-600" />,
      title: 'Safe & Secure',
      description: '24/7 CCTV surveillance'
    }
  ];

  return (
    <>
      <SEO 
        title="Home" 
        description="Amrutham Lodge & Residency offers comfortable and affordable accommodation in Badvel, Andhra Pradesh. Clean rooms, modern amenities, free WiFi, parking, and warm hospitality just 1 km from bus stand. Book your stay today!"
        keywords="lodge badvel, hotel badvel, accommodation badvel, amrutham lodge, andhra pradesh lodge, budget hotel badvel, rooms badvel, stay badvel, badvel accommodation, ap lodge"
        structuredData={structuredData}
      />
      
      <div className="pt-16">
        {/* Hero Section */}
        <div className="relative h-screen flex items-center justify-center bg-gradient-to-r from-teal-600 to-teal-800">
          <div 
            className="absolute inset-0 bg-black opacity-40"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
          <div className="relative text-center text-white px-4 max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Amrutham Lodge
              <span className="block text-3xl md:text-4xl text-teal-200 mt-2">& Residency</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
              Your home away from home in Badvel. Experience comfort, cleanliness, and warm hospitality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:8884400400"
                className="flex items-center space-x-2 bg-white text-teal-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
              >
                <FiPhone />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/918884400400"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 transform hover:scale-105"
              >
                <FaWhatsapp />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Highlights Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Experience the perfect blend of comfort, convenience, and affordability
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group hover:transform hover:scale-105"
                >
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{highlight.title}</h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-16 bg-teal-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Book Your Stay?</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/rooms"
                className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
              >
                View Rooms
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-teal-600 transition-colors duration-200 transform hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;