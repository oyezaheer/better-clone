import React from "react";
const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="mt-24 relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl text-green-800 ">Our mission</h1>
        <p className="mt-20 text-black lg:text-5xl sm:text-2xl mr-10 ml-10">
          <span className="block md:hidden">We&apos;re making homeownership simpler, faster — and most importantly, more accessible for all Americans.</span>
          <span className="hidden md:block">We&apos;re making homeownership simpler, faster — and <br /> most importantly, more accessible for all Americans.</span>
        </p>
        
         </div>
    </section>
  );
};

export default HeroSection;
