import React from 'react';
import Header from '../components/Header';
import RidesSection from '../components/RidesSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#253251] text-white font-poppins relative overflow-x-hidden">
      <Header />
      <RidesSection />
    </div>
  );
};

export default Home;
