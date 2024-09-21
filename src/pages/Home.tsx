import React from 'react';
import HeroSection from '../component/HeroSection';
import ServiceSection from '../component/ServiceSection';
import FeatureProducts from '../component/FeatureProducts';
import FamousCompanies from '../component/FamousCompanies';

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <ServiceSection/>
      <FeatureProducts/>
      <FamousCompanies/>
    </div>
  );
};

export default Home;