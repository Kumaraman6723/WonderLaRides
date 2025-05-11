import React from "react";
import Header from "../components/Header";
import RidesSection from "../components/RidesSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#253251] text-white font-poppins relative overflow-x-hidden">
      {/* Fixed Header (stays at top while scrolling) */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* Increased gap using pt-24 (6rem = 96px) */}
      <div className="pt-24">
        <RidesSection />
      </div>
    </div>
  );
};

export default Home;
