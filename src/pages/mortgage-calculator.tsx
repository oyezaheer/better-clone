// src/components/MortgageCalculator/index.tsx
import React, { useEffect, useState } from 'react';
import CalculatorForm from '../components/MortgageCalculator/CalculatorForm';
// import ResultsSection from '../components/MortgageCalculator/ResultsSection';
// import MortgageBreakdown from '../components/MortgageCalculator/MortgageBreakdown';
import Navbar from '../components/Navbar';
import Footer from '../components/Home/Footer';

const MortgageCalculator: React.FC = () => {
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
      <CalculatorForm />
      {/* <ResultsSection />
      <MortgageBreakdown /> */}
      <Footer />
      </div>
      
    </div>
  );
};

export default MortgageCalculator;
