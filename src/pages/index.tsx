// pages/index.tsx
import Navbar from "../components/Navbar";
import HeroSection from "../components/Home/HeroSection";
import FeaturesSection from "../components/Home/FeatureSection";
import CTASection from "../components/Home/CTASection";
import Footer from "../components/Home/Footer";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;
