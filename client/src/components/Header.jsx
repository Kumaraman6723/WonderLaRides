import React, { useState, useRef, useEffect } from "react";
import {
  MapPin,
  Gift,
  RefreshCw,
  Building,
  Calendar,
  ChevronDown,
} from "lucide-react";
import Sidebar from "./Sidebar";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  const [hoveredLocation, setHoveredLocation] = useState(null);
  const locationsRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        locationsRef.current &&
        !locationsRef.current.contains(event.target)
      ) {
        setIsLocationsOpen(false);
        setHoveredLocation(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const locations = [
    {
      name: "KOCHI",
      image:
        "https://d22pimhl2qmbj7.cloudfront.net/public/Kochi_cb42a7a748.jpg?w=96&q=75",
    },
    {
      name: "BENGALURU",
      image:
        "https://d22pimhl2qmbj7.cloudfront.net/public/Bangalore_a29cdf2e2c.jpg?w=96&q=75",
      hasSubOptions: true,
    },
    {
      name: "HYDERABAD",
      image:
        "https://d22pimhl2qmbj7.cloudfront.net/public/Hyderabad_44ee040feb.jpg?w=96&q=75",
    },
    {
      name: "BHUBANESWAR",
      image:
        "https://d22pimhl2qmbj7.cloudfront.net/public/Bhubaneswar_b007f8a2ac.jpg?w=96&q=75",
    },
  ];

  const parkResortOptions = [
    {
      name: "PARK",
      image:
        "https://www.wonderla.com/_next/image?url=%2Fimages%2Fbangalore-park.png&w=96&q=75",
    },
    {
      name: "RESORT",
      image:
        "https://www.wonderla.com/_next/image?url=%2Fimages%2Fbangalore-resort.png&w=96&q=75",
    },
  ];

  return (
    <>
      <header className="bg-white py-2 px-8 flex justify-between items-center rounded-full mx-6 my-3 shadow-md">
        <div className="logo">
          <img
            src="https://d22pimhl2qmbj7.cloudfront.net/public/Main_Logo_0ad2299b54.png?w=256&q=75"
            alt="Wonderla Logo"
            className="h-12 w-auto"
          />
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <div className="relative" ref={locationsRef}>
            <button
              onClick={() => setIsLocationsOpen(!isLocationsOpen)}
              className="text-gray-600 text-sm flex items-center hover:text-blue-600 focus:outline-none font-bold"
            >
              <MapPin className="h-5 w-5 mr-1 text-gray-400" />
              LOCATIONS
              <ChevronDown
                className={`h-4 w-4 ml-1 transition-transform duration-200 ${
                  isLocationsOpen ? "transform rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {isLocationsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute z-50 mt-2 bg-white rounded-lg shadow-xl w-[300px]"
                >
                  {locations.map((location) => (
                    <div
                      key={location.name}
                      className="relative"
                      onMouseEnter={() =>
                        location.hasSubOptions &&
                        setHoveredLocation(location.name)
                      }
                      onMouseLeave={() => setHoveredLocation(null)}
                    >
                      <div className="flex items-center p-3 hover:bg-gray-50 cursor-pointer border-b last:border-b-0 border-gray-100">
                        <img
                          src={location.image}
                          alt={location.name}
                          className="w-[50px] h-[50px] rounded-md object-cover"
                        />
                        <div className="flex-1 ml-3">
                          <p className="font-medium text-black">
                            {location.name}
                          </p>
                        </div>
                        {location.hasSubOptions && (
                          <ChevronDown className="h-4 w-4 transform -rotate-90 text-gray-400" />
                        )}
                      </div>

                      {hoveredLocation === location.name &&
                        location.hasSubOptions && (
                          <motion.div
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-full top-0 bg-white rounded-lg shadow-xl w-[250px] ml-2"
                          >
                            {parkResortOptions.map((option) => (
                              <div
                                key={option.name}
                                className="flex items-center p-3 hover:bg-gray-50 cursor-pointer border-b last:border-b-0 border-gray-100"
                              >
                                <img
                                  src={option.image}
                                  alt={option.name}
                                  className="w-[50px] h-[50px] rounded-md object-cover"
                                />
                                <div className="flex-1 ml-3">
                                  <p className="font-medium text-black">
                                    {option.name}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </motion.div>
                        )}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <a
            href="#"
            className="text-gray-600 text-sm flex items-center hover:text-blue-600 font-bold"
          >
            <Gift className="h-5 w-5 mr-1 text-gray-400" />
            OFFERS
          </a>
          <a
            href="#"
            className="text-gray-600 text-sm flex items-center hover:text-blue-600 font-bold"
          >
            <RefreshCw className="h-5 w-5 mr-1 text-gray-400" />
            RIDES
          </a>
          <a
            href="#"
            className="text-gray-600 text-sm flex items-center hover:text-blue-600 font-bold"
          >
            <Building className="h-5 w-5 mr-1 text-gray-400" />
            RESTAURANTS
          </a>
          <a
            href="#"
            className="text-gray-600 text-sm flex items-center hover:text-blue-600 font-bold"
          >
            <Calendar className="h-5 w-5 mr-1 text-gray-400" />
            EVENTS
          </a>
        </nav>
        <div className="flex items-center">
          <button className="bg-[#FFD700] hover:bg-yellow-500 text-black font-medium text-sm py-2 px-5 rounded-md flex items-center mr-4">
            BOOK TICKETS
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button className="text-gray-600" onClick={toggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
