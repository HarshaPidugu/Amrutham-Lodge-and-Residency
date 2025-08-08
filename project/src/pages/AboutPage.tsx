import React from 'react';
import { FiMapPin, FiUsers, FiHeart, FiStar } from 'react-icons/fi';
import SEO from '../components/SEO';

const AboutPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "LodgingBusiness",
      "name": "Amrutham Lodge & Residency",
      "description": "Family-friendly lodge in Badvel offering comfortable accommodation with modern amenities and warm hospitality since our establishment.",
      "foundingDate": "2020",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "4-1-920, Nellore Road, Sivanagar, Police Station Area",
        "addressLocality": "Badvel",
        "addressRegion": "Andhra Pradesh",
        "postalCode": "516227",
        "addressCountry": "IN"
      },
      "telephone": "+91-8884400400"
    }
  };

  const values = [
    {
      icon: <FiHeart className="text-3xl text-teal-600" />,
      title: 'Hospitality',
      description: 'Warm, welcoming service that makes you feel at home'
    },
    {
      icon: <FiStar className="text-3xl text-teal-600" />,
      title: 'Quality',
      description: 'Maintaining the highest standards in cleanliness and comfort'
    },
    {
      icon: <FiUsers className="text-3xl text-teal-600" />,
      title: 'Family-Friendly',
      description: 'A safe and comfortable environment for all ages'
    },
    {
      icon: <FiMapPin className="text-3xl text-teal-600" />,
      title: 'Convenience',
      description: 'Strategically located for easy access to transportation'
    }
  ];

  return (
    <>
      <SEO 
        title="About Us" 
        description="Learn about Amrutham Lodge & Residency - your trusted home away from home in Badvel, Andhra Pradesh. We offer clean, affordable, family-friendly accommodation with modern amenities, warm hospitality, and excellent service since our establishment."
        keywords="about amrutham lodge, badvel accommodation, family lodge, budget hotel badvel, hospitality badvel, comfortable stay, clean rooms, family friendly"
        structuredData={structuredData}
      />
      
      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Amrutham Lodge & Residency</h1>
            <p className="text-xl text-teal-100">
              Your trusted partner for comfortable stays in Badvel since our establishment
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Welcome to Amrutham Lodge & Residency, your home away from home in Badvel. 
                Located just 1 km from the bus stand, we offer clean, affordable, family-friendly 
                rooms with A/C, Wi-Fi, hot water, TV, parking, and more. Our staff ensures a safe 
                and comfortable stay for every guest.
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-8">
                At Amrutham Lodge & Residency, we understand that every traveler seeks comfort, 
                safety, and value for money. Our property has been thoughtfully designed to cater 
                to the needs of business travelers, families, and tourists alike. We take pride 
                in maintaining the highest standards of cleanliness and hygiene while providing 
                personalized service that makes your stay memorable.
              </p>
            </div>

            {/* Location Highlight */}
            <div className="bg-teal-50 p-6 rounded-lg mb-8">
              <div className="flex items-start space-x-4">
                <FiMapPin className="text-teal-600 text-2xl mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Prime Location</h3>
                  <p className="text-gray-600">
                    Strategically located in Sivanagar, near the Police Station Area, we are 
                    just 1 km from Badvel Bus Stand, making us easily accessible for travelers 
                    arriving by bus. Our location offers the perfect balance of convenience 
                    and tranquility.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Experience Our Hospitality</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We look forward to welcoming you to Amrutham Lodge & Residency. 
              Contact us today to make your reservation or to learn more about our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8884400400"
                className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200 transform hover:scale-105"
              >
                Call Us Now
              </a>
              <a
                href="https://wa.me/918884400400"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 transform hover:scale-105"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;