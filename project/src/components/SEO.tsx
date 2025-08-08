import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  keywords, 
  image = 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&dpr=2',
  url = 'https://amruthamlodge.com',
  type = 'website',
  structuredData
}) => {
  const siteName = 'Amrutham Lodge & Residency';
  const fullTitle = title === 'Home' ? `${siteName} - Comfortable Stay in Badvel, AP` : `${title} - ${siteName}`;
  const fullUrl = url + (title === 'Home' ? '' : `/${title.toLowerCase().replace(/\s+/g, '-')}`);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Amrutham Lodge & Residency" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO Tags */}
      <meta name="geo.region" content="IN-AP" />
      <meta name="geo.placename" content="Badvel, Andhra Pradesh" />
      <meta name="geo.position" content="14.7421;79.0641" />
      <meta name="ICBM" content="14.7421, 79.0641" />

      {/* Business Information */}
      <meta name="business:contact_data:street_address" content="4-1-920, Nellore Road, Sivanagar" />
      <meta name="business:contact_data:locality" content="Badvel" />
      <meta name="business:contact_data:region" content="Andhra Pradesh" />
      <meta name="business:contact_data:postal_code" content="516227" />
      <meta name="business:contact_data:country_name" content="India" />
      <meta name="business:contact_data:phone_number" content="+91-8884400400" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;