import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import SEO from '../components/SEO';

const GalleryPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Amrutham Lodge & Residency Photo Gallery",
    "description": "Photo gallery showcasing rooms, facilities, and interiors of Amrutham Lodge & Residency in Badvel",
    "about": {
      "@type": "LodgingBusiness",
      "name": "Amrutham Lodge & Residency"
    }
  };

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Luxury Room Interior',
      category: 'Rooms'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Deluxe A/C Room',
      category: 'Rooms'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Standard Room',
      category: 'Rooms'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Premium Suite',
      category: 'Rooms'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Lodge Exterior',
      category: 'Exterior'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Reception Area',
      category: 'Interior'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Lobby Seating',
      category: 'Interior'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Corridor View',
      category: 'Interior'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/2725675/pexels-photo-2725675.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Bathroom Facilities',
      category: 'Facilities'
    }
  ];

  const categories = ['All', 'Rooms', 'Interior', 'Exterior', 'Facilities'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <SEO 
        title="Gallery" 
        description="Browse our photo gallery showcasing rooms, facilities, and interiors of Amrutham Lodge & Residency in Badvel. See our clean, comfortable accommodations, modern amenities, and welcoming atmosphere."
        keywords="hotel photos badvel, room images, lodge gallery, accommodation photos, badvel hotel images, interior photos, facility images, room gallery"
        structuredData={structuredData}
      />
      
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Gallery</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Take a virtual tour of our lodge and see what makes us special. 
              Explore our clean, comfortable rooms and modern facilities.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  activeCategory === category
                    ? 'bg-teal-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-teal-50 hover:text-teal-600 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                onClick={() => openModal(image.src)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800">{image.alt}</h3>
                  <p className="text-sm text-gray-500">{image.category}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          {selectedImage && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90"
              onClick={closeModal}
            >
              <div className="relative max-w-4xl max-h-full">
                <img
                  src={selectedImage}
                  alt="Enlarged view"
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors duration-200"
                >
                  <FiX size={24} />
                </button>
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-16 text-center bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Experience It Yourself?</h2>
            <p className="text-gray-600 mb-6">
              Book your stay with us and experience the comfort and hospitality shown in these photos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8884400400"
                className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200 transform hover:scale-105"
              >
                Call to Book
              </a>
              <a
                href="https://wa.me/918884400400"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 transform hover:scale-105"
              >
                WhatsApp Inquiry
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryPage;