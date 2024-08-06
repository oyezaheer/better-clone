// pages/index.tsx
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/Home/HeroSection";
import FeaturesSection from "../components/Home/FeatureSection";
import CTASection from "../components/Home/CTASection";
import Footer from "../components/Home/Footer";

const Home: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const handleScroll = () => {
    const heroSectionHeight = document.getElementById("heroSection")?.offsetHeight || 0;
    setIsActive(window.scrollY > heroSectionHeight);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar isActive={isActive} />
      <div id="heroSection">
        <HeroSection />
      </div>
      <FeaturesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;
