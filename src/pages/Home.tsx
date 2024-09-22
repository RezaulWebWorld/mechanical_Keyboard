import HeroSection from '../component/HeroSection';
import ServiceSection from '../component/ServiceSection';
import FeatureProducts from '../component/FeatureProducts';
import FamousCompanies from '../component/FamousCompanies';
import CustomerReview from '../component/CustomerReview';
import FooterSection from '../component/FooterSection';


const Home = () => {
  return (
    <div>
      <HeroSection/>
      <ServiceSection/>
      <FeatureProducts/>
      <FamousCompanies/>
      <CustomerReview/>
      <FooterSection/>
    </div>
  );
};

export default Home;