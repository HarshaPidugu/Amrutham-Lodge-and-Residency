import React from 'react';
import { FiWifi, FiMonitor, FiWind, FiCoffee } from 'react-icons/fi';
import { MdLocalLaundryService, MdRoomService } from 'react-icons/md';
import SEO from '../components/SEO';

const RoomsPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Room Types at Amrutham Lodge & Residency",
    "description": "Various room options available at Amrutham Lodge & Residency in Badvel",
    "itemListElement": [
      {
        "@type": "Product",
        "position": 1,
        "name": "Standard Non-A/C Room",
        "description": "Comfortable room with all basic amenities for a pleasant stay. Clean, spacious, and well-ventilated.",
        "image": "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        "@type": "Product",
        "position": 2,
        "name": "Deluxe A/C Room",
        "description": "Air-conditioned comfort with modern amenities. Perfect for travelers seeking extra comfort.",
        "image": "https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        "@type": "Product",
        "position": 3,
        "name": "Suite Room",
        "description": "Spacious suite with separate living area. Ideal for families and extended stays.",
        "image": "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        "@type": "Product",
        "position": 4,
        "name": "Luxury Room",
        "description": "Premium accommodation with luxury amenities and exceptional comfort for discerning guests.",
        "image": "https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg?auto=compress&cs=tinysrgb&w=800"
      }
    ]
  };

  const rooms = [
    {
      id: 1,
      title: 'Standard Non-A/C Room',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Comfortable room with all basic amenities for a pleasant stay. Clean, spacious, and well-ventilated.',
      amenities: ['Free Wi-Fi', 'Hot Water', 'TV', 'Room Service']
    },
    {
      id: 2,
      title: 'Deluxe A/C Room',
      image: 'https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Air-conditioned comfort with modern amenities. Perfect for travelers seeking extra comfort.',
      amenities: ['Air Conditioning', 'Free Wi-Fi', 'Hot Water', 'TV', 'Room Service']
    },
    {
      id: 3,
      title: 'Suite Room',
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Spacious suite with separate living area. Ideal for families and extended stays.',
      amenities: ['Air Conditioning', 'Separate Living Area', 'Free Wi-Fi', 'Hot Water', 'TV', 'Room Service']
    },
    {
      id: 4,
      title: 'Luxury Room',
      image: 'https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Premium accommodation with luxury amenities and exceptional comfort for discerning guests.',
      amenities: ['Premium A/C', 'Mini Fridge', 'Free Wi-Fi', 'Hot Water', 'LED TV', '24/7 Room Service']
    }
  ];

  const getIcon = (amenity: string) => {
    switch (amenity) {
      case 'Free Wi-Fi': return <FiWifi className="text-teal-600" />;
      case 'TV': case 'LED TV': return <FiMonitor className="text-teal-600" />;
      case 'Air Conditioning': case 'Premium A/C': return <FiWind className="text-teal-600" />;
      case 'Room Service': case '24/7 Room Service': return <MdRoomService className="text-teal-600" />;
      case 'Hot Water': return <MdLocalLaundryService className="text-teal-600" />;
      case 'Mini Fridge': return <FiCoffee className="text-teal-600" />;
      default: return <FiWifi className="text-teal-600" />;
    }
  };

  return (
    <>
      <SEO 
        title="Rooms" 
        description="Explore our range of comfortable rooms at Amrutham Lodge & Residency in Badvel. Standard, Deluxe A/C, Suite, and Luxury rooms with modern amenities, free WiFi, hot water, and TV. Book your perfect room today!"
        keywords="rooms badvel, hotel rooms badvel, ac rooms, non-ac rooms, suite rooms, luxury accommodation badvel, deluxe rooms, family rooms, business rooms"
        structuredData={structuredData}
      />
      
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Rooms</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our range of comfortable rooms, each designed to provide you with 
              a peaceful and enjoyable stay in Badvel.
            </p>
          </div>

          {/* Rooms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rooms.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{room.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{room.description}</p>
                  <div className="space-y-3">
                    <h4 className="font-medium text-gray-800">Amenities:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {room.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          {getIcon(amenity)}
                          <span className="text-sm text-gray-700">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Book?</h2>
            <p className="text-gray-600 mb-6">
              Contact us for room availability and special offers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8884400400"
                className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200 transform hover:scale-105"
              >
                Call for Booking
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

export default RoomsPage;