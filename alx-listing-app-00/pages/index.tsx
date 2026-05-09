import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import PropertyCard from '../components/common/PropertyCard';
import { PROPERTYLISTINGSAMPLE } from '../constants';

const Home: React.FC = () => {
  const [properties, setProperties] = useState(PROPERTYLISTINGSAMPLE);

  const handleSearch = (data: { location: string; checkIn: string; checkOut: string; guests: number }) => {
    const filtered = PROPERTYLISTINGSAMPLE.filter((prop) =>
      prop && prop.address.city.toLowerCase().includes(data.location.toLowerCase())
    );
    setProperties(filtered);
  };

  return (
    <Layout onSearch={handleSearch}>
      <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property, index) => (
          <PropertyCard key={index} property={property} />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
