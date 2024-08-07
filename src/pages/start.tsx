import React from 'react';
import Header from '../components/Start/Header';
import Stats from '../components/Start/Stats';
import Footer from '../components/Home/Footer';

const Start: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="pt-20"> {/* Add top padding to account for fixed Header */}
        <Stats />
        
      </main>
      <Footer />
    </div>
  );
};

export default Start;
