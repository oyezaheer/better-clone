// pages/start/index.tsx
import React from 'react';
import Header from '../components/Start/Header';
// import HelpOptions from '../components/Start/HelpOptions';
import Stats from '../components/Start/Stats';
import Footer from '../components/Home/Footer';


const Start: React.FC = () => {
  return (
      <div>
        <Header />
        {/* <HelpOptions /> */}
        <Stats />
        <Footer />
      </div>
  );
};

export default Start;