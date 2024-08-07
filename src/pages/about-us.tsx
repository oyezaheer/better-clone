// pages/about-us.tsx
import { useState, useEffect } from 'react';
import HeroSection from '../components/AboutUs/HeroSection';
import CompanyOverview from '../components/AboutUs/CompanyOverview';
import OurStory from '../components/AboutUs/OurStory';
import BackedBy from '../components/AboutUs/BackedBy';
import CompanyTimeline from '../components/AboutUs/CompanyTimeline';
import Navbar from '../components/Navbar';
import Footer from "../components/Home/Footer";


const AboutUs: React.FC = () => {
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
      <Navbar isActive={!isActive} />
      <div id="heroSection">
      <HeroSection />
      <CompanyOverview />
      <OurStory />
      <BackedBy/>
      <CompanyTimeline />
      <Footer />
      </div>
      
      
      
    </div>
  );
};

export default AboutUs;
